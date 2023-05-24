function Disconnect() {
    localStorage.removeItem("user")
    localStorage.removeItem("id")
    localStorage.removeItem("token");
    localStorage.removeItem("check");

}

export default Disconnect