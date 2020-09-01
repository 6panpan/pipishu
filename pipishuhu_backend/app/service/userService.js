"use strict";

let Service = require("egg").Service;

class UserService extends Service {
    //注册
    async regist(参数) {
        let sql = "数据库sql命令";
        let r = await this.ctx.app.mysql.query(sql, [参数]);
        return r;
    }
    //登录
    async login(参数) {
        let sql = "数据库sql命令";
        let r = await this.ctx.app.mysql.query(sql, [参数]);
        return r;
    }
    //注销
    async logout(参数) {
        let sql = "数据库sql命令";
        let r = await this.ctx.app.mysql.query(sql, [参数]);
        return r;
    }
    //CR// 获取用户信息
    async getUserInf() {
        let sql = "select * from user";
        let r = await this.ctx.app.mysql.query(sql);
        return r;
    }
    //ZY// 根据用户id获取用户信息
    async getUserAlbum(u_id) {
        let sql = "select * from album where u_id=?";
        let list = await this.ctx.app.mysql.query(sql, [u_id]);
        return list;
    }
}
module.exports = UserService;