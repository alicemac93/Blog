import { Button, Table } from 'react-bootstrap';
import ArticleListItem from '../../../components/ArticleListItem';
import { Link } from "react-router-dom";

function AllArticles() {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
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
                        <th>checkbox</th>
                        <th>Article title</th>
                        <th>Perex</th>
                        <th>Author</th>
                        <th># of comments</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <ArticleListItem />
                </tbody>
            </Table>
        </div>
    )
}

export default AllArticles
