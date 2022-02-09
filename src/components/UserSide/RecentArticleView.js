import { Article } from '../../styled-componets';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getActiveArticleId } from '../../features/adminSide/articles/ArticlesSlice';
import { useEffect, useState } from 'react';

function RecentArticleView({ article }) {
    const [readingTime, setReadingTime] = useState()
    const dispatch = useDispatch()
    const { title, articleId, image, content, user } = article;


    useEffect(() => {
        const calculateReadingTime = () => {
            const words = content.match(/(\w+)/g).length;
            const readingTimeCalc = Math.floor(words / 238)
            setReadingTime(readingTimeCalc < 1 ? "< 1" : readingTimeCalc)
        }
        calculateReadingTime()
    }, [])

    return (
        <Article>
            <Link to={`/article-detail/${articleId}`}
                className="flip-card"
                onClick={() => dispatch(getActiveArticleId(articleId))}>

                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="flip-card-image-container">
                            <img className="flip-card-front--image" src={image} alt={title} />
                        </div>
                        <div className="flip-card-detail-container">
                            <h4 className="flip-card-front--heading">{title}</h4>
                            <p>Author: {user}</p>
                            <p>{(readingTime) ? `Reading time: ${readingTime} min` : undefined}</p>
                        </div>
                    </div>

                    <div className="flip-card-back">
                        <p>{content}</p>
                    </div>
                </div>

            </Link>
        </Article >
    )
}

export default RecentArticleView;
