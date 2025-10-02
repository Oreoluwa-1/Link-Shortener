"use client";

import { CopyToClipboard } from "react-copy-to-clipboard"
import { useState } from "react";

type Props = {
  original: string;
  shortened: string;
};

export default function LinkCard({ original, shortened }: Props) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="mt-5 p-4 border rounded-lg bg-gray-50">
      <p className="text-sm text-gray-600 truncate">Original: {original}</p>
      <div className="flex items-center justify-between mt-2">
        <a
          href={shortened}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 font-semibold"
        >
          {shortened}
        </a>
        <CopyToClipboard text={shortened} onCopy={() => setCopied(true)}>
          <button className="ml-3 bg-indigo-600 text-black px-4 py-2 rounded-lg hover:bg-indigo-700">
            {copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}
