const BLACKJACK_API_BASE_URL = import.meta.env.VITE_BLACKJACK_API_URL;
const FUNCTION_KEY = import.meta.env.VITE_FUNCTION_KEY;

// A simple API caller class to help handling API requests to our cloud hosted backend
class ApiCaller {
    async post(endpoint, body) {
        return this.request(endpoint, "POST", body);
    }

    async request(endpoint, method, body = null) {
        const url = `${BLACKJACK_API_BASE_URL}${endpoint}`;

        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
                "x-functions-key": FUNCTION_KEY
            }
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(url, options);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "API request failed");
        }

        return response.json();
    }
}

export default new ApiCaller();