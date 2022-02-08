import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { PublishButton } from '../../styled-componets';
import { useDispatch } from 'react-redux';
import { editArticle } from '../../features/adminSide/articles/ArticlesSlice'
import { useNavigate } from "react-router-dom";

function EditArticle({ articles, activeId }) {

    const activeArticle = articles.find(article => article.articleId === activeId);
    const [title, setUpdatedTitle] = useState(activeArticle.title)
    const [content, setUpdatedContent] = useState(activeArticle.content)
    const [image, setUpdatedImage] = useState(activeArticle.imageId)

    const handleImage = (event) => {
        setUpdatedImage(URL.createObjectURL(event.target.files[0]))
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Are you sure you want to update this article?')
        const updatedPost = {
            title,
            content,
            activeId,
            image
        }

        dispatch(editArticle(updatedPost))

        navigate('/my-articles')
    }

    return (
        <Form onSubmit={handleSubmit} >
            <div className="article--heading">
                <h2>Edit article</h2>
                <Form.Group className="form-group" controlId="btn">
                    <PublishButton type="submit">Publish Article</PublishButton>
                </Form.Group>
            </div>
            <div>
                <Form.Group className="form-group" controlId="title">
                    <Form.Label>Article Title</Form.Label>
                    <Form.Control
                        name="title"
                        type="text"
                        value={title}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="image">
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
                        onChange={(e) => setUpdatedContent(e.target.value)}
                        style={{ height: "50vh", width: "100%" }}
                    >
                    </textarea>
                </Form.Group>
            </div>
        </Form>
    )
}

export default EditArticle
