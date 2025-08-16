'use client';

import React, { useState, useEffect } from 'react';

interface Agent {
  name: string;
}

interface TaskInputProps {
  selectedAgent: Agent | null;
  onSubmit: (task: string) => void;
  isLoading: boolean;
}

const TaskInput: React.FC<TaskInputProps> = ({ selectedAgent, onSubmit, isLoading }) => {
  const [task, setTask] = useState('');
  const [placeholder, setPlaceholder] = useState("Enter your task...");

  useEffect(() => {
    if (selectedAgent) {
      setPlaceholder(`Task for ${selectedAgent.name}...`);
    } else {
      setPlaceholder("Select an agent and enter your task... e.g., 'Generate a Next.js boilerplate'");
    }
  }, [selectedAgent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim() || isLoading) return;
    onSubmit(task);
    setTask('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <form onSubmit={handleSubmit} className="relative">
        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder={placeholder}
          className="w-full p-4 pr-24 text-base bg-gray-800 border border-gray-700 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          rows={2}
          disabled={isLoading}
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!task.trim() || isLoading}
        >
          {isLoading ? 'Processing...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default TaskInput;
