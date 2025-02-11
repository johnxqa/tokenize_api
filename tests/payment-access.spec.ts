import { expect, test, request } from '@playwright/test';


test.describe('Validate payment token is accessible', () => {

    const paymentData = 
    {
        "payment_method": {
            "card_number": "4111111111111111",
            "month": "12",
            "year": "2025",
            "first_name": "Test",
            "last_name": "User",
            "cvv": "123"
        }   
    };
   
    const tokenURI = '/api/v1/payment_methods/tokenize ';

    test('Verify token is not created with incorrect credential encoding', async ({ }) => {
        const context = await request.newContext({
            extraHTTPHeaders: {
                'Authorization': `Basic ${process.env.DEVELOPMENT_USERNAME}:${process.env.DEVELOPMENT_PASSWORD}`,
            },
        });

        // Call the API to tokenize the payment data
        const response = await context.post(`${tokenURI}`, { data: paymentData});
        expect(response.status()).toBe(500);
    });

    test('Verify token is not created with incorrect username and password', async ({ }) => {
        const context = await request.newContext({
            extraHTTPHeaders: {
                'Authorization': `Basic ${Buffer.from(`${process.env.DEVELOPMENT_USERNAME}_wrong:${process.env.DEVELOPMENT_PASSWORD}_wrong`).toString('base64')}`,
            },
        });

        // Call the API to tokenize the payment data
        const response = await context.post(`${tokenURI}`, { data: paymentData });
        expect(response.status()).toBe(500);
    });

    test('Verify token is not created when NO Authorization header is passed', async ({ }) => {
        const context = await request.newContext({
            extraHTTPHeaders: {},
        });

        // Call the API to tokenize the payment data
        const response = await context.post(`${tokenURI}`, { data: paymentData });
        expect(response.status()).toBe(500);
    });
    
});
