function PostsList({posts , changeItems }){

    return(
        <div className="row row-cols-1 row-cols-md-3">
            {posts ? posts.map((post) => (
                <div key={post.id} className="col mb-4">
                  <div className="card">
                    <img src={post.default_image ? post.default_image.medium_url : ''} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{post.common_name}</h5>
                      <p className="card-text">{post.cycle}</p>
                    </div>
                    <button className="btn btn-info" onClick={changeItems}>Add To Card </button>
                  </div>
                </div>
            )) : ''}
        </div>   
    )
}

export default PostsList;