import { Table } from 'react-bootstrap';
import ArticleListItem from '../../../components/AdminSide/ArticleListItem';
import { Link } from "react-router-dom";
import { PublishButton } from '../../../styled-componets';

function AllArticles({ articles }) {

    return (
        <>
            <div className="article--heading">
                <h2>My Articles</h2>
                <PublishButton variant="primary">
                    <Link to="/createarticle" style={{ color: "#fff", textDecoration: "none" }}>
                        Create new article
                    </Link>
                </PublishButton>
            </div>

            <Table responsive>
                <thead>
                    <tr>
                        <th></th>
                        <th>Article title</th>
                        <th>Perex</th>
                        <th>Author</th>
                        <th># of comments</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map(article =>
                        <ArticleListItem
                            key={article.articleId}
                            article={article} />
                    )}
                </tbody>
            </Table>
        </>
    )
}

export default AllArticles
