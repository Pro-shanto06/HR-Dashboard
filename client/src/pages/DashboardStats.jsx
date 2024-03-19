import React from 'react';

const StatsCard = ({ title, count, percentage, changeType, circleBorderStyle }) => {
 

  return (
    <div className="flex  flex-col items-center p-4 mr-5 bg-white rounded shadow">
      <div className="flex gap-5">
        <div className="text-sm font-semibold mt-5">{title}</div>
        <div>
          <div className="text-xs">•••</div>
        </div>
      </div>

      <div className="flex gap-10">
        <div className="text-lg font-bold">{count}</div>

        <div className="relative mt-2">
          <div
            className={`w-16 h-16 rounded-full border-4  border-t-transparent`}
            
          ></div>
          <div
            className={`w-16 h-16 rounded-full border-4  border-t-transparent absolute top-0`}
            style={{ ...circleBorderStyle }}
          ></div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className={`text-xs font-medium`}>
              {percentage}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const DashboardStats = () => {
  return (
    <div className="flex justify-center">
  <StatsCard title="Total Candidates" count="361" percentage={74} changeType="increase" circleBorderStyle={{ borderColor: '#11998E' }} />
  <StatsCard title="Shortlisted Candidates" count="201" percentage={45} changeType="increase" circleBorderStyle={{ borderColor: '#E7B860' }} />
  <StatsCard title="Rejected Candidates" count="201" percentage={45} changeType="increase" circleBorderStyle={{ borderColor: '#FF6A49' }} />
</div>


  );
};

export default DashboardStats;
