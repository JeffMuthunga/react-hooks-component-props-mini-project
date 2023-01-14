import React from "react";
import blogData from "../data/blog";
import Article from "./Article"

function ArticleList (){
    const arrayList = blogData.posts.map((post) => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}
        min= {post.minutes}/>
    })
    return (
        <main>
            {arrayList}
        </main>
    )

}

export default ArticleList
