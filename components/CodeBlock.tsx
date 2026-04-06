'use client';

import React, { useState } from 'react';

interface CodeBlockProps {
  code: string;
}

const getHighlightedHtml = (code: string) => {
  let html = code
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    // Comments
    .replace(/(\/\/.*)/g, '<span class="text-[#c62828]">$1</span>')
    // Strings
    .replace(/("[^"]*")/g, '<span class="text-[#2e7d32]">$1</span>')
    // Characters
    .replace(/('[^']*')/g, '<span class="text-[#2e7d32]">$1</span>')
    // Preprocessor
    .replace(/(#include)\s+(&lt;.*&gt;)/g, '<span class="text-[#2e7d32]">$1</span> <span class="text-[#c62828]">$2</span>')
    // Types
    .replace(/\b(String|int|void|char|float|Servo)\b/g, '<span class="text-[#1565c0]">$1</span>')
    // Special object types/methods
    .replace(/\b(Serial|digitalWrite|pinMode|OUTPUT|LOW|read|write|begin|available|println|attach|toInt)\b/g, '<span class="text-[#f57c00]">$1</span>')
    // Keywords
    .replace(/\b(if|else|while|for|do|break|return)\b/g, '<span class="text-[#6a1b9a]">$1</span>');
  return html;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);
  const lines = code.trim().split('\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-full my-8">
      <p className="text-gray-800 font-medium mb-4">Upload the following code to your Arduino:</p>
      <button 
        onClick={handleCopy}
        className="px-6 py-2 bg-black text-white text-sm font-semibold rounded hover:bg-gray-800 transition-colors mb-4 flex items-center gap-2 shadow-sm"
      >
        {copied ? 'Copied!' : 'Copy code'}
      </button>

      <div className="bg-[#f1f1f1] border border-gray-300 p-4 rounded-sm overflow-x-auto text-sm font-mono leading-relaxed shadow-inner">
        <table className="w-full border-spacing-0 border-collapse">
          <tbody>
            {lines.map((line, index) => (
              <tr key={index} className="hover:bg-[#e8e8e8]">
                <td className="w-10 text-right pr-4 text-gray-500 border-r border-gray-300 select-none">
                  {index + 1}.
                </td>
                <td 
                  className="pl-4 whitespace-pre"
                  dangerouslySetInnerHTML={{ __html: getHighlightedHtml(line) }}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CodeBlock;
