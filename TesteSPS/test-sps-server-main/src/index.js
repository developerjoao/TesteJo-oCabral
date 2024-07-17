const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors({
    origin: 'http://localhost:3000', 
    optionsSuccessStatus: 200 
}));

app.use(bodyParser.json()); 

app.use('/api', routes); // 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
