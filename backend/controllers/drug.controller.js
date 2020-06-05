'use strict';

var db = require('../services/database.mysql');

var drugCon = {};

drugCon.add_drug = (req, res, next) => {

    var name = req.body.name;
    var desc = req.body.description;
    var dose = req.body.dosage;
    var author = req.boyd.userid;

    var query = `CALL add_drug('${name}', '${desc}', ${dose}', '${author}')`;

    console.log(query);
    db.query(query, true, (err, results) => {
        if(err){
            res.status(404).json({
                message: 'Error encountered ' + err
            });
        } else {
            res.status(200).json({
                message: 'Successfully added drug'
            });
        }
    });
};

drugCon.add_comment = (req, res, next) => {
    var query = `CALL add_comment('${req.body.uid}','${req.body.did}','${req.body.comment_desc}')`;

    db.query(query, true, (err, results) => {
        if(err){
            res.status(404).json({
                message: 'Error encountered ' + err
            });
        } else {
            res.status(200).json({
                message: 'Successfully added comment to entry'
            });
        }
    });

};

drugCon.add_rating = (req, res, next) => {
    var query = `CALL add_rating('${req.body.rating}','${req.body.did}')`;

    db.query(query, true, (err, results) => {
        if(err){
            res.status(404).json({
                message: 'Error encountered ' + err
            });
        } else {
            res.status(200).json({
                message: 'Successfully added rating to drug'
            });
        }
    });

};



module.exports = drugCon;






















