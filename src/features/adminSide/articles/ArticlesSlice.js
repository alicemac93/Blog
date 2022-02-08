import { createSlice } from "@reduxjs/toolkit";

export const AllArticlesSlice = createSlice({
    name: "articles",
    initialState: {
        posts: [],
        activePostId: '',
        activeArticleId: ''
    },
    reducers: {
        loadArticles: (state, action) => {
            // axios.get
        },
        addArticle: (state, action) => {
            state.posts.push(action.payload) //axios.post
        },
        removeArticle: (state, action) => {
            const id = action.payload; // axios.delete
            state.posts.filter(article => article.articleId !== id)

            return state;
        },
        editArticle: (state, action) => { // axios.put
            const { title, content, activeId, image } = action.payload;
            const indexToBeUpdated = state.posts.findIndex(post => post.articleId === activeId)
            const postToBeUpdated = state.posts.find(article => article.articleId === activeId)
            const postUpdated = {
                ...postToBeUpdated,
                title: title,
                content: content,
                image: image
            }
            state.posts[indexToBeUpdated] = postUpdated;

            return state;
        },
        getActivePostId: (state, action) => {
            state.activePostId = action.payload;
        },
        getActiveArticleId: (state, action) => {
            state.activeArticleId = action.payload
        }
    }
})


export const { addArticle, removeArticle, editArticle, getActivePostId, getActiveArticleId } = AllArticlesSlice.actions;

export const selectArticles = (state) => state.articles.posts;
export const selectActiveId = (state) => state.articles.activePostId;
export const selectActiveArticleId = (state) => state.articles.activeArticleId;

export default AllArticlesSlice.reducer;
