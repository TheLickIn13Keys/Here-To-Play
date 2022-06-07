import { Pagination } from "@discordx/pagination";
import type { ButtonInteraction, CommandInteraction } from "discord.js";
import { MessageEmbed, MessageButton, MessageActionRow, MessageSelectMenu } from "discord.js";
import { ButtonComponent, Discord, MetadataStorage, Slash } from "discordx";

@Discord()
export class Start {
  @Slash("start", { description: "Start a new game of Here To Slay" })
  async game(interaction: CommandInteraction): Promise<void> {
    await interaction.deferReply();

    const joinBTN = new MessageButton()
        .setLabel("Join")
        .setEmoji("🕹️")
        .setStyle("PRIMARY")
        .setCustomId("join-btn")
    ;
    const joinEMBED = new MessageEmbed()
        .setTitle("Here to Slay (Discord Edition)")
        .setFooter("Made by Bardia (TheLickIn13Keys#7977)")
        .setColor("FUCHSIA")
        .setDescription("Click below to join an intense card game battle!")
    ;
    const MAR = new MessageActionRow().addComponents(joinBTN);
    interaction.editReply({
        embeds: [joinEMBED],
        components: [MAR]

    })

  }


}