import os
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

from selenium.webdriver.firefox.service import Service
from selenium.webdriver.edge.options import Options



user_agent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.0.0'
# Edge path for Linux
edge_driver_path = os.path.join(os.getcwd(), '/home/j0k3r/Descargas/msedgedriver')
edge_service = Service(edge_driver_path)
edge_options = Options()
edge_options.add_argument(f'user-agent={user_agent}')

# Configuración de Selenium y el navegador Firefox
browser = webdriver.Edge(service=edge_service, options=edge_options)

# Realiza la búsqueda en https://chat.openai.com
# def search():
#Inicializa el navegador
browser.get('https://bing.com')
#Buscar por id
WebDriverWait(browser, 10)\
    .until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'textarea#prompt-textarea'))).send_keys('2x2')
#Dar click en el boton
WebDriverWait(browser, 10)\
    .until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'svg.absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40'))).click()
    

    # Realiza la búsqueda y guarda el resultado

# # Escucha las solicitudes del navegador
# from flask import Flask, request, jsonify
# app = Flask(__name__)

# @app.route('/search', methods=['POST'])
# def recive_text():
#   text = request.json['text']
#   response = search(text)
#   return jsonify(response)

# if __name__ == '__main__':
#   app.run()
