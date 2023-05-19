'use strict';

window.addEventListener('DOMContentLoaded', (e) => {

function formTable(selector){
    var wrapper = document.querySelector(selector);
    var form = document.querySelector('form');
    var table = document.querySelector('table');

    form.onkeyup = function(ev){
        var 
        id = form.elements[0].value,
        boock = form.elements[1].value,
        autor = form.elements[2].value,
        tip = form.elements[3].value,
        izdat = form.elements[4].value,
        str = form.elements[5].value,
        data1 = form.elements[6].value,
        data2 = form.elements[7].value,
        status = form.elements[8].value;

        for(var i = 1; i < table.rows.length; i++){
            table.rows[i].classList.remove('hide');
            if(
                table.rows[i].cells[0].innerHTML.indexOf(id) == -1 ||
                table.rows[i].cells[1].innerHTML.indexOf(boock) == -1 ||
                table.rows[i].cells[2].innerHTML.indexOf(autor) == -1 ||
                table.rows[i].cells[3].innerHTML.indexOf(tip) == -1 ||
                table.rows[i].cells[4].innerHTML.indexOf(izdat) == -1 ||
                table.rows[i].cells[5].innerHTML.indexOf(str) == -1 ||
                table.rows[i].cells[6].innerHTML.indexOf(data1) == -1 ||
                table.rows[i].cells[7].innerHTML.indexOf(data2) == -1 ||
                table.rows[i].cells[8].innerHTML.indexOf(status) == -1 
            ){
                table.rows[i].classList.add('hide');
            }
        }
    }

}
formTable('.wrapper');
})