const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Lien = require('../Schema/Lien');
const User = require('../Schema/User');


// @route     GET Lien From Mongo

router.get('/', auth, async (req,res) => {

const { name ,filetype, address, city, state, zip, plaintiff, amount, county, loaddate, filingdate } = req.body;
  
try{
    const liens = await Lien.find({ lien: req.address }).sort({date: -1});
    res.json(liens);

} catch (err){
    console.error(err.message);
    res.status(500).send('servererr');
     
}

});

// @route     POST Lien From Mongo


router.post('/', async (req,res) => {


    const { name ,filetype, address, city, state, zip, plaintiff, amount, county, loaddate, filingdate } = req.body;
    
    try {
        const newLien = new Lien({
            filetype,
            address,
            city,
            state,
            zip,
            plaintiff,
            amount,
            county,
            loaddate,
            filingdate,
            name
        });

        const lien = await newLien.save();

        res.json(lien);
    }catch (err) {
        console.error(err.message);
        res.status(500).send('servererror');
    }

});


module.exports = router;