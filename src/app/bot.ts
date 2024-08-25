import { Client, LocalAuth, Message } from "whatsapp-web.js";
import fs from "fs";
import path from "path";

import onQR from "../events/qr";
import onReady from "../events/ready";
import onDisconnected from "../events/disconnected";

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

client.on("ready", onReady);

client.on("qr", onQR);

client.on("disconnected", () => {
  onDisconnected();
  client.destroy();
  client.initialize();
});

const commandsFolder = path.resolve("./src/commands");
const commands = fs.readdirSync(commandsFolder);

client.on("message", (message) => {
  for (const command of commands) {
    require(commandsFolder + "/" + command).default(message);
  }
});

client.initialize();

export default client;
