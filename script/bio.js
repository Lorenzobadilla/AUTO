const moment = require("moment-timezone");

module.exports.config = {
  name: "bio",
  version: "1.0.0",
  role: 0,
  credits: "Lorenzo",//Modified by Lorenzo 
  description: "Change bot's bio automatic",
hasPrefix: true, 
  commandCategory: "admin",
  usages: "bio",
  cooldowns: 0
};

module.exports.run = async ({ api, event, args }) => {
  const prefix = "!"; // Replace with your desired prefix 
  const ownerName = "@[100082342305590:999:Lorenzo C. Badilla]"; // Replace with your name or bot owner's name
const lorenzo = moment.tz("Asia/Manila").format("『h:mm A dddd』");


  const bioText = `
❒ | PREFIX: ${prefix} \n
🙇 | Owner: ${ownerName}\n
🟢 Active In: ${lorenzo}\n
  `;

  api.changeBio(bioText, (e) => {
    if (e) {
      api.sendMessage("An error occurred: " + e, event.threadID);
    } else {
      api.sendMessage(`The bot's bio has been updated to:\n${bioText} automatically `, event.threadID);
    }
  });
};