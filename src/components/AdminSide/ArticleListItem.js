import { Link } from "react-router-dom";
import editIcon from '../../images/edit.svg';
import deleteIcon from '../../images/delete.svg';
import styled from 'styled-components'

import { removeArticle, getActivePostId } from "../../features/adminSide/articles/ArticlesSlice";
import { useDispatch } from "react-redux";

const Icon = styled.img`
    height: 30px
    `

function ArticleListItem({ article }) {

    const { title, articleId, content, user } = article;
    const dispatch = useDispatch();

    return (
        <tr key={articleId}>
            <td><input type="checkbox" /></td>
            <td>{title}</td>
            <td style={{ maxWidth: "500px", height: "20px", "overflow": "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", }}>{content}</td>
            <td>{user}</td>
            <td>comments</td>
            <td>
                <Link
                    onClick={() => dispatch(getActivePostId(articleId))}
                    to="/editArticle">
                    <Icon src={editIcon} alt="edit Article" />
                </Link>
                <Icon
                    src={deleteIcon}
                    alt="delete Article"
                    onClick={() => dispatch(removeArticle(articleId))} />
            </td>
        </tr>
    )
}

export default ArticleListItem
