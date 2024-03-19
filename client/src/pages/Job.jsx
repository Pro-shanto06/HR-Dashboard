import React from 'react'

const Job = () => {
  return (
    <div className=" h-screen p-4">
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-2">Welcome back XTZ</h1>
      <button className=" text-white px-4 py-2 rounded-lg shadow-md" style={{ backgroundColor: '#11998E' }}>
        + Create New job
      </button>
    </div>

    <div className="mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recent Added Jobs</h2>
      </div>
      <div className="mt-4 space-y-4">
        <div className="flex items-center justify-between  p-4 rounded-lg" style={{ backgroundColor: '#B9F2E5'}}>
          <div className="flex items-center">
            <div className="text-2xl  rounded-full text-white w-12 h-12 flex items-center justify-center" style={{ backgroundColor: '#11998E' }}>34</div>
            <div className="ml-4">
              <p className="font-semibold">Jr. UI/UX Designer</p>
              <p className="text-gray-400">Total Application</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between   p-4 rounded-lg" style={{ backgroundColor: '#B9F2E5'}}>
          <div className="flex items-center">
            <div className="text-2xl  rounded-full text-white w-12 h-12 flex items-center justify-center" style={{ backgroundColor: '#11998E' }}>39</div>
            <div className="ml-4">
              <p className="font-semibold">Brand Strategist</p>
              <p className="text-gray-400">Total Application</p>
            </div>
          </div>
         
        </div>

        <div className="flex items-center justify-between p-4 rounded-lg"  style={{ backgroundColor: '#B9F2E5'}}>
          <div className="flex items-center">
            <div className="text-2xl  rounded-full text-white w-12 h-12 flex items-center justify-center" style={{ backgroundColor: '#11998E' }}>50</div>
            <div className="ml-4">
              <p className="font-semibold">Jr. Frontend Engineer</p>
              <p className="text-gray-400">Total Application</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Job


