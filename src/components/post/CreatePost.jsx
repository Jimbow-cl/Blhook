import { FormText } from "react-bootstrap";
import ModelsCP from "../../models/ModelsCreatePost";
import { useState, useEffect } from "react";


function CreatePost() {

    const [postld, setPostld] = useState();
    const [content, setContent]=useState ();
    const [comm, setComm] = useState([]);


  

    const btnclick = async() =>{ 
      
  
        let options = {
            method: "POST",
            headers: 
            {"Content-Type": "application/json",
            "authorization":"bearer token"},   
            body: JSON.stringify({
                postld: "646c7fe0b83faa001b50032d",
                content: content
            }),
        };
    

        const rep = await fetch("https://social-network-api.osc-fr1.scalingo.io/theBlhook/post/comment",options);
       

        const data= await rep.json();
        console.log(data); 
            
        setComm  (data );
        console.log(comm);

    
    }


    useEffect (()=> { }, []);

    return (

        <>
        
        <div>
            <ModelsCP/>
            
        </div>
        
        
        </>

    );

}

export default CreatePost