const getCurrentGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        return 'Good morning!';
    }
    else if (currentHour >= 12 && currentHour < 17) {
        return 'Good afternoon!';
    }
    else {
        return 'Good evening!';
    }
}

const addLocalVariables = (req, res, next) => {
    // set current year for use in templates
    res.locals.currentYear = new Date().getFullYear();

    // make NODE_ENV available to all templates
    res.locals.NODE_ENV = process.env.NODE_ENV?.toLowerCase() || 'production';

    // make req.query available to all templates
    res.locals.queryParams = { ...req.query };

    // set greeting based on time of day
    res.locals.greeting = `<p>${getCurrentGreeting()}</p>`

    const themes = ['blue-theme', 'green-theme', 'red-theme', 'purple-theme', 'yellow-theme', 'dark-theme'];

    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    res.locals.bodyClass = randomTheme;

    next();
}

export { addLocalVariables };