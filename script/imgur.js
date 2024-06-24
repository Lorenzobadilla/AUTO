module.exports.config = {
  name: "imgur",
  version: "1.0.0",
  role: 0,
  credits: "ZiaRein",
  description: "imgur upload",
  commandCategory: "link",
  hasPrefix: true,
  usages: `Please reply to image\n\nHow to use?\n${prefix}imgur [reply] <img>\n\nExample:\n${prefix}imgur <img reply>\n`,
  cooldowns: 1,
  dependencies: {
"axios": "",}
};

module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];  
var Lorenzo = event.messageReply.attachments[0].url || args.join(" ");
  if(!Lorenzo) return api.sendMessage(`Please reply to image\n\nHow to use?\n${prefix}imgur [reply] <img>\n\nExample:\n${prefix}imgur <img reply>\n\nCreated by: Lorenzo`, event.threadID, event.messageID)
const res = await axios.get(`https://lorenzorestapi.onrender.com/imgur?link=${encodeURIComponent(Lorenzo)}`);    
var Lorenzo = res.data.uploaded.image;
  return api.sendMessage(Lorenzo, event.threadID, event.messageID);

}