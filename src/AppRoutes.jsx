import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './Pages/ProductListing';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListing />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes;