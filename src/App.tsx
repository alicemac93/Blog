import { Routes, Route } from "react-router-dom";
import './App.css';

import AllArticles from './features/admin/allArticles/AllArticles';
import Nav from './components/Layout';
import NewArticle from './features/admin/newArticle/NewArticle';


function App() {

  return (
      <Routes>
        <Route path="/" element={<Nav />} >
          <Route path="createarticle" element={<NewArticle />}/>
          <Route path="articles-recent"/>
          <Route path="about" />
          <Route path="my-articles" element={<AllArticles />}/>
        </Route>
      </Routes>
  );
}

export default App;
