class Category {
    constructor({ id, name, quotes }) {
        this.id = id
        this.name = name
        this.quotes = quotes
    }
    get categoryName() {
        const div = document.getElementById("category-name")
        const li = document.createElement("li")
        li.setAttribute("id", this.id)
        li.innerHTML = this.name
        categoryEventListener(li)
        div.appendChild(li)
        return div
    }
}

function categoryEventListener(li) {
    li.addEventListener('click', function(event) {
        event.preventDefault();
        let oldDiv = document.getElementById("inner-quotes-div")
        if (oldDiv) {
            quotes.removeChild(oldDiv)
        }
        const categoryId = event.target.id;
        // const api = new ApiService;
        api.getQuotes(categoryId)
            .then(result => {
                // console.log("result", result);

                // let div = document.createElement("div")
                // div.setAttribute("id", "inner-quotes-div")
                return result.quotes.map(quote => {
                    const newQuote = new Quote(quote)
                    return newQuote.displayPhrase()
                    newQuote.phraseToDom()
                        // const p = document.createElement("p")
                        // p.classList.add('animate__animated', 'animate__backInRight');
                        // p.style.setProperty('--animate-duration', '.8s');
                        // p.innerText = `${newQuote.phrase}`
                        // div.appendChild(p)
                        // quotes.appendChild(div)
                        // return quotes;
                })
            })
    })
}

// function phraseToDom() {
//     const p = document.createElement("p")
//     p.classList.add('animate__animated', 'animate__backInRight');
//     p.style.setProperty('--animate-duration', '.8s');
//     p.innerText = `${this.phrase}`
//     div.appendChild(p)
//     quotes.appendChild(div)
//     return quotes;

// }