const WAS_VALIDATED_CLASS = 'was-validated'
export default class View {
    #forms = document.querySelectorAll('.needs-validation')
    #title = document.querySelector('#title')
    #cardList = document.querySelector('#card-list')

    #submitFn = () => { }
    #deleteFn = () => { }
    constructor() { }

    initialize() {
    for (const form of this.#forms) {
        form.addEventListener('submit', this.#onSubmit(form), false)
    }

    this.#cardList.addEventListener('click', (event) => {
            const button = event.target.closest('[data-image-url]')
            if (!button) return

            const { title, imageUrl } = button.dataset
            this.#deleteFn({ title, imageUrl })
            button.closest('article').remove()
        })
    }

    /**
     * @param {HTMLFormElement} form
     */
    #onSubmit(form) {
        /**
         * @param {Event} event
         */
        return (event) => {
            form.classList.add(WAS_VALIDATED_CLASS)
            event.preventDefault()
            event.stopPropagation()

            if (!form.checkValidity()) {
                const element = [...form.elements].find(item => !item.checkValidity())
                element?.focus()
                return;
            }

            form.classList.remove(WAS_VALIDATED_CLASS)

            this.#title.focus()

            this.#submitFn({
                title: form.title.value,
                imageUrl: form.imageUrl.value
            })

            form.reset()
        }
    }
    /**
     * @param {function} onSubmit
     */
    configureOnSubmit(onSubmit) {
        this.#submitFn = onSubmit
    }
    configureOnDelete(onDelete) {
        this.#deleteFn = onDelete
    }

    /**
    * @param {object[]} items
    * @param {string} items[].title
    * @param {string} items[].imageUrl
    */
    updateList(items) {
        const template = ({ imageUrl, title }) => `
        <article class="col-md-12 col-lg-4 col-sm-3 top-30">
                <div class="card">
                    <figure>
                        <img class="card-img-top card-img"
                            src="${imageUrl}"
                            alt="Image of an ${title}">
                        <figcaption>
                            <h4 class="card-title">${title}</h4>
                        </figcaption>
                    </figure>
                    <button
                        class="btn btn-danger m-2"
                        data-title="${title}"
                        data-image-url="${imageUrl}"
                        aria-label="Delete image ${title}">
                        🗑️ Delete
                    </button>
                </div>
            </article>
        `

        this.#cardList.innerHTML += items.map(template).join('')
    }
}