import { ProjetoService } from './services';
import { AnimaçaoFadeScroll, showdownConvert } from './animations';
import Typewriter from 'typewriter-effect/dist/core';
new AnimaçaoFadeScroll({
    element: '.galeria_content'
});
new ProjetoService();
new showdownConvert({
    outputElement: '.infor_right',
    pathOrigin: 'infor.markdown'
})

var app = document.querySelector('.header')
var typewriter = new Typewriter(app, { loop: true });
typewriter.typeString('Web Developer')
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
    .deleteChars(8)
    // .deleteAll()
    .start();
