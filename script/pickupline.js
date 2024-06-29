const axios = require("axios");

module.exports.config = {
	name: "pickupline",
	version: "1.0.0",
	role: 0,
	credits: "Lorenzo",
	hasPrefix: true,
	description: "Random pickuplines English/Tagalog",
	commandCategory: "fun",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
const res = await axios.get(`https://lorenzorestapi.onrender.com/api/pickupline`);
  var pickupline = res.data.pickupline;
return api.sendMessage(`💘${pickupline}`, event.threadID, event.messageID)
}