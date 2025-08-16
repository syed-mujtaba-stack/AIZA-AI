'use client';

import React from 'react';

interface OutputDisplayProps {
  output: string | null;
  isLoading: boolean;
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({ output, isLoading }) => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <h3 className="text-xl font-semibold mb-4 text-center">Agent Output</h3>
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 min-h-[200px] flex items-center justify-center">
        {isLoading ? (
          <div className="text-gray-400">Processing your request...</div>
        ) : output ? (
          <pre className="text-sm text-gray-300 whitespace-pre-wrap w-full text-left">{output}</pre>
        ) : (
          <p className="text-gray-500 text-center">The results from the AI agent will be displayed here.</p>
        )}
      </div>
    </div>
  );
};

export default OutputDisplay;
