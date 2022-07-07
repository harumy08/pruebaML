// Import packages and set the port
import bodyParser from "body-parser";
import express from "express";
import routes from "./routes/search.js";
import cors from "cors";

const port = 3002;
const app = express();

app.use(cors());
// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

routes(app);
// Start the server
const server = app.listen(port, (error) => {
	if (error) return console.log(`Error: ${error}`);
	console.log(`Server listening on port ${server.address().port}`);
});