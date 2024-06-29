
const axios = require('axios');

module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['ai'],
  description: "An AI command powered by Lorenzo",
  usage: "Ai [text]",
  credits: 'Developer',
  cooldown: 3,
};

module.exports.run = async function({ api, event, args }) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`Hello there!\n\nI am an AI developed by OpenAi. I am here to assist you with any questions or tasks you may have.\n\nusage: ai what meaning of lowkey?`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(`🔍 |Answering please wait..`, event.threadID, event.messageID);
  try {
    const { data } = await axios.get(`https://openapi-idk8.onrender.com/chatter?query=${encodeURIComponent(input)}`);
    console.log(data); 
    const response = data.content; 

    const finalResponse = `『𝗔𝗶 𝗖𝗼𝗻𝘃𝗲𝗿𝘀𝗮𝘁𝗶𝗼𝗻』\n\n${response}`;
    api.sendMessage(finalResponse + '\n\n____________________', event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request, please try sending your question again', event.threadID, event.messageID);
    console.error(error); 
  }
};