const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Listning to port ${PORT}`));
