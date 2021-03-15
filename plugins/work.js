let handler = async(m, { conn, args, usedPrefix }) => {
let kerjaTime = global.DATABASE._data.users[m.sender].kerja
let cdm = `${MeNit(new Date - kerjaTime)}`
let cds = `${DeTik(new Date - kerjaTime)}`
let cd1 = Math.ceil(01 - cdm)
let cd2 = Math.ceil(60 - cds)
let tempat = ["Serangga", "Monster", "Tanaman", "Hewan Liar", "Hantu", "Barang Langak"]
let job = tempat[Math.floor(Math.random() * tempat.length)]
    if (new Date - global.DATABASE._data.users[m.sender].kerja > 120000) {
    global.DATABASE._data.users[m.sender].uang += 5000
    m.reply(`Anda Bekerja Sebagai *Hunter ${job}* Dan Mendapatkan *5000 Coin*`)
    global.DATABASE._data.users[m.sender].kerja = new Date * 1
  } else m.reply(`Tunggu *${cd1}* Menit *${cd2}* Detik Lagi Untuk Bekerja Kembali`)
}
handler.help = ['work']
handler.tags = ['economy']
handler.command = /^(work|kerja)$/i
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

function MeNit(ms) {
  let m = isNaN(ms) ? '02' : Math.floor(ms / 60000) % 60
  return [m].map(v => v.toString().padStart(2, 0) ).join(':')
}

function DeTik(ms) {
  let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
  return [s].map(v => v.toString().padStart(2, 0) ).join(':')
}
