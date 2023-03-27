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


app.listen(8080, (data) => {
    //console.log(data);
    console.log('listening on *:8080');
  });

