const Automatisation = require('../models/automatisation');


//REGISTER CONTACT 
exports.signUp = async (req, res, next) => {

  try{
    
    const newContact = Automatisation({
      IdEntreprise: req.body.IdEntreprise,
      validation: req.body.validation,
      declancheur: req.body.declancheur,
      action: req.body.action,
    });

     await newContact.save();
    res.status(200).json({
      message: 'Bravo votre enregistrement a marché',
      success: true
    });    

 }catch(error){
   
    res.status(500).json(error);
 }

};











