import ProjetoService from './projetoService';
import showdown from 'showdown';
import Typewriter from 'typewriter-effect/dist/core';
import api from './api';


export class AnimationFade {
    constructor({ element }) {
        this.el = document.querySelector(element)
        this.elTopSize = this.el.getBoundingClientRect().top
        this.toggle
        this.opacityElement(0)
        this.eventListener()
    }
    eventListener() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > this.elTopSize - 200 && this.toggle != true) {
                this.opacityElement(1);
                this.toggle = true
            }
        })
    }
    opacityElement(n) {
        this.el.style.transition = 'opacity .9s linear'
        this.el.style.opacity = n
    }
}


export class AnimationCarouselModal {
    constructor() {
        this.modal = document.querySelector(".modal_container")
        this.btnClose = document.querySelector(".modal_btn_close")
        this.modalTitle = document.querySelector(".modal_title")
        this.modalDescription = document.querySelector(".modal_description")
        this.btnGithub = document.querySelector(".modal_btn_github")
        this.btnDemo = document.querySelector(".modal_btn_demo")
        this.gallery = document.querySelector(".galeria_content")
        this.carousel = document.querySelector('.carousel-inner')
        this.projetoService = new ProjetoService()
        this.pathPosts = './posts/'
        this.projects
        this.activeProject
        this.activeModal
        this.imagesGallery
        this.imagesCarousel
        this.render()
    }
    reset() {
        this.modalTitle.innerHTML = ''
        this.modalDescription.innerHTML = ''
        this.carousel.innerHTML = ''
    }
    async render() {
        this.projects = await this.projetoService.list()
        for (var projeto of this.projects) { this.buildGallery(projeto.id, projeto.banner) }
        this.imagesGallery = document.querySelectorAll('.galeria_item_img')
        this.eventListener()
    }
    eventListener() {
        for (let i = 0; i < this.imagesGallery.length; i++) {
            this.imagesGallery[i].addEventListener('click', () => {
                this.buildModal(i)
                this.toggle(i)
            })
        }
        this.btnClose.addEventListener('click', () => {
            this.toggle(null)
            this.reset()
        })
    }
    buildGallery(id, imgPath) {
        var item = document.createElement('div')
        var itemContent = document.createElement('div')
        var img = document.createElement('img')

        item.classList.add('galeria_item')
        itemContent.classList.add('galeria_item_content')
        img.classList.add('galeria_item_img')

        img.setAttribute('id', id)
        img.setAttribute('src', this.pathPosts + imgPath)

        itemContent.appendChild(img)
        item.appendChild(itemContent)
        this.gallery.appendChild(item)
    }
    buildModal(id) {
        this.modalTitle.appendChild(document.createTextNode(this.projects[id].name))
        this.modalDescription.appendChild(document.createTextNode(this.projects[id].description))
        if (this.projects[id].github != "") {
            this.btnGithub.style.display = "block"
            this.btnGithub.setAttribute('href', this.projects[id].github)
        } else {
            this.btnGithub.style.display = "none"
        }
        if (this.projects[id].demo != "") {
            this.btnDemo.style.display = "block"
            this.btnDemo.setAttribute('href', this.projects[id].demo)
        } else {
            this.btnDemo.style.display = "none"
        }
        for (let i = 0; i < this.projects[id].images.length; i++) {
            var div = document.createElement('div')
            div.classList.add('carousel-item')
            i === 0 ? div.classList.add('active') : null
            var img = document.createElement('img')
            img.setAttribute('class', 'd-block')
            img.setAttribute('src', this.pathPosts + this.projects[id].images[i])
            img.style.maxHeight = '400px'
            div.appendChild(img)
            this.carousel.appendChild(div)
        }
    }

    toggle(idProject) {
        this.modal.classList.toggle('active_modal')
        this.activeModal = !this.activeModal
        this.activeModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
        this.activeProject = idProject
    }
}



export class Showdown {
    constructor({ pathOrigin, outputElement }) {
        this.convert = new showdown.Converter();
        this.arqPath = pathOrigin
        this.outputEl = document.querySelector(outputElement);
        this.render()
    }
    async render() {
        var arquivo = await api.get(this.arqPath)
        this.outputEl.innerHTML = this.convert.makeHtml(arquivo.data)
    }
}
export class AnimationWriteScript {
    constructor({ element }) {
        this.app = document.querySelector(element)
        this.typewriter = new Typewriter(this.app, { loop: true });
        this.render()
    }
    render() {
        this.typewriter.typeString('Web Developer')
            .pauseFor(2500)
            .deleteChars(15)
            .typeString('Estudante de Programação')
            .pauseFor(2500)
            .deleteAll()
            .typeString('Técnico de Informática')
            .pauseFor(2500)
            .deleteAll()
            .typeString('Web Designer')
            .pauseFor(2500)
            .deleteAll()
            .typeString('Sou um pouco de tudo!')
            .pauseFor(2500)
            .deleteAll()
            .start();

    }

}
export class AnimationLoad {
    constructor({ elementLoader }) {
        this.el = document.querySelector(elementLoader)
        this.eventListener()
    }
    eventListener() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.el.style.visibility = 'hidden'
                this.el.style.opacity = 0
                document.body.style.overflow = 'auto';
            }, 500)
        })
    }
}