import { z } from 'zod';

export const checkoutSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    address: z.string().min(1, 'Address is required'),
    city: z.string().min(1, 'City is required'),
    postalCode: z.string().min(1, 'Postal code is required'),
});

export type CheckoutData = z.infer<typeof checkoutSchema>;
