import server from './server'

const currentPort:number=parseInt(process.env.SERVER_PORT||'3000');

const launcher:server = new server();
 
launcher.start(currentPort);
launcher.getTest();
