const http=require("http");  // requiring a module 
const port=8080
const requestListener=function(req,res){

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        /** add other headers as per requirement */
      };
    
    if(req.url=="/"){
       res.writeHead(200); // status code for the api
        res.end('HEllo there')
    }
    else if(req.url=="/api"){
        res.end("Hello Api")
    }

    else if(req.url=="/api/postData" && req.method=="POST" ){


        // Some data from api 
        const  requestData=[];

        req.on("data",chunk=>{
            console.log(chunk);
            requestData.push(chunk);
        })

        req.on("end",()=>{
            res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
            res.end(Buffer.concat(requestData).toString())
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