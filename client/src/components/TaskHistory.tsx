import React from 'react';

interface Task {
  task: string;
  agentName: string;
  result: string;
}

interface TaskHistoryProps {
  history: Task[];
}

const TaskHistory: React.FC<TaskHistoryProps> = ({ history }) => {
  if (history.length === 0) {
    return null; // Don't render anything if there's no history
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      <h3 className="text-xl font-semibold mb-4 text-center">Task History</h3>
      <div className="space-y-4">
        {history.map((item, index) => (
          <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <p className="text-sm text-gray-400"><strong>Agent:</strong> {item.agentName}</p>
            <p className="font-semibold mt-1"><strong>Task:</strong> {item.task}</p>
            <pre className="text-sm text-gray-300 whitespace-pre-wrap mt-2 bg-gray-900 p-2 rounded">
              {item.result}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskHistory;
