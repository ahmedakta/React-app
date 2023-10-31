import { useEffect, useState } from "react";
import PostsList from "./PostsList";
import PostsModel from "./PostsModel";
function Posts(){

    const [checkAuth , setCheckAuth] = useState('False')
    const {isWaiting , posts , serverError ,setSearchTerm , test } = PostsModel('https://perenual.com/api/species-list?key=sk-d3Mv65356d342c7532650&page=1'); 


    return(
        <div className="container" id="postsList">
            {isWaiting && 
            <div className="text-center">
                <div className="spinner-grow text-success" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>}
            {serverError && <h1>{serverError}..</h1>}
            {posts && <PostsList posts={posts} test={test} />}
        </div>
    )
}

export default Posts;