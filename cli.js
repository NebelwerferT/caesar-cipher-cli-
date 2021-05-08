const program = require('commander');

program
    .configureOutput({
        writeErr: (str) => {
            process.stderr.write(`${str}`);
            process.exit(1);
        },
    })
    .option('-s, --shift <number>', 'a shift')
    .option('-i, --input <path>', 'an input file')
    .option('-o, --output <path>', 'an output file')
    .option('-a, --action <type>', 'an action encode/decode')
    .parse(process.argv);