"use strict";

let Service = require("egg").Service;

class AudioService extends Service {
    //CR// 获取所有音频
    async getAudio() {
        let sql = "select * from audio";
        let list = await this.ctx.app.mysql.query(sql);
        return list;
    }
}

module.exports = AudioService;
