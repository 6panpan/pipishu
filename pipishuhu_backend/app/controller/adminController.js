"use strict";

const Controller = require("egg").Controller;
const fs = require("fs");
const path = require("path");

class AdminController extends Controller {
    //管理员操作admin
    ////增
    async adminAdd() {
        let r = await this.ctx.service.audioService.getAlbum();
        this.ctx.response.body = r;
    }

    ////删
    ////改
    ////查
    // //所有的订单
    // async showAllList() {
    //     let r = await this.ctx.service.listService.getAllList();
    //     this.ctx.response.body = r;
    // }
    // // 增订单
    async addList() {
        //获取post请求参数
        let name = this.ctx.request.body.name;
        let lid = this.ctx.request.body.lid;
        let price = this.ctx.request.body.price;
        let r = await this.ctx.service.listService.insertList(name, lid, price);
        this.ctx.response.body = r;
    }
    // async uploadFile() {
    //     let newUrl = await this.ctx.service.listService.uploadGoods();
    //     this.ctx.response.body = newUrl;
    // }
    // // 删订单
    // async delById() {
    //     let id = this.ctx.request.query.id;
    //     let r = await this.ctx.service.listService.deleteById(id);
    //     this.ctx.response.body = r;
    // }
    // // 查订单
    // async showListByGame() {
    //     let gname = this.ctx.request.query.gname;
    //     let r = await this.ctx.service.listService.getListByGame(gname);
    //     this.ctx.response.body = r;
    // }
}

module.exports = AdminController;
