import bot from "../app/config";
import { handleCommand } from "../app/helpers";

export default handleCommand((msg) => {
  console.log(msg);
  if (
    msg.body.toLowerCase().includes("ping") ||
    msg.body.toLowerCase() == "p"
  ) {
    msg.reply("pong");
    bot.sendMessage("6281231921351@c.us", "Hello World!");
  }
});
