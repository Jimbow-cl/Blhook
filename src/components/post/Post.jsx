import ModelsPost from "../../models/ModelsPost";
import { useState, useEffect } from "react";


function Post() {

    const [post, setPost] = useState([]);


    async function Post1() {
        let response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/theBlhook/posts?page=0&limit=20`);
        console.log('reponse post', response);
        let donnees = await response.json();
        console.log('données post', donnees.list);
        setPost(donnees.list)

    }
    useEffect(() => { Post1() }, []);
    const RenderMyArray = () => {
        if (post == null) {
            return (
                <p>Il n'y a pas de post pour l'instant</p>)
        }
        else {
            return post.map((item, id) => {

                return (
                    <div>
                        <ModelsPost key={id} post={item.posts} page={item.page} totalPages={item.totalPages} />
                    </div>
                );
            }
            );
        };

    };
    return (
        <div className='d-flex '> <RenderMyArray /></div>

    );

}

export default Post