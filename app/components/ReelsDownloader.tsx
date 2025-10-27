"use client";
import { Button } from "@heroui/react";
import { useState } from "react";
import { BackgroundBeamsWithCollision } from "./BeamsCollision";
import FeaturesSection from "./InstagramFeature";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface MediaItem {
  thumbnail: string;
  url: string;
}

// ✅ Define variants only once and properly typed
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

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

      console.log("Raw API Data:", data);

      if (data.media?.[0]) {
        setMediaData({
          url: data.media[0].url,
          thumbnail: `/api/thumbnail?url=${encodeURIComponent(data.media[0].thumbnail)}`,
        });
      } else {
        throw new Error("No media found in response");
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

      // Extract filename or use default
      const urlObj = new URL(mediaData.url);
      const pathParts = urlObj.pathname.split("/");
      const filename = pathParts[pathParts.length - 1] || "instagram_media";

      a.download = filename;
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {
      // Fallback if URL parsing fails
      window.open(mediaData.url, "_blank");
    }
  };

  return (
    <>
      <motion.section
        className="bg-[url(/images/instamainbg.jpg)] relative z-20 h-[1030px] md:h-screen text-white bg-cover bg-center justify-items-center bg-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <BackgroundBeamsWithCollision>
          <motion.div className="max-w-7xl relative mx-auto" variants={itemVariants}>
            {/* Top images animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/instamainbg.png"
                className="absolute top-20 xl:h-[400px] xl:w-[400px] w-[100px] h-[100px] left-0 xl:-left-24 rotate-12 select-none"
                height={400}
                width={400}
                alt="LogoMain"
              />
              <Image
                src="/images/instamainbg.png"
                className="absolute top-20 xl:h-[400px] xl:w-[400px] w-[100px] h-[100px] right-0 xl:-right-24 -rotate-12 select-none"
                height={400}
                width={400}
                alt="LogoMain"
              />
            </motion.div>

            <motion.h1
              className="text-6xl text-center relative pt-10 md:pt-20 font-bold"
              variants={itemVariants}
            >
              <motion.span
                className="bg-gradient-to-r to-[#240055] from-[#D00096] text-transparent bg-clip-text"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Instagram
              </motion.span>{" "}
              video Downloader
            </motion.h1>

            <motion.p className="text-2xl text-center relative pt-2" variants={itemVariants}>
              Download Instagram Videos, Photos, Reels
            </motion.p>

            <motion.div
              className="p-6 max-w-2xl border-2 rounded-lg border-pink-600 mx-auto mt-10 relative z-20"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div className="flex md:flex-row flex-col gap-2 mb-4" variants={itemVariants}>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  placeholder="Paste Instagram Reel URL..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="px-2 py-3 flex-1 focus:outline-none placeholder:text-white active:outline-none border-2 border-pink-600 rounded-md"
                />
                <Button
                  onClick={handleFetch}
                  className="px-4 py-2 bg-green-700 relative cursor-pointer duration-500 rounded hover:bg-green-800"
                  disabled={loading}
                >
                  {loading ? "Searching..." : "Search Reel"}
                </Button>
              </motion.div>

              {error && (
                <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}

              {mediaData && (
                <div className="mt-6 rounded-lg p-4">
                  <div className="flex flex-col justify-center items-center gap-4">
                    <div>
                      <h3 className="text-lg font-medium">Media Preview</h3>
                    </div>

                    {mediaData.thumbnail ? (
                      <div className="flex-shrink-0">
                        <Image
                          height={350}
                          width={200}
                          src={mediaData.thumbnail}
                          alt="Thumbnail"
                          className="max-w-xs mx-auto rounded-lg"
                          unoptimized
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
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
                        onPress={downloadMedia}
                        className="mt-4 px-4 py-2 bg-green-500 cursor-pointer text-white rounded hover:bg-green-600 self-start"
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </BackgroundBeamsWithCollision>
      </motion.section>

      <FeaturesSection />
    </>
  );
}
