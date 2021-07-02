const mongoose = require("mongoose") ;

mongoose.connect("mongodb://localhost:27017/Student-json" ,
   { useCreateIndex : true , 
     useFindAndModify : true ,
     useNewUrlParser : true ,
     useUnifiedTopology : true}).
     then(() => console.log("mongoose server is 27017")).
     catch((error) => console.log(`mission failed ${error}`))