import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://admissionmantra.in/ascender/wp-json/wp/v2",
  headers: {
    "Content-Type": "application/json",
    // Add other custom headers here
  },
});

export const fetchData = async (endpoint) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};
