import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopOrderPage from './Pages/TopOrderPage';
const AppRoutes = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<TopOrderPage />} />
        </Routes>
        </Router>    </>
  )
}

export default AppRoutes;