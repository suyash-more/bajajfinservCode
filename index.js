const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 80

app.use(express.json());

app.use(cors({
    origin: "*"
}))

app.post("/bfhl", (req, res, next) => {
    let data = req.body["data"];
    let numbers = []
    let alpha = []
    data.forEach((object) => {
        if (isNaN(object)) {
            alpha.push(object);
        } else {
            numbers.push(object)
        }
    })
    response_text = {
        "is_success": true, 
        "user_id": "john_doe_17091999", 
        "email": "john@xyz.com", 
        "roll_number": "ABCD123", 
        "numbers": numbers, 
        "alphabets": alpha
    }
    console.log("data : " + data);
    console.log("numbers : " + numbers);
    console.log("alpha : " + alpha);
    res.json(response_text);
})
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});