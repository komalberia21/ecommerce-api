import app from "./app.js";
import { connectToDb } from "./config/db.js";

app.listen(3000, () => {
  console.log("server is listening at port 3000");
  connectToDb();
});

