
// ВСЁ МЕНЮ ДОЛЖНО БЫТЬ ПРОПИСАНО ИМЕННО В ТАКОЙ ПОСЛЕДОВАТЕЛЬНОСТИ!!!

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./mealRoutes');
const cors = require('cors');

require('dotenv').config();

mongoose.set('strictQuery', false);

const PORT = 7000 || process.env.port;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => {
    console.log(`I am listening at ${PORT}`)
})


//4RM5Yl3srAJErAdQ
//mongodb+srv://milagvozdevadev:<password>@cluster0.2cwxcsy.mongodb.net/?retryWrites=true&w=majority