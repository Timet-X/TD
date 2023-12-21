let ws = new WebSocket("wss://websocket-1.onrender.com/:443");

let controllTD = document.querySelector('.controllTD') ;
controllTD.addEventListener('input', (event) => {
  ws.send(JSON.stringify({ 'text1': controllTD.value/100000000000000 }));
}, false);

document.getElementById('sendText').addEventListener('click', () => {
    let textInput = document.getElementById('textInput').value;
    ws.send(JSON.stringify({ 'text': textInput }));




ws.addEventListener('open', (event) => {
  console.log('Socket connection open!');
  // alert('Successfully connected to socket server 🎉');
  ws.send('pong');
});

ws.addEventListener('error', (error) => {
    console.error('Error in the connection', error);
    alert('error connecting socket server', error);
});

ws.addEventListener('close', (event) => {
    console.log('Socket connection closed');
    alert('closing socket server');
});
