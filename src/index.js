const express = require("express");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app =express();
const port = process.env.port || 3000;

//app.use("/api/v1/",v1Router);
app.use("/api/v1/workouts",v1WorkoutRouter);

app.listen(port,()=>{
    console.log(`server listening on port http://localhost:${port}`);
});