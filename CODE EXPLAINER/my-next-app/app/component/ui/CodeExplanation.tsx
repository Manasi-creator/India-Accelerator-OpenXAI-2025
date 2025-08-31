// component/ui/CodeExplanation.tsx

import React from 'react';

interface ExplanationLine {
  lineNumber: number;
  code: string;
  explanation: string;
}

interface CodeExplanationProps {
  lines: ExplanationLine[];
}

export function CodeExplanation({ lines }: CodeExplanationProps) {
  return (
    <div className="w-full mt-8 p-6 bg-slate-900 rounded-xl border border-indigo-700 shadow-[0_0_15px_#4f46e5]">
      <h2 className="text-2xl font-bold mb-4 text-violet-400 text-center">Code Explanation</h2>
      {lines.length > 0 ? (
        lines.map((line, index) => (
          <div key={line.lineNumber} className="mb-4 p-4 bg-slate-800 rounded-lg shadow-[0_0_10px_#4f46e530] transition-all duration-300 hover:shadow-[0_0_20px_#4f46e550] animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex items-start space-x-4 mb-2">
              <span className="font-mono text-xs text-gray-500 min-w-[20px]">{line.lineNumber}:</span>
              <pre className="text-sm font-mono text-lime-400 bg-slate-700 p-2 rounded w-full overflow-x-auto whitespace-pre-wrap">{line.code}</pre>
            </div>
            <p className="text-sm text-gray-300 mt-2">{line.explanation}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center italic">Your explanation will appear here.</p>
      )}
    </div>
  );
}