const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_52_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNixcbiAgICAgICAgMTAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDMzLFxuICAgICAgICA0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDYwLFxuICAgICAgICA0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMixcbiAgICAgICAgMTM1LFxuICAgICAgICA0MixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcyLFxuICAgICAgICA4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxODQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDgxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM4LFxuICAgICAgICA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDczLFxuICAgICAgICAzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDc1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDkxLFxuICAgICAgICA1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MixcbiAgICAgICAgNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjksXG4gICAgICAgIDExOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkzLFxuICAgICAgICA2MyxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYzRwdDZhT0JDYzNSaHRuWkR0STJmZU9QOE9QM3VYa0V1emRFRStXWmE5ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2NzgyOTIxNTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVCQTFBNzUxRUM2NTQ5MEMwMEZGMTI0N0VERUI2NkM1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjEwOTk3NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnVVktQ0JqSFQ1MlRWNE9GcXRlNzZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjUzODQ4MDEyLWZmY2ItNDg2Ny1hMzE5LWU5ODY4NmM3Y2UwN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxLFxuICAgICAgMzEsXG4gICAgICAxNzYsXG4gICAgICA3OCxcbiAgICAgIDIwMSxcbiAgICAgIDIxNCxcbiAgICAgIDkxLFxuICAgICAgNjgsXG4gICAgICAxMjAsXG4gICAgICAyMzksXG4gICAgICAxNjYsXG4gICAgICAxNTYsXG4gICAgICAxMDIsXG4gICAgICAyMDksXG4gICAgICAxMyxcbiAgICAgIDYzLFxuICAgICAgNTEsXG4gICAgICA2NyxcbiAgICAgIDE3MixcbiAgICAgIDg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgsXG4gICAgICAzNCxcbiAgICAgIDI0OSxcbiAgICAgIDIyNyxcbiAgICAgIDE0LFxuICAgICAgOTksXG4gICAgICAxNTYsXG4gICAgICAxNTksXG4gICAgICAxMTQsXG4gICAgICA1NSxcbiAgICAgIDE5NixcbiAgICAgIDEyNyxcbiAgICAgIDE4LFxuICAgICAgMjM5LFxuICAgICAgMTA3LFxuICAgICAgMjgsXG4gICAgICAyMjAsXG4gICAgICAyNDQsXG4gICAgICAxNjAsXG4gICAgICAxNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMlg1WDdMVFFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTY3ODI5MjE1MDo5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc1Mjk5MjgzNTA5MzI1Ojk0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfkIfwn4W18J+FtPCfhbjwn4W78J+FsPCfhb1cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQbmJ2bG9RajZDVnRRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIklyTlBINmd2ZmlacGxEYVVYazVMZkNuZm9XYnA1Unp3OEVoWCtkS1ozVkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRTdQMGZ4emhHRzFqZVlBeFpzVHUvbmZvMVpKOXhOOVpKSkpXbUZxenRXeWl0dUNXS1l6VWhxNkluUG1FRXNZZUh0bitvaGhmdUFwMnBrQ1pZbWtMQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR3c2N3d2NkxMMWk1SmZORWNuWHBSdzRZamJOYTBETmQyc3RMam93dEF3eGk0dkw1Y2tmZlNPY2xVY0tFcXo4ZjZCMktXbEtDUDMvQjdPRVVocStBRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Njc4MjkyMTUwOjk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjEwOTk3MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVMNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUw2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiSmRiQndReTZQakZZVlp1WCt5amlTcUlvZHlMYVcrUHc0QS9lQlhpL2xhTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODk3NzEyNTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjEwOTk3NDE2MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "feilan",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
