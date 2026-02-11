const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU8vR2JsbVEwcWZVTmRiLzZXZGNUQmp2dVVXUEpPQU9LQ1BLYlpndHZtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUFiUlFnMzZVaHluTEVMSTBnSGdIRjBWQ25zWFpmcVVoQTI0U1JVUEJDZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Rm85VnJkT2l4S3dvcW5VZWJKK0ZOeHFYRTdCMTNjOVpJVzAvdS9OcTM0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Um5ZcVdRNDJOWU45b1J2Nnl2ZmJvc0cwc0RaU0syQlZid3RTME0zMDI4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1BNlpzZGIrV0FVcU9YcVZ4MHh0QTBwaEQvZUZ0V1JpTmRZU3h3UUd4RUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZDVVhOTy91S1hZQkdkM2FJYk9LRHdOdFRrUFphNjlYUmEwNEo3L1IrMGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU01DMmd3cHl5Skk1cTA5QjdRbWpLWTFKVElMZjFZU1FPc3pBRGQxeW5XVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjF4L0NJMHcyeSs2aDdISExjR2gwZXFKTkkwdEI1MzdaQmhDU2l5bmMzUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBOWGFuaUp5cUtXc0xjQ2s5S3pDelBHUEhSVHg3RHVIVm9RWXM5QWZ0aHY5dWJlU3UxWFBhUHlnQ0ZUSFdYcFovdVJpU1hGUFBmZitabXFwTFJMMUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJWNjdHOUV4SFlwS0NHVXJYT0NZL1c1eEQ2MGhCUWFOc3JHM3I3cVRpelFrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI0Nzk0NzIzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTU5MTRBRTJENjJCQjc0MTA2NkM1RTlERDZBREQ0QTgiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MDg0NTY2OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjQ3OTQ3MjM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNThEOUVFRjIwRTU2QTM5NTNFMDkyRjVCMDA4QTQxQiIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzcwODQ1NjY5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyNDc5NDcyMzhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1NzczMkU3MTFGMkY4QkY4MjE2OUU0MUJFQzUwRjE4IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzA4NDU2NzF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI0Nzk0NzIzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTU4RjNBRTQyOTVDRTZENThDQTY1QTc1MkRBQTVCMEYiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MDg0NTY3MX1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJWN0U1QVNBNSIsIm1lIjp7ImlkIjoiOTIzMjQ3OTQ3MjM4OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoia2FzaG1pcmkiLCJsaWQiOiIyMTkxMjU2NDExNjI5Njc6MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09MMzBmY0hFTnpyczh3R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImFuUSt0cDZpMTR2bXRCbjl5cW94MjlNVTlGN0dVK3FYbkkwaEdtVUdCMFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikl4RThkbzJsdU5FQXk3UlVkMzN2VDlyQWZtODQ3ZG5ZRUk5UFQxU1hEUk9IK1JYRzRvZ0pYUUlkbWdOZXBTZUhrMXJzdUV4NWJ4OXdwYThWbEsyekFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMZTRCazdRSUh2T1RmTWEvSGtvZk5PbkljVmh0eDg0VURtMGFlaUpyQ0lWNC92S0o2aG55cVVFZE4wNTJOdG9seXVBZmphM3ByVjZoK3h4N0JsN1lEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIxOTEyNTY0MTE2Mjk2NzoxQGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXcDBQcmFlb3RlTDVyUVovY3FxTWR2VEZQUmV4bFBxbDV5TklScGxCZ2RGIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQlFnQyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NzA4NDU2NjYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTzBrIiwibGFzdFByb3BIYXNoIjoiUFdrNUIifQ==",
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
