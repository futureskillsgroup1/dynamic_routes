import { useState } from 'react'
import { useHistory } from 'react-router'
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import { Posts } from '../../dummyData'

const AddBlog = () => {
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const [text, setText] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        const newPost = {
            id: new Date().getTime(),
            title,
            img,
            text,
            date: '01.01.2021'
        }

        Posts.unshift(newPost)
        history.push('/')
    }

    return (
        <div>
            <Navbar />
                <div className="row mt-4">
                    <div className="col-lg-8 offset-lg-2">
                        <form onSubmit={submitHandler}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Posts of title</label>
                                <input type="text" className="form-control" id="title" placeholder="Title..." name="title" 
                                value={title}
                                onChange = {(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Img url</label>
                                <input type="text" className="form-control" id="title" name="img" 
                                value={img}
                                onChange = {(e) => setImg(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Posts of content
                                </label>
                                <textarea className="form-control" id="text" rows="3" name="text"
                                value={text}
                                onChange = {(e) => setText(e.target.value)}
                                />
                            </div>
                            <input type="submit" className="btn btn-primary" />
                        </form>
                    </div>
                </div>

            <Footer />
        </div>
    )
}

export default AddBlog
