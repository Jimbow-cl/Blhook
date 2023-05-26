// Récuperation de l'Api, pour mise en local Storage

async function LocalStorage() {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log("token", token);
  var check = (localStorage.getItem('check'));

  if (check) {
    console.log("LocalStorage ok.")
  }
  else {
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
    const id = donnees._id
    localStorage.setItem("id", JSON.stringify(id));
    const user = donnees.firstname
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("check", JSON.stringify(true))

  }

}

export default LocalStorage;
