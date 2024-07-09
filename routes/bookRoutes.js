const express = require('express')
const router = express.Router()
const Books = require('../models/books')
const Authors = require('../models/authors')
const Genres = require('../models/genres')
// router.use(express.json());

router.get('/', async (req, res) => {
    console.log("In book get routes")
    // console.log(Books)
    try{
        const book_details = await Books.findAll({
            include: [{
                model: Authors,
                attributes: ['id','name', 'biography']
            },
            {
                model: Genres,
                attributes: ['id','genre_name']
            }]
            
                // order: [['title','ASC' ]]
            })
        res.status(200).json(book_details)
        console.log('All authors:', JSON.stringify(book_details, null, 2))
    }catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('/:id', async(req, res) => {
    console.log("In book id get routes")
    console.log(Authors.associations)
    try{
        const id = req.params.id;
        const book = await Books.findByPk(id,{
            include: [{
                model: Authors,
                attributes: ['id','name', 'biography']
            },
            {
                model: Genres,
                attributes: ['id','genre_name']
            }]});
        if(book === null){
            res.status(404).json(`**NOT FOUND**: book ${id} does not exist`)
            console.warn(`**NOT FOUND**: book ${id} does not exist!`);
            return
        }
        else{
            res.status(200).json(book)
            console.log('All authors:', JSON.stringify(book, null, 2))
        }
    }catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.post('/', async(req,res) => {
    console.log("In book post method")
    const { title, price, publication_date, author_id, genre_id } = req.body
    if(title && price && publication_date && author_id && genre_id){
        try{
            const book = await Books.create({
                title : title,
                price : price,
                publication_date : publication_date,
                author_id : author_id,
                genre_id : genre_id,
                createdAt : new Date(),
                updatedAt: new Date()
            })
            console.info("LOG: New BOOK added is ->", book);
            res.status(200).json(`LOG: New BOOK added is -> ${book}`);
        }catch(err){
            res.status(500).json({ error: err.message })
        }
    }
    else{
        res.status(404).json(`error: "Missing data, can't process: one or more book properties missing."`)
        console.warn(`error: "Missing data, can't process: one or more book properties missing."`);
        return
    }
})

router.put('/:id', async(req, res) => {
    // const data = req.body;
    // console.log(typeof data);
    console.log("In book put method")
    const { title, price, publication_date, author_id, genre_id} = req.body
    const id = req.params.id
    if(title && price && publication_date && author_id && genre_id){
        try{
            const book = await Books.update(
                { title: title, price:price, publication_date:publication_date, author_id:author_id, genre_id:genre_id, updatedAt:new Date()},
                {
                  where: {
                    id: id,
                  },
                },
              );
            if(book[0] === 0){
                res.status(404).json(`**NOT FOUND**: book ${id} does not exist`)
                console.warn(`**NOT FOUND**: book ${id} does not exist!`);
                return
            }
            else{
                console.info("LOG: BOOK updated as ->", id, title, price, publication_date, author_id, genre_id);
                res.status(200).json(`LOG: BOOK ${id} updated as -> ${title} ${price} ${publication_date} ${author_id} ${genre_id}`);   
            }
        }catch(err){
            res.status(500).json({ error: err.message })
        }
    }
    else{
        res.status(404).json(`error: "Missing data, can't process: one or more book properties missing."`)
        console.warn(`error: "Missing data, can't process: one or more book properties missing."`);
        return
    }
})

router.delete('/:id', async(req, res) => {
    // const data = req.body;
    // console.log(typeof data);
    console.log("In book delete method")
    const id = req.params.id
    try{
        const book = await Books.destroy({
            where: { id: id}
          })
        if(book[0] === 0){
            res.status(404).json(`**NOT FOUND**: book ${id} does not exist`)
            console.warn(`**NOT FOUND**: book ${id} does not exist!`);
            return
        }
        else{
            console.info("LOG: book deleted ->", id, book);
            res.status(200).json(`LOG: book ${id} deleted -> ${book}`);
        }
    }catch(err){
        res.status(500).json({ error: err.message })
    }
    
})

module.exports = router