let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*────────「 DONATE 」 ────────*

Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • Emoney 〕
├ PULSA : 0857 4234 4873
├ DANA : 0857 4234 4873
└────
`.trim(), 'Donasi bg Biar Bot Nya on 24Jam', 'SEWA', '.sewa')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
