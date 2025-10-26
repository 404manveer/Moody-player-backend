require('dotenv').config(); // load .env first
const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB() // ensure DB is connected before starting server
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
  });
