const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUFnWnN1a3Urdm1hSUVLQVlLOG0zaTdUMjVjMkYzTHRyQ25JcDQ2d0ZGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVl0M1FlczB6dnZZQk1xMk1aeUxrY1RRNTAvMlAwNFo1MGZuWlRsM1l6UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSDNTcUZTZWdBejZIMUFyUGhYYXNmSWFZcmx1SGprU0xrZ0JtRWl5SlhVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxNDBING5hVTVrNVZUbUhwWHFsY2xaeWVDZFl5ZUlJL1phWW5yYnVKYmlJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldDQ1BRS1M4SHJ1T0RTOURHc3B0a1FOdnZlUHdFUVlGczlSUm16Sm9WbG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx3a2E1UUx2SUFENkpoeVRGV3FjWmpKTk95VFI1cXR2ejhkbTVLcEYySGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUJXQm5lRGtuSzM1S0ZHQ0l5OGlhb1hBV0J2aEExR1pCZDVjVnRrWGVuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1czQzNhdC9Md3JteWRTOXVmN01tbUJzdWkwNjgxSUtScWdiZWhsN0cwND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZZcUU0aEpSTHpSYXRsNVZRM1cwWXoweUIvL1ZEWDVXdWcvbmVuTmtneWd5MjNCNm9LRVFsQTluVm9rQzRuZDFDQ0xEVFBiWEN4YTZHQ1FFamo1MGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTgsImFkdlNlY3JldEtleSI6ImhTQStQRUxhRDdYSlpyV2h4Y01ET1lhQ1AyK1JiOWJWZTZDY3NVWFV5bEk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjQ3OTQ3MjM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNTBGMTBCMERDNzkzMEZBMUMzMUQ4MTEwM0Y1QzQ3MCIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzcwODQ5MDIwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyNDc5NDcyMzhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1OTYzODkyQ0EzMTBDNTFCOUUwRjgyNkNBQjIxM0VDIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzA4NDkwMjB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI0Nzk0NzIzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTU0RTRFNTI2OTk2MzI0MDE1NzAxRURFMUZGNDM1NTIiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MDg0OTAyMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjQ3OTQ3MjM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNTMyMTVCNUM2NDZCRTQ0QzM4NzhBNDJGNkRENDNFMCIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzcwODQ5MDIxfV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ilc1RFJRUjFBIiwibWUiOnsiaWQiOiI5MjMyNDc5NDcyMzg6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJrYXNobWlyaSIsImxpZCI6IjIxOTEyNTY0MTE2Mjk2NzoyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT1AzMGZjSEVQU0Z0TXdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYW5RK3RwNmkxNHZtdEJuOXlxb3gyOU1VOUY3R1UrcVhuSTBoR21VR0IwVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibWdNNmJ2REZGVGltMElNMC9LLzN5Ynljcng4aDA4czB2WWJodzJkSGRaOGxSWDJLUWtnRjdFVG9sU3AvVVFBYk1zOEM5cUMxRHphR1phMW9TdnpJQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IldtOE96clhSUkgxZ2taM3FoMlhKMUFrSWtFTkM5VzNjUWo1N3RBVisydnB3STJtOGZFSkhyWW4vbWNNYlpya3RLaGwrWFNRWDZIOWJySytJM2l2T2lnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjE5MTI1NjQxMTYyOTY3OjJAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldwMFByYWVvdGVMNXJRWi9jcXFNZHZURlBSZXhsUHFsNXlOSVJwbEJnZEYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUWdDIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3MDg0OTAxNywibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUsvdCJ9",
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
