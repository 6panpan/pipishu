"use strict";

let Service = require("egg").Service;

class CollectService extends Service {
    //添加
    async regist(参数) {
        let sql = "数据库sql命令";
        let r = await this.ctx.app.mysql.query(sql, [参数]);
        return r;
    }
    //删除
    async regist(参数) {
        let sql = "数据库sql命令";
        let r = await this.ctx.app.mysql.query(sql, [参数]);
        return r;
    }
}
module.exports = CollectService;
