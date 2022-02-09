import { useNavigate } from "react-router-dom";

function ArticleDetail({ articles, activeArticleId }) {
    const { title, content, createdAt, image, user } = articles.find(article => article.articleId === activeArticleId)
    const datePublished = new Date(createdAt);
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/recent-articles')
    }

    return (
        <div className="column article-detail--container">
            <button className="icon--back btn-back" onClick={goBack}>Go back</button>
            <img alt="post" src={image} style={{
                maxHeight: "500px"
            }} />
            <div className="aricle-detail--heading">
                <h1>{title}</h1>
                <p>{`date published: ${datePublished.getDate()}/${datePublished.getMonth()}/${datePublished.getFullYear()}`}</p>
                <p>Author: {user}</p>
            </div>
            <p>{content}</p>
        </div>
    )
}

export default ArticleDetail
