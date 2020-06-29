class Quote {
    constructor({ id, phrase, category_id }) {
        this.id = id
        this.phrase = phrase
        this.categoryId = category_id
    }

    displayPhrase(div) {
        let quotes = document.querySelector(".quotes")
        let p = document.createElement("p")
        p.innerText = `${this.phrase}`
        div.appendChild(p)
        quotes.appendChild(div)
        return quotes;
    }
}