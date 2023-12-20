const MealModal = require('./MealModel');


//GET

module.exports.getMeal = async (req,res) => {
    const myMeal = await MealModal.find();
    res.send(myMeal)
}


//POST

module.exports.saveMeals = async (req, res) => {
    const { name } = req.body;
    MealModal.create({ name })
    .then((data) => { console.log('Meal Added') 
    res.send(data)
    })
}

//DELETE 

module.exports.deleteMeal = async (req, res) => {
    const { _id } = req.body;
    MealModal.findByIdAndDelete(_id)
    .then(() => res.send('Item was deleted'))
}

// EDIT

module.exports.editMeal = async (req, res) => {
    const { _id, name } = req.body;
    MealModal.findByIdAndUpdate(_id, {name})
    .then(() => res.send('Item was updated'))
}