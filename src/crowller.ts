//ts不可以直接引用js 所以ts提供了一个中间文件（.d.ts / 翻译文件）
import superagent from "superagent";

class Crowller {
  private secret = "x3b174jsx";
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;
  private rawHtml = "";

  async getRawHtml() {
    const result = await superagent.get(this.url);
    this.rawHtml = result.text;
    console.log(this.rawHtml);
  }

  constructor() {
    this.getRawHtml();
  }
}

const crowller = new Crowller();
