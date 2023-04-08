const express = require("express")
const cors = require("cors")
const logger = require("morgan")

const app = express()

const userRouter = require("./routes/users")
const {connect} = require("./db/db")


app.use(logger("dev"))
app.use(express.json())
app.use(cors())


app.use("/", userRouter )

connect();

module.exports = app