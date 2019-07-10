'use strict';

const response = require('./res');
const connection = require('../conn');

exports.users = function(req, res){
    connection.query('SELECT * FROM Guru', function(error,rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};
exports.cariGuru = function(req,res){
    const NIP = req.params.nip;

    connection.query('SELECT * FROM Guru where nip=?', [NIP],
    function (error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res)
        }
    });
};
exports.tambahGuru = function(req, res){
    const Nama = req.body.nama;
    const Alamat = req.body.alamat;
    const Tgl_Masuk = req.body.tglMasuk;
    const imgGuru = 'http://192.168.5.222:8081/Public/images/guru/' + req.body.nama + '.' + 'jpg'

    connection.query('INSERT INTO Guru (nama, alamat, tglMasuk, imgGuru) values (?,?,?,?)',
    [Nama, Alamat, Tgl_Masuk, imgGuru],
    function (error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("berhasil menambah user", res)
        }
    });
}
exports.updateGuru = function(req, res){
    const NIP = req.params.nip;
    const Nama = req.body.nama;
    const Alamat = req.body.alamat;
    const Tgl_Keluar = req.body.tglKeluar;
    const imgGuru = 'http://192.168.5.222:8081/Public/images/guru/' + req.body.nama + '.' + 'jpg'

    connection.query('UPDATE Guru SET nama=?, alamat=?, tglKeluar=?, imgGuru=? WHERE nip=?',
    [Nama,Alamat,Tgl_Keluar,imgGuru, NIP],
    function (error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("Berhasil update Guru", res)
        }
    });
};

