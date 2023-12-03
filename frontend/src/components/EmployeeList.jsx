import React, { useState, useEffect } from 'react';
import { getAllEmployees } from '../api';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getAllEmployees();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            <div>
              <h3>{employee.name}</h3>
              <p>{employee.position}</p>
              <p>{employee.department}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
