import io from 'socket.io-client';

export function connect(): SocketIOClient.Socket{
    console.log('coucou');
    return io.connect(process.env.REACT_APP_BACKEND as string)
}