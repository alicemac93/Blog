import { Routes, Route } from "react-router-dom";
import './App.css';

import AllArticles from './features/adminSide/articles/AllArticles';
import Nav from './components/AdminSide/Layout';
import NewArticle from './components/AdminSide/NewArticle';
import EditArticle from "./components/AdminSide/EditArticle";
import { selectArticles, selectActiveId } from '../src/features/adminSide/articles/ArticlesSlice';
import { useSelector } from 'react-redux';

function App() {

  const articles = useSelector(selectArticles);
  const activePostId = useSelector(selectActiveId);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />} >
          <Route path="createarticle" element={<NewArticle />}/>
          <Route path="about" />
          <Route
            path="my-articles"
            element={<AllArticles
              articles={articles}
              />}
            />
          <Route path="editarticle"
            element={<EditArticle
              articles={articles}
              activeId={activePostId}
              />}
            />
        </Route>
      </Routes>
      </div>
  );
}

export default App;
