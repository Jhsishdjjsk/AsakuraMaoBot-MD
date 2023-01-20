import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw `${ag} أدخل الرقم التسلسلي ، إذا كنت لا تعرف ما هو ، فاستخدم الأمر *#myns*`
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw `${fg}  تحقق من صحته ، استخدم الأمر *#myns* للحصول على الرقم التسلسلي الخاص بك`
user.registered = false
m.reply(`${eg}  لم تعد مسجلا `)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
