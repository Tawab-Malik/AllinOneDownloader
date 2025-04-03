"use client";
import { Button } from "@heroui/react";
import { useState } from "react";
import { BackgroundBeamsWithCollision } from "./BeamsCollision";
import FeaturesSection from "./InstagramFeature";
import Image from "next/image";
interface MediaItem {
  thumbnail: string;
  url: string;
}

export default function NewDownloader() {
  const [url, setUrl] = useState("");
  const [mediaData, setMediaData] = useState<MediaItem | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    if (!url.trim()) {
      setError("Please enter a reel URL");
      return;
    }

    setLoading(true);
    setError("");
    setMediaData(null);

    try {
      const response = await fetch(`/api/reelsDownloader?url=${encodeURIComponent(url)}`);
      const data = await response.json();

      console.log("API Response:", data);

      if (data.success) {
        if (data.media?.[0]?.url) {
          setMediaData(data.media[0]);
        } else {
          throw new Error("No media URL found in response");
        }
      } else {
        throw new Error(data.error || "Failed to fetch reel");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching the reel.");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const downloadMedia = () => {
    if (!mediaData?.url) return;

    try {
      const a = document.createElement("a");
      a.href = mediaData.url;

      // Extract filename from URL or use default
      const urlObj = new URL(mediaData.url);
      const pathParts = urlObj.pathname.split('/');
      const filename = pathParts[pathParts.length - 1] || "instagram_media";

      a.download = filename;
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      // Fallback if URL parsing fails
      window.open(mediaData.url, "_blank");
    }
  };

  return (
    <>
      <section className="bg-[url(/images/instabg.jpg)] relative z-20 h-[1030px] md:h-screen text-white bg-cover bg-center justify-items-center  bg-white  ">
      
        <BackgroundBeamsWithCollision >
          <div className=" max-w-7xl relative mx-auto">
          <Image src="/images/instamainbg.png" className=" absolute top-20 xl:h-auto xl:w-auto w-[200px] h-[200px] -left-24 rotate-12 select-none" height={400} width={400} alt="LogoMain"/>
          <Image src="/images/instamainbg.png" className=" absolute top-20 xl:h-auto xl:w-auto w-[200px] h-[200px] -right-24 -rotate-12 select-none" height={400} width={400} alt="LogoMain"/>
          <h1 className=" text-6xl text-center relative pt-20 font-bold"> <span className="bg-gradient-to-r to-[#240055] from-[#D00096] text-transparent bg-clip-text">Instagram </span>video Downloader</h1>
          <p className=" text-2xl text-center relative pt-2">Download Instagram Videos, Photos, Reels</p>
          <div className="p-6 max-w-2xl border-2 rounded-lg border-pink-600 mx-auto mt-10 relative z-20 ">
            <div className="flex md:flex-row flex-col gap-2 mb-4">
              <input

                type="text"
                placeholder="Paste Instagram Reel URL..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="px-2 py-3 flex-1 focus:outline-none placeholder:text-white active:outline-none border-2 border-pink-600 rounded-md"
              />
              <Button
                onClick={handleFetch}
                className="px-4 py-2 bg-green-700 relative cursor-pointer duration-500 rounded hover:bg-green-800 "
                disabled={loading}

              >
                {loading ? "Searching..." : "Search Reel"}
              </Button>
            </div>

            {error && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            {mediaData && (
              <div className="mt-6  rounded-lg p-4">
                <div className="flex  flex-col justify-center items-center gap-4">
                  <div>
                    <h3 className="text-lg font-medium">Media Preview</h3>
                    {/* <p className="text-sm text-gray-600 mt-1">
                    {mediaData.url.includes('.mp4') ? 'Video' : 'Image'} content
                  </p> */}
                  </div>
                  {mediaData.thumbnail ? (
                    <div className="flex-shrink-0">
                      <img
                        src={mediaData.thumbnail}
                        alt="Thumbnail"
                        className="w-[200px] h-[350px] max-w-xs rounded-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  ) : (
                    <div className="flex-shrink-0 w-full max-w-xs bg-gray-200 rounded-lg flex items-center justify-center h-48">
                      <span className="text-gray-500">No thumbnail available</span>
                    </div>
                  )}

                  <div className="flex flex-col justify-between">


                    <Button
                      onClick={downloadMedia}
                      className="mt-4 px-4 py-2 bg-green-500 cursor-pointer text-white rounded hover:bg-green-600 self-start"
                    >
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
          </div>
          
        </BackgroundBeamsWithCollision>
      </section>


      <FeaturesSection />

    </>

  );
}