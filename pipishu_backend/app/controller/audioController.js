"use strict";

const Controller = require("egg").Controller; 

class AudioController extends Controller {
    //CR// 获取所有音频
    async getAudio() {
        const { ctx } = this;
        ctx.body = await this.ctx.service.audioService.getAudio();
    }

    //ZY//根据专辑id取出专辑里的audio
    async getSomeAudio() {
        const { ctx } = this;
        let a_id = this.ctx.request.query.a_id;
        ctx.body = await this.ctx.service.audioService.getSomeAudio(a_id)
    }

    //ZY//根据专辑id取出分页专辑里的audio
    async getPageAudio() {
        const { ctx } = this;
        let a_id = this.ctx.request.query.a_id;
        let pagenum = this.ctx.request.query.pagenum;
        ctx.body = await this.ctx.service.audioService.getPageAudio(a_id,pagenum)
    }
}
module.exports = AudioController;
