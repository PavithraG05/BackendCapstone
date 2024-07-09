const express = require('express')
const router = express.Router()
const Books = require('../models/books')
const Authors = require('../models/authors')
const Genres = require('../models/genres')
// router.use(express.json());

router.get('/', async(req, res) => {
    
    console.log("In author get routes")
    // console.log(Authors)
    try{
        const author = await Authors.findAll({
            include: [{
                model: Books,
                attributes: ['id','title', 'price','publication_date','genre_id'],
                include: [{
                    model: Genres,
                    attributes: ['id','genre_name']
                  }]
            }]})
        res.status(200).json(author)
        console.log('All authors:', JSON.stringify(author, null, 2))
    }catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('/:id', async(req, res) => {

    console.log("In author id get routes")
    try{
        const id = req.params.id;
        const author = await Authors.findByPk(id,{
            include: [{
                model: Books,
                attributes: ['id','title', 'price','publication_date','genre_id'],
                include: [{
                    model: Genres,
                    attributes: ['id','genre_name']
                  }]
            }]})
        if(author === null){
            res.status(404).json(`**NOT FOUND**: author ${id} does not exist`)
            console.warn(`**NOT FOUND**: author ${id} does not exist!`);
            return
        }else{
            res.status(200).json(author)
            console.log('All authors:', JSON.stringify(author, null, 2))
        }
    }catch (err) {
        res.status(500).json({ error: err.message })
    }
    
})

router.get('/name/:name', async(req, res) => {
    console.log("In author name get routes")
    try{
        const name = req.params.name;
        const author = await Authors.findOne({where:{name:name}})
        if(author === null){
            res.status(404).json(`**NOT FOUND**: author ${name} does not exist`)
            console.warn(`**NOT FOUND**: author ${name} does not exist!`);
            return
        }else{
            res.status(200).json(author)
            console.log('All authors:', JSON.stringify(author, null, 2))
        }
    }catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.post('/', async(req, res) => {
    console.log("In author post method")
    const { name, biography } = req.body
    if(name && biography){
        try{
            const author = await Authors.create({
                name : name,
                biography : biography,
                createdAt : new Date(),
                updatedAt: new Date()
            })
            console.info("LOG: New AUTHOR added is ->", author);
            res.status(200).json(`LOG: New AUTHOR added is -> ${author}`);
        }catch(err){
            res.status(500).json({ error: err.message })
        }
    }
    else{
        res.status(404).json(`error: "Missing data, can't process: one or more author properties missing."`)
        console.warn(`error: "Missing data, can't process: one or more author properties missing."`);
        return
    }
})

router.put('/:id', async(req, res) => {
    // const data = req.body;
    // console.log(typeof data);
    console.log("In author put method")
    const { name, biography } = req.body
    const id = req.params.id
    if(name && biography){
        try{
            const author = await Authors.update(
                { name: name,biography:biography, updatedAt:new Date()},
                {
                  where: {
                    id: id,
                  },
                },
              );
            if(author[0] === 0){
                res.status(404).json(`**NOT FOUND**: author ${id} does not exist`)
                console.warn(`**NOT FOUND**: author ${id} does not exist!`);
                return
            }
            else{
                console.info("LOG: AUTHOR updated as ->", name,biography);
                res.status(200).json(`LOG: AUTHOR ${id} updated as -> ${name} ${biography}`);
            }
        }catch(err){
            res.status(500).json({ error: err.message })
        }
    }
    else{
        res.status(404).json(`error: "Missing data, can't process: one or more author properties missing."`)
        console.warn(`error: "Missing data, can't process: one or more author properties missing."`);
        return
    }
})

router.delete('/:id', async(req, res) => {
    // const data = req.body;
    // console.log(typeof data);
    console.log("In author delete method")
    const id = req.params.id
    try{
        const author = await Authors.destroy({
            where: { id: id}
          })
        if(author[0] === 0){
            res.status(404).json(`**NOT FOUND**: author ${id} does not exist`)
            console.warn(`**NOT FOUND**: author ${id} does not exist!`);
            return
        }
        else{
            console.info("LOG: author deleted ->", id, author);
            res.status(200).json(`LOG: author ${id} deleted -> ${author}`);
        }
    }catch(err){
        res.status(500).json({ error: err.message })
    }
    
})


module.exports = router