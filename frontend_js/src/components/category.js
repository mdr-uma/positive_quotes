class Category {
    constructor({ id, name, quotes }) {
        this.id = id
        this.name = name
        this.quotes = quotes
    }

    categoryName() {
        const div = document.getElementById("category-name")
        const li = document.createElement("li")
        li.setAttribute("id", this.id)
        li.innerHTML = this.name
        categoryEventListener(li)
        div.appendChild(li)
        return div
    }
}

const quotes = document.querySelector(".quotes")

function categoryEventListener(li) {
    li.addEventListener('click', function(event) {
        event.preventDefault();
        const oldDiv = document.getElementById("inner-quotes-div")
        if (oldDiv) {
            quotes.removeChild(oldDiv)
        }
        const categoryId = event.target.id;
        api.getQuotes(categoryId)
            .then(result => {
                appendResult(result)
            })
    })
}

function appendResult(result) {
    const div = document.createElement("div")
    div.setAttribute("id", "inner-quotes-div")
    result.quotes.map(quote => {
        const newQuote = new Quote(quote)
        const p = document.createElement("p")
        p.classList.add('animate__animated', 'animate__backInRight');
        p.style.setProperty('--animate-duration', '.8s');
        p.innerText = `${newQuote.phrase}`
        div.appendChild(p)
        quotes.appendChild(div)
        return quotes;
    })
}