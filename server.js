const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const proverbsRoutes = require("./routes/proverbs");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/proverbs", proverbsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
