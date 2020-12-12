import { AnimationFade, AnimationCarouselModal, Showdown, AnimationWriteScript, AnimationLoad } from './animations';
import '@fortawesome/fontawesome-free/js/all';
new AnimationFade({
    element: '#habilidades'
});
new AnimationFade({
    element: '#projetos'
});
new AnimationCarouselModal()
new Showdown({
    outputElement: '.infor_right',
    pathOrigin: './infor.markdown'
})
new AnimationWriteScript({
    element: '.header'
})
new AnimationLoad({
    elementLoader: '#load'
})