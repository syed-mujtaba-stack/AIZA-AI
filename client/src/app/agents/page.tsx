'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { FaCode, FaBook, FaBriefcase, FaPaintBrush, FaShieldAlt } from 'react-icons/fa';

const iconMap: { [key: string]: React.ReactElement } = {
  FaCode: <FaCode />,
  FaBook: <FaBook />,
  FaBriefcase: <FaBriefcase />,
  FaPaintBrush: <FaPaintBrush />,
  FaShieldAlt: <FaShieldAlt />,
};

interface Agent {
  name: string;
  description: string;
  icon: string;
}

const AgentsPage = () => {
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/agents');
        const data = await response.json();
        setAgents(data);
      } catch (error) {
        console.error("Failed to fetch agents:", error);
      }
    };
    fetchAgents();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="p-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Agents</h1>
        <div className="max-w-4xl mx-auto">
          {agents.map((agent) => (
            <div key={agent.name} className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6 flex items-center">
              <div className="text-5xl mr-6">{iconMap[agent.icon]}</div>
              <div>
                <h2 className="text-2xl font-semibold">{agent.name}</h2>
                <p className="text-gray-400">{agent.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AgentsPage;
