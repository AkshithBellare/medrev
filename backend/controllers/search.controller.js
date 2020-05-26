'use strict';

var db = require('../services/database.mysql');

var searchCon = {};

searchCon.search = (req, res, next) => {
    console.log('Search req for ', req.query.name);
    var query = `CALL search('${req.query.name}')`;

    db.query(query, true, (err, results, fields) => {
        if(err){
            res.status(404).json({message: 'Error '+ err});
        } else {
            res.status(200).send(
                results[0].map(item => {
                    return item.name
                })
            );
        }
    });
};

searchCon.get_drug = (req, res, next) => {
    var query = `CALL get_drug_details('${req.query.name}')`;
    db.query(query, true, (err, results, fields) => {
        if(err){
            res.status(404).json({message: 'Error '+ err});
        } else {
            console.log(results[0][0])
            var drug = {};
            var comment_entry = [];

            var query1 = `CALL get_comments(${results[0][0].id})`;
            console.log(query1);
            db.query(query1, true, (err, results, fields) => {
                if(err) {
                    console.log(err)
                } else {
                    results[0].forEach((element, ind) => {
                        comment_entry[ind] = {
                            name: element.username,
                            comment: element.comment_desc
                        }
                    })
                    console.log("within--",comment_entry)
                }
            })
        
            console.log("Comment entry--->",comment_entry)

            drug = {
                name : results[0][0].name,
                description : results[0][0].description,
                dosage : results[0][0].dosage,
                ratings : results[0][0].ratings,
                comments : comment_entry
            }

            //console.log(results);

            res.status(200).send(
                drug
            )
        }
    });
};

module.exports = searchCon;