import { z } from 'zod';

export const envValidationSchema = z.object({
    APP_TITLE: z.string(),
});
