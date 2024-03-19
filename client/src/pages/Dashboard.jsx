import React from 'react';
import { CiSearch } from "react-icons/ci";
import Job from './Job';
import Chart from './Chart';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Chart4 from './Chart4';
import DashboardStats from './DashboardStats';

const Dashboard = () => {
  return (
    <div className='flex'>

      <div className='mt-3 ml-5 mr-5'>
        <div className='flex items-center'>
          <h1 className="text-2xl font-bold mr-auto">Good Morning</h1>

          <div className="relative flex items-center">
            <input placeholder="Search" className="w-full h-10 sm:h-10 bg-custom-bg px-4 outline-none" type="text" name="query" id="query" />
            <button type="submit" className="ml-auto h-10 sm:px-4 text-sm text-white transition duration-150 ease-in-out bg-custom-bg2 sm:text-base sm:font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              <CiSearch/>
            </button>
          </div>
        </div>

        <div className='flex mt-10 mb-10'>
          <DashboardStats/>
        </div>

        <div className="flex mt-10 gap-5">
  <div className="w-1/2">
    <Chart />
  </div>
  <div className="w-1/2">
    <Chart4 />
  </div>
</div>

<div className="flex mt-10 gap-5">
  <div className="w-1/2">
    <Chart2 />
  </div>
  <div className="w-1/2">
    <Chart3 />
  </div>
</div>


      </div>

      <div className="relative">
        <div className=" h-full w-2 ml-5 mr-5 bg-custom-bg top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </div>

      <div>
        <Job/>
      </div>

    </div>
  );
}

export default Dashboard;
