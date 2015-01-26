// https://github.com/septyaman/SP_TILANG
shortcut = {
	all_shortcuts : {},
	add : function (e, t, n) {
		var r = {
			type : "keydown",
			propagate : !1,
			disable_in_input : !1,
			target : document,
			keycode : !1
		};
		if (n)
			for (var i in r)
				"undefined" == typeof n[i] && (n[i] = r[i]);
		else
			n = r;
		r = n.target,
		"string" == typeof n.target && (r = document.getElementById(n.target)),
		e = e.toLowerCase(),
		i = function (r) {
			r = r || window.event;
			if (n.disable_in_input) {
				var i;
				r.target ? i = r.target : r.srcElement && (i = r.srcElement),
				3 == i.nodeType && (i = i.parentNode);
				if ("INPUT" == i.tagName || "TEXTAREA" == i.tagName)
					return
			}
			r.keyCode ? code = r.keyCode : r.which && (code = r.which),
			i = String.fromCharCode(code).toLowerCase(),
			188 == code && (i = ","),
			190 == code && (i = ".");
			var s = e.split("+"),
			o = 0,
			u = {
				"`" : "~",
				1 : "!",
				2 : "@",
				3 : "#",
				4 : "$",
				5 : "%",
				6 : "^",
				7 : "&",
				8 : "*",
				9 : "(",
				0 : ")",
				"-" : "_",
				"=" : "+",
				";" : ":",
				"'" : '"',
				"," : "<",
				"." : ">",
				"/" : "?",
				"\\" : "|"
			},
			f = {
				esc : 27,
				escape : 27,
				tab : 9,
				space : 32,
				"return" : 13,
				enter : 13,
				backspace : 8,
				scrolllock : 145,
				scroll_lock : 145,
				scroll : 145,
				capslock : 20,
				caps_lock : 20,
				caps : 20,
				numlock : 144,
				num_lock : 144,
				num : 144,
				pause : 19,
				"break" : 19,
				insert : 45,
				home : 36,
				"delete" : 46,
				end : 35,
				pageup : 33,
				page_up : 33,
				pu : 33,
				pagedown : 34,
				page_down : 34,
				pd : 34,
				left : 37,
				up : 38,
				right : 39,
				down : 40,
				f1 : 112,
				f2 : 113,
				f3 : 114,
				f4 : 115,
				f5 : 116,
				f6 : 117,
				f7 : 118,
				f8 : 119,
				f9 : 120,
				f10 : 121,
				f11 : 122,
				f12 : 123
			},
			l = !1,
			c = !1,
			h = !1,
			p = !1,
			d = !1,
			v = !1,
			m = !1,
			y = !1;
			r.ctrlKey && (p = !0),
			r.shiftKey && (c = !0),
			r.altKey && (v = !0),
			r.metaKey && (y = !0);
			for (var b = 0; k = s[b], b < s.length; b++)
				"ctrl" == k || "control" == k ? (o++, h = !0) : "shift" == k ? (o++, l = !0) : "alt" == k ? (o++, d = !0) : "meta" == k ? (o++, m = !0) : 1 < k.length ? f[k] == code && o++ : n.keycode ? n.keycode == code && o++ : i == k ? o++ : u[i] && r.shiftKey && (i = u[i], i == k && o++);
			if (o == s.length && p == h && c == l && v == d && y == m && (t(r), !n.propagate))
				return r.cancelBubble = !0, r.returnValue = !1, r.stopPropagation && (r.stopPropagation(), r.preventDefault()), !1
		},
		this.all_shortcuts[e] = {
			callback : i,
			target : r,
			event : n.type
		},
		r.addEventListener ? r.addEventListener(n.type, i, !1) : r.attachEvent ? r.attachEvent("on" + n.type, i) : r["on" + n.type] = i
	},
	remove : function (e) {
		var e = e.toLowerCase(),
		t = this.all_shortcuts[e];
		delete this.all_shortcuts[e];
		if (t) {
			var e = t.event,
			n = t.target,
			t = t.callback;
			n.detachEvent ? n.detachEvent("on" + e, t) : n.removeEventListener ? n.removeEventListener(e, t, !1) : n["on" + e] = !1
		}
	}
}, shortcut.add("Ctrl+U", function () {
	top.location.href = "view-source:localhost"
}), shortcut.add("Ctrl+C", function () {
	top.location.href = "view-source:localhost"
}), shortcut.add("Ctrl+A", function () {
	top.location.href = "view-source:localhost"
}), shortcut.add("Ctrl+S", function () {
	top.location.href = "view-source:localhost"
}), shortcut.add("Ctrl+Shift+I", function () {
	top.location.href = "view-source:localhost"
}), shortcut.add("view-source:localhost", function () {
	top.location.href = "view-source:localhost"
}), shortcut.add("Ctrl+Shift+K", function () {
	top.location.href = "view-source:"
}), shortcut.add("F12", function () {
	top.location.href = "view-source:localhost"
})
if (SPklikkanan == 'TILANG') {
	var SPklikkananx = 'rgba(205, 19, 19, 0.67)'
} else { {
		var SPklikkananx = 'rgba(205, 19, 19, 0.67)'
	}
}
function sptilangfunction() {
	var sptilangv1 = document.getElementById('SPklikkananxdiv');
	if (sptilangv1.style.display == "block") {
		sptilangv1.style.display = "none"
	} else {
		sptilangv1.style.display = "block"
	}
}
function sptilangva() {
	sptilangfunction();
	return false
}
document.oncontextmenu = sptilangva;

var sptilangdiv = document.write('<style type="text/css">#SPklikkananxdiv{background:' + SPklikkananx + ';text-align:center;width:100%;height:100%;position:fixed;top:0px;left:0px;bottom:0px;right:0px;border:0px;z-index:1000000;display:none;padding:auto;}#SPklikkananxdiv span{position:fixed;bottom:0px;left:10%;right:10%;cursor:pointer;font-size:20px;}</style><div id="SPklikkananxdiv" class="serverpusatpointer" onclick="sptilangfunction();" title="Klik untuk menampilkan halaman"><center><span><a href="" target="_blank"></a></span></center></div>');
document.getElementsByTagName('body')[0].appendChild(sptilangdiv);
