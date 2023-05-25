import { useState, useEffect } from "react"
import ModelsPost from "../../models/ModelsPost";
import ModelsComment from "../../models/ModelsComment";
import moment from "moment";
import 'moment/dist/locale/fr';
import 'moment/locale/fr';


// Conposant de tri des postes d'un utilisateur

function ConnectPost() {


    const id = JSON.parse(localStorage.getItem("id"))
    useEffect(() => {
        id
    },)



    const [post, setPost] = useState([]);


    async function Post1() {
        let response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/theBlhook/posts?page=0&limit=200`);
        console.log('reponse post', response);
        let donnees = await response.json();
        console.log('données post', donnees.posts);
        let filteredPosts = donnees.posts.filter(p => p.userId == id);
        console.log('filteredPost', filteredPosts);
        setPost(filteredPosts);

    }
    useEffect(() => { Post1() }, []);


    const RenderMyArray = () => {


        return post.map((item, id) => {

            return (

                <div>

                    <ModelsPost id={item._id} key={id} title={item.title} post={item.content} lastname={item.lastname} date={moment(item.date).format("LL")}

                        comments={item.comments.map((item, id) => {
                            return (
                                <div>
                                    <ModelsComment key={id} firstname={item.firstname} content={item.content} likes={item.likes} />
                                </div>
                            );
                        }
                        )}


                    />
                </div>
            );
        }
        );


    };
    return (
        <div className=' poste'> <RenderMyArray /></div>

    );

}

export default ConnectPost