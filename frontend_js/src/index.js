document.addEventListener("DOMContentLoaded", function() {
    getCatagory();
    createNewQuote();
    // sortBy();
})
const api = new ApiService;

function getCatagory() {
    api.getCatagories("categories")
        .then(data => {
            data.forEach(d => {
                const newCategory = new Category(d)
                newCategory.categoryName()
            })
        })
}

function selectedRadioValue() {
    let radioVal;
    const radioBtns = Array.from(document.getElementsByClassName("radio"));
    radioBtns.forEach(btn => {
        if (btn.checked === true) {
            radioVal = btn.dataset.id
        }
    })
    return radioVal;
}

function createNewQuote() {
    const form = document.querySelector(".form-container");
    const button = document.getElementById("button");
    const radioBtns = Array.from(document.getElementsByClassName("radio"));
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const radioVal = selectedRadioValue();
        const phrase = e.target[5].value
        api.fetchCreateNewQuote(phrase, radioVal)
            .then(data => {
                checkError(data)
            })
        button.value = ""
        radioBtns.forEach(btn => btn.checked = false)
    })
}

function checkError(data) {
    if (data.message) {
        alert(data.message.phrase[0])
    } else {
        const newQuote = new Quote(data)
        newQuote.displayPhrase()
    }
}

function sortBy(quotes) {
    const divQuote = document.querySelector(".quotes")
    const button = document.createElement("button")
    button.innerHTML = "Sort"
    divQuote.appendChild(button)

    button.addEventListener("click", function() {
        while (divQuote.firstChild) {
            divQuote.removeChild(divQuote.firstChild)
        }
        const sortedQuotes = quotes.sort(compare)

        sortedQuotes.forEach(quote => {
            sortRender(quote)
                // const div = document.createElement("div")
                // div.setAttribute("id", "inner-quotes-div")
                // const newQuote = new Quote(quote)
                // const p = document.createElement("p")
                // p.classList.add('animate__animated', 'animate__backInRight');
                // p.style.setProperty('--animate-duration', '.8s');
                // p.innerText = `${newQuote.phrase}`
                // div.appendChild(p)
                // divQuote.appendChild(div)
        })
    })
    return divQuote
}

function compare(a, b) {
    let first = a.phrase;
    let second = b.phrase;
    let comparison = 0
    if (first > second) {
        comparison = 1
    } else if (first < second) {
        comparison = -1
    }
    return comparison
}

function sortRender(quote) {
    const div = document.createElement("div")
    div.setAttribute("id", "inner-quotes-div")
    const newQuote = new Quote(quote)
    const p = document.createElement("p")
    p.classList.add('animate__animated', 'animate__backInRight');
    p.style.setProperty('--animate-duration', '.8s');
    p.innerText = `${newQuote.phrase}`
    div.appendChild(p)
    quotes.appendChild(div)
}