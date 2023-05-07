const mongoose = require('mongoose');
const mongoURI = 'mongodb://foodhub:ahmadzaka@ac-ygtmznf-shard-00-00.ukdv7rr.mongodb.net:27017,ac-ygtmznf-shard-00-01.ukdv7rr.mongodb.net:27017,ac-ygtmznf-shard-00-02.ukdv7rr.mongodb.net:27017/foodhub?ssl=true&replicaSet=atlas-wrex66-shard-0&authSource=admin&retryWrites=true&w=majority';

const fetchFoodData = async () => {
  const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
  const catData = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
  return { food_items: fetched_data, foodCategory: catData };
};
  
const mongoDB = async () => {
  await mongoose.connect(mongoURI, { useNewUrlParser: true });
  console.log("connected");

  const data = await fetchFoodData();
  global.food_items = data.food_items;
  global.foodCategory = data.foodCategory;
};

module.exports = mongoDB;