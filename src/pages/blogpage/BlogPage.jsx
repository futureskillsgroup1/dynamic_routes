import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import PostPage from '../../components/postpage/PostPage'

const BlogPage = (props) => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <PostPage />
            </div>
            <Footer />
        </div>
    )
}

export default BlogPage
