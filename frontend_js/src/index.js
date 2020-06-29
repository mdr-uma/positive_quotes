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
                newCategory.categoryName
            })
        })
}

function createNewQuote() {
    const radioBtns = Array.from(document.getElementsByClassName("radio"));

    radioBtns.forEach(btn => {
        btn.addEventListener("click", function(e) {
            let categoryId = e.target.dataset.id;
            let form = document.querySelector(".form-container");
            const button = document.getElementById("button");
            form.addEventListener("submit", function(e) {
                e.preventDefault();
                const phrase = e.target[4].value
                api.fetchCreateNewQuote(phrase, categoryId)
                    .then(data => {
                        let newQuote = new Quote(data)
                        newQuote.displayPhrase
                    })
                button.value = ""
                radioBtns.forEach(btn => btn.checked = false)
            })
        })

    })
}