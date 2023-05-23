const TokenStorage = async (setUser) => {
    // "En attente pour le developpement, token du compte admin"
    const testtoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDY3N2U1ZmI4M2ZhYTAwMWI0OTJlNTgiLCJpYXQiOjE2ODQ4Mjg3NTcsImV4cCI6MTY4NDkxNTE1N30.5DNGpDtR8plfb5A_zYqa4DNKj1zlVDZPYhhtMAUJ9wg";
    localStorage.setItem("token", JSON.stringify(testtoken));
    const token = JSON.parse(localStorage.getItem("token"));
    console.log("token", token);




    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,

    };

    let response = await fetch("https://social-network-api.osc-fr1.scalingo.io/theBlhook/user/", requestOptions)
    console.log('reponse user', response);
    let donnees = await response.json();
    console.log('données user', donnees);

    setUser(donnees)
}

export default TokenStorage

