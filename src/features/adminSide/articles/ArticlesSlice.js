import { createSlice } from "@reduxjs/toolkit";

export const AllArticlesSlice = createSlice({
    name: "articles",
    initialState: {
        posts: [],
        activePostId: ''
    },
    reducers: {
        addArticle: (state, action) => {
            state.posts.push(action.payload)
        },
        removeArticle: (state, action) => {
            const id = action.payload;
            state = state.posts.filter(article => article.articleId !== id)

            return state;
        },
        editArticle: (state, action) => {
            const { title, content, activeId } = action.payload;
            const indexToBeUpdated = state.posts.findIndex(post => post.articleId === activeId)
            const postToBeUpdated = state.posts.find(article => article.articleId === activeId)
            const postUpdated = {
                ...postToBeUpdated,
                title: title,
                content: content
            }
            state.posts[indexToBeUpdated] = postUpdated;

            return state;
        },
        getActivePostId: (state, action) => {
            state.activePostId = action.payload;
        }
    }
})


export const { addArticle, removeArticle, editArticle, getActivePostId } = AllArticlesSlice.actions;

export const selectArticles = (state) => state.articles.posts;
export const selectActiveId = (state) => state.articles.activePostId;

export default AllArticlesSlice.reducer;
