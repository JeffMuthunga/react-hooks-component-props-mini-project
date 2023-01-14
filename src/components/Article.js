import React from "react"

function Article ({title, date="January 1, 1970", preview, coffeecup, min}) {
    return (
        <article>
        <h3>{title}</h3>
        <small>
            {date}.
            {coffeeCups(min)} {min} min read
        </small>
        <p>{preview}</p>
        </article>
    )
}

function coffeeCups (min){
    if(min<30){
        for( let j=0; j< (Math.round(min/5)); j++) {
            return '☕️'.repeat(Math.round(min/5))
        }
    }
    else if(min>30) {
        for(let f=0; f<(Math.round(min/10)); f++){
        return '🍱'.repeat(Math.round(min/10))
        }

    }
        
    
}

export default Article
