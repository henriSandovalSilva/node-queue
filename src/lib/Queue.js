import Queue from 'bull';
import redisConfig from '../config/redis';

let mailQueue = new Queue('mail', redisConfig);

export default mailQueue;