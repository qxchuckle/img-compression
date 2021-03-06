function alertSuccess(t) {
    $("#successModal").modal("hide");
    var e = t.con ? t.con : "成功",
        n = '<div class="modal fade" id="successModal">\n<div class="modal-dialog modal-sm">\n<div class="modal-content">\n<div class="modal-header bg-green">\n<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>\n<h4 class="modal-title" style="font-weight:normal">' + (t.title ? t.title : "温馨提示") + '</h4>\n</div>\n<div class="modal-body">\n<p class="success-title font-16">' + e + '</p>\n</div>\n<div class="modal-footer" style="border-top:0">\n<button type="button" class="btn btn-default" data-dismiss="modal">' + (t.btnTitle ? t.btnTitle : "关闭") + "</button>\n</div>\n</div>\n</div>\n</div>";
    $("body").append(n), $("#successModal").modal("toggle", "center")
}

function alertError(t) {
    $("#errorModal").modal("hide");
    var e = t.con ? t.con : "失败",
        n = '<div class="modal fade" id="errorModal">\n<div class="modal-dialog modal-sm">\n<div class="modal-content">\n<div class="modal-header bg-red">\n<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>\n<h4 class="modal-title" style="font-weight:normal">' + (t.title ? t.title : "温馨提示") + '</h4>\n</div>\n<div class="modal-body">\n<p class="error-title font-16">' + e + '</p>\n</div>\n<div class="modal-footer" style="border-top:0">\n<button type="button" class="btn btn-default" data-dismiss="modal">' + (t.btnTitle ? t.btnTitle : "关闭") + "</button>\n</div>\n</div>\n</div>\n</div>";
    $("body").append(n), $("#errorModal").modal("toggle", "center")
}

function alertConfirm(t, e, n, i, o) {
    $("#confirmModal").modal("hide"), $("body").off("click", "#confirmModal .sure"), $("body").off("click", "#confirmModal .cancle");
    var t = t || "确定?",
        r = '<div class="modal fade" id="confirmModal">\n<div class="modal-dialog modal-sm">\n<div class="modal-content">\n<div class="modal-header bg-primary">\n<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>\n<h4 class="modal-title" style="font-weight:normal">' + (e = e || "温馨提示") + '</h4>\n</div>\n<div class="modal-body">\n<p class="confirm-title font-16">' + t + '</p>\n</div>\n<div class="modal-footer" style="border-top:0">\n<button type="button" class="btn btn-default cancle">' + (n = n || ["取消", "确定"])[0] + '</button>\n<button type="button" class="btn btn-primary sure">' + n[1] + "</button>\n</div>\n</div>\n</div>\n</div>";
    $("body").append(r), $("#confirmModal").modal({
        keyboard: !1,
        show: !0,
        position: "fit",
        backdrop: "static"
    }), $("body").on("click", "#confirmModal .cancle", function() {
        o ? (o(), $("#confirmModal").modal("hide", "fit")) : $("#confirmModal").modal("hide", "fit")
    }), $("body").on("click", "#confirmModal .sure", function() {
        i ? (i(), $("#confirmModal").modal("hide", "fit")) : $("#confirmModal").modal("hide", "fit")
    })
}

function confirmInput(t) {
    $("#confirmInputModal").modal("hide"), $("body").off("click", "#confirmInputModal .sure"), $("body").off("click", "#confirmInputModal .cancle");
    t.con && t.con;
    var e = t.title ? t.title : "请输入",
        n = t.btnTitle ? t.btnTitle : ["取消", "确定"],
        i = '<div class="modal fade" id="confirmInputModal">\n<div class="modal-dialog modal-sm">\n<div class="modal-content">\n<div class="modal-header bg-primary">\n<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>\n<h4 class="modal-title" style="font-weight:normal">' + e + '</h4>\n</div>\n<div class="modal-body">\n<div class="input-control">\n<input type="text" class="form-control" placeholder="请输入" value="' + (t.value ? t.value : "") + '">\n</div>\n</div>\n<div class="modal-footer" style="border-top:0">\n<button type="button" class="btn btn-default cancle">' + n[0] + '</button>\n<button type="button" class="btn btn-primary sure">' + n[1] + "</button>\n</div>\n</div>\n</div>\n</div>";
    $("body").append(i), $("#confirmInputModal").modal({
        keyboard: !1,
        show: !0,
        position: "fit",
        backdrop: "static"
    }), $("body").on("click", "#confirmInputModal .cancle", function() {
        var e = $("#confirmInputModal .form-control").val();
        t.error ? t.error(e) : $("#confirmInputModal").modal("hide", "fit")
    }), $("body").on("click", "#confirmInputModal .sure", function() {
        var e = $("#confirmInputModal .form-control").val();
        t.success ? t.success(e) : $("#confirmInputModal").modal("hide", "fit")
    })
}

function confirmArea(t) {
    $("#confirmAreaModal").modal("hide"), $("body").off("click", "#confirmAreaModal .sure"), $("body").off("click", "#confirmAreaModal .cancle");
    t.con && t.con;
    var e = t.title ? t.title : "请输入",
        n = t.btnTitle ? t.btnTitle : ["取消", "确定"],
        i = t.value ? t.value : "",
        o = '<div class="modal fade" id="confirmAreaModal">\n<div class="modal-dialog modal-sm">\n<div class="modal-content">\n<div class="modal-header bg-primary">\n<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>\n<h4 class="modal-title" style="font-weight:normal">' + e + '</h4>\n</div>\n<div class="modal-body">\n<div class="input-control">\n<textarea placeholder="' + (t.placeholder ? t.placeholder.toString() : "请输入...") + '" value="' + i + '" rows="8"></textarea>\n</div>\n</div>\n<div class="modal-footer" style="border-top:0">\n<button type="button" class="btn btn-default cancle">' + n[0] + '</button>\n<button type="button" class="btn btn-primary sure">' + n[1] + "</button>\n</div>\n</div>\n</div>\n</div>";
    $("body").append(o), $("#confirmAreaModal").modal({
        keyboard: !1,
        show: !0,
        position: "fit",
        backdrop: "static"
    }), $("body").on("click", "#confirmAreaModal .cancle", function() {
        var e = $("#confirmAreaModal textarea").val();
        t.error ? t.error(e) : $("#confirmAreaModal").modal("hide", "fit")
    }), $("body").on("click", "#confirmAreaModal .sure", function() {
        var e = $("#confirmAreaModal textarea").val();
        t.success ? t.success(e) : $("#confirmAreaModal").modal("hide", "fit")
    })
}

function msgError(t) {
    new $.zui.Messager(t, {
        type: "danger",
        placement: "center",
        icon: "warning-sign"
    }).show()
}

function msgSuccess(t) {
    new $.zui.Messager(t, {
        type: "success",
        placement: "center",
        icon: "check-circle"
    }).show()
}

function isChinese(t) {
    return /[\u4e00-\u9fa5]/.test(t)
}

function ch2Unicdoe(t) {
    if (t) {
        for (var e = "", n = 0; n < t.length; n++) {
            var i = t.charAt(n);
            isChinese(i) ? e += "\\u" + i.charCodeAt(0).toString(16) : e += i
        }
        return e
    }
}

function unicode2Ch(t) {
    if (t) {
        for (var e = 1, n = "", i = 0; i < t.length; i += e) {
            e = 1;
            var o = t.charAt(i);
            if ("\\" == o)
                if ("u" == t.charAt(i + 1)) {
                    var r = t.substr(i + 2, 4);
                    n += String.fromCharCode(parseInt(r, 16).toString(10)), e = 6
                } else n += o;
            else n += o
        }
        return n
    }
}

function parseParam(t, e) {
    var n = "";
    if ("string" == typeof t || "number" == typeof t || "boolean" == typeof t || null === t || void 0 === t) n += "&" + e + "=" + t;
    else if (t instanceof Array) $.each(t, function(i, o) {
        var r = null == e ? i : e + (t instanceof Array ? "[" + i + "]" : "." + i);
        n += "&" + parseParam(o, r)
    });
    else if (t instanceof Object)
        for (var i in t) {
            var o = null == e ? i : e + (t instanceof Array ? "[" + i + "]" : "." + i);
            n += "&" + parseParam(t[i], o)
        }
    return n.substr(1)
}

function paramParse(t, e) {
    var n = t.replace(/&/g, '","').replace(/=/g, '":"');
    return n = '{"' + n + '"}'
}

function _addFavorite() {
    var t = window.location,
        e = document.title,
        n = navigator.userAgent.toLowerCase();
    if (n.indexOf("360se") > -1) alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
    else if (n.indexOf("msie 8") > -1) window.external.AddToFavoritesBar(t, e);
    else if (document.all) try {
        window.external.addFavorite(t, e)
    } catch (t) {
        alert("您的浏览器不支持,请按 Ctrl+D 手动收藏!")
    } else if (window.sidebar) try {
        window.sidebar.addPanel(e, t, "")
    } catch (t) {
        alert("由于浏览器不支持，请按 Ctrl+D 手动收藏！")
    } else alert("您的浏览器不支持,请按 Ctrl+D 手动收藏!")
}

function recordRecentUse(t, e) {
    var n, i = {
        name: t,
        url: e
    };
    if ($.zui ? n = $.zui.store.get("recent_arr") : (n = localStorage.getItem("recent_arr"), n = JSON.parse(n)), n && n.length) {
        for (var o = !1, r = 0; r < n.length; r++) n[r].name === t && (o = !0);
        o || n.unshift(i), n.length > 4 && n.pop()
    } else(n = []).unshift(i);
    $.zui ? $.zui.store.set("recent_arr", n) : localStorage.setItem("recent_arr", JSON.stringify(n))
}

function recentUseList() {
    var t = $.zui.store.get("recent_arr");
    if (t && t.length)
        for (var e = 0; e < t.length; e++) $("#recentUse").append('<a class="btn btn-sm" href="' + t[e].url + '">' + t[e].name + "</a>")
}

function goTop() {
    var t = "#goTop";
    if (document.getElementById("goTop")) {
        var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        e > 100 ? $(t).show() : $(t).hide();
        var n = $("#write").outerHeight(),
            i = $(window).outerHeight() - 300;
        e > 178 && n > i ? n + 178 - $("body").scrollTop() > i ? ($(".md-toc").addClass("md-toc-fixed"), $(".md-toc").css("top", "")) : ($(".md-toc").removeClass("md-toc-fixed"), n > i && $(".md-toc").css("top", n - i - 33 > 0 ? n - i - 33 + "px" : "")) : $(".md-toc").removeClass("md-toc-fixed"), window.onscroll = function() {
            var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            e > 100 ? $(t).fadeIn(200) : $(t).fadeOut(200), e > 178 && n > i ? n + 178 - e > i ? ($(".md-toc").addClass("md-toc-fixed"), $(".md-toc").css("top", "")) : ($(".md-toc").removeClass("md-toc-fixed"), n > i && $(".md-toc").css("top", n - i - 33 > 0 ? n - i - 33 + "px" : "")) : $(".md-toc").removeClass("md-toc-fixed")
        }, $(t).click(function() {
            return $("body,html").animate({
                scrollTop: 0
            }, 500), !1
        })
    }
}

function clearActiveAfter() {
    $(".custom-tab li") && $(".custom-tab .active").prev().find("a").eq(0).addClass("clear-after");
    var t = 0,
        e = 0;
    $(".custom-tab li").each(function(n, i) {
        $(i).attr("data-target") || (t += $(i).outerWidth(), e = n)
    }), t <= 1160 ? $(".custom-tab li").eq(e).find("a").eq(0).addClass("clear-after") : (t = 0, $(".custom-tab li").each(function(e, n) {
        t += $(n).outerWidth(), !$(n).attr("data-target") && t > 1080 && ($(".custom-tab .dropdown").show(), $(".custom-tab .dropdown-menu").append($(n)))
    })), $(".custom-tab").css("width", "100%")
}

function doPost(t, e, n, i, o) {
    $.ajax({
        type: "POST",
        url: t,
        data: e,
        dataType: o || "json",
        timeout: 3e4,
        success: function(t) {
            n(t)
        },
        error: function(t) {
            try {
                i(t)
            } catch (t) {}
        }
    })
}

function doGet(t, e, n, i, o) {
    $.ajax({
        type: "GET",
        url: t,
        data: e,
        dataType: o || "json",
        timeout: 3e4,
        success: function(t) {
            n(t)
        },
        error: function(t) {
            try {
                i(t)
            } catch (t) {}
        }
    })
}

function isEmail(t) {
    var e = t.find("input").eq(0).val();
    return e && /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(e) ? (t.addClass("has-success"), !0) : (t.addClass("has-error"), !1)
}

function isNickname(t) {
    return t.find("input").eq(0).val() ? (t.addClass("has-success"), !0) : (t.addClass("has-error"), !1)
}

function isNumber(t) {
    return /^[0-9]+.?[0-9]*$/.test(t)
}

function isBoolean(t) {
    return "true" == (t = t.toLowerCase()) || "false" == t
}

function isNumberOrBoolean(t) {
    return isNumber(t) || isBoolean(t)
}

function myBrowser() {
    var t = navigator.userAgent;
    return t.indexOf("OPR") > -1 ? "Opera" : t.indexOf("Firefox") > -1 ? "FF" : t.indexOf("Trident") > -1 ? "IE" : t.indexOf("Edge") > -1 ? "Edge" : t.indexOf("Chrome") > -1 ? "Chrome" : t.indexOf("Safari") > -1 ? "Safari" : void 0
}

function convertBase64UrlToBlob(t) {
    for (var e = t.split(";base64,"), n = e[0].split(":")[1], i = window.atob(e[1]), o = i.length, r = new Uint8Array(o), a = 0; a < o; a++) r[a] = i.charCodeAt(a);
    return new Blob([r], {
        type: n
    })
}

function convertUrlToBase64(t) {
    return new Promise(function(e, n) {
        var i = new Image;
        i.crossOrigin = "Anonymous", i.src = t, i.onload = function() {
            var t = document.createElement("canvas");
            t.width = i.width, t.height = i.height;
            t.getContext("2d").drawImage(i, 0, 0, i.width, i.height);
            var n = i.src.substring(i.src.lastIndexOf(".") + 1).toLowerCase(),
                o = t.toDataURL("image/" + n);
            e({
                dataURL: o,
                type: "image/" + n,
                ext: n
            })
        }
    })
}

function base64ToBolbAndDownload(t, e) {
    var n = convertBase64UrlToBlob(t);
    if ("IE" === myBrowser()) window.navigator.msSaveBlob(n, e);
    else {
        var i = document.createElement("a");
        i.download = e, i.href = URL.createObjectURL(n), i.click()
    }
}

function getQQlist(t) {
    doGet(bejsonHost + "Bejson/Api/LanguageGroup/getGroupList", {
        site_id: parseInt($("body").attr("data-siteid"))
    }, function(e) {
        if (200 === e.code || "200" === e.code) {
            var n = e.data.list,
                i = "";
            i = "object" == typeof n ? JSON.stringify(n) : n.toString();
            new LZMA("/static/bejson/js/lzma_worker.js").compress(i, 1, function(t) {
                if (!1 !== t) {
                    var e = convert_to_formated_hex(t);
                    $.cookie("bejson_saved_qqlist", e, {
                        expires: 1,
                        path: "/"
                    })
                } else msgError("An error occurred during LZMA compression.")
            }, function(t) {}), importQQlist(n, t)
        }
    }, function() {})
}

function importQQlist(t, e) {
    $.each(t, function(t, e) {
        var n, i, o = [],
            r = e.icon;
        $(e.groups).each(function(t, n) {
            var i = "",
                a = "",
                s = "";
            "hot" === n.group_status && (i = "hot", a = "满", s = "disabled"), "new" === n.group_status && (i = "new", a = "新");
            var l = '<div class="group-info"> <div class="title-bg">' + e.name + '</div><div class="is-full ' + i + '" data-full="' + n.group_status + '">' + a + '</div><div class="group-detail"> <div>' + n.name + '</div> <p>群号：<span class="qq-num">' + n.group_number + '</span>  <span class="copy-qqnumber">复制群号</span></p></div><div class="group-apply" ><img src="' + r + '" alt="bjson-q.png"><a href="https://shang.qq.com/wpa/qunwpa?idkey=' + n.group_key + '" target="_blank" class="group-btn-apply btn btn-primary ' + s + '" data-state="' + n.group_key + '" >申请入群</a></div><div class="group-shadow"></div></div>';
            o.push(l)
        }), n = o.join(""), i = '<div class="modal-nav-qq" id="modal--qq"><h3 class="group-title">' + e.name + "</h3> " + n + "</div>", $("#modalQQ").append(i)
    })
}

function createQQlist(t) {
    var e = null;
    if ($.cookie("bejson_saved_qqlist")) try {
        var n = convert_formated_hex_to_bytes($.cookie("bejson_saved_qqlist"));
        if (0 == n) return msgError("invalid compressed input"), !1;
        new LZMA("/static/bejson/js/lzma_worker.js").decompress(n, function(n) {
            !1 !== n ? importQQlist(e = JSON.parse(n), t) : msgError("An error occurred during decompression.")
        }, function(t) {})
    } catch (e) {
        getQQlist(t)
    } else getQQlist(t);
    new ClipboardJS(".copy-qqnumber", {
        text: function(t) {
            var e = $(t).prev().text();
            return !!e && (msgSuccess("复制成功"), e)
        }
    })
}

function getChildren(t) {
    for (var e = [], n = t.getElementsByTagName("*"), i = 0, o = n.length; i < o; ++i)
        if (1 == n[i].nodeType) {
            var r = n[i].parentNode;
            1 == r.nodeType ? r == t && (e[e.length] = n[i]) : r.parentNode == t && (e[e.length] = n[i])
        } else console.log(n[i].nodeType);
    return e
}

function getChildrens(t) {
    for (var e = t.getElementsByTagName("*"), n = [], i = 0, o = (e = t.getElementsByTagName("*")).length; i < o; ++i)
        if (1 == e[i].nodeType) {
            var r = e[i].parentNode;
            1 == r.nodeType ? r == t && (n[n.length] = e[i]) : r.parentNode == t && (n[n.length] = e[i])
        } var a = Math.random() * n.length;
    return a = Math.floor(a), n[a]
}

function randomString(t) {
    t = t || 32;
    var e = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
        n = e.length,
        o = "";
    for (i = 0; i < t; i++) o += e.charAt(Math.floor(Math.random() * n));
    return o
}

function dynamicCss(t) {
    var e = document.createElement("style");
    e.type = "text/css";
    try {
        e.appendChild(document.createTextNode(t + "{\n  position: absolute;\n  top: 99px;\n  left: 50%;\n  margin-left: -580px;\n  width: 1160px;\n  z-index: 99;\n}\n" + t + ":after{\n  content: '';\n  display: block;\n  clear: both;\n  position: absolute;\n  height:40px;\n  width:1160px;\n  background-color:#f6f6f6;\n  border: 1px solid #eee;\n  top: 50%;\n  left: 0;\n  margin-top: -20px;\n}\n" + t + " *{\n  color: #666666;\n  position: relative;\n  z-index:9;\n  font-size: 12px;\n  line-height: 40px;\n  padding: 0px;\n  display: inline-block;\n  margin: 0px 0px 0 10px;\n  width: auto;\n  cursor: pointer;\n}"))
    } catch (n) {
        e.styleSheet.cssText = t + "{\n  position: absolute;\n  top: 99px;\n  left: 50%;\n  margin-left: -580px;\n  width: 1160px;\n  z-index: 99;\n}\n" + t + ":after{\n  content: '';\n  display: block;\n  clear: both;\n  position: absolute;\n  height:40px;\n  width:1160px;\n  background-color:#f6f6f6;\n  border: 1px solid #eee;\n  top: 50%;\n  left: 0;\n  margin-top: -20px;\n}\n" + t + " *{\n  color: #666666;\n  position: relative;\n  z-index:9;\n  font-size: 12px;\n  line-height: 40px;\n  padding: 0px;\n  display: inline-block;\n  margin: 0px 0px 0 10px;\n  width: auto;\n  cursor: pointer;\n}"
    }
    document.getElementsByTagName("head")[0].appendChild(e)
}

function yasuo(t) {
    var e = editor.getValue();
    if (1 === t || 3 === t) {
        for (var n = [], i = !1, o = 0, r = (e = e.split("\n").join(" ")).length; o < r; o++) {
            var a = e.charAt(o);
            i && a === i ? "\\" !== e.charAt(o - 1) && (i = !1) : i || '"' !== a && "'" !== a ? i || " " !== a && "\t" !== a || (a = "") : i = a, n.push(a)
        }
        e = n.join("")
    }
    2 !== t && 3 !== t || (e = e.replace(/\\/g, "\\\\").replace(/\"/g, '\\"')), 4 === t && (e = e.replace(/\\\\/g, "\\").replace(/\\\"/g, '"')), editor.setValue(e)
}

function indexFormat() {
    var t = editor.getValue();
    ((t = t.trim()).startWith("'{") && t.endWith("}'") || t.startWith("'\\[") && t.endWith("]'") || t.startWith('"\\[') && t.endWith(']"') || t.startWith('"{') && t.endWith('}"')) && 1 == window.confirm("您发的JSON是一个字符串,而不是对象,您需要转成JSON对象么?") && (t = t.substr(1, t.length - 2), t = t.replace(/\\\\/g, "\\").replace(/\\\"/g, '"')), editor.setValue(t);
    var e = editor.lineCount();
    editor.autoFormatRange({
        line: 0,
        ch: 0
    }, {
        line: e
    });
    try {
        jsonlint.parse(t) && ($("#jsonlintResult").html("正确的JSON!"), $("#jsonlintBox").addClass("alert-success alert").removeClass("alert-warning alert-danger"), $("#jsonlintIcon").addClass("icon-ok-sign").removeClass("icon-info-sign icon-remove-sign"))
    } catch (t) {
        document.getElementById("jsonlintResult").innerHTML = t, $("#jsonlintBox").addClass("alert-danger alert").removeClass("alert-warning alert-success"), $("#jsonlintIcon").addClass("icon-remove-sign").removeClass("icon-info-sign icon-ok-sign")
    }
    localStorage.setItem("lastJsonData", editor.getValue())
}

function isArray(t) {
    return "object" == typeof t && t instanceof Array
}

function convert_formated_hex_to_bytes(t) {
    var e, n, i, o = 0,
        r = [];
    if ("" == t.trim()) return [];
    if (/[^0-9a-fA-F\s]/.test(t)) return !1;
    for (n = (e = t.split(/([0-9a-fA-F]+)/g)).length, i = 0; i < n; ++i) "" != e[i].trim() && (r[o++] = parseInt(e[i], 16));
    return r
}

function convert_to_formated_hex(t) {
    var e, n, i, o = "";
    if (!isArray(t)) return !1;
    for (n = t.length, e = 0; e < n; ++e) t[e] < 0 && (t[e] = t[e] + 256), void 0 === t[e] && (alert("Boom " + e), t[e] = 0), 1 == (i = t[e].toString(16)).length && (i = "0" + i), o += i += (e + 1) % 16 == 0 ? "\n" : " ";
    return o.trim()
}

function getAndShowPictures() {
    var t = navigator.userAgent;
    this.imgCount = 0, this.uploadImgArr = [], this.add = function(e) {
        var n = $(e),
            i = $(e)[0],
            o = $(e).parents("form").find(".pic-div").eq(0),
            r = i.files;
        if (1 == $(e)[0].files.length) {
            if (r[0].size > 2097152) return void msgError("图片的大小不能大于2M");
            s = "<div class='imageDiv' > <img id='img" + r[0].name + "replay' /> <div class='cover' data-id='" + ++this.imgCount + "'><i class='delbtn'>删除</i></div></div>";
            o.prepend(s);
            l = document.getElementById("img" + r[0].name + "replay");
            if (r && r[0])
                if (l.onload = function() {
                        l.width > l.height ? l.style.height = "100%" : l.style.width = "100%"
                    }, -1 == t.indexOf("MSIE")) l.src = window.URL.createObjectURL(i.files[0]);
                else if (-1 != i.value.indexOf(",")) {
                c = i.value.split(",");
                l.src = c[0]
            } else l.src = i.value;
            this.uploadImgArr.push(i.files[0]), 5 === this.imgCount && (msgError("最多只能上传5张图片"), n.parents("form").find(".addImages").hide())
        } else
            for (var a = 0; a < $(e)[0].files.length; a++)
                if (i.files[a].size > 2097152) msgError("图片的大小不能大于2M");
                else {
                    var s = "<div class='imageDiv' > <img id='img" + r[a].name + "replay' /> <div class='cover' data-id='" + ++this.imgCount + "'><i class='delbtn'>删除</i></div></div>";
                    o.prepend(s);
                    var l = document.getElementById("img" + r[a].name + "replay");
                    if (r && r[a])
                        if (function(t) {
                                t.onload = function() {
                                    t.width > t.height ? t.style.height = "100%" : t.style.width = "100%"
                                }
                            }(l), -1 == t.indexOf("MSIE")) l.src = window.URL.createObjectURL(i.files[a]);
                        else if (-1 != i.value.indexOf(",")) {
                        var c = i.value.split(",");
                        l.src = c[a]
                    } else l.src = i.value;
                    if (this.uploadImgArr.push(i.files[a]), 5 === this.imgCount) {
                        msgError("最多只能上传5张图片"), n.parents("form").find(".addImages").hide();
                        break
                    }
                } $(e).val("")
    }, this.cancel = function(t) {
        this.imgCount = this.imgCount - 1;
        var e = this.imgCount,
            n = $(t),
            i = n.parents(".pic-div"),
            o = parseInt(n.attr("data-id"));
        this.uploadImgArr.splice(o - 1, 1), n.parents(".imageDiv").remove(), i.find(".imageDiv .cover").each(function(t, n) {
            $(n).attr("data-id", e - t)
        })
    }
}

function resizeCodemirror(t, e, n, i) {
    var o;
    $(t).each(function(t, r) {
        $(r) && $(r).draggable({
            container: e[t],
            move: !1,
            before: function() {
                o = $(e[t]).innerHeight()
            },
            drag: function(t) {
                $(e).each(function(e, r) {
                    $(r) && (i ? $(r + " " + i).height(t.offset.y + o > n ? t.offset.y + o : n) : $(r + " .CodeMirror").height(t.offset.y + o > n ? t.offset.y + o : n))
                })
            },
            finish: function(t) {}
        })
    })
}

function downloadZip() {
    var t = $("#packageName").val(),
        e = new JSZip,
        n = e.folder(t.replace(/\./g, "/"));
    $(".result").each(function() {
        n.file($(this).attr("class_name") + ".java", $(this).val())
    });
    var i = e.generate({
        type: "blob"
    });
    saveAs(i, "bejson_gen_beans.zip")
}

function gen() {
    try {
        $("#jsonBeanCon").html(""), $("#downloadJavaBean").hide();
        jsonlint.parse(editor.getValue()) && ($("#jsonlintResult").html("正确的JSON!"), $("#jsonlintBox").addClass("alert-success alert").removeClass("alert-warning alert-danger"), $("#jsonlintIcon").addClass("icon-ok-sign").removeClass("icon-info-sign icon-remove-sign"));
        var t = $("#className").val(),
            e = $("#packageName").val(),
            n = editor.getValue(),
            i = $("#selectedType").val();
        if (n) {
            var o;
            if ("json" === i) o = getBeanFieldFromJson(n, t);
            else if ("sql" === i) return void alert("还没实现");
            $.each(o, function(t, n) {
                var i = toBeanText(n, e),
                    o = "";
                0 != t && (o = "small-text"), i = i.replace("<int>", "<Integer>").replace("<long>", "<Long>");
                var r = '<div class="t-big-margin">\n        <h4 class="text-green">类名：' + n.name + '</h4>\n<textarea class_name="' + n.name + '" row="10" class="form-control result ' + o + '" onmouseover="this.focus();this.select()">' + i + "</textarea></div>";
                $("#jsonBeanCon").append(r)
            }), $("#downloadJavaBean").show(), $("#jsonlintResult").html("成功生成JavaBean")
        }
    } catch (t) {
        document.getElementById("jsonlintResult").innerHTML = t, $("#jsonlintBox").addClass("alert-danger alert").removeClass("alert-warning alert-success"), $("#jsonlintIcon").addClass("icon-remove-sign").removeClass("icon-info-sign icon-ok-sign"), $("#download_btn").hide()
    }
}

function chechJavaWords() {
    var t = t = editor.getValue().split("\n").join("").replace(/\s/g, "");
    t = t.split("\n").join(" ");
    for (var e = javawordsStr.split(","), n = 0; n < e.length; n++) {
        var i = e[n],
            o = '"' + i + '":',
            r = "'" + i + "':";
        if (-1 != t.indexOf(o) || -1 != t.indexOf(r)) return alertError({
            con: "要转换的JSON字符中出现了Java关键字:" + i
        }), !1
    }
    return !0
}

function genJson(t) {
    if ("" == editor.getValue().trim()) return msgError("请填写JSON"), !1;
    t.button("loading"), doPost(bejsonHost + "Bejson/Api/JsonToJavapojo/", {
        json: editor.getValue(),
        package: $("#package").val(),
        fillEnable: document.getElementById("fillEnableChk").checked ? "1" : "0"
    }, function(e) {
        200 === e.code || "200" === e.code ? ($("#resData").html(e.data), $("#myModal").modal("show", "fit")) : alertError({
            con: e.msg
        }), t.button("reset")
    }, function(e) {
        $("#resData").html(e.data), $("#myModal").modal("show", "fit"), t.button("reset")
    })
}

function testCase() {
    document.getElementById("jsonlintBox") && ($("#jsonlintResult").html("正确的JSON!"), $("#jsonlintBox").addClass("alert-success alert").removeClass("alert-warning alert-danger"), $("#jsonlintIcon").addClass("icon-ok-sign").removeClass("icon-info-sign icon-remove-sign")), editor.setValue('{\r\n\t"animals":{\r\n\t"dog":[\r\n\t\t{"name":"Rufus","breed":"labrador","count":1,"twoFeet":false},\r\n\t\t{"name":"Marty","breed":"whippet","count":1,"twoFeet":false}\r\n\t],\r\n\t"cat":{"name":"Matilda"}\r\n}\r\n}')
}

function downloadZip2(t, e, n) {
    var i = t,
        o = e,
        r = $("#resData").html();
    $("#package") && $("#package").val() && (i = $("#package").val()), $("#saveName") && $("#saveName").val() && (o = $("#saveName").val());
    var a = new JSZip;
    a.folder(i.replace(/\./g, "/")).file(o + n, r);
    var s = a.generate({
        type: "blob"
    });
    saveAs(s, o + ".zip")
}

function josnToCsharp() {
    if ("" == editor.getValue().trim()) return msgError("请填写JSON"), !1;
    var t = JSON.parse(editor.getValue()),
        e = JSON2CSharp.convert(t);
    e = e.replace(/<br\/>/g, "\n"), $("#cBox").removeClass("prettyprinted").html("//如果好用，请收藏地址，帮忙分享。\n" + e), $("#resData").html("//如果好用，请收藏地址，帮忙分享。\n" + e), prettyPrint()
}

function downloadZip3(t, e, n) {
    var i = window.prompt("文件另存为");
    if (null != i) {
        i && -1 === i.indexOf(".") ? i += t : (i = n).split(".").pop().toLowerCase() === e || (i = i.split(".")[0] + t);
        var o = new Blob([$("#resData").html()], {
            type: ""
        });
        saveAs(o, i)
    }
}

function repalceFh(t) {
    return t.replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"')
}

function downloadZip4(t, e, n, i, o) {
    var r;
    if (null != (r = o || window.prompt("文件另存为"))) {
        r && -1 === r.indexOf(".") ? r += t : (r = n).split(".").pop().toLowerCase() === e || (r = r.split(".")[0] + t);
        var a = new Blob([i], {
            type: ""
        });
        saveAs(a, r)
    }
}

function jsonToYaml() {
    var t = editor.getValue();
    if (t) try {
        if (jsonlint.parse(editor.getValue())) {
            var e = JSON.parse(t);
            editor2.setValue("# 如果觉得好用，请收藏或则分享本站\n" + jsyaml.dump(e)), $("#jsonlintBox").removeClass("alert-success alert alert-warning alert-danger")
        }
    } catch (t) {
        document.getElementById("jsonlintResult").innerHTML = t, $("#jsonlintBox").addClass("alert-danger alert").removeClass("alert-warning alert-success"), $("#jsonlintIcon").addClass("icon-remove-sign").removeClass("icon-info-sign icon-ok-sign")
    }
}

function yamlToJson() {
    var t = editor2.getValue();
    if (t) try {
        var e = JSON.stringify(jsyaml.load(t), null, 2);
        editor.setValue(e), $("#jsonlintBox").removeClass("alert-success alert alert-warning alert-danger")
    } catch (t) {
        document.getElementById("jsonlintResult").innerHTML = "yaml错误:\n" + t, $("#jsonlintBox").addClass("alert-danger alert").removeClass("alert-warning alert-success"), $("#jsonlintIcon").addClass("icon-remove-sign").removeClass("icon-info-sign icon-ok-sign")
    }
}

function aesdesEncrypt() {
    var t = editor.getValue();
    if (t) {
        var e = $("#pwd").val();
        switch ($("#enctype").val()) {
            case "aes":
                $("#ctype").val(CryptoJS.AES.encrypt(t, e)), editor2.setValue($("#ctype").val());
                break;
            case "des":
                $("#ctype").val(CryptoJS.DES.encrypt(t, e)), editor2.setValue($("#ctype").val());
                break;
            case "rabbit":
                $("#ctype").val(CryptoJS.Rabbit.encrypt(t, e)), editor2.setValue($("#ctype").val());
                break;
            case "rc4":
                $("#ctype").val(CryptoJS.RC4.encrypt(t, e)), editor2.setValue($("#ctype").val());
                break;
            case "tripledes":
                $("#ctype").val(CryptoJS.TripleDES.encrypt(t, e)), editor2.setValue($("#ctype").val())
        }
    } else msgError("请输入要加密的内容")
}

function aesdesDecrypt() {
    var t = editor.getValue(),
        e = $("#pwd").val();
    switch ($("#enctype").val()) {
        case "aes":
            if (!(n = CryptoJS.AES.decrypt(t, e).toString(CryptoJS.enc.Utf8))) return void msgError("解密失败");
            editor2.setValue(n);
            break;
        case "des":
            if (!(n = CryptoJS.DES.decrypt(t, e).toString(CryptoJS.enc.Utf8))) return void msgError("解密失败");
            editor2.setValue(n);
            break;
        case "rabbit":
            if (!(n = CryptoJS.Rabbit.decrypt(t, e).toString(CryptoJS.enc.Utf8))) return void msgError("解密失败");
            editor2.setValue(n);
            break;
        case "rc4":
            if (!(n = CryptoJS.RC4.decrypt(t, e).toString(CryptoJS.enc.Utf8))) return void msgError("解密失败");
            editor2.setValue(n);
            break;
        case "tripledes":
            var n = CryptoJS.TripleDES.decrypt(t, e).toString(CryptoJS.enc.Utf8);
            if (!n) return void msgError("解密失败");
            editor2.setValue(n)
    }
}

function rsaConvert() {
    var t = $("#rsaCmd .active").attr("data-cmd"),
        e = $("#rsatype").val(),
        n = editor.getValue();
    n = n.replace(/\n/g, "\r\n");
    var i = editor5.getValue();
    if ("" !== n && "" !== i) {
        var o = bejsonHost + "Bejson/Api/Rsa/pubEncrypt",
            r = {};
        switch (t) {
            case "buildRSADecryptByPrivateKey":
            case "buildRSAEncryptByPrivateKey":
                o = bejsonHost + "Bejson/Api/Rsa/prvDecrypt", r = {
                    privateKey: n,
                    decSign: i,
                    etype: e
                };
                break;
            case "buildRSAEncryptByPublicKey":
            case "buildRSADecryptByPublicKey":
                r = {
                    publicKey: n,
                    encStr: i,
                    etype: e
                };
                break;
            case "buildRSAverifyByPublicKey":
                r = {
                    rsaType: e
                }
        }
        $("body").toggleClass("loading"), doPost(o, r, function(t) {
            200 === t.code || "200" === t.code ? editor2.setValue(t.data) : alertError({
                con: t.msg
            }), $("body").toggleClass("loading")
        }, function() {
            alertError({
                con: "解密失败，请稍候重试"
            }), $("body").toggleClass("loading")
        })
    } else msgError("请输入相关数据")
}

function shaHash(t) {
    switch (t) {
        case "sha1":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").addClass("display-none"), $("#shaValueExchange").val(CryptoJS.SHA1(editor.getValue())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "sha3":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").addClass("display-none"), $("#shaValueExchange").val(CryptoJS.SHA3(editor.getValue())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "sha224":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").addClass("display-none"), $("#shaValueExchange").val(CryptoJS.SHA224(editor.getValue())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "sha256":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").addClass("display-none"), $("#shaValueExchange").val(CryptoJS.SHA256(editor.getValue())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "sha384":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").addClass("display-none"), $("#shaValueExchange").val(CryptoJS.SHA384(editor.getValue())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "sha512":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").addClass("display-none"), $("#shaValueExchange").val(CryptoJS.SHA512(editor.getValue())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "md5":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").addClass("display-none"), $("#shaValueExchange").val(CryptoJS.MD5(editor.getValue())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "hmacsha1":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").removeClass("display-none"), $("#shaValueExchange").val(CryptoJS.HmacSHA1(editor.getValue(), $("#shapwd").val())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "hmacsha3":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").removeClass("display-none"), $("#shaValueExchange").val(CryptoJS.HmacSHA3(editor.getValue(), $("#shapwd").val())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "hmacsha224":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").removeClass("display-none"), $("#shaValueExchange").val(CryptoJS.HmacSHA224(editor.getValue(), $("#shapwd").val())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "hmacsha256":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").removeClass("display-none"), $("#shaValueExchange").val(CryptoJS.HmacSHA256(editor.getValue(), $("#shapwd").val())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "hmacsha384":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").removeClass("display-none"), $("#shaValueExchange").val(CryptoJS.HmacSHA384(editor.getValue(), $("#shapwd").val())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "hmacsha512":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").removeClass("display-none"), $("#shaValueExchange").val(CryptoJS.HmacSHA512(editor.getValue(), $("#shapwd").val())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "hmacmd5":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").removeClass("display-none"), $("#shaValueExchange").val(CryptoJS.HmacMD5(editor.getValue(), $("#shapwd").val())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "pbkdf2":
            $("#shaPbkdfBox").show(), $("#shapwdBox").addClass("display-none");
            var e = $("#shaPbkdfIteration").val();
            if (e || "0" === e)
                if (/^[0-9]+$/.test(parseFloat(e))) {
                    var n = CryptoJS.enc.Utf8.parse($("#shaPbkdfSalt").val()),
                        i = CryptoJS.PBKDF2(editor.getValue(), n, {
                            keySize: parseInt($("#shaPbkdfKey").val()),
                            iterations: parseInt($("#shaPbkdfIteration").val())
                        });
                    $("#shaValueExchange").val(i), editor2.setValue($("#shaValueExchange").val())
                } else msgError("迭代次数必须为正整数"), $("#shaPbkdfSalt").val("");
            else msgError("迭代次数必须为正整数"), $("#shaPbkdfSalt").val("")
    }
}

function evalEncode() {
    var t = editor.getValue();
    if (t) {
        var e = (t = (t = t.replace(/[\r\n]+/g, "")).replace(/'/g, "\\'")).match(/\b(\w+)\b/g);
        e.sort();
        for (var n = [], i = "", o = 0; o < e.length; o++) e[o] != i && n.push(i = e[o]);
        var r, a = n.length;
        for (o = 0; o < a; o++) r = evalNum(o), t = t.replace(new RegExp("\\b" + n[o] + "\\b", "g"), r), r == n[o] && (n[o] = "");
        $("#evalHidden").val("eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\\\b'+e(c)+'\\\\b','g'),k[c]);return p}('" + t + "'," + evalA + "," + a + ",'" + n.join("|") + "'.split('|'),0,{}))"), editor2.setValue($("#evalHidden").val())
    }
}

function evalNum(t) {
    return (t < evalA ? "" : evalNum(parseInt(t / evalA))) + ((t %= evalA) > 35 ? String.fromCharCode(t + 29) : t.toString(36))
}

function evalRun() {
    eval(editor.getValue())
}

function evalDecode() {
    var code = editor.getValue();
    code && (code = code.replace(/^eval/, ""), $("#evalHidden").val(eval(code)), editor2.setValue($("#evalHidden").val()))
}

function goFormat() {
    $.zui.store.set("evalpackageCon", editor.getValue()), window.location.href = "/jshtml_format/"
}

function onMatch() {
    if (!isValidFields()) return !1;
    $("#cBox").removeClass("prettyprinted").html("");
    var t = buildRegex(),
        e = editor.getValue().match(t);
    if (null == e || 0 == e.length) return $("#cBox").html("（没有匹配）"), prettyPrint(), !1;
    if (document.getElementById("optionGlobal").checked) {
        for (var n = "共找到 " + e.length + " 处匹配：\r\n", i = 0; i < e.length; ++i) n = n + e[i] + "\r\n";
        $("#cBox").text(n), prettyPrint()
    } else $("#cBox").text("匹配位置：" + t.lastIndex + "\r\n匹配结果：" + e[0]), prettyPrint();
    return !0
}

function buildRegex() {
    var t = "";
    return document.getElementById("optionGlobal").checked && (t = "g"), document.getElementById("optionIgnoreCase").checked && (t += "i"), new RegExp(document.getElementById("textPattern").value, t)
}

function isValidFields() {
    var t = editor.getValue();
    if (null == t || "" == t) return msgError("请输入待匹配文本"), !1;
    var e = $("#textPattern").val();
    return null != e && "" != e || ($("#textPattern").focus(), msgError("请输入正则表达式"), !1)
}

function onReplace() {
    if (!isValidFields()) return !1;
    var t = editor.getValue(),
        e = buildRegex(),
        n = $("#replaceText").val();
    $("#cBox2").removeClass("prettyprinted").text(t.replace(e, n)), prettyPrint()
}

function xpathOnMatch() {
    var t = $("#textPattern").val(),
        e = editor.getValue();
    if (e)
        if (t) try {
            var n = new DOMParser;
            xmldom = n.parseFromString(e, "text/xml");
            var i = xmldom.evaluate(t, xmldom.documentElement, null, XPathResult.ORDERED_NODE_ITETATOR_TYPE, null);
            if (null !== i)
                for (var o = i.iterateNext(); o;) $("#cBox").removeClass("prettyprinted").text(o.innerHTML), prettyPrint(), o = i.iterateNext()
        } catch (t) {
            throw msgError("该浏览器不支持此转换，请切换浏览器"), new Error(t)
        } else msgError("正则表达式内容不能为空");
        else msgError("编辑器内容不能为空")
}

function xpathShowDemo() {
    editor.setValue('<webinfo>\n\t<site dig="1">\n\t\t<domain><![CDATA[http://fly.layui.com/]]></domain>\n\t\t<title>LayUI前端社区</title>\n\t</site>\n\t<site >\n\t\t<domain><![CDATA[http://www.bejson.com/]]></domain>\n\t\t<title>JSON在线解析工具</title>\n\t</site>\n</webinfo>'), $("#textPattern").val("/webinfo//site[@dig=1]")
}

function find(t) {
    var e = editor1.getValue(),
        n = "img";
    switch (t) {
        case 1:
            n = "img", $("#findImgRes").html("");
            break;
        case 2:
            n = $("#xpath").val();
            break;
        case 3:
            n = "a"
    }
    var i = "";
    $(e).find(n).each(function() {
        switch (t) {
            case 1:
                $("#showImg").is(":checked") && $("#findImgRes").append("<img src='" + $(this).attr("src") + "' style='margin-left:2px'> "), i += $(this).attr("src") + "\r\n\r\n";
                break;
            case 2:
                i += $(this).html() + "\r\n\r\n";
                break;
            case 3:
                $(this).attr("href").indexOf("http://") >= 0 && (i += $(this).attr("href") + "\r\n\r\n")
        }
    }), "" == i && (i += "没有匹配到数据"), editor2.setValue(i)
}

function removeDuplicate() {
    var t, e, n = [],
        i = editor.getValue().split("\n");
    for (var o in i) {
        t = i[o], e = !1;
        for (var r in n)
            if (t === n[r]) {
                e = !0;
                break
            }! 1 === e && n.push(t)
    }
    editor2.setValue(n.join("\n"))
}

function getCaptcha() {
    doPost(bejsonHost + "Bejson/Api/Captcha/gen", {}, function(t) {
        200 === t.code || "200" === t.code ? ($("#captcha").prop("src", t.data.img), createLognCaptcha = t.data.captcha) : alertError({
            con: t.msg
        })
    }, function() {
        msgError("获取验证码失败")
    })
}

function createlogoQiniuUploader(t, e) {
    doPost(bejsonHost + "Bejson/Api/ImageHandle/upToken", {}, function(n) {
        if (200 === n.code || "200" === n.code) {
            var i = qiniu.bucket(n.data.domain, {
                    putToken: n.data.token
                }),
                o = "upload/" + 1e17 * Math.random() + "." + extname(t.name);
            i.putFile(o, t, {
                before: function(t, n, i, o) {
                    $(e).attr("data-status", "uploading"), $(e + " .actions .file-status").attr("data-original-title", "正在上传")
                },
                progress: function(t, n, i) {
                    $(e + " .file-progress-bar").css("width", t.toFixed(2) + "%"), $(e + " .actions .file-status .text").html(t.toFixed(2) + "%")
                }
            }, function(t, n) {
                if (t) $("#uploadLogoBtn").button("reset"), $("#createLogo").button("reset"), $(e).attr("data-status", "failed"), $(e + " .actions .file-status").attr("data-original-title", "失败"), $(e + " .actions .file-status .text").html("失败"), msgError("上传失败，请稍候重试"), getCaptcha();
                else {
                    createLogo("/Bejson/Api/ImageHandle/imgZip?logo=/" + o + "&vercode=" + $("#logoCaptcha").val() + "&captcha=" + encodeURIComponent(createLognCaptcha)), getCaptcha(), $("#uploadLogoBtn").button("reset"), $("#createLogo").button("reset"), $(e).attr("data-status", "sucess"), $(e + " .actions .file-status").attr("data-original-title", "成功"), $(e + " .actions .file-status .text").html("成功")
                }
            })
        } else alertError({
            con: n.msg
        }), $("#uploadLogoBtn").button("reset"), $("#createLogo").button("reset"), getCaptcha()
    }, function() {
        msgError("获取失败，请稍候重试"), $("#uploadLogoBtn").button("reset"), $("#createLogo").button("reset"), getCaptcha()
    })
}

function createLogo(t) {
    var e = t;
    window.open(e, "_blank").location = e
}

function ocrQiniuUploader(t, e, n) {
    doPost(bejsonHost + "Bejson/Api/ImageHandle/upToken", {}, function(i) {
        if (200 === i.code || "200" === i.code) {
            var o = qiniu.bucket(i.data.domain, {
                    putToken: i.data.token
                }),
                r = 1e17 * Math.random(),
                a = "upload/" + r + "." + extname(e.name);
            window.img2SvgFilename = e.name, o.putFile(a, e, {
                before: function(t, e, i, o) {
                    window.img2SvgKeystr = e, $(n).attr("data-status", "uploading"), $(n + " .actions .file-status").attr("data-original-title", "正在上传")
                },
                progress: function(t, e, i) {
                    $(n + " .file-progress-bar").css("width", t.toFixed(2) + "%"), $(n + " .actions .file-status .text").html(t.toFixed(2) + "%")
                }
            }, function(o, a) {
                if (o) t.button("reset"), $(n).attr("data-status", "failed"), $(n + " .actions .file-status").attr("data-original-title", "失败"), $(n + " .actions .file-status .text").html("失败"), msgError("转换失败，请稍候重试");
                else {
                    $(n).attr("data-status", "sucess"), $(n + " .actions .file-status").attr("data-original-title", "成功"), $(n + " .actions .file-status .text").html("成功");
                    var s = i.data.domain + "/upload/" + r + "." + extname(e.name);
                    doPost(bejsonHost + "Bejson/Api/DistinguishString/ocrFromPicture", {
                        path: s,
                        language: $("#orcLanguage").val()
                    }, function(t) {
                        200 === t.code || "200" === t.code ? ($("#ocrRes").addClass("alert"), $("#ocrRes").text(t.data.join(","))) : alertError({
                            cod: t.msg
                        }), $("#ocrUploadeImg").button("reset")
                    }, function() {
                        $("#ocrUploadeImg").button("reset"), msgError("链接错误，请稍候重试")
                    })
                }
            })
        } else alertError({
            con: i.msg
        }), t.button("reset")
    }, function() {
        msgError("获取失败，请稍候重试"), t.button("reset")
    })
}

function htmlStringDemo() {
    editor.setValue('<div id="app" class="body-container">\n    <div class="spinner">\n      <div class="spinner-container container1">\n          <div class="circle1"></div>\n          <div class="circle2"></div>\n          <div class="circle3"></div>\n          <div class="circle4"></div>\n      </div>\n      <div class="spinner-container container2">\n          <div class="circle1"></div>\n          <div class="circle2"></div>\n          <div class="circle3"></div>\n          <div class="circle4"></div>\n      </div>\n      <div class="spinner-container container3">\n          <div class="circle1"></div>\n          <div class="circle2"></div>\n          <div class="circle3"></div>\n          <div class="circle4"></div>\n      </div>\n    </div>\n  </div>')
}

function html2string(t, e) {
    var n = t.split("\n"),
        i = "",
        o = "+=",
        r = "str";
    switch (e) {
        case "java":
            i = "String " + r;
            break;
        case "js":
            i = "var " + r;
            break;
        case "php":
            i = "$" + r, r = "$" + r, o = ".=";
            break;
        case "net":
            i = "string " + r;
            break;
        case "py":
            return t = r + "= '''\n" + t + "\n'''"
    }
    t = i + ' = "";\n';
    for (var a = 0; a < n.length; a++) {
        t += r + " " + o + ' "' + n[a].replace(/"/g, '\\"') + '";\n'
    }
    return t
}

function js2html(text) {
    var txt = eval("(" + text + ")");
    return txt
}

function htmlStringConvert2() {
    for (var t = editor.getValue().split("\n"), e = new Array, n = 0; n < t.length; n++) {
        var i = t[n];
        e.push(i)
    }
    var o = JSON.stringify(e);
    o = o.replace(/,/g, ",\n"), editor2.setValue(o)
}

function htmlStringConvert(t) {
    var e = $("#content").val();
    e = html2string(e, $(t).attr("lang")), $("#result").val(e)
}

function htmlJsHtml2js(t) {
    var e = t.split("\n");
    t = 'var text = "";\n';
    for (var n = 0; n < e.length; n++) {
        t += 'text += "' + e[n].replace(/"/g, '\\"') + '";\n'
    }
    return t
}

function htmlJsJs2html(text) {
    for (var split1 = text.split("\n"), ret = "", i = 0; i < split1.length; i++) {
        var txt = eval("" + split1[i]);
        txt && (ret = ret + txt + "\n")
    }
    return ret
}

function htmlJsConvert2() {
    for (var t = editor.getValue().split("\n"), e = new Array, n = 0; n < t.length; n++) {
        var i = t[n];
        e.push(i)
    }
    var o = JSON.stringify(e);
    o = o.replace(/,/g, ",\n"), editor2.setValue(o)
}

function htmlJsConvert() {
    var t = "";
    t = 1 == htmlJsType ? htmlJsHtml2js(editor.getValue()) : htmlJsJs2html(editor.getValue()), editor2.setValue(t)
}

function deserializeDeser(t) {
    doPost(bejsonHost + "Bejson/Api/Deserialize/deserialization", {
        data: editor.getValue()
    }, function(e) {
        if (200 === e.code || "200" === e.code) {
            if ("false" === e.data.json) return msgError("输入代码格式有误"), void t.button("reset");
            if (!e.data.php) return msgError("输入代码格式有误"), void t.button("reset");
            editor2.setValue(e.data.json), editor5.setValue("array(" + JSON.stringify(e.data.php).match("\\{(.+?)\\}")[1] + ")")
        } else alertError({
            con: e.msg
        });
        t.button("reset")
    }, function() {
        msgError("连接错误，请稍候重试"), t.button("reset")
    })
}

function extname(t) {
    if (!t || "string" != typeof t) return !1;
    var e = t.split("").reverse().join("");
    return e.substring(0, e.search(/\./)).split("").reverse().join("")
}

function qiniuUploader(t, e, n) {
    doPost(bejsonHost + "Bejson/Api/ImageHandle/upToken", {}, function(i) {
        if (200 === i.code || "200" === i.code) {
            var o = qiniu.bucket(i.data.domain, {
                    putToken: i.data.token
                }),
                r = "upload/" + 1e17 * Math.random() + "." + extname(e.name);
            window.img2SvgFilename = e.name, o.putFile(r, e, {
                before: function(t, e, i, o) {
                    window.img2SvgKeystr = e, $(n).attr("data-status", "uploading"), $(n + " .actions .file-status").attr("data-original-title", "正在上传")
                },
                progress: function(t, e, i) {
                    $(n + " .file-progress-bar").css("width", t.toFixed(2) + "%"), $(n + " .actions .file-status .text").html(t.toFixed(2) + "%")
                }
            }, function(i, o) {
                i ? (t.button("reset"), $(n).attr("data-status", "failed"), $(n + " .actions .file-status").attr("data-original-title", "失败"), $(n + " .actions .file-status .text").html("失败"), msgError("转换失败，请稍候重试")) : ($(n).attr("data-status", "sucess"), $(n + " .actions .file-status").attr("data-original-title", "成功"), $(n + " .actions .file-status .text").html("成功"), doPost(bejsonHost + "Bejson/Api/ImageHandle/image2svg", {
                    filename: window.img2SvgKeystr
                }, function(n) {
                    if (200 === n.code || "200" === n.code) {
                        var i = '<li>\n                <div class="svgimg-txtbox">\n                    <textarea rows="10">' + n.data + '</textarea>\n                    <div class="svgimg-btnbox">\n                        <p class="display-i-block">' + e.name + '</p>\n                        <button type="button" class="btn btn-primary btn-sm svg-copy">复制svg</button>\n                    </div>\n                </div>\n            </li>';
                        $("#svgList").append(i)
                    }
                    t.button("reset")
                }, function() {
                    msgError("转换失败，请稍候重试"), t.button("reset")
                }))
            })
        } else alertError({
            con: i.msg
        }), t.button("reset")
    }, function() {
        msgError("获取失败，请稍候重试"), t.button("reset")
    })
}

function ox2strDemo() {
    editor.setValue("e6aca2e8bf8ee69da5e588b062656a736f6e2e636f6d21")
}

function ox2strCheckInput() {
    var t = editor.getValue();
    return $("#charlength").text(t.length), !(t.length > 10240) || (msgError("数据不可以超过10M，否则会被屏蔽使用", function() {}), !1)
}

function ox2strHexandchar(t, e) {
    var n = editor.getValue();
    if (n.length > 10240) msgError("数据不可以超过10M，否则会被屏蔽使用", function() {});
    else if ("" != (n = n.replace(/[\\|%]\S/gi, "").replace(/\s/g, ""))) {
        e.button("loading");
        var i = bejsonHost + "Bejson/Api/HexToString/toWord";
        "d" === t && (i = bejsonHost + "Bejson/Api/hexToString/toHexadecimal"), doPost(i, {
            input: n
        }, function(t) {
            if (e.button("reset"), 200 === t.code || "200" === t.code) {
                var n = Util.charset.Base64.decode(t.data, "utf8");
                n ? editor2.setValue(n) : msgError("解密的文本有误，请检查后重试")
            } else alertError({
                con: t.msg
            })
        }, function() {
            e.button("reset"), msgError("转换失败，请稍候再试")
        })
    } else msgError("内容不能为空")
}

function decodeJsEncodeWithHex() {
    var txt1 = editor.getValue(),
        pre = "",
        other = "";
    if ("(" != (txt1 = txt1.replace('window["\\x65\\x76\\x61\\x6c"]', "eval")).substring(0, 1)) {
        var index1 = txt1.indexOf("(");
        pre = txt1.substring(0, index1), txt1 = txt1.substring(index1, txt1.length)
    }
    editor2.setValue(pre + eval("(" + txt1 + ")"))
}

function hex2String() {
    var t = editor.getValue(),
        e = t.length;
    if (e % 2 == 0) {
        for (var n = "", i = 0; i < e; i += 2) {
            var o = t.substr(i, 2),
                r = parseInt(o, 16);
            n += String.fromCharCode(r)
        }
        editor2.setValue(n)
    }
}

function GiveRGB(Hex) {
    return Value = "A" == Hex ? 10 : "B" == Hex ? 11 : "C" == Hex ? 12 : "D" == Hex ? 13 : "E" == Hex ? 14 : "F" == Hex ? 15 : eval(Hex), Value
}

function GiveHex(t) {
    return Value = 10 == t ? "A" : 11 == t ? "B" : 12 == t ? "C" : 13 == t ? "D" : 14 == t ? "E" : 15 == t ? "F" : "" + t, Value
}

function HexToRGB(t) {
    return t = t.toUpperCase(), a = GiveRGB(t.substring(0, 1)), b = GiveRGB(t.substring(1, 2)), c = GiveRGB(t.substring(2, 3)), d = GiveRGB(t.substring(3, 4)), e = GiveRGB(t.substring(4, 5)), f = GiveRGB(t.substring(5, 6)), x = 16 * a + b, y = 16 * c + d, z = 16 * e + f, (x ? x + "," : "") + (y ? y + "," : "") + (z || "")
}

function RGBToHex(t) {
    return Red = t[0], Green = t[1], Blue = t[2], a = GiveHex(Math.floor(Red / 16)), b = GiveHex(Red % 16), c = GiveHex(Math.floor(Green / 16)), d = GiveHex(Green % 16), e = GiveHex(Math.floor(Blue / 16)), f = GiveHex(Blue % 16), "NaN" === a && (a = ""), "NaN" === b && (b = ""), "NaN" === c && (c = ""), "NaN" === d && (d = ""), "NaN" === e && (e = ""), "NaN" === f && (f = ""), z = a + b + c + d + e + f, z
}

function renderLogo(t, e, n) {
    var i = new Image,
        o = t.getContext("2d");
    if (!e) return o.fillStyle = "rgb(255, 255, 255)", void o.fillRect(0, 0, 80, 80);
    i.onload = function() {
        n && n.button("reset"), $(t).data("logo", e);
        var r, a, s = i.width,
            l = i.height;
        t.width = 80, t.height = 80, o.fillStyle = "rgb(255, 255, 255)", o.fillRect(0, 0, 80, 80), (r = Math.max(s, l)) > 80 && (s *= a = 80 / r, l *= a), o.drawImage(i, (80 - s) / 2, (80 - l) / 2, s, l)
    }, i.onerror = function() {
        n && n.button("reset"), msgError("图片加载失败")
    }, i.src = e
}

function setSize(t, e, n, i, o, r) {
    $("#bitTxt").val(t), $("#bytesTxt").val(e), $("#kbTxt").val(n), $("#mbTxt").val(i), $("#gbTxt").val(o), $("#tbTxt").val(r)
}

function htm2ubb(t) {
    return t = t.replace(/<br[^>]*>/gi, "\n"), t = t.replace(/<p[^>\/]*\/>/gi, "\n"), t = t.replace(/\son[\w]{3,16}\s?=\s*([\'\"]).+?\1/gi, ""), t = t.replace(/<hr[^>]*>/gi, "[hr]"), t = t.replace(/<(sub|sup|u|strike|b|i|pre)>/gi, "[$1]"), t = t.replace(/<\/(sub|sup|u|strike|b|i|pre)>/gi, "[/$1]"), t = t.replace(/<(\/)?strong>/gi, "[$1b]"), t = t.replace(/<(\/)?em>/gi, "[$1i]"), t = t.replace(/<(\/)?blockquote([^>]*)>/gi, "[$1blockquote]"), t = t.replace(/<img[^>]*smile=\"(\d+)\"[^>]*>/gi, "[s:$1]"), t = t.replace(/<img[^>]*src=[\'\"\s]*([^\s\'\"]+)[^>]*>/gi, "[img]$1[/img]"), t = t.replace(/<a[^>]*href=[\'\"\s]*([^\s\'\"]*)[^>]*>(.+?)<\/a>/gi, "[url=$1]$2[/url]"), t = t.replace(/<[^>]*?>/gi, ""), t = t.replace(/&amp;/gi, "&"), t = t.replace(/&lt;/gi, "<"), t = t.replace(/&gt;/gi, ">"), t = t.replace(/&quot;/gi, '"')
}

function ubb2html(t) {
    return t = t.replace(/</gi, "&lt;"), t = t.replace(/>/gi, "&gt;"), t = t.replace(/\n/gi, "<br />"), t = t.replace(/\[code\](.+?)\[\/code\]/gi, function(t, e) {
        return phpcode(e)
    }), t = t.replace(/\[hr\]/gi, "<hr />"), t = t.replace(/\[\/(size|color|font|backcolor)\]/gi, "</font>"), t = t.replace(/\[(sub|sup|u|i|strike|b|blockquote|li)\]/gi, "<$1>"), t = t.replace(/\[\/(sub|sup|u|i|strike|b|blockquote|li)\]/gi, "</$1>"), t = t.replace(/\[\/align\]/gi, "</p>"), t = t.replace(/\[(\/)?h([1-6])\]/gi, "<$1h$2>"), t = t.replace(/\[align=(left|center|right|justify)\]/gi, '<p align="$1">'), t = t.replace(/\[size=(\d+?)\]/gi, '<font size="$1">'), t = t.replace(/\[color=([^\[\<]+?)\]/gi, '<font color="$1">'), t = t.replace(/\[backcolor=([^\[\<]+?)\]/gi, '<font style="background-color:$1">'), t = t.replace(/\[font=([^\[\<]+?)\]/gi, '<font face="$1">'), t = t.replace(/\[list=(a|A|1)\](.+?)\[\/list\]/gi, '<ol type="$1">$2</ol>'), t = t.replace(/\[(\/)?list\]/gi, "<$1ul>"), t = t.replace(/\[s:(\d+)\]/gi, function(t, e) {
        return smilepath(e)
    }), t = t.replace(/\[img\]([^\[]*)\[\/img\]/gi, '<img src="$1" border="0" />'), t = t.replace(/\[url=([^\]]+)\]([^\[]+)\[\/url\]/gi, '<a href="http://www.bejson.com/$1">$2</a>'), t = t.replace(/\[url\]([^\[]+)\[\/url\]/gi, '<a href="http://www.bejson.com/$1">$1</a>')
}

function htmltoubb() {
    editor2.setValue(htm2ubb(editor.getValue()))
}

function ubbtohtml() {
    editor2.setValue(ubb2html(editor.getValue()))
}

function ToFull() {
    for (var t = editor.getValue(), e = "", n = t.length, i = 0; i < n; i++) {
        var o = t.charCodeAt(i);
        o = 32 == (o = o >= 33 && o <= 126 ? o + 65248 : o) ? 12288 : o, e += String.fromCharCode(o)
    }
    e = e.replace(/\．/g, "。"), editor2.setValue(e)
}

function ToHalf() {
    for (var t = editor.getValue(), e = "", n = t.length, i = 0; i < n; i++) {
        var o = t.charCodeAt(i);
        o = 12288 == (o = o >= 65281 && o <= 65374 ? o - 65248 : o) ? 32 : o, e += String.fromCharCode(o)
    }
    e = e.replace(/\。/g, "."), editor2.setValue(e)
}

function html_2_md() {
    editor2.setValue(toMarkdown(editor.getValue()))
}

function md_2_html() {
    var t = markdown.toHTML(editor.getValue());
    editor2.setValue(t)
}

function lineToHump(t) {
    var e = t.replace(/\_(\w)/g, function(t, e) {
        return e.toUpperCase()
    });
    editor2.setValue(e)
}

function humpToLine(t) {
    var e = t.replace(/([A-Z])/g, "_$1").toLowerCase();
    editor2.setValue(e)
}

function imgHandlerQiniuUploader(t, e, n) {
    doPost(bejsonHost + "Bejson/Api/ImageHandle/upToken", {}, function(i) {
        if (200 === i.code || "200" === i.code) {
            var o = qiniu.bucket(i.data.domain, {
                    putToken: i.data.token
                }),
                r = 1e17 * Math.random(),
                a = "upload/" + r + "." + extname(e.name);
            window.imghandlerFilename = e.name, o.putFile(a, e, {
                before: function(t, e, i, o) {
                    $(n).attr("data-status", "uploading"), $(n + " .actions .file-status").attr("data-original-title", "正在上传")
                },
                progress: function(t, e, i) {
                    $(n + " .file-progress-bar").css("width", t.toFixed(2) + "%"), $(n + " .actions .file-status .text").html(t.toFixed(2) + "%")
                }
            }, function(o, s) {
                if (o) t.button("reset"), $(n).attr("data-status", "failed"), $(n + " .actions .file-status").attr("data-original-title", "失败"), $(n + " .actions .file-status .text").html("失败"), msgError("上传失败，请稍候重试");
                else {
                    $(n).attr("data-status", "sucess"), $(n + " .actions .file-status").attr("data-original-title", "成功"), $(n + " .actions .file-status .text").html("成功");
                    var l = '<div class="image-handler-box">\n                <div class="image-handler-item">\n                    <div class="image-handler-head">\n                        <div class="imghandler-size-radio">\n                            <div class="display-i-block">尺寸：</div>\n                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerSize' + n + '" id="imgHandler16' + n + '" data-size="16,16" checked="true"><label for="imgHandler16' + n + '">16*16</label></div>\n                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerSize' + n + '" id="imgHandler32' + n + '" data-size="32,32"><label for="imgHandler32' + n + '">32*32</label></div>\n                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerSize' + n + '" id="imgHandler64' + n + '" data-size="64,64"><label for="imgHandler64' + n + '">64*64</label></div>\n                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerSize' + n + '" id="imgHandler80' + n + '" data-size="80,80"><label for="imgHandler80' + n + '">80*80</label></div>\n                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerSize' + n + '" id="imgHandler100' + n + '" data-size="100,100"><label for="imgHandler100' + n + '">100*100</label></div>\n                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerSize' + n + '" id="imgHandler120' + n + '" data-size="120,120"><label for="imgHandler120' + n + '">120*120</label></div>\n                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerSize' + n + '" id="imgHandler128' + n + '" data-size="128,128"><label for="imgHandler128' + n + '">128*128</label></div>\n                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerSize' + n + '" id="imgHandler256' + n + '" data-size="256,256"><label for="imgHandler256' + n + '">256*256</label></div>\n                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerSize' + n + '" id="imgHandler512' + n + '" data-size="512,512"><label for="imgHandler512' + n + '">512*512</label></div>\n                            <div class="radio-primary display-i-block"><input type="radio" name="imgHandlerSize' + n + '" id="imgHandler0' + n + '" data-size="0,0"><label for="imgHandler0' + n + '">原大小</label></div>\n                        </div>\n                        <div class="t-big-margin imghandler-format-radio">\n                            <div class="display-i-block">格式：</div>\n                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerFormat' + n + '" id="imgHandlerJpg' + n + '" data-format="jpg" checked="true"><label for="imgHandlerJpg' + n + '">JPG</label></div>\n                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerFormat' + n + '" id="imgHandlerPng' + n + '" data-format="png"><label for="imgHandlerPng' + n + '">PNG</label></div>\n                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerFormat' + n + '" id="imgHandlerGif' + n + '" data-format="gif"><label for="imgHandlerGif' + n + '">GIF</label></div>\n                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerFormat' + n + '" id="imgHandlerWebp' + n + '" data-format="webp"><label for="imgHandlerWebp' + n + '">WEBP</label></div>\n                        </div>\n                        <button type="button" class="btn btn-success l-mini-margin image-handler-start">开始处理</button>\n                    </div>\n                    <div class="image-handler-con">\n                        <div class="relative display-none image-handler-con-div">\n                            <a href="' + a + '" target="_blank">' + a + '</a>\n                            <span class="copy">复制链接</span>\n                        </div>\n                        <img src="' + i.data.domain + "/upload/" + r + "." + extname(e.name) + '">\n                    </div>\n                </div>\n            </div>';
                    $("#imageHandlerList").prepend(l), t.button("reset")
                }
            })
        } else alertError({
            con: i.msg
        }), t.button("reset")
    }, function() {
        msgError("获取失败，请稍候重试"), t.button("reset")
    })
}

function icomakerQiniuUploader(t, e) {
    doPost(bejsonHost + "Bejson/Api/ImageHandle/upToken", {}, function(n) {
        if (200 === n.code || "200" === n.code) {
            var i = qiniu.bucket(n.data.domain, {
                    putToken: n.data.token
                }),
                o = 1e17 * Math.random(),
                r = "upload/" + o + "." + extname(t.name);
            i.putFile(r, t, {
                before: function(t, n, i, o) {
                    $(e).attr("data-status", "uploading"), $(e + " .actions .file-status").attr("data-original-title", "正在上传")
                },
                progress: function(t, n, i) {
                    $(e + " .file-progress-bar").css("width", t.toFixed(2) + "%"), $(e + " .actions .file-status .text").html(t.toFixed(2) + "%")
                }
            }, function(i, r) {
                if (i) $("#uploadIconBtn").button("reset"), $("#createFavicon").button("reset"), $(e).attr("data-status", "failed"), $(e + " .actions .file-status").attr("data-original-title", "失败"), $(e + " .actions .file-status .text").html("失败"), msgError("上传失败，请稍候重试");
                else {
                    var a = n.data.domain + "/upload/" + o + "." + extname(t.name);
                    if (a) {
                        -1 != a.indexOf("?") && (a = a.substring(0, a.indexOf("?")));
                        var s = t.name.substring(0, t.name.lastIndexOf(".")),
                            l = a + "?imageView2/1";
                        globalIcoSrc = l, $("#createFavicon").attr("data-id", e), createIcon(l, s)
                    } else msgError("请上传图片");
                    $(e).attr("data-status", "sucess"), $(e + " .actions .file-status").attr("data-original-title", "成功"), $(e + " .actions .file-status .text").html("成功"), $("#uploadIconBtn").button("reset"), $("#createFavicon").button("reset")
                }
            })
        } else alertError({
            con: n.msg
        }), $("#uploadIconBtn").button("reset"), $("#createFavicon").button("reset")
    }, function() {
        msgError("获取失败，请稍候重试"), $("#uploadIconBtn").button("reset"), $("#createFavicon").button("reset")
    })
}

function createIcon(t, e) {
    $($("#iconmakerType input[type=radio]")).each(function(e, n) {
        if ($(n).prop("checked")) {
            var i = $(n).attr("data-size").split(",")[0],
                o = $(n).attr("data-size").split(",")[1];
            t += "/w/" + i + "/h/" + o
        }
    });
    var n = (t += "/format/ico/q/100") + "&attname=" + e + ".ico",
        i = document.createElement("a"),
        o = new MouseEvent("click");
    i.download = e || "favico.icon", i.href = n, i.dispatchEvent(o)
}

function img2base64Reset() {
    var t = [],
        e = $(".waterfall li").outerWidth(!0);
    colCount = parseInt($(".waterfall").width() / e);
    for (var n = 0; n < colCount; n++) t[n] = 0;
    $(".waterfall li").each(function() {
        for (var n = t[0], i = 0, o = 0; o < colCount; o++) t[o] < n && (n = t[o], i = o);
        $(this).css({
            left: i * e,
            top: n
        }), t[i] += $(this).outerHeight(!0)
    });
    var i = t[0];
    $(t).each(function(t, e) {
        e > i && (i = e)
    }), $("#img2base54Area").height(i)
}

function shorturlChange() {
    var t = $("#shorturlContent").val();
    $("#shorturlContent").val($("#shorturlResult").val()), $("#shorturlResult").val(t)
}

function shorturlEncode() {
    doPost(bejsonHost + "Bejson/Api/ShortUrl/getShortUrl", {
        url: $("#shorturlContent").val()
    }, function(t) {
        200 === t.code || "200" === t.code ? $("#shorturlResult").val(t.data.short_url) : msgError(t.msg), $("#shorturlEncode").button("reset")
    }, function(t) {
        $("#shorturlEncode").button("reset"), msgError("获取失败，请稍候重试"), console.log(t)
    })
}

function shorturlDecode() {
    doPost(bejsonHost + "Bejson/Api/ShortUrl/restoreShortUrl", {
        url: $("#shorturlContent").val()
    }, function(t) {
        200 === t.code || "200" === t.code ? $("#shorturlResult").val(t.data.long_url) : msgError(t.msg), $("#shorturlDecode").button("reset")
    }, function(t) {
        $("#shorturlDecode").button("reset"), msgError("获取失败，请稍候重试"), console.log(t)
    })
}

function v10toX(t, e) {
    if ("" == (e = String(e).replace(/ /gi, ""))) return "";
    if (parseInt(e) != e) return jinzhiM("请输入整数！"), "";
    for (var n = "", i = jinzhiSs.substr(0, t); 0 != e;) {
        var o = e % t;
        n = i.charAt(o) + n, e = (e - o) / t
    }
    return n
}

function vXto10(n, m) {
    if ("" == (m = String(m).replace(/ /gi, ""))) return "";
    var a = jinzhiSs.substr(0, n);
    if ("" != eval("m.replace(/[" + a + "]/gi,'')")) return jinzhiM("请输入" + n + "进制数！"), "";
    for (var t = 0, c = 1, x = m.length - 1; x > -1; x--) t += c * a.indexOf(m.charAt(x)), c *= n;
    return t
}

function vXtoY(t, e, n) {
    return a = vXto10(1 * t, e), "" == a ? "" : (a = v10toX(n, a), a)
}

function jinzhiM(t) {
    0 == alert_msg_count && (msgError(t), alert_msg_count++)
}

function jinzhiConvert(t, e, n, i) {
    var o = document.getElementById(e).value,
        r = document.getElementById(i),
        a = document.getElementById(t).value,
        s = document.getElementById(n).value;
    r.value = vXtoY(a, o, s)
}

function jinzhiConvertC(t, e, n, i) {
    var o = document.getElementById(e).value;
    document.getElementById(i).value = vXtoY(t, o, n)
}

function jingzhiChange() {
    var t = $("#input_value").val();
    if ("" != (t = t.toLowerCase())) {
        var e = $("input:radio:checked").val();
        $("input[id^=base_]").each(function() {
            var n = $(this).attr("id").replace("base_", ""),
                i = vXtoY(e, t, n);
            $(this).val(i)
        }), alert_msg_count = 0
    }
}

function jinzhiPx() {
    jinzhiConvertC($("#input_num").val(), "input_value", $("#output_num").val(), "output_value")
}

function jinzhiEmpty() {
    document.getElementById("str").value = "", document.getElementById("estr").value = "", document.getElementById("str").select()
}

function uplowercase(t) {
    var e = editor.getValue();
    editor2.setValue(t ? e.toLowerCase() : e.toUpperCase())
}

function qiniuFile2PdfUploader(t, e, n) {
    doPost(bejsonHost + "Bejson/Api/ImageHandle/upToken", {}, function(i) {
        if (200 === i.code || "200" === i.code) {
            var o = qiniu.bucket(i.data.domain, {
                    putToken: i.data.token
                }),
                r = "upload/" + 1e17 * Math.random() + "." + extname(e.name);
            window.img2SvgFilename = e.name, o.putFile(r, e, {
                before: function(t, e, i, o) {
                    window.img2SvgKeystr = e, $(n).attr("data-status", "uploading"), $(n + " .actions .file-status").attr("data-original-title", "正在上传")
                },
                progress: function(t, e, i) {
                    $(n + " .file-progress-bar").css("width", t.toFixed(2) + "%"), $(n + " .actions .file-status .text").html(t.toFixed(2) + "%")
                }
            }, function(i, o) {
                console.log(o), i ? (t.button("reset"), $(n).attr("data-status", "failed"), $(n + " .actions .file-status").attr("data-original-title", "失败"), $(n + " .actions .file-status .text").html("失败"), msgError("转换失败，请稍候重试")) : ($(n).attr("data-status", "sucess"), $(n + " .actions .file-status").attr("data-original-title", "成功"), $(n + " .actions .file-status .text").html("成功"), file2PdfCheckStatus(o.persistentId, o.name, t, e))
            })
        } else alertError({
            con: i.msg
        }), t.button("reset")
    }, function() {
        msgError("获取失败，请稍候重试"), t.button("reset")
    })
}

function file2PdfCheckStatus(t, e, n, i) {
    var o = window.setInterval(function() {
        $.getJSON("//www.bejson.com/api/qiniuajax.php?id=" + t, function(t) {
            if (0 == t.code) {
                n.button("reset"), window.clearInterval(o);
                var e = i.name.lastIndexOf("."),
                    r = "<li><p>" + (i.name.slice(0, e) + ".pdf") + '</p><a class="btn btn-primary" href="http://7xkmrw.com1.z0.glb.clouddn.com/" target="_blank">预览</a><a class="btn btn-success" href="http://7xkmrw.com1.z0.glb.clouddn.com/?attname=.pdf" download target="_blank">下载</a></li>';
                $("#file2PdfList").append(r)
            }
        }, function() {
            window.clearInterval(o), msgError("转换失败，请稍候重试"), n.button("reset")
        }).error(function() {
            window.clearInterval(o), msgError("转换失败，请稍候重试"), n.button("reset")
        })
    }, 2e3)
}

function num2hzChange(t) {
    var e = $("#num2hzStr").val();
    if (t) {
        if (/[^\d^\.]+/.test(e)) return void msgError("输入格式有误");
        for (var n = "", i = 0; i < e.length; i++) {
            n += "." == (s = e.charAt(i)) ? "点" : hzf.charAt(parseInt(s))
        }
        $("#num2hzEstr").val(n), $("#num2hzRmb").show(), $("#num2hzEstr2").val(changeNumMoneyToChinese(e))
    } else {
        for (var o = "", r = e.length, i = 0; i < r; i++) {
            var a = e.charAt(i),
                s = hzf.indexOf(a); - 1 != s ? (e = e.replace(a, s), o += s) : "元" != a && "圆" != a && "点" != a || (o += ".")
        }
        $("#num2hzRmb").hide(), $("#num2hzEstr").val(o)
    }
}

function changeNumMoneyToChinese(t) {
    var e, n, i, o = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"),
        r = new Array("", "拾", "佰", "仟"),
        a = new Array("", "万", "亿", "兆"),
        s = new Array("角", "分", "毫", "厘"),
        l = "";
    if ("" == t) return "";
    if ((t = parseFloat(t)) >= 1e15) return msgError("超出最大处理数字"), "";
    if (0 == t) return l = o[0] + "圆整";
    if (-1 == (t = t.toString()).indexOf(".") ? (e = t, n = "") : (e = (i = t.split("."))[0], n = i[1].substr(0, 4)), parseInt(e, 10) > 0) {
        for (var c = 0, d = e.length, u = 0; u < d; u++) {
            var p = d - u - 1,
                h = p / 4,
                f = p % 4;
            "0" == (m = e.substr(u, 1)) ? c++ : (c > 0 && (l += o[0]), c = 0, l += o[parseInt(m)] + r[f]), 0 == f && c < 4 && (l += a[h])
        }
        l += "圆"
    }
    if ("" != n)
        for (var g = n.length, u = 0; u < g; u++) {
            var m = n.substr(u, 1);
            "0" != m && (l += o[Number(m)] + s[u])
        }
    return "" == l ? l += o[0] + "圆整" : "" == n && (l += "整"), l
}

function native2ascii() {
    for (var t = editor.getValue().split(""), e = "", n = 0; n < t.length; n++) {
        var i = Number(t[n].charCodeAt(0));
        if (!document.getElementById("ignoreLetter").checked || i > 127) {
            var o = i.toString(16);
            e += "\\u" + (o = new String("0000").substring(o.length, 4) + o)
        } else e += t[n]
    }
    editor2.setValue(e)
}

function ascii2native() {
    for (var t = editor2.getValue().split("\\u"), e = t[0], n = 1; n < t.length; n++) {
        var i = t[n];
        e += String.fromCharCode(parseInt("0x" + i.substring(0, 4))), i.length > 4 && (e += i.substring(4, i.length))
    }
    editor.setValue(e)
}

function toPyConvert() {
    var t = $("#hidesel").val(),
        e = $("#sym").prop("checked"),
        n = $("#sym1").prop("checked"),
        i = $("#sym2").prop("checked"),
        o = toPinyin({
            str: editor.getValue(),
            dz: t,
            sym: e,
            sym1: n,
            sym2: i
        });
    editor2.setValue(o)
}

function J2Fconvert(t) {
    0 == t ? editor2.setValue(jtgo(editor.getValue())) : 2 == t ? editor2.setValue(qqgo(editor.getValue())) : editor2.setValue(ftgo(editor.getValue()))
}

function softParse(e) {
    for (var n = "", i = 0; i < e.length; i++) {
        t = e[i];
        var o = "";
        if ("" != t[0]) {
            for (a = 0; a < t[2].length; a++) o += softRooturl + t[2][a] + ",";
            for (var r = "", a = 0; a < t[1].length; a++) {
                var s = t[1][a],
                    l = "" == s.name ? "下载" : s.name;
                r += '<a class="btn-success btn btn-sm l-big-margin" href="' + (-1 != s.url.indexOf("http://") || -1 != s.url.indexOf("https://") ? s.url : softRooturl + s.url) + "\" shotimg='" + o + "' class='downa' target='_blank'>" + l + "</a>"
            }
            n += '<span class="list-group-item">' + t[0] + r + "</span>"
        }
    }
    return n
}

function sql2pojoGen(t, e, n, i) {
    var o = "";
    "1" === i && (o = "bejson.com");
    var r = t;
    if (r) {
        var a = getBeanFieldFromJson(r, "", e, n),
            s = "";
        $.each(a, function(t, e) {
            var n = toBeanText(e, o);
            n = n.replace("<int>", "<Integer>").replace("<long>", "<Long>"), s += n
        }), editor2.setValue(s)
    }
}

function sql2pojoChechJavaWords(t) {
    var e = t.split("\n").join("").replace(/\s/g, "");
    e = e.split("\n").join(" ");
    for (var n = javawordsStr.split(","), i = 0; i < n.length; i++) {
        var o = n[i],
            r = '"' + o + '":',
            a = "'" + o + "':";
        if (-1 != e.indexOf(r) || -1 != e.indexOf(a)) return alertError("转换失败"), !1
    }
    return !0
}

function sql2pojo() {
    editor.getValue() ? ($("#sql2pojoSubmit").button("loading"), doPost(bejsonHost + "Bejson/Api/SqlToC/getSqlToC", {
        sql: editor.getValue().replace(/\n/g, ""),
        toCamel: $("#pojoType").val(),
        lowcase: $("#pojoLowcasedv").val(),
        useWrapper: $("#pojoPackage").val(),
        appendDefaultValue: document.getElementById("appendDefaultValue").checked ? 0 : 1,
        needStaticFiled: document.getElementById("needStaticFiled").checked
    }, function(t) {
        200 === t.code || "200" === t.code ? sql2pojoChechJavaWords(t.data) && sql2pojoGen(t.data, $("#pojoType").val(), $("#pojoLowcasedv").val(), $("#pojoPackage").val()) : alertError({
            con: t.msg
        }), $("#sql2pojoSubmit").button("reset")
    }, function() {
        msgError("请求错误"), $("#sql2pojoSubmit").button("reset")
    })) : msgError("请输入sql语句")
}

function sql2pojoOgetType(t) {
    return -1 != (t = t.toLowerCase()).indexOf("varchar") ? "String" : -1 != t.indexOf("number") || -1 != t.indexOf("int") ? "int" : -1 != t.indexOf("blob") ? "InputStream" : -1 != t.indexOf("long") ? "long" : -1 != t.indexOf("decimal") || -1 != t.indexOf("numeric") ? "double" : t
}

function sql2pojoOchange() {
    var t = editor.getValue();
    sql = t.replace(/\n/gi, ""), sql = sql.replace(/create table ([^\\(]+)+\((.*)\)/gi, "$1##$2"), sql = sql.split("##");
    sql[0].trim();
    sql = sql[1];
    var e = sql.split(","),
        n = (new Array(e.length), "");
    $(e).each(function(t) {
        if ("" != this.toString().trim()) {
            var e = this.toString().trim().split(/\s+/g);
            field = e[0], type = e[1], n += "private " + sql2pojoOgetType(type) + " " + field + ";\r\n"
        }
    }), editor2.setValue(n)
}

function sqlviewConvert() {
    editor.getValue() ? ($("#sqlviewVtable").html(""), doPost(bejsonHost + "Bejson/Api/SqlView/formatSql", {
        formatSql: editor.getValue()
    }, function(t) {
        if (200 === t.code || "200" === t.code) {
            var e = t.data;
            for (var n in e) $("#sqlviewVtable").append("<tr><td>" + n + "</td><td>" + e[n] + "</td></tr>")
        } else alertError({
            con: t.msg
        });
        $("#sqlviewCreate").button("reset")
    }, function() {
        msgError("请求错误"), $("#sqlviewCreate").button("reset")
    })) : msgError("请贴入sql代码")
}

function properties2yamlConvert() {
    doPost(bejsonHost + "Bejson/Api/Proyaml/Prop2yaml", {
        oldStr: editor.getValue()
    }, function(t) {
        200 === t.code || "200" === t.code ? editor2.setValue(t.data.replace(/↵/g, "\n")) : alertError({
            con: t.msg
        }), $("#properties2yamlConvert").button("reset")
    }, function() {
        msgError("请求失败"), $("#properties2yamlConvert").button("reset")
    })
}

function getIpinfo(t) {
    doPost(bejsonHost + "Bejson/Api/Ip/getIp", {
        ip: $("#queryIp").val()
    }, function(t) {
        if (200 === t.code || "200" === t.code) {
            var e = t.data;
            $("#country").text(e.country), $("#country_id").text(e.country_id), $("#area").text(e.location), $("#area_id").text(e.area_id), $("#region").text(e.region), $("#region_id").text(e.region_id), $("#city").text(e.city), $("#city_id").text(e.city_id), $("#county").text(e.county), $("#county_id").text(e.county_id), $("#isp").text(e.isp), $("#isp_id").text(e.isp_id)
        } else msgError(t.msg);
        $("#checkIp").button("reset"), $("#queryipBox").removeClass("loading")
    }, function() {
        msgError("获取失败，请稍候再试"), $("#checkIp").button("reset"), $("#queryipBox").removeClass("loading")
    })
}

function detectOS() {
    var t = navigator.userAgent,
        e = "Win32" === navigator.platform || "Windows" === navigator.platform,
        n = "Mac68K" === navigator.platform || "MacPPC" === navigator.platform || "Macintosh" === navigator.platform || "MacIntel" === navigator.platform;
    if (n) return "Mac";
    if ("X11" === navigator.platform && !e && !n) return "Unix";
    if (String(navigator.platform).indexOf("Linux") > -1) return "Linux";
    if (e) {
        if (t.indexOf("Windows NT 5.0") > -1 || t.indexOf("Windows 2000") > -1) return "Win2000";
        if (t.indexOf("Windows NT 5.1") > -1 || t.indexOf("Windows XP") > -1) return "WinXP";
        if (t.indexOf("Windows NT 5.2") > -1 || t.indexOf("Windows 2003") > -1) return "Win2003";
        if (t.indexOf("Windows NT 6.0") > -1 || t.indexOf("Windows Vista") > -1) return "WinVista";
        if (t.indexOf("Windows NT 6.1") > -1 || t.indexOf("Windows 7") > -1) return "Win7";
        if (t.indexOf("Windows NT 8") > -1 || t.indexOf("Windows 8") > -1) return "Win8";
        if (t.indexOf("Windows NT 10") > -1 || t.indexOf("Windows 10") > -1) return "Win10"
    }
    return "other"
}

function userAgentParseHtml(t, e) {
    for (var n = "", i = 0; i < e.length; i++) {
        var o = e[i];
        n += "<tr>", n += "<td>" + o[0] + '</td><td class="copy-agent-con">' + o[1] + '<td><button type="button" class="btn copy-agent">复制</button></td></td>', n += "</tr>"
    }
    $("#" + t).append(n)
}

function ip2int() {
    var t = $("#ip2intStr").val();
    t ? /^[1-9]([0-9\.]+\d)?$/.test(t) && 4 === (t = t.split(".")).length ? (num = 256 * Number(t[0]) * 256 * 256 + 256 * Number(t[1]) * 256 + 256 * Number(t[2]) + Number(t[3]), num >>>= 0, document.getElementById("ip2intRstr").value = num) : msgError("IP格式错误") : msgError("请输入IP")
}

function int2ip() {
    var t = $("#ip2intStr").val();
    if (t)
        if (/^\+?[1-9][0-9]*$/.test(t)) {
            var e = new Array;
            e[0] = t >>> 24 >>> 0, e[1] = t << 8 >>> 24 >>> 0, e[2] = t << 16 >>> 24, e[3] = t << 24 >>> 24, str = String(e[0]) + "." + String(e[1]) + "." + String(e[2]) + "." + String(e[3]), document.getElementById("ip2intRstr").value = str
        } else msgError("请输入正整数");
    else msgError("请输入数字")
}

function doJsBeautify() {
    var t = editor.getValue().replace(/^\s+/, ""); {
        if (t) {
            var e = document.getElementById("tabsize").value,
                n = " ";
            return 1 == e && (n = "\t"), t && "<" === t.charAt(0) ? editor.setValue(style_html(t, e, n, 80)) : editor.setValue(js_beautify(t, e, n)), !1
        }
        msgError("格式化的代码不能为空")
    }
}

function jshtmlFormatPackJs(t) {
    var e = editor.getValue().replace(/^\s+|\s+$/g, "");
    if ("" != e) {
        var n = new Packer;
        if (t) i = n.pack(e, 1, 0);
        else var i = n.pack(e, 0, 0);
        editor.setValue(i)
    } else msgError("请输入需要压缩的内容!")
}

function jshtmlFormatRechange() {
    editor.setValue(editor.getValue().replace(/document.writeln\("/g, "").replace(/"\);/g, "").replace(/\\\"/g, '"').replace(/\\\'/g, "'").replace(/\\\//g, "/").replace(/\\\\/g, "\\"))
}

function jshtmlFormatChangeIt() {
    editor.setValue('document.writeln("' + editor.getValue().replace(/\\/g, "\\\\").replace(/\\/g, "\\/").replace(/\'/g, "\\'").replace(/\"/g, '\\"').split("\n").join('");\ndocument.writeln("') + '");')
}

function jshtmlFormatChange() {
    jshtmlFormatIschange ? jshtmlFormatRechange() : jshtmlFormatChangeIt(), jshtmlFormatIschange = !jshtmlFormatIschange
}

function doJsCssBeautify() {
    document.getElementById("cssBeautify").disabled = !0;
    var t = editor.getValue().replace(/^\s+/, ""),
        e = document.getElementById("cssTableSize").value,
        n = " ";
    return 1 == e && (n = "\t"), t && "<" === t.charAt(0) ? editor.setValue(style_html(t, e, n, 80)) : editor.setValue(lCSSCoder.format(t)), document.getElementById("cssBeautify").disabled = !1, !1
}

function cssPackJs(t) {
    var e = editor.getValue().replace(/^\s+|\s+$/g, "");
    if ("" != e) {
        var n = new Packer;
        if (t) i = n.pack(e, 1, 0);
        else var i = n.pack(e, 0, 0);
        editor.setValue(i)
    } else alert("请输入需要压缩的内容!")
}

function formatCss(t) {
    editor.setValue(lCSSCoder[t](editor.getValue()))
}

function doSql2csharppojo() {
    editor.getValue() ? doPost(bejsonHost + "Bejson/Api/SqlToC/getSqlToC", {
        sql: editor.getValue().replace(/\n/g, "")
    }, function(t) {
        if (200 === t.code || "200" === t.code) {
            var e = JSON2CSharp.convert(JSON.parse(t.data));
            e = e.replace(/<br\/>/g, "\n"), $("#res").html(e), editor2.setValue($("#res").text())
        } else alertError({
            con: t.msg
        });
        $("#sql2charpCreate").button("reset")
    }, function() {
        msgError("获取失败，请稍候重试"), $("#sql2charpCreate").button("reset")
    }) : msgError("请贴入sql代码")
}! function(t, e) {
    function n(t) {
        var e = t.length,
            n = ot.type(t);
        return !ot.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)))
    }

    function i(t, n, i, o) {
        if (ot.acceptData(t)) {
            var r, a, s = ot.expando,
                l = t.nodeType,
                c = l ? ot.cache : t,
                d = l ? t[s] : t[s] && s;
            if (d && c[d] && (o || c[d].data) || i !== e || "string" != typeof n) return d || (d = l ? t[s] = Q.pop() || ot.guid++ : s), c[d] || (c[d] = l ? {} : {
                toJSON: ot.noop
            }), ("object" == typeof n || "function" == typeof n) && (o ? c[d] = ot.extend(c[d], n) : c[d].data = ot.extend(c[d].data, n)), a = c[d], o || (a.data || (a.data = {}), a = a.data), i !== e && (a[ot.camelCase(n)] = i), "string" == typeof n ? null == (r = a[n]) && (r = a[ot.camelCase(n)]) : r = a, r
        }
    }

    function o(t, e, n) {
        if (ot.acceptData(t)) {
            var i, o, r = t.nodeType,
                s = r ? ot.cache : t,
                l = r ? t[ot.expando] : ot.expando;
            if (s[l]) {
                if (e && (i = n ? s[l] : s[l].data)) {
                    ot.isArray(e) ? e = e.concat(ot.map(e, ot.camelCase)) : e in i ? e = [e] : (e = ot.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
                    for (; o--;) delete i[e[o]];
                    if (n ? !a(i) : !ot.isEmptyObject(i)) return
                }(n || (delete s[l].data, a(s[l]))) && (r ? ot.cleanData([t], !0) : ot.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null)
            }
        }
    }

    function r(t, n, i) {
        if (i === e && 1 === t.nodeType) {
            var o = "data-" + n.replace($t, "-$1").toLowerCase();
            if ("string" == typeof(i = t.getAttribute(o))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : xt.test(i) ? ot.parseJSON(i) : i)
                } catch (t) {}
                ot.data(t, n, i)
            } else i = e
        }
        return i
    }

    function a(t) {
        var e;
        for (e in t)
            if (("data" !== e || !ot.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function s() {
        return !0
    }

    function l() {
        return !1
    }

    function c() {
        try {
            return q.activeElement
        } catch (t) {}
    }

    function d(t, e) {
        do {
            t = t[e]
        } while (t && 1 !== t.nodeType);
        return t
    }

    function u(t, e, n) {
        if (ot.isFunction(e)) return ot.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return ot.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (Bt.test(e)) return ot.filter(e, t, n);
            e = ot.filter(e, t)
        }
        return ot.grep(t, function(t) {
            return ot.inArray(t, e) >= 0 !== n
        })
    }

    function p(t) {
        var e = zt.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function h(t, e) {
        return ot.nodeName(t, "table") && ot.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function f(t) {
        return t.type = (null !== ot.find.attr(t, "type")) + "/" + t.type, t
    }

    function g(t) {
        var e = Yt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function m(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) ot._data(n, "globalEval", !e || ot._data(e[i], "globalEval"))
    }

    function v(t, e) {
        if (1 === e.nodeType && ot.hasData(t)) {
            var n, i, o, r = ot._data(t),
                a = ot._data(e, r),
                s = r.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (i = 0, o = s[n].length; o > i; i++) ot.event.add(e, n, s[n][i])
            }
            a.data && (a.data = ot.extend({}, a.data))
        }
    }

    function y(t, e) {
        var n, i, o;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ot.support.noCloneEvent && e[ot.expando]) {
                o = ot._data(e);
                for (i in o.events) ot.removeEvent(e, i, o.handle);
                e.removeAttribute(ot.expando)
            }
            "script" === n && e.text !== t.text ? (f(e).text = t.text, g(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ot.support.html5Clone && t.innerHTML && !ot.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Qt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }

    function b(t, n) {
        var i, o, r = 0,
            a = typeof t.getElementsByTagName !== F ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll !== F ? t.querySelectorAll(n || "*") : e;
        if (!a)
            for (a = [], i = t.childNodes || t; null != (o = i[r]); r++) !n || ot.nodeName(o, n) ? a.push(o) : ot.merge(a, b(o, n));
        return n === e || n && ot.nodeName(t, n) ? ot.merge([t], a) : a
    }

    function x(t) {
        Qt.test(t.type) && (t.defaultChecked = t.checked)
    }

    function $(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = ve.length; o--;)
            if ((e = ve[o] + n) in t) return e;
        return i
    }

    function w(t, e) {
        return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
    }

    function _(t, e) {
        for (var n, i, o, r = [], a = 0, s = t.length; s > a; a++)(i = t[a]).style && (r[a] = ot._data(i, "olddisplay"), n = i.style.display, e ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && w(i) && (r[a] = ot._data(i, "olddisplay", T(i.nodeName)))) : r[a] || (o = w(i), (n && "none" !== n || !o) && ot._data(i, "olddisplay", o ? n : ot.css(i, "display"))));
        for (a = 0; s > a; a++)(i = t[a]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[a] || "" : "none"));
        return t
    }

    function C(t, e, n) {
        var i = de.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function k(t, e, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += ot.css(t, n + me[r], !0, o)), i ? ("content" === n && (a -= ot.css(t, "padding" + me[r], !0, o)), "margin" !== n && (a -= ot.css(t, "border" + me[r] + "Width", !0, o))) : (a += ot.css(t, "padding" + me[r], !0, o), "padding" !== n && (a += ot.css(t, "border" + me[r] + "Width", !0, o)));
        return a
    }

    function E(t, e, n) {
        var i = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = ie(t),
            a = ot.support.boxSizing && "border-box" === ot.css(t, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if ((0 > (o = oe(t, e, r)) || null == o) && (o = t.style[e]), ue.test(o)) return o;
            i = a && (ot.support.boxSizingReliable || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + k(t, e, n || (a ? "border" : "content"), i, r) + "px"
    }

    function T(t) {
        var e = q,
            n = he[t];
        return n || ("none" !== (n = S(t, e)) && n || (ne = (ne || ot("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), (e = (ne[0].contentWindow || ne[0].contentDocument).document).write("<!doctype html><html><body>"), e.close(), n = S(t, e), ne.detach()), he[t] = n), n
    }

    function S(t, e) {
        var n = ot(e.createElement(t)).appendTo(e.body),
            i = ot.css(n[0], "display");
        return n.remove(), i
    }

    function j(t, e, n, i) {
        var o;
        if (ot.isArray(e)) ot.each(e, function(e, o) {
            n || be.test(t) ? i(t, o) : j(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
        });
        else if (n || "object" !== ot.type(e)) i(t, e);
        else
            for (o in e) j(t + "[" + o + "]", e[o], n, i)
    }

    function A(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0,
                r = e.toLowerCase().match(at) || [];
            if (ot.isFunction(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function M(t, n, i, o) {
        function r(l) {
            var c;
            return a[l] = !0, ot.each(t[l] || [], function(t, l) {
                var d = l(n, i, o);
                return "string" != typeof d || s || a[d] ? s ? !(c = d) : e : (n.dataTypes.unshift(d), r(d), !1)
            }), c
        }
        var a = {},
            s = t === Le;
        return r(n.dataTypes[0]) || !a["*"] && r("*")
    }

    function I(t, n) {
        var i, o, r = ot.ajaxSettings.flatOptions || {};
        for (o in n) n[o] !== e && ((r[o] ? t : i || (i = {}))[o] = n[o]);
        return i && ot.extend(!0, t, i), t
    }

    function N() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    }

    function D() {
        return setTimeout(function() {
            Re = e
        }), Re = ot.now()
    }

    function L(t, e, n) {
        for (var i, o = (Qe[e] || []).concat(Qe["*"]), r = 0, a = o.length; a > r; r++)
            if (i = o[r].call(n, e, t)) return i
    }

    function B(t, e, n) {
        var i, o, r = 0,
            a = Ge.length,
            s = ot.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = Re || D(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), r = 0, a = c.tweens.length; a > r; r++) c.tweens[r].run(i);
                return s.notifyWith(t, [c, i, n]), 1 > i && a ? n : (s.resolveWith(t, [c]), !1)
            },
            c = s.promise({
                elem: t,
                props: ot.extend({}, e),
                opts: ot.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Re || D(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = ot.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) c.tweens[n].run(1);
                    return e ? s.resolveWith(t, [c, e]) : s.rejectWith(t, [c, e]), this
                }
            }),
            d = c.props;
        for (function(t, e) {
                var n, i, o, r, a;
                for (n in t)
                    if (i = ot.camelCase(n), o = e[i], r = t[n], ot.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (a = ot.cssHooks[i]) && "expand" in a) {
                        r = a.expand(r), delete t[i];
                        for (n in r) n in t || (t[n] = r[n], e[n] = o)
                    } else e[i] = o
            }(d, c.opts.specialEasing); a > r; r++)
            if (i = Ge[r].call(c, t, d, c.opts)) return i;
        return ot.map(d, L, c), ot.isFunction(c.opts.start) && c.opts.start.call(t, c), ot.fx.timer(ot.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function P(t, e, n, i, o) {
        return new P.prototype.init(t, e, n, i, o)
    }

    function H(t, e) {
        var n, i = {
                height: t
            },
            o = 0;
        for (e = e ? 1 : 0; 4 > o; o += 2 - e) n = me[o], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function O(t) {
        return ot.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var z, V, F = typeof e,
        R = t.location,
        q = t.document,
        W = q.documentElement,
        U = t.jQuery,
        J = t.$,
        G = {},
        Q = [],
        X = "1.10.2",
        K = Q.concat,
        Y = Q.push,
        Z = Q.slice,
        tt = Q.indexOf,
        et = G.toString,
        nt = G.hasOwnProperty,
        it = X.trim,
        ot = function(t, e) {
            return new ot.fn.init(t, e, V)
        },
        rt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        at = /\S+/g,
        st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ct = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        dt = /^[\],:{}\s]*$/,
        ut = /(?:^|:|,)(?:\s*\[)+/g,
        pt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        ht = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        ft = /^-ms-/,
        gt = /-([\da-z])/gi,
        mt = function(t, e) {
            return e.toUpperCase()
        },
        vt = function(t) {
            (q.addEventListener || "load" === t.type || "complete" === q.readyState) && (yt(), ot.ready())
        },
        yt = function() {
            q.addEventListener ? (q.removeEventListener("DOMContentLoaded", vt, !1), t.removeEventListener("load", vt, !1)) : (q.detachEvent("onreadystatechange", vt), t.detachEvent("onload", vt))
        };
    ot.fn = ot.prototype = {
            jquery: X,
            constructor: ot,
            init: function(t, n, i) {
                var o, r;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (!(o = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : lt.exec(t)) || !o[1] && n) return !n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t);
                    if (o[1]) {
                        if (n = n instanceof ot ? n[0] : n, ot.merge(this, ot.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : q, !0)), ct.test(o[1]) && ot.isPlainObject(n))
                            for (o in n) ot.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                        return this
                    }
                    if ((r = q.getElementById(o[2])) && r.parentNode) {
                        if (r.id !== o[2]) return i.find(t);
                        this.length = 1, this[0] = r
                    }
                    return this.context = q, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
            },
            selector: "",
            length: 0,
            toArray: function() {
                return Z.call(this)
            },
            get: function(t) {
                return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
            },
            pushStack: function(t) {
                var e = ot.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return ot.each(this, t, e)
            },
            ready: function(t) {
                return ot.ready.promise().done(t), this
            },
            slice: function() {
                return this.pushStack(Z.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            map: function(t) {
                return this.pushStack(ot.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: Y,
            sort: [].sort,
            splice: [].splice
        }, ot.fn.init.prototype = ot.fn, ot.extend = ot.fn.extend = function() {
            var t, n, i, o, r, a, s = arguments[0] || {},
                l = 1,
                c = arguments.length,
                d = !1;
            for ("boolean" == typeof s && (d = s, s = arguments[1] || {}, l = 2), "object" == typeof s || ot.isFunction(s) || (s = {}), c === l && (s = this, --l); c > l; l++)
                if (null != (r = arguments[l]))
                    for (o in r) t = s[o], i = r[o], s !== i && (d && i && (ot.isPlainObject(i) || (n = ot.isArray(i))) ? (n ? (n = !1, a = t && ot.isArray(t) ? t : []) : a = t && ot.isPlainObject(t) ? t : {}, s[o] = ot.extend(d, a, i)) : i !== e && (s[o] = i));
            return s
        }, ot.extend({
            expando: "jQuery" + (X + Math.random()).replace(/\D/g, ""),
            noConflict: function(e) {
                return t.$ === ot && (t.$ = J), e && t.jQuery === ot && (t.jQuery = U), ot
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? ot.readyWait++ : ot.ready(!0)
            },
            ready: function(t) {
                if (!0 === t ? !--ot.readyWait : !ot.isReady) {
                    if (!q.body) return setTimeout(ot.ready);
                    ot.isReady = !0, !0 !== t && --ot.readyWait > 0 || (z.resolveWith(q, [ot]), ot.fn.trigger && ot(q).trigger("ready").off("ready"))
                }
            },
            isFunction: function(t) {
                return "function" === ot.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === ot.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? G[et.call(t)] || "object" : typeof t
            },
            isPlainObject: function(t) {
                var n;
                if (!t || "object" !== ot.type(t) || t.nodeType || ot.isWindow(t)) return !1;
                try {
                    if (t.constructor && !nt.call(t, "constructor") && !nt.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (t) {
                    return !1
                }
                if (ot.support.ownLast)
                    for (n in t) return nt.call(t, n);
                for (n in t);
                return n === e || nt.call(t, n)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            error: function(t) {
                throw Error(t)
            },
            parseHTML: function(t, e, n) {
                if (!t || "string" != typeof t) return null;
                "boolean" == typeof e && (n = e, e = !1), e = e || q;
                var i = ct.exec(t),
                    o = !n && [];
                return i ? [e.createElement(i[1])] : (i = ot.buildFragment([t], e, o), o && ot(o).remove(), ot.merge([], i.childNodes))
            },
            parseJSON: function(n) {
                return t.JSON && t.JSON.parse ? t.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ot.trim(n)) && dt.test(n.replace(pt, "@").replace(ht, "]").replace(ut, "")) ? Function("return " + n)() : (ot.error("Invalid JSON: " + n), e)
            },
            parseXML: function(n) {
                var i, o;
                if (!n || "string" != typeof n) return null;
                try {
                    t.DOMParser ? (o = new DOMParser, i = o.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                } catch (t) {
                    i = e
                }
                return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + n), i
            },
            noop: function() {},
            globalEval: function(e) {
                e && ot.trim(e) && (t.execScript || function(e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function(t) {
                return t.replace(ft, "ms-").replace(gt, mt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, i) {
                var o = 0,
                    r = t.length,
                    a = n(t);
                if (i) {
                    if (a)
                        for (; r > o && !1 !== e.apply(t[o], i); o++);
                    else
                        for (o in t)
                            if (!1 === e.apply(t[o], i)) break
                } else if (a)
                    for (; r > o && !1 !== e.call(t[o], o, t[o]); o++);
                else
                    for (o in t)
                        if (!1 === e.call(t[o], o, t[o])) break;
                return t
            },
            trim: it && !it.call("\ufeff ") ? function(t) {
                return null == t ? "" : it.call(t)
            } : function(t) {
                return null == t ? "" : (t + "").replace(st, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? ot.merge(i, "string" == typeof t ? [t] : t) : Y.call(i, t)), i
            },
            inArray: function(t, e, n) {
                var i;
                if (e) {
                    if (tt) return tt.call(e, t, n);
                    for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in e && e[n] === t) return n
                }
                return -1
            },
            merge: function(t, n) {
                var i = n.length,
                    o = t.length,
                    r = 0;
                if ("number" == typeof i)
                    for (; i > r; r++) t[o++] = n[r];
                else
                    for (; n[r] !== e;) t[o++] = n[r++];
                return t.length = o, t
            },
            grep: function(t, e, n) {
                var i, o = [],
                    r = 0,
                    a = t.length;
                for (n = !!n; a > r; r++) i = !!e(t[r], r), n !== i && o.push(t[r]);
                return o
            },
            map: function(t, e, i) {
                var o, r = 0,
                    a = t.length,
                    s = [];
                if (n(t))
                    for (; a > r; r++) null != (o = e(t[r], r, i)) && (s[s.length] = o);
                else
                    for (r in t) null != (o = e(t[r], r, i)) && (s[s.length] = o);
                return K.apply([], s)
            },
            guid: 1,
            proxy: function(t, n) {
                var i, o, r;
                return "string" == typeof n && (r = t[n], n = t, t = r), ot.isFunction(t) ? (i = Z.call(arguments, 2), o = function() {
                    return t.apply(n || this, i.concat(Z.call(arguments)))
                }, o.guid = t.guid = t.guid || ot.guid++, o) : e
            },
            access: function(t, n, i, o, r, a, s) {
                var l = 0,
                    c = t.length,
                    d = null == i;
                if ("object" === ot.type(i)) {
                    r = !0;
                    for (l in i) ot.access(t, n, l, i[l], !0, a, s)
                } else if (o !== e && (r = !0, ot.isFunction(o) || (s = !0), d && (s ? (n.call(t, o), n = null) : (d = n, n = function(t, e, n) {
                        return d.call(ot(t), n)
                    })), n))
                    for (; c > l; l++) n(t[l], i, s ? o : o.call(t[l], l, n(t[l], i)));
                return r ? t : d ? n.call(t) : c ? n(t[0], i) : a
            },
            now: function() {
                return (new Date).getTime()
            },
            swap: function(t, e, n, i) {
                var o, r, a = {};
                for (r in e) a[r] = t.style[r], t.style[r] = e[r];
                o = n.apply(t, i || []);
                for (r in e) t.style[r] = a[r];
                return o
            }
        }), ot.ready.promise = function(e) {
            if (!z)
                if (z = ot.Deferred(), "complete" === q.readyState) setTimeout(ot.ready);
                else if (q.addEventListener) q.addEventListener("DOMContentLoaded", vt, !1), t.addEventListener("load", vt, !1);
            else {
                q.attachEvent("onreadystatechange", vt), t.attachEvent("onload", vt);
                var n = !1;
                try {
                    n = null == t.frameElement && q.documentElement
                } catch (t) {}
                n && n.doScroll && function t() {
                    if (!ot.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(t, 50)
                        }
                        yt(), ot.ready()
                    }
                }()
            }
            return z.promise(e)
        }, ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            G["[object " + e + "]"] = e.toLowerCase()
        }), V = ot(q),
        function(t, e) {
            function n(t, e, n, i) {
                var o, r, a, s, l, c, d, u, f, g;
                if ((e ? e.ownerDocument || e : O) !== M && A(e), e = e || M, n = n || [], !t || "string" != typeof t) return n;
                if (1 !== (s = e.nodeType) && 9 !== s) return [];
                if (N && !i) {
                    if (o = yt.exec(t))
                        if (a = o[1]) {
                            if (9 === s) {
                                if (!(r = e.getElementById(a)) || !r.parentNode) return n;
                                if (r.id === a) return n.push(r), n
                            } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(a)) && P(e, r) && r.id === a) return n.push(r), n
                        } else {
                            if (o[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
                            if ((a = o[3]) && w.getElementsByClassName && e.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(a)), n
                        } if (w.qsa && (!D || !D.test(t))) {
                        if (u = d = H, f = e, g = 9 === s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                            for (c = p(t), (d = e.getAttribute("id")) ? u = d.replace($t, "\\$&") : e.setAttribute("id", u), u = "[id='" + u + "'] ", l = c.length; l--;) c[l] = u + h(c[l]);
                            f = pt.test(t) && e.parentNode || e, g = c.join(",")
                        }
                        if (g) try {
                            return Z.apply(n, f.querySelectorAll(g)), n
                        } catch (t) {} finally {
                            d || e.removeAttribute("id")
                        }
                    }
                }
                return x(t.replace(ct, "$1"), e, n, i)
            }

            function i() {
                function t(n, i) {
                    return e.push(n += " ") > C.cacheLength && delete t[e.shift()], t[n] = i
                }
                var e = [];
                return t
            }

            function o(t) {
                return t[H] = !0, t
            }

            function r(t) {
                var e = M.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function a(t, e) {
                for (var n = t.split("|"), i = t.length; i--;) C.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function l(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function c(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function d(t) {
                return o(function(e) {
                    return e = +e, o(function(n, i) {
                        for (var o, r = t([], n.length, e), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function u() {}

            function p(t, e) {
                var i, o, r, a, s, l, c, d = R[t + " "];
                if (d) return e ? 0 : d.slice(0);
                for (s = t, l = [], c = C.preFilter; s;) {
                    (!i || (o = dt.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = ut.exec(s)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(ct, " ")
                    }), s = s.slice(i.length));
                    for (a in C.filter) !(o = mt[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: a,
                        matches: o
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return e ? s.length : s ? n.error(t) : R(t, l).slice(0)
            }

            function h(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i
            }

            function f(t, e, n) {
                var i = e.dir,
                    o = n && "parentNode" === i,
                    r = V++;
                return e.first ? function(e, n, r) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) return t(e, n, r)
                } : function(e, n, a) {
                    var s, l, c, d = z + " " + r;
                    if (a) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || o) && t(e, n, a)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || o)
                                if (c = e[H] || (e[H] = {}), (l = c[i]) && l[0] === d) {
                                    if (!0 === (s = l[1]) || s === _) return !0 === s
                                } else if (l = c[i] = [d], l[1] = t(e, n, a) || _, !0 === l[1]) return !0
                }
            }

            function g(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, e, n, i, o) {
                for (var r, a = [], s = 0, l = t.length, c = null != e; l > s; s++)(r = t[s]) && (!n || n(r, i, o)) && (a.push(r), c && e.push(s));
                return a
            }

            function v(t, e, i, r, a, s) {
                return r && !r[H] && (r = v(r)), a && !a[H] && (a = v(a, s)), o(function(o, s, l, c) {
                    var d, u, p, h = [],
                        f = [],
                        g = s.length,
                        v = o || function(t, e, i) {
                            for (var o = 0, r = e.length; r > o; o++) n(t, e[o], i);
                            return i
                        }(e || "*", l.nodeType ? [l] : l, []),
                        y = !t || !o && e ? v : m(v, h, t, l, c),
                        b = i ? a || (o ? t : g || r) ? [] : s : y;
                    if (i && i(y, b, l, c), r)
                        for (d = m(b, f), r(d, [], l, c), u = d.length; u--;)(p = d[u]) && (b[f[u]] = !(y[f[u]] = p));
                    if (o) {
                        if (a || t) {
                            if (a) {
                                for (d = [], u = b.length; u--;)(p = b[u]) && d.push(y[u] = p);
                                a(null, b = [], d, c)
                            }
                            for (u = b.length; u--;)(p = b[u]) && (d = a ? et.call(o, p) : h[u]) > -1 && (o[d] = !(s[d] = p))
                        }
                    } else b = m(b === s ? b.splice(g, b.length) : b), a ? a(null, s, b, c) : Z.apply(s, b)
                })
            }

            function y(t) {
                for (var e, n, i, o = t.length, r = C.relative[t[0].type], a = r || C.relative[" "], s = r ? 1 : 0, l = f(function(t) {
                        return t === e
                    }, a, !0), c = f(function(t) {
                        return et.call(e, t) > -1
                    }, a, !0), d = [function(t, n, i) {
                        return !r && (i || n !== S) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i))
                    }]; o > s; s++)
                    if (n = C.relative[t[s].type]) d = [f(g(d), n)];
                    else {
                        if ((n = C.filter[t[s].type].apply(null, t[s].matches))[H]) {
                            for (i = ++s; o > i && !C.relative[t[i].type]; i++);
                            return v(s > 1 && g(d), s > 1 && h(t.slice(0, s - 1).concat({
                                value: " " === t[s - 2].type ? "*" : ""
                            })).replace(ct, "$1"), n, i > s && y(t.slice(s, i)), o > i && y(t = t.slice(i)), o > i && h(t))
                        }
                        d.push(n)
                    } return g(d)
            }

            function b(t, e) {
                var i = 0,
                    r = e.length > 0,
                    a = t.length > 0,
                    s = function(o, s, l, c, d) {
                        var u, p, h, f = [],
                            g = 0,
                            v = "0",
                            y = o && [],
                            b = null != d,
                            x = S,
                            $ = o || a && C.find.TAG("*", d && s.parentNode || s),
                            w = z += null == x ? 1 : Math.random() || .1;
                        for (b && (S = s !== M && s, _ = i); null != (u = $[v]); v++) {
                            if (a && u) {
                                for (p = 0; h = t[p++];)
                                    if (h(u, s, l)) {
                                        c.push(u);
                                        break
                                    } b && (z = w, _ = ++i)
                            }
                            r && ((u = !h && u) && g--, o && y.push(u))
                        }
                        if (g += v, r && v !== g) {
                            for (p = 0; h = e[p++];) h(y, f, s, l);
                            if (o) {
                                if (g > 0)
                                    for (; v--;) y[v] || f[v] || (f[v] = K.call(c));
                                f = m(f)
                            }
                            Z.apply(c, f), b && !o && f.length > 0 && g + e.length > 1 && n.uniqueSort(c)
                        }
                        return b && (z = w, S = x), y
                    };
                return r ? o(s) : s
            }

            function x(t, e, n, i) {
                var o, r, a, s, l, c = p(t);
                if (!i && 1 === c.length) {
                    if ((r = c[0] = c[0].slice(0)).length > 2 && "ID" === (a = r[0]).type && w.getById && 9 === e.nodeType && N && C.relative[r[1].type]) {
                        if (!(e = (C.find.ID(a.matches[0].replace(wt, _t), e) || [])[0])) return n;
                        t = t.slice(r.shift().value.length)
                    }
                    for (o = mt.needsContext.test(t) ? 0 : r.length; o-- && (a = r[o], !C.relative[s = a.type]);)
                        if ((l = C.find[s]) && (i = l(a.matches[0].replace(wt, _t), pt.test(r[0].type) && e.parentNode || e))) {
                            if (r.splice(o, 1), !(t = i.length && h(r))) return Z.apply(n, i), n;
                            break
                        }
                }
                return T(t, c)(i, e, !N, n, pt.test(t)), n
            }
            var $, w, _, C, k, E, T, S, j, A, M, I, N, D, L, B, P, H = "sizzle" + -new Date,
                O = t.document,
                z = 0,
                V = 0,
                F = i(),
                R = i(),
                q = i(),
                W = !1,
                U = function(t, e) {
                    return t === e ? (W = !0, 0) : 0
                },
                J = typeof e,
                G = 1 << 31,
                Q = {}.hasOwnProperty,
                X = [],
                K = X.pop,
                Y = X.push,
                Z = X.push,
                tt = X.slice,
                et = X.indexOf || function(t) {
                    for (var e = 0, n = this.length; n > e; e++)
                        if (this[e] === t) return e;
                    return -1
                },
                nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]",
                rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                at = rt.replace("w", "w#"),
                st = "\\[" + it + "*(" + rt + ")" + it + "*(?:([*^$|!~]?=)" + it + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + it + "*\\]",
                lt = ":(" + rt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + st.replace(3, 8) + ")*)|.*)\\)|)",
                ct = RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                dt = RegExp("^" + it + "*," + it + "*"),
                ut = RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                pt = RegExp(it + "*[+~]"),
                ht = RegExp("=" + it + "*([^\\]'\"]*)" + it + "*\\]", "g"),
                ft = RegExp(lt),
                gt = RegExp("^" + at + "$"),
                mt = {
                    ID: RegExp("^#(" + rt + ")"),
                    CLASS: RegExp("^\\.(" + rt + ")"),
                    TAG: RegExp("^(" + rt.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + st),
                    PSEUDO: RegExp("^" + lt),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + nt + ")$", "i"),
                    needsContext: RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                },
                vt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                bt = /^(?:input|select|textarea|button)$/i,
                xt = /^h\d$/i,
                $t = /'|\\/g,
                wt = RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                _t = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i != i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                };
            try {
                Z.apply(X = tt.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
            } catch (t) {
                Z = {
                    apply: X.length ? function(t, e) {
                        Y.apply(t, tt.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            E = n.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, w = n.support = {}, A = n.setDocument = function(t) {
                var n = t ? t.ownerDocument || t : O,
                    i = n.defaultView;
                return n !== M && 9 === n.nodeType && n.documentElement ? (M = n, I = n.documentElement, N = !E(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                    A()
                }), w.attributes = r(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = r(function(t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = r(function(t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                }), w.getById = r(function(t) {
                    return I.appendChild(t).id = H, !n.getElementsByName || !n.getElementsByName(H).length
                }), w.getById ? (C.find.ID = function(t, e) {
                    if (typeof e.getElementById !== J && N) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, C.filter.ID = function(t) {
                    var e = t.replace(wt, _t);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete C.find.ID, C.filter.ID = function(t) {
                    var e = t.replace(wt, _t);
                    return function(t) {
                        var n = typeof t.getAttributeNode !== J && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), C.find.TAG = w.getElementsByTagName ? function(t, n) {
                    return typeof n.getElementsByTagName !== J ? n.getElementsByTagName(t) : e
                } : function(t, e) {
                    var n, i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, C.find.CLASS = w.getElementsByClassName && function(t, n) {
                    return typeof n.getElementsByClassName !== J && N ? n.getElementsByClassName(t) : e
                }, L = [], D = [], (w.qsa = vt.test(n.querySelectorAll)) && (r(function(t) {
                    t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || D.push("\\[" + it + "*(?:value|" + nt + ")"), t.querySelectorAll(":checked").length || D.push(":checked")
                }), r(function(t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && D.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), D.push(",.*:")
                })), (w.matchesSelector = vt.test(B = I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && r(function(t) {
                    w.disconnectedMatch = B.call(t, "div"), B.call(t, "[s!='']:x"), L.push("!=", lt)
                }), D = D.length && RegExp(D.join("|")), L = L.length && RegExp(L.join("|")), P = vt.test(I.contains) || I.compareDocumentPosition ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, U = I.compareDocumentPosition ? function(t, e) {
                    if (t === e) return W = !0, 0;
                    var i = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e);
                    return i ? 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || P(O, t) ? -1 : e === n || P(O, e) ? 1 : j ? et.call(j, t) - et.call(j, e) : 0 : 4 & i ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                } : function(t, e) {
                    var i, o = 0,
                        r = t.parentNode,
                        a = e.parentNode,
                        l = [t],
                        c = [e];
                    if (t === e) return W = !0, 0;
                    if (!r || !a) return t === n ? -1 : e === n ? 1 : r ? -1 : a ? 1 : j ? et.call(j, t) - et.call(j, e) : 0;
                    if (r === a) return s(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) c.unshift(i);
                    for (; l[o] === c[o];) o++;
                    return o ? s(l[o], c[o]) : l[o] === O ? -1 : c[o] === O ? 1 : 0
                }, n) : M
            }, n.matches = function(t, e) {
                return n(t, null, null, e)
            }, n.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== M && A(t), e = e.replace(ht, "='$1']"), !(!w.matchesSelector || !N || L && L.test(e) || D && D.test(e))) try {
                    var i = B.call(t, e);
                    if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {}
                return n(e, M, null, [t]).length > 0
            }, n.contains = function(t, e) {
                return (t.ownerDocument || t) !== M && A(t), P(t, e)
            }, n.attr = function(t, n) {
                (t.ownerDocument || t) !== M && A(t);
                var i = C.attrHandle[n.toLowerCase()],
                    o = i && Q.call(C.attrHandle, n.toLowerCase()) ? i(t, n, !N) : e;
                return o === e ? w.attributes || !N ? t.getAttribute(n) : (o = t.getAttributeNode(n)) && o.specified ? o.value : null : o
            }, n.error = function(t) {
                throw Error("Syntax error, unrecognized expression: " + t)
            }, n.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    o = 0;
                if (W = !w.detectDuplicates, j = !w.sortStable && t.slice(0), t.sort(U), W) {
                    for (; e = t[o++];) e === t[o] && (i = n.push(o));
                    for (; i--;) t.splice(n[i], 1)
                }
                return t
            }, k = n.getText = function(t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += k(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i]; i++) n += k(e);
                return n
            }, (C = n.selectors = {
                cacheLength: 50,
                createPseudo: o,
                match: mt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(wt, _t), t[3] = (t[4] || t[5] || "").replace(wt, _t), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || n.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && n.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var n, i = !t[5] && t[2];
                        return mt.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : i && ft.test(i) && (n = p(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (t[0] = t[0].slice(0, n), t[2] = i.slice(0, n)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(wt, _t).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = F[t + " "];
                        return e || (e = RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && F(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== J && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, i) {
                        return function(o) {
                            var r = n.attr(o, t);
                            return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === i : "!=" === e ? r !== i : "^=" === e ? i && 0 === r.indexOf(i) : "*=" === e ? i && r.indexOf(i) > -1 : "$=" === e ? i && r.slice(-i.length) === i : "~=" === e ? (" " + r + " ").indexOf(i) > -1 : "|=" === e && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3),
                            a = "last" !== t.slice(-4),
                            s = "of-type" === e;
                        return 1 === i && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var c, d, u, p, h, f, g = r !== a ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = s && e.nodeName.toLowerCase(),
                                y = !l && !s;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (u = e; u = u[g];)
                                            if (s ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                        f = g = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (h = (c = (d = m[H] || (m[H] = {}))[t] || [])[0] === z && c[1], p = c[0] === z && c[2], u = h && m.childNodes[h]; u = ++h && u && u[g] || (p = h = 0) || f.pop();)
                                        if (1 === u.nodeType && ++p && u === e) {
                                            d[t] = [z, h, p];
                                            break
                                        }
                                } else if (y && (c = (e[H] || (e[H] = {}))[t]) && c[0] === z) p = c[1];
                                else
                                    for (;
                                        (u = ++h && u && u[g] || (p = h = 0) || f.pop()) && ((s ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++p || (y && ((u[H] || (u[H] = {}))[t] = [z, p]), u !== e)););
                                return (p -= o) === i || 0 == p % i && p / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var i, r = C.pseudos[t] || C.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
                        return r[H] ? r(e) : r.length > 1 ? (i = [t, t, "", e], C.setFilters.hasOwnProperty(t.toLowerCase()) ? o(function(t, n) {
                            for (var i, o = r(t, e), a = o.length; a--;) i = et.call(t, o[a]), t[i] = !(n[i] = o[a])
                        }) : function(t) {
                            return r(t, 0, i)
                        }) : r
                    }
                },
                pseudos: {
                    not: o(function(t) {
                        var e = [],
                            n = [],
                            i = T(t.replace(ct, "$1"));
                        return i[H] ? o(function(t, e, n, o) {
                            for (var r, a = i(t, null, o, []), s = t.length; s--;)(r = a[s]) && (t[s] = !(e[s] = r))
                        }) : function(t, o, r) {
                            return e[0] = t, i(e, null, r, n), !n.pop()
                        }
                    }),
                    has: o(function(t) {
                        return function(e) {
                            return n(t, e).length > 0
                        }
                    }),
                    contains: o(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                        }
                    }),
                    lang: o(function(t) {
                        return gt.test(t || "") || n.error("unsupported lang: " + t), t = t.replace(wt, _t).toLowerCase(),
                            function(e) {
                                var n;
                                do {
                                    if (n = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === I
                    },
                    focus: function(t) {
                        return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return !1 === t.disabled
                    },
                    disabled: function(t) {
                        return !0 === t.disabled
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !C.pseudos.empty(t)
                    },
                    header: function(t) {
                        return xt.test(t.nodeName)
                    },
                    input: function(t) {
                        return bt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                    },
                    first: d(function() {
                        return [0]
                    }),
                    last: d(function(t, e) {
                        return [e - 1]
                    }),
                    eq: d(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: d(function(t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: d(function(t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: d(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: d(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; e > ++i;) t.push(i);
                        return t
                    })
                }
            }).pseudos.nth = C.pseudos.eq;
            for ($ in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) C.pseudos[$] = l($);
            for ($ in {
                    submit: !0,
                    reset: !0
                }) C.pseudos[$] = c($);
            u.prototype = C.filters = C.pseudos, C.setFilters = new u, T = n.compile = function(t, e) {
                var n, i = [],
                    o = [],
                    r = q[t + " "];
                if (!r) {
                    for (e || (e = p(t)), n = e.length; n--;)(r = y(e[n]))[H] ? i.push(r) : o.push(r);
                    r = q(t, b(o, i))
                }
                return r
            }, w.sortStable = H.split("").sort(U).join("") === H, w.detectDuplicates = W, A(), w.sortDetached = r(function(t) {
                return 1 & t.compareDocumentPosition(M.createElement("div"))
            }), r(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || a("type|href|height|width", function(t, n, i) {
                return i ? e : t.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
            }), w.attributes && r(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || a("value", function(t, n, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? e : t.defaultValue
            }), r(function(t) {
                return null == t.getAttribute("disabled")
            }) || a(nt, function(t, n, i) {
                var o;
                return i ? e : (o = t.getAttributeNode(n)) && o.specified ? o.value : !0 === t[n] ? n.toLowerCase() : null
            }), ot.find = n, ot.expr = n.selectors, ot.expr[":"] = ot.expr.pseudos, ot.unique = n.uniqueSort, ot.text = n.getText, ot.isXMLDoc = n.isXML, ot.contains = n.contains
        }(t);
    var bt = {};
    ot.Callbacks = function(t) {
        var n, i, o, r, a, s, l = [],
            c = !(t = "string" == typeof t ? bt[t] || function(t) {
                var e = bt[t] = {};
                return ot.each(t.match(at) || [], function(t, n) {
                    e[n] = !0
                }), e
            }(t) : ot.extend({}, t)).once && [],
            d = function(e) {
                for (i = t.memory && e, o = !0, a = s || 0, s = 0, r = l.length, n = !0; l && r > a; a++)
                    if (!1 === l[a].apply(e[0], e[1]) && t.stopOnFalse) {
                        i = !1;
                        break
                    } n = !1, l && (c ? c.length && d(c.shift()) : i ? l = [] : u.disable())
            },
            u = {
                add: function() {
                    if (l) {
                        var e = l.length;
                        (function e(n) {
                            ot.each(n, function(n, i) {
                                var o = ot.type(i);
                                "function" === o ? t.unique && u.has(i) || l.push(i) : i && i.length && "string" !== o && e(i)
                            })
                        })(arguments), n ? r = l.length : i && (s = e, d(i))
                    }
                    return this
                },
                remove: function() {
                    return l && ot.each(arguments, function(t, e) {
                        for (var i;
                            (i = ot.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (r >= i && r--, a >= i && a--)
                    }), this
                },
                has: function(t) {
                    return t ? ot.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], r = 0, this
                },
                disable: function() {
                    return l = c = i = e, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = e, i || u.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(t, e) {
                    return !l || o && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? c.push(e) : d(e)), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return u
    }, ot.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ot.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return ot.Deferred(function(n) {
                            ot.each(e, function(e, r) {
                                var a = r[0],
                                    s = ot.isFunction(t[e]) && t[e];
                                o[r[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && ot.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? ot.extend(t, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, ot.each(e, function(t, r) {
                var a = r[2],
                    s = r[3];
                i[r[1]] = a.add, s && a.add(function() {
                    n = s
                }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(t) {
            var e, n, i, o = 0,
                r = Z.call(arguments),
                a = r.length,
                s = 1 !== a || t && ot.isFunction(t.promise) ? a : 0,
                l = 1 === s ? t : ot.Deferred(),
                c = function(t, n, i) {
                    return function(o) {
                        n[t] = this, i[t] = arguments.length > 1 ? Z.call(arguments) : o, i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (e = Array(a), n = Array(a), i = Array(a); a > o; o++) r[o] && ot.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, e)) : --s;
            return s || l.resolveWith(i, r), l.promise()
        }
    }), ot.support = function(e) {
        var n, i, o, r, a, s, l, c, d, u = q.createElement("div");
        if (u.setAttribute("className", "t"), u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = u.getElementsByTagName("*") || [], !(i = u.getElementsByTagName("a")[0]) || !i.style || !n.length) return e;
        s = (r = q.createElement("select")).appendChild(q.createElement("option")), o = u.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", e.getSetAttribute = "t" !== u.className, e.leadingWhitespace = 3 === u.firstChild.nodeType, e.tbody = !u.getElementsByTagName("tbody").length, e.htmlSerialize = !!u.getElementsByTagName("link").length, e.style = /top/.test(i.getAttribute("style")), e.hrefNormalized = "/a" === i.getAttribute("href"), e.opacity = /^0.5/.test(i.style.opacity), e.cssFloat = !!i.style.cssFloat, e.checkOn = !!o.value, e.optSelected = s.selected, e.enctype = !!q.createElement("form").enctype, e.html5Clone = "<:nav></:nav>" !== q.createElement("nav").cloneNode(!0).outerHTML, e.inlineBlockNeedsLayout = !1, e.shrinkWrapBlocks = !1, e.pixelPosition = !1, e.deleteExpando = !0, e.noCloneEvent = !0, e.reliableMarginRight = !0, e.boxSizingReliable = !0, o.checked = !0, e.noCloneChecked = o.cloneNode(!0).checked, r.disabled = !0, e.optDisabled = !s.disabled;
        try {
            delete u.test
        } catch (t) {
            e.deleteExpando = !1
        }(o = q.createElement("input")).setAttribute("value", ""), e.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), e.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), (a = q.createDocumentFragment()).appendChild(o), e.appendChecked = o.checked, e.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, u.attachEvent && (u.attachEvent("onclick", function() {
            e.noCloneEvent = !1
        }), u.cloneNode(!0).click());
        for (d in {
                submit: !0,
                change: !0,
                focusin: !0
            }) u.setAttribute(l = "on" + d, "t"), e[d + "Bubbles"] = l in t || !1 === u.attributes[l].expando;
        u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === u.style.backgroundClip;
        for (d in ot(e)) break;
        return e.ownLast = "0" !== d, ot(function() {
            var n, i, o, r = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = q.getElementsByTagName("body")[0];
            a && (n = q.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(u), u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = u.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", e.reliableHiddenOffsets = c && 0 === o[0].offsetHeight, u.innerHTML = "", u.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ot.swap(a, null != a.style.zoom ? {
                zoom: 1
            } : {}, function() {
                e.boxSizing = 4 === u.offsetWidth
            }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(u, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(u, null) || {
                width: "4px"
            }).width, i = u.appendChild(q.createElement("div")), i.style.cssText = u.style.cssText = r, i.style.marginRight = i.style.width = "0", u.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(i, null) || {}).marginRight)), typeof u.style.zoom !== F && (u.innerHTML = "", u.style.cssText = r + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === u.offsetWidth, u.style.display = "block", u.innerHTML = "<div></div>", u.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== u.offsetWidth, e.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = u = o = i = null)
        }), n = r = a = s = i = o = null, e
    }({});
    var xt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        $t = /([A-Z])/g;
    ot.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return !!(t = t.nodeType ? ot.cache[t[ot.expando]] : t[ot.expando]) && !a(t)
        },
        data: function(t, e, n) {
            return i(t, e, n)
        },
        removeData: function(t, e) {
            return o(t, e)
        },
        _data: function(t, e, n) {
            return i(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return o(t, e, !0)
        },
        acceptData: function(t) {
            if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
            var e = t.nodeName && ot.noData[t.nodeName.toLowerCase()];
            return !e || !0 !== e && t.getAttribute("classid") === e
        }
    }), ot.fn.extend({
        data: function(t, n) {
            var i, o, a = null,
                s = 0,
                l = this[0];
            if (t === e) {
                if (this.length && (a = ot.data(l), 1 === l.nodeType && !ot._data(l, "parsedAttrs"))) {
                    for (i = l.attributes; i.length > s; s++) 0 === (o = i[s].name).indexOf("data-") && (o = ot.camelCase(o.slice(5)), r(l, o, a[o]));
                    ot._data(l, "parsedAttrs", !0)
                }
                return a
            }
            return "object" == typeof t ? this.each(function() {
                ot.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                ot.data(this, t, n)
            }) : l ? r(l, t, ot.data(l, t)) : null
        },
        removeData: function(t) {
            return this.each(function() {
                ot.removeData(this, t)
            })
        }
    }), ot.extend({
        queue: function(t, n, i) {
            var o;
            return t ? (n = (n || "fx") + "queue", o = ot._data(t, n), i && (!o || ot.isArray(i) ? o = ot._data(t, n, ot.makeArray(i)) : o.push(i)), o || []) : e
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = ot.queue(t, e),
                i = n.length,
                o = n.shift(),
                r = ot._queueHooks(t, e);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, function() {
                ot.dequeue(t, e)
            }, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return ot._data(t, n) || ot._data(t, n, {
                empty: ot.Callbacks("once memory").add(function() {
                    ot._removeData(t, e + "queue"), ot._removeData(t, n)
                })
            })
        }
    }), ot.fn.extend({
        queue: function(t, n) {
            var i = 2;
            return "string" != typeof t && (n = t, t = "fx", i--), i > arguments.length ? ot.queue(this[0], t) : n === e ? this : this.each(function() {
                var e = ot.queue(this, t, n);
                ot._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ot.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                ot.dequeue(this, t)
            })
        },
        delay: function(t, e) {
            return t = ot.fx ? ot.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                var i = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, n) {
            var i, o = 1,
                r = ot.Deferred(),
                a = this,
                s = this.length,
                l = function() {
                    --o || r.resolveWith(a, [a])
                };
            for ("string" != typeof t && (n = t, t = e), t = t || "fx"; s--;)(i = ot._data(a[s], t + "queueHooks")) && i.empty && (o++, i.empty.add(l));
            return l(), r.promise(n)
        }
    });
    var wt, _t, Ct = /[\t\r\n\f]/g,
        kt = /\r/g,
        Et = /^(?:input|select|textarea|button|object)$/i,
        Tt = /^(?:a|area)$/i,
        St = /^(?:checked|selected)$/i,
        jt = ot.support.getSetAttribute,
        At = ot.support.input;
    ot.fn.extend({
        attr: function(t, e) {
            return ot.access(this, ot.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                ot.removeAttr(this, t)
            })
        },
        prop: function(t, e) {
            return ot.access(this, ot.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = ot.propFix[t] || t, this.each(function() {
                try {
                    this[t] = e, delete this[t]
                } catch (t) {}
            })
        },
        addClass: function(t) {
            var e, n, i, o, r, a = 0,
                s = this.length,
                l = "string" == typeof t && t;
            if (ot.isFunction(t)) return this.each(function(e) {
                ot(this).addClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(at) || []; s > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ct, " ") : " ")) {
                        for (r = 0; o = e[r++];) 0 > i.indexOf(" " + o + " ") && (i += o + " ");
                        n.className = ot.trim(i)
                    } return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof t && t;
            if (ot.isFunction(t)) return this.each(function(e) {
                ot(this).removeClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(at) || []; s > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ct, " ") : "")) {
                        for (r = 0; o = e[r++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        n.className = t ? ot.trim(i) : ""
                    } return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ot.isFunction(t) ? this.each(function(n) {
                ot(this).toggleClass(t.call(this, n, this.className, e), e)
            }) : this.each(function() {
                if ("string" === n)
                    for (var e, i = 0, o = ot(this), r = t.match(at) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else(n === F || "boolean" === n) && (this.className && ot._data(this, "__className__", this.className), this.className = this.className || !1 === t ? "" : ot._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ct, " ").indexOf(e) >= 0) return !0;
            return !1
        },
        val: function(t) {
            var n, i, o, r = this[0];
            return arguments.length ? (o = ot.isFunction(t), this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = o ? t.call(this, n, ot(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : ot.isArray(r) && (r = ot.map(r, function(t) {
                    return null == t ? "" : t + ""
                })), (i = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()]) && "set" in i && i.set(this, r, "value") !== e || (this.value = r))
            })) : r ? (i = ot.valHooks[r.type] || ot.valHooks[r.nodeName.toLowerCase()]) && "get" in i && (n = i.get(r, "value")) !== e ? n : "string" == typeof(n = r.value) ? n.replace(kt, "") : null == n ? "" : n : void 0
        }
    }), ot.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ot.find.attr(t, "value");
                    return null != e ? e : t.text
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
                        if (!(!(n = i[l]).selected && l !== o || (ot.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ot(n).val(), r) return e;
                            a.push(e)
                        } return a
                },
                set: function(t, e) {
                    for (var n, i, o = t.options, r = ot.makeArray(e), a = o.length; a--;) i = o[a], (i.selected = ot.inArray(ot(i).val(), r) >= 0) && (n = !0);
                    return n || (t.selectedIndex = -1), r
                }
            }
        },
        attr: function(t, n, i) {
            var o, r, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a) return typeof t.getAttribute === F ? ot.prop(t, n, i) : (1 === a && ot.isXMLDoc(t) || (n = n.toLowerCase(), o = ot.attrHooks[n] || (ot.expr.match.bool.test(n) ? _t : wt)), i === e ? o && "get" in o && null !== (r = o.get(t, n)) ? r : null == (r = ot.find.attr(t, n)) ? e : r : null !== i ? o && "set" in o && (r = o.set(t, i, n)) !== e ? r : (t.setAttribute(n, i + ""), i) : (ot.removeAttr(t, n), e))
        },
        removeAttr: function(t, e) {
            var n, i, o = 0,
                r = e && e.match(at);
            if (r && 1 === t.nodeType)
                for (; n = r[o++];) i = ot.propFix[n] || n, ot.expr.match.bool.test(n) ? At && jt || !St.test(n) ? t[i] = !1 : t[ot.camelCase("default-" + n)] = t[i] = !1 : ot.attr(t, n, ""), t.removeAttribute(jt ? n : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ot.support.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(t, n, i) {
            var o, r, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a) return (1 !== a || !ot.isXMLDoc(t)) && (n = ot.propFix[n] || n, r = ot.propHooks[n]), i !== e ? r && "set" in r && (o = r.set(t, i, n)) !== e ? o : t[n] = i : r && "get" in r && null !== (o = r.get(t, n)) ? o : t[n]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ot.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Et.test(t.nodeName) || Tt.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), _t = {
        set: function(t, e, n) {
            return !1 === e ? ot.removeAttr(t, n) : At && jt || !St.test(n) ? t.setAttribute(!jt && ot.propFix[n] || n, n) : t[ot.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(t, n) {
        var i = ot.expr.attrHandle[n] || ot.find.attr;
        ot.expr.attrHandle[n] = At && jt || !St.test(n) ? function(t, n, o) {
            var r = ot.expr.attrHandle[n],
                a = o ? e : (ot.expr.attrHandle[n] = e) != i(t, n, o) ? n.toLowerCase() : null;
            return ot.expr.attrHandle[n] = r, a
        } : function(t, n, i) {
            return i ? e : t[ot.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), At && jt || (ot.attrHooks.value = {
        set: function(t, n, i) {
            return ot.nodeName(t, "input") ? (t.defaultValue = n, e) : wt && wt.set(t, n, i)
        }
    }), jt || (wt = {
        set: function(t, n, i) {
            var o = t.getAttributeNode(i);
            return o || t.setAttributeNode(o = t.ownerDocument.createAttribute(i)), o.value = n += "", "value" === i || n === t.getAttribute(i) ? n : e
        }
    }, ot.expr.attrHandle.id = ot.expr.attrHandle.name = ot.expr.attrHandle.coords = function(t, n, i) {
        var o;
        return i ? e : (o = t.getAttributeNode(n)) && "" !== o.value ? o.value : null
    }, ot.valHooks.button = {
        get: function(t, n) {
            var i = t.getAttributeNode(n);
            return i && i.specified ? i.value : e
        },
        set: wt.set
    }, ot.attrHooks.contenteditable = {
        set: function(t, e, n) {
            wt.set(t, "" !== e && e, n)
        }
    }, ot.each(["width", "height"], function(t, n) {
        ot.attrHooks[n] = {
            set: function(t, i) {
                return "" === i ? (t.setAttribute(n, "auto"), i) : e
            }
        }
    })), ot.support.hrefNormalized || ot.each(["href", "src"], function(t, e) {
        ot.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ot.support.style || (ot.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || e
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    }), ot.support.optSelected || (ot.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ot.propFix[this.toLowerCase()] = this
    }), ot.support.enctype || (ot.propFix.enctype = "encoding"), ot.each(["radio", "checkbox"], function() {
        ot.valHooks[this] = {
            set: function(t, n) {
                return ot.isArray(n) ? t.checked = ot.inArray(ot(t).val(), n) >= 0 : e
            }
        }, ot.support.checkOn || (ot.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Mt = /^(?:input|select|textarea)$/i,
        It = /^key/,
        Nt = /^(?:mouse|contextmenu)|click/,
        Dt = /^(?:focusinfocus|focusoutblur)$/,
        Lt = /^([^.]*)(?:\.(.+)|)$/;
    ot.event = {
        global: {},
        add: function(t, n, i, o, r) {
            var a, s, l, c, d, u, p, h, f, g, m, v = ot._data(t);
            if (v) {
                for (i.handler && (c = i, i = c.handler, r = c.selector), i.guid || (i.guid = ot.guid++), (s = v.events) || (s = v.events = {}), (u = v.handle) || (u = v.handle = function(t) {
                        return typeof ot === F || t && ot.event.triggered === t.type ? e : ot.event.dispatch.apply(u.elem, arguments)
                    }, u.elem = t), l = (n = (n || "").match(at) || [""]).length; l--;) a = Lt.exec(n[l]) || [], f = m = a[1], g = (a[2] || "").split(".").sort(), f && (d = ot.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = ot.event.special[f] || {}, p = ot.extend({
                    type: f,
                    origType: m,
                    data: o,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && ot.expr.match.needsContext.test(r),
                    namespace: g.join(".")
                }, c), (h = s[f]) || (h = s[f] = [], h.delegateCount = 0, d.setup && !1 !== d.setup.call(t, o, g, u) || (t.addEventListener ? t.addEventListener(f, u, !1) : t.attachEvent && t.attachEvent("on" + f, u))), d.add && (d.add.call(t, p), p.handler.guid || (p.handler.guid = i.guid)), r ? h.splice(h.delegateCount++, 0, p) : h.push(p), ot.event.global[f] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, o) {
            var r, a, s, l, c, d, u, p, h, f, g, m = ot.hasData(t) && ot._data(t);
            if (m && (d = m.events)) {
                for (c = (e = (e || "").match(at) || [""]).length; c--;)
                    if (s = Lt.exec(e[c]) || [], h = g = s[1], f = (s[2] || "").split(".").sort(), h) {
                        for (u = ot.event.special[h] || {}, p = d[h = (i ? u.delegateType : u.bindType) || h] || [], s = s[2] && RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) a = p[r], !o && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(r, 1), a.selector && p.delegateCount--, u.remove && u.remove.call(t, a));
                        l && !p.length && (u.teardown && !1 !== u.teardown.call(t, f, m.handle) || ot.removeEvent(t, h, m.handle), delete d[h])
                    } else
                        for (h in d) ot.event.remove(t, h + e[c], n, i, !0);
                ot.isEmptyObject(d) && (delete m.handle, ot._removeData(t, "events"))
            }
        },
        trigger: function(n, i, o, r) {
            var a, s, l, c, d, u, p, h = [o || q],
                f = nt.call(n, "type") ? n.type : n,
                g = nt.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = u = o = o || q, 3 !== o.nodeType && 8 !== o.nodeType && !Dt.test(f + ot.event.triggered) && (f.indexOf(".") >= 0 && (g = f.split("."), f = g.shift(), g.sort()), s = 0 > f.indexOf(":") && "on" + f, n = n[ot.expando] ? n : new ot.Event(f, "object" == typeof n && n), n.isTrigger = r ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = e, n.target || (n.target = o), i = null == i ? [n] : ot.makeArray(i, [n]), d = ot.event.special[f] || {}, r || !d.trigger || !1 !== d.trigger.apply(o, i))) {
                if (!r && !d.noBubble && !ot.isWindow(o)) {
                    for (c = d.delegateType || f, Dt.test(c + f) || (l = l.parentNode); l; l = l.parentNode) h.push(l), u = l;
                    u === (o.ownerDocument || q) && h.push(u.defaultView || u.parentWindow || t)
                }
                for (p = 0;
                    (l = h[p++]) && !n.isPropagationStopped();) n.type = p > 1 ? c : d.bindType || f, (a = (ot._data(l, "events") || {})[n.type] && ot._data(l, "handle")) && a.apply(l, i), (a = s && l[s]) && ot.acceptData(l) && a.apply && !1 === a.apply(l, i) && n.preventDefault();
                if (n.type = f, !r && !n.isDefaultPrevented() && (!d._default || !1 === d._default.apply(h.pop(), i)) && ot.acceptData(o) && s && o[f] && !ot.isWindow(o)) {
                    (u = o[s]) && (o[s] = null), ot.event.triggered = f;
                    try {
                        o[f]()
                    } catch (t) {}
                    ot.event.triggered = e, u && (o[s] = u)
                }
                return n.result
            }
        },
        dispatch: function(t) {
            t = ot.event.fix(t);
            var n, i, o, r, a, s = [],
                l = Z.call(arguments),
                c = (ot._data(this, "events") || {})[t.type] || [],
                d = ot.event.special[t.type] || {};
            if (l[0] = t, t.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, t)) {
                for (s = ot.event.handlers.call(this, t, c), n = 0;
                    (r = s[n++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, a = 0;
                        (o = r.handlers[a++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, (i = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) !== e && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, n) {
            var i, o, r, a, s = [],
                l = n.delegateCount,
                c = t.target;
            if (l && c.nodeType && (!t.button || "click" !== t.type))
                for (; c != this; c = c.parentNode || this)
                    if (1 === c.nodeType && (!0 !== c.disabled || "click" !== t.type)) {
                        for (r = [], a = 0; l > a; a++) o = n[a], i = o.selector + " ", r[i] === e && (r[i] = o.needsContext ? ot(i, this).index(c) >= 0 : ot.find(i, this, null, [c]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: c,
                            handlers: r
                        })
                    } return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }), s
        },
        fix: function(t) {
            if (t[ot.expando]) return t;
            var e, n, i, o = t.type,
                r = t,
                a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Nt.test(o) ? this.mouseHooks : It.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new ot.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
            return t.target || (t.target = r.srcElement || q), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, r) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, n) {
                var i, o, r, a = n.button,
                    s = n.fromElement;
                return null == t.pageX && null != n.clientX && (o = t.target.ownerDocument || q, r = o.documentElement, i = o.body, t.pageX = n.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = n.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? n.toElement : s), t.which || a === e || (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== c() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === c() && this.blur ? (this.blur(), !1) : e
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ot.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : e
                },
                _default: function(t) {
                    return ot.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    t.result !== e && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var o = ot.extend(new ot.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? ot.event.trigger(o, null, e) : ot.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, ot.removeEvent = q.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === F && (t[i] = null), t.detachEvent(i, n))
    }, ot.Event = function(t, n) {
        return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || !1 === t.returnValue || t.getPreventDefault && t.getPreventDefault() ? s : l) : this.type = t, n && ot.extend(this, n), this.timeStamp = t && t.timeStamp || ot.now(), this[ot.expando] = !0, e) : new ot.Event(t, n)
    }, ot.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = s, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = s, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = s, this.stopPropagation()
        }
    }, ot.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(t, e) {
        ot.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = t.relatedTarget,
                    o = t.handleObj;
                return (!i || i !== this && !ot.contains(this, i)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ot.support.submitBubbles || (ot.event.special.submit = {
        setup: function() {
            return !ot.nodeName(this, "form") && (ot.event.add(this, "click._submit keypress._submit", function(t) {
                var n = t.target,
                    i = ot.nodeName(n, "input") || ot.nodeName(n, "button") ? n.form : e;
                i && !ot._data(i, "submitBubbles") && (ot.event.add(i, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }), ot._data(i, "submitBubbles", !0))
            }), e)
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ot.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return !ot.nodeName(this, "form") && (ot.event.remove(this, "._submit"), e)
        }
    }), ot.support.changeBubbles || (ot.event.special.change = {
        setup: function() {
            return Mt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ot.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), ot.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), ot.event.simulate("change", this, t, !0)
            })), !1) : (ot.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Mt.test(e.nodeName) && !ot._data(e, "changeBubbles") && (ot.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || ot.event.simulate("change", this.parentNode, t, !0)
                }), ot._data(e, "changeBubbles", !0))
            }), e)
        },
        handle: function(t) {
            var n = t.target;
            return this !== n || t.isSimulated || t.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? t.handleObj.handler.apply(this, arguments) : e
        },
        teardown: function() {
            return ot.event.remove(this, "._change"), !Mt.test(this.nodeName)
        }
    }), ot.support.focusinBubbles || ot.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = 0,
            i = function(t) {
                ot.event.simulate(e, t.target, ot.event.fix(t), !0)
            };
        ot.event.special[e] = {
            setup: function() {
                0 == n++ && q.addEventListener(t, i, !0)
            },
            teardown: function() {
                0 == --n && q.removeEventListener(t, i, !0)
            }
        }
    }), ot.fn.extend({
        on: function(t, n, i, o, r) {
            var a, s;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = e);
                for (a in t) this.on(a, n, i, t[a], r);
                return this
            }
            if (null == i && null == o ? (o = n, i = n = e) : null == o && ("string" == typeof n ? (o = i, i = e) : (o = i, i = n, n = e)), !1 === o) o = l;
            else if (!o) return this;
            return 1 === r && (s = o, o = function(t) {
                return ot().off(t), s.apply(this, arguments)
            }, o.guid = s.guid || (s.guid = ot.guid++)), this.each(function() {
                ot.event.add(this, t, o, i, n)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, n, i) {
            var o, r;
            if (t && t.preventDefault && t.handleObj) return o = t.handleObj, ot(t.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, n, t[r]);
                return this
            }
            return (!1 === n || "function" == typeof n) && (i = n, n = e), !1 === i && (i = l), this.each(function() {
                ot.event.remove(this, t, i, n)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                ot.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, n) {
            var i = this[0];
            return i ? ot.event.trigger(t, n, i, !0) : e
        }
    });
    var Bt = /^.[^:#\[\.,]*$/,
        Pt = /^(?:parents|prev(?:Until|All))/,
        Ht = ot.expr.match.needsContext,
        Ot = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ot.fn.extend({
        find: function(t) {
            var e, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof t) return this.pushStack(ot(t).filter(function() {
                for (e = 0; o > e; e++)
                    if (ot.contains(i[e], this)) return !0
            }));
            for (e = 0; o > e; e++) ot.find(t, i[e], n);
            return n = this.pushStack(o > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        has: function(t) {
            var e, n = ot(t, this),
                i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++)
                    if (ot.contains(this, n[e])) return !0
            })
        },
        not: function(t) {
            return this.pushStack(u(this, t || [], !0))
        },
        filter: function(t) {
            return this.pushStack(u(this, t || [], !1))
        },
        is: function(t) {
            return !!u(this, "string" == typeof t && Ht.test(t) ? ot(t) : t || [], !1).length
        },
        closest: function(t, e) {
            for (var n, i = 0, o = this.length, r = [], a = Ht.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, t))) {
                        n = r.push(n);
                        break
                    } return this.pushStack(r.length > 1 ? ot.unique(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? ot.inArray(this[0], ot(t)) : ot.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            var n = "string" == typeof t ? ot(t, e) : ot.makeArray(t && t.nodeType ? [t] : t),
                i = ot.merge(this.get(), n);
            return this.pushStack(ot.unique(i))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ot.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return ot.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return ot.dir(t, "parentNode", n)
        },
        next: function(t) {
            return d(t, "nextSibling")
        },
        prev: function(t) {
            return d(t, "previousSibling")
        },
        nextAll: function(t) {
            return ot.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return ot.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return ot.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return ot.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return ot.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return ot.sibling(t.firstChild)
        },
        contents: function(t) {
            return ot.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ot.merge([], t.childNodes)
        }
    }, function(t, e) {
        ot.fn[t] = function(n, i) {
            var o = ot.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = ot.filter(i, o)), this.length > 1 && (Ot[t] || (o = ot.unique(o)), Pt.test(t) && (o = o.reverse())), this.pushStack(o)
        }
    }), ot.extend({
        filter: function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ot.find.matchesSelector(i, t) ? [i] : [] : ot.find.matches(t, ot.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        },
        dir: function(t, n, i) {
            for (var o = [], r = t[n]; r && 9 !== r.nodeType && (i === e || 1 !== r.nodeType || !ot(r).is(i));) 1 === r.nodeType && o.push(r), r = r[n];
            return o
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    });
    var zt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Vt = / jQuery\d+="(?:null|\d+)"/g,
        Ft = RegExp("<(?:" + zt + ")[\\s/>]", "i"),
        Rt = /^\s+/,
        qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Wt = /<([\w:]+)/,
        Ut = /<tbody/i,
        Jt = /<|&#?\w+;/,
        Gt = /<(?:script|style|link)/i,
        Qt = /^(?:checkbox|radio)$/i,
        Xt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Kt = /^$|\/(?:java|ecma)script/i,
        Yt = /^true\/(.*)/,
        Zt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        te = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ot.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        ee = p(q).appendChild(q.createElement("div"));
    te.optgroup = te.option, te.tbody = te.tfoot = te.colgroup = te.caption = te.thead, te.th = te.td, ot.fn.extend({
        text: function(t) {
            return ot.access(this, function(t) {
                return t === e ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || q).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    h(this, t).appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = h(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? ot.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || ot.cleanData(b(n)), n.parentNode && (e && ot.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && ot.cleanData(b(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && ot.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return ot.clone(this, t, e)
            })
        },
        html: function(t) {
            return ot.access(this, function(t) {
                var n = this[0] || {},
                    i = 0,
                    o = this.length;
                if (t === e) return 1 === n.nodeType ? n.innerHTML.replace(Vt, "") : e;
                if (!("string" != typeof t || Gt.test(t) || !ot.support.htmlSerialize && Ft.test(t) || !ot.support.leadingWhitespace && Rt.test(t) || te[(Wt.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(qt, "<$1></$2>");
                    try {
                        for (; o > i; i++) 1 === (n = this[i] || {}).nodeType && (ot.cleanData(b(n, !1)), n.innerHTML = t);
                        n = 0
                    } catch (t) {}
                }
                n && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = ot.map(this, function(t) {
                    return [t.nextSibling, t.parentNode]
                }),
                e = 0;
            return this.domManip(arguments, function(n) {
                var i = t[e++],
                    o = t[e++];
                o && (i && i.parentNode !== o && (i = this.nextSibling), ot(this).remove(), o.insertBefore(n, i))
            }, !0), e ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e, n) {
            t = K.apply([], t);
            var i, o, r, a, s, l, c = 0,
                d = this.length,
                u = this,
                p = d - 1,
                h = t[0],
                m = ot.isFunction(h);
            if (m || !(1 >= d || "string" != typeof h || ot.support.checkClone) && Xt.test(h)) return this.each(function(i) {
                var o = u.eq(i);
                m && (t[0] = h.call(this, i, o.html())), o.domManip(t, e, n)
            });
            if (d && (l = ot.buildFragment(t, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                for (r = (a = ot.map(b(l, "script"), f)).length; d > c; c++) o = l, c !== p && (o = ot.clone(o, !0, !0), r && ot.merge(a, b(o, "script"))), e.call(this[c], o, c);
                if (r)
                    for (s = a[a.length - 1].ownerDocument, ot.map(a, g), c = 0; r > c; c++) o = a[c], Kt.test(o.type || "") && !ot._data(o, "globalEval") && ot.contains(s, o) && (o.src ? ot._evalUrl(o.src) : ot.globalEval((o.text || o.textContent || o.innerHTML || "").replace(Zt, "")));
                l = i = null
            }
            return this
        }
    }), ot.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        ot.fn[t] = function(t) {
            for (var n, i = 0, o = [], r = ot(t), a = r.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), ot(r[i])[e](n), Y.apply(o, n.get());
            return this.pushStack(o)
        }
    }), ot.extend({
        clone: function(t, e, n) {
            var i, o, r, a, s, l = ot.contains(t.ownerDocument, t);
            if (ot.support.html5Clone || ot.isXMLDoc(t) || !Ft.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (ee.innerHTML = t.outerHTML, ee.removeChild(r = ee.firstChild)), !(ot.support.noCloneEvent && ot.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t)))
                for (i = b(r), s = b(t), a = 0; null != (o = s[a]); ++a) i[a] && y(o, i[a]);
            if (e)
                if (n)
                    for (s = s || b(t), i = i || b(r), a = 0; null != (o = s[a]); a++) v(o, i[a]);
                else v(t, r);
            return (i = b(r, "script")).length > 0 && m(i, !l && b(t, "script")), i = s = o = null, r
        },
        buildFragment: function(t, e, n, i) {
            for (var o, r, a, s, l, c, d, u = t.length, h = p(e), f = [], g = 0; u > g; g++)
                if ((r = t[g]) || 0 === r)
                    if ("object" === ot.type(r)) ot.merge(f, r.nodeType ? [r] : r);
                    else if (Jt.test(r)) {
                for (s = s || h.appendChild(e.createElement("div")), l = (Wt.exec(r) || ["", ""])[1].toLowerCase(), d = te[l] || te._default, s.innerHTML = d[1] + r.replace(qt, "<$1></$2>") + d[2], o = d[0]; o--;) s = s.lastChild;
                if (!ot.support.leadingWhitespace && Rt.test(r) && f.push(e.createTextNode(Rt.exec(r)[0])), !ot.support.tbody)
                    for (o = (r = "table" !== l || Ut.test(r) ? "<table>" !== d[1] || Ut.test(r) ? 0 : s : s.firstChild) && r.childNodes.length; o--;) ot.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
                for (ot.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = h.lastChild
            } else f.push(e.createTextNode(r));
            for (s && h.removeChild(s), ot.support.appendChecked || ot.grep(b(f, "input"), x), g = 0; r = f[g++];)
                if ((!i || -1 === ot.inArray(r, i)) && (a = ot.contains(r.ownerDocument, r), s = b(h.appendChild(r), "script"), a && m(s), n))
                    for (o = 0; r = s[o++];) Kt.test(r.type || "") && n.push(r);
            return s = null, h
        },
        cleanData: function(t, e) {
            for (var n, i, o, r, a = 0, s = ot.expando, l = ot.cache, c = ot.support.deleteExpando, d = ot.event.special; null != (n = t[a]); a++)
                if ((e || ot.acceptData(n)) && (o = n[s], r = o && l[o])) {
                    if (r.events)
                        for (i in r.events) d[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], c ? delete n[s] : typeof n.removeAttribute !== F ? n.removeAttribute(s) : n[s] = null, Q.push(o))
                }
        },
        _evalUrl: function(t) {
            return ot.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }
    }), ot.fn.extend({
        wrapAll: function(t) {
            if (ot.isFunction(t)) return this.each(function(e) {
                ot(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = ot(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return ot.isFunction(t) ? this.each(function(e) {
                ot(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = ot(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = ot.isFunction(t);
            return this.each(function(n) {
                ot(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var ne, ie, oe, re = /alpha\([^)]*\)/i,
        ae = /opacity\s*=\s*([^)]*)/,
        se = /^(top|right|bottom|left)$/,
        le = /^(none|table(?!-c[ea]).+)/,
        ce = /^margin/,
        de = RegExp("^(" + rt + ")(.*)$", "i"),
        ue = RegExp("^(" + rt + ")(?!px)[a-z%]+$", "i"),
        pe = RegExp("^([+-])=(" + rt + ")", "i"),
        he = {
            BODY: "block"
        },
        fe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ge = {
            letterSpacing: 0,
            fontWeight: 400
        },
        me = ["Top", "Right", "Bottom", "Left"],
        ve = ["Webkit", "O", "Moz", "ms"];
    ot.fn.extend({
        css: function(t, n) {
            return ot.access(this, function(t, n, i) {
                var o, r, a = {},
                    s = 0;
                if (ot.isArray(n)) {
                    for (r = ie(t), o = n.length; o > s; s++) a[n[s]] = ot.css(t, n[s], !1, r);
                    return a
                }
                return i !== e ? ot.style(t, n, i) : ot.css(t, n)
            }, t, n, arguments.length > 1)
        },
        show: function() {
            return _(this, !0)
        },
        hide: function() {
            return _(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                w(this) ? ot(this).show() : ot(this).hide()
            })
        }
    }), ot.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = oe(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: ot.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, n, i, o) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, a, s, l = ot.camelCase(n),
                    c = t.style;
                if (n = ot.cssProps[l] || (ot.cssProps[l] = $(c, l)), s = ot.cssHooks[n] || ot.cssHooks[l], i === e) return s && "get" in s && (r = s.get(t, !1, o)) !== e ? r : c[n];
                if ("string" === (a = typeof i) && (r = pe.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(ot.css(t, n)), a = "number"), !(null == i || "number" === a && isNaN(i) || ("number" !== a || ot.cssNumber[l] || (i += "px"), ot.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (c[n] = "inherit"), s && "set" in s && (i = s.set(t, i, o)) === e))) try {
                    c[n] = i
                } catch (t) {}
            }
        },
        css: function(t, n, i, o) {
            var r, a, s, l = ot.camelCase(n);
            return n = ot.cssProps[l] || (ot.cssProps[l] = $(t.style, l)), (s = ot.cssHooks[n] || ot.cssHooks[l]) && "get" in s && (a = s.get(t, !0, i)), a === e && (a = oe(t, n, o)), "normal" === a && n in ge && (a = ge[n]), "" === i || i ? (r = parseFloat(a), !0 === i || ot.isNumeric(r) ? r || 0 : a) : a
        }
    }), t.getComputedStyle ? (ie = function(e) {
        return t.getComputedStyle(e, null)
    }, oe = function(t, n, i) {
        var o, r, a, s = i || ie(t),
            l = s ? s.getPropertyValue(n) || s[n] : e,
            c = t.style;
        return s && ("" !== l || ot.contains(t.ownerDocument, t) || (l = ot.style(t, n)), ue.test(l) && ce.test(n) && (o = c.width, r = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = s.width, c.width = o, c.minWidth = r, c.maxWidth = a)), l
    }) : q.documentElement.currentStyle && (ie = function(t) {
        return t.currentStyle
    }, oe = function(t, n, i) {
        var o, r, a, s = i || ie(t),
            l = s ? s[n] : e,
            c = t.style;
        return null == l && c && c[n] && (l = c[n]), ue.test(l) && !se.test(n) && (o = c.left, r = t.runtimeStyle, (a = r && r.left) && (r.left = t.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = o, a && (r.left = a)), "" === l ? "auto" : l
    }), ot.each(["height", "width"], function(t, n) {
        ot.cssHooks[n] = {
            get: function(t, i, o) {
                return i ? 0 === t.offsetWidth && le.test(ot.css(t, "display")) ? ot.swap(t, fe, function() {
                    return E(t, n, o)
                }) : E(t, n, o) : e
            },
            set: function(t, e, i) {
                var o = i && ie(t);
                return C(0, e, i ? k(t, n, i, ot.support.boxSizing && "border-box" === ot.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }), ot.support.opacity || (ot.cssHooks.opacity = {
        get: function(t, e) {
            return ae.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style,
                i = t.currentStyle,
                o = ot.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                r = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === ot.trim(r.replace(re, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = re.test(r) ? r.replace(re, o) : r + " " + o)
        }
    }), ot(function() {
        ot.support.reliableMarginRight || (ot.cssHooks.marginRight = {
            get: function(t, n) {
                return n ? ot.swap(t, {
                    display: "inline-block"
                }, oe, [t, "marginRight"]) : e
            }
        }), !ot.support.pixelPosition && ot.fn.position && ot.each(["top", "left"], function(t, n) {
            ot.cssHooks[n] = {
                get: function(t, i) {
                    return i ? (i = oe(t, n), ue.test(i) ? ot(t).position()[n] + "px" : i) : e
                }
            }
        })
    }), ot.expr && ot.expr.filters && (ot.expr.filters.hidden = function(t) {
        return 0 >= t.offsetWidth && 0 >= t.offsetHeight || !ot.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ot.css(t, "display"))
    }, ot.expr.filters.visible = function(t) {
        return !ot.expr.filters.hidden(t)
    }), ot.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        ot.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + me[i] + e] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, ce.test(t) || (ot.cssHooks[t + e].set = C)
    });
    var ye = /%20/g,
        be = /\[\]$/,
        xe = /\r?\n/g,
        $e = /^(?:submit|button|image|reset|file)$/i,
        we = /^(?:input|select|textarea|keygen)/i;
    ot.fn.extend({
        serialize: function() {
            return ot.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ot.prop(this, "elements");
                return t ? ot.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !ot(this).is(":disabled") && we.test(this.nodeName) && !$e.test(t) && (this.checked || !Qt.test(t))
            }).map(function(t, e) {
                var n = ot(this).val();
                return null == n ? null : ot.isArray(n) ? ot.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(xe, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(xe, "\r\n")
                }
            }).get()
        }
    }), ot.param = function(t, n) {
        var i, o = [],
            r = function(t, e) {
                e = ot.isFunction(e) ? e() : null == e ? "" : e, o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (n === e && (n = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (i in t) j(i, t[i], n, r);
        return o.join("&").replace(ye, "+")
    }, ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        ot.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), ot.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var _e, Ce, ke = ot.now(),
        Ee = /\?/,
        Te = /#.*$/,
        Se = /([?&])_=[^&]*/,
        je = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ae = /^(?:GET|HEAD)$/,
        Me = /^\/\//,
        Ie = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Ne = ot.fn.load,
        De = {},
        Le = {},
        Be = "*/".concat("*");
    try {
        Ce = R.href
    } catch (t) {
        (Ce = q.createElement("a")).href = "", Ce = Ce.href
    }
    _e = Ie.exec(Ce.toLowerCase()) || [], ot.fn.load = function(t, n, i) {
        if ("string" != typeof t && Ne) return Ne.apply(this, arguments);
        var o, r, a, s = this,
            l = t.indexOf(" ");
        return l >= 0 && (o = t.slice(l, t.length), t = t.slice(0, l)), ot.isFunction(n) ? (i = n, n = e) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ot.ajax({
            url: t,
            type: a,
            dataType: "html",
            data: n
        }).done(function(t) {
            r = arguments, s.html(o ? ot("<div>").append(ot.parseHTML(t)).find(o) : t)
        }).complete(i && function(t, e) {
            s.each(i, r || [t.responseText, e, t])
        }), this
    }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        ot.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ce,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_e[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Be,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ot.parseJSON,
                "text xml": ot.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? I(I(t, ot.ajaxSettings), e) : I(ot.ajaxSettings, t)
        },
        ajaxPrefilter: A(De),
        ajaxTransport: A(Le),
        ajax: function(t, n) {
            function i(t, n, i, o) {
                var r, u, y, b, $, _ = n;
                2 !== x && (x = 2, l && clearTimeout(l), d = e, s = o || "", w.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, i && (b = function(t, n, i) {
                    for (var o, r, a, s, l = t.contents, c = t.dataTypes;
                        "*" === c[0];) c.shift(), r === e && (r = t.mimeType || n.getResponseHeader("Content-Type"));
                    if (r)
                        for (s in l)
                            if (l[s] && l[s].test(r)) {
                                c.unshift(s);
                                break
                            } if (c[0] in i) a = c[0];
                    else {
                        for (s in i) {
                            if (!c[0] || t.converters[s + " " + c[0]]) {
                                a = s;
                                break
                            }
                            o || (o = s)
                        }
                        a = a || o
                    }
                    return a ? (a !== c[0] && c.unshift(a), i[a]) : e
                }(p, w, i)), b = function(t, e, n, i) {
                    var o, r, a, s, l, c = {},
                        d = t.dataTypes.slice();
                    if (d[1])
                        for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
                    for (r = d.shift(); r;)
                        if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = d.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(a = c[l + " " + r] || c["* " + r]))
                            for (o in c)
                                if ((s = o.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                    !0 === a ? a = c[o] : !0 !== c[o] && (r = s[0], d.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && t.throws) e = a(e);
                            else try {
                                e = a(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: a ? t : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(p, b, w, r), r ? (p.ifModified && (($ = w.getResponseHeader("Last-Modified")) && (ot.lastModified[a] = $), ($ = w.getResponseHeader("etag")) && (ot.etag[a] = $)), 204 === t || "HEAD" === p.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = b.state, u = b.data, y = b.error, r = !y)) : (y = _, (t || !_) && (_ = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (n || _) + "", r ? g.resolveWith(h, [u, _, w]) : g.rejectWith(h, [w, _, y]), w.statusCode(v), v = e, c && f.trigger(r ? "ajaxSuccess" : "ajaxError", [w, p, r ? u : y]), m.fireWith(h, [w, _]), c && (f.trigger("ajaxComplete", [w, p]), --ot.active || ot.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = e), n = n || {};
            var o, r, a, s, l, c, d, u, p = ot.ajaxSetup({}, n),
                h = p.context || p,
                f = p.context && (h.nodeType || h.jquery) ? ot(h) : ot.event,
                g = ot.Deferred(),
                m = ot.Callbacks("once memory"),
                v = p.statusCode || {},
                y = {},
                b = {},
                x = 0,
                $ = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === x) {
                            if (!u)
                                for (u = {}; e = je.exec(s);) u[e[1].toLowerCase()] = e[2];
                            e = u[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return x || (t = b[n] = b[n] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return x || (p.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > x)
                                for (e in t) v[e] = [v[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || $;
                        return d && d.abort(e), i(0, e), this
                    }
                };
            if (g.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, p.url = ((t || p.url || Ce) + "").replace(Te, "").replace(Me, _e[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ot.trim(p.dataType || "*").toLowerCase().match(at) || [""], null == p.crossDomain && (o = Ie.exec(p.url.toLowerCase()), p.crossDomain = !(!o || o[1] === _e[1] && o[2] === _e[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (_e[3] || ("http:" === _e[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ot.param(p.data, p.traditional)), M(De, p, n, w), 2 === x) return w;
            (c = p.global) && 0 == ot.active++ && ot.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ae.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Ee.test(a) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = Se.test(a) ? a.replace(Se, "$1_=" + ke++) : a + (Ee.test(a) ? "&" : "?") + "_=" + ke++)), p.ifModified && (ot.lastModified[a] && w.setRequestHeader("If-Modified-Since", ot.lastModified[a]), ot.etag[a] && w.setRequestHeader("If-None-Match", ot.etag[a])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Be + "; q=0.01" : "") : p.accepts["*"]);
            for (r in p.headers) w.setRequestHeader(r, p.headers[r]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, w, p) || 2 === x)) return w.abort();
            $ = "abort";
            for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[r](p[r]);
            if (d = M(Le, p, n, w)) {
                w.readyState = 1, c && f.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (l = setTimeout(function() {
                    w.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, d.send(y, i)
                } catch (t) {
                    if (!(2 > x)) throw t;
                    i(-1, t)
                }
            } else i(-1, "No Transport");
            return w
        },
        getJSON: function(t, e, n) {
            return ot.get(t, e, n, "json")
        },
        getScript: function(t, n) {
            return ot.get(t, e, n, "script")
        }
    }), ot.each(["get", "post"], function(t, n) {
        ot[n] = function(t, i, o, r) {
            return ot.isFunction(i) && (r = r || o, o = i, i = e), ot.ajax({
                url: t,
                type: n,
                dataType: r,
                data: i,
                success: o
            })
        }
    }), ot.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return ot.globalEval(t), t
            }
        }
    }), ot.ajaxPrefilter("script", function(t) {
        t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), ot.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var n, i = q.head || ot("head")[0] || q.documentElement;
            return {
                send: function(e, o) {
                    (n = q.createElement("script")).async = !0, t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function(t, e) {
                        (e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || o(200, "success"))
                    }, i.insertBefore(n, i.firstChild)
                },
                abort: function() {
                    n && n.onload(e, !0)
                }
            }
        }
    });
    var Pe = [],
        He = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Pe.pop() || ot.expando + "_" + ke++;
            return this[t] = !0, t
        }
    }), ot.ajaxPrefilter("json jsonp", function(n, i, o) {
        var r, a, s, l = !1 !== n.jsonp && (He.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && He.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (r = n.jsonpCallback = ot.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(He, "$1" + r) : !1 !== n.jsonp && (n.url += (Ee.test(n.url) ? "&" : "?") + n.jsonp + "=" + r), n.converters["script json"] = function() {
            return s || ot.error(r + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = t[r], t[r] = function() {
            s = arguments
        }, o.always(function() {
            t[r] = a, n[r] && (n.jsonpCallback = i.jsonpCallback, Pe.push(r)), s && ot.isFunction(a) && a(s[0]), s = a = e
        }), "script") : e
    });
    var Oe, ze, Ve = 0,
        Fe = t.ActiveXObject && function() {
            var t;
            for (t in Oe) Oe[t](e, !0)
        };
    ot.ajaxSettings.xhr = t.ActiveXObject ? function() {
        return !this.isLocal && N() || function() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }()
    } : N, ze = ot.ajaxSettings.xhr(), ot.support.cors = !!ze && "withCredentials" in ze, (ze = ot.support.ajax = !!ze) && ot.ajaxTransport(function(n) {
        if (!n.crossDomain || ot.support.cors) {
            var i;
            return {
                send: function(o, r) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in o) l.setRequestHeader(s, o[s])
                    } catch (t) {}
                    l.send(n.hasContent && n.data || null), i = function(t, o) {
                        var s, c, d, u;
                        try {
                            if (i && (o || 4 === l.readyState))
                                if (i = e, a && (l.onreadystatechange = ot.noop, Fe && delete Oe[a]), o) 4 !== l.readyState && l.abort();
                                else {
                                    u = {}, s = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (u.text = l.responseText);
                                    try {
                                        d = l.statusText
                                    } catch (t) {
                                        d = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                                }
                        } catch (t) {
                            o || r(-1, t)
                        }
                        u && r(s, d, u, c)
                    }, n.async ? 4 === l.readyState ? setTimeout(i) : (a = ++Ve, Fe && (Oe || (Oe = {}, ot(t).unload(Fe)), Oe[a] = i), l.onreadystatechange = i) : i()
                },
                abort: function() {
                    i && i(e, !0)
                }
            }
        }
    });
    var Re, qe, We = /^(?:toggle|show|hide)$/,
        Ue = RegExp("^(?:([+-])=|)(" + rt + ")([a-z%]*)$", "i"),
        Je = /queueHooks$/,
        Ge = [function(t, e, n) {
            var i, o, r, a, s, l, c = this,
                d = {},
                u = t.style,
                p = t.nodeType && w(t),
                h = ot._data(t, "fxshow");
            n.queue || (null == (s = ot._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, c.always(function() {
                c.always(function() {
                    s.unqueued--, ot.queue(t, "fx").length || s.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [u.overflow, u.overflowX, u.overflowY], "inline" === ot.css(t, "display") && "none" === ot.css(t, "float") && (ot.support.inlineBlockNeedsLayout && "inline" !== T(t.nodeName) ? u.zoom = 1 : u.display = "inline-block")), n.overflow && (u.overflow = "hidden", ot.support.shrinkWrapBlocks || c.always(function() {
                u.overflow = n.overflow[0], u.overflowX = n.overflow[1], u.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (o = e[i], We.exec(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (p ? "hide" : "show")) continue;
                    d[i] = h && h[i] || ot.style(t, i)
                } if (!ot.isEmptyObject(d)) {
                h ? "hidden" in h && (p = h.hidden) : h = ot._data(t, "fxshow", {}), r && (h.hidden = !p), p ? ot(t).show() : c.done(function() {
                    ot(t).hide()
                }), c.done(function() {
                    var e;
                    ot._removeData(t, "fxshow");
                    for (e in d) ot.style(t, e, d[e])
                });
                for (i in d) a = L(p ? h[i] : 0, i, c), i in h || (h[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }],
        Qe = {
            "*": [function(t, e) {
                var n = this.createTween(t, e),
                    i = n.cur(),
                    o = Ue.exec(e),
                    r = o && o[3] || (ot.cssNumber[t] ? "" : "px"),
                    a = (ot.cssNumber[t] || "px" !== r && +i) && Ue.exec(ot.css(n.elem, t)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== r) {
                    r = r || a[3], o = o || [], a = +i || 1;
                    do {
                        s = s || ".5", a /= s, ot.style(n.elem, t, a + r)
                    } while (s !== (s = n.cur() / i) && 1 !== s && --l)
                }
                return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    ot.Animation = ot.extend(B, {
        tweener: function(t, e) {
            ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, i = 0, o = t.length; o > i; i++) n = t[i], Qe[n] = Qe[n] || [], Qe[n].unshift(e)
        },
        prefilter: function(t, e) {
            e ? Ge.unshift(t) : Ge.push(t)
        }
    }), ot.Tween = P, (P.prototype = {
        constructor: P,
        init: function(t, e, n, i, o, r) {
            this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ot.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = P.propHooks[this.prop];
            return t && t.get ? t.get(this) : P.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = P.propHooks[this.prop];
            return this.pos = e = this.options.duration ? ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
        }
    }).init.prototype = P.prototype, (P.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ot.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 : t.elem[t.prop]
            },
            set: function(t) {
                ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ot.cssProps[t.prop]] || ot.cssHooks[t.prop]) ? ot.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }).scrollTop = P.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ot.each(["toggle", "show", "hide"], function(t, e) {
        var n = ot.fn[e];
        ot.fn[e] = function(t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(H(e, !0), t, i, o)
        }
    }), ot.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(w).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var o = ot.isEmptyObject(t),
                r = ot.speed(e, n, i),
                a = function() {
                    var e = B(this, ot.extend({}, t), r);
                    (o || ot._data(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function(t, n, i) {
            var o = function(t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = n, n = t, t = e), n && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    n = null != t && t + "queueHooks",
                    r = ot.timers,
                    a = ot._data(this);
                if (n) a[n] && a[n].stop && o(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && Je.test(n) && o(a[n]);
                for (n = r.length; n--;) r[n].elem !== this || null != t && r[n].queue !== t || (r[n].anim.stop(i), e = !1, r.splice(n, 1));
                (e || !i) && ot.dequeue(this, t)
            })
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"), this.each(function() {
                var e, n = ot._data(this),
                    i = n[t + "queue"],
                    o = n[t + "queueHooks"],
                    r = ot.timers,
                    a = i ? i.length : 0;
                for (n.finish = !0, ot.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; a > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), ot.each({
        slideDown: H("show"),
        slideUp: H("hide"),
        slideToggle: H("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        ot.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), ot.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? ot.extend({}, t) : {
            complete: n || !n && e || ot.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !ot.isFunction(e) && e
        };
        return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue)
        }, i
    }, ot.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, ot.timers = [], ot.fx = P.prototype.init, ot.fx.tick = function() {
        var t, n = ot.timers,
            i = 0;
        for (Re = ot.now(); n.length > i; i++)(t = n[i])() || n[i] !== t || n.splice(i--, 1);
        n.length || ot.fx.stop(), Re = e
    }, ot.fx.timer = function(t) {
        t() && ot.timers.push(t) && ot.fx.start()
    }, ot.fx.interval = 13, ot.fx.start = function() {
        qe || (qe = setInterval(ot.fx.tick, ot.fx.interval))
    }, ot.fx.stop = function() {
        clearInterval(qe), qe = null
    }, ot.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ot.fx.step = {}, ot.expr && ot.expr.filters && (ot.expr.filters.animated = function(t) {
        return ot.grep(ot.timers, function(e) {
            return t === e.elem
        }).length
    }), ot.fn.offset = function(t) {
        if (arguments.length) return t === e ? this : this.each(function(e) {
            ot.offset.setOffset(this, t, e)
        });
        var n, i, o = {
                top: 0,
                left: 0
            },
            r = this[0],
            a = r && r.ownerDocument;
        return a ? (n = a.documentElement, ot.contains(n, r) ? (typeof r.getBoundingClientRect !== F && (o = r.getBoundingClientRect()), i = O(a), {
            top: o.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o) : void 0
    }, ot.offset = {
        setOffset: function(t, e, n) {
            var i = ot.css(t, "position");
            "static" === i && (t.style.position = "relative");
            var o, r, a = ot(t),
                s = a.offset(),
                l = ot.css(t, "top"),
                c = ot.css(t, "left"),
                d = {},
                u = {};
            ("absolute" === i || "fixed" === i) && ot.inArray("auto", [l, c]) > -1 ? (u = a.position(), o = u.top, r = u.left) : (o = parseFloat(l) || 0, r = parseFloat(c) || 0), ot.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (d.top = e.top - s.top + o), null != e.left && (d.left = e.left - s.left + r), "using" in e ? e.using.call(t, d) : a.css(d)
        }
    }, ot.fn.extend({
        position: function() {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === ot.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (n = t.offset()), n.top += ot.css(t[0], "borderTopWidth", !0), n.left += ot.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - ot.css(i, "marginTop", !0),
                    left: e.left - n.left - ot.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || W; t && !ot.nodeName(t, "html") && "static" === ot.css(t, "position");) t = t.offsetParent;
                return t || W
            })
        }
    }), ot.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var i = /Y/.test(n);
        ot.fn[t] = function(o) {
            return ot.access(this, function(t, o, r) {
                var a = O(t);
                return r === e ? a ? n in a ? a[n] : a.document.documentElement[o] : t[o] : (a ? a.scrollTo(i ? ot(a).scrollLeft() : r, i ? r : ot(a).scrollTop()) : t[o] = r, e)
            }, t, o, arguments.length, null)
        }
    }), ot.each({
        Height: "height",
        Width: "width"
    }, function(t, n) {
        ot.each({
            padding: "inner" + t,
            content: n,
            "": "outer" + t
        }, function(i, o) {
            ot.fn[o] = function(o, r) {
                var a = arguments.length && (i || "boolean" != typeof o),
                    s = i || (!0 === o || !0 === r ? "margin" : "border");
                return ot.access(this, function(n, i, o) {
                    var r;
                    return ot.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (r = n.documentElement, Math.max(n.body["scroll" + t], r["scroll" + t], n.body["offset" + t], r["offset" + t], r["client" + t])) : o === e ? ot.css(n, i, s) : ot.style(n, i, o, s)
                }, n, a ? o : e, a, null)
            }
        })
    }), ot.fn.size = function() {
        return this.length
    }, ot.fn.andSelf = ot.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ot : (t.jQuery = t.$ = ot, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ot
    }))
}(window),
function(t, e, n) {
    "use strict";
    if (void 0 === t) throw new Error("ZUI requires jQuery");
    t.zui || (t.zui = function(e) {
        t.isPlainObject(e) && t.extend(t.zui, e)
    });
    var i = {
            all: -1,
            left: 0,
            middle: 1,
            right: 2
        },
        o = 0;
    t.zui({
        uuid: function(t) {
            var e = 1e3 * (new Date).getTime() + o++ % 1e3;
            return t ? e : e.toString(36)
        },
        callEvent: function(e, i, o) {
            if (t.isFunction(e)) {
                o !== n && (e = t.proxy(e, o));
                var r = e(i);
                return i && (i.result = r), !(r !== n && !r)
            }
            return 1
        },
        clientLang: function() {
            var n, i = e.config;
            if (void 0 !== i && i.clientLang && (n = i.clientLang), !n) {
                var o = t("html").attr("lang");
                n = o || (navigator.userLanguage || navigator.userLanguage || "zh_cn")
            }
            return n.replace("-", "_").toLowerCase()
        },
        strCode: function(t) {
            var e = 0;
            if (t && t.length)
                for (var n = 0; n < t.length; ++n) e += n * t.charCodeAt(n);
            return e
        },
        getMouseButtonCode: function(t) {
            return "number" != typeof t && (t = i[t]), t !== n && null !== t || (t = -1), t
        }
    }), t.fn.callEvent = function(e, i, o) {
        var r = t(this),
            a = e.indexOf(".zui."),
            s = a < 0 ? e : e.substring(0, a),
            l = t.Event(s, i);
        if (o === n && a > 0 && (o = r.data(e.substring(a + 1))), o && o.options) {
            var c = o.options[s];
            t.isFunction(c) && (l.result = t.zui.callEvent(c, l, o))
        }
        return r.trigger(l), l
    }, t.fn.callComEvent = function(e, i, o) {
        o === n || t.isArray(o) || (o = [o]);
        var r = this.triggerHandler(i, o),
            a = e.options[i];
        return a && (r = a.apply(e, o)), r
    }
}(jQuery, window, void 0),
function(t) {
    "use strict";
    t.fn.fixOlPd = function(e) {
        return e = e || 10, this.each(function() {
            var n = t(this);
            n.css("paddingLeft", Math.ceil(Math.log10(n.children().length)) * e + 10)
        })
    }, t(function() {
        t(".ol-pd-fix,.article ol").fixOlPd()
    })
}(jQuery),
function(t) {
    "use strict";
    var e = function(n, i) {
        this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.isLoading = !1
    };
    e.DEFAULTS = {
        loadingText: "loading..."
    }, e.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        e += "Text", r.resetText || i.data("resetText", i[o]()), i[o](r[e] || this.options[e]), setTimeout(t.proxy(function() {
            "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, e.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = function(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("zui.button"),
                r = "object" == typeof n && n;
            o || i.data("zui.button", o = new e(this, r)), "toggle" == n ? o.toggle() : n && o.setState(n)
        })
    }, t.fn.button.Constructor = e, t.fn.button.noConflict = function() {
        return t.fn.button = n, this
    }, t(document).on("click.zui.button.data-api", "[data-toggle^=button]", function(e) {
        var n = t(e.target);
        n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle"), e.preventDefault()
    })
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        n = "zui.alert",
        i = function(n) {
            t(n).on("click", e, this.close)
        };
    i.prototype.close = function(e) {
        function i() {
            a.trigger("closed." + n).remove()
        }
        var o = t(this),
            r = o.attr("data-target");
        r || (r = (r = o.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t(r);
        e && e.preventDefault(), a.length || (a = o.hasClass("alert") ? o : o.parent()), a.trigger(e = t.Event("close." + n)), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one(t.support.transition.end, i).emulateTransitionEnd(150) : i())
    };
    var o = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var o = t(this),
                r = o.data(n);
            r || o.data(n, r = new i(this)), "string" == typeof e && r[e].call(o)
        })
    }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click." + n + ".data-api", e, i.prototype.close)
}(window.jQuery),
function(t, e) {
    "use strict";
    var n = "zui.pager",
        i = {
            page: 1,
            recTotal: 0,
            recPerPage: 10
        },
        o = {
            zh_cn: {
                pageOfText: "第 {0} 页",
                prev: "上一页",
                next: "下一页",
                first: "第一页",
                last: "最后一页",
                goto: "跳转",
                pageOf: "第 <strong>{page}</strong> 页",
                totalPage: "共 <strong>{totalPage}</strong> 页",
                totalCount: "共 <strong>{recTotal}</strong> 项",
                pageSize: "每页 <strong>{recPerPage}</strong> 项",
                itemsRange: "第 <strong>{start}</strong> ~ <strong>{end}</strong> 项",
                pageOfTotal: "第 <strong>{page}</strong>/<strong>{totalPage}</strong> 页"
            },
            zh_tw: {
                pageOfText: "第 {0} 頁",
                prev: "上一頁",
                next: "下一頁",
                first: "第一頁",
                last: "最後一頁",
                goto: "跳轉",
                pageOf: "第 <strong>{page}</strong> 頁",
                totalPage: "共 <strong>{totalPage}</strong> 頁",
                totalCount: "共 <strong>{recTotal}</strong> 項",
                pageSize: "每頁 <strong>{recPerPage}</strong> 項",
                itemsRange: "第 <strong>{start}</strong> ~ <strong>{end}</strong> 項",
                pageOfTotal: "第 <strong>{page}</strong>/<strong>{totalPage}</strong> 頁"
            },
            en: {
                pageOfText: "Page {0}",
                prev: "Prev",
                next: "Next",
                first: "First",
                last: "Last",
                goto: "Goto",
                pageOf: "Page <strong>{page}</strong>",
                totalPage: "<strong>{totalPage}</strong> pages",
                totalCount: "<strong>{recTotal}</strong> in total",
                pageSize: "<strong>{recPerPage}</strong> per page",
                itemsRange: "From <strong>{start}</strong> to <strong>{end}</strong>",
                pageOfTotal: "Page <strong>{page}</strong> of <strong>{totalPage}</strong>"
            }
        },
        r = function(e, i) {
            var a = this;
            a.name = n, a.$ = t(e);
            var s = (i = a.options = t.extend({}, r.DEFAULTS, this.$.data(), i)).lang || t.zui.clientLang();
            a.lang = t.isPlainObject(s) ? t.extend(!0, {}, o[s.lang || t.zui.clientLang()], s) : o[s], a.state = {}, a.set(i.page, i.recTotal, i.recPerPage, !0), a.$.on("click", ".pager-goto-btn", function() {
                var e = t(this).closest(".pager-goto"),
                    n = parseInt(e.find(".pager-goto-input").val());
                NaN !== n && a.set(n)
            }).on("click", ".pager-item", function() {
                var e = t(this).data("page");
                "number" == typeof e && e > 0 && a.set(e)
            }).on("click", ".pager-size-menu [data-size]", function() {
                var e = t(this).data("size");
                "number" == typeof e && e > 0 && a.set(-1, -1, e)
            })
        };
    r.prototype.set = function(e, n, o, r) {
        "object" == typeof e && null !== e && (o = e.recPerPage, n = e.recTotal, e = e.page);
        var a = this.state;
        a || (a = t.extend({}, i));
        var s = t.extend({}, a);
        return "number" == typeof o && o > 0 && (a.recPerPage = o), "number" == typeof n && n >= 0 && (a.recTotal = n), "number" == typeof e && e >= 0 && (a.page = e), a.totalPage = a.recTotal && a.recPerPage ? Math.ceil(a.recTotal / a.recPerPage) : 1, a.page = Math.max(0, Math.min(a.page, a.totalPage)), a.pageRecCount = a.recTotal, a.page && a.recTotal && (a.page < a.totalPage ? a.pageRecCount = a.recPerPage : a.page > 1 && (a.pageRecCount = a.recTotal - a.recPerPage * (a.page - 1))), a.skip = a.page > 1 ? (a.page - 1) * a.recPerPage : 0, a.start = a.skip + 1, a.end = a.skip + a.pageRecCount, a.prev = a.page > 1 ? a.page - 1 : 0, a.next = a.page < a.totalPage ? a.page + 1 : 0, this.state = a, r || s.page === a.page && s.recTotal === a.recTotal && s.recPerPage === a.recPerPage || this.$.callComEvent(this, "onPageChange", [a, s]), this.render()
    }, r.prototype.createLinkItem = function(n, i, o) {
        i === e && (i = n);
        var r = t('<a title="' + this.lang.pageOfText.format(n) + '" class="pager-item" data-page="' + n + '"/>').attr("href", n ? this.createLink(n, this.state) : "###").html(i);
        return o || (r = t("<li />").append(r).toggleClass("active", n === this.state.page).toggleClass("disabled", !n || n === this.state.page)), r
    }, r.prototype.createNavItems = function(t) {
        var n = this,
            i = n.$,
            o = n.state,
            r = o.totalPage,
            a = o.page,
            s = function(t, o) {
                if (!1 !== t) {
                    o === e && (o = t);
                    for (var r = t; r <= o; ++r) i.append(n.createLinkItem(r))
                } else i.append(n.createLinkItem(0, o || n.options.navEllipsisItem))
            };
        t === e && (t = n.options.maxNavCount || 10), s(1), r > 1 && (r <= t ? s(2, r) : a < t - 2 ? (s(2, t - 2), s(!1), s(r)) : a > r - t + 2 ? (s(!1), s(r - t + 2, r)) : (s(!1), s(a - Math.ceil((t - 4) / 2), a + Math.floor((t - 4) / 2)), s(!1), s(r)))
    }, r.prototype.createGoto = function() {
        var e = this.state;
        return t('<div class="input-group pager-goto" style="width: ' + (35 + 9 * (e.page + "").length + 25 + 12 * this.lang.goto.length) + 'px"><input value="' + e.page + '" type="number" min="1" max="' + e.totalPage + '" placeholder="' + e.page + '" class="form-control pager-goto-input"><span class="input-group-btn"><button class="btn pager-goto-btn" type="button">' + this.lang.goto + "</button></span></div>")
    }, r.prototype.createSizeMenu = function() {
        var e = this.state,
            n = t('<ul class="dropdown-menu"></ul>'),
            i = this.options.pageSizeOptions;
        "string" == typeof i && (i = i.split(","));
        for (var o = 0; o < i.length; ++o) {
            var r = i[o];
            "string" == typeof r && (r = parseInt(r));
            var a = t('<li><a href="###" data-size="' + r + '">' + r + "</a></li>").toggleClass("active", r === e.recPerPage);
            n.append(a)
        }
        return t('<div class="btn-group pager-size-menu"><button type="button" class="btn dropdown-toggle" data-toggle="dropdown">' + this.lang.pageSize.format(e) + ' <span class="caret"></span></button></div>').addClass(this.options.menuDirection).append(n)
    }, r.prototype.createElement = function(e, n, i) {
        var o = t.proxy(this.createLinkItem, this),
            r = this.lang;
        switch (e) {
            case "prev":
                return o(i.prev, r.prev);
            case "prev_icon":
                return o(i.prev, '<i class="icon ' + this.options.prevIcon + '"></i>');
            case "next":
                return o(i.next, r.next);
            case "next_icon":
                return o(i.next, '<i class="icon ' + this.options.nextIcon + '"></i>');
            case "first":
                return o(1, r.first);
            case "first_icon":
                return o(1, '<i class="icon ' + this.options.firstIcon + '"></i>');
            case "last":
                return o(i.totalPage, r.last);
            case "last_icon":
                return o(i.totalPage, '<i class="icon ' + this.options.lastIcon + '"></i>');
            case "space":
            case "|":
                return t('<li class="space" />');
            case "nav":
            case "pages":
                return void this.createNavItems();
            case "total_text":
                return t(('<div class="pager-label">' + r.totalCount + "</div>").format(i));
            case "page_text":
                return t(('<div class="pager-label">' + r.pageOf + "</div>").format(i));
            case "total_page_text":
                return t(('<div class="pager-label">' + r.totalPage + "</div>").format(i));
            case "page_of_total_text":
                return t(('<div class="pager-label">' + r.pageOfTotal + "</div>").format(i));
            case "page_size_text":
                return t(('<div class="pager-label">' + r.pageSize + "</div>").format(i));
            case "items_range_text":
                return t(('<div class="pager-label">' + r.itemsRange + "</div>").format(i));
            case "goto":
                return this.createGoto();
            case "size_menu":
                return this.createSizeMenu();
            default:
                return t("<li/>").html(e.format(i))
        }
    }, r.prototype.createLink = function(n, i) {
        n === e && (n = this.state.page), i === e && (i = this.state);
        var o = this.options.linkCreator;
        return "string" == typeof o ? o.format(t.extend({}, i, {
            page: n
        })) : t.isFunction(o) ? o(n, i) : "#page=" + n
    }, r.prototype.render = function(e) {
        var n = this.state,
            i = this.options.elementCreator || this.createElement,
            o = t.isPlainObject(i);
        "string" == typeof(e = e || this.elements || this.options.elements) && (e = e.split(",")), this.elements = e, this.$.empty();
        for (var r = 0; r < e.length; ++r) {
            var a = t.trim(e[r]),
                s = (o ? i[a] || i : i).call(this, a, this.$, n);
            !1 === s && (s = this.createElement(a, this.$, n)), s instanceof t && ("LI" !== s[0].tagName && (s = t("<li/>").append(s)), this.$.append(s))
        }
        var l = null;
        return this.$.children("li").each(function() {
            var e = t(this),
                n = !!e.children(".pager-item").length;
            l ? l.toggleClass("pager-item-right", !n) : n && e.addClass("pager-item-left"), l = n ? e : null
        }), l && l.addClass("pager-item-right"), this.$.callComEvent(this, "onRender", [n]), this
    }, r.DEFAULTS = t.extend({
        elements: ["first_icon", "prev_icon", "pages", "next_icon", "last_icon", "page_of_total_text", "items_range_text", "total_text"],
        prevIcon: "icon-double-angle-left",
        nextIcon: "icon-double-angle-right",
        firstIcon: "icon-step-backward",
        lastIcon: "icon-step-forward",
        navEllipsisItem: '<i class="icon icon-ellipsis-h"></i>',
        maxNavCount: 10,
        menuDirection: "dropdown",
        pageSizeOptions: [10, 20, 30, 50, 100]
    }, i), t.fn.pager = function(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data(n),
                a = "object" == typeof e && e;
            o || i.data(n, o = new r(this, a)), "string" == typeof e && o[e]()
        })
    }, r.NAME = n, t.fn.pager.Constructor = r, t(function() {
        t('[data-ride="pager"]').pager()
    })
}(jQuery, void 0),
function(t) {
    "use strict";
    var e = function(e) {
        this.element = t(e)
    };
    e.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.attr("data-target") || e.attr("data-tab");
        if (i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a")[0],
                r = t.Event("show.zui.tab", {
                    relatedTarget: o
                });
            if (e.trigger(r), !r.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.parent("li"), n), this.activate(a, a.parent(), function() {
                    e.trigger({
                        type: "shown.zui.tab",
                        relatedTarget: o
                    })
                })
            }
        }
    }, e.prototype.activate = function(e, n, i) {
        function o() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), i && i()
        }
        var r = n.find("> .active"),
            a = i && t.support.transition && r.hasClass("fade");
        a ? r.one(t.support.transition.end, o).emulateTransitionEnd(150) : o(), r.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = function(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("zui.tab");
            o || i.data("zui.tab", o = new e(this)), "string" == typeof n && o[n]()
        })
    }, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() {
        return t.fn.tab = n, this
    }, t(document).on("click.zui.tab.data-api", '[data-toggle="tab"], [data-tab]', function(e) {
        e.preventDefault(), t(this).tab("show")
    })
}(window.jQuery),
function(t) {
    "use strict";
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        return setTimeout(function() {
            n || t(i).trigger(t.support.transition.end)
        }, e), this
    }, t(function() {
        t.support.transition = function() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in e)
                if (void 0 !== t.style[n]) return {
                    end: e[n]
                };
            return !1
        }(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(t) {
    "use strict";
    var e = "zui.collapse",
        n = function(e, i) {
            this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
        };
    n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var n = t.Event("show." + e);
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                var i = this.$parent && this.$parent.find(".in");
                if (i && i.length) {
                    var o = i.data(e);
                    if (o && o.transitioning) return;
                    i.collapse("hide"), o || i.data(e, null)
                }
                var r = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[r](0), this.transitioning = 1;
                var a = function() {
                    this.$element.removeClass("collapsing").addClass("in")[r]("auto"), this.transitioning = 0, this.$element.trigger("shown." + e)
                };
                if (!t.support.transition) return a.call(this);
                var s = t.camelCase(["scroll", r].join("-"));
                this.$element.one(t.support.transition.end, t.proxy(a, this)).emulateTransitionEnd(350)[r](this.$element[0][s])
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var n = t.Event("hide." + e);
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.trigger("hidden." + e).removeClass("collapsing").addClass("collapse")
                };
                if (!t.support.transition) return o.call(this);
                this.$element[i](0).one(t.support.transition.end, t.proxy(o, this)).emulateTransitionEnd(350)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var i = t.fn.collapse;
    t.fn.collapse = function(i) {
        return this.each(function() {
            var o = t(this),
                r = o.data(e),
                a = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof i && i);
            r || o.data(e, r = new n(this, a)), "string" == typeof i && r[i]()
        })
    }, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = i, this
    }, t(document).on("click." + e + ".data-api", "[data-toggle=collapse]", function(n) {
        var i, o = t(this),
            r = o.attr("data-target") || n.preventDefault() || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
            a = t(r),
            s = a.data(e),
            l = s ? "toggle" : o.data(),
            c = o.attr("data-parent"),
            d = c && t(c);
        s && s.transitioning || (d && d.find('[data-toggle=collapse][data-parent="' + c + '"]').not(o).addClass("collapsed"), o[a.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), a.collapse(l)
    })
}(window.jQuery),
function(t, e) {
    "use strict";
    var n = e(t),
        i = function() {
            var t = n.width();
            e("html").toggleClass("screen-desktop", t >= 992 && t < 1200).toggleClass("screen-desktop-wide", t >= 1200).toggleClass("screen-tablet", t >= 768 && t < 992).toggleClass("screen-phone", t < 768).toggleClass("device-mobile", t < 992).toggleClass("device-desktop", t >= 992)
        },
        o = "",
        r = navigator.userAgent;
    r.match(/(iPad|iPhone|iPod)/i) ? o += " os-ios" : r.match(/android/i) ? o += " os-android" : r.match(/Win/i) ? o += " os-windows" : r.match(/Mac/i) ? o += " os-mac" : r.match(/Linux/i) ? o += " os-linux" : r.match(/X11/i) && (o += " os-unix"), "ontouchstart" in document.documentElement && (o += " is-touchable"), e("html").addClass(o), n.resize(i), i()
}(window, jQuery),
function(t) {
    "use strict";
    var e = {
            zh_cn: '您的浏览器版本过低，无法体验所有功能，建议升级或者更换浏览器。 <a href="http://browsehappy.com/" target="_blank" class="alert-link">了解更多...</a>',
            zh_tw: '您的瀏覽器版本過低，無法體驗所有功能，建議升級或者更换瀏覽器。<a href="http://browsehappy.com/" target="_blank" class="alert-link">了解更多...</a>',
            en: 'Your browser is too old, it has been unable to experience the colorful internet. We strongly recommend that you upgrade a better one. <a href="http://browsehappy.com/" target="_blank" class="alert-link">Learn more...</a>'
        },
        n = function() {
            var t = this.isIE() || this.isIE10() || !1;
            if (t)
                for (var e = 10; e > 5; e--)
                    if (this.isIE(e)) {
                        t = e;
                        break
                    } this.ie = t, this.cssHelper()
        };
    n.prototype.cssHelper = function() {
        var e = this.ie,
            n = t("html");
        n.toggleClass("ie", e).removeClass("ie-6 ie-7 ie-8 ie-9 ie-10"), e && n.addClass("ie-" + e).toggleClass("gt-ie-7 gte-ie-8 support-ie", e >= 8).toggleClass("lte-ie-7 lt-ie-8 outdated-ie", e < 8).toggleClass("gt-ie-8 gte-ie-9", e >= 9).toggleClass("lte-ie-8 lt-ie-9", e < 9).toggleClass("gt-ie-9 gte-ie-10", e >= 10).toggleClass("lte-ie-9 lt-ie-10", e < 10)
    }, n.prototype.tip = function(n) {
        var i = t("#browseHappyTip");
        i.length || (i = t('<div id="browseHappyTip" class="alert alert-dismissable alert-danger-inverse alert-block" style="position: relative; z-index: 99999"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><div class="container"><div class="content text-center"></div></div></div>')).prependTo("body"), i.find(".content").html(n || this.browseHappyTip || e[t.zui.clientLang() || "zh_cn"])
    }, n.prototype.isIE = function(t) {
        if (10 === t) return this.isIE10();
        var e = document.createElement("b");
        return e.innerHTML = "\x3c!--[if IE " + (t || "") + "]><i></i><![endif]--\x3e", 1 === e.getElementsByTagName("i").length
    }, n.prototype.isIE10 = function() {
        return !1
    }, t.zui({
        browser: new n
    }), t(function() {
        t("body").hasClass("disabled-browser-tip") || t.zui.browser.ie && t.zui.browser.ie < 8 && t.zui.browser.tip()
    })
}(jQuery),
function() {
    "use strict";
    Date.ONEDAY_TICKS = 864e5, Date.prototype.format || (Date.prototype.format = function(t) {
        var e = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
        };
        /(y+)/i.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var n in e) new RegExp("(" + n + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[n] : ("00" + e[n]).substr(("" + e[n]).length)));
        return t
    }), Date.prototype.addMilliseconds || (Date.prototype.addMilliseconds = function(t) {
        return this.setTime(this.getTime() + t), this
    }), Date.prototype.addDays || (Date.prototype.addDays = function(t) {
        return this.addMilliseconds(t * Date.ONEDAY_TICKS), this
    }), Date.prototype.clone || (Date.prototype.clone = function() {
        var t = new Date;
        return t.setTime(this.getTime()), t
    }), Date.isLeapYear || (Date.isLeapYear = function(t) {
        return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
    }), Date.getDaysInMonth || (Date.getDaysInMonth = function(t, e) {
        return [31, Date.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
    }), Date.prototype.isLeapYear || (Date.prototype.isLeapYear = function() {
        return Date.isLeapYear(this.getFullYear())
    }), Date.prototype.clearTime || (Date.prototype.clearTime = function() {
        return this.setHours(0), this.setMinutes(0), this.setSeconds(0), this.setMilliseconds(0), this
    }), Date.prototype.getDaysInMonth || (Date.prototype.getDaysInMonth = function() {
        return Date.getDaysInMonth(this.getFullYear(), this.getMonth())
    }), Date.prototype.addMonths || (Date.prototype.addMonths = function(t) {
        var e = this.getDate();
        return this.setDate(1), this.setMonth(this.getMonth() + t), this.setDate(Math.min(e, this.getDaysInMonth())), this
    }), Date.prototype.getLastWeekday || (Date.prototype.getLastWeekday = function(t) {
        t = t || 1;
        for (var e = this.clone(); e.getDay() != t;) e.addDays(-1);
        return e.clearTime(), e
    }), Date.prototype.isSameDay || (Date.prototype.isSameDay = function(t) {
        return t.toDateString() === this.toDateString()
    }), Date.prototype.isSameWeek || (Date.prototype.isSameWeek = function(t) {
        var e = this.getLastWeekday(),
            n = e.clone().addDays(7);
        return t >= e && t < n
    }), Date.prototype.isSameYear || (Date.prototype.isSameYear = function(t) {
        return this.getFullYear() === t.getFullYear()
    }), Date.create || (Date.create = function(t) {
        return t instanceof Date || ("number" == typeof t && t < 1e10 && (t *= 1e3), t = new Date(t)), t
    }), Date.timestamp || (Date.timestamp = function(t) {
        return "number" == typeof t ? t < 1e10 && (t *= 1e3) : t = Date.create(t).getTime(), t
    })
}(),
function() {
    "use strict";
    String.prototype.format || (String.prototype.format = function(t) {
        var e = this;
        if (arguments.length > 0) {
            var n;
            if (arguments.length <= 2 && "object" == typeof t)
                for (var i in t) void 0 !== t[i] && (n = new RegExp("(" + (arguments[1] ? arguments[1].replace("0", i) : "{" + i + "}") + ")", "g"), e = e.replace(n, t[i]));
            else
                for (var o = 0; o < arguments.length; o++) void 0 !== arguments[o] && (n = new RegExp("({[" + o + "]})", "g"), e = e.replace(n, arguments[o]))
        }
        return e
    }), String.prototype.isNum || (String.prototype.isNum = function(t) {
        if (null !== t) {
            var e;
            return e = /\d*/i, t.match(e) == t
        }
        return !1
    }), String.prototype.endsWith || (String.prototype.endsWith = function(t, e) {
        var n = this.toString();
        (void 0 === e || e > n.length) && (e = n.length), e -= t.length;
        var i = n.indexOf(t, e);
        return -1 !== i && i === e
    }), String.prototype.startsWith || (String.prototype.startsWith = function(t, e) {
        return e = e || 0, this.lastIndexOf(t, e) === e
    }), String.prototype.includes || (String.prototype.includes = function() {
        return -1 !== String.prototype.indexOf.apply(this, arguments)
    })
}(),
function(t, e, n) {
    "$:nomunge";

    function i() {
        o = e[s](function() {
            r.each(function() {
                var e = t(this),
                    n = e.width(),
                    i = e.height(),
                    o = t.data(this, c);
                n === o.w && i === o.h || e.trigger(l, [o.w = n, o.h = i])
            }), i()
        }, a[d])
    }
    var o, r = t([]),
        a = t.resize = t.extend(t.resize, {}),
        s = "setTimeout",
        l = "resize",
        c = l + "-special-event",
        d = "delay";
    a[d] = 250, a.throttleWindow = !0, t.event.special[l] = {
        setup: function() {
            if (!a.throttleWindow && this[s]) return !1;
            var e = t(this);
            r = r.add(e), t.data(this, c, {
                w: e.width(),
                h: e.height()
            }), 1 === r.length && i()
        },
        teardown: function() {
            if (!a.throttleWindow && this[s]) return !1;
            var e = t(this);
            r = r.not(e), e.removeData(c), r.length || clearTimeout(o)
        },
        add: function(e) {
            function i(e, i, r) {
                var a = t(this),
                    s = t.data(this, c) || {};
                s.w = i !== n ? i : a.width(), s.h = r !== n ? r : a.height(), o.apply(this, arguments)
            }
            if (!a.throttleWindow && this[s]) return !1;
            var o;
            if (t.isFunction(e)) return o = e, i;
            o = e.handler, e.handler = i
        }
    }
}(jQuery, this),
function(t) {
    "use strict";

    function e(i, o) {
        var r, a = t.proxy(this.process, this);
        this.$element = t(t(i).is("body") ? window : i), this.$body = t("body"), this.$scrollElement = this.$element.on("scroll." + n + ".data-api", a), this.options = t.extend({}, e.DEFAULTS, o), this.selector || (this.selector = (this.options.target || (r = t(i).attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a"), this.offsets = t([]), this.targets = t([]), this.activeTarget = null, this.refresh(), this.process()
    }
    var n = "zui.scrollspy";
    e.DEFAULTS = {
        offset: 10
    }, e.prototype.refresh = function() {
        var e = this.$element[0] == window ? "offset" : "position";
        this.offsets = t([]), this.targets = t([]);
        var n = this;
        this.$body.find(this.selector).map(function() {
            var i = t(this),
                o = i.data("target") || i.attr("href"),
                r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [
                [r[e]().top + (!t.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), o]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            n.offsets.push(this[0]), n.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = (this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight) - this.$scrollElement.height(),
            i = this.offsets,
            o = this.targets,
            r = this.activeTarget;
        if (e >= n) return r != (t = o.last()[0]) && this.activate(t);
        if (r && e <= i[0]) return r != (t = o[0]) && this.activate(t);
        for (t = i.length; t--;) r != o[t] && e >= i[t] && (!i[t + 1] || e <= i[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate." + n)
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = function(i) {
        return this.each(function() {
            var o = t(this),
                r = o.data(n),
                a = "object" == typeof i && i;
            r || o.data(n, r = new e(this, a)), "string" == typeof i && r[i]()
        })
    }, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            e.scrollspy(e.data())
        })
    })
}(jQuery),
function(t, e) {
    "use strict";
    var n, i, o = "localStorage",
        r = "page_" + t.location.pathname + t.location.search,
        a = function() {
            this.slience = !0;
            try {
                o in t && t[o] && t[o].setItem && (this.enable = !0, n = t[o])
            } catch (t) {}
            this.enable || (i = {}, n = {
                getLength: function() {
                    var t = 0;
                    return e.each(i, function() {
                        t++
                    }), t
                },
                key: function(t) {
                    var n, o = 0;
                    return e.each(i, function(e) {
                        if (o === t) return n = e, !1;
                        o++
                    }), n
                },
                removeItem: function(t) {
                    delete i[t]
                },
                getItem: function(t) {
                    return i[t]
                },
                setItem: function(t, e) {
                    i[t] = e
                },
                clear: function() {
                    i = {}
                }
            }), this.storage = n, this.page = this.get(r, {})
        };
    a.prototype.pageSave = function() {
        if (e.isEmptyObject(this.page)) this.remove(r);
        else {
            var t, n = [];
            for (t in this.page) {
                null === this.page[t] && n.push(t)
            }
            for (t = n.length - 1; t >= 0; t--) delete this.page[n[t]];
            this.set(r, this.page)
        }
    }, a.prototype.pageRemove = function(t) {
        void 0 !== this.page[t] && (this.page[t] = null, this.pageSave())
    }, a.prototype.pageClear = function() {
        this.page = {}, this.pageSave()
    }, a.prototype.pageGet = function(t, e) {
        var n = this.page[t];
        return void 0 === e || null !== n && void 0 !== n ? n : e
    }, a.prototype.pageSet = function(t, n) {
        e.isPlainObject(t) ? e.extend(!0, this.page, t) : this.page[this.serialize(t)] = n, this.pageSave()
    }, a.prototype.check = function() {
        if (!this.enable && !this.slience) throw new Error("Browser not support localStorage or enable status been set true.");
        return this.enable
    }, a.prototype.length = function() {
        return this.check() ? n.getLength ? n.getLength() : n.length : 0
    }, a.prototype.removeItem = function(t) {
        return n.removeItem(t), this
    }, a.prototype.remove = function(t) {
        return this.removeItem(t)
    }, a.prototype.getItem = function(t) {
        return n.getItem(t)
    }, a.prototype.get = function(t, e) {
        var n = this.deserialize(this.getItem(t));
        return void 0 !== n && null !== n || void 0 === e ? n : e
    }, a.prototype.key = function(t) {
        return n.key(t)
    }, a.prototype.setItem = function(t, e) {
        return n.setItem(t, e), this
    }, a.prototype.set = function(t, e) {
        return void 0 === e ? this.remove(t) : (this.setItem(t, this.serialize(e)), this)
    }, a.prototype.clear = function() {
        return n.clear(), this
    }, a.prototype.forEach = function(t) {
        for (var e = this.length() - 1; e >= 0; e--) {
            var i = n.key(e);
            t(i, this.get(i))
        }
        return this
    }, a.prototype.getAll = function() {
        var t = {};
        return this.forEach(function(e, n) {
            t[e] = n
        }), t
    }, a.prototype.serialize = function(t) {
        return "string" == typeof t ? t : JSON.stringify(t)
    }, a.prototype.deserialize = function(t) {
        if ("string" == typeof t) try {
            return JSON.parse(t)
        } catch (e) {
            return t || void 0
        }
    }, e.zui({
        store: new a
    })
}(window, jQuery),
function(t) {
    "use strict";
    var e = "zui.searchBox",
        n = function(e, i) {
            var o = this;
            o.name = name, o.$ = t(e), o.options = i = t.extend({}, n.DEFAULTS, o.$.data(), i);
            var r = o.$.is(i.inputSelector) ? o.$ : o.$.find(i.inputSelector);
            if (r.length) {
                var a = function() {
                    o.changeTimer && (clearTimeout(o.changeTimer), o.changeTimer = null);
                    var t = o.getSearch();
                    if (t !== o.lastValue) {
                        var e = "" === t;
                        r.toggleClass("empty", e), o.$.callComEvent(o, "onSearchChange", [t, e]), o.lastValue = t
                    }
                };
                o.$input = r = r.first(), r.on(i.listenEvent, function(t) {
                    o.changeTimer = setTimeout(function() {
                        a()
                    }, i.changeDelay)
                }).on("focus", function(t) {
                    r.addClass("focus"), o.$.callComEvent(o, "onFocus", [t])
                }).on("blur", function(t) {
                    r.removeClass("focus"), o.$.callComEvent(o, "onBlur", [t])
                }).on("keydown", function(t) {
                    var e = 0,
                        n = t.which;
                    27 === n && i.escToClear ? (this.setSearch("", !0), a(), e = 1) : 13 === n && i.onPressEnter && (a(), o.$.callComEvent(o, "onPressEnter", [t]));
                    !1 === o.$.callComEvent(o, "onKeyDown", [t]) && (e = 1), e && t.preventDefault()
                }), o.$.on("click", ".search-clear-btn", function(t) {
                    o.setSearch("", !0), a(), o.focus(), t.preventDefault()
                }), a()
            } else console.error("ZUI: search box init error, cannot find search box input element.")
        };
    n.DEFAULTS = {
        inputSelector: 'input[type="search"],input[type="text"]',
        listenEvent: "change input paste",
        changeDelay: 500
    }, n.prototype.getSearch = function() {
        return this.$input && t.trim(this.$input.val())
    }, n.prototype.setSearch = function(t, e) {
        var n = this.$input;
        n && (n.val(t), e || n.trigger("change"))
    }, n.prototype.focus = function() {
        this.$input && this.$input.focus()
    }, t.fn.searchBox = function(i) {
        return this.each(function() {
            var o = t(this),
                r = o.data(e),
                a = "object" == typeof i && i;
            r || o.data(e, r = new n(this, a)), "string" == typeof i && r[i]()
        })
    }, n.NAME = e, t.fn.searchBox.Constructor = n
}(jQuery),
function(t, e) {
    "use strict";
    var n = "zui.draggable",
        i = {
            container: "body",
            move: !0
        },
        o = 0,
        r = function(e, n) {
            this.$ = t(e), this.id = o++, this.options = t.extend({}, i, this.$.data(), n), this.init()
        };
    r.DEFAULTS = i, r.NAME = n, r.prototype.init = function() {
        var i, o, r, a, s, l = this.$,
            c = "." + n + "." + this.id,
            d = "mousedown" + c,
            u = "mouseup" + c,
            p = "mousemove" + c,
            h = this.options,
            f = h.selector,
            g = h.handle,
            m = l,
            v = t.isFunction(h.move),
            y = function(t) {
                var e = t.pageX,
                    n = t.pageY;
                s = !0;
                var o = {
                    left: e - r.x,
                    top: n - r.y
                };
                m.removeClass("drag-ready").addClass("dragging"), h.move && (v ? h.move(o, m) : m.css(o)), h.drag && h.drag({
                    event: t,
                    element: m,
                    startOffset: r,
                    pos: o,
                    offset: {
                        x: e - i.x,
                        y: n - i.y
                    },
                    smallOffset: {
                        x: e - a.x,
                        y: n - a.y
                    }
                }), a.x = e, a.y = n, h.stopPropagation && t.stopPropagation()
            },
            b = function(n) {
                if (t(e).off(c), s) {
                    var o = {
                        left: n.pageX - r.x,
                        top: n.pageY - r.y
                    };
                    m.removeClass("drag-ready dragging"), h.move && (v ? h.move(o, m) : m.css(o)), h.finish && h.finish({
                        event: n,
                        element: m,
                        startOffset: r,
                        pos: o,
                        offset: {
                            x: n.pageX - i.x,
                            y: n.pageY - i.y
                        },
                        smallOffset: {
                            x: n.pageX - a.x,
                            y: n.pageY - a.y
                        }
                    }), n.preventDefault(), h.stopPropagation && n.stopPropagation()
                } else m.removeClass("drag-ready")
            },
            x = function(n) {
                var l = t.zui.getMouseButtonCode(h.mouseButton);
                if (!(l > -1 && n.button !== l)) {
                    var c = t(this);
                    if (f && (m = g ? c.closest(f) : c), h.before) {
                        if (!1 === h.before({
                                event: n,
                                element: m
                            })) return
                    }
                    var d = t(h.container),
                        v = m.offset();
                    o = d.offset(), i = {
                        x: n.pageX,
                        y: n.pageY
                    }, r = {
                        x: n.pageX - v.left + o.left,
                        y: n.pageY - v.top + o.top
                    }, a = t.extend({}, i), s = !1, m.addClass("drag-ready"), n.preventDefault(), h.stopPropagation && n.stopPropagation(), t(e).on(p, y).on(u, b)
                }
            };
        g ? l.on(d, g, x) : f ? l.on(d, f, x) : l.on(d, x)
    }, r.prototype.destroy = function() {
        var i = "." + n + "." + this.id;
        this.$.off(i), t(e).off(i), this.$.data(n, null)
    }, t.fn.draggable = function(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data(n),
                a = "object" == typeof e && e;
            o || i.data(n, o = new r(this, a)), "string" == typeof e && o[e]()
        })
    }, t.fn.draggable.Constructor = r
}(jQuery, document),
function(t, e, n) {
    "use strict";
    var i = "zui.droppable",
        o = {
            target: ".droppable-target",
            deviation: 5,
            sensorOffsetX: 0,
            sensorOffsetY: 0,
            dropToClass: "drop-to"
        },
        r = 0,
        a = function(e, n) {
            this.id = r++, this.$ = t(e), this.options = t.extend({}, o, this.$.data(), n), this.init()
        };
    a.DEFAULTS = o, a.NAME = i, a.prototype.trigger = function(e, n) {
        return t.zui.callEvent(this.options[e], n, this)
    }, a.prototype.init = function() {
        var o, r, a, s, l, c, d, u, p, h, f, g, m, v = this,
            y = v.$,
            b = v.options,
            x = b.deviation,
            $ = "." + i + "." + v.id,
            w = "mousedown" + $,
            _ = "mouseup" + $,
            C = "mousemove" + $,
            k = b.selector,
            E = b.handle,
            T = b.flex,
            S = b.container,
            j = b.canMoveHere,
            A = b.dropToClass,
            M = y,
            I = !1,
            N = S ? t(b.container).first() : k ? y : t("body"),
            D = function(e) {
                if (I && (f = {
                        left: e.pageX,
                        top: e.pageY
                    }, !(n.abs(f.left - u.left) < x && n.abs(f.top - u.top) < x))) {
                    if (null === a) {
                        var i = N.css("position");
                        "absolute" != i && "relative" != i && "fixed" != i && (c = i, N.css("position", "relative")), a = M.clone().removeClass("drag-from").addClass("drag-shadow").css({
                            position: "absolute",
                            width: M.outerWidth(),
                            transition: "none"
                        }).appendTo(N), M.addClass("dragging"), v.trigger("start", {
                            event: e,
                            element: M,
                            targets: o
                        })
                    }
                    var d = {
                            left: f.left - h.left,
                            top: f.top - h.top
                        },
                        m = {
                            left: d.left - p.left,
                            top: d.top - p.top
                        };
                    a.css(m), t.extend(g, f);
                    var y = !1;
                    s = !1, T || o.removeClass(A);
                    var $ = null;
                    if (o.each(function() {
                            var e = t(this),
                                n = e.offset(),
                                i = e.outerWidth(),
                                o = e.outerHeight(),
                                r = n.left + b.sensorOffsetX,
                                a = n.top + b.sensorOffsetY;
                            if (f.left > r && f.top > a && f.left < r + i && f.top < a + o && ($ && $.removeClass(A), $ = e, !b.nested)) return !1
                        }), $) {
                        s = !0;
                        var w = $.data("id");
                        M.data("id") != w && (l = !1), (null === r || r.data("id") !== w && !l) && (y = !0), r = $, T && o.removeClass(A), r.addClass(A)
                    }
                    T ? null !== r && r.length && (s = !0) : (M.toggleClass("drop-in", s), a.toggleClass("drop-in", s)), j && !1 === j(M, r) || v.trigger("drag", {
                        event: e,
                        isIn: s,
                        target: r,
                        element: M,
                        isNew: y,
                        selfTarget: l,
                        clickOffset: h,
                        offset: d,
                        position: {
                            left: d.left - p.left,
                            top: d.top - p.top
                        },
                        mouseOffset: f
                    }), e.preventDefault()
                }
            },
            L = function(n) {
                if (t(e).off($), clearTimeout(m), I) {
                    if (I = !1, c && N.css("position", c), null === a) return M.removeClass("drag-from"), void v.trigger("always", {
                        event: n,
                        cancel: !0
                    });
                    s || (r = null);
                    var i = {
                            left: (f = n ? {
                                left: n.pageX,
                                top: n.pageY
                            } : g).left - h.left,
                            top: f.top - h.top
                        },
                        d = {
                            left: f.left - g.left,
                            top: f.top - g.top
                        };
                    g.left = f.left, g.top = f.top;
                    var u = {
                        event: n,
                        isIn: s,
                        target: r,
                        element: M,
                        isNew: !l && null !== r,
                        selfTarget: l,
                        offset: i,
                        mouseOffset: f,
                        position: {
                            left: i.left - p.left,
                            top: i.top - p.top
                        },
                        lastMouseOffset: g,
                        moveOffset: d
                    };
                    v.trigger("beforeDrop", u) && s && v.trigger("drop", u), o.removeClass(A), M.removeClass("dragging").removeClass("drag-from"), a.remove(), a = null, v.trigger("finish", u), v.trigger("always", u), n && n.preventDefault()
                }
            },
            B = function(n) {
                var i = t.zui.getMouseButtonCode(b.mouseButton);
                if (!(i > -1 && n.button !== i)) {
                    var f = t(this);
                    k && (M = E ? f.closest(k) : f), M.hasClass("drag-shadow") || b.before && !1 === b.before({
                        event: n,
                        element: M
                    }) || (I = !0, o = t.isFunction(b.target) ? b.target(M, y) : N.find(b.target), r = null, a = null, s = !1, l = !0, c = null, d = M.offset(), (p = N.offset()).top = p.top - N.scrollTop(), p.left = p.left - N.scrollLeft(), u = {
                        left: n.pageX,
                        top: n.pageY
                    }, g = t.extend({}, u), h = {
                        left: u.left - d.left,
                        top: u.top - d.top
                    }, M.addClass("drag-from"), t(e).on(C, D).on(_, L), m = setTimeout(function() {
                        t(e).on(w, L)
                    }, 10), n.preventDefault(), b.stopPropagation && n.stopPropagation())
                }
            };
        E ? y.on(w, E, B) : k ? y.on(w, k, B) : y.on(w, B)
    }, a.prototype.destroy = function() {
        var n = "." + i + "." + this.id;
        this.$.off(n), t(e).off(n), this.$.data(i, null)
    }, a.prototype.reset = function() {
        this.destroy(), this.init()
    }, t.fn.droppable = function(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data(i),
                r = "object" == typeof e && e;
            o || n.data(i, o = new a(this, r)), "string" == typeof e && o[e]()
        })
    }, t.fn.droppable.Constructor = a
}(jQuery, document, Math),
function(t, e) {
    "use strict";

    function n(e, n, r) {
        return this.each(function() {
            var a = t(this),
                s = a.data(i),
                l = t.extend({}, o.DEFAULTS, a.data(), "object" == typeof e && e);
            s || a.data(i, s = new o(this, l)), "string" == typeof e ? s[e](n, r) : l.show && s.show(n, r)
        })
    }
    var i = "zui.modal",
        o = function(n, o) {
            var r = this;
            r.options = o, r.$body = t(document.body), r.$element = t(n), r.$backdrop = r.isShown = null, r.scrollbarWidth = 0, o.moveable === e && (r.options.moveable = r.$element.hasClass("modal-moveable")), o.remote && r.$element.find(".modal-content").load(o.remote, function() {
                r.$element.trigger("loaded." + i)
            })
        };
    o.VERSION = "3.2.0", o.TRANSITION_DURATION = 300, o.BACKDROP_TRANSITION_DURATION = 150, o.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0,
        position: "fit"
    };
    var r = function(e, n) {
        var i = t(window);
        n.left = Math.max(0, Math.min(n.left, i.width() - e.outerWidth())), n.top = Math.max(0, Math.min(n.top, i.height() - e.outerHeight())), e.css(n)
    };
    o.prototype.toggle = function(t, e) {
        return this.isShown ? this.hide() : this.show(t, e)
    }, o.prototype.ajustPosition = function(n) {
        var o = this.options;
        if (n === e && (n = o.position), n !== e && null !== n) {
            t.isFunction(n) && (n = n(this));
            var a = this.$element.find(".modal-dialog"),
                s = t(window).height(),
                l = {
                    maxHeight: "initial",
                    overflow: "visible"
                },
                c = a.find(".modal-body").css(l);
            if (o.scrollInside) {
                var d = o.headerHeight;
                "number" != typeof d ? d = a.find(".modal-header").height() : t.isFunction(d) && (d = d($header)), l.maxHeight = s - d, c.outerHeight() > l.maxHeight && (l.overflow = "auto")
            }
            c.css(l);
            var u = Math.max(0, (s - a.outerHeight()) / 2);
            if ("fit" === n ? n = {
                    top: u > 50 ? Math.floor(2 * u / 3) : u
                } : "center" === n ? n = {
                    top: u
                } : t.isPlainObject(n) || (n = {
                    top: n
                }), a.hasClass("modal-moveable")) {
                var p = null,
                    h = o.rememberPos;
                h && (!0 === h ? p = this.$element.data("modal-pos") : t.zui.store && (p = t.zui.store.pageGet(i + ".rememberPos." + h))), n = t.extend(n, {
                    left: Math.max(0, (t(window).width() - a.outerWidth()) / 2)
                }, p), "inside" === o.moveable ? r(a, n) : a.css(n)
            } else a.css(n)
        }
    }, o.prototype.setMoveale = function() {
        t.fn.draggable || console.error("Moveable modal requires draggable.js.");
        var e = this,
            n = e.options,
            o = e.$element.find(".modal-dialog").removeClass("modal-dragged");
        o.toggleClass("modal-moveable", !!n.moveable), e.$element.data("modal-moveable-setup") || o.draggable({
            container: e.$element,
            handle: ".modal-header",
            before: function() {
                var t = o.css("margin-top");
                t && "0px" !== t && o.css("top", t).css("margin-top", "").addClass("modal-dragged")
            },
            finish: function(o) {
                var r = n.rememberPos;
                r && (e.$element.data("modal-pos", o.pos), t.zui.store && !0 !== r && t.zui.store.pageSet(i + ".rememberPos." + r, o.pos))
            },
            move: "inside" !== n.moveable || function(t) {
                r(o, t)
            }
        })
    }, o.prototype.show = function(e, n) {
        var r = this,
            a = t.Event("show." + i, {
                relatedTarget: e
            });
        r.$element.trigger(a), r.$element.toggleClass("modal-scroll-inside", !!r.options.scrollInside), r.isShown || a.isDefaultPrevented() || (r.isShown = !0, r.options.moveable && r.setMoveale(), r.checkScrollbar(), !1 !== r.options.backdrop && (r.$body.addClass("modal-open"), r.setScrollbar()), r.escape(), r.$element.on("click.dismiss." + i, '[data-dismiss="modal"]', function(t) {
            r.hide(), t.stopPropagation()
        }), r.backdrop(function() {
            var a = t.support.transition && r.$element.hasClass("fade");
            r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), a && r.$element[0].offsetWidth, r.$element.addClass("in").attr("aria-hidden", !1), r.ajustPosition(n), r.enforceFocus();
            var s = t.Event("shown." + i, {
                relatedTarget: e
            });
            a ? r.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                r.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(o.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(s)
        }))
    }, o.prototype.hide = function(e) {
        e && e.preventDefault && e.preventDefault();
        e = t.Event("hide." + i), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, !1 !== this.options.backdrop && (this.$body.removeClass("modal-open"), this.resetScrollbar()), this.escape(), t(document).off("focusin." + i), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss." + i), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : this.hideModal())
    }, o.prototype.enforceFocus = function() {
        t(document).off("focusin." + i).on("focusin." + i, t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, o.prototype.escape = function() {
        this.isShown && this.options.keyboard ? t(document).on("keydown.dismiss." + i, t.proxy(function(n) {
            if (27 == n.which) {
                var o = t.Event("escaping." + i),
                    r = this.$element.triggerHandler(o, "esc");
                if (r != e && !r) return;
                this.hide()
            }
        }, this)) : this.isShown || t(document).off("keydown.dismiss." + i)
    }, o.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$element.trigger("hidden." + i)
        })
    }, o.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, o.prototype.backdrop = function(e) {
        var n = this,
            r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var a = t.support.transition && r;
            if (this.$backdrop = t('<div class="modal-backdrop ' + r + '" />').appendTo(this.$body), this.$element.on("mousedown.dismiss." + i, t.proxy(function(t) {
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), a && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            a ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(o.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(o.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, o.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, o.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, o.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, o.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var a = t.fn.modal;
    t.fn.modal = n, t.fn.modal.Constructor = o, t.fn.modal.noConflict = function() {
        return t.fn.modal = a, this
    }, t(document).on("click." + i + ".data-api", '[data-toggle="modal"]', function(e) {
        var o = t(this),
            r = o.attr("href"),
            a = null;
        try {
            a = t(o.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, ""))
        } catch (t) {
            return
        }
        if (a.length) {
            var s = a.data(i) ? "toggle" : t.extend({
                remote: !/#/.test(r) && r
            }, a.data(), o.data());
            o.is("a") && e.preventDefault(), a.one("show." + i, function(t) {
                t.isDefaultPrevented() || a.one("hidden." + i, function() {
                    o.is(":visible") && o.trigger("focus")
                })
            }), n.call(a, s, this, o.data("position"))
        }
    })
}(jQuery, void 0),
function(t, e, n) {
    "use strict";
    if (!t.fn.modal) throw new Error("Modal trigger requires modal.js");
    var i = "zui.modaltrigger",
        o = function(e, n) {
            e = t.extend({}, o.DEFAULTS, t.ModalTriggerDefaults, n ? n.data() : null, e), this.isShown, this.$trigger = n, this.options = e, this.id = t.zui.uuid()
        };
    o.DEFAULTS = {
        type: "custom",
        height: "auto",
        name: "triggerModal",
        fade: !0,
        position: "fit",
        showHeader: !0,
        delay: 0,
        backdrop: !0,
        keyboard: !0,
        waittime: 0,
        loadingIcon: "icon-spinner-indicator",
        scrollInside: !1
    }, o.prototype.init = function(n) {
        var o = this;
        if (n.url && (!n.type || "ajax" != n.type && "iframe" != n.type) && (n.type = "ajax"), n.remote) n.type = "ajax", "string" == typeof n.remote && (n.url = n.remote);
        else if (n.iframe) n.type = "iframe", "string" == typeof n.iframe && (n.url = n.iframe);
        else if (n.custom && (n.type = "custom", "string" == typeof n.custom)) {
            var r;
            try {
                r = t(n.custom)
            } catch (t) {}
            r && r.length ? n.custom = r : t.isFunction(e[n.custom]) && (n.custom = e[n.custom])
        }
        var a = t("#" + n.name);
        a.length && (o.isShown || a.off(".zui.modal"), a.remove()), a = t('<div id="' + n.name + '" class="modal modal-trigger ' + (n.className || "") + '">' + ("string" == typeof n.loadingIcon && 0 === n.loadingIcon.indexOf("icon-") ? '<div class="icon icon-spin loader ' + n.loadingIcon + '"></div>' : n.loadingIcon) + '<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button class="close" data-dismiss="modal">×</button><h4 class="modal-title"><i class="modal-icon"></i> <span class="modal-title-name"></span></h4></div><div class="modal-body"></div></div></div></div>').appendTo("body").data(i, o);
        var s = function(e, i) {
            var o = n[e];
            t.isFunction(o) && a.on(i + ".zui.modal", o)
        };
        s("onShow", "show"), s("shown", "shown"), s("onHide", "hide"), s("hidden", "hidden"), s("loaded", "loaded"), a.on("shown.zui.modal", function() {
            o.isShown = !0
        }).on("hidden.zui.modal", function() {
            o.isShown = !1
        }), this.$modal = a, this.$dialog = a.find(".modal-dialog"), n.mergeOptions && (this.options = n)
    }, o.prototype.show = function(n) {
        var o = t.extend({}, this.options, {
            url: this.$trigger ? this.$trigger.attr("href") || this.$trigger.attr("data-url") || this.$trigger.data("url") : this.options.url
        }, n);
        this.init(o);
        var r = this,
            a = this.$modal,
            s = this.$dialog,
            l = o.custom,
            c = s.find(".modal-body").css("padding", ""),
            d = s.find(".modal-header"),
            u = s.find(".modal-content");
        a.toggleClass("fade", o.fade).addClass(o.className).toggleClass("modal-loading", !this.isShown).toggleClass("modal-scroll-inside", !!o.scrollInside), s.toggleClass("modal-md", "md" === o.size).toggleClass("modal-sm", "sm" === o.size).toggleClass("modal-lg", "lg" === o.size).toggleClass("modal-fullscreen", "fullscreen" === o.size), d.toggle(o.showHeader), d.find(".modal-icon").attr("class", "modal-icon icon-" + o.icon), d.find(".modal-title-name").text(o.title || ""), o.size && "fullscreen" === o.size && (o.width = "", o.height = "");
        var p = function() {
                clearTimeout(this.resizeTask), this.resizeTask = setTimeout(function() {
                    r.ajustPosition(o.position)
                }, 100)
            },
            h = function(t, e) {
                return void 0 === t && (t = o.delay), setTimeout(function() {
                    s = a.find(".modal-dialog"), o.width && "auto" != o.width && s.css("width", o.width), o.height && "auto" != o.height && (s.css("height", o.height), "iframe" === o.type && c.css("height", s.height() - d.outerHeight())), r.ajustPosition(o.position), a.removeClass("modal-loading"), "iframe" != o.type && s.off("resize." + i).on("resize." + i, p), e && e()
                }, t)
            };
        if ("custom" === o.type && l)
            if (t.isFunction(l)) {
                var f = l({
                    modal: a,
                    options: o,
                    modalTrigger: r,
                    ready: h
                });
                "string" == typeof f && (c.html(f), h())
            } else l instanceof t ? (c.html(t("<div>").append(l.clone()).html()), h()) : (c.html(l), h());
        else if (o.url) {
            var g = function() {
                var t = a.callComEvent(r, "broken");
                t && (c.html(t), h())
            };
            if (a.attr("ref", o.url), "iframe" === o.type) {
                a.addClass("modal-iframe"), this.firstLoad = !0;
                var m = "iframe-" + o.name;
                d.detach(), c.detach(), u.empty().append(d).append(c), c.css("padding", 0).html('<iframe id="' + m + '" name="' + m + '" src="' + o.url + '" frameborder="no"  allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"  allowtransparency="true" scrolling="auto" style="width: 100%; height: 100%; left: 0px;"></iframe>'), o.waittime > 0 && (r.waitTimeout = h(o.waittime, g));
                var v = document.getElementById(m);
                v.onload = v.onreadystatechange = function() {
                    var n = !!o.scrollInside;
                    if (r.firstLoad && a.addClass("modal-loading"), !this.readyState || "complete" == this.readyState) {
                        r.firstLoad = !1, o.waittime > 0 && clearTimeout(r.waitTimeout);
                        try {
                            a.attr("ref", v.contentWindow.location.href);
                            var s = e.frames[m].$;
                            if (s && "auto" === o.height && "fullscreen" != o.size) {
                                var l = s("body").addClass("body-modal").toggleClass("body-modal-scroll-inside", n);
                                o.iframeBodyClass && l.addClass(o.iframeBodyClass);
                                var u = [],
                                    p = function(i) {
                                        a.removeClass("fade");
                                        var r = l.outerHeight();
                                        if (!0 === i && o.onlyIncreaseHeight && (r = Math.max(r, c.data("minModalHeight") || 0), c.data("minModalHeight", r)), n) {
                                            var s = o.headerHeight;
                                            "number" != typeof s ? s = d.height() : t.isFunction(s) && (s = s(d));
                                            var p = t(e).height();
                                            r = Math.min(r, p - s)
                                        }
                                        for (u.length > 1 && r === u[0] && (r = Math.max(r, u[1])), u.push(r); u.length > 2;) u.shift();
                                        c.css("height", r), o.fade && a.addClass("fade"), h()
                                    };
                                a.callComEvent(r, "loaded", {
                                    modalType: "iframe",
                                    jQuery: s
                                }), setTimeout(p, 100), l.off("resize." + i).on("resize." + i, p), n && t(e).off("resize." + i).on("resize." + i, p)
                            } else h()
                        } catch (t) {
                            h()
                        }
                    }
                }
            } else t.ajax(t.extend({
                url: o.url,
                success: function(n) {
                    try {
                        var i = t(n);
                        i.filter(".modal-dialog").length ? s.replaceWith(i) : i.filter(".modal-content").length ? s.find(".modal-content").replaceWith(i) : c.wrapInner(i)
                    } catch (t) {
                        e.console && e.console.warn && console.warn("ZUI: Cannot recogernize remote content.", {
                            error: t,
                            data: n
                        }), a.html(n)
                    }
                    a.callComEvent(r, "loaded", {
                        modalType: "ajax"
                    }), h()
                },
                error: g
            }, o.ajaxOptions))
        }
        a.modal({
            show: "show",
            backdrop: o.backdrop,
            moveable: o.moveable,
            rememberPos: o.rememberPos,
            keyboard: o.keyboard,
            scrollInside: o.scrollInside
        })
    }, o.prototype.close = function(n, i) {
        var o = this;
        (n || i) && o.$modal.on("hidden.zui.modal", function() {
            t.isFunction(n) && n(), "string" == typeof i && i.length && !o.$modal.data("cancel-reload") && ("this" === i ? e.location.reload() : e.location = i)
        }), o.$modal.modal("hide")
    }, o.prototype.toggle = function(t) {
        this.isShown ? this.close() : this.show(t)
    }, o.prototype.ajustPosition = function(e) {
        e = e === n ? this.options.position : e, t.isFunction(e) && (e = e(this)), this.$modal.modal("ajustPosition", e)
    }, t.zui({
        ModalTrigger: o,
        modalTrigger: new o
    }), t.fn.modalTrigger = function(e, n) {
        return t(this).each(function() {
            var r = t(this),
                a = r.data(i),
                s = t.extend({
                    title: r.attr("title") || r.text(),
                    url: r.attr("href"),
                    type: r.hasClass("iframe") ? "iframe" : ""
                }, r.data(), t.isPlainObject(e) && e);
            a || r.data(i, a = new o(s, r)), "string" == typeof e ? a[e](n) : s.show && a.show(n), r.on((s.trigger || "click") + ".toggle." + i, function(e) {
                s = t.extend(s, {
                    url: r.attr("href") || r.attr("data-url") || r.data("url") || s.url
                }), a.toggle(s), r.is("a") && e.preventDefault()
            })
        })
    };
    var r = t.fn.modal;
    t.fn.modal = function(e, n) {
        return t(this).each(function() {
            var i = t(this);
            i.hasClass("modal") ? r.call(i, e, n) : i.modalTrigger(e, n)
        })
    }, t.fn.modal.bs = r;
    var a = function(e) {
        return (e = t(e ? e : ".modal.modal-trigger")) && e instanceof t ? e : null
    };
    t.zui({
        closeModal: function(n, o, r) {
            var s = n;
            if (t.isFunction(n)) {
                var l = r;
                r = o, o = n, n = l
            }(n = a(n)) && n.length ? n.each(function() {
                t(this).data(i).close(o, r)
            }) : t("body").hasClass("modal-open") || t(".modal.in").length || t("body").hasClass("body-modal") && e.parent.$.zui.closeModal(s, o, r)
        },
        ajustModalPosition: function(t, e) {
            (e = a(e)) && e.length && e.modal("ajustPosition", t)
        }
    }), t(document).on("click." + i + ".data-api", '[data-toggle="modal"]', function(e) {
        var n = t(this),
            o = n.attr("href"),
            r = null;
        try {
            r = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, ""))
        } catch (t) {}
        r && r.length || (n.data(i) ? n.trigger(".toggle." + i) : n.modalTrigger({
            show: !0
        })), n.is("a") && e.preventDefault()
    }).on("click." + i + ".data-api", '[data-dismiss="modal"]', function() {
        t.zui.closeModal()
    })
}(window.jQuery, window, void 0),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", t, e)
    };
    e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, e.prototype.init = function(e, n, i) {
        this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i);
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var a = o[r];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focus",
                    l = "hover" == a ? "mouseleave" : "blur";
                this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, e.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("zui." + this.type);
        if (clearTimeout(n.timeout), n.hoverState = "in", !n.options.delay || !n.options.delay.show) return n.show();
        n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)
    }, e.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("zui." + this.type);
        if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
        n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)
    }, e.prototype.show = function(e) {
        var n = t.Event("show.zui." + this.type);
        if ((e || this.hasContent()) && this.enabled) {
            var i = this;
            if (i.$element.trigger(n), n.isDefaultPrevented()) return;
            var o = i.tip();
            i.setContent(e), i.options.animation && o.addClass("fade");
            var r = "function" == typeof i.options.placement ? i.options.placement.call(i, o[0], i.$element[0]) : i.options.placement,
                a = /\s?auto?\s?/i,
                s = a.test(r);
            s && (r = r.replace(a, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r), i.options.container ? o.appendTo(i.options.container) : o.insertAfter(i.$element);
            var l = i.getPosition(),
                c = o[0].offsetWidth,
                d = o[0].offsetHeight;
            if (s) {
                var u = i.$element.parent(),
                    p = r,
                    h = document.documentElement.scrollTop || document.body.scrollTop,
                    f = "body" == i.options.container ? window.innerWidth : u.outerWidth(),
                    g = "body" == i.options.container ? window.innerHeight : u.outerHeight(),
                    m = "body" == i.options.container ? 0 : u.offset().left;
                r = "bottom" == r && l.top + l.height + d - h > g ? "top" : "top" == r && l.top - h - d < 0 ? "bottom" : "right" == r && l.right + c > f ? "left" : "left" == r && l.left - c < m ? "right" : r, o.removeClass(p).addClass(r)
            }
            var v = i.getCalculatedOffset(r, l, c, d);
            i.applyPlacement(v, r);
            var y = function() {
                var t = i.hoverState;
                i.$element.trigger("shown.zui." + i.type), i.hoverState = null, "out" == t && i.leave(i)
            };
            t.support.transition && i.$tip.hasClass("fade") ? o.one("bsTransitionEnd", y).emulateTransitionEnd(150) : y()
        }
    }, e.prototype.applyPlacement = function(t, e) {
        var n, i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            a = parseInt(i.css("margin-top"), 10),
            s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), t.top = t.top + a, t.left = t.left + s, i.offset(t).addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        if ("top" == e && c != r && (n = !0, t.top = t.top + r - c), /bottom|top/.test(e)) {
            var d = 0;
            t.left < 0 && (d = -2 * t.left, t.left = 0, i.offset(t), l = i[0].offsetWidth, c = i[0].offsetHeight), this.replaceArrow(d - o + l, l, "left")
        } else this.replaceArrow(c - r, c, "top");
        n && i.offset(t)
    }, e.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
    }, e.prototype.setContent = function(t) {
        var e = this.tip(),
            n = t || this.getTitle();
        this.options.tipId && e.attr("id", this.options.tipId), this.options.tipClass && e.addClass(this.options.tipClass), e.find(".tooltip-inner")[this.options.html ? "html" : "text"](n), e.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function() {
        function e() {
            "in" != n.hoverState && i.detach()
        }
        var n = this,
            i = this.tip(),
            o = t.Event("hide.zui." + this.type);
        if (this.$element.trigger(o), !o.isDefaultPrevented()) return i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? i.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(), this.$element.trigger("hidden.zui." + this.type), this
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function() {
        var e = this.$element[0];
        return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
            width: e.offsetWidth,
            height: e.offsetHeight
        }, this.$element.offset())
    }, e.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, e.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, e.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, e.prototype.enable = function() {
        this.enabled = !0
    }, e.prototype.disable = function() {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function(e) {
        var n = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("zui." + this.type) : this;
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, e.prototype.destroy = function() {
        this.hide().$element.off("." + this.type).removeData("zui." + this.type)
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = function(n, i) {
        return this.each(function() {
            var o = t(this),
                r = o.data("zui.tooltip"),
                a = "object" == typeof n && n;
            r || o.data("zui.tooltip", r = new e(this, a)), "string" == typeof n && r[n](i)
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n, this
    }
}(window.jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), (e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = e, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTarget();
        if (e) return e.find(".arrow").length < 1 && t.addClass("no-arrow"), void t.html(e.html());
        var n = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](n), t.find(".popover-content")[this.options.html ? "html" : "text"](i), t.removeClass("fade top bottom left right in"), this.options.tipId && t.attr("id", this.options.tipId), this.options.tipClass && t.addClass(this.options.tipClass), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function() {
        return this.getTarget() || this.getTitle() || this.getContent()
    }, e.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.getTarget = function() {
        var e = this.$element,
            n = this.options,
            i = e.attr("data-target") || ("function" == typeof n.target ? n.target.call(e[0]) : n.target);
        return !!i && ("$next" == i ? e.next(".popover") : t(i))
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, e.prototype.tip = function() {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var n = t.fn.popover;
    t.fn.popover = function(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("zui.popover"),
                r = "object" == typeof n && n;
            o || i.data("zui.popover", o = new e(this, r)), "string" == typeof n && o[n]()
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
        return t.fn.popover = n, this
    }
}(window.jQuery),
function(t) {
    "use strict";

    function e() {
        t(o).remove(), t(r).each(function(e) {
            var o = n(t(this));
            o.hasClass("open") && (o.trigger(e = t.Event("hide." + i)), e.isDefaultPrevented() || o.removeClass("open").trigger("hidden." + i))
        })
    }

    function n(e) {
        var n = e.attr("data-target");
        n || (n = (n = e.attr("href")) && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i;
        try {
            i = n && t(n)
        } catch (t) {}
        return i && i.length ? i : e.parent()
    }
    var i = "zui.dropdown",
        o = ".dropdown-backdrop",
        r = "[data-toggle=dropdown]",
        a = function(e) {
            t(e).on("click." + i, this.toggle)
        };
    a.prototype.toggle = function(a) {
        var s = t(this),
            l = a.type;
        if (!s.is(".disabled, :disabled")) {
            var c = n(s),
                d = c.hasClass("open");
            if ("click" === l ? (d = c.hasClass("open"), e()) : (d = "mouseenter" !== l, t(o).remove(), t(r).each(function(e) {
                    var o = n(t(this));
                    o.hasClass("mouseopen") && (o.trigger(e = t.Event("hide." + i)), e.isDefaultPrevented() || o.removeClass("mouseopen").trigger("hidden." + i))
                })), !d) {
                if ("ontouchstart" in document.documentElement && !c.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e), c.trigger(a = t.Event("show." + i)), a.isDefaultPrevented()) return;
                "click" === l ? c.toggleClass("open").trigger("shown." + i) : c.toggleClass("mouseopen").trigger("shown." + i), s.focus()
            }
            return !1
        }
    }, a.prototype.keydown = function(e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var i = t(this);
            if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = n(i),
                    a = o.hasClass("open");
                if (!a || a && 27 == e.keyCode) return 27 == e.which && o.find(r).focus(), i.click();
                var s = t("[role=menu] li:not(.divider):visible a", o);
                if (s.length) {
                    var l = s.index(s.filter(":focus"));
                    38 == e.keyCode && l > 0 && l--, 40 == e.keyCode && l < s.length - 1 && l++, ~l || (l = 0), s.eq(l).focus()
                }
            }
        }
    };
    var s = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("dropdown");
            i || n.data("dropdown", i = new a(this)), "string" == typeof e && i[e].call(n)
        })
    }, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = s, this
    };
    var l = i + ".data-api";
    t(document).on("click." + l, e).on("click." + l, ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click." + l, r, a.prototype.toggle).on("keydown." + l, r + ", [role=menu]", a.prototype.keydown).on("mouseenter", ".dropdown", a.prototype.toggle).on("mouseleave", ".dropdown", a.prototype.toggle)
}(window.jQuery),
function(t, e) {
    "use strict";
    var n = "zui.contextmenu",
        i = {
            duration: 200
        },
        o = !1,
        r = {},
        a = "zui-contextmenu-" + t.zui.uuid(),
        s = 0,
        l = 0,
        c = null,
        d = function(e, n) {
            "function" == typeof e && (n = e, e = null), c && (clearTimeout(c), c = null);
            var i = t("#" + a);
            if (i.length) {
                var o = i.data("options");
                if (!e || o.id === e) {
                    var s = function() {
                        i.hide(), o.onHidden && o.onHidden(), n && n()
                    };
                    o.onHide && o.onHide();
                    var l = o.animation;
                    i.removeClass("in"), l ? c = setTimeout(s, o.duration) : s()
                }
            }
            return r
        };
    t(document).on("click", function(e) {
        o || t(e.target).closest(".contextmenu").length || d()
    }), t.extend(r, {
        NAME: n,
        DEFAULTS: i,
        show: function(u, p, h) {
            t.isPlainObject(u) && (h = p, u = (p = u).items), o = !0;
            var f = (p = t.extend({}, i, p)).x,
                g = p.y;
            f === e && (f = (p.event || p).clientX), f === e && (f = s), g === e && (g = (p.event || p).clientY), g === e && (g = l);
            var m = t("#" + a);
            m.length || (m = t('<div style="display: none; position: fixed; z-index: 2000;" class="contextmenu" id="' + a + '"><ul class="dropdown-menu contextmenu-menu"></ul></div>').appendTo("body"));
            var v = m.find(".contextmenu-menu").off("click." + n).on("click." + n, "a", function(e) {
                var n = t(this);
                !1 !== (p.onClickItem && p.onClickItem(n.data("item"), n, e)) && d()
            }).empty();
            m.hide().attr("class", "contextmenu");
            var y = p.itemCreator || function(e, n) {
                    if ("string" == typeof e && (e = "seperator" === e || "divider" === e || "-" === e || "|" === e ? {
                            type: "seperator"
                        } : {
                            label: e,
                            id: n
                        }), "seperator" === e.type || "divider" === e.type) return t('<li class="divider"></li>');
                    var i = t("<a/>").attr({
                        href: e.url || "###",
                        class: e.className,
                        style: e.style
                    }).data("item", e);
                    return e.html ? i.html(!0 === e.html ? e.label || e.text : e.html) : i.text(e.label || e.text), e.onClick && i.on("click", e.onClick), t("<li />").toggleClass("disabled", !0 === e.disabled).append(i)
                },
                b = typeof u;
            "string" === b ? u = u.split(",") : "function" === b && (u = u(p)), t.each(u, function(t, e) {
                v.append(y(e, t, p))
            });
            var x = p.animation,
                $ = p.duration;
            !0 === x && (p.animation = x = "fade"), c && (clearTimeout(c), c = null);
            var w = function() {
                m.addClass("in"), p.onShown && p.onShown(), h && h()
            };
            p.onShow && p.onShow(), m.data("options", {
                animation: x,
                onHide: p.onHide,
                onHidden: p.onHidden,
                id: p.id,
                duration: $
            });
            var _ = t(window);
            return f = Math.max(0, Math.min(f, _.width() - v.outerWidth())), g = Math.max(0, Math.min(g, _.height() - v.outerHeight())), m.css({
                left: f,
                top: g
            }), x ? (m.addClass("open").addClass(x).show(), c = setTimeout(function() {
                w(), o = !1
            }, p.duration)) : (m.addClass("open").show(), w(), c = setTimeout(function() {
                o = !1
            }, 200)), r
        },
        hide: d,
        listenMouse: function() {
            return t(document).off("mousemove." + n).on("mousemove." + n, function(t) {
                s = t.clientX, l = t.clientY
            }), r
        }
    }), t.zui({
        ContextMenu: r
    });
    var u = function(e, i) {
        var o = this;
        o.name = n, o.$ = t(e);
        var a = (i = o.options = t.extend({
            trigger: "contextmenu"
        }, r.DEFAULTS, this.$.data(), i)).trigger;
        o.id = t.zui.uuid();
        var s = function(t) {
                if ("mousedown" !== t.type || 2 === t.button) {
                    var e = {
                        x: t.clientX,
                        y: t.clientY,
                        event: t
                    };
                    return i.itemsCreator && (e.items = i.itemsCreator.call(this, t)), o.show(e), t.preventDefault(), t.returnValue = !1, !1
                }
            },
            l = a + "." + n;
        i.selector ? o.$.on(l, i.selector, s) : o.$.on(l, s)
    };
    u.prototype.destory = function() {
        that.$.off("." + n)
    }, u.prototype.hide = function(t) {
        r.hide(this.id, t)
    }, u.prototype.show = function(e, n) {
        e = t.extend({}, this.options, e), r.show(e, n)
    }, t.fn.contextmenu = function(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data(n),
                r = "object" == typeof e && e;
            o || i.data(n, o = new u(this, r)), "string" == typeof e && o[e]()
        })
    }, t.fn.contextmenu.Constructor = u
}(jQuery, void 0),
function(t) {
    "use strict";
    var e = function(e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
    };
    e.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        touchable: !0
    }, e.prototype.touchable = function() {
        function e(e) {
            (e = e || window.event).originalEvent && (e = e.originalEvent);
            t(this);
            switch (e.type) {
                case "touchstart":
                    n = e.touches[0].pageX, i = e.touches[0].pageY;
                    break;
                case "touchend":
                    var r = e.changedTouches[0].pageX - n,
                        a = e.changedTouches[0].pageY - i;
                    if (Math.abs(r) > Math.abs(a)) ! function(t, e) {
                        e > 10 ? o.prev() : e < -10 && o.next()
                    }(0, r), Math.abs(r) > 10 && e.preventDefault();
                    else {
                        var s = t(window);
                        t("body,html").animate({
                            scrollTop: s.scrollTop() - a
                        }, 400)
                    }
            }
        }
        if (this.options.touchable) {
            this.$element.on("touchstart touchmove touchend", e);
            var n, i, o = this
        }
    }, e.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, e.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, e.prototype.to = function(e) {
        var n = this,
            i = this.getActiveIndex();
        if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid", function() {
            n.to(e)
        }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]))
    }, e.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition.end && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, e.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, e.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, e.prototype.slide = function(e, n) {
        var i = this.$element.find(".item.active"),
            o = n || i[e](),
            r = this.interval,
            a = "next" == e ? "left" : "right",
            s = "next" == e ? "first" : "last",
            l = this;
        if (!o.length) {
            if (!this.options.wrap) return;
            o = this.$element.find(".item")[s]()
        }
        this.sliding = !0, r && this.pause();
        var c = t.Event("slide.zui.carousel", {
            relatedTarget: o[0],
            direction: a
        });
        if (!o.hasClass("active")) {
            if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
                    var e = t(l.$indicators.children()[l.getActiveIndex()]);
                    e && e.addClass("active")
                })), t.support.transition && this.$element.hasClass("slide")) {
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                o.addClass(e), o[0].offsetWidth, i.addClass(a), o.addClass(a), i.one(t.support.transition.end, function() {
                    o.removeClass([e, a].join(" ")).addClass("active"), i.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                        l.$element.trigger("slid")
                    }, 0)
                }).emulateTransitionEnd(600)
            } else {
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
            }
            return r && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = function(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("zui.carousel"),
                r = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n),
                a = "string" == typeof n ? n : r.slide;
            o || i.data("zui.carousel", o = new e(this, r)), "number" == typeof n ? o.to(n) : a ? o[a]() : r.interval && o.pause().cycle(), r.touchable && o.touchable()
        })
    }, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = n, this
    }, t(document).on("click.zui.carousel.data-api", "[data-slide], [data-slide-to]", function(e) {
        var n, i = t(this),
            o = t(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
            r = t.extend({}, o.data(), i.data()),
            a = i.attr("data-slide-to");
        a && (r.interval = !1), o.carousel(r), (a = i.attr("data-slide-to")) && o.data("zui.carousel").to(a), e.preventDefault()
    }), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var e = t(this);
            e.carousel(e.data())
        })
    })
}(window.jQuery),
function(t) {
    "use strict";
    jQuery.zui.imgReady = function() {
        var t = [],
            e = null,
            n = function() {
                for (var e = 0; e < t.length; e++) t[e].end ? t.splice(e--, 1) : t[e]();
                !t.length && i()
            },
            i = function() {
                clearInterval(e), e = null
            };
        return function(i, o, r, a) {
            var s, l, c, d, u, p = new Image;
            if (p.src = i, p.complete) return o.call(p), void(r && r.call(p));
            l = p.width, c = p.height, p.onerror = function() {
                a && a.call(p), s.end = !0, p = p.onload = p.onerror = null
            }, (s = function() {
                d = p.width, u = p.height, (d !== l || u !== c || d * u > 1024) && (o.call(p), s.end = !0)
            })(), p.onload = function() {
                !s.end && s(), r && r.call(p), p = p.onload = p.onerror = null
            }, s.end || (t.push(s), null === e && (e = setInterval(n, 40)))
        }
    }()
}(),
function(t, e, n) {
    "use strict";
    if (!t.fn.modalTrigger) throw new Error("modal & modalTrigger requires for lightbox");
    if (!t.zui.imgReady) throw new Error("imgReady requires for lightbox");
    var i = function(e, n) {
        this.$ = t(e), this.options = this.getOptions(n), this.init()
    };
    i.DEFAULTS = {
        modalTeamplate: '<div class="icon-spinner icon-spin loader"></div><div class="modal-dialog"><button class="close" data-dismiss="modal" aria-hidden="true"><i class="icon-remove"></i></button><button class="controller prev"><i class="icon icon-chevron-left"></i></button><button class="controller next"><i class="icon icon-chevron-right"></i></button><img class="lightbox-img" src="{image}" alt="" data-dismiss="modal" /><div class="caption"><div class="content">{caption}<div></div></div>'
    }, i.prototype.getOptions = function(e) {
        return (e = t.extend({}, i.DEFAULTS, this.$.data(), e)).image || (e.image = this.$.attr("src") || this.$.attr("href") || this.$.find("img").attr("src"), this.$.data("image", e.image)), e
    }, i.prototype.init = function() {
        this.bindEvents()
    }, i.prototype.initGroups = function() {
        var e = this.$.data("groups");
        e || (e = t('[data-toggle="lightbox"][data-group="' + this.options.group + '"], [data-lightbox-group="' + this.options.group + '"]'), this.$.data("groups", e), e.each(function(e) {
            t(this).attr("data-group-index", e)
        })), this.groups = e, this.groupIndex = parseInt(this.$.data("group-index"))
    }, i.prototype.setImage = function(t, e) {
        void 0 !== t && (this.options.image = t), void 0 !== e && (this.options.caption = e)
    }, i.prototype.show = function(t, e) {
        this.setImage(t, e), this.$.triggerHandler("click")
    }, i.prototype.bindEvents = function() {
        var i = this.$,
            o = this,
            r = this.options;
        if (!r.image) return !1;
        i.modalTrigger({
            type: "custom",
            name: "lightboxModal",
            position: "center",
            custom: function(i) {
                o.initGroups();
                var a = i.modal,
                    s = o.groups,
                    l = o.groupIndex;
                a.addClass("modal-lightbox").html(r.modalTeamplate.format(r)).toggleClass("lightbox-with-caption", "string" == typeof r.caption).removeClass("lightbox-full").data("group-index", l);
                var c = a.find(".modal-dialog"),
                    d = t(e).width();
                t.zui.imgReady(r.image, function() {
                    c.css({
                        width: n.min(d, this.width)
                    }), d < this.width + 30 && a.addClass("lightbox-full"), i.ready(200)
                }), a.find(".prev").toggleClass("show", s.filter('[data-group-index="' + (l - 1) + '"]').length > 0), a.find(".next").toggleClass("show", s.filter('[data-group-index="' + (l + 1) + '"]').length > 0), a.find(".controller").click(function() {
                    var o = t(this),
                        r = a.data("group-index") + (o.hasClass("prev") ? -1 : 1),
                        l = s.filter('[data-group-index="' + r + '"]');
                    if (l.length) {
                        var u = l.data("image"),
                            p = l.data("caption");
                        a.addClass("modal-loading").data("group-index", r).toggleClass("lightbox-with-caption", "string" == typeof p).removeClass("lightbox-full"), a.find(".lightbox-img").attr("src", u), a.find(".caption > .content").text(p), d = t(e).width(), t.zui.imgReady(u, function() {
                            c.css({
                                width: n.min(d, this.width)
                            }), d < this.width + 30 && a.addClass("lightbox-full"), i.ready()
                        })
                    }
                    return a.find(".prev").toggleClass("show", s.filter('[data-group-index="' + (r - 1) + '"]').length > 0), a.find(".next").toggleClass("show", s.filter('[data-group-index="' + (r + 1) + '"]').length > 0), !1
                })
            }
        })
    }, t.fn.lightbox = function(e) {
        var n = "group" + (new Date).getTime();
        return this.each(function() {
            var o = t(this),
                r = "object" == typeof e && e;
            "object" == typeof r && r.group ? o.attr("data-lightbox-group", r.group) : o.data("group") ? o.attr("data-lightbox-group", o.data("group")) : o.attr("data-lightbox-group", n), o.data("group", o.data("lightbox-group"));
            var a = o.data("zui.lightbox");
            a || o.data("zui.lightbox", a = new i(this, r)), "string" == typeof e && a[e]()
        })
    }, t.fn.lightbox.Constructor = i, t(function() {
        t('[data-toggle="lightbox"]').lightbox()
    })
}(jQuery, window, Math),
function(t, e, n) {
    "use strict";
    var i = 0,
        o = {
            type: "default",
            placement: "top",
            time: 4e3,
            parent: "body",
            icon: null,
            close: !0,
            fade: !0,
            scale: !0
        },
        r = {},
        a = function(e, a) {
            t.isPlainObject(e) && (e = (a = e).message);
            var s = this;
            a = s.options = t.extend({}, o, a), s.id = a.id || i++;
            var l = r[s.id];
            l && l.destroy(), r[s.id] = s, s.message = (a.icon ? '<i class="icon-' + a.icon + ' icon"></i> ' : "") + e, s.$ = t('<div class="messager messager-{type} {placement}" style="display: none"><div class="messager-content"></div><div class="messager-actions"></div></div>'.format(a)).toggleClass("fade", a.fade).toggleClass("scale", a.scale).attr("id", "messager-" + s.id), a.cssClass && s.$.addClass(a.cssClass);
            var c = !1,
                d = s.$.find(".messager-actions"),
                u = function(e) {
                    var i = t('<button type="button" class="action action-' + e.name + '"/>');
                    "close" === e.name && i.addClass("close"), e.html !== n && i.html(e.html), e.icon !== n && i.append('<i class="action-icon icon-' + e.icon + '"/>'), e.text !== n && i.append('<span class="action-text">' + e.text + "</span>"), e.tooltip !== n && i.attr("title", e.tooltip).tooltip(), i.data("action", e), d.append(i)
                };
            a.actions && t.each(a.actions, function(t, e) {
                e.name === n && (e.name = t), "close" == e.name && (c = !0), u(e)
            }), !c && a.close && u({
                name: "close",
                html: "&times;"
            }), s.$.on("click", ".action", function(e) {
                var n = t(this).data("action");
                a.onAction && !1 === a.onAction.call(this, n.name, n, s) || t.isFunction(n.action) && !1 === n.action.call(this, s) || (s.hide(), e.stopPropagation())
            }), s.$.on("click", function(t) {
                if (a.onAction) {
                    !0 === a.onAction.call(this, "content", null, s) && s.hide()
                }
            });
            var p = s.$.find(".messager-content").html(s.message);
            a.contentClass && p.addClass(a.contentClass), s.$.data("zui.messager", s), a.show && s.message !== n && s.show()
        };
    a.prototype.update = function(e, n) {
        var i = this.options;
        this.$.removeClass("messager-" + i.type), n && (i = t.extend(i, n)), this.$.addClass("messager-" + i.type), e && (this.message = (i.icon ? '<i class="icon-' + i.icon + ' icon"></i> ' : "") + e, this.$.find(".messager-content").html(this.message))
    }, a.prototype.show = function(i, o) {
        var r = this,
            a = this.options;
        if (t.isFunction(i)) {
            var s = o;
            o = i, s !== n && (i = s)
        } {
            if (!r.isShow) {
                r.hiding && (clearTimeout(r.hiding), r.hiding = null), r.update(i);
                var l = a.placement,
                    c = t(a.parent),
                    d = c.children(".messagers-holder." + l);
                if (d.length || (d = t("<div/>").attr("class", "messagers-holder " + l).appendTo(c)), d.append(r.$), "center" === l) {
                    var u = t(e).height() - d.height();
                    d.css("top", Math.max(-u, u / 2))
                }
                return r.$.show().addClass("in"), a.time && (r.hiding = setTimeout(function() {
                    r.hide()
                }, a.time)), r.isShow = !0, o && o(), r
            }
            r.hide(function() {
                r.show(i, o)
            })
        }
    }, a.prototype.hide = function(t, e) {
        !0 === t && (e = !0, t = null);
        var n = this;
        if (n.$.hasClass("in")) {
            n.$.removeClass("in");
            var i = function() {
                var e = n.$.parent();
                n.$.detach(), e.children().length || e.remove(), t && t(!0)
            };
            e ? i() : setTimeout(i, 200)
        } else t && t(!1);
        n.isShow = !1
    }, a.prototype.destroy = function() {
        var t = this;
        t.hide(function() {
            t.$.remove(), t.$ = null
        }, !0), delete r[t.id]
    }, a.all = r, a.DEFAULTS = o;
    var s = function() {
            t(".messager").each(function() {
                var e = t(this).data("zui.messager");
                e && e.hide && e.hide(!0)
            })
        },
        l = function(e, i) {
            "string" == typeof i && (i = {
                type: i
            }), (i = t.extend({}, i)).id === n && s();
            var o = r[i.id] || new a(e, i);
            return o.show(), o
        },
        c = {
            show: l,
            hide: s
        };
    t.each({
        primary: 0,
        success: "ok-sign",
        info: "info-sign",
        warning: "warning-sign",
        danger: "exclamation-sign",
        important: 0,
        special: 0
    }, function(e, n) {
        c[e] = function(i, o) {
            return l(i, t.extend({
                type: e,
                icon: n || null
            }, function(t) {
                return "string" == typeof t ? {
                    placement: t
                } : t
            }(o)))
        }
    }), t.zui({
        Messager: a,
        showMessager: l,
        messager: c
    })
}(jQuery, window, void 0),
function(t, e, n, i) {
    "use strict";

    function o(t) {
        if ((t = t.toLowerCase()) && l.test(t)) {
            var e;
            if (4 === t.length) {
                var n = "#";
                for (e = 1; e < 4; e += 1) n += t.slice(e, e + 1).concat(t.slice(e, e + 1));
                t = n
            }
            var i = [];
            for (e = 1; e < 7; e += 2) i.push(g("0x" + t.slice(e, e + 2)));
            return {
                r: i[0],
                g: i[1],
                b: i[2],
                a: 1
            }
        }
        throw new Error("Wrong hex string! (hex: " + t + ")")
    }

    function r(t) {
        function e(t) {
            return 6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? u + (l - u) * t * 6 : 2 * t < 1 ? l : 3 * t < 2 ? u + (l - u) * (2 / 3 - t) * 6 : u
        }
        var n = t.h,
            i = t.s,
            o = t.l,
            r = t.a;
        n = s(n) % d / d, i = a(s(i)), o = a(s(o)), r = a(s(r));
        var l = o <= .5 ? o * (i + 1) : o + i - o * i,
            u = 2 * o - l;
        return {
            r: e(n + 1 / 3) * c,
            g: e(n) * c,
            b: e(n - 1 / 3) * c,
            a: r
        }
    }

    function a(t, n) {
        return function(t, n, i) {
            return h(i) && (i = 0), h(n) && (n = c), e.min(e.max(t, i), n)
        }(t, n)
    }

    function s(t) {
        return "number" == typeof t ? t : parseFloat(t)
    }
    var l = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/,
        c = 255,
        d = 360,
        u = "string",
        p = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370db",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#db7093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        },
        h = function(t) {
            return t === i
        },
        f = function(t) {
            return !h(t)
        },
        g = function(t) {
            return parseInt(t)
        },
        m = function(t) {
            return g(a(s(t), c))
        },
        v = function(t, e, n, i) {
            if (this.r = this.g = this.b = 0, this.a = 1, f(i) && (this.a = a(s(i), 1)), f(t) && f(e) && f(n)) this.r = m(t), this.g = m(e), this.b = m(n);
            else if (f(t)) {
                var l = typeof t;
                if (l == u)
                    if ("transparent" === (t = t.toLowerCase())) this.a = 0;
                    else if (p[t]) this.rgb(o(p[t]));
                else if (0 === t.indexOf("rgb")) {
                    var c = t.substring(t.indexOf("(") + 1, t.lastIndexOf(")")).split(",", 4);
                    this.rgb({
                        r: c[0],
                        g: c[1],
                        b: c[2],
                        a: c[3]
                    })
                } else this.rgb(o(t));
                else if ("number" == l && h(e)) this.r = this.g = this.b = m(t);
                else if ("object" == l && f(t.r)) this.r = m(t.r), f(t.g) && (this.g = m(t.g)), f(t.b) && (this.b = m(t.b)), f(t.a) && (this.a = a(s(t.a), 1));
                else if ("object" == l && f(t.h)) {
                    var g = {
                        h: a(s(t.h), d),
                        s: 1,
                        l: 1,
                        a: 1
                    };
                    f(t.s) && (g.s = a(s(t.s), 1)), f(t.l) && (g.l = a(s(t.l), 1)), f(t.a) && (g.a = a(s(t.a), 1)), this.rgb(r(g))
                }
            }
        };
    v.prototype.rgb = function(t) {
        if (f(t)) {
            if ("object" == typeof t) f(t.r) && (this.r = m(t.r)), f(t.g) && (this.g = m(t.g)), f(t.b) && (this.b = m(t.b)), f(t.a) && (this.a = a(s(t.a), 1));
            else {
                var e = g(s(t));
                this.r = e, this.g = e, this.b = e
            }
            return this
        }
        return {
            r: this.r,
            g: this.g,
            b: this.b,
            a: this.a
        }
    }, v.prototype.hue = function(t) {
        var e = this.toHsl();
        return h(t) ? e.h : (e.h = a(s(t), d), this.rgb(r(e)), this)
    }, v.prototype.darken = function(t) {
        var e = this.toHsl();
        return e.l -= t / 100, e.l = a(e.l, 1), this.rgb(r(e)), this
    }, v.prototype.clone = function() {
        return new v(this.r, this.g, this.b, this.a)
    }, v.prototype.lighten = function(t) {
        return this.darken(-t)
    }, v.prototype.fade = function(t) {
        return this.a = a(t / 100, 1), this
    }, v.prototype.spin = function(t) {
        var e = this.toHsl(),
            n = (e.h + t) % d;
        return e.h = n < 0 ? d + n : n, this.rgb(r(e))
    }, v.prototype.toHsl = function() {
        var t, n, i = this.r / c,
            o = this.g / c,
            r = this.b / c,
            a = this.a,
            s = e.max(i, o, r),
            l = e.min(i, o, r),
            u = (s + l) / 2,
            p = s - l;
        if (s === l) t = n = 0;
        else {
            switch (n = u > .5 ? p / (2 - s - l) : p / (s + l), s) {
                case i:
                    t = (o - r) / p + (o < r ? 6 : 0);
                    break;
                case o:
                    t = (r - i) / p + 2;
                    break;
                case r:
                    t = (i - o) / p + 4
            }
            t /= 6
        }
        return {
            h: t * d,
            s: n,
            l: u,
            a: a
        }
    }, v.prototype.luma = function() {
        var t = this.r / c,
            n = this.g / c,
            i = this.b / c;
        return t = t <= .03928 ? t / 12.92 : e.pow((t + .055) / 1.055, 2.4), n = n <= .03928 ? n / 12.92 : e.pow((n + .055) / 1.055, 2.4), i = i <= .03928 ? i / 12.92 : e.pow((i + .055) / 1.055, 2.4), .2126 * t + .7152 * n + .0722 * i
    }, v.prototype.saturate = function(t) {
        var e = this.toHsl();
        return e.s += t / 100, e.s = a(e.s), this.rgb(r(e))
    }, v.prototype.desaturate = function(t) {
        return this.saturate(-t)
    }, v.prototype.contrast = function(t, e, n) {
        if (e = h(e) ? new v(c, c, c, 1) : new v(e), (t = h(t) ? new v(0, 0, 0, 1) : new v(t)).luma() > e.luma()) {
            var i = e;
            e = t, t = i
        }
        return this.a < .5 ? t : (n = h(n) ? .43 : s(n), this.luma() < n ? e : t)
    }, v.prototype.hexStr = function() {
        var t = this.r.toString(16),
            e = this.g.toString(16),
            n = this.b.toString(16);
        return 1 == t.length && (t = "0" + t), 1 == e.length && (e = "0" + e), 1 == n.length && (n = "0" + n), "#" + t + e + n
    }, v.prototype.toCssStr = function() {
        return this.a > 0 ? this.a < 1 ? "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")" : this.hexStr() : "transparent"
    }, v.isColor = function(e) {
        return typeof e === u && ("transparent" === e.toLowerCase() || p[e.toLowerCase()] || l.test(t.trim(e.toLowerCase())))
    }, v.names = p, v.get = function(t) {
        return new v(t)
    }, t.zui({
        Color: v
    })
}(jQuery, Math, window, void 0),
function(t) {
    "use strict";

    function e(e, n) {
        if (!1 === e) return e;
        if (!e) return n;
        !0 === e ? e = {
            add: !0,
            delete: !0,
            edit: !0,
            sort: !0
        } : "string" == typeof e && (e = e.split(","));
        var i;
        return t.isArray(e) && (i = {}, t.each(e, function(e, n) {
            t.isPlainObject(n) ? i[n.action] = n : i[n] = !0
        }), e = i), t.isPlainObject(e) && (i = {}, t.each(e, function(e, n) {
            i[e] = !!n && t.extend({
                type: e
            }, a[e], t.isPlainObject(n) ? n : null)
        }), e = i), n ? t.extend(!0, {}, n, e) : e
    }

    function n(e, n, i) {
        return n = n || e.type, t(i || e.template).addClass("tree-action").attr(t.extend({
            "data-type": n,
            title: e.title || ""
        }, e.attr)).data("action", e)
    }
    var i = "zui.tree",
        o = 0,
        r = function(e, n) {
            this.name = i, this.$ = t(e), this.getOptions(n), this._init()
        },
        a = {
            sort: {
                template: '<a class="sort-handler" href="javascript:;"><i class="icon icon-move"></i></a>'
            },
            add: {
                template: '<a href="javascript:;"><i class="icon icon-plus"></i></a>'
            },
            edit: {
                template: '<a href="javascript:;"><i class="icon icon-pencil"></i></a>'
            },
            delete: {
                template: '<a href="javascript:;"><i class="icon icon-trash"></i></a>'
            }
        };
    r.DEFAULTS = {
        animate: null,
        initialState: "normal",
        toggleTemplate: '<i class="list-toggle icon"></i>'
    }, r.prototype.add = function(e, n, i, o, r) {
        var a, s = t(e),
            l = this.options;
        if (s.is("li") ? (a = s.children("ul")).length || (a = t("<ul/>"), s.append(a), this._initList(a, s)) : a = s, a) {
            var c = this;
            t.isArray(n) || (n = [n]), t.each(n, function(e, n) {
                var i = t("<li/>").data(n).appendTo(a);
                void 0 !== n.id && i.attr("data-id", n.id);
                var o = l.itemWrapper ? t(!0 === l.itemWrapper ? '<div class="tree-item-wrapper"/>' : l.itemWrapper).appendTo(i) : i;
                if (n.html) o.html(n.html);
                else if (t.isFunction(c.options.itemCreator)) {
                    var r = c.options.itemCreator(i, n);
                    !0 !== r && !1 !== r && o.html(r)
                } else n.url ? o.append(t("<a/>", {
                    href: n.url
                }).text(n.title || n.name)) : o.append(t("<span/>").text(n.title || n.name));
                c._initItem(i, n.idx || e, a, n), n.children && n.children.length && c.add(i, n.children)
            }), this._initList(a), i && !a.hasClass("tree") && c.expand(a.parent("li"), o, r)
        }
    }, r.prototype.reload = function(e) {
        var n = this;
        e && (n.$.empty(), n.add(n.$, e)), n.isPreserve && n.store.time && n.$.find("li:not(.tree-action-item)").each(function() {
            var e = t(this);
            n[n.store[e.data("id")] ? "expand" : "collapse"](e, !0, !0)
        })
    }, r.prototype._initList = function(i, o, r, a) {
        var s = this;
        i.hasClass("tree") ? (r = 0, o = null) : ((o = (o || i.closest("li")).addClass("has-list")).find(".list-toggle").length || o.prepend(this.options.toggleTemplate), r = r || o.data("idx")), i.removeClass("has-active-item");
        var l = i.attr("data-idx", r || 0).children("li:not(.tree-action-item)").each(function(e) {
            s._initItem(t(this), e + 1, i)
        });
        1 !== l.length || l.find("ul").length || l.addClass("tree-single-item");
        var c = e((a = a || (o ? o.data() : null)) ? a.actions : null, this.actions);
        if (c) {
            if (c.add && !1 !== c.add.templateInList) {
                var d = i.children("li.tree-action-item");
                d.length ? d.detach().appendTo(i) : t('<li class="tree-action-item"/>').append(n(c.add, "add", c.add.templateInList)).appendTo(i)
            }
            c.sort && i.sortable(t.extend({
                dragCssClass: "tree-drag-holder",
                trigger: ".sort-handler",
                selector: "li:not(.tree-action-item)",
                finish: function(t) {
                    s.callEvent("action", {
                        action: c.sort,
                        $list: i,
                        target: t.target,
                        item: a
                    })
                }
            }, c.sort.options, t.isPlainObject(this.options.sortable) ? this.options.sortable : null))
        }
        o && (o.hasClass("open") || a && a.open) && o.addClass("open in")
    }, r.prototype._initItem = function(i, o, r, a) {
        if (void 0 === o) {
            var s = i.prev("li");
            o = s.length ? s.data("idx") + 1 : 1
        }
        if (r = r || i.closest("ul"), i.attr("data-idx", o).removeClass("tree-single-item"), !i.data("id")) {
            var l = o;
            r.hasClass("tree") || (l = r.parent("li").data("id") + "-" + l), i.attr("data-id", l)
        }
        i.hasClass("active") && r.parent("li").addClass("has-active-item");
        var c = e((a = a || i.data()).actions, this.actions);
        if (c) {
            var d = i.find(".tree-actions");
            d.length || (d = t('<div class="tree-actions"/>').appendTo(this.options.itemWrapper ? i.find(".tree-item-wrapper") : i), t.each(c, function(t, e) {
                e && d.append(n(e, t))
            }))
        }
        var u = i.children("ul");
        u.length && this._initList(u, i, o, a)
    }, r.prototype._init = function() {
        var n = this.options,
            r = this;
        this.actions = e(n.actions), this.$.addClass("tree"), n.animate && this.$.addClass("tree-animate"), this._initList(this.$);
        var a = n.initialState,
            s = t.zui && t.zui.store && t.zui.store.enable;
        s && (this.selector = i + "::" + (n.name || "") + "#" + (this.$.attr("id") || o++), this.store = t.zui.store[n.name ? "get" : "pageGet"](this.selector, {})), "preserve" === a && (s ? this.isPreserve = !0 : this.options.initialState = a = "normal"), this.reload(n.data), s && (this.isPreserve = !0), "expand" === a ? this.expand() : "collapse" === a && this.collapse(), this.$.on("click", '.list-toggle,a[href="#"],.tree-toggle', function(e) {
            var n = t(this),
                i = n.parent("li");
            r.callEvent("hit", {
                target: i,
                item: i.data()
            }), r.toggle(i), n.is("a") && e.preventDefault()
        }).on("click", ".tree-action", function() {
            var e = t(this),
                n = e.data();
            if (n.action && (n = n.action), "sort" !== n.type) {
                var i = e.closest("li:not(.tree-action-item)");
                r.callEvent("action", {
                    action: n,
                    target: this,
                    $item: i,
                    item: i.data()
                })
            }
        })
    }, r.prototype.preserve = function(e, n, i) {
        if (this.isPreserve)
            if (e) n = n || e.data("id"), (i = void 0 === i && e.hasClass("open")) ? this.store[n] = i : delete this.store[n], this.store.time = (new Date).getTime(), t.zui.store[this.options.name ? "set" : "pageSet"](this.selector, this.store);
            else {
                var o = this;
                this.store = {}, this.$.find("li").each(function() {
                    o.preserve(t(this))
                })
            }
    }, r.prototype.expand = function(t, e, n) {
        t ? (t.addClass("open"), !e && this.options.animate ? setTimeout(function() {
            t.addClass("in")
        }, 10) : t.addClass("in")) : t = this.$.find("li.has-list").addClass("open in"), n || this.preserve(t), this.callEvent("expand", t, this)
    }, r.prototype.show = function(e, n, i) {
        var o = this;
        e.each(function() {
            var e = t(this);
            if (o.expand(e, n, i), e)
                for (var r = e.parent("ul"); r && r.length && !r.hasClass("tree");) {
                    var a = r.parent("li");
                    a.length ? (o.expand(a, n, i), r = a.parent("ul")) : r = !1
                }
        })
    }, r.prototype.collapse = function(t, e, n) {
        t ? !e && this.options.animate ? (t.removeClass("in"), setTimeout(function() {
            t.removeClass("open")
        }, 300)) : t.removeClass("open in") : t = this.$.find("li.has-list").removeClass("open in"), n || this.preserve(t), this.callEvent("collapse", t, this)
    }, r.prototype.toggle = function(t) {
        this[t && t.hasClass("open") || !1 === t || void 0 === t && this.$.find("li.has-list.open").length ? "collapse" : "expand"](t)
    }, r.prototype.getOptions = function(e) {
        this.options = t.extend({}, r.DEFAULTS, this.$.data(), e), null === this.options.animate && this.$.hasClass("tree-animate") && (this.options.animate = !0)
    }, r.prototype.toData = function(e, n) {
        t.isFunction(e) && (n = e, e = null);
        var i = this;
        return (e = e || this.$).children("li:not(.tree-action-item)").map(function() {
            var e = t(this),
                o = e.data();
            delete o["zui.droppable"];
            var r = e.children("ul");
            return r.length && (o.children = i.toData(r)), t.isFunction(n) ? n(o, e) : o
        }).get()
    }, r.prototype.callEvent = function(e, n) {
        var i;
        return t.isFunction(this.options[e]) && (i = this.options[e](n, this)), this.$.trigger(t.Event(e + "." + this.name, n)), i
    }, t.fn.tree = function(e, n) {
        return this.each(function() {
            var o = t(this),
                a = o.data(i),
                s = "object" == typeof e && e;
            a || o.data(i, a = new r(this, s)), "string" == typeof e && a[e](n)
        })
    }, t.fn.tree.Constructor = r, t(function() {
        t('[data-ride="tree"]').tree()
    })
}(jQuery),
function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function() {
    return function(t) {
        function e(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(o.exports, o, o.exports, e), o.l = !0, o.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.d = function(t, n, i) {
            e.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: i
            })
        }, e.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, e.t = function(t, n) {
            if (1 & n && (t = e(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if (e.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & n && "string" != typeof t)
                for (var o in t) e.d(i, o, function(e) {
                    return t[e]
                }.bind(null, o));
            return i
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 0)
    }([function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            var n = "data-clipboard-" + t;
            if (e.hasAttribute(n)) return e.getAttribute(n)
        }
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            a = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            s = i(n(1)),
            l = i(n(3)),
            c = i(n(4)),
            d = function(t) {
                function e(t, n) {
                    ! function(t, n) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this);
                    var i = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    return i.resolveOptions(n), i.listenClick(t), i
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, l.default), a(e, [{
                    key: "resolveOptions",
                    value: function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === r(t.container) ? t.container : document.body
                    }
                }, {
                    key: "listenClick",
                    value: function(t) {
                        var e = this;
                        this.listener = (0, c.default)(t, "click", function(t) {
                            return e.onClick(t)
                        })
                    }
                }, {
                    key: "onClick",
                    value: function(t) {
                        var e = t.delegateTarget || t.currentTarget;
                        this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new s.default({
                            action: this.action(e),
                            target: this.target(e),
                            text: this.text(e),
                            container: this.container,
                            trigger: e,
                            emitter: this
                        })
                    }
                }, {
                    key: "defaultAction",
                    value: function(t) {
                        return o("action", t)
                    }
                }, {
                    key: "defaultTarget",
                    value: function(t) {
                        var e = o("target", t);
                        if (e) return document.querySelector(e)
                    }
                }, {
                    key: "defaultText",
                    value: function(t) {
                        return o("text", t)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                    }
                }], [{
                    key: "isSupported",
                    value: function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                            e = "string" == typeof t ? [t] : t,
                            n = !!document.queryCommandSupported;
                        return e.forEach(function(t) {
                            n = n && !!document.queryCommandSupported(t)
                        }), n
                    }
                }]), e
            }();
        t.exports = d
    }, function(t, e, n) {
        "use strict";
        var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            a = (i = n(2)) && i.__esModule ? i : {
                default: i
            },
            s = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.resolveOptions(e), this.initSelection()
                }
                return r(t, [{
                    key: "resolveOptions",
                    value: function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                    }
                }, {
                    key: "initSelection",
                    value: function() {
                        this.text ? this.selectFake() : this.target && this.selectTarget()
                    }
                }, {
                    key: "selectFake",
                    value: function() {
                        var t = this,
                            e = "rtl" == document.documentElement.getAttribute("dir");
                        this.removeFake(), this.fakeHandlerCallback = function() {
                            return t.removeFake()
                        }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                        var n = window.pageYOffset || document.documentElement.scrollTop;
                        this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, a.default)(this.fakeElem), this.copyText()
                    }
                }, {
                    key: "removeFake",
                    value: function() {
                        this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                    }
                }, {
                    key: "selectTarget",
                    value: function() {
                        this.selectedText = (0, a.default)(this.target), this.copyText()
                    }
                }, {
                    key: "copyText",
                    value: function() {
                        var t = void 0;
                        try {
                            t = document.execCommand(this.action)
                        } catch (e) {
                            t = !1
                        }
                        this.handleResult(t)
                    }
                }, {
                    key: "handleResult",
                    value: function(t) {
                        this.emitter.emit(t ? "success" : "error", {
                            action: this.action,
                            text: this.selectedText,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this)
                        })
                    }
                }, {
                    key: "clearSelection",
                    value: function() {
                        this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.removeFake()
                    }
                }, {
                    key: "action",
                    set: function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
                        if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                    },
                    get: function() {
                        return this._action
                    }
                }, {
                    key: "target",
                    set: function(t) {
                        if (void 0 !== t) {
                            if (!t || "object" !== (void 0 === t ? "undefined" : o(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                            if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                            if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                            this._target = t
                        }
                    },
                    get: function() {
                        return this._target
                    }
                }]), t
            }();
        t.exports = s
    }, function(t, e) {
        t.exports = function(t) {
            var e;
            if ("SELECT" === t.nodeName) t.focus(), e = t.value;
            else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                var n = t.hasAttribute("readonly");
                n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
            } else {
                t.hasAttribute("contenteditable") && t.focus();
                var i = window.getSelection(),
                    o = document.createRange();
                o.selectNodeContents(t), i.removeAllRanges(), i.addRange(o), e = i.toString()
            }
            return e
        }
    }, function(t, e) {
        function n() {}
        n.prototype = {
            on: function(t, e, n) {
                var i = this.e || (this.e = {});
                return (i[t] || (i[t] = [])).push({
                    fn: e,
                    ctx: n
                }), this
            },
            once: function(t, e, n) {
                function i() {
                    o.off(t, i), e.apply(n, arguments)
                }
                var o = this;
                return i._ = e, this.on(t, i, n)
            },
            emit: function(t) {
                for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, o = n.length; i < o; i++) n[i].fn.apply(n[i].ctx, e);
                return this
            },
            off: function(t, e) {
                var n = this.e || (this.e = {}),
                    i = n[t],
                    o = [];
                if (i && e)
                    for (var r = 0, a = i.length; r < a; r++) i[r].fn !== e && i[r].fn._ !== e && o.push(i[r]);
                return o.length ? n[t] = o : delete n[t], this
            }
        }, t.exports = n
    }, function(t, e, n) {
        var i = n(5),
            o = n(6);
        t.exports = function(t, e, n) {
            if (!t && !e && !n) throw new Error("Missing required arguments");
            if (!i.string(e)) throw new TypeError("Second argument must be a String");
            if (!i.fn(n)) throw new TypeError("Third argument must be a Function");
            if (i.node(t)) return p = e, h = n, (u = t).addEventListener(p, h), {
                destroy: function() {
                    u.removeEventListener(p, h)
                }
            };
            if (i.nodeList(t)) return l = t, c = e, d = n, Array.prototype.forEach.call(l, function(t) {
                t.addEventListener(c, d)
            }), {
                destroy: function() {
                    Array.prototype.forEach.call(l, function(t) {
                        t.removeEventListener(c, d)
                    })
                }
            };
            if (i.string(t)) return r = t, a = e, s = n, o(document.body, r, a, s);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            var r, a, s, l, c, d, u, p, h
        }
    }, function(t, e) {
        e.node = function(t) {
            return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
        }, e.nodeList = function(t) {
            var n = Object.prototype.toString.call(t);
            return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]))
        }, e.string = function(t) {
            return "string" == typeof t || t instanceof String
        }, e.fn = function(t) {
            return "[object Function]" === Object.prototype.toString.call(t)
        }
    }, function(t, e, n) {
        function i(t, e, n, i, r) {
            var a = function(t, e, n, i) {
                return function(n) {
                    n.delegateTarget = o(n.target, e), n.delegateTarget && i.call(t, n)
                }
            }.apply(this, arguments);
            return t.addEventListener(n, a, r), {
                destroy: function() {
                    t.removeEventListener(n, a, r)
                }
            }
        }
        var o = n(7);
        t.exports = function(t, e, n, o, r) {
            return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function(t) {
                return i(t, e, n, o, r)
            }))
        }
    }, function(t, e) {
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var n = Element.prototype;
            n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
        }
        t.exports = function(t, e) {
            for (; t && 9 !== t.nodeType;) {
                if ("function" == typeof t.matches && t.matches(e)) return t;
                t = t.parentNode
            }
        }
    }])
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function(t) {
    function e(t) {
        return r.raw ? t : encodeURIComponent(t)
    }

    function n(t) {
        return r.raw ? t : decodeURIComponent(t)
    }

    function i(e, n) {
        var i = r.raw ? e : function(t) {
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return t = decodeURIComponent(t.replace(o, " ")), r.json ? JSON.parse(t) : t
            } catch (t) {}
        }(e);
        return t.isFunction(n) ? n(i) : i
    }
    var o = /\+/g,
        r = t.cookie = function(o, a, s) {
            if (void 0 !== a && !t.isFunction(a)) {
                if ("number" == typeof(s = t.extend({}, r.defaults, s)).expires) {
                    var l = s.expires,
                        c = s.expires = new Date;
                    c.setTime(+c + 864e5 * l)
                }
                return document.cookie = [e(o), "=", function(t) {
                    return e(r.json ? JSON.stringify(t) : String(t))
                }(a), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
            }
            for (var d = o ? void 0 : {}, u = document.cookie ? document.cookie.split("; ") : [], p = 0, h = u.length; h > p; p++) {
                var f = u[p].split("="),
                    g = n(f.shift()),
                    m = f.join("=");
                if (o && o === g) {
                    d = i(m, a);
                    break
                }
                o || void 0 === (m = i(m)) || (d[g] = m)
            }
            return d
        };
    r.defaults = {}, t.removeCookie = function(e, n) {
        return void 0 !== t.cookie(e) && (t.cookie(e, "", t.extend({}, n, {
            expires: -1
        })), !t.cookie(e))
    }
}),
function() {
    var t, e, n, i, o, r = {}.hasOwnProperty,
        a = {
            zh_cn: {
                no_results_text: "没有找到"
            },
            zh_tw: {
                no_results_text: "沒有找到"
            },
            en: {
                no_results_text: "No results match"
            }
        };
    (i = function() {
        function e() {
            this.options_index = 0, this.parsed = []
        }
        return e.prototype.add_node = function(t) {
            return "OPTGROUP" === t.nodeName.toUpperCase() ? this.add_group(t) : this.add_option(t)
        }, e.prototype.add_group = function(e) {
            var n, i, o, r, a, s;
            for (n = this.parsed.length, this.parsed.push({
                    array_index: n,
                    group: !0,
                    label: this.escapeExpression(e.label),
                    children: 0,
                    disabled: e.disabled,
                    title: e.title,
                    search_keys: t.trim(e.getAttribute("data-keys") || "").replace(/,/g, " ")
                }), s = [], o = 0, r = (a = e.childNodes).length; o < r; o++) i = a[o], s.push(this.add_option(i, n, e.disabled));
            return s
        }, e.prototype.add_option = function(e, n, i) {
            if ("OPTION" === e.nodeName.toUpperCase()) return "" !== e.text ? (null != n && (this.parsed[n].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: e.value,
                text: e.text,
                title: e.title,
                html: e.innerHTML,
                selected: e.selected,
                disabled: !0 === i ? i : e.disabled,
                group_array_index: n,
                classes: e.className,
                style: e.style.cssText,
                data: e.getAttribute("data-data"),
                search_keys: (t.trim(e.getAttribute("data-keys") || "") + e.value).replace(/,/, " ")
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1
        }, e.prototype.escapeExpression = function(t) {
            var e, n;
            return null == t || !1 === t ? "" : /[\&\<\>\"\'\`]/.test(t) ? (e = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, n = /&(?!\w+;)|[\<\>\"\'\`]/g, t.replace(n, function(t) {
                return e[t] || "&amp;"
            })) : t
        }, e
    }()).select_to_array = function(t) {
        var e, n, o, r, a;
        for (n = new i, o = 0, r = (a = t.childNodes).length; o < r; o++) e = a[o], n.add_node(e);
        return n.parsed
    }, e = function() {
        function e(n, i) {
            this.form_field = n, this.options = null != i ? i : {}, e.browser_is_supported() && (this.lang = a[this.options.lang || (t.zui.clientLang ? t.zui.clientLang() : "zh_cn")], this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers())
        }
        return e.prototype.set_default_values = function() {
            var t = this;
            this.click_test_action = function(e) {
                return t.test_active_click(e)
            }, this.activate_action = function(e) {
                return t.activate_field(e)
            }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search, this.group_search = null == this.options.group_search || this.options.group_search, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.drop_direction = this.options.drop_direction || "auto", this.middle_highlight = this.options.middle_highlight, this.compact_search = this.options.compact_search || !1, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options;
            var e = this.options.max_drop_width;
            return "string" == typeof e && e.indexOf("px") === e.length - 2 && (e = parseInt(e.substring(0, e.length - 2))), this.max_drop_width = e, this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options
        }, e.prototype.set_default_text = function() {
            return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || e.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || e.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || this.lang.no_results_text || e.default_no_result_text
        }, e.prototype.mouse_enter = function() {
            return this.mouse_on_container = !0
        }, e.prototype.mouse_leave = function() {
            return this.mouse_on_container = !1
        }, e.prototype.input_focus = function(t) {
            var e = this;
            if (this.is_multiple) {
                if (!this.active_field) return setTimeout(function() {
                    return e.container_mousedown()
                }, 50)
            } else if (!this.active_field) return this.activate_field()
        }, e.prototype.input_blur = function(t) {
            var e = this;
            if (!this.mouse_on_container) return this.active_field = !1, setTimeout(function() {
                return e.blur_test()
            }, 100)
        }, e.prototype.results_option_build = function(t) {
            var e, n, i, o, r;
            for (e = "", i = 0, o = (r = this.results_data).length; i < o; i++) n = r[i], e += n.group ? this.result_add_group(n) : this.result_add_option(n), (null != t ? t.first : void 0) && (n.selected && this.is_multiple ? this.choice_build(n) : n.selected && !this.is_multiple && this.single_set_selected_text(n.text));
            return e
        }, e.prototype.result_add_option = function(t) {
            var e, n;
            return t.search_match && this.include_option_in_results(t) ? (e = [], t.disabled || t.selected && this.is_multiple || e.push("active-result"), !t.disabled || t.selected && this.is_multiple || e.push("disabled-result"), t.selected && e.push("result-selected"), null != t.group_array_index && e.push("group-option"), "" !== t.classes && e.push(t.classes), n = document.createElement("li"), n.className = e.join(" "), n.style.cssText = t.style, n.title = t.title, n.setAttribute("data-option-array-index", t.array_index), n.setAttribute("data-data", t.data), n.innerHTML = t.search_text, this.outerHTML(n)) : ""
        }, e.prototype.result_add_group = function(t) {
            var e;
            return (t.search_match || t.group_match) && t.active_options > 0 ? (e = document.createElement("li"), e.className = "group-result", e.title = t.title, e.innerHTML = t.search_text, this.outerHTML(e)) : ""
        }, e.prototype.results_update_field = function() {
            if (this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing) return this.winnow_results()
        }, e.prototype.reset_single_select_options = function() {
            var t, e, n, i, o;
            for (o = [], e = 0, n = (i = this.results_data).length; e < n; e++)(t = i[e]).selected ? o.push(t.selected = !1) : o.push(void 0);
            return o
        }, e.prototype.results_toggle = function() {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, e.prototype.results_search = function(t) {
            return this.results_showing ? this.winnow_results(1) : this.results_show()
        }, e.prototype.winnow_results = function(t) {
            var e, n, i, o, r, a, s, l, c, d, u, p, h;
            for (this.no_results_clear(), r = 0, e = (s = this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), o = this.search_contains ? "" : "^", i = new RegExp(o + e, "i"), d = new RegExp(e, "i"), u = 0, p = (h = this.results_data).length; u < p; u++) n = h[u], n.search_match = !1, a = null, this.include_option_in_results(n) && (n.group && (n.group_match = !1, n.active_options = 0), null != n.group_array_index && this.results_data[n.group_array_index] && (0 === (a = this.results_data[n.group_array_index]).active_options && a.search_match && (r += 1), a.active_options += 1), n.group && !this.group_search || (n.search_text = n.group ? n.label : n.html, n.search_keys_match = this.search_string_match(n.search_keys, i), n.search_text_match = this.search_string_match(n.search_text, i), n.search_match = n.search_text_match || n.search_keys_match, n.search_match && !n.group && (r += 1), n.search_match ? (n.search_text_match && n.search_text.length ? (l = n.search_text.search(d), c = n.search_text.substr(0, l + s.length) + "</em>" + n.search_text.substr(l + s.length), n.search_text = c.substr(0, l) + "<em>" + c.substr(l)) : n.search_keys_match && n.search_keys.length && (l = n.search_keys.search(d), c = n.search_keys.substr(0, l + s.length) + "</em>" + n.search_keys.substr(l + s.length), n.search_text += '&nbsp; <small style="opacity: 0.7">' + c.substr(0, l) + "<em>" + c.substr(l) + "</small>"), null != a && (a.group_match = !0)) : null != n.group_array_index && this.results_data[n.group_array_index].search_match && (n.search_match = !0)));
            return this.result_clear_highlight(), r < 1 && s.length ? (this.update_results_content(""), this.no_results(s)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight(t))
        }, e.prototype.search_string_match = function(t, e) {
            var n, i, o, r;
            if (e.test(t)) return !0;
            if (this.enable_split_word_search && (t.indexOf(" ") >= 0 || 0 === t.indexOf("[")) && (i = t.replace(/\[|\]/g, "").split(" ")).length)
                for (o = 0, r = i.length; o < r; o++)
                    if (n = i[o], e.test(n)) return !0
        }, e.prototype.choices_count = function() {
            var t, e, n, i;
            if (null != this.selected_option_count) return this.selected_option_count;
            for (this.selected_option_count = 0, e = 0, n = (i = this.form_field.options).length; e < n; e++)(t = i[e]).selected && "" != t.value && (this.selected_option_count += 1);
            return this.selected_option_count
        }, e.prototype.choices_click = function(t) {
            if (t.preventDefault(), !this.results_showing && !this.is_disabled) return this.results_show()
        }, e.prototype.keyup_checker = function(t) {
            var e, n;
            switch (e = null != (n = t.which) ? n : t.keyCode, this.search_field_scale(), e) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                    if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                    break;
                case 13:
                    if (t.preventDefault(), this.results_showing) return this.result_select(t);
                    break;
                case 27:
                    return this.results_showing && this.results_hide(), !0;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search()
            }
        }, e.prototype.clipboard_event_checker = function(t) {
            var e = this;
            return setTimeout(function() {
                return e.results_search()
            }, 50)
        }, e.prototype.container_width = function() {
            return null != this.options.width ? this.options.width : this.form_field && this.form_field.classList && this.form_field.classList.contains("form-control") ? "100%" : this.form_field.offsetWidth + "px"
        }, e.prototype.include_option_in_results = function(t) {
            return !(this.is_multiple && !this.display_selected_options && t.selected || !this.display_disabled_options && t.disabled || t.empty)
        }, e.prototype.search_results_touchstart = function(t) {
            return this.touch_started = !0, this.search_results_mouseover(t)
        }, e.prototype.search_results_touchmove = function(t) {
            return this.touch_started = !1, this.search_results_mouseout(t)
        }, e.prototype.search_results_touchend = function(t) {
            if (this.touch_started) return this.search_results_mouseup(t)
        }, e.prototype.outerHTML = function(t) {
            var e;
            return t.outerHTML ? t.outerHTML : ((e = document.createElement("div")).appendChild(t), e.innerHTML)
        }, e.browser_is_supported = function() {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : !(/iP(od|hone)/i.test(window.navigator.userAgent) || /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent))
        }, e.default_multiple_text = "", e.default_single_text = "", e.default_no_result_text = "No results match", e
    }(), (t = jQuery).fn.extend({
        chosen: function(i) {
            return e.browser_is_supported() ? this.each(function(e) {
                var o, r;
                r = (o = t(this)).data("chosen"), "destroy" === i && r ? r.destroy() : r || o.data("chosen", new n(this, i))
            }) : this
        }
    }), n = function(e) {
        function n() {
            return o = n.__super__.constructor.apply(this, arguments)
        }
        return function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var i in e) r.call(e, i) && (t[i] = e[i]);
            n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype
        }(n, e), n.prototype.setup = function() {
            return this.form_field_jq = t(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        }, n.prototype.set_up_html = function() {
            var e, n;
            (e = ["chosen-container"]).push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && e.push(this.form_field.className), this.is_rtl && e.push("chosen-rtl");
            var i = this.form_field.getAttribute("data-css-class");
            return i && e.push(i), n = {
                class: e.join(" "),
                style: "width: " + this.container_width() + ";",
                title: this.form_field.title
            }, this.form_field.id.length && (n.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = t("<div />", n), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : (this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div><div class="chosen-search"><input type="text" autocomplete="off" /></div></a><div class="chosen-drop"><ul class="chosen-results"></ul></div>'), this.compact_search ? this.container.addClass("chosen-compact").find(".chosen-search").appendTo(this.container.find(".chosen-single")) : this.container.find(".chosen-search").prependTo(this.container.find(".chosen-drop")), !1 !== this.options.highlight_selected && this.container.addClass("chosen-highlight-selected")), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.options.drop_width && this.dropdown.css("width", this.options.drop_width).addClass("chosen-drop-size-limited"), this.max_drop_width && this.dropdown.addClass("chosen-auto-max-width"), this.results_build(), this.set_tab_index(), this.set_label_behavior(), this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            })
        }, n.prototype.register_observers = function() {
            var t = this;
            return this.container.bind("mousedown.chosen", function(e) {
                t.container_mousedown(e)
            }), this.container.bind("mouseup.chosen", function(e) {
                t.container_mouseup(e)
            }), this.container.bind("mouseenter.chosen", function(e) {
                t.mouse_enter(e)
            }), this.container.bind("mouseleave.chosen", function(e) {
                t.mouse_leave(e)
            }), this.search_results.bind("mouseup.chosen", function(e) {
                t.search_results_mouseup(e)
            }), this.search_results.bind("mouseover.chosen", function(e) {
                t.search_results_mouseover(e)
            }), this.search_results.bind("mouseout.chosen", function(e) {
                t.search_results_mouseout(e)
            }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(e) {
                t.search_results_mousewheel(e)
            }), this.search_results.bind("touchstart.chosen", function(e) {
                t.search_results_touchstart(e)
            }), this.search_results.bind("touchmove.chosen", function(e) {
                t.search_results_touchmove(e)
            }), this.search_results.bind("touchend.chosen", function(e) {
                t.search_results_touchend(e)
            }), this.form_field_jq.bind("chosen:updated.chosen", function(e) {
                t.results_update_field(e)
            }), this.form_field_jq.bind("chosen:activate.chosen", function(e) {
                t.activate_field(e)
            }), this.form_field_jq.bind("chosen:open.chosen", function(e) {
                t.container_mousedown(e)
            }), this.form_field_jq.bind("chosen:close.chosen", function(e) {
                t.input_blur(e)
            }), this.search_field.bind("blur.chosen", function(e) {
                t.input_blur(e)
            }), this.search_field.bind("keyup.chosen", function(e) {
                t.keyup_checker(e)
            }), this.search_field.bind("input.chosen", function(e) {
                t.keyup_checker(e)
            }), this.search_field.bind("keydown.chosen", function(e) {
                t.keydown_checker(e)
            }), this.search_field.bind("focus.chosen", function(e) {
                t.input_focus(e)
            }), this.search_field.bind("cut.chosen", function(e) {
                t.clipboard_event_checker(e)
            }), this.search_field.bind("paste.chosen", function(e) {
                t.clipboard_event_checker(e)
            }), this.is_multiple ? this.search_choices.bind("click.chosen", function(e) {
                t.choices_click(e)
            }) : this.container.bind("click.chosen", function(t) {
                t.preventDefault()
            })
        }, n.prototype.destroy = function() {
            return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
        }, n.prototype.search_field_disabled = function() {
            return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
        }, n.prototype.container_mousedown = function(e) {
            if (!this.is_disabled && (e && "mousedown" === e.type && !this.results_showing && e.preventDefault(), null == e || !t(e.target).hasClass("search-choice-close"))) return this.active_field ? this.is_multiple || !e || t(e.target)[0] !== this.selected_item[0] && !t(e.target).parents("a.chosen-single").length || (e.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), t(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field()
        }, n.prototype.container_mouseup = function(t) {
            if ("ABBR" === t.target.nodeName && !this.is_disabled) return this.results_reset(t)
        }, n.prototype.search_results_mousewheel = function(t) {
            var e;
            if (t.originalEvent && (e = -t.originalEvent.wheelDelta || t.originalEvent.detail), null != e) return t.preventDefault(), "DOMMouseScroll" === t.type && (e *= 40), this.search_results.scrollTop(e + this.search_results.scrollTop())
        }, n.prototype.blur_test = function(t) {
            if (!this.active_field && this.container.hasClass("chosen-container-active")) return this.close_field()
        }, n.prototype.close_field = function() {
            return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
        }, n.prototype.activate_field = function() {
            return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, n.prototype.test_active_click = function(e) {
            var n;
            return (n = t(e.target).closest(".chosen-container")).length && this.container[0] === n[0] ? this.active_field = !0 : this.close_field()
        }, n.prototype.results_build = function() {
            return this.parsing = !0, this.selected_option_count = null, this.results_data = i.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch"), this.container.removeClass("chosen-with-search")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"), this.container.addClass("chosen-with-search"))), this.update_results_content(this.results_option_build({
                first: !0
            })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
        }, n.prototype.result_do_highlight = function(t, e) {
            var n, i, o, r, a, s, l = -1;
            t.length && (this.result_clear_highlight(), this.result_highlight = t, this.result_highlight.addClass("highlighted"), o = parseInt(this.search_results.css("maxHeight"), 10), s = this.result_highlight.outerHeight(), a = this.search_results.scrollTop(), r = o + a, i = this.result_highlight.position().top + this.search_results.scrollTop(), n = i + s, this.middle_highlight && (e || "always" === this.middle_highlight) ? l = Math.min(i - s, Math.max(0, i - (o - s) / 2)) : n >= r ? l = n - o > 0 ? n - o : 0 : i < a && (l = i), l > -1 ? this.search_results.scrollTop(l) : this.result_highlight.scrollIntoView && this.result_highlight.scrollIntoView())
        }, n.prototype.result_clear_highlight = function() {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, n.prototype.results_show = function() {
            var e = this;
            if (e.is_multiple && e.max_selected_options <= e.choices_count()) return e.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1;
            e.results_showing = !0, e.search_field.focus(), e.search_field.val(e.search_field.val());
            var n = e.drop_direction;
            if (t.isFunction(n) && (n = n.call(this)), "auto" === n)
                if (e.drop_directionFixed) n = e.drop_directionFixed;
                else {
                    o = e.container.find(".chosen-drop");
                    e.container.offset().top + o.outerHeight() + 30 > t(window).height() + t(window).scrollTop() && (n = "up"), e.drop_directionFixed = n
                } e.container.toggleClass("chosen-up", "up" === n).addClass("chosen-with-drop"), e.winnow_results(1);
            var i = e.max_drop_width;
            if (i) {
                var o, r = 0;
                (o = e.container.find(".chosen-drop").removeClass("in")).find(".chosen-results>li").each(function() {
                    r = Math.max(r, t(this).outerWidth())
                }), o.css("width", Math.min(r + 2, i)), e.fixDropWidthTimer = setTimeout(function() {
                    e.fixDropWidthTimer = null, o.addClass("in")
                }, 50)
            }
            return e.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: e
            })
        }, n.prototype.update_results_content = function(t) {
            return this.search_results.html(t)
        }, n.prototype.results_hide = function() {
            var t = this;
            return t.fixDropWidthTimer && (clearTimeout(t.fixDropWidthTimer), t.fixDropWidthTimer = null), t.results_showing && (t.result_clear_highlight(), t.container.removeClass("chosen-with-drop"), t.form_field_jq.trigger("chosen:hiding_dropdown", {
                chosen: t
            }), t.drop_directionFixed = 0), t.results_showing = !1
        }, n.prototype.set_tab_index = function(t) {
            var e;
            if (this.form_field.tabIndex) return e = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = e
        }, n.prototype.set_label_behavior = function() {
            var e = this;
            if (this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = t("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0) return this.form_field_label.bind("click.chosen", function(t) {
                return e.is_multiple ? e.container_mousedown(t) : e.activate_field()
            })
        }, n.prototype.show_search_field_default = function() {
            return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, n.prototype.search_results_mouseup = function(e) {
            var n;
            if ((n = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first()).length) return this.result_highlight = n, this.result_select(e), this.search_field.focus()
        }, n.prototype.search_results_mouseover = function(e) {
            var n;
            if (n = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first()) return this.result_do_highlight(n)
        }, n.prototype.search_results_mouseout = function(e) {
            if (t(e.target).hasClass("active-result")) return this.result_clear_highlight()
        }, n.prototype.choice_build = function(e) {
            var n, i, o = this;
            return n = t("<li />", {
                class: "search-choice"
            }).html("<span title='" + e.html + "'>" + e.html + "</span>"), e.disabled ? n.addClass("search-choice-disabled") : ((i = t("<a />", {
                class: "search-choice-close",
                "data-option-array-index": e.array_index
            })).bind("click.chosen", function(t) {
                return o.choice_destroy_link_click(t)
            }), n.append(i)), this.search_container.before(n)
        }, n.prototype.choice_destroy_link_click = function(e) {
            if (e.preventDefault(), e.stopPropagation(), !this.is_disabled) return this.choice_destroy(t(e.target))
        }, n.prototype.choice_destroy = function(t) {
            if (this.result_deselect(t[0].getAttribute("data-option-array-index"))) return this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), t.parents("li").first().remove(), this.search_field_scale()
        }, n.prototype.results_reset = function() {
            if (this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field) return this.results_hide()
        }, n.prototype.results_reset_cleanup = function() {
            return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
        }, n.prototype.result_select = function(t) {
            var e, n;
            if (this.result_highlight) return e = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.is_multiple ? e.removeClass("active-result") : this.reset_single_select_options(), n = this.results_data[e[0].getAttribute("data-option-array-index")], n.selected = !0, this.form_field.options[n.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(n) : this.single_set_selected_text(n.text), (t.metaKey || t.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                selected: this.form_field.options[n.options_index].value
            }), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale())
        }, n.prototype.single_set_selected_text = function(t) {
            return null == t && (t = this.default_text), t === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.compact_search && this.search_field.attr("placeholder", t), this.selected_item.find("span").attr("title", t).text(t)
        }, n.prototype.result_deselect = function(t) {
            var e;
            return e = this.results_data[t], !this.form_field.options[e.options_index].disabled && (e.selected = !1, this.form_field.options[e.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                deselected: this.form_field.options[e.options_index].value
            }), this.search_field_scale(), !0)
        }, n.prototype.single_deselect_control_build = function() {
            if (this.allow_single_deselect) return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")
        }, n.prototype.get_search_text = function() {
            return this.search_field.val() === this.default_text ? "" : t("<div/>").text(t.trim(this.search_field.val())).html()
        }, n.prototype.winnow_results_set_highlight = function(t) {
            var e, n;
            if (n = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), null != (e = n.length ? n.first() : this.search_results.find(".active-result").first())) return this.result_do_highlight(e, t)
        }, n.prototype.no_results = function(e) {
            var n;
            return (n = t('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>')).find("span").first().html(e), this.search_results.append(n), this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            })
        }, n.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        }, n.prototype.keydown_arrow = function() {
            var t;
            return this.results_showing && this.result_highlight ? (t = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(t) : void 0 : this.results_show()
        }, n.prototype.keyup_arrow = function() {
            var t;
            return this.results_showing || this.is_multiple ? this.result_highlight ? (t = this.result_highlight.prevAll("li.active-result")).length ? this.result_do_highlight(t.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight()) : void 0 : this.results_show()
        }, n.prototype.keydown_backstroke = function() {
            var t;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (t = this.search_container.siblings("li.search-choice").last()).length && !t.hasClass("search-choice-disabled") ? (this.pending_backstroke = t, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0
        }, n.prototype.clear_backstroke = function() {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, n.prototype.keydown_checker = function(t) {
            var e, n;
            switch (e = null != (n = t.which) ? n : t.keyCode, this.search_field_scale(), 8 !== e && this.pending_backstroke && this.clear_backstroke(), e) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(t), this.mouse_on_container = !1;
                    break;
                case 13:
                    t.preventDefault();
                    break;
                case 38:
                    t.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    t.preventDefault(), this.keydown_arrow()
            }
        }, n.prototype.search_field_scale = function() {
            var e, n, i, o, r, a, s, l;
            if (this.is_multiple) {
                for (0, a = 0, o = "position:absolute; left: -1000px; top: -1000px; display:none;", s = 0, l = (r = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"]).length; s < l; s++) i = r[s], o += i + ":" + this.search_field.css(i) + ";";
                return (e = t("<div />", {
                    style: o
                })).text(this.search_field.val()), t("body").append(e), a = e.width() + 25, e.remove(), n = this.container.outerWidth(), a > n - 10 && (a = n - 10), this.search_field.css({
                    width: a + "px"
                })
            }
        }, n
    }(e)
}.call(this);
var bejsonHost = "//" + document.domain + "/",
    clipboard = new ClipboardJS(".copy-btn");
clipboard.on("success", function(t) {
    new $.zui.Messager("复制成功", {
        type: "success",
        icon: "ok",
        placement: "center"
    }).show()
}), clipboard.on("error", function(t) {
    new $.zui.Messager("复制失败,请手动复制", {
        type: "error",
        placement: "center"
    }).show()
}), $("body").on("mouseenter", ".footer-nav-tabs li", function() {
    var t = $(this).index();
    $(this).parent().find("li").each(function(t, e) {
        $(e).removeClass("active")
    }), $(this).addClass("active"), $(this).parents(".footer-nav").find(".footer-nav-con").each(function(e, n) {
        $(n).removeClass("active"), $(n).index() === t && $(n).addClass("active")
    })
}), $("body").on("click", "#showMoreFeaturesInfo", function() {
    "收起" === $(this).text() ? ($(this).find("span").text("更多"), $(this).parents(".alert").css("height", "208px")) : ($(this).find("span").text("收起"), $(this).parents(".alert").css("height", "auto")), $(this).find("i").toggleClass("icon-chevron-up").toggleClass("icon-chevron-down")
}), $(document).ready(function() {
    clearActiveAfter(), goTop();
    var t = $(window).outerHeight();
    $("body").outerHeight() + 40 < t && document.getElementsByClassName("html-footer3").length && ($(".html-footer3").addClass("fixed bottom-0 left-0"), $(".html-footer3").css("position", "fixed"), $("body").css("padding-bottom", "50px"))
}), $("#showQrcode").hover(function() {
    $("#wxQrcode").show()
}, function() {
    $("#wxQrcode").hide()
}), $("select.chosen-select") && ($("select.chosen-select").chosen({
    no_results_text: "没有找到",
    search_contains: !0,
    disable_search_threshold: 10
}), $("select.chosen-select").on("change", function(t, e) {
    window.location.href = e.selected
})), String.prototype.MD5PRO = function(t) {
    function e(t, e) {
        return t << e | t >>> 32 - e
    }

    function n(t, e) {
        var n, i, o, r, a;
        return o = 2147483648 & t, r = 2147483648 & e, n = 1073741824 & t, i = 1073741824 & e, a = (1073741823 & t) + (1073741823 & e), n & i ? 2147483648 ^ a ^ o ^ r : n | i ? 1073741824 & a ? 3221225472 ^ a ^ o ^ r : 1073741824 ^ a ^ o ^ r : a ^ o ^ r
    }

    function i(t, i, o, r, a, s, l) {
        return t = n(t, n(n(function(t, e, n) {
            return t & e | ~t & n
        }(i, o, r), a), l)), n(e(t, s), i)
    }

    function o(t, i, o, r, a, s, l) {
        return t = n(t, n(n(function(t, e, n) {
            return t & n | e & ~n
        }(i, o, r), a), l)), n(e(t, s), i)
    }

    function r(t, i, o, r, a, s, l) {
        return t = n(t, n(n(function(t, e, n) {
            return t ^ e ^ n
        }(i, o, r), a), l)), n(e(t, s), i)
    }

    function a(t, i, o, r, a, s, l) {
        return t = n(t, n(n(function(t, e, n) {
            return e ^ (t | ~n)
        }(i, o, r), a), l)), n(e(t, s), i)
    }

    function s(t) {
        var e, n = "",
            i = "";
        for (e = 0; e <= 3; e++) n += (i = "0" + (t >>> 8 * e & 255).toString(16)).substr(i.length - 2, 2);
        return n
    }
    var l, c, d, u, p, h, f, g, m, v = Array();
    for (v = function(t) {
            for (var e, n = t.length, i = n + 8, o = 16 * ((i - i % 64) / 64 + 1), r = Array(o - 1), a = 0, s = 0; s < n;) a = s % 4 * 8, r[e = (s - s % 4) / 4] = r[e] | t.charCodeAt(s) << a, s++;
            return e = (s - s % 4) / 4, a = s % 4 * 8, r[e] = r[e] | 128 << a, r[o - 2] = n << 3, r[o - 1] = n >>> 29, r
        }(this), h = 1732584193, f = 4023233417, g = 2562383102, m = 271733878, l = 0; l < v.length; l += 16) c = h, d = f, u = g, p = m, f = a(f = a(f = a(f = a(f = r(f = r(f = r(f = r(f = o(f = o(f = o(f = o(f = i(f = i(f = i(f = i(f, g = i(g, m = i(m, h = i(h, f, g, m, v[l + 0], 7, 3614090360), f, g, v[l + 1], 12, 3905402710), h, f, v[l + 2], 17, 606105819), m, h, v[l + 3], 22, 3250441966), g = i(g, m = i(m, h = i(h, f, g, m, v[l + 4], 7, 4118548399), f, g, v[l + 5], 12, 1200080426), h, f, v[l + 6], 17, 2821735955), m, h, v[l + 7], 22, 4249261313), g = i(g, m = i(m, h = i(h, f, g, m, v[l + 8], 7, 1770035416), f, g, v[l + 9], 12, 2336552879), h, f, v[l + 10], 17, 4294925233), m, h, v[l + 11], 22, 2304563134), g = i(g, m = i(m, h = i(h, f, g, m, v[l + 12], 7, 1804603682), f, g, v[l + 13], 12, 4254626195), h, f, v[l + 14], 17, 2792965006), m, h, v[l + 15], 22, 1236535329), g = o(g, m = o(m, h = o(h, f, g, m, v[l + 1], 5, 4129170786), f, g, v[l + 6], 9, 3225465664), h, f, v[l + 11], 14, 643717713), m, h, v[l + 0], 20, 3921069994), g = o(g, m = o(m, h = o(h, f, g, m, v[l + 5], 5, 3593408605), f, g, v[l + 10], 9, 38016083), h, f, v[l + 15], 14, 3634488961), m, h, v[l + 4], 20, 3889429448), g = o(g, m = o(m, h = o(h, f, g, m, v[l + 9], 5, 568446438), f, g, v[l + 14], 9, 3275163606), h, f, v[l + 3], 14, 4107603335), m, h, v[l + 8], 20, 1163531501), g = o(g, m = o(m, h = o(h, f, g, m, v[l + 13], 5, 2850285829), f, g, v[l + 2], 9, 4243563512), h, f, v[l + 7], 14, 1735328473), m, h, v[l + 12], 20, 2368359562), g = r(g, m = r(m, h = r(h, f, g, m, v[l + 5], 4, 4294588738), f, g, v[l + 8], 11, 2272392833), h, f, v[l + 11], 16, 1839030562), m, h, v[l + 14], 23, 4259657740), g = r(g, m = r(m, h = r(h, f, g, m, v[l + 1], 4, 2763975236), f, g, v[l + 4], 11, 1272893353), h, f, v[l + 7], 16, 4139469664), m, h, v[l + 10], 23, 3200236656), g = r(g, m = r(m, h = r(h, f, g, m, v[l + 13], 4, 681279174), f, g, v[l + 0], 11, 3936430074), h, f, v[l + 3], 16, 3572445317), m, h, v[l + 6], 23, 76029189), g = r(g, m = r(m, h = r(h, f, g, m, v[l + 9], 4, 3654602809), f, g, v[l + 12], 11, 3873151461), h, f, v[l + 15], 16, 530742520), m, h, v[l + 2], 23, 3299628645), g = a(g, m = a(m, h = a(h, f, g, m, v[l + 0], 6, 4096336452), f, g, v[l + 7], 10, 1126891415), h, f, v[l + 14], 15, 2878612391), m, h, v[l + 5], 21, 4237533241), g = a(g, m = a(m, h = a(h, f, g, m, v[l + 12], 6, 1700485571), f, g, v[l + 3], 10, 2399980690), h, f, v[l + 10], 15, 4293915773), m, h, v[l + 1], 21, 2240044497), g = a(g, m = a(m, h = a(h, f, g, m, v[l + 8], 6, 1873313359), f, g, v[l + 15], 10, 4264355552), h, f, v[l + 6], 15, 2734768916), m, h, v[l + 13], 21, 1309151649), g = a(g, m = a(m, h = a(h, f, g, m, v[l + 4], 6, 4149444226), f, g, v[l + 11], 10, 3174756917), h, f, v[l + 2], 15, 718787259), m, h, v[l + 9], 21, 3951481745), h = n(h, c), f = n(f, d), g = n(g, u), m = n(m, p);
    return 32 == t ? s(h) + s(f) + s(g) + s(m) : s(f) + s(g)
}, String.prototype.MD5PRO_2 = function(t) {
    function e(t, e) {
        return t << e | t >>> 32 - e
    }

    function n(t, e) {
        var n, i, o, r, a;
        return o = 2147483648 & t, r = 2147483648 & e, n = 1073741824 & t, i = 1073741824 & e, a = (1073741823 & t) + (1073741823 & e), n & i ? 2147483648 ^ a ^ o ^ r : n | i ? 1073741824 & a ? 3221225472 ^ a ^ o ^ r : 1073741824 ^ a ^ o ^ r : a ^ o ^ r
    }

    function i(t, i, o, r, a, s, l) {
        return t = n(t, n(n(function(t, e, n) {
            return t & e | ~t & n
        }(i, o, r), a), l)), n(e(t, s), i)
    }

    function o(t, i, o, r, a, s, l) {
        return t = n(t, n(n(function(t, e, n) {
            return t & n | e & ~n
        }(i, o, r), a), l)), n(e(t, s), i)
    }

    function r(t, i, o, r, a, s, l) {
        return t = n(t, n(n(function(t, e, n) {
            return t ^ e ^ n
        }(i, o, r), a), l)), n(e(t, s), i)
    }

    function a(t, i, o, r, a, s, l) {
        return t = n(t, n(n(function(t, e, n) {
            return e ^ (t | ~n)
        }(i, o, r), a), l)), n(e(t, s), i)
    }

    function s(t) {
        var e, n = "",
            i = "";
        for (e = 0; e <= 3; e++) n += (i = "0" + (t >>> 8 * e & 255).toString(16)).substr(i.length - 2, 2);
        return n
    }
    var l, c, d, u, p, h, f, g, m, v = this,
        y = Array();
    for (y = function(t) {
            for (var e, n = t.length, i = n + 8, o = 16 * ((i - i % 64) / 64 + 1), r = Array(o - 1), a = 0, s = 0; s < n;) a = s % 4 * 8, r[e = (s - s % 4) / 4] = r[e] | t.charCodeAt(s) << a, s++;
            return e = (s - s % 4) / 4, a = s % 4 * 8, r[e] = r[e] | 128 << a, r[o - 2] = n << 3, r[o - 1] = n >>> 29, r
        }(v = function(t) {
            t = t.replace(/\r\n/g, "\n");
            for (var e = "", n = 0; n < t.length; n++) {
                var i = t.charCodeAt(n);
                i < 128 ? e += String.fromCharCode(i) : i > 127 && i < 2048 ? (e += String.fromCharCode(i >> 6 | 192), e += String.fromCharCode(63 & i | 128)) : (e += String.fromCharCode(i >> 12 | 224), e += String.fromCharCode(i >> 6 & 63 | 128), e += String.fromCharCode(63 & i | 128))
            }
            return e
        }(v)), h = 1732584193, f = 4023233417, g = 2562383102, m = 271733878, l = 0; l < y.length; l += 16) c = h, d = f, u = g, p = m, f = a(f = a(f = a(f = a(f = r(f = r(f = r(f = r(f = o(f = o(f = o(f = o(f = i(f = i(f = i(f = i(f, g = i(g, m = i(m, h = i(h, f, g, m, y[l + 0], 7, 3614090360), f, g, y[l + 1], 12, 3905402710), h, f, y[l + 2], 17, 606105819), m, h, y[l + 3], 22, 3250441966), g = i(g, m = i(m, h = i(h, f, g, m, y[l + 4], 7, 4118548399), f, g, y[l + 5], 12, 1200080426), h, f, y[l + 6], 17, 2821735955), m, h, y[l + 7], 22, 4249261313), g = i(g, m = i(m, h = i(h, f, g, m, y[l + 8], 7, 1770035416), f, g, y[l + 9], 12, 2336552879), h, f, y[l + 10], 17, 4294925233), m, h, y[l + 11], 22, 2304563134), g = i(g, m = i(m, h = i(h, f, g, m, y[l + 12], 7, 1804603682), f, g, y[l + 13], 12, 4254626195), h, f, y[l + 14], 17, 2792965006), m, h, y[l + 15], 22, 1236535329), g = o(g, m = o(m, h = o(h, f, g, m, y[l + 1], 5, 4129170786), f, g, y[l + 6], 9, 3225465664), h, f, y[l + 11], 14, 643717713), m, h, y[l + 0], 20, 3921069994), g = o(g, m = o(m, h = o(h, f, g, m, y[l + 5], 5, 3593408605), f, g, y[l + 10], 9, 38016083), h, f, y[l + 15], 14, 3634488961), m, h, y[l + 4], 20, 3889429448), g = o(g, m = o(m, h = o(h, f, g, m, y[l + 9], 5, 568446438), f, g, y[l + 14], 9, 3275163606), h, f, y[l + 3], 14, 4107603335), m, h, y[l + 8], 20, 1163531501), g = o(g, m = o(m, h = o(h, f, g, m, y[l + 13], 5, 2850285829), f, g, y[l + 2], 9, 4243563512), h, f, y[l + 7], 14, 1735328473), m, h, y[l + 12], 20, 2368359562), g = r(g, m = r(m, h = r(h, f, g, m, y[l + 5], 4, 4294588738), f, g, y[l + 8], 11, 2272392833), h, f, y[l + 11], 16, 1839030562), m, h, y[l + 14], 23, 4259657740), g = r(g, m = r(m, h = r(h, f, g, m, y[l + 1], 4, 2763975236), f, g, y[l + 4], 11, 1272893353), h, f, y[l + 7], 16, 4139469664), m, h, y[l + 10], 23, 3200236656), g = r(g, m = r(m, h = r(h, f, g, m, y[l + 13], 4, 681279174), f, g, y[l + 0], 11, 3936430074), h, f, y[l + 3], 16, 3572445317), m, h, y[l + 6], 23, 76029189), g = r(g, m = r(m, h = r(h, f, g, m, y[l + 9], 4, 3654602809), f, g, y[l + 12], 11, 3873151461), h, f, y[l + 15], 16, 530742520), m, h, y[l + 2], 23, 3299628645), g = a(g, m = a(m, h = a(h, f, g, m, y[l + 0], 6, 4096336452), f, g, y[l + 7], 10, 1126891415), h, f, y[l + 14], 15, 2878612391), m, h, y[l + 5], 21, 4237533241), g = a(g, m = a(m, h = a(h, f, g, m, y[l + 12], 6, 1700485571), f, g, y[l + 3], 10, 2399980690), h, f, y[l + 10], 15, 4293915773), m, h, y[l + 1], 21, 2240044497), g = a(g, m = a(m, h = a(h, f, g, m, y[l + 8], 6, 1873313359), f, g, y[l + 15], 10, 4264355552), h, f, y[l + 6], 15, 2734768916), m, h, y[l + 13], 21, 1309151649), g = a(g, m = a(m, h = a(h, f, g, m, y[l + 4], 6, 4149444226), f, g, y[l + 11], 10, 3174756917), h, f, y[l + 2], 15, 718787259), m, h, y[l + 9], 21, 3951481745), h = n(h, c), f = n(f, d), g = n(g, u), m = n(m, p);
    return 32 == t ? s(h) + s(f) + s(g) + s(m) : s(f) + s(g)
}, $(".uploader") && "IE" === myBrowser() && ($(".uploader").children("*").css("position", "relative").css("z-index", "99"), $(".uploader").addClass("progress-0")), $(window).ready(function() {
    var t = $(window).outerHeight();
    $(".md-toc").height(t - 300)
}), $("#formatCheck").click(function() {
    indexFormat()
}), document.getElementById("formatCheck") && (document.onkeydown = function(t) {
    var e = t.keyCode || t.which || t.charCode;
    (t.ctrlKey || t.metaKey) && 76 == e && (indexFormat(), t.preventDefault())
}), $("#compressZipJson").click(function() {
    yasuo(1), $(this).attr("data-html") && "index" === $(this).attr("data-html") && localStorage.setItem("lastJsonData", editor.getValue())
}), $("#escapeJson").click(function() {
    yasuo(2), $(this).attr("data-html") && "index" === $(this).attr("data-html") && localStorage.setItem("lastJsonData", editor.getValue())
}), $("#restoreJson").click(function() {
    yasuo(4), $(this).attr("data-html") && "index" === $(this).attr("data-html") && localStorage.setItem("lastJsonData", editor.getValue())
}), $("#unicode2ch").click(function() {
    var t = unicode2Ch(editor.getValue());
    editor.setValue(t), $(this).attr("data-html") && "index" === $(this).attr("data-html") && localStorage.setItem("lastJsonData", editor.getValue())
}), $("#ch2unicode").click(function() {
    var t = ch2Unicdoe(editor.getValue());
    editor.setValue(t), $(this).attr("data-html") && "index" === $(this).attr("data-html") && localStorage.setItem("lastJsonData", editor.getValue())
}), $("#json2get").click(function() {
    var t = parseParam(JSON.parse(editor.getValue()));
    editor.setValue(t), $(this).attr("data-html") && "index" === $(this).attr("data-html") && localStorage.setItem("lastJsonData", editor.getValue())
});
var my_lzma;
String.prototype.trim || (String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/, "")
}), $("body").on("click", "#saveData", function() {
    var t = editor.getValue();
    if (t) {
        var e;
        t = "object" == typeof t ? JSON.stringify(t) : t.toString(), confirmInput({
            title: "请为当前的数据命名",
            success: function(n) {
                n && ($("#daveDataList").removeClass("empty-list"), my_lzma || (my_lzma = new LZMA("/static/bejson/js/lzma_worker.js")), my_lzma.compress(t, 1, function(t) {
                    if (!1 !== t) {
                        e = convert_to_formated_hex(t);
                        var i = {
                                name: n,
                                data: e,
                                time: (new Date).toLocaleDateString().replace(/[\u4e00-\u9fa5|,]+/g, "/")
                            },
                            o = $.zui.store.get("saved_json");
                        o && o.length ? o.unshift(i) : (o = []).unshift(i), $.zui.store.set("saved_json", o);
                        var r = document.createDocumentFragment();
                        $(o).each(function(t, e) {
                            var n = document.createElement("li");
                            n.className = "border-bottom-d-color", n.innerHTML = '<p class="line-h-2-4 display-block clear-both no-margin-b cursor-pointer">\n<span class="save-title float-left text-ellipsis">' + e.name + '</span>\n<span class="text-info-9 float-right font-12">' + e.time + '</span>\n<span class="display-none data">' + e.data + "</span>\n</p>", r.appendChild(n)
                        }), $("#daveDataList").html(""), document.getElementById("daveDataList").appendChild(r), $("#confirmInputModal").modal("hide", "fit")
                    } else msgError("An error occurred during LZMA compression.")
                }, function(t) {}))
            }
        })
    } else msgError("请输入数据")
}), $("#loadChecked").change(function() {
    $("#loadChecked").is(":checked") ? $.zui.store.set("lastLoadChecked", "yes") : $.zui.store.set("lastLoadChecked", "no")
}), $("body").on("click", "#removeData", function() {
    $("#daveDataList").addClass("empty-list"), $.zui.store.remove("saved_json"), $("#daveDataList").html("")
}), $("body").on("click", "#daveDataList li", function() {
    my_lzma || (my_lzma = new LZMA("/static/bejson/js/lzma_worker.js"));
    var t = convert_formated_hex_to_bytes($(this).find(".data").eq(0).html());
    if (0 == t) return msgError("invalid compressed input"), !1;
    my_lzma.decompress(t, function(t) {
        !1 !== t ? (editor.setValue(t), localStorage.setItem("lastJsonData", editor.getValue())) : msgError("An error occurred during decompression.")
    }, function(t) {})
});
var replayForm = '<div class="reply-form t-small-margin">\n\t\t\t\t\t\t\t\t<a href="###" class="avatar"><i class="icon-user icon-2x"></i></a>\n\t\t\t\t\t\t\t\t<form class="form">\n\t\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t\t<div class="form-text">\n\t\t\t\t\t\t\t\t\t\t\t<textarea class="form-control new-comment-text" name="text" rows="2" placeholder="撰写回复..."></textarea>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="form-emoji-group">\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[疑问]"><img src="static/img/emoji/icon_question.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[调皮]"><img src="static/img/emoji/icon_razz.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[难过]"><img src="static/img/emoji/icon_sad.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[抠鼻]"><img src="static/img/emoji/icon_evil.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[吓]"><img src="static/img/emoji/icon_exclaim.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[微笑]"><img src="static/img/emoji/icon_smile.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[憨笑]"><img src="static/img/emoji/icon_redface.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[坏笑]"><img src="static/img/emoji/icon_biggrin.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[惊]"><img src="static/img/emoji/icon_surprised.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[发呆]"><img src="static/img/emoji/icon_eek.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[撇嘴]"><img src="static/img/emoji/icon_confused.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[大兵]"><img src="static/img/emoji/icon_cool.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[偷笑]"><img src="static/img/emoji/icon_lol.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[咒骂]"><img src="static/img/emoji/icon_mad.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[发怒]"><img src="static/img/emoji/icon_twisted.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[白眼]"><img src="static/img/emoji/icon_rolleyes.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[鼓掌]"><img src="static/img/emoji/icon_wink.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[酷]"><img src="static/img/emoji/icon_idea.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[擦汗]"><img src="static/img/emoji/icon_arrow.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[亲亲]"><img src="static/img/emoji/icon_neutral.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[大哭]"><img src="static/img/emoji/icon_cry.gif"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-title="[呲牙]"><img src="static/img/emoji/icon_mrgreen.gif"></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="pic-div"></div>\n\t\t\t\t\t\t\t\t\t<div class="form-group comment-user">\n\t\t\t\t\t\t\t\t\t\t<div class="form-add">\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-emoji">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon icon-smile"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-pic">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon icon-picture"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="addImages">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="file" class="replay-file" multiple="multiple" name="img-files" accept="image/*">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-md-10 float-left">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="input-group">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="input-group-addon">昵称<span class="text-danger">*</span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="nickname">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" value="" placeholder="" name="nick-name">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="input-group-addon fix-border">邮箱<span class="text-danger">*</span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="email">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" value="" placeholder="" name="email">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="input-group-addon fix-border">网址</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="website">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control website" value="" placeholder="" name="website">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-md-2 float-right row">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-md-6 no-padding-r">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="btn btn-block replay-cancel">取消</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-md-6 no-padding-r">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="btn btn-block btn-primary replay-btn">回复</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>';
$("body").on("click", ".form-emoji", function() {
    $(this).parents("form").find(".form-emoji-group").eq(0).toggle()
}), $("body").on("click", ".form-emoji-group li", function() {
    var t = $(this).attr("data-title"),
        e = $(this).parents("form").find("textarea").eq(0).val();
    e ? e += t : e = t, $(this).parents("form").find("textarea").eq(0).val(e)
});
var submitGetAndShow = new getAndShowPictures;
$("#file").change(function() {
    submitGetAndShow.add(this)
}), $("#commentReplyForm2").on("click", ".cover", function() {
    submitGetAndShow.cancel(this)
});
var replayGetAndShow = new getAndShowPictures;
$("body").on("change", ".replay-file", function() {
    replayGetAndShow.add(this)
}), $("#commentsList").on("click", ".cover", function() {
    replayGetAndShow.cancel(this)
}), $("body").on("click", ".icon-picture", function() {
    msgError("最多只能上传5张图片")
}), $("#commentSubmit").click(function() {
    var t = $("#commentValue").val(),
        e = isNickname($(this).parents(".row").find(".nickname").eq(0)),
        n = isEmail($(this).parents(".row").find(".email").eq(0));
    if (e)
        if (n)
            if (t) {
                $("#commentsBox").toggleClass("loading");
                var i = $(this).parents("form")[0],
                    o = new FormData(i);
                o.append("img-files", submitGetAndShow.uploadImgArr), doPost("http://www.bejson.com", o, function() {}, function() {
                    alertError({
                        con: "提交失败，请稍候重试"
                    }), $("#commentsBox").toggleClass("loading")
                })
            } else msgError("评论内容不能为空");
    else msgError("请输入正确的邮箱");
    else msgError("请输入昵称")
}), $("body").on("click", "#commentsList .replayBtn", function() {
    replayGetAndShow.imgCount = 0, replayGetAndShow.uploadImgArr = [], $("#commentsList .reply-form").remove(), $(this).parent(".actions").append(replayForm)
}), $("body").on("click", "#commentsList .replay-cancel", function() {
    replayGetAndShow.imgCount = 0, replayGetAndShow.uploadImgArr = [], $("#commentsList .reply-form").remove()
}), $("body").on("click", "#commentsList .replay-btn", function() {
    var t = $(this).parents("form").find("textarea").eq(0).val(),
        e = isNickname($(this).parents(".row").find(".nickname").eq(0)),
        n = isEmail($(this).parents(".row").find(".email").eq(0));
    if (e)
        if (n)
            if (t) {
                $("#commentsBox").toggleClass("loading");
                var i = $(this).parents("form")[0],
                    o = new FormData(i);
                o.append("img-files", replayGetAndShow.uploadImgArr), doPost("http://www.bejson.com", o, function() {}, function() {
                    alertError({
                        con: "提交失败，请稍候重试"
                    }), $("#commentsBox").toggleClass("loading")
                })
            } else msgError("评论内容不能为空");
    else msgError("请输入正确的邮箱");
    else msgError("请输入昵称")
}), new ClipboardJS("#copyJson", {
    text: function(t) {
        return !!editor.getValue() && (msgSuccess("复制成功"), editor.getValue())
    }
}), resizeCodemirror(["#resizePre"], ["#codeBox"], 168, "pre"), resizeCodemirror(["#resizePre1"], ["#codeBox1"], 168, "pre"), resizeCodemirror(["#resizePre2"], ["#codeBox2"], 168, "pre"), resizeCodemirror(["#resizePre3"], ["#codeBox3"], 168, "pre"), resizeCodemirror(["#resize"], ["#editor"], 360), resizeCodemirror(["#resize1"], ["#editor1"], 360), resizeCodemirror(["#resize2"], ["#editor2"], 360), resizeCodemirror(["#resize3"], ["#editor3"], 360), resizeCodemirror(["#resize4"], ["#editor4"], 200), resizeCodemirror(["#resize5"], ["#editor5"], 130), resizeCodemirror(["#resize6", "#resize7"], ["#editor6", "#editor7"], 200), $("#eT").dblclick(function(t) {
    jsonVal = jsl.format.formatJson($("#eT").val()), $("#eT").val(jsonVal)
}), $("#compressEscapeJson").click(function() {
    var t = editor.getValue().replace(/\ +/g, "").replace(/[\r\n]/g, "").replace(/(\")/g, "\\$1");
    editor.setValue(t)
}), $("#chSignToEn").click(function() {
    var t = editor.getValue();
    t = (t = (t = (t = t.replace(/，/g, ",").replace(/。/gi, ".").replace(/“/gi, '"').replace(/；/gi, ";").replace(/”/gi, '"').replace(/【/gi, "[").replace(/】/gi, "]")).replace(/\’|\‘/g, "'").replace(/\“|\”/g, '"')).replace(/\【/g, "[").replace(/\】/g, "]").replace(/\｛/g, "{").replace(/\｝/g, "}")).replace(/，/g, ",").replace(/：/g, ":"), editor.setValue(t)
}), $("#downloadJavaBean").click(function() {
    downloadZip()
});
var javawordsStr = "abstract,assert,boolean,break,byte,case,catch,char,class,const,continue,default,do,double,else,enum,extends,final,finally,float,for,goto,if,implements,import,instanceof,int,interface,long,native,new,package,private,protected,public,return,strictfp,short,static,super,switch,synchronized,this,throw,throws,transient,try,void,volatile,while";
$("#getJavaBean").click(function() {
    chechJavaWords() && gen()
}), $("#javaBeanEditor").keyup(function() {
    chechJavaWords() && gen()
}), String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, "")
}, $("#javaBeanOldEditor").keyup(function() {
    try {
        jsonlint.parse(editor.getValue()) && ($("#jsonlintResult").html("正确的JSON!"), $("#jsonlintBox").addClass("alert-success alert").removeClass("alert-warning alert-danger"), $("#jsonlintIcon").addClass("icon-ok-sign").removeClass("icon-info-sign icon-remove-sign"))
    } catch (t) {
        document.getElementById("jsonlintResult").innerHTML = t, $("#jsonlintBox").addClass("alert-danger alert").removeClass("alert-warning alert-success"), $("#jsonlintIcon").addClass("icon-remove-sign").removeClass("icon-info-sign icon-ok-sign")
    }
}), $("#comeJson").click(function() {
    testCase()
}), $("#getJavaBean2").click(function() {
    genJson($(this))
}), new ClipboardJS("#copyJavaBean", {
    text: function(t) {
        return $("#resData").text() ? (msgSuccess("复制成功"), $("#resData").text()) : (msgError("复制失败"), !1)
    }
}), $("#downloadJavaZip").click(function() {
    var t = $("#resData").text();
    if (t) {
        downloadZip4(".java", "java", "bejson.java", t, $("#saveName").val())
    } else msgError("暂无数据保存")
}), $("#getCsharp").click(function() {
    josnToCsharp()
}), $("#clearCode").click(function() {
    editor.setValue(""), document.getElementById("jsonlintBox") && $("#jsonlintBox").hide()
}), $("#clearCodeD").click(function() {
    editor.setValue(""), editor2.setValue(""), document.getElementById("jsonlintBox") && $("#jsonlintBox").hide()
}), $("#downloadCZip").click(function() {
    $("#resData").html() ? downloadZip3(".c", "c", "c++.c") : msgError("未生成c++")
}), $("#compressionJson").click(function() {
    Process()
}), $("#TabSize").change(function() {
    TabSizeChanged()
}), $("#QuoteKeys").change(function() {
    QuoteKeysClicked()
}), $("#unicodeToCode").change(function() {
    unicodeToCodeClicked()
}), $("#CollapsibleView").change(function() {
    CollapsibleViewClicked()
}), $("#CollapsibleViewDetail button").click(function() {
    var t = $(this).attr("data-index");
    "0" === t ? ExpandAllClicked() : "1" === t ? CollapseAllClicked() : CollapseLevel(parseInt(t))
});
var resultPreHeight;
$("#resizeFmt").draggable({
    container: "#resultPre",
    move: !1,
    before: function() {
        resultPreHeight = $("#resultPre").innerHeight()
    },
    drag: function(t) {
        $("#resultPre .Canvas").height(t.offset.y + resultPreHeight > 200 ? t.offset.y + resultPreHeight : 200)
    },
    finish: function(t) {}
}), $("#xml2json").click(function(t) {
    var e = new XML.ObjTree,
        n = new JKL.Dumper,
        i = editor2.getValue();
    $("#escapeCoding").prop("checked") && (i = repalceFh(i));
    var o = e.parseXML(i);
    o && editor.setValue(n.dump(o))
}), $("#json2xml").click(function(e) {
    try {
        var result = jsonlint.parse(editor.getValue());
        if (result) {
            var xotree = new XML.ObjTree,
                json = eval("(" + editor.getValue() + ")");
            editor2.setValue(formatXml(xotree.writeXML(json))), $("#jsonlintResult").html("正确的JSON!"), $("#jsonlintBox").addClass("alert-success alert").removeClass("alert-warning alert-danger"), $("#jsonlintIcon").addClass("icon-ok-sign").removeClass("icon-info-sign icon-remove-sign")
        }
    } catch (e) {
        document.getElementById("jsonlintResult").innerHTML = e, $("#jsonlintBox").addClass("alert-danger alert").removeClass("alert-warning alert-success"), $("#jsonlintIcon").addClass("icon-remove-sign").removeClass("icon-info-sign icon-ok-sign")
    }
}), $("#resetCode").click(function() {
    editor.setValue(""), editor2.setValue(""), document.getElementById("jsonlintBox") && $("#jsonlintBox").removeClass("alert-success alert alert-danger")
}), $("#downloadEditor").click(function() {
    var t = $(this).attr("data-suffix");
    editor.getValue() ? t ? downloadZip4("." + t, t, t + "." + t, editor.getValue()) : downloadZip4(".json", "json", "json.json", editor.getValue()) : msgError("暂无数据可以保存")
}), $("#downloadEditor2").click(function() {
    var t = $(this).attr("data-suffix");
    editor2.getValue() ? t ? downloadZip4("." + t, t, t + "." + t, editor2.getValue()) : downloadZip4(".xml", "xml", "xml.xml", editor2.getValue()) : msgError("暂无数据可以保存")
}), $("#downloadPre").click(function() {
    var t = $(this).attr("data-suffix");
    $("#storeEncode").html() ? t ? downloadZip4("." + t, t, t + "." + t, $("#storeEncode").html()) : downloadZip4(".js", "js", "js.js", $("#storeEncode").html()) : msgError("暂无数据可以保存")
}), $("#downloadTextarea").click(function() {
    var t = $(this).attr("data-suffix");
    $("#storeEncode").val() ? t ? downloadZip4("." + t, t, t + "." + t, $("#storeEncode").val()) : downloadZip4(".js", "js", "js.js", $("#storeEncode").val()) : msgError("暂无数据可以保存")
}), new ClipboardJS("#copyEditor", {
    text: function(t) {
        return !!editor.getValue() && (msgSuccess("复制成功"), editor.getValue())
    }
}), new ClipboardJS("#copyEditor2", {
    text: function(t) {
        return !!editor2.getValue() && (msgSuccess("复制成功"), editor2.getValue())
    }
}), new ClipboardJS("#copyEditor3", {
    text: function(t) {
        return !!editor3.getValue() && (msgSuccess("复制成功"), editor3.getValue())
    }
}), new ClipboardJS("#copyPre", {
    text: function(t) {
        return !!$("#storeEncode").html() && (msgSuccess("复制成功"), $("#storeEncode").html())
    }
}), new ClipboardJS("#copyTextarea", {
    text: function(t) {
        return !!$("#storeEncode").val() && (msgSuccess("复制成功"), $("#storeEncode").val())
    }
}), $("#content").bind("change1", function() {
    "0" == $("#ctype").val() && ctype0()
}), $("#colToJsonBtn").click(function() {
    ctyperow(!0)
}), $("#colTestCase").click(function() {
    editor.setValue("name\tpayment\turl\tasdf\naaa中文测试\t999\thttp://www.bejson.com\tasdf\nbbb\t888\thttp://www.bejson.com\tasdf\nccc中文测试\t777\thttp://www.bejson.com\tasdf\nddd\t666\thttp://www.bejson.com\tasdf\neee中文测试\t555\thttp://www.bejson.com\tasdf\nfff\t444\thttp://www.bejson.com\tasdf")
}), $("#selectedColType").change(function() {
    var t = $("#selectedColType").val();
    $("#ctype").val(t)
}), $("#json2getDouble").click(function() {
    try {
        if (jsonlint.parse(editor.getValue())) {
            var t = parseParam(JSON.parse(editor.getValue()));
            editor2.setValue(t), $("#jsonlintBox").removeClass("alert-success alert alert-warning alert-danger")
        }
    } catch (t) {
        document.getElementById("jsonlintResult").innerHTML = t, $("#jsonlintBox").addClass("alert-danger alert").removeClass("alert-warning alert-success"), $("#jsonlintIcon").addClass("icon-remove-sign").removeClass("icon-info-sign icon-ok-sign")
    }
}), $("#get2jsonDouble").click(function() {
    var t = paramParse(editor2.getValue());
    editor.setValue(t)
}), $("#excelTestCase").click(function() {
    editor.setValue('[\n\t{"id":"1","title":"BeJSON","url":"www.bejson.com"},\n\t{"id":"2","title":"layui","url":"www.layui.com"}\n]')
}), $("#jsonToColBtn").click(function() {
    try {
        jsonlint.parse(editor.getValue()) && (ctyperow(!0), $("#jsonlintBox").removeClass("alert-success alert alert-warning alert-danger"))
    } catch (t) {
        document.getElementById("jsonlintResult").innerHTML = t, $("#jsonlintBox").addClass("alert-danger alert").removeClass("alert-warning alert-success"), $("#jsonlintIcon").addClass("icon-remove-sign").removeClass("icon-info-sign icon-ok-sign")
    }
}), $("#downloadCsv").click(function() {
    var t = editor2.getValue(),
        e = new Blob([t], {
            type: "text/plain;charset=utf-8"
        });
    saveAs(e, "content.csv")
}), $("#json2yamlDouble").click(function() {
    jsonToYaml()
}), $("#yaml2jsonDouble").click(function() {
    yamlToJson()
}), $("#comAyamlDeom").click(function() {
    editor.setValue('{"json":["rigid","better for data interchange"],"yaml":["slim and flexible","better for configuration"],"object":{"key":"value","array":[{"null_value":null},{"boolean":true},{"integer":1}]},"paragraph":"Blank lines denote\\nparagraph breaks\\n","content":"Or we\\ncan auto\\nconvert line breaks\\nto save space"}')
}), $("#yamlEditor").keyup(function() {
    var t = editor.getValue();
    if (t) try {
        var e = JSON.stringify(jsyaml.load(t), null, 2);
        editor2.setValue(e), $("#jsonlintResult").html("正确的yaml!"), $("#jsonlintBox").addClass("alert-success alert").removeClass("alert-warning alert-danger"), $("#jsonlintIcon").addClass("icon-ok-sign").removeClass("icon-info-sign icon-remove-sign")
    } catch (t) {
        document.getElementById("jsonlintResult").innerHTML = t, $("#jsonlintBox").addClass("alert-danger alert").removeClass("alert-warning alert-success"), $("#jsonlintIcon").addClass("icon-remove-sign").removeClass("icon-info-sign icon-ok-sign")
    } else document.getElementById("jsonlintResult").innerHTML = "yamld代码不能为空", $("#jsonlintBox").addClass("alert-danger alert").removeClass("alert-warning alert-success"), $("#jsonlintIcon").addClass("icon-remove-sign").removeClass("icon-info-sign icon-ok-sign")
}), $("#lockBase64").click(function() {
    var t = Util.charset,
        e = $("#selectedCodeType").val(),
        n = "";
    (n = "utf-8" === e ? t.Base64.encode(editor.getValue(), "utf8") : "gbk" === e ? t.Base64.encode(editor.getValue(), "gbk") : t.Base64.encode(editor.getValue(), "utf8", !0)) ? editor2.setValue(n): msgError("加密的文本有误，请检查后重试")
}), $("#unlockBase64").click(function() {
    var t = Util.charset,
        e = $("#selectedCodeType").val(),
        n = "";
    (n = "utf-8" === e ? t.Base64.decode(editor.getValue(), "utf8") : "gbk" === e ? t.Base64.decode(editor.getValue(), "gbk") : t.Base64.decode(editor.getValue(), "utf8", !0)) ? editor2.setValue(n): msgError("解密的文本有误，请检查后重试")
}), $("#exchangeCon").click(function() {
    var t = editor.getValue(),
        e = editor2.getValue();
    editor.setValue(e), editor2.setValue(t)
}), $("#md5Encryption").click(function() {
    var t = editor.getValue();
    if (t) {
        var e = t.MD5PRO_2(16),
            n = t.MD5PRO_2(32);
        $(".md5-result input").each(function(t, i) {
            0 === t ? $(i).val(n.toUpperCase()) : 1 === t ? $(i).val(n.toLowerCase()) : 2 === t ? $(i).val(e.toUpperCase()) : $(i).val(e.toLowerCase())
        })
    } else msgError("要加密的内容能不能为空")
}), $("#clearCodeMd5").click(function() {
    editor.setValue(""), $(".md5-result input").val("")
}), new ClipboardJS("#md5Result .copy", {
    text: function(t) {
        var e = $(t).parent().find("input").eq(0).val();
        return !!e && (msgSuccess("复制成功"), e)
    }
}), $("#lockAesdes").click(function() {
    aesdesEncrypt()
}), $("#unlockAesdes").click(function() {
    aesdesDecrypt()
}), $("#rsaCmd li").click(function() {
    switch ($(this).attr("data-cmd")) {
        case "buildRSADecryptByPrivateKey":
            $("#rsaCon1").html("请输入私钥"), $("#rsaCon2").html("请输入要解密的签名"), $("#rsaCreate").hide(), $("#rsaEncry").removeClass("height-0");
            break;
        case "buildRSAEncryptByPrivateKey":
            $("#rsaCon1").html("请输入私钥"), $("#rsaCon2").html("请输入要加密的字符串"), $("#rsaCreate").hide(), $("#rsaEncry").removeClass("height-0");
            break;
        case "buildRSAEncryptByPublicKey":
            $("#rsaCon1").html("请输入公钥"), $("#rsaCon2").html("请输入要加密的字符串"), $("#rsaCreate").hide(), $("#rsaEncry").removeClass("height-0");
            break;
        case "buildRSADecryptByPublicKey":
            $("#rsaCon1").html("请输入公钥"), $("#rsaCon2").html("请输入要解密的签名"), $("#rsaCreate").hide(), $("#rsaEncry").removeClass("height-0");
            break;
        case "buildRSAverifyByPublicKey":
            $("#rsaCon1").html("请输入签名"), $("#rsaCon2").html("请输入公钥"), $("#rsaCreate").hide(), $("#rsaEncry").removeClass("height-0");
            break;
        case "0":
            $("#rsaCreate").show(), $("#rsaEncry").addClass("height-0")
    }
}), new ClipboardJS("#rsaCopyPublic", {
    text: function(t) {
        var e = $("#rsaPublic").val();
        return !!e && (msgSuccess("复制成功"), e)
    }
}), new ClipboardJS("#rsaCopyPrivate", {
    text: function(t) {
        var e = $("#rsaPrivate").val();
        return !!e && (msgSuccess("复制成功"), e)
    }
}), $("#rsaCreateBtn").click(function() {
    var t = $("#rsaLength").val(),
        e = $("#rsaFormat").val(),
        n = $("#rsaPrivatePass").val(),
        i = bejsonHost + "Bejson/Api/Rsa/getRsaKey",
        o = {
            rsaLength: t,
            rsaFormat: e,
            rsaPass: n
        };
    console.log(o), $("body").toggleClass("loading"), doPost(i, o, function(t) {
        200 === t.code || "200" === t.code ? ($("#rsaPublic").val(t.data.public), $("#rsaPrivate").val(t.data.private)) : alertError({
            con: t.msg
        }), $("body").toggleClass("loading")
    }, function() {
        alertError({
            con: "生成失败，请稍候重试"
        }), $("body").toggleClass("loading")
    })
}), $("#doRsaEncry").click(function() {
    rsaConvert()
}), $("#clearCodeT").click(function() {
    editor.setValue(""), editor2.setValue(""), editor5.setValue("")
}), $("#shaBtn .shabtn").click(function() {
    shaHash($(this).attr("data-sha"))
}), $("#lockEscape").click(function() {
    editor2.setValue(escape(editor.getValue()))
}), $("#unlockEscape").click(function() {
    editor2.setValue(unescape(editor.getValue()))
}), $("#lockUrl").click(function() {
    editor2.setValue(encodeURI(editor.getValue())), $("#editor7").show(), $("#editor6").addClass("left-editor"), editor3.setValue(encodeURIComponent(editor.getValue()))
}), $("#unlockUrl").click(function() {
    try {
        editor2.setValue(decodeURIComponent(editor.getValue()))
    } catch (t) {
        msgError(t)
    }
    $("#editor7").hide(), $("#editor6").removeClass("left-editor")
}), $("#clearCodeT2").click(function() {
    editor.setValue(""), editor2.setValue(""), editor3.setValue("")
});
var evalA = 62;
$("#lockJavascript").click(function() {
    evalEncode()
}), $("#unlockJavascript").click(function() {
    evalDecode()
}), $("#goFormat").click(function() {
    goFormat()
}), $("#lockMorse").click(function() {
    editor2.setValue(xmorse.encode(editor.getValue()))
}), $("#unlockMorse").click(function() {
    editor2.setValue(xmorse.decode(editor.getValue()))
}), $("#fuck2js").click(function() {
    editor2.setValue(hieroglyphy.hieroglyphyScript(editor.getValue().trim()))
}), $("#fuck2string").click(function() {
    editor2.setValue(hieroglyphy.hieroglyphyString(editor.getValue().trim()))
}), $("#fuck2number").click(function() {
    editor2.setValue(hieroglyphy.hieroglyphyNumber(+editor.getValue().trim()))
}), $("#jjencode").click(function() {
    var t, e = editor.getValue(),
        n = $("#className").val() || "$",
        i = $("#palindrome").prop("checked");
    t = jjencode(n, e), i && (t = '"\'\\"+\'+",' + (t = t.replace(/[,;]$/, "")) + ",'," + t.split("").reverse().join("") + ',"+\'+"\\\'"'), editor2.setValue(t)
}), $("#aaencode").click(function() {
    var t, e = editor.getValue();
    t = aaencode(e), editor2.setValue(t)
}), $("#regexUl").change(function() {
    $("#textPattern").val($(this).val())
}), $("#regexBtn").click(function() {
    onMatch()
}), $("#replaceBtn").click(function() {
    onReplace()
}), $("#xpathClear").click(function() {
    $("#textPattern").val(""), editor.setValue(""), $("#cBox").removeClass("prettyprinted").html(""), prettyPrint()
}), $("#xpathTestCase").click(function() {
    xpathShowDemo()
}), $("#xpathRegexBtn").click(function() {
    xpathOnMatch()
}), $("#barcodeGenBtn").click(function() {
    var t = $("#codeText").val(),
        e = $("#codeText").val(),
        n = $("#bar-width").val(),
        i = $("#bar-height").val(),
        o = $("#bg-color").val(),
        r = $("#bar-color").val(),
        a = $("#fontsize").val(),
        s = $("#textMargin").val(),
        l = $("#barcodeShowtext").prop("checked"),
        c = "left";
    $("#textleft").prop("checked") ? c = "left" : $("#textcenter").prop("checked") ? c = "center" : $("#textright").prop("checked") && (c = "right"), l || (e = ""), JsBarcode("#barcode1", t, {
        textPosition: "bottom",
        font: "cursive",
        fontOptions: "bold",
        background: o,
        lineColor: r,
        textAlign: c,
        height: i,
        fontSize: a,
        width: n,
        textMargin: s,
        text: e
    })
}), $("#barcodeShowtext").change(function() {
    $(this).prop("checked") ? $(".showtextview").show() : $(".showtextview").hide()
}), $("#keycodesCodeText").keydown(function(t) {
    $("#keycodesCodeText").val("");
    var e = t.keyCode;
    $("#res").text(e)
}), $("#fanyi").click(function() {
    if (editor.getValue()) {
        var t = bejsonHost + "Bejson/Api/Zh2en/toEnglish",
            e = {
                word: editor.getValue()
            };
        "zh" === $("#language").val() && (t = bejsonHost + "Bejson/Api/Zh2en/toChinese", e = {
            eng_word: editor.getValue()
        }), $("body").toggleClass("loading"), doPost(t, e, function(t) {
            "200" === t.code || 200 === t.code ? editor2.setValue(t.data.target_text) : msgError(t.msg), $("body").toggleClass("loading")
        }, function() {
            alertError({
                con: "翻译失败，请稍候重试"
            }), $("body").toggleClass("loading")
        })
    } else msgError("请输入要翻译的文本")
}), $("#findDemoBtn").click(function() {
    editor1.setValue('<ul class="Mid1L_img"><li><a target="_blank" href="http://www.gamersky.com/ent/201602/713635.shtml"><img src="http://imgs.gamersky.com/upimg/2016/201602041231419605.jpg" alt="这点钱如何养活后宫佳丽？想想就心累的动态图" width="120" height="85" class="pe_u_thumb" border="0"><div class="border"></div><div class="mask"></div><div class="txt">这点钱如何养后宫？</div></a></li><li><a target="_blank" href="http://www.gamersky.com/ent/201602/713080.shtml"><img src="http://imgs.gamersky.com/upimg/2016/201602031208408737.jpg" alt="你绝对挡不住女人前进的步伐 午间内涵动态图" width="120" height="85" class="pe_u_thumb" border="0"><div class="border"></div><div class="mask"></div><div class="txt">你挡不住女人的步伐</div></a></li><li><a target="_blank" href="http://www.gamersky.com/ent/201602/712632.shtml"><img src="http://imgs.gamersky.com/upimg/2016/201602021155155249.jpg" alt="你看人家的女友怎么玩 感觉心好痛的午间动态图" width="120" height="85" class="pe_u_thumb" border="0"><div class="border"></div><div class="mask"></div><div class="txt">看人家的女友怎么玩</div></a></li></ul>')
}), $("#findImgBtn").click(function() {
    find(1)
}), $("#findLinkBtn").click(function() {
    find(3)
}), $("#findPatternBtn").click(function() {
    find(2)
}), $("#findClearBtn").click(function() {
    editor2.setValue(""), editor1.setValue(""), $("#xpath").val("")
}), new ClipboardJS(".regex-create-copy", {
    text: function(t) {
        var e = $(t).parent().find("pre").text();
        return !!e && (msgSuccess("复制成功"), e)
    }
});
var regexCreateCodes = {
    js: 'var pattern = /{<0>}/;\nvar str = "{<1>}";\nconsole.log(pattern.test(str));',
    php: "$str = \"{<1>}\";\n$isMatched = preg_match('/{<0>}/', $str, $matches);\nvar_dump($isMatched, $matches);",
    go: 'package main\n\nimport (\n\t"fmt"\n\t"regexp"\n)\n\nfunc main() {\n\tstr := "{<1>}"\n\tmatched, err := regexp.MatchString("{<0>}", str)\n\tfmt.Println(matched, err)\n}',
    rb: "pattern = /{<0>}/\nstr = '{<1>}'\np pattern.match(str)",
    py: "import re\npattern = re.compile(ur'{<0>}')\nstr = u'{<1>}'\nprint(pattern.search(str))",
    java: 'import java.util.regex.Matcher;\nimport java.util.regex.Pattern;\n\npublic class RegexMatches {\n\t\n\tpublic static void main(String args []) {\n\t\tString str = "{<1>}";\n\t\tString pattern = "{<0>}";\n\n\t\tPattern r = Pattern.compile(pattern);\n\t\tMatcher m = r.matcher(str);\n\t\tSystem.out.println(m.matches());\n\t}\n\n}'
};
$("#userfullreg button").click(function(t) {
    $("#codeText").val($(this).data("code")), $("#regdemo").val($(this).data("demo"))
}), $("#regexCreateClearBtn").click(function() {
    $("#codeText").val(""), $("#codes").html("")
}), $("#regexCreateGenBtn").click(function() {
    var t = $("#codeText").val();
    if (null != t && "" != t) {
        for (var e = Object.keys(regexCreateCodes), n = Object.values(regexCreateCodes), i = "", o = 0; o < e.length; o++) {
            var r = n[o].replace("{<0>}", $("#codeText").val());
            r = r.replace("{<1>}", $("#regdemo").val()), i += '<div class="thumbnail relative"><div class="caption"><h3>' + e[o] + '</h3><pre class="  linenums">' + r + '</pre></div><button class="btn btn-sm regex-create-copy">复制</button></div> '
        }
        $("#codes").html(i)
    }
}), $("#removeDuplicateBtn").click(function() {
    removeDuplicate()
}), $("#removeDuplicateDemo").click(function() {
    editor.setValue("Hello Word\nhello word\nHello Word")
}), $("#sortWordsBtn").click(function() {
    var t = editor.getValue();
    if (t) {
        t = (t = (t = (t = t.replace(/\n/g, "")).replace(/，/g, ",")).replace(/\t/g, ",")).replace(/\s+/g, ",");
        var e = $(this);
        e.button("loading"), doPost(bejsonHost + "Bejson/Api/Sortwords/sortChinese", {
            word: t
        }, function(t) {
            var n = "",
                i = t.data,
                o = /[a-zA-Z]/;
            if (200 === t.code || "200" === t.code) {
                for (var r in i)
                    if (o.test(r)) {
                        var a = i[r];
                        n += "[" + r + "] ";
                        for (var s = 0; s < a.length; s++) n += a[s].area_name, a.length > 1 && s < a.length - 1 ? n += "，" : n += "    "
                    } editor2.setValue(n)
            } else alertError({
                con: t.msg
            });
            e.button("reset")
        }, function() {
            e.button("reset"), msgError("排序失败，请稍候再试")
        })
    } else msgError("请输入要排序的字符串")
}), $("#sortWordsDemoBtn").click(function() {
    editor.setValue("王,李,张,刘,陈,杨,黄,吴,赵,周,,徐,孙,马,朱,胡,林,郭,何,高,罗,,郑,梁,谢,宋,唐,许,邓,A,冯,韩,曹,,曾,彭,C,萧,蔡,F,潘,田,董,袁,于,余,,叶,蒋,杜,苏,魏,程,吕,丁,沈,任，白，卞 ")
});
var createLognCaptcha = "";
document.getElementById("uploaderLogo") && getCaptcha(), $("#captcha").click(function() {
    getCaptcha()
}), $("#createLogo").click(function() {
    if ($("#logoCaptcha").val())
        if (uploaderLogo.getFiles().length) {
            $("#uploadLogoBtn").button("loading"), $("#createLogo").button("loading");
            createlogoQiniuUploader(uploaderLogo.getFiles()[uploaderLogo.getFiles().length - 1].getNative(), "#file-" + uploaderLogo.getFiles()[uploaderLogo.getFiles().length - 1].id)
        } else msgError("请上传图片");
    else msgError("请输入验证码")
}), $("#uploaderLogo").on("click", ".btn-reset-file", function() {
    if ($("#logoCaptcha").val()) {
        var t = $(this).parents(".file").attr("id");
        $("#uploadLogoBtn").button("loading"), $("#createLogo").button("loading"), $(uploaderLogo.getFiles()).each(function(e, n) {
            if ("file-" + n.id === t) {
                createlogoQiniuUploader(n.getNative(), "#" + t)
            }
        })
    } else msgError("请输入验证码")
}), $("#ocrUploadeImg").click(function() {
    if (uploaderOcr.getFiles().length > 0) {
        var t = $(this);
        t.button("loading"), ocrQiniuUploader(t, uploaderOcr.getFiles()[0].getNative(), "#file-" + uploaderOcr.getFiles()[0].id)
    } else msgError("请上传本地图片")
}), $("#uploaderOcr").on("click", ".btn-reset-file", function() {
    var t = $(this).parents(".file").attr("id"),
        e = $(".uploader-btn-browse");
    e.button("loading"), $(uploaderImg2Svg.getFiles()).each(function(n, i) {
        "file-" + i.id === t && ocrQiniuUploader(e, i, "#" + t)
    })
}), $("#removeOcrFile").click(function() {
    uploaderOcr.getFiles()[0] && uploaderOcr.removeFile(uploaderOcr.getFiles()[0])
}), $("#ocrSelectWebUrl").click(function() {
    confirmInput({
        title: "请输入图片网址",
        btnTitle: ["取消", "生成"],
        success: function(t) {
            t ? ($("#confirmInputModal").modal("hide", "fit"), $("#ocrUploadeImg").button("loading"), $("body").toggleClass("loading"), doPost(bejsonHost + "Bejson/Api/DistinguishString/ocrFromPicture", {
                path: t,
                language: $("#orcLanguage").val()
            }, function(t) {
                200 === t.code || "200" === t.code ? ($("#ocrRes").addClass("alert"), $("#ocrRes").text(t.data.join(","))) : alertError({
                    cod: t.msg
                }), $("#ocrUploadeImg").button("reset"), $("body").toggleClass("loading")
            }, function() {
                $("#ocrUploadeImg").button("reset"), $("body").toggleClass("loading"), msgError("链接错误，请稍候重试")
            })) : msgError("请输入图片网址")
        }
    })
}), $("#wordpressCheck").click(function() {
    $("#res").html("");
    var t = $("#codeText").val();
    if (t) {
        $("#res").html('<div class="alert" role="alert">查询中....请稍等</div>');
        var e = $(this);
        e.button("loading"), doPost(bejsonHost + "Bejson/Api/WordpressTheme/getThemInfo", {
            url: t
        }, function(t) {
            if (200 === t.code || "200" === t.code) {
                var n = "";
                n = -1 == t.data.screenshot.indexOf("http") ? '<a class="card col-sm-6 col-md-4" href="u">\n  <img src="http://' + t.data.screenshot + '" alt="">\n  <div class="card-heading"><strong>解析结果</strong></div>\n  <div class="card-content text-muted">' + t.data.desc + "</div>\n</a>" : '<a class="card" href="u">\n  <img src="' + t.data.screenshot + '" alt="">\n  <div class="card-heading"><strong>解析结果</strong></div>\n  <div class="card-content text-muted">' + t.data.desc + "</div>\n</a>", $("#res").html(n)
            } else $("#res").html('<div class="alert alert-danger" role="alert">' + t.msg + "</div>");
            e.button("reset")
        }, function() {
            e.button("reset"), msgError("获取失败，请稍候重试")
        })
    } else msgError("请输入博客网址")
}), $("#wordpressClear").click(function() {
    $("#codeText").val("")
}), $("#pic2WeiboCheck").click(function() {
    if ($("#codeText").val()) {
        var t = $(this);
        t.button("loading"), doPost(bejsonHost + "Bejson/Api/PicToWeibo/toWeibo", {
            url: $("#codeText").val()
        }, function(e) {
            200 === e.code || "200" === e.code ? $("#res").html('<a href="' + e.data + '" target="_blank">图片出处:' + e.data + "</a>") : alertError({
                con: e.msg
            }), t.button("reset")
        }, function() {
            msgError("获取失败，请稍候重试"), t.button("reset")
        })
    } else msgError("微博图片地址不能为空")
}), $("#pic2WeiboClear").click(function() {
    $("#codeText").val("")
}), new ClipboardJS(".interface-copy", {
    text: function(t) {
        var e = $(t).parents("li").find("pre").text();
        return !!e && (msgSuccess("复制成功"), e)
    }
});
var htmlStringSuffix = "text";
$("#htmlStringJava").click(function() {
    var t = html2string(editor.getValue(), "java");
    editor2.setValue(t), $("#downloadEditor2").attr("data-suffix", $(this).attr("data-suffix"))
}), $("#htmlStringPhp").click(function() {
    var t = html2string(editor.getValue(), "php");
    editor2.setValue(t), $("#downloadEditor2").attr("data-suffix", $(this).attr("data-suffix"))
}), $("#htmlStringPython").click(function() {
    var t = html2string(editor.getValue(), "py");
    editor2.setValue(t), $("#downloadEditor2").attr("data-suffix", $(this).attr("data-suffix"))
}), $("#htmlStringJs").click(function() {
    var t = html2string(editor.getValue(), "js");
    editor2.setValue(t), $("#downloadEditor2").attr("data-suffix", $(this).attr("data-suffix"))
}), $("#htmlStringHtml2json").click(function() {
    htmlStringConvert2(), $("#downloadEditor2").attr("data-suffix", $(this).attr("data-suffix"))
}), $("#htmlStringDemo").click(function() {
    htmlStringDemo()
});
var type = 1,
    htmlJsType = 1;
$("#htmlJsHtml2json").click(function() {
    htmlJsConvert2(), $("#downloadEditor2").attr("data-suffix", $(this).attr("data-suffix"))
}), $("#htmlJsHtml2Js").click(function() {
    htmlJsType = 1, htmlJsConvert(), $("#downloadEditor2").attr("data-suffix", $(this).attr("data-suffix"))
}), $("#htmlJsJs2html").click(function() {
    htmlJsType = 2, -1 == editor.getValue().indexOf("var") ? msgError("转换值不是js代码!") : (htmlJsConvert(), $("#downloadEditor2").attr("data-suffix", $(this).attr("data-suffix")))
}), $("#htmlJsDemo").click(function() {
    editor.setValue('<div id="app" class="body-container">\n    <div class="spinner">\n      <div class="spinner-container container1">\n          <div class="circle1"></div>\n          <div class="circle2"></div>\n          <div class="circle3"></div>\n          <div class="circle4"></div>\n      </div>\n      <div class="spinner-container container2">\n          <div class="circle1"></div>\n          <div class="circle2"></div>\n          <div class="circle3"></div>\n          <div class="circle4"></div>\n      </div>\n      <div class="spinner-container container3">\n          <div class="circle1"></div>\n          <div class="circle2"></div>\n          <div class="circle3"></div>\n          <div class="circle4"></div>\n      </div>\n    </div>\n  </div>')
}), $("#deserializeDemoBtn").click(function() {
    editor.setValue('a:3:{s:4:"name";s:6:"huqian";s:3:"sex";s:3:"男";s:3:"age";i:27;}')
}), $("#deserializeRegexBtn").click(function() {
    if (editor.getValue()) {
        var t = $(this);
        t.button("loading"), deserializeDeser(t)
    } else msgError("请贴入要反序列化的代码")
}), $("#uploaderImg2Svg").on("click", ".btn-reset-file", function() {
    var t = $(this).parents(".file").attr("id"),
        e = $(".uploader-btn-browse");
    e.button("loading"), $(uploaderImg2Svg.getFiles()).each(function(n, i) {
        "file-" + i.id === t && qiniuUploader(e, i, "#" + t)
    })
}), window.img2SvgFilename = "", window.img2SvgKeystr = "", new ClipboardJS(".svg-copy", {
    text: function(t) {
        var e = $(t).parents(".svgimg-txtbox").find("textarea").val();
        return !!e && (msgSuccess("复制成功"), e)
    }
}), $(".peinput").keyup(function() {
    var t = $(this).attr("d"),
        e = $("#baseInput").val(),
        n = $(this).val();
    if (isNaN(e)) alert("基数必须是数字");
    else {
        if (isNaN(n)) return alert("请填写数字"), void $(this).focus();
        if ("px" == t) {
            i = n / e;
            i = parseFloat(i.toFixed(2)), $("#pxOutput").val(i)
        } else {
            var i;
            i = (i = n * e).toFixed(0), $("#emOutput").val(i)
        }
    }
}), $("#ox2strHexandcharC").click(function() {
    ox2strHexandchar("c", $(this))
}), $("#ox2strHexandcharD").click(function() {
    ox2strHexandchar("d", $(this))
}), $("#ox2strDemo").click(function() {
    ox2strDemo()
}), $("#hexInp").keyup(function() {
    var t = $(this).val().trim();
    if (t.startWith("#") && (t = t.substr(1, t.length)), 3 == t.length) {
        var e = t.split("");
        _a1 = e[0], _a2 = e[1], _a3 = e[2], t = _a1 + _a1 + _a2 + _a2 + _a3 + _a3
    }
    var n = HexToRGB(t);
    appendRgb.checked && (n = "rgb(" + n + ")"), $("#outRgb").val(n), appendRgb.checked ? $(".hexspan").css({
        background: n
    }) : $(".hexspan").css({
        background: "rgb(" + n + ")"
    })
}), $("#appendRgb").click(function() {
    var t = $("#outRgb").val().trim();
    "" != t && (t = $(this).is(":checked") ? "rgb(" + t + ")" : t.replace("rgb(", "").replace(")", ""), $("#outRgb").val(t))
}), $("#rgbInp").keyup(function() {
    var t = $(this).val();
    (t = t.toUpperCase()).startsWith("RGB") && (t = t.replace("RGB(", "").replace(")", ""));
    var e = ""; - 1 != t.indexOf(",") ? e = t.split(",") : -1 != t.indexOf(" ") && (e = t.split(" ")), $(".rgbspan").css({
        background: "#" + RGBToHex(e)
    }), $("#outHex").val("#" + RGBToHex(e))
}), String.prototype.startWith = function(t) {
    return new RegExp("^" + t).test(this)
}, new ClipboardJS(".copy-input", {
    text: function(t) {
        var e = $(t).parents(".input-group").find("input").val();
        return !!e && (msgSuccess("复制成功"), e)
    }
}), $("#encodeLoadUrlImg").on("click", function(t) {
    var e = $(this);
    e.button("loading");
    var n = $("#encode-logo").val(),
        i = $("#logo-canvas")[0];
    i.getContext("2d").clearRect(0, 0, i.width, i.height), $("#uploadQrcodeLogo").val(""), document.getElementById("uploadFile").value = "", n ? ($(i).data("logo", ""), renderLogo(i, n, e)) : (msgError("网络图片地址不能为空"), e.button("reset"))
}), $("#encodeCreateQrcode").on("click", function() {
    var t = $(this);
    $(this).button("loading");
    var e = {},
        n = $("#encode-canvas");
    if (e.text = $("#encode-text").val(), e.render = $("#encode-render").val(), e.bgColor = $("#encode-bgcolor").val(), e.moduleColor = $("#encode-mcolor").val(), e.moduleSize = $("#encode-msize").val(), e.mode = Number($("#encode-mode").val()), e.ECLevel = Number($("#encode-eclevel").val()), e.margin = Number($("#encode-margin").val()), e.logo = $("#logo-canvas").data("logo"), e.error = function(e) {
            throw n.html(""), msgError("生成二维码错误，请检查您的设置"), t.button("reset"), $("#downloadQrcode").hide(), e
        }, !e.text) return msgError("请输入文本"), void $(this).button("reset");
    n.QREncode(e), $(this).button("reset"), "canvas" === $("#encode-render").val() ? $("#downloadQrcode").show() : $("#downloadQrcode").hide()
}), $("#downloadQrcode").click(function() {
    base64ToBolbAndDownload(document.getElementById("encode-canvas").querySelector("canvas").toDataURL("image/png", 1), "qrcode.png")
}), $("#decode-file").on("change", function(t) {
    var e = $("#decode-canvas")[0],
        n = e.getContext("2d"),
        i = t.target.files[0],
        o = new FileReader;
    o.onload = function(t) {
        var i = new Image;
        i.onload = function() {
            e.width = i.width, e.height = i.height, n.drawImage(i, 0, 0)
        }, i.src = t.target.result
    }, i && o.readAsDataURL(i)
}), $("#decodeQrcodeBtn").on("click", function() {
    $("#decode-text");
    result = $("#decode-canvas").QRDecode(function(t) {
        throw $("#decoderes").val(""), msgError("生成二维码失败，请检查二维码是否变形或有额外水印"), t
    }), result && ($("#decode-text").show(), $("#decoderes").val(result))
}), $("#uploadQrcodeLogo").change(function(t) {
    document.getElementById("uploadFile").value = this.value;
    var e = $("#logo-canvas")[0],
        n = t.target.files[0],
        i = new FileReader;
    i.onload = function(t) {
        $(e).data("logo", t.target.result), renderLogo(e, t.target.result)
    }, n && i.readAsDataURL(n)
}), $("#uploadQrcodeLogod").change(function(t) {
    document.getElementById("uploadFileDecode").value = this.value;
    var e = $("#decode-canvas")[0],
        n = e.getContext("2d"),
        i = t.target.files[0],
        o = new FileReader;
    o.onload = function(t) {
        var i = new Image;
        i.onload = function() {
            e.width = i.width, e.height = i.height, n.drawImage(i, 0, 0)
        }, i.src = t.target.result
    }, i && o.readAsDataURL(i)
}), $("#bitTxt").keyup(function() {
    var t = $(this).val();
    if ("" != t) {
        setSize(t = parseFloat(t), t / 8, t / 8 / 1024, t / 8 / 1024 / 1024, t / 8 / 1024 / 1024 / 1024, t / 8 / 1024 / 1024 / 1024 / 1024)
    }
}), $("#bytesTxt").keyup(function() {
    var t = $(this).val();
    if ("" != t) {
        setSize(8 * (t = parseFloat(t)), t, t / 1024, t / 1024 / 1024, t / 1024 / 1024 / 1024, t / 1024 / 1024 / 1024 / 1024)
    }
}), $("#kbTxt").keyup(function() {
    var t = $(this).val();
    if ("" != t) {
        setSize(8 * (t = parseFloat(t)) * 1024, 1024 * t, t, t / 1024, t / 1024 / 1024, t / 1024 / 1024 / 1024)
    }
}), $("#mbTxt").keyup(function() {
    var t = $(this).val();
    if ("" != t) {
        setSize(8 * (t = parseFloat(t)) * 1024 * 1024, 1024 * t * 1024, 1024 * t, t, t / 1024, t / 1024 / 1024)
    }
}), $("#gbTxt").keyup(function() {
    var t = $(this).val();
    if ("" != t) {
        setSize(8 * (t = parseFloat(t)) * 1024 * 1024 * 1024, 1024 * t * 1024 * 1024, 1024 * t * 1024, 1024 * t, t, t / 1024)
    }
}), $("#tbTxt").keyup(function() {
    var t = $(this).val();
    if ("" != t) {
        setSize(8 * (t = parseFloat(t)) * 1024 * 1024 * 1024 * 1024, 1024 * t * 1024 * 1024 * 1024, 1024 * t * 1024 * 1024, 1024 * t * 1024, 1024 * t, t)
    }
}), $("#ubbtohtml").click(function() {
    ubbtohtml()
}), $("#htmltoubb").click(function() {
    htmltoubb()
}), $("#ToFull").click(function() {
    ToFull()
}), $("#ToHalf").click(function() {
    ToHalf()
}), $("#html_2_md").click(function() {
    html_2_md()
}), $("#md_2_html").click(function() {
    md_2_html(1)
}), $("#html2markdownDemoBtn").click(function() {
    editor.setValue("# MarkDown示例\n### Header 3\n> This is a blockquote.\n>\n > This is the second paragraph in the blockquote.\n>\n> ## This is an H2 in a blockquote")
}), $("#tuo2line").click(function() {
    humpToLine(editor.getValue())
}), $("#line2tuo").click(function() {
    lineToHump(editor.getValue())
}), $("#camelUnDemo").click(function() {
    editor.setValue("private String out_trade_no;\nprivate String auth_code;\nprivate double total_amount;")
}), $("#imangeHandler").on("click", ".btn-reset-file", function() {
    var t = $(this).parents(".file").attr("id"),
        e = $(".uploader-btn-browse");
    e.button("loading"), $(uploaderImg2Svg.getFiles()).each(function(n, i) {
        "file-" + i.id === t && imgHandlerQiniuUploader(e, i, "#" + t)
    })
}), window.imghandlerFilename = "", $("body").on("click", ".image-handler-start", function() {
    var t = $(this).parents(".image-handler-item").find(".image-handler-con img").eq(0),
        e = $(this).parents(".image-handler-item").find(".image-handler-con a").eq(0),
        n = $(this).parents(".image-handler-item"),
        i = t.attr("src");
    if (i) {
        -1 != i.indexOf("?") && (i = i.substring(0, i.indexOf("?")));
        i.substring(i.lastIndexOf(".") + 1);
        var o = window.imghandlerFilename.substring(0, window.imghandlerFilename.lastIndexOf(".")),
            r = i + "?imageView2/0";
        $(n.find(".imghandler-size-radio input[type=radio]")).each(function(t, e) {
            if ($(e).prop("checked")) {
                var n = $(e).attr("data-size").split(",")[0],
                    i = $(e).attr("data-size").split(",")[1];
                r += "/w/" + n + "/h/" + i
            }
        }), $(n.find(".imghandler-format-radio input[type=radio]")).each(function(n, i) {
            if ($(i).prop("checked")) {
                var a = $(i).attr("data-format");
                r += "/format/" + a, e.attr("href", r + "&attname=" + o + "." + a), e.text(r), t.attr("src", r)
            }
        }), n.find(".image-handler-con-div").show()
    } else msgError("请上传图片")
}), new ClipboardJS("#imageHandlerList .copy", {
    text: function(t) {
        var e = $(t).parent().find("a").eq(0).text();
        return !!e && (msgSuccess("复制成功"), e)
    }
});
var globalIcoSrc = "";
$("#createFavicon").click(function() {
    if (uploaderIcon.getFiles().length) {
        $("#uploadIconBtn").button("loading"), $("#createFavicon").button("loading");
        var t = uploaderIcon.getFiles()[uploaderIcon.getFiles().length - 1].getNative(),
            e = "#file-" + uploaderIcon.getFiles()[uploaderIcon.getFiles().length - 1].id;
        if ($(this).attr("data-id") === e) {
            var n = t.name.substring(0, t.name.lastIndexOf("."));
            return createIcon(globalIcoSrc, n), $("#uploadIconBtn").button("reset"), void $("#createFavicon").button("reset")
        }
        icomakerQiniuUploader(t, e)
    } else msgError("请上传图片")
}), $("#imangeHandler").on("click", ".btn-reset-file", function() {
    var t = $(this).parents(".file").attr("id");
    $("#uploadIconBtn").button("loading"), $("#createFavicon").button("loading"), $(uploaderIcon.getFiles()).each(function(e, n) {
        "file-" + n.id === t && icomakerQiniuUploader(n, "#" + t)
    })
}), new ClipboardJS("#img2base54Area button", {
    text: function(t) {
        var e = $(t).parent().find("textarea").eq(0).val();
        return !!e && (msgSuccess("复制成功"), e)
    }
}), $("#shorturlClearBtn").click(function() {
    document.getElementById("shorturlContent").value = "", document.getElementById("shorturlResult").value = "", document.getElementById("shorturlContent").select()
}), $("#shorturlEncode").click(function() {
    shorturlEncode(), $("#shorturlEncode").button("loading")
}), $("#shorturlDecode").click(function() {
    shorturlDecode(), $("#shorturlDecode").button("loading")
}), $("#shorturlChange").click(function() {
    shorturlChange()
}), new ClipboardJS("#shorturlCopy", {
    text: function(t) {
        var e = $("#shorturlResult").val();
        return !!e && (msgSuccess("复制成功"), e)
    }
}), jinzhiSs = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_@", $("#jingzhiChangeBtn").click(function() {
    jingzhiChange()
});
var alert_msg_count = 0;
new ClipboardJS(".copy-jinzhi", {
    text: function(t) {
        var e = $(t).parents("tr").find("input").eq(0).val();
        return !!e && (msgSuccess("复制成功"), e)
    }
}), $("#uplowercaseC").click(function() {
    uplowercase(!1)
}), $("#uplowercaseD").click(function() {
    uplowercase(!0)
}), $("#uploaderFile2Pdf").on("click", ".btn-reset-file", function() {
    var t = $(this).parents(".file").attr("id"),
        e = $(".uploader-btn-browse");
    e.button("loading"), $(uploaderFile2Pdf.getFiles()).each(function(n, i) {
        "file-" + i.id === t && qiniuFile2PdfUploader(e, i, "#" + t)
    })
}), $("#num2hzClearBtn").click(function() {
    document.getElementById("num2hzStr").value = "", document.getElementById("num2hzEstr").value = "", document.getElementById("num2hzEstr2").value = "", document.getElementById("num2hzStr").select()
}), $("#num2hzEncode").click(function() {
    num2hzChange(!0)
}), $("#num2hzDecode").click(function() {
    num2hzChange(!1)
}), new ClipboardJS("#num2hzCopyBtn", {
    text: function(t) {
        var e = $("#num2hzEstr").val();
        return !!e && (msgSuccess("复制成功"), e)
    }
});
var hzf = "零壹贰叁肆伍陆柒捌玖";
$("#native2ascii").click(function() {
    native2ascii()
}), $("#ascii2native").click(function() {
    ascii2native()
}), $("#toPyConvert").click(function() {
    toPyConvert()
}), $("#J2Fconvert0").click(function() {
    J2Fconvert(0)
}), $("#J2Fconvert1").click(function() {
    J2Fconvert(1)
}), $("#J2Fconvert2").click(function() {
    J2Fconvert(2)
});
var softRooturl = "",
    softJavatools = [
        ["java反编译器", [{
                name: "",
                url: "//" + window.location.host + "/softs/javafanbianyi.zip"
            }],
            ["/java/fanbianyi/QQ截图20160426144145.png"]
        ],
        ["cron表达式生成器", [{
                name: "",
                url: "//" + window.location.host + "/softs/CronExpressionGenerator.zip"
            }],
            ["/java/cronCreate/QQ截图20160426222855.png"]
        ]
    ],
    softDevtools = [
        ["微信WEB开发者工具", [{
                name: "Windows 64位版本",
                url: "https://mp.weixin.qq.com/debug/cgi-bin/webdebugger/download?from=mpwiki&os=x64"
            }, {
                name: "Windows 32位版本",
                url: "https://mp.weixin.qq.com/debug/cgi-bin/webdebugger/download?from=mpwiki&os=x86"
            }, {
                name: "Mac版本",
                url: "https://mp.weixin.qq.com/debug/cgi-bin/webdebugger/download?from=mpwiki&os=darwin"
            }],
            ["http://qn.bejson.com/wx1.png", "http://qn.bejson.com/QQ%E6%88%AA%E5%9B%BE20160830111217.png"]
        ],
        ["支付宝提供的RSA加密工具", [{
                name: "",
                url: "https://docs.open.alipay.com/291/105971/"
            }],
            [""]
        ]
    ],
    softNettoolsstr = [
        ["SecureCRT+SecureFX 7.0.0.326 整合版", [{
                name: "64位",
                url: "//" + window.location.host + "/softs/SecureCRTSecureFX_x64_7.0.0.326.rar"
            }, {
                name: "32位",
                url: "//" + window.location.host + "/softs/SecureCRTSecureFX_x86_7.0.0.326.rar"
            }],
            ["/connect/SecureCRT/gui.png", "/connect/SecureCRT/shell.png"]
        ],
        ["Socket、UDP等协议服务端客户端工具", [{
                name: "",
                url: "//" + window.location.host + "/softs/SocketTest-master.zip"
            }],
            ["/nettools/socket/QQ截图20160425113038.png"]
        ]
    ],
    softUitools = [
        ["取色器", [{
                name: "",
                url: "//" + window.location.host + "/softs/TakeColor.exe"
            }],
            ["/uitool/colorfix/QQ截图20160426164656.png"]
        ]
    ],
    softOthertools = [
        ["星号查看器", [{
                name: "",
                url: "//" + window.location.host + "/softs/星号密码查看器.zip"
            }],
            ["/other/xinghao/QQ图片20160425113817.png"]
        ],
        ["事件自动处理器", [{
                name: "",
                url: "//" + window.location.host + "/softs/事件自动处理器.zip"
            }],
            ["/other/eventhandler/QQ截图20160426224502.png"]
        ],
        ["TPC/UDP抓包", [{
                name: "",
                url: "https://docs.microsoft.com/zh-cn/sysinternals/downloads/tcpview"
            }],
            [""]
        ]
    ],
    softSysenv = [
        ["JDK", [{
                name: "JDK6",
                url: "http://www.oracle.com/technetwork/java/javase/downloads/java-archive-downloads-javase6-419409.html"
            }, {
                name: "JDK11(LTS)",
                url: "https://www.oracle.com/java/technologies/javase-downloads.html#JDK11"
            }, {
                name: "JDK14",
                url: "https://www.oracle.com/java/technologies/javase-downloads.html#JDK14"
            }],
            [""]
        ],
        ["Tomcat3-9全版本下载", [{
                name: "",
                url: "http://archive.apache.org/dist/tomcat/"
            }],
            [""]
        ],
        ["nginx+php+mysql 一键安装包", [{
                name: "查看",
                url: "http://www.lanmps.com/"
            }],
            [""]
        ]
    ];
$("#softJavatools1").append(softParse(softJavatools)), $("#softDevtools").append(softParse(softDevtools)), $("#softNettools1").append(softParse(softNettoolsstr)), $("#softUitools1").append(softParse(softUitools)), $("#softOthertools1").append(softParse(softOthertools)), $("#softSysenv1").append(softParse(softSysenv));
for (var blogs = [{
        title: "经典模块化前端 UI 框架",
        user: "layui",
        url: "https://www.layui.com/",
        desc: "采用自身模块规范编写的前端 UI 框架",
        tag: "前端,UI,框架"
    }, {
        title: "色魔科技",
        user: "色魔",
        url: "http://maniac.vip/",
        desc: "猥琐的白帽子，座右铭:人若无名，便可专心练贱",
        tag: "白帽子,黑客,网络安全"
    }, {
        title: "青石坞",
        user: "青石",
        url: "http://www.qs5.org/",
        desc: "纯屌丝，爱瞎折腾。生活不止三言两语..",
        tag: "php,js,易语言,瞎几巴折腾"
    }, {
        title: "一个PHP码农的自述",
        user: "花花",
        url: "https://blog.yinghualuo.cn",
        desc: "php开发经验记录、Linux服务器运维等，还有老司机资源，你懂的^_^",
        tag: "PHP,运维,电脑维修"
    }, {
        title: "",
        user: "",
        url: "",
        desc: "",
        tag: ""
    }, {
        title: "WebYang.NET",
        user: "阳明",
        url: "http://webyang.net/",
        desc: "WebYang.NET是一个专注于互联网技术，拥有大量php、web前端、linux、iOS、缓存等系列文章的原创IT技术博客。",
        tag: "php,linux,iOS,写作"
    }, {
        title: "赵华伟自媒体博客",
        user: "赵华伟",
        url: "http://www.chinacion.cn",
        desc: "互联网创业者，全栈开发工程师，互联网项目合作、投融资渠道、技术变现。",
        tag: "百度工程师,互联网创业者,项目合作,技术变现"
    }, {
        title: "罗分明网络博客",
        user: "罗分明",
        url: "http://www.luofenming.com/",
        desc: "本站记录个人，工作和学习笔记、及问题解决方案。",
        tag: "C#,.Net Core,Web前端"
    }, {
        title: "Choba·乔巴博客",
        user: "乔巴",
        url: "https://szdblog.com",
        desc: "步伐虽小，密而不止",
        tag: "PHP,Linux,MySQL,摄影"
    }], blogHtml = "", i = 0; i < blogs.length; i++) {
    var blog = blogs[i];
    if ("" != blog.title) {
        var tag = blog.tag,
            tagh = "";
        if (-1 != tag.indexOf(","))
            for (var tags = tag.split(","), j = 0; j < tags.length; j++) tagh += '<span class="btn btn-sm l-big-margin">' + tags[j] + "</span>";
        else tagh = '<span class="color5">' + blog.tag + "</span>";
        blogHtml += '<a href="' + blog.url + '"  target="_blank" class="list-group-item"><div class="tt b-small-margin text-primary">' + blog.title + tagh + '</div><span class="desc">' + blog.desc + "</span></a>"
    }
}
if (document.getElementById("blogsDiv") && $("#blogsDiv").html(blogHtml), $("select.chzn-select").chosen({
        no_results_text: "没有找到",
        search_contains: !0,
        disable_search_threshold: 10
    }), $("select.chzn-select").on("change", function(t, e) {
        $(".swatches").hide(), $("#" + e.selected).show()
    }), $("#safecolor .color").hover(function() {
        $(this).find(".safecolor-copy").show()
    }, function() {
        $(this).find(".safecolor-copy").hide()
    }), new ClipboardJS(".safecolor-copy-html", {
        text: function(t) {
            var e = $(t).parents(".color").find("h3 .html").eq(0).text();
            return !!(e = e.trim().slice(4)) && (msgSuccess("复制成功"), e)
        }
    }), new ClipboardJS(".safecolor-copy-rgb", {
        text: function(t) {
            var e = $(t).parents(".color").find("h3 .rgb").eq(0).text().trim().slice(3);
            return !!e && (msgSuccess("复制成功"), e)
        }
    }), $("select.ace-select").chosen({
        no_results_text: "没有找到",
        search_contains: !0,
        disable_search_threshold: 10
    }), $("select.ace-select").on("change", function(t, e) {
        aceEditor.session.setMode(e.selected)
    }), $("#aceEditorExpand").click(function() {
        $("body").addClass("overflow-hidden"), $("#aceEditor").addClass("aceFullEditor"), $("#aceEditorCollapse").show(), $("#aceEditorCopy").show(), aceEditor.resize()
    }), $("#aceEditorCollapse").click(function() {
        $("body").removeClass("overflow-hidden"), $("#aceEditor").removeClass("aceFullEditor"), $("#aceEditorCopy").hide(), $("#aceEditorCollapse").hide(), aceEditor.resize()
    }), new ClipboardJS(".ace-editor-copy", {
        text: function(t) {
            var e = aceEditor.getValue();
            return !!e && (msgSuccess("复制成功"), e)
        }
    }), new ClipboardJS(".font-copy-class a", {
        text: function(t) {
            var e = $(t).text();
            return !!e && (msgSuccess("复制成功"), e)
        }
    }), new ClipboardJS(".font-copy-unicode a", {
        text: function(t) {
            var e = $(t).text();
            return !!e && (msgSuccess("复制成功"), e)
        }
    }), $("#fs2 tr").hover(function() {
        $(this).find("i").eq(0).css("transform", "scale(2)"), $(this).find("i").eq(0).css("-webkit-transform", "scale(2)"), $(this).find("i").eq(0).css("-o-transform", "scale(2)"), $(this).find("i").eq(0).css("-ms-transform", "scale(2)")
    }, function() {
        $(this).find("i").eq(0).css("transform", "scale(1)"), $(this).find("i").eq(0).css("-webkit-transform", "scale(1)"), $(this).find("i").eq(0).css("-o-transform", "scale(1)"), $(this).find("i").eq(0).css("-ms-transform", "scale(1)")
    }), new ClipboardJS(".color-copy-name", {
        text: function(t) {
            var e = $(t).text();
            return !!e && (msgSuccess("复制成功"), e)
        }
    }), new ClipboardJS(".color-copy-hex", {
        text: function(t) {
            var e = $(t).text();
            return !!e && (msgSuccess("复制成功"), e)
        }
    }), $("#getColorBox td").click(function() {
        var t = $(this).attr("data-color").replace(";", "");
        $("#getColorHex").val(t), $("#getColorAddon").css("background-color", t)
    }), new ClipboardJS("#getColorCopy", {
        text: function(t) {
            var e = $("#getColorHex").val();
            return !!e && (msgSuccess("复制成功"), e)
        }
    }), document.getElementById("libcdnBootlist")) {
    for (var libcdnUrls = [{
            title: "BootCDN",
            url: "http://www.bootcdn.cn/",
            desc: "附带搜索，编辑好格式可以直接复制"
        }, {
            title: "百度静态资源公共库",
            url: "http://cdn.code.baidu.com/",
            desc: "百度的，支持搜索，不支持直接复制"
        }, {
            title: "新浪js库",
            url: "http://lib.sinaapp.com/",
            desc: "不算很方便"
        }, {
            title: "七牛云存储开放静态文件",
            url: "http://www.staticfile.org/",
            desc: "国内知名云存储"
        }, {
            title: "Google资源库",
            url: "https://developers.google.com/speed/libraries/",
            desc: "国外访问很快，国内被墙了，慎用"
        }, {
            title: "微软资源库",
            url: "http://www.asp.net/ajax/cdn",
            desc: "支持的不多"
        }, {
            title: "待添加",
            url: "javascript:;",
            desc: ""
        }, {
            title: "",
            url: "",
            desc: ""
        }], libcdnHtml = "", i = 0; i < libcdnUrls.length; i++) {
        var u = libcdnUrls[i];
        "" != u.title && (libcdnHtml += " <tr><td><a href='" + u.url + '\' target="_blank">' + u.title + '</a></td>><td><span class="desc">' + u.desc + "</span></td>></tr>")
    }
    $("#libcdnBootlist").html(libcdnHtml)
}
$("#pojoType").change(function() {
    2 === parseInt($(this).val()) ? $("#pojoLowcasedv").show() : $("#pojoLowcasedv").hide()
}), $("#sql2pojoTest").click(function() {
    editor.setValue("CREATE TABLE `poets` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '作者姓名',\n  `created_at` datetime DEFAULT NULL COMMENT '创建日期',\n  `updated_at` datetime DEFAULT NULL COMMENT '修改日期',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=2529 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;\n")
}), $("#sql2pojoSubmit").click(function() {
    sql2pojo()
}), $("#sql2pojoChangeBtn").click(function() {
    editor.getValue() ? sql2pojoOchange() : msgError("请输入sql语句")
}), $("#sql2pojoDemoBtn").click(function() {
    editor.setValue("create table QRTZ_TRIGGERS\n(\n\t  SCHED_NAME     VARCHAR2(120) not null,\n\t  TRIGGER_NAME   VARCHAR2(200) not null,\n\t  TRIGGER_GROUP  VARCHAR2(200) not null,\n\t  JOB_NAME       VARCHAR2(200) not null,\n\t  JOB_GROUP      VARCHAR2(200) not null,\n\t  DESCRIPTION    VARCHAR2(250),\n\t  NEXT_FIRE_TIME NUMBER(13),\n\t  PREV_FIRE_TIME NUMBER(13),\n\t  PRIORITY       NUMBER(13),\n\t  TRIGGER_STATE  VARCHAR2(16) not null,\n\t  TRIGGER_TYPE   VARCHAR2(8) not null,\n\t  START_TIME     NUMBER(13) not null,\n\t  END_TIME       NUMBER(13),\n\t  CALENDAR_NAME  VARCHAR2(200),\n\t  MISFIRE_INSTR  NUMBER(2),\n\t  JOB_DATA       BLOB\n)")
}), $("#sqlviewCreate").click(function() {
    editor.getValue() ? ($("#sqlviewCreate").button("loading"), sqlviewConvert()) : msgError("请输入sql语句")
}), $("#sqlviewDemo").click(function() {
    editor.setValue("INSERT INTO `test_table` (`series`, `tenant_num_id`, `data_sign`, `mg_unit_num_id`, `own_num_id`, `cort_num_id`, `cort_id`, `cort_name`, `en_cort_name`, `sim_cort_name`, `en_sim_cort_name`, `cuy_num_id`, `type_num_id`, `orn_num_id`, `orn_sub_num_id`, `prv_num_id`, `city_num_id`, `city_area_num_id`, `town_num_id`, `registered_name`, `en_registered_name`, `tax_account`, `bank_account`, `status_num_id`, `headquarters_adr`, `en_headquarters_adr`, `legal_behf`, `en_legal_behf`, `behf_postcode`, `behf_telephone`, `behf_fax`, `behf_adr`, `en_behf_adr`, `behf_mail`, `behf_city`, `cont_empe1`, `en_cont_empe1`, `cont_empe1_postcode`, `cont_empe1_telephone`, `cont_empe1_fax`, `cont_empe1_adr`, `en_cont_empe1_adr`, `cont_empe1_mail`, `cont_empe1_city`, `cont_empe2`, `en_cont_empe2`, `cont_empe2_postcode`, `cont_empe2_telephone`, `cont_empe2_fax`, `cont_empe2_adr`, `en_cont_empe2_adr`, `cont_empe2_mail`, `cont_empe2_city`, `en_cont_im1`, `en_cont_im2`, `org_code`, `bank_name`, `chain_num_id`, `chain_sub_num_id`, `identity_id`, `invoice_adr`, `create_dtme`, `last_updtme`, `create_user_id`, `last_update_user_id`, `cancelsign`, `insertdata`, `updatedata`, `senddata`, `alreadysend`, `bank_prv_num_id`, `bank_city_num_id`, `billing_bank`, `billing_bank_account`, `super_cort_num_id`, `trading_certificates`, `taxpayer_type`) VALUES ('719013100601', '0', '0', NULL, '1901310400', '0', ' ', 'BeJSON火星店', 'Bejson', 'BeJSON', 'BJ', '0', '1', '1', '60', '640000', '640100', '640105', '640105002', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', '1', '18518185678', '18518185678', '尼古拉斯凯奇的山景房', ' ', '1', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', '0', '0', ' ', ' ', '2019-01-31 10:46:09', '2019-01-31 10:46:09', '1', '1', 'N', 'Y', 'N', 'N', '0', '0', '0', NULL, NULL, '0', '', NULL);")
}), $("#properties2yamlDemo").click(function() {
    editor.setValue("dubbo.registry.address=zookeeper://10.0.65.3:2181\ndubbo.admin.root.password=root\ndubbo.admin.guest.password=guest")
}), $("#properties2yamlConvert").click(function() {
    editor.getValue() ? ($("#properties2yamlConvert").button("loading"), properties2yamlConvert()) : msgError("请输入properties代码")
}), new ClipboardJS("#copyIp", {
    text: function(t) {
        var e = $("#getIpStr").val();
        return !!e && (msgSuccess("复制成功"), e)
    }
}), new ClipboardJS("#copyIpv6", {
    text: function(t) {
        var e = $("#getIpIpv6").val();
        return !!e && (msgSuccess("复制成功"), e)
    }
}), $("#checkIp").click(function() {
    $("#queryIp").val() ? ($(this).button("loading"), $("#queryipBox").addClass("loading"), getIpinfo($("#queryIp").val())) : msgError("请输入IP")
}), new ClipboardJS(".copy-queryip", {
    text: function(t) {
        var e = $(t).parents("tr").find(".copy-con").eq(0).text();
        return !!e && (msgSuccess("复制成功"), e)
    }
}), $("#ip2addrStart").click(function() {
    "" !== $("#ip2addrIp").val() ? ($("#ip2addrStart").button("loading"), doPost(bejsonHost + "Bejson/Api/LocationByIP/getLocByIP", {
        ip: $("#ip2addrIp").val()
    }, function(t) {
        var e = t;
        if (200 === t.code || "200" === t.code)
            if (1 === e.data.status || "1" === e.data.status) {
                for (var n = e.data.data, i = n.country + " " + n.province + " " + n.city + " " + n.district + " 大概位置:" + n.pos, o = n.poi_list, r = "", a = 0; a < o.length; a++) {
                    r += " <tr>";
                    var s = o[a];
                    r += "<td>【" + s.name + '】</td><td class="address-con">' + s.address + '</td><td class="ip2addr-btn"><button class="btn" type="button">复制地址</button></td>', r += "</tr>"
                }
                $("#addr").text(i), $("#addrs").html(r)
            } else msgError(e.msg);
        else alertError({
            con: t.msg
        });
        $("#ip2addrStart").button("reset")
    }, function() {
        alertError({
            con: "获取失败，请稍候重试"
        }), $("#ip2addrStart").button("reset")
    })) : msgError("请填写IP")
}), new ClipboardJS(".ip2addr-btn button", {
    text: function(t) {
        var e = $(t).parents("tr").find(".address-con").eq(0).text();
        return !!e && (msgSuccess("复制成功"), e)
    }
}), $("#useragentCua").val(navigator.userAgent);
var userAgentPcj = [
        ["safari 5.1 – MAC", "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50"],
        ["safari 5.1 – Windows", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50"],
        ["IE 9.0", "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0;"],
        ["IE 8.0", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)"],
        ["IE 7.0", "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"],
        ["IE 6.0", " Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)"],
        ["Firefox 4.0.1 – MAC", " Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv,2.0.1) Gecko/20100101 Firefox/4.0.1"],
        ["Firefox 4.0.1 – Windows", "Mozilla/5.0 (Windows NT 6.1; rv,2.0.1) Gecko/20100101 Firefox/4.0.1"],
        ["Opera 11.11 – MAC", "Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.8.131 Version/11.11"],
        ["Opera 11.11 – Windows", "Opera/9.80 (Windows NT 6.1; U; en) Presto/2.8.131 Version/11.11"],
        ["Chrome 17.0 – MAC", " Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_0) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11"],
        ["傲游（Maxthon）", " Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Maxthon 2.0)"],
        ["腾讯TT", " Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; TencentTraveler 4.0)"],
        ["世界之窗（The World） 2.x", " Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)"],
        ["世界之窗（The World） 3.x", " Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; The World)"],
        ["搜狗浏览器 1.x", " Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; SE 2.X MetaSr 1.0; SE 2.X MetaSr 1.0; .NET CLR 2.0.50727; SE 2.X MetaSr 1.0)"],
        ["360浏览器", " Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; 360SE)"],
        ["Avant", " Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Avant Browser)"],
        ["Green Browser", " Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)"]
    ],
    userAgentMbj = [
        ["safari iOS 4.33 – iPhone", "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5"],
        ["safari iOS 4.33 – iPod Touch", "Mozilla/5.0 (iPod; U; CPU iPhone OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5"],
        ["safari iOS 4.33 – iPad", "Mozilla/5.0 (iPad; U; CPU OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5"],
        ["Android N1", " Mozilla/5.0 (Linux; U; Android 2.3.7; en-us; Nexus One Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"],
        ["Android QQ浏览器 For android", " MQQBrowser/26 Mozilla/5.0 (Linux; U; Android 2.3.7; zh-cn; MB200 Build/GRJ22; CyanogenMod-7) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"],
        ["Android Opera Mobile", " Opera/9.80 (Android 2.3.4; Linux; Opera Mobi/build-1107180945; U; en-GB) Presto/2.8.149 Version/11.10"],
        ["Android Pad Moto Xoom", " Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13"],
        ["BlackBerry", " Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.337 Mobile Safari/534.1+"],
        ["WebOS HP Touchpad", " Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.0; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/233.70 Safari/534.6 TouchPad/1.0"],
        ["Nokia N97", " Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.019; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124"],
        ["Windows Phone Mango", " Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; HTC; Titan)"],
        ["UC无", " UCWEB7.0.2.37/28/999"],
        ["UC标准", " NOKIA5700/ UCWEB7.0.2.37/28/999"],
        ["UCOpenwave", " Openwave/ UCWEB7.0.2.37/28/999"],
        ["UC Opera", " Mozilla/4.0 (compatible; MSIE 6.0; ) Opera/UCWEB7.0.2.37/28/999"]
    ],
    useragentWxInAndroid = [
        ["小米在WIFI", "Mozilla/5.0 (Linux; Android 7.1.1; MI 6 Build/NMF26X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/043807 Mobile Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/WIFI Language/zh_CN"],
        ["锤子OD103型号 4G", "Mozilla/5.0 (Linux; Android 7.1.1; OD103 Build/NMF26F; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.49 Mobile MQQBrowser/6.2 TBS/043632 Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN"],
        ["锤子SM919型号 WIFI", "Mozilla/5.0 (Linux; Android 6.0.1; SM919 Build/MXB48T; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.49 Mobile MQQBrowser/6.2 TBS/043632 Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/WIFI Language/zh_CN"],
        ["VIVO X6S WIFI", "Mozilla/5.0 (Linux; Android 5.1.1; vivo X6S A Build/LMY47V; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.49 Mobile MQQBrowser/6.2 TBS/043632 Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/WIFI Language/zh_CN"],
        ["HUAWEI TAG-AL00 4G", "Mozilla/5.0 (Linux; Android 5.1; HUAWEI TAG-AL00 Build/HUAWEITAG-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.49 Mobile MQQBrowser/6.2 TBS/043622 Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN"],
        ["小程序", "Mozilla/5.0 (Linux; Android 7.1.1; MI 6 Build/NMF26X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/043807 Mobile Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN miniProgram"]
    ],
    useragentWxInIos = [
        ["iphone手机OS 9_3_2版本 4G", "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13F69 MicroMessenger/6.6.1 NetType/4G Language/zh_CN"],
        ["iphone手机OS 11_2_2版本 4G", "Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_2 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Mobile/15C202 MicroMessenger/6.6.1 NetType/4G Language/zh_CN"],
        ["iphone手机OS OS 11_1_1版本 WIFI", "Mozilla/5.0 (iPhone; CPU iPhone OS 11_1_1 like Mac OS X) AppleWebKit/604.3.5 (KHTML, like Gecko) Mobile/15B150 MicroMessenger/6.6.1 NetType/WIFI Language/zh_CN"],
        ["iphoneX WIFI", "Mozilla/5.0 (iphone x Build/MXB48T; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.49 Mobile MQQBrowser/6.2 TBS/043632 Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/WIFI Language/zh_CN"]
    ];
document.getElementById("useragentCua") && (userAgentParseHtml("pcd", userAgentPcj), userAgentParseHtml("mbd", userAgentMbj), userAgentParseHtml("wxInAndroid", useragentWxInAndroid), userAgentParseHtml("wxInIos", useragentWxInIos), new ClipboardJS(".copy-agent", {
    text: function(t) {
        var e = $(t).parents("tr").find(".copy-agent-con").eq(0).text();
        return !!e && (msgSuccess("复制成功"), e)
    }
}), new ClipboardJS(".copy-cua", {
    text: function(t) {
        var e = $("#useragentCua").val();
        return !!e && (msgSuccess("复制成功"), e)
    }
})), $("#ip2intDemo").click(function() {
    $("#ip2intStr").val("192.168.1.1")
}), $("#ip2intIp2int").click(function() {
    ip2int()
}), $("#ip2intInt2ip").click(function() {
    int2ip()
}), $("#ip2intClear").click(function() {
    document.getElementById("ip2intStr").value = "", document.getElementById("ip2intRstr").value = ""
}), new ClipboardJS("#in2intCopy", {
    text: function(t) {
        var e = $("#ip2intRstr").val();
        return !!e && (msgSuccess("复制成功"), e)
    }
}), $("#jshtmlFormatTab a").click(function() {
    var t = $(this).attr("data-tab");
    $("#tabsize").val(t), $("#sels").text(t + "个空格缩进");
    var e = this;
    setTimeout(function() {
        $(e).parent().removeClass("active")
    }, 100)
});
var jshtmlFormatIschange = !1;
$("#jshtmlFormatBeautify").on("click", function() {
    doJsBeautify()
}), $("#hshtmlFormat").on("click", function() {
    jshtmlFormatPackJs(0)
}), $("#jshtmlCopty").on("click", function() {
    jshtmlFormatPackJs(1)
}), $("#hshtmlHjs").on("click", function() {
    jshtmlFormatChange()
}), $("#cssFullFormat").on("click", function() {
    formatCss("packAdv")
}), $("#cssHshtmlFormat").on("click", function() {
    formatCss("pack")
}), $("#cssBeautify").on("click", function() {
    doJsCssBeautify()
});
var lCSSCoder = {
    format: function(t) {
        return t = t.replace(/\s*([\{\}\:\;\,])\s*/g, "$1"), t = t.replace(/;\s*;/g, ";"), t = t.replace(/\,[\s\.\#\d]*{/g, "{"), t = t.replace(/([^\s])\{([^\s])/g, "$1 {\n\t$2"), t = t.replace(/([^\s])\}([^\n]*)/g, "$1\n}\n$2"), t = t.replace(/([^\s]);([^\s\}])/g, "$1;\n\t$2")
    },
    packAdv: function(t) {
        return t = t.replace(/\/\*(.|\n)*?\*\//g, ""), t = t.replace(/\s*([\{\}\:\;\,])\s*/g, "$1"), t = t.replace(/\,[\s\.\#\d]*\{/g, "{"), t = t.replace(/;\s*;/g, ";"), null == (t = t.match(/^\s*(\S+(\s+\S+)*)\s*$/)) ? "" : t[1]
    },
    pack: function(t) {
        return t = t.replace(/\/\*(.|\n)*?\*\//g, ""), t = t.replace(/\s*([\{\}\:\;\,])\s*/g, "$1"), t = t.replace(/\,[\s\.\#\d]*\{/g, "{"), t = t.replace(/;\s*;/g, ";"), t = t.replace(/;\s*}/g, "}"), t = t.replace(/([^\s])\{([^\s])/g, "$1{$2"), t = t.replace(/([^\s])\}([^\n]s*)/g, "$1}\n$2")
    }
};
$("#xmlsortSort").click(function() {
    if (editor.getValue()) {
        var t = $(this);
        t.button("loading"), doPost(bejsonHost + "Bejson/Api/Xml/xmlsort", {
            xml: editor.getValue()
        }, function(e) {
            200 === e.code || "200" === e.code ? editor.setValue(e.data.replace(/↵/g, "\n")) : alertError({
                con: e.msg
            }), t.button("reset")
        }, function() {
            msgError("排序失败，请稍候重试"), t.button("reset")
        })
    } else msgError("请贴入xml代码")
}), $("#xmlsortFormat").click(function() {
    editor.setValue($.format(editor.getValue(), {
        method: "xml"
    }))
}), $("#xmlsortCompress").on("click", function() {
    editor.setValue($.format(editor.getValue(), {
        method: "xmlmin"
    }))
}), $("#xmlsortDemo").click(function() {
    editor.setValue('<#xml version="1.0" encoding="UTF-8"?><PARAM><DBID>35</DBID><SEQUENCE>atgtca</SEQUENCE><MAXNS>10</MAXNS><MINIDENTITIES>90</MINIDENTITIES><MAXEVALUE>10</MAXEVALUE><USERNAME>admin</USERNAME><PASSWORD>111111</PASSWORD><TYPE>P</TYPE><RETURN_TYPE>2</RETURN_TYPE></PARAM>'.replace("#xml", "?xml"))
}), $("#formatSqlFormat").click(function() {
    editor.getValue() ? editor.setValue(sqlFormatter.format(editor.getValue(), {
        language: $("#formatSqlType").val()
    })) : msgError("请贴入sql代码")
}), $("#formatSqlCompress").on("click", function() {
    editor.setValue(editor.getValue().split("\n").join(" ").replace(/\s+/g, " "))
}), $("#formatSqlDemo").click(function() {
    editor.setValue("SELECT d.deptno,d.dname,d.loc,COUNT(e.empno) mycount,NVL(AVG(e.sal),0) myavg FROM dept d,emp e WHERE d.deptno=e.deptno(+) GROUP BY d.deptno,d.dname,d.loc HAVING AVG(sal)>2000")
}), $("#sql2charpDemo").click(function() {
    editor.setValue("CREATE TABLE `poets` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '作者姓名',\n  `created_at` datetime DEFAULT NULL COMMENT '创建日期',\n  `updated_at` datetime DEFAULT NULL COMMENT '修改日期',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=2529 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;\n")
}), $("#sql2charpCreate").click(function() {
    editor.getValue() ? ($(this).button("loading"), doSql2csharppojo()) : msgError("请贴入sql代码")
});