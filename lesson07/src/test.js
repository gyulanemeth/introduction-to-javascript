const fs = require("fs");

const testModule = require("./testModule");

const data1 = "yooo";
const data2 = "asédlkjrgékjneriuerhvieufhvreiguh34bfiuerbvdfiuvhwefiubdfvkjbnasdlkfjhadflkjebrdkjafhbvalisdhjkbaséfhjerpiuhasdvpiuhaerf";

for(let idx = 0; idx < 10; idx += 1) {
    fs.writeFile(`./temp/message${idx}`, idx % 2 === 0 ? data1 : data2, (err) => {
        if (err) {
            throw err;
        }
    
        console.log(`file ${idx} written.`);
    });
    console.log("yoopp" + idx);
}

testModule.testFunction();

testModule.readme();
