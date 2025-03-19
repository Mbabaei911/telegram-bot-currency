import fetch from 'node-fetch';
import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
dotenv.config();
// Replace with your bot token and channel username
const token = process.env.TOKEN;
const channelId = process.env.CHANNEL_ID;

console.log(token);
const bot = new TelegramBot(token, {
    polling: true // No proxy
});
// Function to fetch currency data
async function fetchCurrencyData() {
    try {
        const response = await fetch('https://brsapi.ir/FreeTsetmcBourseApi/Api_Free_Gold_Currency.json'); // Example API
        const data = await response.json();
        console.log(data);
        return data.gold[0].price; // Adjust based on the API response structure
    } catch (error) {
        console.error('Error 1 fetching currency data:', error);
    }
}
bot.sendMessage(channelId,"hihi")

// Function to send currency updates to the channel
// async function sendCurrencyUpdates() {
//     const rates = await fetchCurrencyData();
//     if (rates) {
//         const message = `Current Currency Rates:\n` +
//             `DOLLAR: ${rates}\n` +

//         bot.sendMessage(channelId, message);
//     }
// }

// async function sendCurrencyUpdates() {
//     const rates = await fetchCurrencyData();
//     console.log('Fetched rates:', rates); // Debugging line
//     if (rates) {
//         const message = `Current Currency Rates:\n` +
//             `DOLLAR: ${rates}\n`;
//         console.log('Message to send:', message); // Debugging line
//         bot.sendMessage(channelId, message);
//     } else {
//         console.error('No rates available to send.'); // Handle case where rates are not available
//     }
// }
// // Send updates every minute
// setInterval(sendCurrencyUpdates, 60000); 
