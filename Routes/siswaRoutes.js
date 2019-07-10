const express           = require('express');
const router            = express.Router();
const siswaController    = require('../Controller/siswaController');
const multer            = require('multer');
const multParse         = multer();
const storage           = multer.diskStorage({
                            destination : (req, imgSiswa, cb) => {
                          cb(null, './Public/images/siswa');
                        },
                          filename : (req, imgSiswa, cb) =>{
                          cb(null, req.body.nama + '.' + 'jpg');
                        }
                                            });

const upload = multer({storage:storage});


router.get('/', siswaController.users);
router.get('/:nis', siswaController.cariSiswa);
router.post("/", upload.single('imgSiswa'), siswaController.tambahSiswa);
router.put("/:nis", upload.single('imgSiswa'), siswaController.updateSiswa);

module.exports = router;