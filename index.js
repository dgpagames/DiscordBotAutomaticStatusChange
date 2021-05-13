const activities_list = [
    "Wait something.", 
    "Help thi server",
    "Eat a cookie", 
    "Try to get out"
    ]; // creates an arraylist containing phrases you want your bot to switch through.
    
    client.on('ready', () => {
        setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
            client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
        }, 10000); // Runs this every 10 seconds.
    });