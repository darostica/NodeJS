const getAllWorkouts =(req,res)=>{
    res.send(`Controller GetAll desde ${req.baseUrl}`);
};

const getOneWorkouts =(req,res)=>{
    res.send(`Controller GetOne desde ${req.params.workoutId}`);
};

const createNewWorkouts =(req,res)=>{
    res.send(`Controller Create desde ${req.params.workoutId}`);
};

const updateOneWorkouts =(req,res)=>{
    res.send(`Controller Create desde ${req.params.workoutId}`);
};

const deleteOneWorkouts =(req,res)=>{
    res.send(`Controller Create desde ${req.params.workoutId}`);
};

module.exports={
    getAllWorkouts,
    getOneWorkouts,
    createNewWorkouts,
    updateOneWorkouts,
    deleteOneWorkouts,
};