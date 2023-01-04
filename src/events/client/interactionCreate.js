module.exports = {
    name:'interactionCreate',
    async execute(interaction, client) {
        console.log(`Ready!!! ${client.user.tag} is logged in and online.`);
    }
}