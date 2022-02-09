import React from 'react'
import RecentArticleView from './RecentArticleView';

function RecentArticles({ articles }) {

    const sortedArticles = [...articles].sort((a, b) => b.createdAt - a.createdAt)

    return (
        <div>
            <h1>{!articles.length && "There are currently no articles available"}</h1>
            <div className="recent-articles--wrapper">
                {sortedArticles.map(article =>
                    <RecentArticleView
                        article={article}
                        key={article.articleId}
                        id={article.articleId}
                    />
                )}
            </div>
        </div>
    )
}

export default RecentArticles
