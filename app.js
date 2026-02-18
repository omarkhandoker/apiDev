import express from 'express'
const app = express();
import ConnectDb from './DB/dbconnect.js';
import router from './routes/router.js';

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())
ConnectDb()

app.use("/api/student" , router)

app.listen(3000, () => {
    console.log('Server running on port 3000');
});