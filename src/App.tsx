import { Routes, Route } from "react-router-dom";
import './App.css';
import AllArticles from './features/adminSide/articles/AllArticles';
import Nav from './components/AdminSide/Layout';
import NewArticle from './components/AdminSide/NewArticle';
import EditArticle from "./components/AdminSide/EditArticle";
import Inspiration from "./components/AdminSide/Inspiration";
import Home from "./components/AdminSide/Home";

import { selectArticles, selectActiveId } from '../src/features/adminSide/articles/ArticlesSlice';
import { useSelector } from 'react-redux';

function App() {

  const articles = useSelector(selectArticles);
  const activePostId = useSelector(selectActiveId);

  return (
    <div className="App">
      <Routes>
        <Route
              path="/"
              element={<Nav />} >
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
        </Route>
      </Routes>
      </div>
  );
}

export default App;
