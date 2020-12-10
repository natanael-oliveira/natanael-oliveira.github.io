import { AnimationFade, AnimationCarouselModal, Showdown, AnimationWriteScript, AnimationLoad } from './animations';
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