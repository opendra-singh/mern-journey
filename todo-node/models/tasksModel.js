import fs from "fs/promises";

export async function readData() {
    let sendData = [];
    let data = await fs.readFile('data.json', 'UTF-8');
    if( data != '' && data != undefined ) {
        return JSON.parse(data);
    }
}

export async function writeData(content){
    await fs.writeFile('data.json', JSON.stringify(content));
}