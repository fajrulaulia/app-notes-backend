const Book = require('../models/bookModel')
module.exports = {
    findAll: (_, res) => {
        Book.find((err,document)=>{
            if (err){
                console.log(err)
            }else{
                res.json(document)
            }
        });
    }
}