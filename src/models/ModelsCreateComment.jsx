function Comment(comm, pId) {

    const token = JSON.parse(localStorage.getItem("token"));

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);



    var raw = JSON.stringify({
        "postId": pId,
        "content": comm
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://social-network-api.osc-fr1.scalingo.io/theBlhook/post/comment", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}

export default Comment

