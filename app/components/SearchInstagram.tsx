"use client";
import { useState } from "react";

export default function ReelDownloader() {
  const [url, setUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [error, setError] = useState("");

  const handleFetch = async () => {
    if (!url.trim()) {
      alert("Please enter a reel URL");
      return;
    }

    const response = await fetch(`/api/instagramApi?url=${encodeURIComponent(url)}`);
    const data = await response.json();

    if (data.success) {
      setVideoUrl(data.videoUrl);
      setError("");
    } else {
      setVideoUrl("");
      setError(data.error || "Failed to fetch reel");
    }
  };

  // Trigger download by creating a temporary link element.
  const downloadVideo = () => {
    if (videoUrl) {
      const a = document.createElement("a");
      a.href = videoUrl;
      a.download = "reel.mp4"; // or adjust the filename as needed
      a.click();
    }
  };

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Paste Instagram Reel URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      />
      <button onClick={handleFetch} className="px-4 py-2 bg-blue-500 text-white rounded">
        Fetch Reel
      </button>
      {error && <p className="mt-4 text-red-600">{error}</p>}
      {videoUrl && (
        <div className="mt-6">
          <video src={videoUrl} controls className="w-full max-w-md mb-4" />
          <button onClick={downloadVideo} className="px-4 py-2 bg-green-500 text-white rounded">
            Download Reel
          </button>
        </div>
      )}
    </div>
  );
}
