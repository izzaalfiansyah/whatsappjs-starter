import { Client, LocalAuth, Message } from "whatsapp-web.js";
import fs from "fs";
import path from "path";

import onQR from "../events/qr";
import onReady from "../events/ready";
import onDisconnected from "../events/disconnected";

const bot = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

bot.on("ready", onReady);

bot.on("qr", onQR);

bot.on("disconnected", () => {
  onDisconnected();
  bot.destroy();
  bot.initialize();
});

const commandsFolder = path.resolve("./src/commands");
const commands = fs.readdirSync(commandsFolder);

bot.on("message", (message) => {
  for (const command of commands) {
    require(commandsFolder + "/" + command).default.listener(message);
  }
});

bot.initialize();

export default bot;
