declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly APPLICATION_ID?: string;
			readonly API_KEY?: string;
		}
	}
}

export {};
