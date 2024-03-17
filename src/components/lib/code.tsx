import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaCheck, FaRegCopy } from "react-icons/fa";

export const Code = () => {
  const [copy, setCopy] = useState(false);

  const codeString = `<table class="border-collapse border border-slate-500 ...">
    <thead>
      <tr>
        <th class="border border-slate-600 ...">State</th>
        <th class="border border-slate-600 ...">City</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-slate-700 ...">Indiana</td>
        <td class="border border-slate-700 ...">Indianapolis</td>
      </tr>
      <tr>
        <td class="border border-slate-700 ...">Ohio</td>
        <td class="border border-slate-700 ...">Columbus</td>
      </tr>
      <tr>
        <td class="border border-slate-700 ...">Michigan</td>
        <td class="border border-slate-700 ...">Detroit</td>
      </tr>
    </tbody>
  </table>`;
  return (
    <div>
      <div className="mt-2 bg-[#3a404d] rounded-xl">
        <div className="flex justify-between px-4 text-white text-xs items-center p-2 font-bold">
          <p className="text-sm">Example Code</p>
          {copy ? (
            <button className="py-1 inline-flex items-center gap-1">
              <FaCheck />
              Copied!
            </button>
          ) : (
            <button
              className="py-1 inline-flex items-center gap-1"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 500);
              }}
            >
              <FaRegCopy />
              Copy Code
            </button>
          )}
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={atomOneDark}
          customStyle={{
            padding: "25px",
          }}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
