import { pageLoad, clearBody } from './pageLoad'
import { loadHome } from './loadHome'
import { loadMenu } from './loadMenu'
import { loadContact } from './loadContact'

//initialize
pageLoad();
loadHome();

//listeners
document.getElementById('homeTab').addEventListener('click', e => {
    clearBody();
    loadHome();
})
document.getElementById('menuTab').addEventListener('click', e => {
    clearBody();
    loadMenu();
})
document.getElementById('contactTab').addEventListener('click', e => {
    clearBody();
    loadContact();
})


