// Pastikan fungsi getProjects di Router/getProject.js mengembalikan data yang benar
export const getProjects = async () => {
  try {
    const response = await fetch("http://localhost:2007/api/list_project/all");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data; // Pastikan data ini sesuai dengan yang Anda harapkan
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
};
