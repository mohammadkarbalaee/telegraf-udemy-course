import {Telegraf} from "telegraf";
const echoBotToken = "5436938329:AAGq9N9ZbZHeznjLbogWwjh5er4VwwNmSnY";
const bot = new Telegraf(echoBotToken);

const helpMessage = `
Say something to me:
/start - start the bot
/help - command reference
/echo <msg> - return back the message
`;
const logChatID = -701922241;

bot.use((ctx,next) => {
    bot.telegram.sendMessage(logChatID,
        "@" + ctx.from.username + " said: " + ctx.update.message.text);
    next().then(r => {console.log("bot got used.")});
});

bot.start((ctx) => {
    ctx.reply("Hi I'm echo bot🖐");
    ctx.reply(helpMessage);
});

bot.help((ctx) => {
    ctx.reply(helpMessage);
})

bot.command("echo",(ctx) => {
    let inputArray = ctx.message.text.split(" ");
    if (inputArray.length === 1) {
        ctx.reply("Type something in after /echo to get it back");
    } else {
        inputArray.shift();
        ctx.reply(inputArray.join(" "));
    }
});

bot.launch().then(r => {console.log('echo bot running....')});
