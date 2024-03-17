import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { Code } from "../lib/code";

export const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div>
      {/* SECTION JUDUL */}
      <h1 className="text-lg font-bold">{title}</h1>

      {/* SECTION DESCRIPTION */}
      <p className="mt-1 text-gray-600">{description}</p>

      {/* SECTION PREVIEW */}
      <div className="mt-3">
        <div className="flex flex-col rounded-xl border p-6 shadow-sm">
          <div className="flex flex-wrap gap-2">{children}</div>
          <div className="flex mt-5 gap-5">
            <button
              onClick={() => setShowCode(!showCode)}
              className="border-2 border-gray-500 p-2 rounded-md"
            >
              {showCode ? (
                <SiTailwindcss className="h-5 w-5" />
              ) : (
                <SiTailwindcss className="h-5 w-5" />
              )}
            </button>
            <button
              className="border-2 border-gray-500 p-2 rounded-md"
              onClick={() => setShowCode(!showCode)}
            >
              {showCode ? (
                <FaReact className="h-5 w-5" />
              ) : (
                <FaReact className="h-5 w-5" />
              )}
            </button>
          </div>
          {showCode && <Code />}
        </div>
      </div>
    </div>
  );
};
