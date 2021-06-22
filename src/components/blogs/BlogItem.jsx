import {Link, useHistory} from 'react-router-dom'

const BlogItem = ({post}) => {
    const history = useHistory()

    return (
        <>
          <div className="col-lg-4">
                <div className="card m-2 mt-5 mb-5" style={{width: '18rem', height: '23rem'}}>
                <img src={post.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.text.slice(0,30)}</p>
                    <Link to={`/post/${post.id}`} onClick={() => history.push(`/post/${post.id}`)} className="btn btn-primary">Read more...</Link>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default BlogItem
