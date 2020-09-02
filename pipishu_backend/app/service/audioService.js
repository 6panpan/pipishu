"use strict";

let Service = require("egg").Service;

class AudioService extends Service {
    //CR// 获取所有音频
    async getAudio() {
        let sql = "select * from audio";
        let list = await this.ctx.app.mysql.query(sql);
        return list;
    }

    //ZY 根据专辑id驱逐对应audio
	async getSomeAudio(a_id){
		let sql="select * from audio where a_id=?"
		let list = await this.ctx.app.mysql.query(sql,[a_id]);
		return list;
      }
      
    //ZY//根据专辑id取出分页专辑里的audio
    async getPageAudio(a_id,pagenum){
        let sql=`select * from audio where a_id=? limit ${(pagenum-1)*10},10 `
        let list = await this.ctx.app.mysql.query(sql,[a_id]);
        console.log(list);
        return list;
    }
}

module.exports = AudioService;
