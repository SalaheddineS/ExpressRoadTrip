import server from './server'
import * as dotenv from 'dotenv';
dotenv.config();
const currentPort:number=parseInt(process.env.SERVER_PORT||'3000');

const launcher:server = new server();
 
launcher.start(currentPort);

