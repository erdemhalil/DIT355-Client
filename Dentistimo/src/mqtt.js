function generateId(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export default function mqtt( request, url, data){
    const ws = new WebSocket("ws://localhost:8082");
    ws.addEventListener('open', () => {
        let id = generateId(30)
        ws.send(JSON.stringify({"id": id, "request": request, "url": url, "data": data}));
        ws.addEventListener('message', event => {
            let message = JSON.parse(event.data)
            console.log('Message from server ', message)
            return(JSON.stringify(message))
        })
    })
}
