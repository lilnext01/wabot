const { createHash } = require('crypto')
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (50000 > user.uang) throw 'Coins Anda Tidak Cukup Untuk Membuat Atm'
  if (user.age < 17) throw 'Umur Anda Belum cukup Untuk Membuat Atm'
  if (user.isAtm === true) throw `Anda Sudah Memiliki Atm`
  user.uang -= 50000
  user.bank += 10000
  user.isAtm = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
╭──────「 *_KARTU ATM_* 」
┴
│× SN :
│× >> *${sn}*
│× NAME : ${user.name}
│× BONUS : 10000
┬
╰──────「 *_SUCSESS_* 」
`.trim())
}
handler.help = ['daftar']
handler.tags = ['economy']
handler.command = /^(buyatm|buatatm)$/i
handler.register = true 

module.exports = handler


