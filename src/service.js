export default class Service {
    #tableName = ''
    constructor({ tableName }) {
        this.#tableName = tableName
    }

    #getItems() {
        return JSON.parse(localStorage.getItem(this.#tableName)) ?? []
    }

    async seedInitialItems(defaultItems) {
        const existing = JSON.parse(localStorage.getItem(this.#tableName))
        // só popula se nunca foi inicializado (null), pra não "ressuscitar"
        // itens que o usuário já deletou de propósito
        if (existing !== null) return

        this.#setItems(defaultItems)
    }

    async deleteItem({ title, imageUrl }) {
        const items = this.#getItems()
        const index = items.findIndex(item => item.title === title && item.imageUrl === imageUrl)

        if (index === -1) return

        items.splice(index, 1)
        await this.#sleep(200)
        this.#setItems(items)
    }

    #setItems(items) {
        localStorage.setItem(this.#tableName, JSON.stringify(items))
    }

    #sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async saveItem(item) {
        const items = this.#getItems()
        items.push(item)
        await this.#sleep(200)
        this.#setItems(items)
        return;
    }

    async getItems() {
        await this.#sleep(200)
        return this.#getItems()
    }
}