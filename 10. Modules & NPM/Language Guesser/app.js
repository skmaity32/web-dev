import {franc} from 'franc';
import langs from 'langs';
import colors from 'colors';

const inputString = process.argv[2];
const code = franc(inputString);
if (code === 'und')
    console.log(colors.red('Could not match. Try with a larger sample'));
else
    console.log(colors.green(`Our best guess is: ${langs.where("3", code).name}`));