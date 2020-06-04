function solve(input) {
    let text = input;
    let start = text.lastIndexOf('\\') + 1;
    let end = text.lastIndexOf('.');
    let fileName = text.substring(start, end);
    let fileExtention = text.substring(end + 1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtention}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx');