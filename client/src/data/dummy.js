import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { FaRegEnvelope } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaNetworkWired } from "react-icons/fa6";
import { FaBookBookmark } from "react-icons/fa6";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { CiBoxes } from "react-icons/ci";
import { MdPieChart } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";




export const links = [

  {
    title: 'Menu',
    links: [
      {
        name: 'Dashboard',
        icon: <RxDashboard />,
      },
      {
        name: 'Message',
        icon: <FaRegEnvelope />,
      },
      {
        name: 'Calender',
        icon: <MdCalendarMonth />,
      }
    ],
  },

  {
    title: 'Recruitment',
    links: [
      {
        name: 'Job',
        icon: <MdOutlineWork
        
        
         />,
      },
      {
        name: 'Application',
        icon: <LuLayoutDashboard />,
      },
      {
        name: 'Career Site',
        icon: <FaNetworkWired />,
      },
      {
        name: 'My Referrals',
        icon: <FaBookBookmark />,
      },
    ],
  },
  {
    title: 'Organization',
    links: [
      {
        name: 'Employee',
        icon: <BsFillPersonCheckFill
         />,
      },
      {
        name: 'Structure',
        icon: <CiBoxes />,
      },
     
      {
        name: 'Report',
        icon: <MdPieChart />,
      },
        {
        name: 'Setting',
        icon: <IoSettingsOutline />,
      },
      {
        name: 'Logout',
        icon: <IoLogOut />,
      },
    ],
  },

];


