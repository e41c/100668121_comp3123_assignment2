import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/Login';
import SignupForm from './components/Signup'; // Import the Signup component
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import ViewEmployee from './components/ViewEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import DeleteEmployee from './components/DeleteEmployee';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} /> {/* Add a route for the Signup component */}
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/view-employee/:id" element={<ViewEmployee />} /> {/* Pass the ID as a route parameter */}
        <Route path="/update-employee/:id" element={<UpdateEmployee />} /> {/* Pass the ID as a route parameter */}
        <Route path="/delete-employee/:id" element={<DeleteEmployee />} /> {/* Pass the ID as a route parameter */}
      </Routes>
    </Router>
  );
}

export default App;
