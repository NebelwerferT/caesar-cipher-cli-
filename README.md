First you need to download the required packages. To do this, while in the main directory, enter the command "npm install".

The application is launched by entering the "node cli.js" command into the command line.

Use the "--help" option to display the available options:
node cli.js --help

There are four options to control the behavior of a console application, two of which are required - "-a / - action" and "-s / - shift". Without these two options, the application will terminate with an error.

The two facultative options "-i / - input" and "-o / - output" are used to specify I / O files. If one or both files are not specified, then the corresponding I / O operation, or both, will be done through the console.

Options require arguments for the application to work correctly. All arguments are passed separated by a space after the option is specified. Below is a list of options and their valid arguments.

The "-a / - action" option takes one of two arguments: "enode" or "decode". The "encode" argument means the application should encrypt. The decode argument means the application should decode.

The "-s / - shift" option accepts any integer as an argument. This number serves as the encryption step in the Caesar cipher.

Example: node cli.js -a encode -s -5

The "-i / - input" and "-o / - output" options take as an argument the path to the corresponding input or output file.

Examples:
node cli.js -a encode -s 29 -i input.txt -o ../output.txt
node cli.js -a encode -s 29 -i D: /test/in.txt
node cli.js -a encode -s 29 -o ./io/out.txt