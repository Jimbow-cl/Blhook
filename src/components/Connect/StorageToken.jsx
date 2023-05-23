const TokenStorage = async (setUser) => {
  // "En attente pour le developpement, token du compte admin"
  const token = JSON.parse(localStorage.getItem("token"));
  console.log("token", token);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  let response = await fetch(
    "https://social-network-api.osc-fr1.scalingo.io/theBlhook/user/",
    requestOptions
  );
  console.log("reponse user", response);
  let donnees = await response.json();
  console.log("données user", donnees);

  setUser(donnees);
};

export default TokenStorage;
