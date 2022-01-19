import { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addArticle } from '../../features/adminSide/articles/ArticlesSlice';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

// take out the styling of this page and make it as a component or smt like that in styled components;

function NewArticle() {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !content) {
            alert("Please fill in the required fields")
            return;
        }

        /*         if (content.length < 100) {
                    alert("The lenght of the content must be larger than 100")
                    return;
                } */

        if (title.length < 2) {
            alert("The lenght of the title must be larger than 2")
            return;
        }

        const data = {
            articleId: uuidv4(),
            title,
            content,
            image,
            imageId: uuidv4(),
            createdAt: Date.now(),
        }

        dispatch(addArticle(data))
        navigate('/my-articles')
    }


    return (
        <>
            <Form onSubmit={handleSubmit} >
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <h2>Create new article</h2>
                    <Form.Group className="form-group" controlId="btn">
                        <Button type="submit" variant="primary">
                            Publish Article
                        </Button>
                    </Form.Group>
                </div>
                <div>
                    <Form.Group className="form-group" controlId="title">
                        <Form.Label>Article Title</Form.Label>
                        <Form.Control
                            name="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="image">
                        <Form.Label>Featured image</Form.Label>
                        <Form.Control
                            name="image"
                            type="file"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            style={{ width: "500px" }}
                            accept="image/png, image/jpeg">
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="form-group" controlId="content">
                        <Form.Label>Content</Form.Label>
                        <textarea
                            name="content"
                            type="text"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            style={{ height: "50vh", width: "100%" }}
                        >
                        </textarea>
                    </Form.Group>
                </div>
            </Form >

            <Outlet />
        </>
    )
}

export default NewArticle
