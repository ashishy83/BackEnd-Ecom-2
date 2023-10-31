const express = require("express");
const app = express();
const config = require('./config');
const cors = require("cors");
const bodyparser = require('body-parser');

const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');



const connectDB = require("./utils/database");
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(bodyparser.json());


app.use('/users',userRoute);
app.use('/products',productRoute);


app.listen(config.PORT,async()=>{
    try {
        await connectDB();
        console.log(`Server running on port ${config.PORT}`);

    } catch (error) {
        console.log(error);
    }    
});

