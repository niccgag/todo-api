const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var uri = "mongodb+srv://todoapp:Ng2VatgKs3JlRCOS@todo-note-app-vaeec.mongodb.net/TodoApp";
mongoose.connect(process.env.MONGODB_URI || uri);

module.exports = {mongoose};