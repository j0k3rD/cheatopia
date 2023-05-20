// Crear un elemento <div> para mostrar el mensaje
var messageDiv = document.createElement('div');

// Estilo de la barra
messageDiv.style.position = 'fixed';
messageDiv.style.bottom = '0';
messageDiv.style.left = '0';
messageDiv.style.width = '100%';
messageDiv.style.backgroundColor = 'lightgray';
messageDiv.style.padding = '1px';
messageDiv.style.textAlign = 'center';
messageDiv.style.fontWeight = 'bold';
messageDiv.style.zIndex = '9999'; // Asegura que el elemento se muestre por encima de otros elementos
messageDiv.style.color = 'black';

// Agregar el elemento <div> a la página
document.body.insertBefore(messageDiv, document.body.firstChild);

// Mostrar el texto copiado en messageDiv cuando se realice Ctrl+C y buscarlo en Google
document.addEventListener('copy', function(event) {
  var selectedText = window.getSelection().toString();
  event.preventDefault(); // Evitar la copia del texto en el portapapeles por defecto


  // Envía el texto seleccionado al servidor
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:7000/search', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var result = JSON.parse(xhr.responseText);
      // Muestra el resultado en la pantalla
      alert(result);
    }
  };
  xhr.send(JSON.stringify({ text: selectedText }));
});
  // // Realizar búsqueda en Google
  // var searchQuery = encodeURIComponent(selectedText);
  // var searchUrl = 'https://www.google.com/search?q=' + searchQuery;

  // // Obtener el título del primer resultado de búsqueda
  // fetch(searchUrl)
  //   .then(response => response.text())
  //   .then(html => {
  //     var parser = new DOMParser();
  //     var doc = parser.parseFromString(html, 'text/html');
  //     var firstResult = doc.querySelector('h3');
  //     var firstResultTitle = firstResult ? firstResult.innerText : 'No se encontraron resultados';
  //     messageDiv.innerText = firstResultTitle; // Mostrar el título del primer resultado en messageDiv
  //   })
  //   .catch(error => {
  //     console.error('Error al realizar la búsqueda:', error);
  //   });
});