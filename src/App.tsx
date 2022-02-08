import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css';
import AllArticles from './features/adminSide/articles/AllArticles';
import Nav from './Layout';
import NewArticle from './components/AdminSide/NewArticle';
import EditArticle from "./components/AdminSide/EditArticle";
import Inspiration from "./components/AdminSide/Inspiration";
import Home from "./components/AdminSide/Home";
import Login from "./components/login";
import RecentArticles from "./components/UserSide/RecentArticles";
import ArticleDetail from "./components/UserSide/ArticleDetail";
import { selectArticles, selectActiveId, selectActiveArticleId } from '../src/features/adminSide/articles/ArticlesSlice';
import { useSelector } from 'react-redux';

function App() {

  const articles = useSelector(selectArticles);
  const activePostId = useSelector(selectActiveId);
  const activeArticleId = useSelector(selectActiveArticleId)
  const [token, setToken] = useState(); /* https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications */

  return (
    <div className="App">
      <Routes>
        <Route
              path="/"
              element={<Nav
                isLoggedIn/>} >
          <Route
              path={`article-detail/${activeArticleId}`}
              element={<ArticleDetail
                articles={articles}
                activeArticleId={activeArticleId} />}/>
          <Route
              path="recent-articles"
              element={<RecentArticles
                articles={articles} />}/>
          <Route
              path="createarticle"
              element={<NewArticle />}/>
          <Route
              path="inspiration"
              element={<Inspiration />}/>
          <Route
              path="my-articles"
              element={<AllArticles
                articles={articles}
              />}
            />
          <Route
              path="editarticle"
              element={<EditArticle
                articles={articles}
                activeId={activePostId}
              />}
            />
            <Route
              path="home"
              element={<Home />} />
            <Route
              path="login"
              element={<Login />} />
        </Route>
      </Routes>
      </div>
  );
}

export default App;
