document.addEventListener("DOMContentLoaded", function() {
    getCatagory();
})

function getCatagory() {
    const api = new ApiService;
    api.getCatagories("categories")
        .then(data => {
            data.forEach(d => {
                const newCategory = new Category(d)
                newCategory.categoryName
            })
        })
}