const axios = require('axios');

// Create a Paystack payment session
exports.createPaymentSession = async (req, res) => {
    const { amount, email } = req.body;
    try {
        const response = await axios.post('https://api.paystack.co/transaction/initialize', {
            email,
            amount: amount * 100, // Amount in naira
        }, {
            headers: {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        res.json({ authorization_url: response.data.data.authorization_url });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
