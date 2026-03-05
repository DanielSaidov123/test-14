import fs from "fs/promises";

export async function readFromFile(fileName) {
  try {
    const data = await fs.readFile(fileName, "utf8");
    return JSON.parse(data); 
  } catch (err) {
    console.error( "error in file", err);
    return null;
  }
}


 