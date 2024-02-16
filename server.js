// import app express
const app= require("./backend/app");

// ya serveur isma3 3al port 3000: une fonction flèché
// Start server on : http://localhost:3000
app.listen(3000, ()=>{
    console.log("server listening port 3000...");
});