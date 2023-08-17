const PORT = 8000;
const axios = require("axios").default;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/solve", async (req, res) => {
  //   console.log("AAA", req.body.numbers);
  const options = {
    method: "POST",
    url: "https://solve-sudoku.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "solve-sudoku.p.rapidapi.com",
    },
    data: {
      puzzle: req.body.numbers,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    // populateValues(response.data.solvable, response.data.solution);
    res.json(response.data);
    // solvable and solution are return by the api solvable tru and solution is the solution of the soduko
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log(`server listening on PORT ${PORT}`));
