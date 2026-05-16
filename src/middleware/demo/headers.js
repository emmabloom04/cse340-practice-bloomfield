// Middleware to add custom headers for demo purposes.

// Route-specific middleware that sets custom headers
const addDemoHeaders = (req, res, next) => {

    // add a header called 'x-demo-page' with value 'true'
    res.setHeader('X-Demo-Page', 'true')

    // add a header called 'x-middleware-demo' with your own message
    res.setHeader('X-Middleware-Demo', 'Congrats, you have found the special fancy message')

    next();
};

export { addDemoHeaders };