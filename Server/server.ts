import {app} from "./app";
require("dotenv").config();


// create our server
app.listen(process.env.PORT, () => {
	console.log(`Server is connected with port ${process.env.PORT}`);
  });
  