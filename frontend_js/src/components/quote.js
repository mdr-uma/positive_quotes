class Quote {
    constructor({ id, phrase, category_id }) {
        this.id = id
        this.phrase = phrase
        this.categoryId = category_id
    }

    get display() {
        let quotes = document.querySelector(".quotes")
        let div = document.createElement("div")
        div.innerHTML = `<p>${this.phrase}</p>`
        quotes.appendChild(div)
        return quotes;
    }

    // renderQuotes() {
    //     let div = document.querySelector(".quotes")
    //     div.innerHTML = `<p>${this.phrase}</p>`
    //     quotes.appendChild(div)
    // }
}