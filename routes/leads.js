const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Lead = require('../Models/Lead');
const Lien = require('../Models/Lien');
const config = require('config');


//Lead Constructor

router.post('/',auth, async (req, res) => {
      

  
      try {
        const newLead  = new Lead({

        });
  
        const contact = await newContact.save();
  
        res.json(contact);
      } catch (err) {
        console.error(er.message);
        res.status(500).send('Server Error');
      }
    }
  );
  
  // @route     PUT api/contacts/:id
  // @desc      Update contact
  // @access    Private
  router.put('/:id', auth, async (req, res) => {
    const { name, email, phone, type } = req.body;
  
    // Build contact object
    const contactFields = {};
    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (phone) contactFields.phone = phone;
    if (type) contactFields.type = type;
  
    try {
      let contact = await Contact.findById(req.params.id);
  
      if (!contact) return res.status(404).json({ msg: 'Contact not found' });
  
      // Make sure user owns contact
      if (contact.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not authorized' });
      }
  
      contact = await Contact.findByIdAndUpdate(
        req.params.id,
        { $set: contactFields },
        { new: true }
      );
  
      res.json(contact);
    } catch (err) {
      console.error(er.message);
      res.status(500).send('Server Error');
    }
  });



module.exports = router;