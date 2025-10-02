"use client";

import { useState } from "react";
import axios from "axios";
import LinkCard from "./LinkCard";

export default function LinkForm() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url || !/^https?:\/\//.test(url)) {
      setError("Please enter a valid URL starting with http:// or https://");
      return;
    }

    try {
      setError("");
      const res = await axios.post(
        "https://api-ssl.bitly.com/v4/shorten",
        {
          long_url: url,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_BITLY_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      setShortUrl(res.data.link);
    } catch (err) {
      setError("Something went wrong. Try again.");
      console.error(err);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">🔗 Link Shortener</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter a URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Shorten URL
        </button>
      </form>

      {error && <p className="text-red-500 mt-3">{error}</p>}

      {shortUrl && <LinkCard original={url} shortened={shortUrl} />}
    </div>
  );
}
