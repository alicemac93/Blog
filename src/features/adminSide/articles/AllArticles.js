import { Table } from 'react-bootstrap';
import ArticleListItem from '../../../components/AdminSide/ArticleListItem';
import { Link } from "react-router-dom";
import { PublishButton } from '../../../styled-componets';
import { useSelector } from 'react-redux';
import { selectActiveUser } from '../users/UsersSlice';

function AllArticles({ articles }) {
    const activeUser = useSelector(selectActiveUser)
    const userArticles = articles.filter(article => article.user === activeUser)

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
                    {userArticles.map(article =>
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
