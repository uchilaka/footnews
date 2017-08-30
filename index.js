const path = require('path'),
    express = require('express'),
    app = express(),
    PORT = 3500,
    exampleMiddleware = (req, res, next) => {
        console.info('exampleMiddware was here :)');
        // This is an example of middleware for expressjs apps - I can build whatever I want in here
        next();
    }
    ;

// Serve static files from the "public" directory
app.use(express.static(path.join(process.cwd(), 'public')));

// Define endpoints - we will migrate these to individual files later
app.get('/example-service',
    exampleMiddleware,
    (req, res) => {
        return res.json({
            message: "Hello World!"
        });
    })
    ;

app.listen(PORT, () => {
    console.info(`FootNews running on port ${PORT}`);
});