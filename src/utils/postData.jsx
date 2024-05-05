

const postData = async (url, body) => {
  const token = localStorage.getItem("token") 

  if (token) {
    try {
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "x-access-token" : token
        },
        body: JSON.stringify(body),
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
