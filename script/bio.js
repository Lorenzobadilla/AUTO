module.exports.config = {
	name: "bio",
	version: "1.0.0",
	role: 1,//if you change to 2 or 3 The admin in the group can also change that
	credits: "Lorenzo",
	description: "Change bot's bio",
	commandCategory: "admin",
	usages: "bio [text]",
  hasPrefix: true,
  cooldowns: 5
  
}
  module.exports.run = async ({ api, event,  args, }) => {
    api.changeBio(args.join(" "), (e) => {
      if(e) api.sendMessage("an error occurred" + e, event.threadID); return api.sendMessage("Has changed the biography of the bot into: \n"+args.join(" "), event.threadID, event.messgaeID)
    }
    )
  }