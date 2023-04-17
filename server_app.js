var http = require('http');
var fs = require('fs');
//const puppeteer = require('puppeteer');

var index = fs.readFileSync('src/index.html');

var SerialPort = require("serialport");


const parsers = SerialPort.parsers;
const parser = new parsers.Readline({
    delimiter: '\r\n'
});


var port = new SerialPort('COM5', {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.pipe(parser);


/*
setTimeout(function() {
    port.write("");

}, 3000);
*/

//document.addEventListener('keydown', (event) => { console.log(event); });

/*
async function start() {
    const browser = await puppeteer.launch() 
    const page = await browser.newPage()

    await page.goto("https://js13kgames.com/games/the-last-spartan/index.html")
    //await page.screenshot({path: "screenshot.png", fullPage: true}) 

    const data = await page.evaluate(() => {

      const kill_txt = document.querySelector(".m");
      
      const text = kill_txt

      return kill_txt
    });

    await browser.close();
}

start()
*/


var app = http.createServer(function(req, res) {
    
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(index);

});


var io = require('socket.io').listen(app);

io.on('connection', function(socket) {

    socket.on('motor', function(data) {
        
        port.write(data.status);
        console.log(data);
    });

});

/*
let request = require('request');

request.post(
    'http://capstonea8.wifi.local.cmu.edu', data, 
    { json: { 'key': data.status } },
    function (error, response, body, data) {
        if (!error && response.statusCode == 200) {
            console.log(body); 
            console.log(response.body);
            //console.log(error);
            //console.log(data);
        }
    }
);
*/

//const { WebSocketServer } = require('ws');

//let socket = new WebSocket("ws://://capstonea8.wifi.local.cmu.edu", ["soap", "wamp"]);
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// const xhr = new XMLHttpRequest();

// xhr.open("POST", "http://capstonea8.wifi.local.cmu.edu");
// xhr.setRequestHeader("Content-Type", "HELLLLLLLLLO; charset=UTF-8, HEEEERRRREEEE, 123456789");

// const body = JSON.stringify({
//   userId: 1,
//   title: "HEEEEEELLLLLLOOOOOOOOOO",
//   completed: false
// });
// xhr.onload = () => {
//   if (xhr.readyState == 4 && xhr.status == 201) {
//     console.log(JSON.parse(xhr.responseText));
//   } else {
//     console.log(`Error: ${xhr.status}`);
//   }
// };
// xhr.send(body);





//const http = require('node:http');

// var datatosend = app.data;

// var urlparams = { 
//     host: 'capstonea8.wifi.local.cmu.edu',
//     //path: '/L',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Data' : datatosend,
//     },  
// };

// function SendRequest(datatosend) {
//     function OnResponse(response) {
//         var data = '';

//         response.on('data', function(chunk) {
//             data += chunk; //Append each chunk of data received to this variable.
//         });
//         response.on('end', function() {
//             console.log(data); //Display the server's response, if any.
//         });
//     }

//     var request = http.request(urlparams, OnResponse); //Create a request object.

//     request.write(datatosend); //Send off the request.
//     request.end(); //End the request.
// }

// SendRequest("{testfield: 'Boop'"); //Execute the function the request is in.




/*
var socket = io.connect('http://capstonea8.wifi.local.cmu.edu');

socket.on('connect', function(){
    try {
        console.log('socket connect');
        socket.emit('configure', {status:"?1000"});
    } catch(e) {
        console.log(e);
    }
});
socket.emit({status:"?1000"});*/

//socket.send(msg[, offset, length][, port][, 'http://capstonea8.wifi.local.cmu.edu'][, callback]);

//socket.emit('motor', {status:"?1000"}

app.listen(8080, (data) => {
    console.log(data);

    console.log('listening on *:8080');

  });

