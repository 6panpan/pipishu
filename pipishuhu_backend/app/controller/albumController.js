"use strict";

const Controller = require("egg").Controller;

class AlbumController extends Controller {
    //CR// 获取全部专辑
    async getAllAlbum() {
        const { ctx } = this;
        ctx.body = await this.ctx.service.albumService.getAllAlbum();
    }
    //CR// 根据类别 获取专辑
    async getAlbum() {
        const { ctx } = this;
        let kind = this.ctx.request.query.kind;
        ctx.body = await this.ctx.service.albumService.getAlbum(kind);
    }
    //HJX&ZY// 根据类别 获取播放量前十的 专辑和上传者
    async getRankAlbum() {
        const { ctx } = this;
        let kind = this.ctx.request.query.kind;
        ctx.body = await this.ctx.service.albumService.getRankAlbum(kind);
    }
    //HJX// 根据类别 获取播放量前百的 专辑和上传者
    async getAllAlbumByKind() {
        const { ctx } = this;
        let kind = this.ctx.request.query.kind;
        ctx.body = await this.ctx.service.albumService.getAllAlbumByKind(kind);
    }
    //ZY// 获取某用户上传专辑
    async getUserAlbum() {
        const { ctx } = this;
        let u_id = this.ctx.request.query.u_id;
        ctx.body = await this.ctx.service.albumService.getUserAlbum(u_id);
    }
    //ZY// 根据专辑id获取专辑
    async getoneAlbum() {
        const { ctx } = this;
        let album_id = this.ctx.request.query.album_id;
        ctx.body = await this.ctx.service.albumService.getoneAlbum(album_id);
    }
}

module.exports = AlbumController;
