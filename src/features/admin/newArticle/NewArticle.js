import React from 'react'
import { Button } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

// take out the styling of this page and make it as a component or smt like that in styled components
function NewArticle() {
    return (
        <div style={{ textAlign: "left" }}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <h2>Create new article</h2>
                <Button>Publish Article</Button>
            </div>
            <div style={{ "display": "flex", flexDirection: "column" }}>
                <label>Article Title</label>
                <input></input>

                <label>Featured image</label>
                <Button style={{ width: "200px" }} variant="secondary">Upload an Image</Button>

                <label>Content</label>
                <textarea style={{ height: "50vh" }}>

                </textarea>
            </div>
            <Outlet />
        </div>
    )
}

export default NewArticle
