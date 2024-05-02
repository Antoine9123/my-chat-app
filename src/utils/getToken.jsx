const getToken = () => {

  const cookiesArray = document.cookie.split(";");
  let token = ""

  cookiesArray.forEach((cookie) => {

    const [name, value] = cookie.trim().split("=");

    if (name === "token") {
      console.log("found token :" + value);
      token = value;
    }
  });
  return token
};

export default getToken;
