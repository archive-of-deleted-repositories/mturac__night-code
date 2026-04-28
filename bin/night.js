#!/usr/bin/env node
const chalk = require('chalk');

const hour = new Date().getHours();
const isLateNight = hour >= 23 || hour <= 5;

console.log('\n' + chalk.blue('🌙 NIGHT CODE'));

if (isLateNight) {
  console.log(chalk.yellow('  ⚠️  It\'s late night coding time!'));
  console.log(chalk.gray('  ☕ Coffee level: CRITICAL'));
  console.log(chalk.gray('  😴 Sleep: OVERRATED'));
  console.log(chalk.cyan('  🎵 Lo-fi beats activated'));
  console.log(chalk.magenta('  🚀 Productivity: MAXIMUM\n'));
} else {
  console.log(chalk.gray('  🌅 It\'s not night time yet.'));
  console.log(chalk.gray('  Come back after 23:00 for the real vibe.\n'));
}
