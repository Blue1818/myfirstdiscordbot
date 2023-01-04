const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Returns an embed.'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle(`This is an EMBED!`)
            .setDescription('This is a very cool description!')
            .setColor(0x18e1ee)
            .setImage(client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now())
            .setAuthor('AuthorName') //this may cause problems
            .addFields([
                {
                    name: `Field 1`,
                    value: `Field value 1`,
                    inline: true
                },
                {
                    name: `Field 2`,
                    value: `Field value 2`,
                    inline: true
                }
            ])
    },
};