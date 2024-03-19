import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import axios from 'axios';

const Application = () => {
  const [selectedOption, setSelectedOption] = useState("Product Designer"); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [candidateCounts, setCandidateCounts] = useState({
    total: 0,
    shortlisted: 0,
    'In Process': 0,
    'On Hold': 0,
    rejected: 0
  });
  const [employees, setEmployees] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = async (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  
    try {
      const response = await axios.get(`http://localhost:5000/api/candidates/countByJobTitle/${option}`);
      const counts = {
        total: response.data.total || 0,
        shortlisted: response.data.shortlisted || 0,
        'In Process': response.data['In Process'] || 0,
        'On Hold': response.data['On Hold'] || 0,
        rejected: response.data.rejected || 0,
        finalized: response.data.finalized || 0
      };
      setCandidateCounts(counts);
  
      const candidatesResponse = await axios.get(`http://localhost:5000/api/candidates/candidates/${option}/all`);
      setEmployees(candidatesResponse.data);
    } catch (error) {
      console.error('Error fetching candidate counts:', error);
    }
  };
  

  const handleStatusClick = async (status) => {
    try {
      let response;
      if (status === 'all') {
       
        response = await axios.get(`http://localhost:5000/api/candidates/candidates/${selectedOption}/all`);
      } else {
      
        response = await axios.get(`http://localhost:5000/api/candidates/candidates/${selectedOption}/${status}`);
      }
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };

  useEffect(() => {

    handleOptionClick("Product Designer");
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  };
  

  return (
    <div className='pt-6 pl-5 pr-6' style={{ backgroundColor: '#E0EDEA' }}>
  
  <div className="text-xl font-bold mb-4">Application</div>
<div className="text-m mb-2">On going recruitment</div>


      <div className="relative inline-block w-100">
        <button onClick={toggleDropdown} className="w-100 bg-custom-bg  text-black py-2 px-4 rounded">
          <span className="flex items-center">
            {selectedOption ? (
              <>
                <span >{selectedOption}</span>
                <IoIosArrowDown />
              </>
            ) : (
              <>
                <span>Select a job</span>
                <IoIosArrowDown />
              </>
            )}
          </span>
        </button>

        {isDropdownOpen && (
          <div className="absolute z-10 mt-2 bg-white rounded shadow-lg">
            <button onClick={() => handleOptionClick("Product Designer")} className="block px-4 py-2 flex items-center">
              <span className="mr-2">Product Designer</span>
            </button>

            <button onClick={() => handleOptionClick("Brand Strategist")} className="block px-4 py-2 flex items-center">
              <span className="mr-2">Brand Strategist</span>
            </button>
            <button onClick={() => handleOptionClick("Jr. Frontend Engineer")} className="block px-4 py-2 flex items-center">
              <span className="mr-2">Jr. Frontend Engineer</span>
            </button>
          </div>
        )}
      </div>

      {/* Bar with options, search, and filter */}
      <div className='mt-4 md:p-3 bg-white rounded'>
        <div className="flex items-center justify-between">
        <div className="mr-6">
  {selectedOption && (
    <>
      <span className="mr-4 font-bold cursor-pointer border-b border-transparent hover:border-teal-500 hover:border-b-2 hover:pb-3" onClick={() => handleStatusClick('all')}>All ({candidateCounts.total}) </span>
      <span className="mr-4 font-bold cursor-pointer border-b border-transparent hover:border-teal-500 hover:border-b-2 hover:pb-3" onClick={() => handleStatusClick('shortlisted')}>Shortlisted ({candidateCounts.shortlisted}) </span>
      <span className="mr-4 font-bold cursor-pointer border-b border-transparent hover:border-teal-500 hover:border-b-2 hover:pb-3" onClick={() => handleStatusClick('In Process')}>In Process ({candidateCounts['In Process']}) </span>
      <span className="mr-4 font-bold cursor-pointer border-b border-transparent hover:border-teal-500 hover:border-b-2 hover:pb-3" onClick={() => handleStatusClick('On Hold')}>On Hold ({candidateCounts['On Hold']}) </span>
      <span className="font-bold cursor-pointer border-b border-transparent hover:border-teal-500 hover:border-b-2 hover:pb-3" onClick={() => handleStatusClick('rejected')}>Rejected ({candidateCounts.rejected}) </span>
    </>
  )}
</div>




          <div className="flex items-center">
            <div className="flex gap-2 mr-4 font-bold">
              <IoSearchSharp className="text-xl cursor-pointer " style={{ color: '#11998E' }} /> Search
            </div>
            <div className="flex gap-2 font-bold">
              <FiFilter className="text-xl cursor-pointer "style={{ color: '#11998E' }} /> Filter
            </div>
          </div>
        </div>
      </div>


      <div>
        <table className="min-w-full " style={{ borderCollapse: 'separate', borderSpacing: '0 1.5rem' }}>
          <tbody className="bg-white divide-y divide-gray-200">
            {employees.map((employee, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="flex items-center">
                    <img src="../avatar.png" alt="Profile" className="w-10 h-10 rounded-full mr-4" />
                    <div>
                      <div className="font-semibold">{employee.name}</div>
                      <div className="text-sm text-gray-500">{employee.experienced} year exp. | Expected {employee.expectedSalary}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div>
                    <div className="font-semibold">{employee.status}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="text-sm text-gray-500">{formatDate(employee.date)}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Application;
