import axios from "axios";
import { API_DUMMY } from "../utils/api";
// const apiUrl = "http://localhost:2007";

export const getAdminById = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_DUMMY}/users/by-id/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch user with id ${id}: `, error);
    throw error;
  }
};
