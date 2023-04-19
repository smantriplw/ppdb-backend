import {config as dotenvConfig} from 'dotenv';
import createFastify from 'fastify';
import fastifyJwt from '@fastify/jwt';

import {authRouter} from '@routes/auth';
import {logger} from '@logger';

if (process.env.NODE_ENV === 'development') {
	dotenvConfig();
}

const serverPort = parseInt(process.env.PORT ?? '3000', 10) ?? 3000;
const app = createFastify({
	trustProxy: true,
	logger: process.env.NODE_ENV === 'development' ? logger : false,
});

async function bootstrap() {
	// Register plugins
	await app.register(fastifyJwt, {
		secret: process.env.JWT_SECRET ?? 'this-is-default-secret',
		sign: {
			iss: 'ppdb.sman3palu.sch.id',
		},
		verify: {
			allowedIss: ['ppdb.sman3palu.sch.id'],
		},
	});

	// Register routes
	await app.register(authRouter, {prefix: '/auth'});

	// Listen to the server
	app.listen({
		port: serverPort,
		host: '0.0.0.0',
	}, err => {
		if (err) {
			app.log.error(err);
			process.exit(1);
		}
	});
}

void bootstrap();
