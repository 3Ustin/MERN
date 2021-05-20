const express = require('express');
const app = express();
const cors = require("cors");

require("./server/config/mongoose.config");

app.use(cors());
app.use(express.json(), express.urlencoded({extended:true}));

const AllMyRoutes = require("./server/routes/test.routes");
AllMyRoutes(app);

app.listen(8000, () => console.log("The server is ready on port 8000"));