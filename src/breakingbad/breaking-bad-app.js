
/**
 * @return {Object} quote information
 */

        const fetchQuote = async() => {
        const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
        const data = await res.json();
        
        console.log(data[0]);
        return data[0];

}






/**
 * 
 * @param {HTMLDivElement} element 
 */

export const BreakingbadApp = async (element) => {

    document.querySelector('#app-title').innerHTML = 'Breakingbad Quotes';
    element.innerHTML = 'Loading...';

//    await fetchQuote();

    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButon = document.createElement('button');

    nextQuoteButon.innerText = 'Next Quote';

    const renderQuote = (quote) => {
            quoteLabel.innerHTML = quote.quote;
            authoLabel.innerHTML = quote.author;
            element.replaceChildren(quoteLabel, authoLabel, nextQuoteButon);
    }

// Añadir listener
    nextQuoteButon.addEventListener('click', async() => {
        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote(quote);
    })


    fetchQuote()
        .then(renderQuote);
}