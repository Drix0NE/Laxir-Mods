import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)


if (command == 'whmods1') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Saya Owner WHMODS;Bot;;Md\nFN:Saya Owner LazirBot WhatsApp, Md\nNICKNAME:👑 Owner LazirBot\nORG:WH\nTITLE:MODS\nitem1.TEL;waid=${nomerown}\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://www.youtube.com/channel/UCMx4e8anOq_Olt2nMSv0Cow\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:whmods41@gmail.com\nitem3.X-ABLabel:💌 Mail Owner LazirBOT\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 KEPO LU YAH\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
let caption = `👋 Hai *${name} @${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.sendButton(m.chat, caption, author, null, [['🎀 Sapa Owner', 'Huuu']], m, { quoted: tag_own, mentions: conn.parseMention(caption) })
}
if (command == 'whmods2') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=${nomerown}\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
}
if (command == 'whmods3') {
    await conn.sendMessage(m.chat, {
        contacts: [{
        "displayName": "${name}",
          "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${name}\nitem1.TEL;waid=${nomorbot}\nitem1.X-ABLabel:📍 Creator\nitem3.URL:https://github.com/LaxirMods\nitem3.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:Nothing\nitem3.X-ABLabel:💌 Mail Owner LaxirMods\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🤖 Hanya bot biasa yang kada suka eror\nEND:VCARD"
      }, {
        "displayName": "${name}",
          "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${name}\nitem1.TEL;waid=${nomorown}\nitem1.X-ABLabel:📍 Creator\nitem3.URL:https://youtube.com/channel/UC4KkbFZ15ILdDhLJeytnFDw\nitem3.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:laxirmods@gmail.com\nitem3.X-ABLabel:💌 Mail Owner LaxirMods\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:📝Jika tidak ada bahu untuk bersandar masih ada lantai untuk bersujuc`"
        }]
      }, MessageType.contactsArray, { quoted: m })
      const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
     let caption = `👋 Hai *${name} @${who.split("@")[0]}*, Itu nomor ownnerku, jangan dispam ya kak😊`}
    }
handler.help = ['whmods1', 'whmods2', 'whmods3']
handler.tags = ['info']

handler.command = /^(whmods1|whmods2|whmods3)$/i

export default handler
