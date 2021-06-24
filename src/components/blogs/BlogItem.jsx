import {Link} from 'react-router-dom'

const BlogItem = ({post}) => {
    return (
        <>
          <div className="col-lg-4">
                <div className="card m-2 mt-5 mb-5" style={{width: '18rem'}}>
                <img src={'http://localhost:3000/assets/'+ '5.png'} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{post.title.slice(0,20)}</h5>
                    <p className="card-text">{post.body.slice(0,100)}</p>
                    <Link to={`/post/${post.id}`} className="btn btn-primary">Read more...</Link>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default BlogItem
