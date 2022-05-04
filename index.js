import chalk from 'chalk';
import randomColor from 'randomcolor';

const color = randomColor();
if (process.argv.length < 3) {
  console.log(
    chalk.hex(color)(
      `    ###############################
    ###############################
    ###############################
    #####                     #####
    #####       ${color}       #####
    #####                     #####
    ###############################
    ###############################
    ###############################`,
    ),
  );
} else if (process.argv[2] === 'ask') {
  console.log(
    `What color would you like?
What luminosity?`,
  );
} else if (process.argv.length < 4) {
  console.log(
    chalk.hex(randomColor({ hue: process.argv[2] }))(
      `    ###############################
    ###############################
    ###############################
    #####                     #####
    #####       ${randomColor({ hue: process.argv[2] })}       #####
    #####                     #####
    ###############################
    ###############################
    ###############################`,
    ),
  );
} else {
  console.log(
    chalk.hex(
      randomColor({ luminosity: process.argv[3], hue: process.argv[2] }),
    )(
      `    ###############################
    ###############################
    ###############################
    #####                     #####
    #####       ${randomColor({
      luminosity: process.argv[3],
      hue: process.argv[2],
    })}       #####
    #####                     #####
    ###############################
    ###############################
    ###############################`,
    ),
  );
}
