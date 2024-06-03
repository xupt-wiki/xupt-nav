let dialog = {
    ele: document.getElementById("dialog"),
    title: document.getElementById("dialogTitle"),
    content: document.getElementById("dialogContent"),
}

dialog.msgs = {
    联系方式: { content: "QQ: 2399052066 (同时支持QQ邮箱)" },
    我在校园: { content: "和微信小程序版功能相同，支持签到但定位精度较低。", icon: "fa-solid fa-location-dot fa-space", code: "https://gw.wozaixiaoyuan.com/h5/mobile/basicinfo/index" },
    第二课堂: { icon: "fa-solid fa-book-bookmark fa-space", code: "https://win.9xueqi.com/" },
    青年大学习: { content: "需要微信登录，所以得在微信内打开或者使用微信扫一扫。", icon: "fa-solid fa-medal fa-space", code: "https://h5.sxgqt.org.cn/#/statisticsNews" },
    逸夫楼地图: { content: "学长做的，但是要旋转屏幕方向才能使用。", code: "https://8.u.h5mc.com/c/7oor/ygju/index.html" },
    西邮财务处: { icon: "fa-solid fa-money-bills", content: "支付宝扫码，查询/领取来自西邮财务处的奖学金/退费。", code: "http://wx.weiweixiao.net/index.php/Wap/ModFfgl/index/token/eoQ1mDMc7BGAAAAWPgst-A.html" },
    支付宝红包: { icon: "fa-solid fa-sack-dollar", content: "支付宝扫码领红包，消费时可用。你也可以在“赚钱红包”小程序内生成你的红包码。", code: "https://qr.alipay.com/11w14884hevnzbvvrb9ao05" },
    校园墙: { icon: "fa-brands fa-weixin", content: "<em>注：方头括号【】中的内容为头像样式，排序不分先后</em><br>【懒羊羊】西小邮懒羊羊：XiAnYouDianQiang <br>【雷锋帽】西小邮：Axiyou999 <br>【海贼王】A小邮万能墙：xiyouwannengqiang <br>【史迪奇】西邮朋友圈：xaydpyq01 / xaydpyq02 <br>【黄皮柚】西柚通：xiyoutong1 <br>【浅蓝猫】西柚表白墙：XUPT_BBQ <br>【蓝学塘】糖糖在西柚：Xayd_tangtang <br>【粉色圆】西邮表白墙：xyxzs369 <br>【小丸子】邮电表白墙：d616268 / yd45601" },
    西柚oi: { icon: "iconfont icon-xiaohongshu", content: "小红书APP扫码加入，二维码6月10日前有效", code: "http://xhslink.com/Rijj5I" },
    夸克搜索: { icon: "fa-solid fa-magnifying-glass", content: "据说搜题比较准，可以试试。", code: "https://quark.sm.cn/" },
}

dialog.showMsg = (name) => {
    let item = dialog.msgs[name]
    dialog.title.innerHTML = `<i class="${item.icon || item.code && "fa-solid fa-qrcode" || "fa-solid fa-comment-dots"} fa-space"></i>${name}`
    dialog.content.innerHTML = `${item.content || ''}${item.code ?
        `(<strong><a onclick="dialog.phone('${item.code}')">点击直接打开</a></strong>)` : ''}`
    if (item.code) new QRCode(dialog.content, item.code)
    dialog.show()
}

dialog.phone = link => {
    open(link, "_blank", 'height=720px,width=360px,left=720px')
}

dialog.show = () => {
    dialog.ele.classList.remove("hidden")
}

dialog.close = () => {
    dialog.ele.classList.add("hidden")
    dialog.title.innerHTML = ""
    dialog.content.innerHTML = ""
}
