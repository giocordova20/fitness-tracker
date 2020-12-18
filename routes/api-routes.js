const db = require("../models");

module.exports = (app) => {
app.get("/api/workouts", function(req, res) {
    db.Workout.find({})
    .then(function(dbWorkOuts) {
        console.log("\n\n\n dbWorkOuts", dbWorkOuts)
      res.json(dbWorkOuts);
      });
  });



// post - new workout

// get - range of one week

// put - update

// deletee




};
