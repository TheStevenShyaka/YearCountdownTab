// Function to calculate days left in the year
function calculateDaysLeft() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const endOfYear = new Date(currentYear, 11, 31);
    const diffTime = endOfYear - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Function to display a random quote
function displayRandomQuote() {
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Strive not to be a success, but rather to be of value. - Albert Einstein",
        "The mind is everything. What you think you become. - Buddha",
        "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "The journey of a thousand miles begins with a single step. - Lao Tzu",
        "Act as if what you do makes a difference. It does. - William James",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "What you get by achieving your goals is not as important as what you become. - Zig Ziglar",
        "In the middle of difficulty lies opportunity. - Albert Einstein"
    ];
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteElement = document.getElementById('quote');

    if (quoteElement) {
        // Find where the attribution starts (after the last -)
        const lastDash = randomQuote.lastIndexOf(' - ');
        if (lastDash !== -1) {
            const quote = randomQuote.substring(0, lastDash);
            const author = randomQuote.substring(lastDash + 3);
            quoteElement.innerHTML = `"${quote}"<br><span class="quote-author">— ${author}</span>`;
        } else {
            quoteElement.textContent = `"${randomQuote}"`;
        }
    } else {
        console.error("Quote element not found!");
    }
}

// --- Main execution ---
document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');

    if (countdownElement) {
        const daysLeft = calculateDaysLeft();
        // Add "+" before the number and " Ways" after it
        countdownElement.textContent = `+${daysLeft} Ways`;
    } else {
        console.error("Countdown element not found!");
    }

    displayRandomQuote();
});

// Update countdown every day
setInterval(() => {
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        const daysLeft = calculateDaysLeft();
        countdownElement.textContent = `+${daysLeft} Ways`;
    }
}, 86400000); // 24 hours