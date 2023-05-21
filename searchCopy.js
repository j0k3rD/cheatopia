// Crear un elemento <div> para mostrar el mensaje
var messageDiv = document.createElement('div');

// Estilo de la barra
messageDiv.style.position = 'fixed';
messageDiv.style.bottom = '0';
messageDiv.style.left = '0';
messageDiv.style.width = '100%';
messageDiv.style.maxHeight = '19px';
messageDiv.style.overflow = 'auto'; // Permitir desplazamiento vertical
messageDiv.style.backgroundColor = 'lightgray';
messageDiv.style.padding = '1px';
messageDiv.style.textAlign = 'center';
messageDiv.style.zIndex = '9999'; // Asegura que el elemento se muestre por encima de otros elementos
messageDiv.style.color = 'black';

// Agregar el elemento <div> a la página
document.body.insertBefore(messageDiv, document.body.firstChild);

// Mostrar el texto copiado en messageDiv cuando se realice Ctrl+C y buscarlo en Google
document.addEventListener('copy', async function(event) {
  var selectedText = window.getSelection().toString();
  event.preventDefault(); // Evitar la copia del texto en el portapapeles por defecto

  const apiKey = "your-openai-api-key"; // Reemplaza con tu propia clave de API de OpenAI 

  const data = {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: selectedText }],
    temperature: 0.7
  };

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.status);
    }

    const result = await response.json();
    var responseText = result.choices[0].message.content;

    // Mostrar el texto copiado y el texto generado en messageDiv
    messageDiv.innerHTML = responseText;
  } catch (error) {
    console.error('Error:', error);
  }
});