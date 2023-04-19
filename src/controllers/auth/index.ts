import {type FastifyReply, type FastifyRequest} from 'fastify';

export const index = async (_request: FastifyRequest, reply: FastifyReply): Promise<void> => reply.send({
	links: {
		login: '/auth/login',
		register: '/auth/register',
		refresh: '/auth/refresh',
	},
});
