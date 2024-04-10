// App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import WorkoutPage from './Components/WorkoutPage';
import Navbar from './Components/Nav';
import Home from './Components/Home';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout/:id" element={<WorkoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
