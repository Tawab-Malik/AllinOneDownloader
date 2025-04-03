import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const reelUrl = searchParams.get("url");

  if (!reelUrl) {
    return NextResponse.json(
      { success: false, error: "No URL provided" },
      { status: 400 }
    );
  }

  try {
    // Clean the URL by removing tracking parameters
    const cleanUrl = reelUrl.split("?")[0];

    const apiUrl = `https://instagram-downloader-download-instagram-stories-videos4.p.rapidapi.com/convert?url=${encodeURIComponent(cleanUrl)}`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "instagram-downloader-download-instagram-stories-videos4.p.rapidapi.com",
        "x-rapidapi-key": "1c16a6f454mshae7c84600387030p12c3eejsnfcd4477eb4df",
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log("Raw API Data:", data);

    // Validate the response contains actual media URLs
    if (!data.media?.[0]?.url) {
      throw new Error("API returned empty media URL");
    }

    return NextResponse.json({
      success: true,
      media: [{
        thumbnail: data.media[0].thumbnail || "",
        url: data.media[0].url || ""
      }]
    });

  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || "Failed to fetch reel",
        details: process.env.NODE_ENV === "development" ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}