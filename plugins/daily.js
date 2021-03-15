let handler = async (m, { conn }) => {
let last = global.DATABASE._data.users[m.sender].lastclaim
let cdh = `${JaM(new Date - last)}`
let cdm = `${MeNit(new Date - last)}`
let cds = `${DeTik(new Date - last)}`
let c1 = Math.ceil(23 - cdh)
let c2 = Math.ceil(60 - cdm)
let c3 = Math.ceil(60 - cds)
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    global.DATABASE._data.users[m.sender].exp += 500
    global.DATABASE._data.users[m.sender].uang += 5000
    m.reply(`*${conn.getName(m.sender)} Daily Reward*\n\n+5000 Coins\n+500 Xp\n`)
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else m.reply(`Tunggu *${c1}* Jam *${c2}* Menit *${c3}* Detik Lagi Untuk Mengambil Reward Harian Anda`)
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i
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

function JaM(ms) {
  let h = isNaN(ms) ? '00' : Math.floor(ms / 3600000)
  return [h].map(v => v.toString().padStart(2, 0) ).join(':')
}

function MeNit(ms) {
  let m = isNaN(ms) ? '00' : Math.floor(ms / 60000) % 60
  return [m].map(v => v.toString().padStart(2, 0) ).join(':')
}

function DeTik(ms) {
  let s = isNaN(ms) ? '00' : Math.floor(ms / 1000) % 60
  return [s].map(v => v.toString().padStart(2, 0) ).join(':')
}
