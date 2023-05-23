import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect,useState } from "react";
import './Create.css'




function Create() {

 
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [contact2, setContact2] = useState([]);

    const [isSubscribed, setIsSubscribed]= useState(false);

  

    const btnclick = async() =>{ 
      
  
        let options = {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password:  password,
                firstname: firstname,
                lastname: lastname
           
            }),
        };
    

        const reponse = await fetch("https://social-network-api.osc-fr1.scalingo.io/theBlhook/register",options);
       

        const data= await reponse.json();
        console.log(data); 
            
        setContact2  (data );
        console.log(contact2);

    
    }

    const handleChange = (e) => {
        if (e.target.value) {
            console.log('✅ Checkbox is checked');
        }else {
            console.log('⛔️ Checkbox is NOT checked');
        }
        setIsSubscribed (current => !current);
    }
   
  
    useEffect (()=> { }, []);

  
    return (
        <div>

            <form >
                <Card className="container" style={{ width: '30rem' }} >
                    <Card.Img className="logo" style={{ width: '10rem' }} src="./public/logo/logoBlhook.png" />
                    <Card.Body>
                        <div className="input" >

                            <label className="margin">Email: <input onChange={(e)=>{setEmail(e.target.value)}} type="email"></input></label>
                            <label className="margin">Password: <input onChange={(e)=>{setPassword(e.target.value)}} type="password"></input></label>
                            <label className="margin">Prénom: <input onChange={(e)=>{setFirstname(e.target.value)}} ></input></label>
                            <label className="margin">Nom: <input onChange={(e)=>{setLastname(e.target.value)}}  ></input></label>
                         
                        </div>
                       
                        <input type="checkbox"></input> <label className="conditions"> Autorise à recevoir des notifications concernant les dernières publications postés.</label>
                        <br></br>
                        <input type="checkbox"></input> <label className="conditions"> Autorise la reception de mail emisent par les differents partenaires publicitaires de The Blhook.</label>
                        <br></br>
                        <input onChange={handleChange} value={isSubscribed} name="checkbox" type="checkbox"></input> <label className="conditions"> j'accepte les termes et conditions d'accées.</label><label className='checkbox'>Obligatoire pour confirmer l'incription!</label>

                    </Card.Body>
                </Card>
            </form>
            <div className='messageconfirme'>{isSubscribed && <h2 className='messageconfirme2'>✅ Confirmation d'accées </h2>}</div>
            <button onClick={btnclick} disabled={!isSubscribed} className="btnenvoyer" >Envoyer</button>
            

        </div>



    );

}

export default Create