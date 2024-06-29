const axios = require("axios");

module.exports.config = {
    name: "pickuplines",
    version: "1.0.1",
    author: "Lorenzo",
    coolDown: 5,
    role: 0,
  hasPrefix: true,
    description: "Get pickup lines English/Tagalog",
    commamdCategory: "fun",
    usage: "{prefix}pickupline"
  },

module.exports.run = async function ({ api, event }) {
    try {
      const response = await axios.get("https://lorenzorestapi.onrender.com/api/pickupline");
      const { pickupline } = response.data;
      const message = `💘${pickupline}`;
      return api.sendMessage(message, event.threadID);
    } catch (error) {
      console.error(error);
    }
  },
};