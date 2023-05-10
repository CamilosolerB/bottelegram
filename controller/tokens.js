const Twit = require("twit");

const keys = {
    "tokenTelegram": "6113995402:AAE37U7PXKJWuMpkB8o7mrrThZ82Ii1lhTA",
    "chat_id": [5916757222,394724526],
    "Twitter": new Twit({
        consumer_key: '976564855657426945-yPZeNzjV0U5KetMqLZL8dUNYXjSyIJt',
        consumer_secret: 'F8w0Ag2sIKxAAt1o56Ktb2IOvxjViPwud6ZQs82OlTUg6',
        access_token: 'QmCukjzCDqvNinTOYupn5rAo9',
        access_token_secret: 'qpbsGsFgNw6NQRlRFHDAWTYg7N28xkH3NF7bsPjj7XepdDhyaX',
        timeout_ms: 60*1000
    })
};

module.exports = keys;