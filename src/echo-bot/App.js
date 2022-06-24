"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const echoBotToken = "5436938329:AAGq9N9ZbZHeznjLbogWwjh5er4VwwNmSnY";
const echoBot = new telegraf_1.Telegraf(echoBotToken);
echoBot.start((context) => {
    context.reply("Hi🖐" + context.from.first_name);
});
echoBot.help((context) => {
    context.reply("help");
});
echoBot.settings((context) => {
    context.reply("settings");
});
echoBot.command("test", (context) => {
    context.reply("hello");
});
echoBot.hears("ابراهیمی", (context) => {
    context.reply("مادر خراب");
    context.reply("پدر کونی");
});
echoBot.hears("علیرضا", (context) => {
    context.reply("بیا اینو درت بذا");
});
echoBot.hears("بیکاری؟", (context) => {
    context.reply("خیار بدم بکاری؟");
});
echoBot.on("text", (context) => {
    console.log(context.from.first_name);
    context.reply(context.from.first_name + "کص گفت ");
    // if (context.from.first_name == "Muhammad") {
    //     context.reply("کیرت عالیه محمد آقا!");
    // }
});
echoBot.on("sticker", (context) => {
    context.reply("استیکر نفرست کونی!");
});
echoBot.launch();
console.log('echo bot running....');
