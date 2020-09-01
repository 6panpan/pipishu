"use strict";

let Service = require("egg").Service;

class FollowService extends Service {
    //关注
    async regist(参数) {
        let sql = "数据库sql命令";
        let r = await this.ctx.app.mysql.query(sql, [参数]);
        return r;
    }
    //取消关注
    async regist(参数) {
        let sql = "数据库sql命令";
        let r = await this.ctx.app.mysql.query(sql, [参数]);
        return r;
    }
    //ZY// 获取粉丝数
    async getfollow(ustar_id) {
        let sql = "select count(ufans_id) from follow where ustar_id=?";
        let list = await this.ctx.app.mysql.query(sql, [ustar_id]);
        return list;
    }
}
module.exports = FollowService;
