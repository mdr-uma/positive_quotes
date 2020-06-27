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
// let quotes = document.querySelector(".quotes")

function categoryEventListener(li) {
    li.addEventListener('click', function(event) {
        event.preventDefault();
        const categoryId = event.target.id;
        const api = new ApiService;
        api.getQuotes(categoryId)
            .then(result => {
                result.quotes.map(quote => {
                    const newQuote = new Quote(quote)
                    newQuote.display
                })
            })

        // let div = document.createElement("div")
        // div.innerHTML = `<p>${this.phrase}</p>`
        // quotes.appendChild(div)

    })
}