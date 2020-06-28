class Quote {
    constructor({ id, phrase, category_id }) {
        this.id = id
        this.phrase = phrase
        this.categoryId = category_id
    }

    get displayPhrase() {
        let quotes = document.querySelector(".quotes")
        let div = document.createElement("div")
        div.innerHTML = `<p>${this.phrase}</p>`
        quotes.appendChild(div)
        return quotes;
    }

    // static createNewQuote() {
    //     let form = document.querySelector(".form-container")
    //     form.addEventListener("submit", function(e) {
    //         e.preventDefault();
    //     })
    // }
}