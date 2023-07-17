const express = require("express"); 
const router = express.Router(); 
const simpsons = require("../simpsons.json");

router.get("/", (req, res) => {
    // destructered version but before it was req.query.character & req.query.num
    const { character, num } = req.query;
  
    simpsons.forEach((char, index) => {
      char.id = index + 1;
    });
  
    let _simpsons = [...simpsons];
  
    // if specific character is asked for
    if (character) {
      _simpsons = _simpsons.filter((char) => {
        return char.character.toLowerCase().includes(character.toLowerCase());
      });
    }
  
    //   if specific quantity is asked for
    if (num && Number(num) > 0 && _simpsons.length > num) {
      _simpsons.length = num;
    }
  
    res.send(_simpsons);
  });

module.exports = router;