import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const reelUrl = searchParams.get("url");

  if (!reelUrl) {
    return NextResponse.json({ success: false, error: "No URL provided" });
  }

  try {
    // Replace with the correct endpoint for fetching Instagram reels.
    const apiUrl = "https://instagram-scraper-stable-api.p.rapidapi.com/search_hashtag.php?hashtag=gaming"; // Or other valid endpoint
    const fullUrl = `${apiUrl}?url=${encodeURIComponent(reelUrl)}`;
    
    const options = {
      method: "GET", // Ensure it's the correct method (GET or POST).
      headers: {
        "x-rapidapi-host": "instagram-scraper-stable-api.p.rapidapi.com",
        "x-rapidapi-key": "1c16a6f454mshae7c84600387030p12c3eejsnfcd4477eb4df", // Replace with your RapidAPI key.
      },
    };

    const response = await fetch(fullUrl, options);
    const data = await response.json();

    console.log("Reel API Response:", data);

    // Assuming the response contains the video URL
    if (data && data.video_url) {
      return NextResponse.json({ success: true, videoUrl: data.video_url });
    } else {
      return NextResponse.json({ success: false, error: "No video found" });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
