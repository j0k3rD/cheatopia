//searchGoogle.js
//Buscamos el input text llamado q y le asignamos el valor que queremos buscar
document.querySelector('input[name="q"]').value = 'Hello World!';
//Creamos el evento click
var evt = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
});
//Si no se cancela el evento, lo ejecutamos
var canceled = !document.querySelector('input[name="btnK"]').dispatchEvent(evt);
