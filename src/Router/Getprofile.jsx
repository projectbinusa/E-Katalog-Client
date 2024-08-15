import axios from "axios";

const apiUrl = "http://localhost:2007";

export const getAdminById = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/api/users/by-id/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("API Response:", response.data); // Tambahkan ini untuk debugging
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch user with id ${id}: `, error);
      throw error;
    }
  };
  