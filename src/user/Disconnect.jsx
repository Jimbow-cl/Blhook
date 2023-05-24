function Disconnect() {
    localStorage.removeItem("user")
    localStorage.removeItem("id")
    localStorage.removeItem("token");

}

export default Disconnect