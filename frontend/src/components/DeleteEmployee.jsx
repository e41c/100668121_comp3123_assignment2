// DeleteEmployee.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Change import statement
import { deleteEmployee } from '../api';

const DeleteEmployee = ({ match }) => {
  const navigate = useNavigate(); // Change the hook to useNavigate

  useEffect(() => {
    const handleDelete = async () => {
      try {
        await deleteEmployee(match.params.id);
        navigate('/employee-list'); // Use navigate to redirect
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    };

    handleDelete();
  }, [navigate, match.params.id]);

  return (
    <div>
      <h2>Deleting Employee...</h2>
      {/* You can add a loading spinner or other UI elements here */}
    </div>
  );
};

export default DeleteEmployee;
