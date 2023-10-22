import { useEffect, useState } from "react";
import PostsList from "./PostsList";

function Posts({searchTerm}){

    const [checkAuth , setCheckAuth] = useState('False')
    const [posts , setPosts] = useState([]);

    function changeItems(){
        const jsonArray = [];
        for (let index = 1; index < 5; index++) {
            fetch('https://dummyjson.com/products/'+index)
            .then(res => res.json())
            .then((json) => {
                jsonArray.push(json);
                // Check if all fetch requests have completed
                if (index === 4) {
                  setPosts(jsonArray);
                }
              })
        }
    }

    useEffect(() => {
        console.log('use effect loaded');

        if (searchTerm) {
            const filteredPosts = posts.filter(post => post.common_name.includes(searchTerm));
            setPosts(filteredPosts);

        }else{
            // Check the authentication state and update the posts state accordingly
            if (checkAuth == 'True') {
                fetch('https://perenual.com/api/species-list?key=sk-d3Mv65356d342c7532650&page=1')
                .then(Response => {
                    return Response.json();
                })
                .then(data=>{
                    console.log(data);
                    setPosts(data.data);
                })        
            } else {
                console.log('Not logged in')
            }
        }
       
      }, [checkAuth , searchTerm]);
    return(
        <div className="container">
            Login status : {checkAuth}
            <button className="btn btn-secondary" onClick={()=>setCheckAuth('True')}>Login</button>
          <PostsList posts={posts} changeItems={changeItems}/>
        </div>
    )
}

export default Posts;