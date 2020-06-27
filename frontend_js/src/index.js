document.addEventListener("DOMContentLoaded", function() {
    getCatagory();
    getQuote();
})

function getCatagory() {
    const categoryApi = new ApiService;
    categoryApi.getCatagories("categories")
        .then(data => {
            data.forEach(d => {
                const newCategory = new Category(d)
                newCategory.categoryName
            })
        })
}

function getQuote() {
    const quoteApi = new ApiService;

}