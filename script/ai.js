   const axios = require('axios');

   module.exports.config = {
     name: "ai",
     version: "1.0.0",
     role: 0,
     credits: "Lorenzo",
     description: "Interacts with a GPT-4 API",
     hasPrefix: false,
     commandCategory: "ai and gpt4",
     usages: "[question]",
     cooldowns: 5,
     dependencies: {
       "axios": ""
     }
   };

module.exports.handleEvent = async function ({ api, event }) {
     const lowerBody = event.body.toLowerCase();
     if (!(lowerBody.startsWith("gpt4") || lowerBody.startsWith("ai"))) return;

     const args = event.body.split(/\s+/);
     args.shift();

     const question = args.join(" ");
     if (!question) {
       api.sendMessage("please provide your question", event.threadID, event.messageID);
       return;
     }

     api.sendMessage(`☄️ |Answering your question...`, event.threadID, event.messageID);

     const apiUrl = `https://lorenzorestapi.onrender.com/gpt4?ask=${encodeURIComponent(question)}`;

     try {
       const response = await axios.get(apiUrl);
       const answer = response.data.answer;

       api.sendMessage(answer, event.threadID, event.messageID);
     } catch (error) {
       console.error("Error fetching AI response:", error);
       api.sendMessage("Error fetching AI response", event.threadID, event.messageID);
     }
   };