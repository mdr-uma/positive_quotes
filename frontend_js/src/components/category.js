class Category {
    constructor({ id, name, quotes }) {
        this.id = id
        this.name = name
        this.quotes = quotes
    }
    get categoryName() {
        const div = document.getElementById("category-name")
        const li = document.createElement("li")
        li.classList.add('animate__animated', 'animate__fadeIn');
        li.style.setProperty('--animate-duration', '3s');
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
                    const quotes = document.querySelector(".quotes")
                    const p = document.createElement("p")
                    p.classList.add('animate__animated', 'animate__backInRight');
                    p.style.setProperty('--animate-duration', '.8s');
                    p.innerText = `${newQuote.phrase}`
                    div.appendChild(p)
                    quotes.appendChild(div)
                    return quotes;
                })
            })
    })
}