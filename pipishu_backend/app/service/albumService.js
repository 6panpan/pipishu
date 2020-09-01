const Service = require('egg').Service;

class AlbumService extends Service {
	//CR//获取全部专辑
	async getAllAlbum() {
		let sql = "select * from album";
		let r = await this.ctx.app.mysql.query(sql);
		return r;
	}
	//CR//根据类别获取专辑
	async getAlbum(kind) {
		let sql = "select * from album where kind=?";
		let r = await this.ctx.app.mysql.query(sql, [kind]);
		return r;
	}
	//HJX&ZY//根据类别 获取播放量前十的 专辑和上传者
	async getRankAlbum(kind) {
		let sql = "select * from album,user where u_id=user_id and kind=? order by album_amount desc limit 0,10;"
		let list = await this.ctx.app.mysql.query(sql, [kind]);
		return list;
	}
	//HJX//根据类别 获取播放量前百的 专辑和上传者
	async getAllAlbumByKind(kind) {
		let sql = "select * from album,user where u_id=user_id and kind=? order by album_amount desc limit 0,100;"
		let list = await this.ctx.app.mysql.query(sql, [kind]);
		return list;
	}

	//ZY//获取某用户上传专辑
	async getUserAlbum(u_id) {
		let sql = "select * from album where u_id=?";
		let r = await this.ctx.app.mysql.query(sql, [u_id]);
		return r;
	}
	//ZY// 根据专辑id获取专辑
	async getoneAlbum(album_id) {
		let sql = "select * from album where album_id=?";
		let list = await this.ctx.app.mysql.query(sql, [album_id]);
		return list;
	}

	async getAlbumByKind(kind) {
		let sql = "select * from album,user where u_id=user_id and kind=? order by album_amount desc limit 0,10;"
		let list = await this.ctx.app.mysql.query(sql, [kind]);
		return list;
	}
	// 按播放量取出前10位
	async getRankAlbumTen() {
		let sql = "select * from album  order by album_amount desc limit 0,10;"
		let list = await this.ctx.app.mysql.query(sql, []);
		return list;
	}
}

module.exports = AlbumService;