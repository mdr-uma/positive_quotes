class ApiService {
    constructor() {
        this.baseUrl = "http://localhost:3000/"
    }

    getCatagories(c) {
        return fetch(`${this.baseUrl}${c}`)
            .then(res => res.json())
    }

    getQuotes(q) {
        return fetch(`${this.baseUrl}categories/${q}`)
            .then(res => res.json())
    }
}