module.exports = (client) => {
  console.log(`This is: ${client.user.tag}`);
   let statuses = [
        "discord.js",
        "Arctic Network",
     "/help | Randomize#0002"
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "PLAYING"});

    }, 2000)

}