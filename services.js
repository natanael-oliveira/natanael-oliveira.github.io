import api from './api';
import { AnimationGallery } from './animations';
export class ProjetoService {
    constructor() {
        this.animationGallery = new AnimationGallery({
            btnCloseEL: '.modal_btn_close',
            modalEl: '.modal_container',
            btnPrevEl: '.btn_prev',
            btnNextEl: '.btn_next',
            imageCarouselEl: '.carousel_img_active',
            galeriaEl: '.galeria_content',
            nameClassImages: '.galeria_item_img',
            modalTextEl: ".modal_text",
            modalTitleEl: ".modal_title",
            btnDemoEl: ".modal_btn_link_demo",
            btnGithubEl: ".modal_btn_link_github"
        });
        this.render()
    }
    async render() {
        var data = await api.get('data.json')
        for (var projeto of data.data.projetos) {
            this.animationGallery.setProjetos(projeto)
        }
        this.animationGallery.render()
    }
}