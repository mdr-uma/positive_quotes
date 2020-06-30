class Quote {
    constructor({ id, phrase, category_id }) {
        this.id = id
        this.phrase = phrase
        this.categoryId = category_id
    }
    displayPhrase() {
        const quotes = document.querySelector(".quotes")
        if (document.getElementById("inner-quotes-div")) {
            quotes.removeChild(document.getElementById("inner-quotes-div"))
        }

        let div = document.createElement("div")
        div.setAttribute("id", "inner-quotes-div")
        const p = document.createElement("p")
        p.innerText = `${this.phrase}`
        div.appendChild(p)
        quotes.appendChild(div)
        return quotes;
    }
}