import axios from 'axios';
import { API_DUMMY } from '../utils/api';

export const getProjects = async () => {
  try {
    const token = localStorage.getItem("token"); // Mengambil token dari localStorage

    const response = await axios.get(`${API_DUMMY}/api/list_project/all`, {
      headers: {
        Authorization: `Bearer ${token}`, // Sertakan token di header
      },
    });
 
    return response.data; // Mengembalikan data proyek
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    throw error;
  }
};
