

const postData = async (url, bodyjson) => {
  const token = localStorage.getItem("token")
  if (token) {
    try {
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          token : token
        },
        body: JSON.stringify(bodyjson),
      });

      if (!response.ok) {
        throw new Error("Failed to post data");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error posting data:", error.message);
    }
  }
};

export default postData;
