// app/page.tsx

"use client";

import { useState } from 'react';
import { CodeInput } from './component/ui/CodeInput';
import { CodeExplanation } from './component/ui/CodeExplanation';

interface ExplanationLine {
  lineNumber: number;
  code: string;
  explanation: string;
}

export default function Home() {
  const [explanation, setExplanation] = useState<ExplanationLine[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleExplainCode = async (code: string) => {
    setIsLoading(true);
    setError(null);
    setExplanation([]);

    try {
      const response = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) {
        throw new Error('Failed to get explanation from the server.');
      }

      const data = await response.json();
      setExplanation(data.explanation);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-8 flex flex-col items-center justify-center relative">
      <main className="w-full max-w-5xl p-6 md:p-8 rounded-2xl bg-slate-950 border border-fuchsia-700 shadow-[0_0_20px_#c026d3] transition-all duration-500">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 animate-pulse">
          Code Explainer
        </h1>
        <CodeInput onExplain={handleExplainCode} isLoading={isLoading} />
        {isLoading && <p className="mt-6 text-center text-cyan-400 animate-pulse font-semibold">Generating explanation...</p>}
        {error && <p className="mt-6 text-center text-red-400 font-semibold">Error: {error}</p>}
        <CodeExplanation lines={explanation} />
      </main>
    </div>
  );
}