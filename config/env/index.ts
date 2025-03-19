import { ENV_PREFIX } from './constants';
import { envValidationSchema } from './validation-schema';
import { Plugin, loadEnv } from 'vite';

export const validateEnv = (): Plugin => {
    return {
        name: 'validateEnv',
        config: (_, { mode }) => {
            const env = loadEnv(mode, process.cwd(), ENV_PREFIX);

            const parseResult = envValidationSchema.safeParse(env);

            if (!parseResult.success || !parseResult) {
                console.error('❌ Environment variable validation failed: ', parseResult.error);
                process.exit(0);
            }
        },
    };
};
