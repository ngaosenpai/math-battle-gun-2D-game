"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}
const express_1 = __importDefault(require("express"));
//connect to database
// mongoose.connect(process.env.DB_URL)
// .catch(error => console.log(`connecting to database error: ${error.message}`));
// const db = mongoose.connection
// db.on("error", err => console.log(`connection error: ${err.message}`))
// db.on("disconnected", () => console.log("disconnected to database"))
// db.on("connected", () => console.log("connected to database"))
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json()); // for parsing application/json
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// app.get('/api/users', async (req, res) => {
//   const users = await User.find({}).exec()
//   res.json(users)
// })
// app.post('/api/user-new', async (req, res) => {
//   const { name, age, random } = req.body
//   const user = new User({ name, age, random });
//   await user.save();
//   res.json(user)
// })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map