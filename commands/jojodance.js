module.exports.run = async (bot, message, args) =>{
    const m = await message.channel.send(`
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣠⣶⣶⣤⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣾⣿⣿⣿⣿⣿⡞⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⡿⢃⡀⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⢿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢈⣽⣿⣿⣿⣿⣿⣿⣿⢿⣷⣦⣀⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣸⣿⣿⣿⣿⣿⣿⣿⣿⠄⢉⣻⣿⡇⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⣿⣿⡉⣀⣿⣿⣿⣿⣋⣴⣿⠟⠋⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⢀⣀⣼⣿⣿⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⣿⣮⡠⠄⠄⠄⠄
    ⠄⠄⠄⠄⢰⣾⣿⣿⡿⠿⠛⠛⠛⠉⠄⠄⠄⠄⠙⠻⢿⣿⣿⣿⣶⣆⡀⠄
    ⠄⠄⠄⠄⠄⠹⣿⣿⣦⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢉⣿⣿⣿⣿⣿⠂
    ⠄⠄⠄⠄⠄⠄⠈⢿⣿⣇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣴⣾⣿⡿⠟⠉⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠂⢿⣿⣥⡄⠄⠄⠄⠄⢀⣠⣶⣿⣿⠟⠋⠁⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⣀⣤⣾⣿⣿⣷⣿⣃⡀⢴⣿⣿⡿⣿⣍⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠈⠉⠉⠉⠉⠉⠉⠉⠄⠄⠄⠉⠙⠛⠛⠛⠛⠂⠄⠄⠄⠄⠄`)
   m.edit(`
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣠⣶⣶⣤⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣾⣿⣿⣿⣿⣿⡞⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⡿⢃⡀⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⢿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢈⣽⣿⣿⣿⣿⣿⣿⣿⢿⣷⣦⣀⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣸⣿⣿⣿⣿⣿⣿⣿⣿⠄⢉⣻⣿⡇⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⣿⣿⡉⣀⣿⣿⣿⣿⣋⣴⣿⠟⠋⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⢀⣀⣼⣿⣿⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⣿⣮⡠⠄⠄⠄⠄
    ⠄⠄⠄⠄⢰⣾⣿⣿⡿⠿⠛⠛⠛⠉⠄⠄⠄⠄⠙⠻⢿⣿⣿⣿⣶⣆⡀⠄
    ⠄⠄⠄⠄⠄⠹⣿⣿⣦⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢉⣿⣿⣿⣿⣿⠂
    ⠄⠄⠄⠄⠄⠄⠈⢿⣿⣇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣴⣾⣿⡿⠟⠉⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠂⢿⣿⣥⡄⠄⠄⠄⠄⢀⣠⣶⣿⣿⠟⠋⠁⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⣀⣤⣾⣿⣿⣷⣿⣃⡀⢴⣿⣿⡿⣿⣍⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠈⠉⠉⠉⠉⠉⠉⠉⠄⠄⠄⠉⠙⠛⠛⠛⠛⠂⠄⠄⠄⠄⠄`)
   
    m.edit(`
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⠄⣠⣶⣶⣷⣿⣶⡊⠄⠄⣀⣤⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⣀⣴⣶⣾⢿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⡏⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⢸⣿⡍⠁⠄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠁⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣼⣿⣿⣿⣿⣿⣿⣿⠏⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⡿⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠻⣿⣿⣿⣿⣡⣶⣶⣄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⣀⣀⣠⣴⣦⡤⣿⣿⣿⣿⡻⣿⣿⡯⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⡟⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⢻⣿⣿⡏⠉⠙⠛⢛⣿⣿⣿⣿⠟⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⢿⣿⡧⠄⠄⢠⣾⣿⣿⡿⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠈⣿⣿⣄⣼⣿⣿⣿⠏⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠸⡿⣻⣿⣿⣿⣿⣆⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣻⠟⠈⠻⢿⣿⣿⣆⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠿⠍⠄⠄⠄⠄⠉⠻⣿⣷⡤⣀⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⢻⣿⡿⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⡯⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠸⠃⠄⠄⠄⠄⠄⠄⠄`);
    m.edit(`
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⠄⣠⣶⣶⣷⣿⣶⡊⠄⠄⣀⣤⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⣀⣴⣶⣾⢿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⡏⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⢸⣿⡍⠁⠄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠁⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣼⣿⣿⣿⣿⣿⣿⣿⠏⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⡿⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠻⣿⣿⣿⣿⣡⣶⣶⣄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⣀⣀⣠⣴⣦⡤⣿⣿⣿⣿⡻⣿⣿⡯⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⡟⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⢻⣿⣿⡏⠉⠙⠛⢛⣿⣿⣿⣿⠟⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⢿⣿⡧⠄⠄⢠⣾⣿⣿⡿⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠈⣿⣿⣄⣼⣿⣿⣿⠏⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠸⡿⣻⣿⣿⣿⣿⣆⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣻⠟⠈⠻⢿⣿⣿⣆⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠿⠍⠄⠄⠄⠄⠉⠻⣿⣷⡤⣀⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⢻⣿⡿⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⡯⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠸⠃⠄⠄⠄⠄⠄⠄⠄`);
   
    m.edit(`
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⣴⣧⣤⣴⡖⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⣰⣿⣿⣿⣿⣿⣷⣀⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠈⠘⠻⢿⣿⣿⣿⣿⣿⣿⣿⣆⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⢤⣴⣦⣄⣀⣀⣴⣿⡟⢿⣿⡿⣿⣿⣿⣿⣿⣿⡄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠉⠉⠙⠻⠿⣿⡿⠋⠄⠈⢀⣀⣠⣾⣿⣿⣿⣿⣿⡄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⢀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠉⠋⠉⠉⠁⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠈⠛⠛⣿⣿⣿⣿⣿⣿⣇⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⢀⣠⣶⣿⣿⠿⢛⣿⣿⣿⣿⣷⣤⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⣶⣷⣿⣿⡉⠄⠄⠄⠄⠉⠉⠉⠉⠉⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠘⠛⠟⢿⣤⣤⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄`)
       m.edit(`
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⣴⣧⣤⣴⡖⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⣰⣿⣿⣿⣿⣿⣷⣀⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠈⠘⠻⢿⣿⣿⣿⣿⣿⣿⣿⣆⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⢤⣴⣦⣄⣀⣀⣴⣿⡟⢿⣿⡿⣿⣿⣿⣿⣿⣿⡄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠉⠉⠙⠻⠿⣿⡿⠋⠄⠈⢀⣀⣠⣾⣿⣿⣿⣿⣿⡄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⢀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠉⠋⠉⠉⠁⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠈⠛⠛⣿⣿⣿⣿⣿⣿⣇⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⢀⣠⣶⣿⣿⠿⢛⣿⣿⣿⣿⣷⣤⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⣶⣷⣿⣿⡉⠄⠄⠄⠄⠉⠉⠉⠉⠉⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠘⠛⠟⢿⣤⣤⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄`)

    m.edit(`
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣤⣄⠄⡀⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣴⣿⣿⣿⣿⣷⡒⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⡀⣹⣿⣿⣿⣿⣿⣯⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⣀⣴⣿⣿⣿⣿⣿⣿⠿⠋⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⢀⣀⣤⣶⣾⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄
    ⠄⡶⣶⡿⠛⠛⠉⠉⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠘⠃⠄⠄⠄⠄⠄⠄⠄⠄⢠⣿⣿⣿⣿⣿⡟⠁⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⣤⣾⣷⣿⣿⣿⣿⡏⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⢀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⠂⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⢀⣤⣴⣾⣿⣿⣿⣿⡿⠛⠻⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠸⣿⣿⣿⣿⠋⠉⠄⠄⠄⠄⣼⣿⣿⡿⠇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠈⠻⣿⣿⣆⠄⠄⠄⠄⠄⣿⣿⣿⣷⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠻⣿⣿⣆⡀⠄⠄⠈⠻⣿⣿⣿⣦⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⣀⣌⣿⣿⣿⣦⡄⠄⠄⠄⠙⠻⣿⣿⣦⣀⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠈⠉⠉⠉⠉⠉⠁⠄⠄⠄⠄⠄⠄⠄⠘⠻⣿⢿⢖⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⠁⠄⠄⠄⠄⠄`)

    m.edit(`
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣤⣄⠄⡀⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣴⣿⣿⣿⣿⣷⡒⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⡀⣹⣿⣿⣿⣿⣿⣯⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⣀⣴⣿⣿⣿⣿⣿⣿⠿⠋⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⢀⣀⣤⣶⣾⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄
    ⠄⡶⣶⡿⠛⠛⠉⠉⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠘⠃⠄⠄⠄⠄⠄⠄⠄⠄⢠⣿⣿⣿⣿⣿⡟⠁⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⣤⣾⣷⣿⣿⣿⣿⡏⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⢀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⠂⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⢀⣤⣴⣾⣿⣿⣿⣿⡿⠛⠻⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠸⣿⣿⣿⣿⠋⠉⠄⠄⠄⠄⣼⣿⣿⡿⠇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠈⠻⣿⣿⣆⠄⠄⠄⠄⠄⣿⣿⣿⣷⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠻⣿⣿⣆⡀⠄⠄⠈⠻⣿⣿⣿⣦⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⣀⣌⣿⣿⣿⣦⡄⠄⠄⠄⠙⠻⣿⣿⣦⣀⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠈⠉⠉⠉⠉⠉⠁⠄⠄⠄⠄⠄⠄⠄⠘⠻⣿⢿⢖⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⠁⠄⠄⠄⠄⠄`)

    
}

module.exports.help ={
    name:"jojodance",
    description:"",
    aliases:["jojopose","JD","jd"],
    
}