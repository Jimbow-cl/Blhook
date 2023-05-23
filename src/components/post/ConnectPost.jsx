import { useState, useEffect } from "react"
import TokenStorage from "../Connect/StorageToken"
import ModelsPost from "../../models/ModelsPost";
import moment from "moment";
import 'moment/dist/locale/fr';
import 'moment/locale/fr';


// Conposant de tri des postes d'un utilisateur

function ConnectPost() {
    const [connect, setConnect] = useState();

    useEffect(() => {
        TokenStorage(setConnect)
    }, []);



    const [post, setPost] = useState([]);


    async function Post1() {
        let response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/theBlhook/posts?page=&limit=200`);
        console.log('reponse post', response);
        let donnees = await response.json();
        console.log('données post', donnees.posts);
        setPost(donnees.posts);

    }
    useEffect(() => {
        Post1()

    }, []);

    const [filtre, setFiltre] = useState(post);
    const RenderMyArray = () => {


        return post.map((item, id) => {

            return (
                <div>
                    <ModelsPost key={id} title={item.title} post={item.content} lastname={item.lastname} date={moment(item.date).format("LL")} />
                </div>
            );
        }
        );


    };
    return (
        <div className='d-flex align'> <RenderMyArray /></div>

    );

}


export default ConnectPost