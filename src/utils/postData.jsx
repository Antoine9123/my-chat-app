import getToken from "./getToken";

const postData = async (url, body) => {
  const token = getToken();

  if (token) {
    try {
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Token: token,
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
