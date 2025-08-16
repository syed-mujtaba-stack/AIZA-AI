'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import AgentCard from '@/components/AgentCard';
import Globe from '@/components/Globe';
import TaskInput from '@/components/TaskInput';
import OutputDisplay from '@/components/OutputDisplay';
import TaskHistory from '@/components/TaskHistory';
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

interface Task {
  task: string;
  agentName: string;
  result: string;
}

export default function Home() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [output, setOutput] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<Task[]>([]);

  const handleTaskSubmit = async (task: string) => {
    if (!selectedAgent) {
      // In the future, we can auto-select an agent here
      alert("Please select an agent first.");
      return;
    }
    setIsLoading(true);
    setOutput(null);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/execute-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: task, agent_name: selectedAgent.name }),
      });
      const data = await response.json();
      const resultText = data.result || "No result returned.";
      setOutput(resultText);
      // Add to history
      const newTask: Task = {
        task: task,
        agentName: selectedAgent.name,
        result: resultText,
      };
      setHistory([newTask, ...history]);
    } catch (error) {
      const errorMessage = "An error occurred while executing the task.";
      console.error("Failed to execute task:", error);
      setOutput(errorMessage);
      // Add error to history
      const newTask: Task = {
        task: task,
        agentName: selectedAgent.name,
        result: errorMessage,
      };
      setHistory([newTask, ...history]);
    } finally {
      setIsLoading(false);
    }
  };

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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to the AIZA AI Platform</h2>
          <p className="text-lg text-gray-400">Your central hub for managing powerful AI agents.</p>
        </div>
        <TaskInput selectedAgent={selectedAgent} onSubmit={handleTaskSubmit} isLoading={isLoading} />
        <Globe />
        <h2 className="text-2xl font-bold mt-12 mb-6 text-center">Agent Control Center</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {agents.map((agent) => (
            <div key={agent.name} onClick={() => setSelectedAgent(agent)}>
              <AgentCard
                name={agent.name}
                description={agent.description}
                icon={iconMap[agent.icon]}
                isSelected={selectedAgent?.name === agent.name}
              />
            </div>
          ))}
        </motion.div>
        <OutputDisplay output={output} isLoading={isLoading} />
        <TaskHistory history={history} />
      </main>
    </div>
  );
}
