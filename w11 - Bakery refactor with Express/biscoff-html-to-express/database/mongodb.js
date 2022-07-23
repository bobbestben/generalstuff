//Previously we imported mongodb
//Now, trying mongoose - dont need mongo db library
const mongoose = require("mongoose");

const connStr =
    "mongodb+srv://bobbest:wangweijie@generalassembly.imxw3.mongodb.net/?retryWrites=true&w=majority";

const DB = mongoose.connect(connStr, { dbName: 'biscoff_bakery'});

module.exports = DB;
