import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1';

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const signupUser = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/signup`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};


export const getAllEmployees = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/emp`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

export const getEmployeeById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/emp/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching employee with ID ${id}:`, error);
    throw error;
  }
};

export const addEmployee = async (employeeData) => {
  try {
    const response = await axios.post(`${BASE_URL}/emp`, employeeData);
    return response.data;
  } catch (error) {
    console.error('Error adding employee:', error);
    throw error;
  }
};

export const updateEmployee = async (id, employeeData) => {
  try {
    const response = await axios.put(`${BASE_URL}/emp/${id}`, employeeData);
    return response.data;
  } catch (error) {
    console.error(`Error updating employee with ID ${id}:`, error);
    throw error;
  }
};

export const deleteEmployee = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/emp/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting employee with ID ${id}:`, error);
    throw error;
  }
};

