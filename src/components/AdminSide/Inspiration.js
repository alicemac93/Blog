import { useEffect, useState } from 'react';

const getQ = async () => {
    try {
        const response = await fetch("https://type.fit/api/quotes");
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse
        }
    } catch (error) {
        console.log(error)
    }
}

function RandomQuote() {
    const [quote, setQuote] = useState({
        text: "",
        author: ""
    })

    const createQuote = () => {
        getQ().then(quote => {
            const random = Math.floor(Math.random() * quote.length)
            setQuote({
                text: quote[random].text,
                author: quote[random].author
            })
        })
    }

    useEffect(() => {
        createQuote()
    }, [])

    return (

        <div className="quote-container" onClick={createQuote}>
            <q>{quote.text}</q>
            <p>{quote.author}</p>
            <p className="description">* Click me to show next quote</p>
        </div>
    )
}

export default RandomQuote;