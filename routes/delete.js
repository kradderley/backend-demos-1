const express = require("express");
const router = express.Router();

router.delete("/character/:id", (req, res) => {
  const id = Number(req.params.id);

  //   defensive check
  if (Number.isNaN(id)) {
    res.send({ status: 0, reason: "Invalid id" });
    return;
  }

  const indexOf = req.simpsons.findIndex((item) => {
    return item.id === id;
  });

  if (indexOf < 0) {
    res.send({ status: 0, reason: "Id not found, maybe deleted" });
  }

  req.simpsons.splice(indexOf, 1);
  res.send({ status: 1 });
});

module.exports = router;
