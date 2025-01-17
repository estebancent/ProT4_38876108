import {pool} from './database.js';

class LibroController{
   async getAll(req, res) {
        const [result] = await pool.query('SELECT * FROM libros');
        res.json(result);
    }
    async add(req, res) {
        const [libro] =  req.body;
        const [result] = await pool.query('INSERT INTO Libros(nombre,autor,categoria,año-publicacion,ISBN) VALUES(?,?,?,?,?)', [libro.nombre, libro.autor, libro.categoria,libro.año-publicacion, libro.ISBN]);
        
        res.json({"ID insertado ": result.insertId});
    }
}

export const libro = new LibroController();
