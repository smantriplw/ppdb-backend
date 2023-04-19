import {config as dotenvConfig} from 'dotenv';
import createFastify from 'fastify';

if (process.env.NODE_ENV === 'development') {
	dotenvConfig();
}

const app = createFastify({
	trustProxy: true,
	logger: process.env.NODE_ENV === 'development',
});
const serverPort = parseInt(process.env.PORT ?? '', 10) ?? 3000;

app.listen({
	port: serverPort,
	host: '0.0.0.0',
}, (err, address) => {
	if (err) {
		app.log.error(err);
		process.exit(1);
	}

	app.log.info(`Server listening on ${address} with port ${serverPort}`);
});
