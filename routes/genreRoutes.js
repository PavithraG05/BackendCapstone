const express = require('express')
const router = express.Router()
const Books = require('../models/books')
const Authors = require('../models/authors')
const Genres = require('../models/genres')

// router.use(express.json());

router.get('/', async(req, res) => {
    // res.status(200).send('Fetching all genres')
    console.log("In genre get routes");
    try{
        const genre = await Genres.findAll({
            include: [{
                model: Books,
                attributes: ['id','title', 'price','publication_date','author_id'], 
                include: [{
                  model: Authors,
                  attributes: ['id','name', 'biography']
                }]
            }]})
        res.status(200).json(genre)
        console.log('All genres:', JSON.stringify(genre, null, 2))
    }catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('/:id', async(req, res) => {
    console.log("In genre id get routes")
    try{
        const id = req.params.id;
        const genre = await Genres.findByPk(id,{
            include: [{
                model: Books,
                attributes: ['id','title', 'price','publication_date','author_id'],
                include: [{
                    model: Authors,
                    attributes: ['id','name', 'biography']
                  }]
            }]})
        if(genre === null){
            res.status(404).json(`**NOT FOUND**: genre ${id} does not exist`)
            console.warn(`**NOT FOUND**: genre ${id} does not exist!`);
            return
        }else{
            res.status(200).json(genre)
            console.log('All genres:', JSON.stringify(genre, null, 2))
        }
    }catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('/name/:name', async(req, res) => {
    console.log("In genre name get routes")
    try{
        const name = req.params.name;
        const genre = await Genres.findOne({where:{genre_name:name}})
        if(genre === null){
            res.status(404).json(`**NOT FOUND**: genre ${name} does not exist`)
            console.warn(`**NOT FOUND**: genre ${name} does not exist!`);
            return
        }else{
            res.status(200).json(genre)
            console.log('All genres:', JSON.stringify(genre, null, 2))
        }
    }catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.post('/', async(req, res) => {
    // const data = req.body;
    // console.log(typeof data);
    console.log("In genre post method")
    const { genre_name } = req.body
    if(genre_name){
        try{
            const genre = await Genres.create({
                genre_name : genre_name,
                createdAt : new Date(),
                updatedAt: new Date()
            })
            console.info("LOG: New GENRE added is ->", genre);
            res.status(200).json(`LOG: New GENRE added is -> ${genre}`);
        }catch(err){
            res.status(500).json({ error: err.message })
        }
    }
    else{
        res.status(404).json(`error: "Missing data, can't process: one or more genre properties missing."`)
        console.warn(`error: "Missing data, can't process: one or more genre properties missing."`);
        return
    }
})

router.put('/:id', async(req, res) => {
    // const data = req.body;
    // console.log(typeof data);
    console.log("In genre put method")
    const { genre_name } = req.body
    const id = req.params.id
    if(genre_name){
        try{
            const genre = await Genres.update(
                { genre_name: genre_name,updatedAt:new Date() },
                {
                  where: {
                    id: id,
                  },
                },
              );
              console.log(genre[0], typeof genre)
            if(genre[0]){
                console.info("LOG: GENRE updated as ->", genre, genre_name);
                res.status(200).json(`LOG: ${genre} GENRE ${id} updated as -> ${genre_name}`);
            }
            else{
                res.status(404).json(`**NOT FOUND**: genre ${id} does not exist`)
                console.warn(`**NOT FOUND**: genre ${id} does not exist!`);
                return
            }
        }catch(err){
            res.status(500).json({ error: err.message })
        }
    }
    else{
        res.status(404).json(`error: "Missing data, can't process: one or more genre properties missing."`)
        console.warn(`error: "Missing data, can't process: one or more genre properties missing."`);
        return
    }
})

router.delete('/:id', async(req, res) => {
    // const data = req.body;
    // console.log(typeof data);
    console.log("In genre delete method")
    const id = req.params.id
    try{
        const genre = await Genres.destroy({
            where: { id: id}
          })
        if(genre[0] === 0){
            res.status(404).json(`**NOT FOUND**: genre ${id} does not exist`)
            console.warn(`**NOT FOUND**: genre ${id} does not exist!`);
            return
        }
        else{
            console.info("LOG: GENRE deleted ->", id, genre);
            res.status(200).json(`LOG: GENRE ${id} deleted -> ${genre}`);
        }
    }catch(err){
        res.status(500).json({ error: err.message })
    }
    
})

module.exports = router