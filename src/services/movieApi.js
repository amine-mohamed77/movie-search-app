import axios from "axios";

async function movieApi(searchTerm) {
  try {
    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        s: searchTerm,
        apikey: import.meta.env.VITE_OMDB_API_KEY,
      },
    });

    return response.data;

  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
}

export default movieApi;