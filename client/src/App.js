import React from 'react';
import { Sidebar } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard ,Application} from './pages';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className='flex relative'>
                <div className='w-52 fixed'>
                    <Sidebar />
                </div>
                <div className=' min-h-screen w-full ml-52'>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/application" element={<Application />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
