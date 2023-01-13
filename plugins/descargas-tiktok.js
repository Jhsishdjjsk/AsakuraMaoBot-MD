
import fetch from 'node-fetch'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}يجب عليك إدخال رابط تيكتوك لتنزيل الفيديو\nمثال\n*${usedPrefix + command} https://vm.tiktok.com/ZMLEPnruc/?k=1*\n\n𝙔𝙊𝙐 𝙈𝙐𝙎𝙏 𝙀𝙉𝙏𝙀𝙍 𝘼 𝙏𝙄𝙆𝙏𝙊𝙆 𝙇𝙄𝙉𝙆 𝙏𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙏𝙃𝙀 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} https://vm.tiktok.com/ZMLEPnruc/?k=1*`, fkontak,  m)
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}رابط تيكتوك غير صحيح ، تأكد من أنه صالح`, fkontak,  m)  
try {
const { author: { nickname }, video, description } = await tiktokdl(args[0])
.catch(async _ => await tiktokdlv2(args[0]))
.catch(async _ => await tiktokdlv3(args[0]))
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}خطأ أثناء محاولة تنزيل تيكتوك ،‏ يرجى المحاولة مرة أخرى`, fkontak,  m)
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}قريبا سيكون لديك فيديو ‏تيكتوك 😸`, fkontak,  m)    
conn.sendFile(m.chat, url, 'tiktok.mp4', `
⛱️الاسم\n*${nickname}*\n${description ? `\n⛱️ الوصف : الوصف\n*${description}*` : ''}\n${wm}`.trim(), m)
} catch {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}خطأ أثناء محاولة تنزيل تيكتوك ،‏ يرجى المحاولة مرة أخرى`, fkontak,  m)  
}}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tt|tiktok)(dl|تيكتوك)?$/i
handler.limit = 2
export default handler
