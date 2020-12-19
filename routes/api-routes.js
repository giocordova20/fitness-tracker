const db = require("../models");

module.exports = (app) => {
app.get("/api/workouts", function(req, res) {
    db.Workout.find({})
    .then(function(dbWorkOuts) {
        console.log("\n\n\n dbWorkOuts", dbWorkOuts)
      res.json(dbWorkOuts);
      });
  });

// POST - Add a new workout
app.post("/api/workouts/", (req, res) => {
    db.Workout.create(req.body)
    .then( (dbWorkOut) => {
        res.json(dbWorkOut);
      })
    .catch(err => {
        res.status(400).json(err);
    });
  });



// GET - range of one week
app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({})
    .then(function(dbWorkOuts) {
        console.log("\n\n\n dbWorkOuts", dbWorkOuts)
      res.json(dbWorkOuts);
      })
      .catch(err => {
        res.status(400).json(err);
    });
  });



// put - update
app.put("/api/workouts/:id", function({body,params}, res) {
    db.Workout.findByIdAndUpdate(params.id,{$push: {exercises:[body]}}, {new: true})
    .then(function(dbWorkOuts) {
        // console.log("\n\n\n dbWorkOuts", dbWorkOuts)
      res.json(dbWorkOuts);
      })
    .catch(err => {
        res.status(400).json(err);
    });
  });







};
