// component/ui/CodeInput.tsx

"use client";

import { useState } from 'react';
import { Textarea } from './Textarea';
import { Button } from './Button';

interface CodeInputProps {
  onExplain: (code: string) => void;
  isLoading: boolean;
}

export function CodeInput({ onExplain, isLoading }: CodeInputProps) {
  const [code, setCode] = useState('');

  const handleExplain = () => {
    if (code.trim()) {
      onExplain(code);
    }
  };

  return (
    <div className="w-full p-6 rounded-xl bg-slate-900 border border-indigo-700 shadow-[0_0_15px_#4f46e5] transition-all duration-300 hover:shadow-[0_0_25px_#8b5cf6]">
      <h2 className="text-2xl font-bold mb-4 text-violet-400 text-center">Paste Your Code</h2>
      <Textarea
        className="w-full h-64 p-4 text-sm font-mono text-cyan-300 bg-slate-800 border-2 border-transparent rounded-lg focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_10px_#22d3ee] transition-all duration-300 resize-none"
        placeholder="e.g. console.log('Hello, World!');"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <Button
        className="mt-6 w-full bg-fuchsia-600 text-white py-3 rounded-lg font-bold uppercase tracking-wider shadow-[0_0_10px_#c026d3] transition-all duration-300 hover:bg-fuchsia-700 hover:shadow-[0_0_20px_#db2777] disabled:bg-slate-700 disabled:shadow-none disabled:cursor-not-allowed"
        onClick={handleExplain}
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Explain Code'}
      </Button>
    </div>
  );
}