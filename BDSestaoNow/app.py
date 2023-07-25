from flask import Flask, jsonify, request
import database
# importante agregar las 2 lineas de codigo para las CORS
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Crear la tabla si no existe
database.create_table()

# POST nuevo articulo
@app.route('/add', methods=['POST'])
def add_post():
    data = request.get_json()
    categoria = data['categoria']
    titulo = data['titulo']
    ubicacion = data['ubicacion']
    descripcion = data['descripcion']
    nombre = data['nombre']
    telefono = data['telefono']
    database.add_anuncio(categoria,titulo,ubicacion,descripcion,nombre,telefono)
    return "Anuncio agregada exitosamente"

# GET ALL
@app.route('/categoria', methods=['GET'])
def list_anuncios():
    anuncios = database.get_anuncios()
    return jsonify(anuncios)

# Get one by ID
@app.route('/anuncio/<id>', methods=['GET'])
def get_one_by_id(id):
    anuncio = database.get_anuncio_by_id(id)
    return jsonify(anuncio)

# GET ONE CATEGORY COMIDA / SERVICIOS / EMPLEO
@app.route('/categoria/<categoria>', methods=['GET'])
def get_anuncio_comida(categoria):
    anuncio = database.get_anuncio_by_category(categoria)
    return jsonify(anuncio)


# DELETE
@app.route('/delete/<id>', methods=['DELETE'])
def delete_pelicula(id):
    database.delete_anuncio(id)
    return "Anuncio eliminado exitosamente"

# UPDATE 
@app.route('/anuncio/<id>', methods=['PUT'])
def update_pelicula(id):
    data = request.get_json()
    new_categoria = data['categoria']
    new_titulo = data['titulo']
    new_ubicacion = data['ubicacion']
    new_descripcion = data['descripcion']
    new_nombre = data['nombre']
    new_telefono = data['telefono']
    
    database.update_anuncio(id, new_categoria, new_titulo, new_ubicacion, new_descripcion, new_nombre, new_telefono)
    return "Anuncio actualizado exitosamente"

