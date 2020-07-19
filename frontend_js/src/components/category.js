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
                sortBy(result.quotes);
            })
    })
}

function appendResult(result) {
    const divQuote = document.querySelector(".quotes")
    while (divQuote.firstChild) {
        divQuote.removeChild(divQuote.firstChild)
    }
    result.quotes.map(quote => {
        sortRender(quote)
    })
}