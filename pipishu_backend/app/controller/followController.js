"use strict";

const Controller = require("egg").Controller;

class FollowController extends Controller {
    //关注
    async follow() {
        let r = await this.ctx.service.followService.follow(参数);
        this.ctx.response.body = r;
    }
    //取消关注
    async delAlbum() {
        let r = await this.ctx.service.followService.delAlbum(参数);
        this.ctx.response.body = r;
    }
    //ZY// 获取粉丝
    async getfollow() {
        const { ctx } = this;
        let ustar_id = this.ctx.request.query.ustar_id;
        ctx.body = await this.ctx.service.followService.getfollow(ustar_id);
    }

    //ZY// 根据粉丝id获取关注者
    async getStar() {
        const { ctx } = this;
        let ufans_id = this.ctx.request.query.ufans_id;
        ctx.body = await this.ctx.service.followService.getStar(ufans_id);
    }
}

module.exports = FollowController;
