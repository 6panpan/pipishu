"use strict";

const Controller = require("egg").Controller;

class AudioController extends Controller {
    //CR// 获取所有音频
    async getAudio() {
        const { ctx } = this;
        ctx.body = await this.ctx.service.audioService.getAudio();
    }
}
module.exports = AudioController;
