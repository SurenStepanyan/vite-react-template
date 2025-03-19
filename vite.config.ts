import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

import { ENV_PREFIX } from './config/env/constants';
import { validateEnv } from './config/env/index';

// https://vite.dev/config/
export default defineConfig({
    envPrefix: ENV_PREFIX,
    plugins: [
        react(),
        validateEnv(),
        tsconfigPaths(),
        checker({
            typescript: { tsconfigPath: 'tsconfig.app.json' },
        }),
    ],
});
