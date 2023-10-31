import Show from "./Show";
function PostsList({posts , changeItems , test  }){
    return(
        <div className="row row-cols-1 row-cols-md-3">
            {posts ? posts.map((post) => (
                <div key={post.id} className="col mb-4">
              {test}
                  <div className="card">
                    <img src={post.default_image ? post.default_image.medium_url : ''} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{post.common_name}</h5>
                      <p className="card-text">{post.cycle}</p>
                    </div>
                    <button className="btn btn-info" onClick={changeItems}>Add To Card </button>
                    <button type="button" className="btn btn-demo" data-toggle="modal" data-target="#myModal2">
                      Right Sidebar Modal
                    </button>
                  </div>
                <Show />
                </div>
            )) : ''}
        </div>   
    )
}

export default PostsList;