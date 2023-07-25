import sqlite3

def create_table():
    conn = sqlite3.connect('anunciosSestaoNow.db')
    cur = conn.cursor()
    cur.execute("""CREATE TABLE IF NOT EXISTS anuncios (id INTEGER PRIMARY KEY AUTOINCREMENT,
	categoria TEXT,
	titulo TEXT,
	ubicacion TEXT,
	descripcion TEXT,
	nombre TEXT,
    telefono Text,
	fecha date)""")
    conn.commit()
    conn.close()

def add_anuncio(categoria, titulo,ubicacion,descripcion,nombre,telefono):
    conn = sqlite3.connect('anunciosSestaoNow.db')
    cur = conn.cursor()
    cur.execute("INSERT INTO anuncios (categoria, titulo, ubicacion, descripcion, nombre,telefono, fecha) VALUES (?, ?, ?, ?, ?, ?, date('now'))", (categoria, titulo, ubicacion, descripcion, nombre, telefono))
    conn.commit()
    conn.close()

def get_anuncios():
    conn = sqlite3.connect('anunciosSestaoNow.db')
    cur = conn.cursor()
    cur.execute("SELECT * FROM anuncios")
    anuncios = [{'id': row[0], 
                 'categoria': row[1], 
                 'titulo': row[2],
                 'ubicacion': row[3],
                 'descripcion': row[4],
                 'nombre': row[5],
                 'telefono': row[6],
                 'fecha': row[7]} for row in cur.fetchall()]
    conn.close()
    return anuncios

def get_anuncio_by_category(categoria):
    conn = sqlite3.connect('anunciosSestaoNow.db')
    cur = conn.cursor()
    #To create a tuple with only one item, you have to add a comma after the item, otherwise Python will not recognize it as a tuple.
    cur.execute("SELECT * FROM anuncios WHERE categoria = ?", (categoria,))
    # anuncio = cur.fetchall()
    anuncio = [{'id': row[0], 
                 'categoria': row[1], 
                 'titulo': row[2],
                 'ubicacion': row[3],
                 'descripcion': row[4],
                 'nombre': row[5],
                 'telefono': row[6],
                 'fecha': row[7]} for row in cur.fetchall()] 
    conn.close()
    return anuncio

def get_anuncio_by_id(id):
    conn = sqlite3.connect('anunciosSestaoNow.db')
    cur = conn.cursor()
    #To create a tuple with only one item, you have to add a comma after the item, otherwise Python will not recognize it as a tuple.
    cur.execute("SELECT * FROM anuncios WHERE id = ?", (id,))
    anuncio = cur.fetchone()
    if anuncio:
        anuncioDatos = {'id': anuncio[0], 
                 'categoria': anuncio[1], 
                 'titulo': anuncio[2],
                 'ubicacion': anuncio[3],
                 'descripcion': anuncio[4],
                 'nombre': anuncio[5],
                 'telefono': anuncio[6],
                 'fecha': anuncio[7]}
        conn.close()
        return anuncioDatos
    else:
        return 'Post no encontrado'    


def delete_anuncio(id):
    conn = sqlite3.connect('anunciosSestaoNow.db')
    cur = conn.cursor()
    cur.execute("DELETE FROM anuncios WHERE id = ?", (id,))
    conn.commit()
    conn.close()

def update_anuncio(id, new_categoria, new_titulo, new_ubicacion, new_descripcion, new_nombre, new_telefono):
    conn = sqlite3.connect('anunciosSestaoNow.db')
    cur = conn.cursor()
    cur.execute("""UPDATE anuncios SET 
                categoria = ?, 
                titulo = ?,
                ubicacion = ?,
                descripcion = ?,
                nombre = ?,
                telefono = ?
                WHERE id = ?""", (new_categoria,
                                  new_titulo, 
                                  new_ubicacion,
                                  new_descripcion,
                                  new_nombre,
                                  new_telefono,
                                  id))
    conn.commit()
    conn.close()
