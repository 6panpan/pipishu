module.exports = app => {
    const { router, controller } = app;
    //用户相关路由
    //// 注册
    router.post("/regist", controller.userController.regist);
    //// 登录
    router.post("/login", controller.userController.login);
    // 获取图片
    router.post('/upload', controller.uploadController.upload);
    //// 注销
    // router.post("/logout", controller.userController.logout);
    //CR// 获取用户信息
    router.get("/getUserInf", controller.userController.getUserInf);
    //ZY// 根据用户id获取用户信息
    router.get("/getAnuserInf", controller.userController.getAnuserInf);



    //专辑相关路由
    //CR// 获取全部专辑
    router.get("/getAllAlbum", controller.albumController.getAllAlbum);
    //CR// 根据类别 获取专辑
    router.get("/getAlbum", controller.albumController.getAlbum);
    //HJX&ZY// 根据类别 获取播放量前十的 专辑和上传者
    router.get("/getRankAlbum", controller.albumController.getRankAlbum);
    //HJX// 根据类别 获取播放量前百的 专辑和上传者
    router.get("/getAllAlbumByKind", controller.albumController.getAllAlbumByKind);
    //ZY// 获取某用户上传专辑
    router.get("/getUserAlbum", controller.albumController.getUserAlbum);
    //ZY// 根据专辑id获取专辑
    router.get("/getoneAlbum", controller.albumController.getoneAlbum);
    // 取出播放量最多的前10位专辑
    router.get('/getRankAlbumTen', controller.albumController.getRankAlbumTen);
    


    //音频相关路由
    //CR// 获取所有音频
    router.get("/getAudio", controller.audioController.getAudio);

    //ZY//根据专辑id取出对应audio
    router.get('/getSomeAudio', controller.audioController.getSomeAudio);

    //ZY//根据专辑id取出分页专辑里的audio
    router.get('/getPageAudio', controller.audioController.getPageAudio);


    //收藏相关路由
    //// 添加
    // router.post("/addAlbum", controller.collectController.addAlbum);
    //// 删除
    // router.post("/delAlbum", controller.collectController.delAlbum);

    //关注相关路由
    //// 关注
    router.post("/addfollow", controller.followController.addfollow);
    //// 取消关注
    router.post("/delfollow", controller.followController.delfollow);
    //ZY// 获取粉丝数
    router.get("/getfollow", controller.followController.getfollow);


    router.get('/getAlbumByKind', controller.albumController.getAlbumByKind);
}