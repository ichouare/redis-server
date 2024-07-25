const net = require("net");
const Client = require('./clientObj.js');


// redis serialiser protocol

function ClientSerializer (data)  {
let index_of_sign = data.indexOf("$");
if(index_of_sign == -1)
        return "not exists";
    str = data.toString().slice(index_of_sign + 1);
    console.log(str[index_of_sign])
    let data_length = parseInt(str[index_of_sign])
    console.log(data_length)



}



// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage
const server = net.createServer((connection) => {
    let clientSocket = []
    server.on('connection', function(sock) {
        // console.log('CONNECTED: ');
        // // clientSocket.push(new Client(sock.remoteAddress, sock.remotePort, sock));
        // // console.log(`Received data:  ${clientSocket.length}`);
        // // console.log(clientSocket)
    })

    //   // Handle connection
    connection.on("data", (data) => {
        console.log("Received data:  " + data);
        ClientSerializer(data)
        connection.write("+OK\r\n");
    })



    connection.on("end", () => {
        clientSocket = clientSocket.filter(s => s !== connection);
        console.log('Client disconnected', clientSocket.length);
    });
});

server.listen(6379, "127.0.0.1");

// server.on("connection", (data) => {
//     console.log("New connection");
//     connection.write("+OK\r\n");
// })

//server response 
// server.
