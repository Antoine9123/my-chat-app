

const getData = async (url) => {
  const token = localStorage.getItem("token")
  
  if (token) {
    try {
      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          token : token
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch lobby");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching lobby:", error.message);
    }
  }
};

export default getData;
