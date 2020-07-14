document.addEventListener("DOMContentLoaded", function() {
    getCatagory();
    createNewQuote();
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
    let form = document.querySelector(".form-container");
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
        let newQuote = new Quote(data)
        newQuote.displayPhrase()
    }
}