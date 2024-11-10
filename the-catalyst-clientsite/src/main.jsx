import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Details from './components/Details.jsx';
import OcaDash from './components/OcaDash.jsx';
import PanelDash from './components/panelDash.jsx';
import EventCreation from './components/EventCreation.jsx';
import MeetingRoomBooking from './components/MeetingRoomBooking.jsx';
import BudgetPage from './components/BudgetPage.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
    // loader: () => fetch('http://localhost:5000/users')
    
  },
  {
    path: "/:name/details",
    element: <Details></Details>
  },
  {
    path: "/ocaDashboard",
    element: <OcaDash></OcaDash>,
  },
  {
    path: "/panel",
    element: <PanelDash></PanelDash>,
  },
  {
    path: "/event",
    element: <EventCreation></EventCreation>,
  },
  {
    path: "/meeting",
    element: <MeetingRoomBooking></MeetingRoomBooking>,
  },
  {
    path: "/budget",
    element: <BudgetPage></BudgetPage>,
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router} />
  </StrictMode>,
)
