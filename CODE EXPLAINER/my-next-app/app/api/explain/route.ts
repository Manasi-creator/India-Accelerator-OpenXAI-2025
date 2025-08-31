// app/api/explain/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { code } = await request.json();

    if (!code) {
      return NextResponse.json({ error: 'Code is required' }, { status: 400 });
    }

    // This is a placeholder for your explanation logic.
    // You would integrate an LLM or another service here to generate explanations.
    const lines = code.split('\n').map((line: string, index: number) => {
      const trimmedLine = line.trim();
      let explanationText = 'This line is empty or whitespace.';

      if (trimmedLine.length > 0) {
        // Simple, static explanation logic for demonstration
        if (trimmedLine.startsWith('console.log')) {
          explanationText = 'This logs a message to the console.';
        } else if (trimmedLine.startsWith('import')) {
          explanationText = 'This imports a module.';
        } else {
          explanationText = `This is line of code: "${trimmedLine}"`;
        }
      }

      return {
        lineNumber: index + 1,
        code: line,
        explanation: explanationText,
      };
    });

    return NextResponse.json({ explanation: lines });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}