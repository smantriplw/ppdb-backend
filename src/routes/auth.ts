import {index} from '@controllers/auth';
import {type FastifyInstance} from 'fastify';

export const authRouter = async (app: FastifyInstance): Promise<void> => {
	app.get('/', index);
};
