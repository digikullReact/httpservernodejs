const http=require("http");  // requiring a module 

const {postDataHandler}=require("./controller");// reference is required
const port=8080
const requestListener=function(req,res){
    req.on("end",()=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
       res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
       res.writeHead(200);
          res.end(Buffer.concat(requestData).toString())
    })
    console.log(req.url=="/api/postData" ,req);

   
    
    if(req.url=="/" && req.method=="GET"){
       

        req.on("end",()=>{
            console.log("Request finished")
        })
   // status code for the api
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
   res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
   res.writeHead(200); 
   console.log("hiiii")
   const json={status:"Hii"}
   res.end(JSON.stringify(json))
    
    }
    else if(req.url=="/api"){

        req.on("end",()=>{
            res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
            res.end(Buffer.concat(requestData).toString())
        })
        res.end("Hello Api")
    }

    else if(req.url=="/api/postData" && req.method=="POST" ){
        console.log("hii");

        // Some data from api 
        const  requestData=[];

        req.on("data",chunk=>{
            console.log(chunk);
            requestData.push(chunk);
        })

      
       
         
    }
    
  
}

// http module offers us a method to create  a server 
const server=http.createServer(requestListener);

// Runnig the server

server.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Server Running")
});

// Write an api to receive post data from the user ,using postman and convert that data 
// in json form



//Create an Api to register a user 
// email ,firstname ,address,username ,skills 

// create a form in react ,and then create apis the way i told and use axios to send the data
// to the apis