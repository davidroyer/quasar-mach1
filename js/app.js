webpackJsonp([5,6],{111:function(s,t,e){"use strict";function n(s){return function(){return e(123)("./"+s+".vue")}}var r=e(1),j=e.n(r),a=e(120),o=e.n(a);j.a.use(o.a),t.a=new o.a({routes:[{path:"/",component:n("Index")},{path:"/test",component:n("Test")},{path:"/test2",component:n("LayoutTest")},{path:"*",component:n("Error404")}]})},112:function(s,t){},113:function(s,t,e){var n,r;e(115),n=e(114);var j=e(119);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=j.render,r.staticRenderFns=j.staticRenderFns,s.exports=n},114:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},115:function(s,t){},117:function(s,t,e){function n(s){return e(r(s))}function r(s){var t=j[s];if(!(t+1))throw new Error("Cannot find module '"+s+"'.");return t}var j={"./af":2,"./af.js":2,"./ar":8,"./ar-dz":3,"./ar-dz.js":3,"./ar-ly":4,"./ar-ly.js":4,"./ar-ma":5,"./ar-ma.js":5,"./ar-sa":6,"./ar-sa.js":6,"./ar-tn":7,"./ar-tn.js":7,"./ar.js":8,"./az":9,"./az.js":9,"./be":10,"./be.js":10,"./bg":11,"./bg.js":11,"./bn":12,"./bn.js":12,"./bo":13,"./bo.js":13,"./br":14,"./br.js":14,"./bs":15,"./bs.js":15,"./ca":16,"./ca.js":16,"./cs":17,"./cs.js":17,"./cv":18,"./cv.js":18,"./cy":19,"./cy.js":19,"./da":20,"./da.js":20,"./de":22,"./de-at":21,"./de-at.js":21,"./de.js":22,"./dv":23,"./dv.js":23,"./el":24,"./el.js":24,"./en-au":25,"./en-au.js":25,"./en-ca":26,"./en-ca.js":26,"./en-gb":27,"./en-gb.js":27,"./en-ie":28,"./en-ie.js":28,"./en-nz":29,"./en-nz.js":29,"./eo":30,"./eo.js":30,"./es":32,"./es-do":31,"./es-do.js":31,"./es.js":32,"./et":33,"./et.js":33,"./eu":34,"./eu.js":34,"./fa":35,"./fa.js":35,"./fi":36,"./fi.js":36,"./fo":37,"./fo.js":37,"./fr":40,"./fr-ca":38,"./fr-ca.js":38,"./fr-ch":39,"./fr-ch.js":39,"./fr.js":40,"./fy":41,"./fy.js":41,"./gd":42,"./gd.js":42,"./gl":43,"./gl.js":43,"./he":44,"./he.js":44,"./hi":45,"./hi.js":45,"./hr":46,"./hr.js":46,"./hu":47,"./hu.js":47,"./hy-am":48,"./hy-am.js":48,"./id":49,"./id.js":49,"./is":50,"./is.js":50,"./it":51,"./it.js":51,"./ja":52,"./ja.js":52,"./jv":53,"./jv.js":53,"./ka":54,"./ka.js":54,"./kk":55,"./kk.js":55,"./km":56,"./km.js":56,"./ko":57,"./ko.js":57,"./ky":58,"./ky.js":58,"./lb":59,"./lb.js":59,"./lo":60,"./lo.js":60,"./lt":61,"./lt.js":61,"./lv":62,"./lv.js":62,"./me":63,"./me.js":63,"./mi":64,"./mi.js":64,"./mk":65,"./mk.js":65,"./ml":66,"./ml.js":66,"./mr":67,"./mr.js":67,"./ms":69,"./ms-my":68,"./ms-my.js":68,"./ms.js":69,"./my":70,"./my.js":70,"./nb":71,"./nb.js":71,"./ne":72,"./ne.js":72,"./nl":74,"./nl-be":73,"./nl-be.js":73,"./nl.js":74,"./nn":75,"./nn.js":75,"./pa-in":76,"./pa-in.js":76,"./pl":77,"./pl.js":77,"./pt":79,"./pt-br":78,"./pt-br.js":78,"./pt.js":79,"./ro":80,"./ro.js":80,"./ru":81,"./ru.js":81,"./se":82,"./se.js":82,"./si":83,"./si.js":83,"./sk":84,"./sk.js":84,"./sl":85,"./sl.js":85,"./sq":86,"./sq.js":86,"./sr":88,"./sr-cyrl":87,"./sr-cyrl.js":87,"./sr.js":88,"./ss":89,"./ss.js":89,"./sv":90,"./sv.js":90,"./sw":91,"./sw.js":91,"./ta":92,"./ta.js":92,"./te":93,"./te.js":93,"./tet":94,"./tet.js":94,"./th":95,"./th.js":95,"./tl-ph":96,"./tl-ph.js":96,"./tlh":97,"./tlh.js":97,"./tr":98,"./tr.js":98,"./tzl":99,"./tzl.js":99,"./tzm":101,"./tzm-latn":100,"./tzm-latn.js":100,"./tzm.js":101,"./uk":102,"./uk.js":102,"./uz":103,"./uz.js":103,"./vi":104,"./vi.js":104,"./x-pseudo":105,"./x-pseudo.js":105,"./yo":106,"./yo.js":106,"./zh-cn":107,"./zh-cn.js":107,"./zh-hk":108,"./zh-hk.js":108,"./zh-tw":109,"./zh-tw.js":109};n.keys=function(){return Object.keys(j)},n.resolve=r,s.exports=n,n.id=117},119:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{attrs:{id:"q-app"}},[e("div",[e("div",{staticClass:"routes"},[e("router-link",{attrs:{to:"/test"}},[s._v("Test")]),s._v(" "),e("router-link",{attrs:{to:"/test2"}},[s._v("Test2")])],1)]),s._v(" "),e("router-view")],1)},staticRenderFns:[]}},123:function(s,t,e){function n(s){var t=r[s];return t?e.e(t[1]).then(function(){return e(t[0])}):Promise.reject(new Error("Cannot find module '"+s+"'."))}var r={"./Error404.vue":[127,3],"./Index.vue":[128,0],"./LayoutTest.vue":[129,2],"./Test.vue":[130,1]};n.keys=function(){return Object.keys(r)},s.exports=n,n.id=123},124:function(s,t,e){"use strict";var n=e(1),r=e.n(n),j=e(110),a=e.n(j),o=e(111);e(112),r.a.use(a.a),a.a.start(function(){new r.a({el:"#q-app",router:o.a,render:function(s){return s(e(113))}})})}},[124]);