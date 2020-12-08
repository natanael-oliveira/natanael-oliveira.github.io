export class AnimaçaoFadeScroll {
    constructor({ element }) {
        this.el = document.querySelector(element)
        this.el.classList.add('element_fadeOut')
        this.elTopSize = this.el.getBoundingClientRect().top
        this.toggle
        this.eventListener()
    }
    eventListener() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > this.elTopSize - 200) {
                this.toggle ? null : this.opacityElement();
                this.toggle = true
            }
        })
    }
    opacityElement() {
        this.el.classList.add('element_fadeIn')
    }
}
export class AnimationGallery {
    constructor({ modalEl, nameClassImages, btnCloseEL, btnPrevEl, btnNextEl, imageCarouselEl, galeriaEl, modalTitleEl, modalTextEl, btnGithubEl, btnDemoEl }) {
        this.modal = document.querySelector(modalEl)
        this.modal_img = document.querySelector(imageCarouselEl)
        this.modal_title = document.querySelector(modalTitleEl)
        this.modal_text = document.querySelector(modalTextEl)
        this.modal_link_github = document.querySelector(btnGithubEl)
        this.modal_link_demo = document.querySelector(btnDemoEl)
        this.nameClassImages = nameClassImages
        this.btn_close = document.querySelector(btnCloseEL)
        this.btn_prev = document.querySelector(btnPrevEl)
        this.btn_next = document.querySelector(btnNextEl)
        this.galeriaContent = document.querySelector(galeriaEl)
        this.active_model
        this.id_projeto_ativo = 0
        this.id_image_ativa = 0
        this.projetos = []
        this.baseUrlImgs = './images/posts/'
    }
    setProjetos(projeto) { this.projetos.push(projeto) }
    getProjetos() { console.log(this.projetos) }
    eventListener(imgsEl) {
        this.btn_close.addEventListener('click', () => {
            this.toggle(null)
            this.modal_title.innerHTML = ''
            this.modal_text.innerHTML = ''
        })
        this.btn_prev.addEventListener('click', () => {
            if (this.id_image_ativa > 0) {
                this.id_image_ativa--
                this.modalHandlerImgActive(this.projetos[this.id_projeto_ativo].images[this.id_image_ativa])
            }
        })
        this.btn_next.addEventListener('click', () => {
            if (this.id_image_ativa < this.projetos[this.id_projeto_ativo].images.length - 1) {
                this.id_image_ativa++
                this.modalHandlerImgActive(this.projetos[this.id_projeto_ativo].images[this.id_image_ativa])
            }
        })
        for (let i = 0; i < imgsEl.length; i++) {
            imgsEl[i].addEventListener('click', () => {
                this.modalHandler(this.projetos[i].images[0], this.projetos[i])
                this.toggle(i)
            })
        }
    }
    toggle(idProject) {
        this.modal.classList.toggle('modal_active')
        this.active_model = !this.active_model
        this.active_model ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
        this.id_projeto_ativo = idProject
        this.id_image_ativa = 0
    }
    modalHandler(imgSrc, project) {
        this.modal_img.setAttribute('src', this.baseUrlImgs + imgSrc)
        this.modal_title.appendChild(document.createTextNode(project.name))
        this.modal_text.appendChild(document.createTextNode(project.description))
        this.modal_link_github.setAttribute('href', project.github)
        this.modal_link_demo.setAttribute('href', project.demo)
    }
    modalHandlerImgActive(imgSrc) {
        this.modal_img.setAttribute('src', this.baseUrlImgs + imgSrc)
    }
    galerialHandler(id, imgUrl) {
        let item = document.createElement('div')
        let itemContent = document.createElement('div')
        let img = document.createElement('img')

        item.classList.add('galeria_item')
        itemContent.classList.add('galeria_item_content')
        img.classList.add('galeria_item_img')

        img.setAttribute('id', id)
        img.setAttribute('src', this.baseUrlImgs + imgUrl)

        itemContent.appendChild(img)
        item.appendChild(itemContent)
        this.galeriaContent.appendChild(item)
    }
    render() {
        for (var projeto of this.projetos) {
            this.galerialHandler(projeto.id, projeto.images[0])
        }
        let imgsEl = document.querySelectorAll(this.nameClassImages)
        this.eventListener(imgsEl)
    }

}