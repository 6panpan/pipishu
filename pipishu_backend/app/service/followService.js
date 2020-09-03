"use strict";

let Service = require("egg").Service;

class FollowService extends Service {
    //添加关注
    async addfollow(ustar_id,ufans_id) { 
        let sql = "insert into follow(ustar_id,ufans_id) values(?,?);";
        let r = await this.ctx.app.mysql.query(sql, [ustar_id,ufans_id]);
        return r.affectedRows;
    }
    //取消关注
    async delfollow(ustar_id, ufans_id) {
        let sql = "delete from follow where ustar_id=? and ufans_id=?";
        let r = await this.ctx.app.mysql.query(sql, [ustar_id, ufans_id]);
        return r.affectedRows;
    } 
    //ZY// 获取粉丝数
    async getfollow(ustar_id) {
        let sql = "select count(ufans_id) from follow where ustar_id=?";
        let list = await this.ctx.app.mysql.query(sql, [ustar_id]);
        return list;
    }

    //ZY// 根据粉丝id获取关注者
    async getStar(ufans_id) {
        let sql = "select * from follow where ufans_id=?";
        let list = await this.ctx.app.mysql.query(sql, [ufans_id]);
        return list;
    }
}
module.exports = FollowService;
