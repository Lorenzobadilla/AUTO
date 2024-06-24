const fs = require("fs");
module.exports.config = {
	name: "goodnight",
    version: "1.0.0",
	role: 0,
	credits: "Lorenzo", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "good night ☄️",
	hasPrefix: false,
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("goodnight")==0 || (event.body.indexOf("Goodnight")==0 || (event.body.indexOf("night")==0 || (event.body.indexOf("tulog")==0)))) {
		var msg = {
				body: "Hello Good Night Sleepwell.",
				attachment: fs.createReadStream(__dirname + `/cache/goodnight.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}