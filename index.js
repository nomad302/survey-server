const express = require("express"); // common js modules to import the libs
require("./services/passport");

const app = express();

require("./routes/authRoute")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
