

async function getQuote() {
    try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json');
        const data = await response.json();
        
        const quotedElement = document.createElement("div");
        const quotheAuthor = document.createElement("div")

        quotedElement.innerHTML = data.quoteText
        quotheAuthor.innerHTML = data.quoteAuthor

        document.body.appendChild(quotedElement)
        document.body.appendChild(quotheAuthor)
    }
    catch (error) {
        console.log(error)
    }
}

getQuote()