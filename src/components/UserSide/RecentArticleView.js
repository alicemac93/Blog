import { Article } from '../../styled-componets';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getActiveArticleId } from '../../features/adminSide/articles/ArticlesSlice';
import { useEffect, useState } from 'react';

function RecentArticleView({article}) {
    const [readingTime, setReadingTime] = useState()
    const dispatch = useDispatch()
    const { title, articleId, image, content, user } = article;

    useEffect(() => {
        const calculateReadingTime = () => {
            const words = content.match(/(\w+)/g).length;
            setReadingTime(Math.floor(words / 238))
        }
        calculateReadingTime()
    }, [])

    return (
        <Article>
            <Link to={`/article-detail/${articleId}`}
                className="flip-card"
                onClick={() => dispatch(getActiveArticleId(articleId))}
                style={{ color: "#fff", textDecoration: "none" }}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img style={{
                            maxWidth: "100%",
                            maxHeight: "100%"
                        }} src={image} alt="illustrative" />
                        <h3>{title}</h3>
                        <p>Author: {user}</p>
                        <p>{(readingTime) ? `Reading time ${readingTime}` : undefined}</p>
                    </div>
                    <div style={{ maxWidth: "500px", height: "500px" }} className="flip-card-back">
                        <p style={{ "overflow": "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", }}>
                            {content}
                        </p>
                    </div>
                </div>
            </Link>
        </Article >
    )
}

export default RecentArticleView;
