/* CREDITOS A https://github.com/FG98F */
import axios from 'axios'
import hx from 'hxz-api' 

let handler = async (m, { conn, args, usedPrefix, command, text}) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}\nأدخل اسم مستخدم INSTAGRAM لتنزيل القصص \nمثال\n*${usedPrefix + command} a_e_b_2003*`

hx.igstory(text).then(async (result) => {
for (let i of result.medias) {
if (i.url.includes("mp4")) {            
conn.sendFile(m.chat, i.url, 'igstory.mp4', wm, m)
} else {     
conn.sendFile(m.chat, i.url, '', '', m)
}}});
  
let info = `💖 *Infórmate sobre las Novedades y recuerda tener la última versión.*\n\n💝 *Find out about what's new and remember to have the latest version.*
  `.trim()  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'انستغرام', null, null, [
[' قائمة التحميل🌀', '#descargasmenu'],
[' | القائمة الكاملة ✨', '.allmenu'],
[' | العودة إلى القائمة ☘️', '/menu']
], m,)  
}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory', 'ighistoria', 'ighistorias' ]
handler.limit = 3
handler.exp = 87
export default handler
