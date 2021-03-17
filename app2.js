const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table>')
      res.write('<tr><th> location </th><th> No.hours </th><th> Amount </th></tr>')
      res.write('<tr><td> Adhi Yogi Statue</td><td> 4</td><td> free</td></tr>')  
      res.write('<tr><td> goa</td><td> 8 </td><td> 6000rs</td></tr>')  
      res.write('<tr><td> Ooty</td><td> 12</td><td> 12000rs</td></tr>')
      res.write('<tr><td> beach</td><td>  24</td><td> 15000rs</td></tr>')
      res.end('</table></body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})