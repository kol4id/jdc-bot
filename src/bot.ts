import TelegramBot from 'node-telegram-bot-api';
import * as process from 'process';

const token = process.env.BOT_TOKEN!;
export const bot = new TelegramBot(token, {polling: true});