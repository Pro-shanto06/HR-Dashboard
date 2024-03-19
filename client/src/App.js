import React from 'react';
import { Sidebar } from './components';
import { Application } from './pages';
import { Dashboard} from './pages';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
    const { activeMenu } = useStateContext();

    return (
        <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                    <Sidebar />
                </div>
                <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                    
                    <div>
                        <Routes>
                          
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/application" element={<Application />} />
                          
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
