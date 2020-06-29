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
        let quotes = document.querySelector(".quotes")
        let oldDiv = document.getElementById("inner-quotes-div")
        if (oldDiv) {
            quotes.removeChild(oldDiv)
        }
        const categoryId = event.target.id;
        const api = new ApiService;
        api.getQuotes(categoryId)
            .then(result => {
                let div = document.createElement("div")
                div.setAttribute("id", "inner-quotes-div")
                result.quotes.map(quote => {
                    const newQuote = new Quote(quote)
                    newQuote.displayPhrase(div)
                })
            })
    })
}

