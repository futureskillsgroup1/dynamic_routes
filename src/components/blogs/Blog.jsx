import BlogItem from './BlogItem'
import {Posts} from '../../dummyData'

const Blog = () => {
    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        {Posts.map(p => (
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
