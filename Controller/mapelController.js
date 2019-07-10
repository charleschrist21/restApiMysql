'use strict';

const response = require('./res');
const connection = require('../conn');

exports.mapel = function(req, res){
    connection.query('SELECT * FROM Mapel', function(error,rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};
exports.cariMapel = function(req,res){
    const Id_Mapel = req.params.id;

    connection.query('SELECT * FROM Mapel where Id_Mapel=?', [Id_Mapel],
    function (error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res)
        }
    });
};
exports.tambahMapel = function(req, res){
    const Nama_Mapel = req.body.nama;

    connection.query('INSERT INTO Mapel (Nama_Mapel) values (?)',
    [Nama_Mapel],
    function (error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("berhasil menambah Mapel", res)
        }
    });
}
exports.updateMapel = function(req, res){
    const Id_Mapel = req.params.id;
    const Nama_Mapel = req.body.nama;
    
    connection.query('UPDATE Mapel SET Nama_Mapel=? WHERE Id_Mapel=?',
    [Nama_Mapel, Id_Mapel],
    function (error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("Berhasil update Mapel", res)
        }
    });
};
exports.deleteMapel = function(req, res) {
    
    const Id_Mapel= req.params.id;

    connection.query('DELETE FROM Mapel WHERE Id_Mapel = ?',
    [ Id_Mapel ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus Mapel!", res)
        }
    });
};

