import server from './server'

const currentPort:number=parseInt(process.env.SERVER_PORT||'3000');
console.log(currentPort)
const launcher = new server().start(currentPort);