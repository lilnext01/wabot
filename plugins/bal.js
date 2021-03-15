let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { name, limit, exp, uang, bank, lastclaim, registered, regTime, age } = global.DATABASE.data.users[who]
    let username = conn.getName(who)
    let str = `
*Name* : ${registered ? `${name}` : `${username}`}
*Exp* : ${exp}Xp
*Coin* : ${uang} 🪙 Coins
*Bank* : ${bank}
*Limit* : ${limit}
`.trim()
    let mentionedJid = [who]
    m.reply(`${str}`)
  }
handler.help = ['bal']
handler.tags = ['main']
handler.command = /^bal$/i
module.exports = handler

