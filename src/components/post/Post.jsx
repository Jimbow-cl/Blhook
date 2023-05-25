import ModelsPost from "../../models/ModelsPost";
import { useState, useEffect } from "react";
import moment from "moment";
import 'moment/dist/locale/fr';
import 'moment/locale/fr';



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

export default Post