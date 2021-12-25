const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");
const app = express();
const env = require("dotenv")
const path = require("path")
env.config();

const PORT = process.env.PORT || 8080;
app.use(cors()) 
app.use(express.json())

const pdfTemplate = require("./Document1");

const options = {
	height: "42cm",
	width: "29.7cm",
	timeout: "6000",
};

app.post("/create-pdf", (req, res) => {
	pdf.create(pdfTemplate(req.body), options).toFile("Resume.pdf", (err) => {
		if (err) {
			console.log(err);
			res.send(Promise.reject());
		} else res.send(Promise.resolve());
	});
});

app.get("/fetch-pdf", (req, res) => {
	const file = `${__dirname}/Resume.pdf`;
	res.download(file);
});
app.get("/hello",(req,res)=>{
	res.json({greeting:'Hello'})
})


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));