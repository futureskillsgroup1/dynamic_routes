import BlogItem from './BlogItem'
import {Posts} from '../../dummyData'
import { useEffect, useState } from 'react'

const Blog = () => {
    const [posts, setPosts] = useState([])
    useEffect(async () => {
        const fetchPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            return data
        }
        const psts = await fetchPosts()
        setPosts(psts)
    }, [])
    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        {posts.map(p => (
                            <BlogItem 
                                key={p.id}
                                post={p}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
