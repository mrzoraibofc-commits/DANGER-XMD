const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVA2WnNOVzBjamhkL0U3eXBkRGhlcHZuTllCVmtRb3BrWEMxaGFVTnFFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGZHaUlMWUlSa3Y2bVB5VGlHd3lSZURoOUlkUXFpdFZHTWJCQ0sxWnNodz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4R1RKam1sN3RUeVVxcjc3TTZadC9SUk04M1FDK1JicmNwNmk4UVFBM0hJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGWUk5MVpjVzhXd0ppMkczaFZhdnFabkF0LzZPREg5UjdoTDZXVUNsbTE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktNc1RvZlhxamFNQ2pBcnd6clZJZEJrYWM2RjcrT0NIbEYxUyt0ZWJ1MGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdmOEpHcFBrRjd5eDZDRFl5dXk2Y0tlV3d3L1F3TFRzWDRzbTBiNHFnR3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0xqYVRiVlg4ZjJEZVk5Sjd1dlRwYW1LVEJsbjE2SkFUL3czNXpWSFNYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVk1lanpDa05lNWNlN0JCenl4T1VSazZpdTJQUnJSSXFPUE42UEdvY3F6UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1pMXJURFJvMytPUXA3Y0o2R2p2TzIyRDd1QlAveVhPcnVzbDY3MUE3U0hDT3AxTWlSYStBc0g5alAvVkFlOGVYc1BCTFB1UHlwQjhNV041cFdDZ2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTMsImFkdlNlY3JldEtleSI6IlFGQk1vSFRncGw5RlpiaXRrTk1STnc4ZVZJQ0dtT2ZsK1FZN2ZFY3A5MDA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjQ3OTQ3MjM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNUE0MEMwOTc0MjMxRjI3QTEzOUMzRkY0ODlERkRCQiIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzcwODc2NTYzfV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjNCRjZISEREIiwibWUiOnsiaWQiOiI5MjMyNDc5NDcyMzg6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJrYXNobWlyaSIsImxpZCI6IjIxOTEyNTY0MTE2Mjk2NzozQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT1AzMGZjSEVJZmR0Y3dHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYW5RK3RwNmkxNHZtdEJuOXlxb3gyOU1VOUY3R1UrcVhuSTBoR21VR0IwVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZjhRbm1WbHcydWorZ3FFSG5uZjJmOGZycGNESlMvNjlFSlNNVGV0OW10SS9UUTNWeGFHSkdDQVdrTjdXTlREWWJ3MGxoWHdtL25JeWtYTzduaUJzQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IlJlOWtUODFDdVFXaENDbzhMY1dsN1lJYmlFTzNrd1piOWVmN2lpZG1POEZ6TitONHo4K1BuQm9LR2psUE5kbUUxSzdERURZRFJWVCtncFJnM243dGpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjE5MTI1NjQxMTYyOTY3OjNAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldwMFByYWVvdGVMNXJRWi9jcXFNZHZURlBSZXhsUHFsNXlOSVJwbEJnZEYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUWdDIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3MDg3NjU1NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLL3QiLCJsYXN0UHJvcEhhc2giOiJQV2s1QiJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY DANGER-XMD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "DANGER-XMD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "DANGER-XMD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "9203487575174",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Hussi Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Zoraibxhussi Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "9203487575174",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
