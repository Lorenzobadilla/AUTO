module.exports.config = {
  name: "cnamebot",
  version: "1.0.4",
  role: 0,
  creditss: "Lorenzo",
  description: "Automatically prevent change bot nickname",
hasPrefix: true,
  commandCategory: "system",
  usages: "",
  cooldowns: 5
};


module.exports.handleEvent = async function ({ api, args, event, client, __GLOBAL, Threads, Currencies }) {
  const { threadID } = event;
  let { nicknames } = await api.getThreadInfo(event.threadID)
  const nameBot = nicknames[api.getCurrentUserID()]
  if (nameBot !== `》 ${prefix} 《 ❃ ➠ 𝗔𝘂𝘁𝗼𝗕𝗼𝘁 𝗯𝘆 𝗟𝗼𝗿𝗲𝗻𝘇𝗼`) {
      api.changeNickname(`》 ${prefix} 《 ❃ ➠ 𝗔𝘂𝘁𝗼𝗕𝗼𝘁 𝗯𝘆 𝗟𝗼𝗿𝗲𝗻𝘇𝗼`,event.threadID,
api.getCurrentUserID());
      setTimeout(() => {
          return api.sendMessage(`THIS IS AUTOMATIC CHANGE BOT NICKNAME PLEASE DO NOT CHANGE MY NICKNAME\nMy Prefix ${prefix}\nMy Developer https://www.facebook.com/LorenzoC.Badilla`, threadID);
      }, 1500);
  }
}

module.exports.run = async({ api, event, Threads}) => {
  let data = (await Threads.getData(event.threadID)).data || {};
  if (typeof data["cnamebot"] == "undefined" || data["cnamebot"] == false) data["cnamebot"] = true;
  else data["cnamebot"] = false;

  await Threads.setData(event.threadID, { data });
  global.data.threadData.set(parseInt(event.threadID), data);

  return api.sendMessage(`✅ ${(data["cnamebot"] == true) ? "Turn on" : "Turn off"} successfully cnamebot!`, event.threadID);

}