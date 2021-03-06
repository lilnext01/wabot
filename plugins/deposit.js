let handler = async (m, { conn, text, command, args }) => {
  let user = global.DATABASE._data.users[m.sender]
  let count = command.replace(/^dep/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.DATABASE._data.users[m.sender].uang) : parseInt(count) : args[0] ? parseInt(args[0]) : 0
  if (user.isAtm === false) throw 'Anda Belum Memiliki Atm\nKetik *.buyatm* Untuk Membeli Atm' 
  if (global.DATABASE._data.users[m.sender].uang >= count) {
    global.DATABASE._data.users[m.sender].uang -= count
    global.DATABASE._data.users[m.sender].bank += count
    conn.reply(m.chat, `Menaruh Coins Ke Bank Sebesar ${count}`, m)
  } else conn.reply(m.chat, `Coins Anda Kurang Dari ${count}`, m)
}
handler.help = ['buy']
handler.tags = ['economy']
handler.command = /^dep([0-9]+)|dep|depall$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
