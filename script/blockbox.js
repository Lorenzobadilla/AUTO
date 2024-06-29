module.exports.config = {
  name: "blackbox",
  version: "1.0.0",
  role: 0,
  credits: "Lorenzo",//pls don't change credits
  hasPrefix: true,
  description: "Black box AI",
  commandCategory: "ai",
  usages: "[ask]",
  cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {
  const axios = require("axios");
  let { messageID, threadID, senderID, body } = event;
  let tid = threadID,
  mid = messageID;
  const content = encodeURIComponent(args.join(" "));
  if (!args[0]) return api.sendMessage("Please type a message..", tid, mid);
  try {
      const res = await axios.get(`https://openapi-idk8.onrender.com/blackbox?chat=${content}`);
      const respond = res.data.response;
      if (res.data.error) {
          api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {
              if (error) {
                  console.error(error);
              }
          }, mid);
      } else {
          api.sendMessage(respond, tid, (error, info) => {
              if (error) {
                  console.error(error);
              }
          }, mid);
      }
  } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while fetching the data.", tid, mid);
  }
};