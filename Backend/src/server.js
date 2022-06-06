const app = require("./index");
const connect = require("./config/db");

app.listen(process.env.PORT || 3000, async()=> {
    try{
        connect();
        console.log("listening on port 3000");
    }
    catch(err) {
        console.log('err', err)

    }
})