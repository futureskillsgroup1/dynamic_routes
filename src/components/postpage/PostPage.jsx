import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Posts } from '../../dummyData' 

const PostPage = () => {
    const postId = useParams()
    const [ post, setPosts ] = useState({})
    //const post = Posts.filter(p => p.id === parseInt(postId.id))[0]
    useEffect(async() => {
        const fetchPost = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId.id}`)
            const data = await res.json()
            return data
        }

        const p = await fetchPost()
        setPosts(p) 
    })
    return (
        <>
            <div className="row">
                <div className="col-lg-10 offset-lg-1 mt-3">
                <img src={'http://localhost:3000/assets/' + "5.png"} className="img-fluid" alt="" />
                <h2>{post.title}</h2>
                <p>{post.date}</p>
                <hr />
                <p> {post.body} </p>
                </div>
            </div>
        </>
    )
}

export default PostPage