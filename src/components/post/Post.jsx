import ModelsPost from "../../models/ModelsPost";
import { useState, useEffect } from "react";
import moment from "moment";
import 'moment/dist/locale/fr';
import 'moment/locale/fr';
import ModelsComment from "../../models/ModelsComment";

// Fetch d'affichage de post et de comment


function Post() {

    const [post, setPost] = useState([]);


    async function Post1() {
        let response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/theBlhook/posts?page=0&limit=200`);
        console.log('reponse post', response);
        let donnees = await response.json();
        console.log('données post', donnees.posts);
        setPost(donnees.posts);

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
        <div className=' poste' > <RenderMyArray /></div>

    );

}

export default Post