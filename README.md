Go to index.js after you have finished marking the lines of code for your bot to run and mark (you don't have to mark :
wait something, help this server, etc, you can replace it if you want




const activities_list = [
    "Wait something.", 
    "Help this server",
    "Eat a cookie", 
    "Try to get out"
    ]; // creates an arraylist containing phrases you want your bot to switch through.
    client.on('ready', () => {
        setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
            client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
        }, 10000); // Runs this every 10 seconds.
    });
