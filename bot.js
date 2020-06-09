var Twit = require("twit");

const {
    BOT_CONSUMER_KEY,
    BOT_CONSUMER_SECRET,
    BOT_ACCESS_TOKEN,
    BOT_ACCESS_TOKEN_SECRET,
} = process.env;

const T = new Twit({
    consumer_key: BOT_CONSUMER_KEY,
    consumer_secret: BOT_CONSUMER_SECRET,
    access_token: BOT_ACCESS_TOKEN,
    access_token_secret: BOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000, // * optional HTTP request timeout to apply to all requests.
    strictSSL: true, // * optional - requires SSL certificates to be valid.
});

 

T.post("statuses/update", { status: "hello world!" }, function (
    err,
    data,
    response
) {
    console.log(data);
});