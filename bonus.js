const http = require('http')    //Pull in a useful node package


const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
    http.createServer(            //Creates the response loop
        (req, res) => {               //Anonymous function to handle the request
            console.log("Request recieved")
            // console.log(req.url)
            // Build a fake url so we can get the search parameters using a URL object
            fake_url = "https://fake.com/path" + req.url
            const url = new URL(fake_url)
            if (req.method === 'GET') {

                //   console.log("Look for query parameter data: " + search_params.get("data"))
                const advices = ["You never know what the future will bring, so always make the best use of the present.",
                    "Sometimes the one thing you need for growth is the one thing you are most afraid to do.",
                    "Don't put yourself above anyone or anything; work hard in silence and let success make the noise.Don't try to impress everyone.",
                    "Personality begins where comparison leaves off. Be unique. Be memorable. Be confident. Be proud.",
                    "Do right. Do your best. Treat others as you would want them to treat you.",
                    "Have the mindset of a student. Never think you are too old to ask questions or know too much to learn something new.",
                    "In order to get, you have to give.",
                    "If you don't know the situation fully, you can't offer an informed opinion.."
                ]
                let randomIndex = Math.floor(Math.random() * advices.length)
                // Process the queries here
                res.statusCode = 200      //code for OK
                res.setHeader('Content-Type', 'text/plain')
                res.write(`${advices[randomIndex]}`)
                res.end();

            } else {
                console.log("Status 404")
                res.statusCode = 404;
                res.end();
            }

        }
    )

server.listen(port, hostname, () => {   //Start the server
    console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})