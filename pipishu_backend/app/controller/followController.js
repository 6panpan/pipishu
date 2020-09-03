"use strict";

const Controller = require("egg").Controller;

class FollowController extends Controller {
    //添加关注
    async addfollow() {
        let ustar_id = this.ctx.request.body.ustar_id;
        let ufans_id = this.ctx.request.body.ufans_id;
        let r = await this.ctx.service.followService.addfollow(ustar_id, ufans_id);
        this.ctx.response.body = r;
    }

    //取消关注
    async delfollow() {
        let ustar_id = this.ctx.request.body.ustar_id;
        let ufans_id = this.ctx.request.body.ufans_id;
        let r = await this.ctx.service.followService.delfollow(ustar_id, ufans_id);
        this.ctx.response.body = r;
    }

    //ZY// 获取粉丝数
    async getfollow() {
        const { ctx } = this;
        let ustar_id = this.ctx.request.query.ustar_id;
        ctx.body = await this.ctx.service.followService.getfollow(ustar_id);
    }
}

module.exports = FollowController;
