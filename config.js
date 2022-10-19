/**
   * Create By Iman
   * Contact Me on wa.me/6287873670287
   * Follow https://github.com/imanprokeren
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
	lolhuman: 'https://api.lolhuman.xyz'
}

// Ubah yg zensapis aja!
global.APIKeys = {
	'https://zenzapis.xyz': 'apikey',
	'https://api.lolhuman.xyz': 'apikey',
}

// Other
global.owner = ['6288970546064']
global.ownernomer = "6288970546064"
global.premium = ['6288970546064']
global.packname = 'Iman-Bot'
global.author = 'Iman'
global.sessionName = 'nazedev'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./lib/naze.png')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
