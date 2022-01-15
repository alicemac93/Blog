import React from 'react'

function EditArticle() {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <h2>Edit Article</h2>
                <button>Publish Article</button>
            </div>
            <div>
                <label>Article Title</label>
                <input></input>

                <label>Featured image</label>

                <label>Content</label>
                <textarea>

                </textarea>
            </div>
        </div>
    )
}

export default EditArticle
