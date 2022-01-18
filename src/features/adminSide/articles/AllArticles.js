import { Button, Table } from 'react-bootstrap';
import ArticleListItem from '../../../components/AdminSide/ArticleListItem';
import { Link } from "react-router-dom";


function AllArticles({articles}) {

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "30px" }}>
                <h2>My Articles</h2>
                <Button variant="primary">
                    <Link to="/createarticle" style={{ color: "#fff", textDecoration: "none" }}>
                        Create new article
                    </Link>
                </Button>
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
        </div>
    )
}

export default AllArticles
