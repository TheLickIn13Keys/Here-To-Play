import { Pagination } from "@discordx/pagination";
import type { ButtonInteraction, CommandInteraction } from "discord.js";
import { MessageEmbed, MessageButton, MessageActionRow, MessageSelectMenu } from "discord.js";
import { ButtonComponent, Discord, MetadataStorage, Slash } from "discordx";

const leaders = [
    { label: "Leader 1", value: "1" },
    { label: "Leader 2", value: "2" },
    { label: "Leader 3", value: "3" },
  ];

@Discord()
export class Leader{
    @ButtonComponent("join-btn")
    async joinBTN(interaction: ButtonInteraction): Promise<void>{
        await interaction.deferReply({
            ephemeral: true
        });

        const leaderMENU = new MessageSelectMenu()
            .addOptions(leaders)
            .setCustomId("leader-menu")
        ;

        const MAR = new MessageActionRow().addComponents(leaderMENU);



        interaction.editReply({
            content: "Please select your party leader!",
            components: [MAR]
        })
    }
}
