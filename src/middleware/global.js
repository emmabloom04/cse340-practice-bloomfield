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