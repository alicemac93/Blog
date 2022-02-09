import { useState } from 'react'
import { Form } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addArticle } from '../../features/adminSide/articles/ArticlesSlice';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import { PublishButton  } from '../../styled-componets';
import { selectActiveUser } from '../../features/adminSide/users/UsersSlice';

// take out the styling of this page and make it as a component or smt like that in styled components;
// https://codepen.io/nikolett_codes/pen/daWxea to add hashtags to the articles


function NewArticle() {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const user = useSelector(selectActiveUser)

    const handleImage = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]))
    }

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
            user,
        }

        dispatch(addArticle(data))
        navigate('/my-articles')
    }


    return (
        <>
            <Form onSubmit={handleSubmit} >
                <div className="article--heading">
                    <h2>Create new article</h2>
                    <Form.Group className="form-group" controlId="btn">
                        <PublishButton type="submit" variant="primary">
                            Publish Article
                        </PublishButton>
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
                            onChange={handleImage}
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
                            className="article-text-area"
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
