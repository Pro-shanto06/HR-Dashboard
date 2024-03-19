import React from 'react';

const StatsCard = ({ title, count, percentage, changeType }) => {
  const progressColor = changeType === 'increase' ? 'text-teal-500' : 'text-orange-500';

  // Calculate the rotation for the pie chart based on the percentage
  const rotateValue = Math.round(percentage / 100 * 180);

  // Tailwind doesn't directly support dynamic rotation, so use inline style for the pseudo element
  const rotationStyle = {
    '--tw-rotate': `${rotateValue}deg`,
  };

  return (
    <div className="flex  flex-col items-center p-4 mr-5 bg-white rounded shadow">
      <div className="text-sm font-semibold text-gray-500">{title}</div>

      <div className="relative mt-2">
        <div className={`w-16 h-16 rounded-full border-4 ${progressColor} border-t-transparent`}></div>
        <div 
          className={`w-16 h-16 rounded-full border-4 ${progressColor} border-t-transparent absolute top-0`}
          style={rotationStyle}>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-lg font-bold">{count}</div>
          <div className={`text-xs font-medium ${progressColor}`}>
            {percentage}% {changeType === 'increase' ? 'Inc' : 'Dec'}
          </div>
        </div>
      </div>

      <div className="flex items-center mt-3">
        <div className="text-xs text-gray-500 mr-1">•••</div>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>
    </div>
  );
};

const DashboardStats = () => {
  return (
    <div className="flex justify-center">
      <StatsCard title="Total Candidates" count="361" percentage={74} changeType="increase" />
      <StatsCard title="Shortlisted Candidates" count="201" percentage={45} changeType="increase" />
      <StatsCard title="Rejected Candidates" count="201" percentage={45} changeType="increase" />
    </div>
  );
};

export default DashboardStats;
