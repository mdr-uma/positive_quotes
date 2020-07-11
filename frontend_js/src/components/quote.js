const quotes = document.querySelector(".quotes")

class Quote {
    constructor({ id, phrase, category_id }) {
        this.id = id
        this.phrase = phrase
        this.categoryId = category_id
    }
    displayPhrase() {
        const innerDiv = document.getElementById("inner-quotes-div")
        if (innerDiv) {
            quotes.removeChild(innerDiv)
        }
        let div = document.createElement("div")
        div.setAttribute("id", "inner-quotes-div")
        const p = document.createElement("p")
        p.classList.add('animate__animated', 'animate__backInRight');
        p.style.setProperty('--animate-duration', '.8s');
        p.innerText = `${this.phrase}`
        div.appendChild(p)
        quotes.appendChild(div)
        return quotes;
    }
}
