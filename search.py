import os
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

from selenium.webdriver.edge.service import Service
from selenium.webdriver.edge.options import Options


# Edge path for Linux
edge_service = Service("/home/j0k3r/Descargas/msedgedriver")

# Configuración de Selenium y el navegador Firefox
browser = webdriver.Edge(service=edge_service)

# Realiza la búsqueda en https://chat.openai.com
# def search():
#Inicializa el navegador
browser.get("https://www.bing.com/ck/a?!&&p=c43bc6b638c064d5JmltdHM9MTY4NDU0MDgwMCZpZ3VpZD0zOTZhYTM0OC0zNTJkLTZjMmUtM2M0NS1iMDRlMzQ4ODZkNTAmaW5zaWQ9NTE4Nw&ptn=3&hsh=3&fclid=396aa348-352d-6c2e-3c45-b04e34886d50&psq=chat+bing&u=a1aHR0cHM6Ly9iaW5nLmNvbS9jaGF0&ntb=1")

WebDriverWait(browser, 10)\
    .until(EC.element_to_be_clickable((By.CSS_SELECTOR,
                                       'button.tone-precise')))\
                                        .click()

WebDriverWait(browser, 10)\
    .until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'div.main-container'))).click()

WebDriverWait(browser, 10)\
    .until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'label.text-input'))).send_keys('2x2')
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
