const stickers = [
"https://raw.githubusercontent.com/akida-15/akida/master/sticker/1.webp",
"https://raw.githubusercontent.com/akida-15/akida/master/sticker/2.webp",
"https://raw.githubusercontent.com/akida-15/akida/master/sticker/3.webp",
"https://raw.githubusercontent.com/akida-15/akida/master/sticker/4.webp",
"https://raw.githubusercontent.com/akida-15/akida/master/sticker/5.webp",
"https://raw.githubusercontent.com/akida-15/akida/master/sticker/6.webp"
];

cmd({
pattern: 'نرد',
}, async (Void, citel, text) => {
const randomIndex = Math.floor(Math.random() * stickers.length);
const randomSticker = stickers[randomIndex];

await Void.sendMessage(citel.chat, { sticker: { url: randomSticker } });
});
