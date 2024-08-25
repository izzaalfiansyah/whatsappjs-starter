import bot from "../app/bot";
import { handleCommand } from "../app/helpers";

export default handleCommand(async (msg) => {
  if (
    msg.body.toLowerCase().includes("ping") ||
    msg.body.toLowerCase() == "p"
  ) {
    await msg.reply("pong");

    const chat = await msg.getChat();
    bot.sendMessage(msg.id.remote, `Hello ${chat.name}!`);
  }
});
