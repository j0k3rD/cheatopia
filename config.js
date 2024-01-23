document.addEventListener("DOMContentLoaded", function () {
  var configForm = document.getElementById("configForm");

  configForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var apiKeyInput = document.getElementById("apiKey");
    var apiKey = apiKeyInput.value;

    // Guardar la API key en el almacenamiento de la extensión
    chrome.storage.local.set({ apiKey: apiKey }, function () {
      console.log("API key guardada:", apiKey);

      // Enviar un mensaje al fondo para indicar que la API key ha sido configurada
      chrome.runtime.sendMessage(
        { apiKeyConfigured: true },
        function (response) {
          console.log(response.message);
        }
      );
    });

    // Cerrar la ventana de configuración
    window.close();
  });
});
