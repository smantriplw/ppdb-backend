import {pino} from 'pino';

export const logger: pino.Logger = pino({
	name: 'ppdb-sman3palu',
	level: 'info',
	transport: {
		target: 'pino-pretty',
		options: {
			colorize: true,
			translateTime: 'SYS:standard',
			ignore: 'pid,hostname',
		},
	},
});

