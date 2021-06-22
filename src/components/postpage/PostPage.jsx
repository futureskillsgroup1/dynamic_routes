import React from 'react'

const PostPage = (props) => {
    console.log(props)
    return (
        <>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                <img src="assets/3.jpg" className="img-fluid" alt="" />
                <h2>My first post</h2>
                <p>01.01.2021</p>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis expedita, exercitationem rem in ex tempore deleniti. Eum animi praesentium quos exercitationem velit! Accusamus voluptatem distinctio a commodi. Quos, voluptate minus!</p>
                </div>
            </div>
        </>
    )
}

export default PostPage