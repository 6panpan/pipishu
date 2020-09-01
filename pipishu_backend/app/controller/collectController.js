"use strict";

const Controller = require("egg").Controller;

class CollectController extends Controller {
    //添加
    async addAlbum() {
        let r = await this.ctx.service.collectService.addAlbum(参数);
        this.ctx.response.body = r;
    }
    //删除
    async delAlbum() {
        let r = await this.ctx.service.collectService.delAlbum(参数);
        this.ctx.response.body = r;
    }
}

module.exports = CollectController;
