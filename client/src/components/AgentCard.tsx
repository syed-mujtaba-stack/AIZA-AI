'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AgentCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  isSelected?: boolean;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AgentCard: React.FC<AgentCardProps> = ({ name, description, icon, isSelected }) => {
  const borderClass = isSelected ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-gray-700';

  return (
    <motion.div
      variants={cardVariants}
      className={`bg-gray-800 border rounded-lg p-4 flex flex-col items-center text-center transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer ${borderClass}`}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </motion.div>
  );
};

export default AgentCard;
