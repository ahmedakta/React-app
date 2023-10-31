import { useEffect, useState } from "react";

function PostsModel(url){
    const [posts , setPosts] = useState([]);
    const [test , setTest] = useState([]);
    const [isWaiting , setIsWaiting] = useState(true);
    const [serverError , setServerError] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {

        if (searchTerm) {
            setTest('Changed');
            const filteredPosts = posts.filter(post => post.common_name.includes(searchTerm));
            setPosts(filteredPosts);
        }else{
            console.log('1');
            // Check the authentication state and update the posts state accordingly
                fetch(url)
                .then(Response => {
                    if (!Response.ok) {
                        setServerError(true);
                    }
                    return Response.json();
                })
                .then(data=>{
                    console.log(data);
                    setPosts(data.data);
                    setIsWaiting(false);
                },2000)        
        }
      }, [url , searchTerm]);
      return {isWaiting , posts , serverError , setSearchTerm , test};
}
export default PostsModel;