!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("design-system",[],n):"object"==typeof exports?exports["design-system"]=n():e["design-system"]=n()}(window,(function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}({"./src/index.js":function(e,n,t){"use strict";t.r(n),t.d(n,"GlobalStyle",(function(){return Ct})),t.d(n,"colors",(function(){return r})),t.d(n,"typography",(function(){return i})),t.d(n,"spacing",(function(){return o})),t.d(n,"Avatar",(function(){return Wt})),t.d(n,"Button",(function(){return gr})),t.d(n,"Carousel",(function(){return Sr})),t.d(n,"Icon",(function(){return sr})),t.d(n,"Select",(function(){return Er})),t.d(n,"SummaryTable",(function(){return Nr})),t.d(n,"ProductItem",(function(){return Qr})),t.d(n,"Navigation",(function(){return $r}));var r={};t.r(r),t.d(r,"background500",(function(){return u})),t.d(r,"onBackground500",(function(){return s})),t.d(r,"onSurface50",(function(){return d})),t.d(r,"onSurface100",(function(){return p})),t.d(r,"onSurface200",(function(){return f})),t.d(r,"onSurface300",(function(){return h})),t.d(r,"onSurface400",(function(){return g})),t.d(r,"onSurface500",(function(){return m})),t.d(r,"onSurface600",(function(){return y})),t.d(r,"onSurface700",(function(){return b})),t.d(r,"onSurface800",(function(){return x})),t.d(r,"onSurface900",(function(){return v})),t.d(r,"primary50",(function(){return w})),t.d(r,"primary100",(function(){return S})),t.d(r,"primary200",(function(){return j})),t.d(r,"primary300",(function(){return O})),t.d(r,"primary400",(function(){return F})),t.d(r,"primary500",(function(){return z})),t.d(r,"primary600",(function(){return P})),t.d(r,"primary700",(function(){return E})),t.d(r,"primary800",(function(){return I})),t.d(r,"primary900",(function(){return L})),t.d(r,"secondary50",(function(){return _})),t.d(r,"secondary100",(function(){return T})),t.d(r,"secondary200",(function(){return C})),t.d(r,"secondary300",(function(){return k})),t.d(r,"secondary400",(function(){return M})),t.d(r,"secondary500",(function(){return B})),t.d(r,"secondary600",(function(){return N})),t.d(r,"secondary700",(function(){return q})),t.d(r,"secondary800",(function(){return R})),t.d(r,"secondary900",(function(){return X})),t.d(r,"shadowSmColor",(function(){return D})),t.d(r,"shadowDefault0Color",(function(){return H})),t.d(r,"shadowDefault1Color",(function(){return W})),t.d(r,"shadowMd0Color",(function(){return A})),t.d(r,"shadowMd1Color",(function(){return V})),t.d(r,"shadowLg0Color",(function(){return G})),t.d(r,"shadowLg1Color",(function(){return J})),t.d(r,"shadowXl0Color",(function(){return K})),t.d(r,"shadowXl1Color",(function(){return Q})),t.d(r,"shadow2XlColor",(function(){return U})),t.d(r,"shadowInnerColor",(function(){return Y}));var i={};t.r(i),t.d(i,"headline1FontSize",(function(){return Z})),t.d(i,"headline1TextDecoration",(function(){return $})),t.d(i,"headline1FontFamily",(function(){return ee})),t.d(i,"headline1FontWeight",(function(){return ne})),t.d(i,"headline1FontStyle",(function(){return te})),t.d(i,"headline1FontStretch",(function(){return re})),t.d(i,"headline1LetterSpacing",(function(){return ie})),t.d(i,"headline1LineHeight",(function(){return oe})),t.d(i,"headline1ParagraphIndent",(function(){return ae})),t.d(i,"headline1ParagraphSpacing",(function(){return le})),t.d(i,"headline1TextCase",(function(){return ce})),t.d(i,"headline2FontSize",(function(){return ue})),t.d(i,"headline2TextDecoration",(function(){return se})),t.d(i,"headline2FontFamily",(function(){return de})),t.d(i,"headline2FontWeight",(function(){return pe})),t.d(i,"headline2FontStyle",(function(){return fe})),t.d(i,"headline2FontStretch",(function(){return he})),t.d(i,"headline2LetterSpacing",(function(){return ge})),t.d(i,"headline2LineHeight",(function(){return me})),t.d(i,"headline2ParagraphIndent",(function(){return ye})),t.d(i,"headline2ParagraphSpacing",(function(){return be})),t.d(i,"headline2TextCase",(function(){return xe})),t.d(i,"headline3FontSize",(function(){return ve})),t.d(i,"headline3TextDecoration",(function(){return we})),t.d(i,"headline3FontFamily",(function(){return Se})),t.d(i,"headline3FontWeight",(function(){return je})),t.d(i,"headline3FontStyle",(function(){return Oe})),t.d(i,"headline3FontStretch",(function(){return Fe})),t.d(i,"headline3LetterSpacing",(function(){return ze})),t.d(i,"headline3LineHeight",(function(){return Pe})),t.d(i,"headline3ParagraphIndent",(function(){return Ee})),t.d(i,"headline3ParagraphSpacing",(function(){return Ie})),t.d(i,"headline3TextCase",(function(){return Le})),t.d(i,"headline4FontSize",(function(){return _e})),t.d(i,"headline4TextDecoration",(function(){return Te})),t.d(i,"headline4FontFamily",(function(){return Ce})),t.d(i,"headline4FontWeight",(function(){return ke})),t.d(i,"headline4FontStyle",(function(){return Me})),t.d(i,"headline4FontStretch",(function(){return Be})),t.d(i,"headline4LetterSpacing",(function(){return Ne})),t.d(i,"headline4LineHeight",(function(){return qe})),t.d(i,"headline4ParagraphIndent",(function(){return Re})),t.d(i,"headline4ParagraphSpacing",(function(){return Xe})),t.d(i,"headline4TextCase",(function(){return De})),t.d(i,"headline5FontSize",(function(){return He})),t.d(i,"headline5TextDecoration",(function(){return We})),t.d(i,"headline5FontFamily",(function(){return Ae})),t.d(i,"headline5FontWeight",(function(){return Ve})),t.d(i,"headline5FontStyle",(function(){return Ge})),t.d(i,"headline5FontStretch",(function(){return Je})),t.d(i,"headline5LetterSpacing",(function(){return Ke})),t.d(i,"headline5LineHeight",(function(){return Qe})),t.d(i,"headline5ParagraphIndent",(function(){return Ue})),t.d(i,"headline5ParagraphSpacing",(function(){return Ye})),t.d(i,"headline5TextCase",(function(){return Ze})),t.d(i,"headline6FontSize",(function(){return $e})),t.d(i,"headline6TextDecoration",(function(){return en})),t.d(i,"headline6FontFamily",(function(){return nn})),t.d(i,"headline6FontWeight",(function(){return tn})),t.d(i,"headline6FontStyle",(function(){return rn})),t.d(i,"headline6FontStretch",(function(){return on})),t.d(i,"headline6LetterSpacing",(function(){return an})),t.d(i,"headline6LineHeight",(function(){return ln})),t.d(i,"headline6ParagraphIndent",(function(){return cn})),t.d(i,"headline6ParagraphSpacing",(function(){return un})),t.d(i,"headline6TextCase",(function(){return sn})),t.d(i,"paragraph1FontSize",(function(){return dn})),t.d(i,"paragraph1TextDecoration",(function(){return pn})),t.d(i,"paragraph1FontFamily",(function(){return fn})),t.d(i,"paragraph1FontWeight",(function(){return hn})),t.d(i,"paragraph1FontStyle",(function(){return gn})),t.d(i,"paragraph1FontStretch",(function(){return mn})),t.d(i,"paragraph1LetterSpacing",(function(){return yn})),t.d(i,"paragraph1LineHeight",(function(){return bn})),t.d(i,"paragraph1ParagraphIndent",(function(){return xn})),t.d(i,"paragraph1ParagraphSpacing",(function(){return vn})),t.d(i,"paragraph1TextCase",(function(){return wn})),t.d(i,"paragraph2FontSize",(function(){return Sn})),t.d(i,"paragraph2TextDecoration",(function(){return jn})),t.d(i,"paragraph2FontFamily",(function(){return On})),t.d(i,"paragraph2FontWeight",(function(){return Fn})),t.d(i,"paragraph2FontStyle",(function(){return zn})),t.d(i,"paragraph2FontStretch",(function(){return Pn})),t.d(i,"paragraph2LetterSpacing",(function(){return En})),t.d(i,"paragraph2LineHeight",(function(){return In})),t.d(i,"paragraph2ParagraphIndent",(function(){return Ln})),t.d(i,"paragraph2ParagraphSpacing",(function(){return _n})),t.d(i,"paragraph2TextCase",(function(){return Tn})),t.d(i,"paragraph3FontSize",(function(){return Cn})),t.d(i,"paragraph3TextDecoration",(function(){return kn})),t.d(i,"paragraph3FontFamily",(function(){return Mn})),t.d(i,"paragraph3FontWeight",(function(){return Bn})),t.d(i,"paragraph3FontStyle",(function(){return Nn})),t.d(i,"paragraph3FontStretch",(function(){return qn})),t.d(i,"paragraph3LetterSpacing",(function(){return Rn})),t.d(i,"paragraph3LineHeight",(function(){return Xn})),t.d(i,"paragraph3ParagraphIndent",(function(){return Dn})),t.d(i,"paragraph3ParagraphSpacing",(function(){return Hn})),t.d(i,"paragraph3TextCase",(function(){return Wn}));var o={};t.r(o),t.d(o,"spacingXsTop",(function(){return An})),t.d(o,"spacingXsRight",(function(){return Vn})),t.d(o,"spacingXsBottom",(function(){return Gn})),t.d(o,"spacingXsLeft",(function(){return Jn})),t.d(o,"spacingSmTop",(function(){return Kn})),t.d(o,"spacingSmRight",(function(){return Qn})),t.d(o,"spacingSmBottom",(function(){return Un})),t.d(o,"spacingSmLeft",(function(){return Yn})),t.d(o,"spacingBaseTop",(function(){return Zn})),t.d(o,"spacingBaseRight",(function(){return $n})),t.d(o,"spacingBaseBottom",(function(){return et})),t.d(o,"spacingBaseLeft",(function(){return nt})),t.d(o,"spacingMdTop",(function(){return tt})),t.d(o,"spacingMdRight",(function(){return rt})),t.d(o,"spacingMdBottom",(function(){return it})),t.d(o,"spacingMdLeft",(function(){return ot})),t.d(o,"spacingLgTop",(function(){return at})),t.d(o,"spacingLgRight",(function(){return lt})),t.d(o,"spacingLgBottom",(function(){return ct})),t.d(o,"spacingLgLeft",(function(){return ut})),t.d(o,"spacingXlTop",(function(){return st})),t.d(o,"spacingXlRight",(function(){return dt})),t.d(o,"spacingXlBottom",(function(){return pt})),t.d(o,"spacingXlLeft",(function(){return ft})),t.d(o,"spacing2XlTop",(function(){return ht})),t.d(o,"spacing2XlRight",(function(){return gt})),t.d(o,"spacing2XlBottom",(function(){return mt})),t.d(o,"spacing2XlLeft",(function(){return yt})),t.d(o,"spacing3XlTop",(function(){return bt})),t.d(o,"spacing3XlRight",(function(){return xt})),t.d(o,"spacing3XlBottom",(function(){return vt})),t.d(o,"spacing3XlLeft",(function(){return wt})),t.d(o,"spacing3XxlTop",(function(){return St})),t.d(o,"spacing3XxlRight",(function(){return jt})),t.d(o,"spacing3XxlBottom",(function(){return Ot})),t.d(o,"spacing3XxlLeft",(function(){return Ft})),t.d(o,"spacing3XxxlTop",(function(){return zt})),t.d(o,"spacing3XxxlRight",(function(){return Pt})),t.d(o,"spacing3XxxlBottom",(function(){return Et})),t.d(o,"spacing3XxxlLeft",(function(){return It}));t("core-js/modules/es.array.slice.js"),t("core-js/modules/es.object.freeze.js");var a,l=t("styled-components"),c=t.n(l),u="rgba(255, 255, 255, 1)",s="rgba(12, 17, 24, 1)",d="rgba(255, 255, 255, 1)",p="rgba(221, 227, 235, 1)",f="rgba(188, 199, 213, 1)",h="rgba(157, 171, 190, 1)",g="rgba(128, 143, 165, 1)",m="rgba(100, 116, 139, 1)",y="rgba(75, 91, 113, 1)",b="rgba(52, 66, 86, 1)",x="rgba(31, 41, 56, 1)",v="rgba(12, 17, 24, 1)",w="rgba(254, 248, 246, 1)",S="rgba(251, 212, 204, 1)",j="rgba(249, 178, 162, 1)",O="rgba(246, 145, 120, 1)",F="rgba(243, 113, 78, 1)",z="rgba(241, 82, 35, 1)",P="rgba(214, 70, 28, 1)",E="rgba(186, 59, 21, 1)",I="rgba(157, 48, 15, 1)",L="rgba(128, 37, 10, 1)",_="rgba(248, 247, 252, 1)",T="rgba(213, 211, 235, 1)",C="rgba(213, 211, 235, 1)",k="rgba(145, 138, 203, 1)",M="rgba(112, 102, 187, 1)",B="rgba(80, 65, 171, 1)",N="rgba(69, 55, 151, 1)",q="rgba(58, 46, 131, 1)",R="rgba(48, 37, 110, 1)",X="rgba(37, 29, 89, 1)",D="rgba(0, 0, 0, 0.05)",H="rgba(0, 0, 0, 0.1)",W="rgba(0, 0, 0, 0.06)",A="rgba(0, 0, 0, 0.1)",V="rgba(0, 0, 0, 0.06)",G="rgba(0, 0, 0, 0.1)",J="rgba(0, 0, 0, 0.05)",K="rgba(0, 0, 0, 0.1)",Q="rgba(0, 0, 0, 0.04)",U="rgba(0, 0, 0, 0.25)",Y="rgba(0, 0, 0, 0.06)",Z="36px",$="none",ee="DM Sans",ne=700,te="normal",re="normal",ie="-1.6px",oe="46px",ae="0px",le="0px",ce="none",ue="24px",se="none",de="DM Sans",pe=700,fe="normal",he="normal",ge="-0.8px",me="34px",ye="0px",be="0px",xe="none",ve="22px",we="none",Se="DM Sans",je=700,Oe="normal",Fe="normal",ze="-0.4px",Pe="32px",Ee="0px",Ie="0px",Le="none",_e="18px",Te="none",Ce="DM Sans",ke=700,Me="normal",Be="normal",Ne="-0.4px",qe="28px",Re="0px",Xe="0px",De="none",He="16px",We="none",Ae="DM Sans",Ve=700,Ge="normal",Je="normal",Ke="-0.36px",Qe="26px",Ue="0px",Ye="0px",Ze="none",$e="14px",en="none",nn="DM Sans",tn=700,rn="normal",on="normal",an="-0.3px",ln="24px",cn="0px",un="0px",sn="none",dn="18px",pn="none",fn="DM Sans",hn=400,gn="normal",mn="normal",yn="-0.4px",bn="28px",xn="0px",vn="0px",wn="none",Sn="16px",jn="none",On="DM Sans",Fn=400,zn="normal",Pn="normal",En="-0.36px",In="26px",Ln="0px",_n="0px",Tn="none",Cn="14px",kn="none",Mn="DM Sans",Bn=400,Nn="normal",qn="normal",Rn="-0.3px",Xn="24px",Dn="0px",Hn="0px",Wn="none",An="2px",Vn="2px",Gn="2px",Jn="2px",Kn="4px",Qn="4px",Un="4px",Yn="4px",Zn="8px",$n="8px",et="8px",nt="8px",tt="12px",rt="12px",it="12px",ot="12px",at="16px",lt="16px",ct="16px",ut="16px",st="20px",dt="20px",pt="20px",ft="20px",ht="24px",gt="24px",mt="24px",yt="24px",bt="32px",xt="32px",vt="32px",wt="32px",St="40px",jt="40px",Ot="40px",Ft="40px",zt="48px",Pt="48px",Et="48px",It="48px";var Lt,_t,Tt=Object(l.css)(["overflow-y:auto;overflow-x:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-overflow-scrolling:touch;font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";*{box-sizing:border-box;}h1,h2,h3,h4,h5,h6,p{margin:0;padding:0;}p{font-family:",";font-size:",";line-height:",";font-weight:",";font-style:",";letter-spacing:",";}h1{font-family:",";font-size:",";line-height:",";font-weight:",";font-style:",";letter-spacing:",";}h2{font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";letter-spacing:",";}h3{font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";letter-spacing:",";}h4{font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";letter-spacing:",";}h5{font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";letter-spacing:",";}h6{font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";letter-spacing:",";}"],i.paragraph3FontFamily,i.paragraph3FontSize,i.paragraph3FontWeight,i.paragraph3FontStyle,i.paragraph3LineHeight,i.paragraph3FontFamily,i.paragraph3FontSize,i.paragraph3LineHeight,i.paragraph3FontWeight,i.paragraph3FontStyle,i.paragraph3LetterSpacing,i.headline1FontFamily,i.headline1FontSize,i.headline1LineHeight,i.headline1FontWeight,i.headline1FontStyle,i.headline1LetterSpacing,i.headline2FontFamily,i.headline2FontSize,i.headline2FontWeight,i.headline2FontStyle,i.headline2LineHeight,i.headline2LetterSpacing,i.headline3FontFamily,i.headline3FontSize,i.headline3FontWeight,i.headline3FontStyle,i.headline3LineHeight,i.headline3LetterSpacing,i.headline4FontFamily,i.headline4FontSize,i.headline4FontWeight,i.headline4FontStyle,i.headline4LineHeight,i.headline4LetterSpacing,i.headline5FontFamily,i.headline5FontSize,i.headline5FontWeight,i.headline5FontStyle,i.headline5LineHeight,i.headline5LetterSpacing,i.headline6FontFamily,i.headline6FontSize,i.headline6FontWeight,i.headline6FontStyle,i.headline6LineHeight,i.headline6LetterSpacing),Ct=Object(l.createGlobalStyle)(a||(Lt=["\n  body {\n    ","\n  }\n  // prevent mouse-clicks from focusing elements\n  :focus:not(:focus-visible) {\n    outline: none;\n  }\n"],_t||(_t=Lt.slice(0)),a=Object.freeze(Object.defineProperties(Lt,{raw:{value:Object.freeze(_t)}}))),Tt),kt=(t("core-js/modules/es.object.keys.js"),t("core-js/modules/es.symbol.js"),t("core-js/modules/es.object.assign.js"),t("prop-types")),Mt=t("react"),Bt=t.n(Mt);function Nt(){return(Nt=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function qt(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var Rt=function(e){var n=e.src,t=qt(e,["src"]);return Bt.a.createElement(Xt,Nt({src:n},t))},Xt=c.a.img.withConfig({displayName:"Avatar__StyledAvatar",componentId:"ayyuxz-0"})(["width:48px;height:48px;border-radius:",";"],"16px");Rt.propTypes={src:kt.string};var Dt,Ht,Wt=Rt;t("core-js/modules/es.array.concat.js"),t("core-js/modules/es.function.name.js");function At(){return(At=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var Vt;t.p;function Gt(){return(Gt=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var Jt;t.p;function Kt(){return(Kt=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var Qt;t.p;function Ut(){return(Ut=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var Yt;t.p;function Zt(){return(Zt=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var $t;t.p;function er(){return(er=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var nr;t.p;function tr(){return(tr=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var rr;t.p;function ir(){return(ir=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.p;function or(){return(or=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function ar(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var lr={settings:function(e){return Mt.createElement("svg",At({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),Dt||(Dt=Mt.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.23 12.37c-.194-.3-.47-.6-.828-.79-.286-.14-.47-.37-.633-.64-.521-.86-.215-1.99.654-2.5a2.027 2.027 0 00.756-2.83l-.685-1.18a2.112 2.112 0 00-2.871-.76c-.9.48-2.054.16-2.576-.69-.163-.28-.255-.58-.235-.88.03-.39-.092-.76-.276-1.06A2.152 2.152 0 0010.717 0h-1.44c-.747.02-1.431.42-1.81 1.04-.194.3-.306.67-.286 1.06.02.3-.071.6-.235.88-.521.85-1.676 1.17-2.565.69a2.124 2.124 0 00-2.882.76L.814 5.61c-.582.99-.255 2.26.757 2.83.868.51 1.175 1.64.664 2.5-.174.27-.358.5-.644.64-.347.19-.654.49-.817.79-.379.62-.358 1.4.02 2.05l.705 1.2a2.134 2.134 0 001.82 1.04c.347 0 .755-.1 1.083-.3.255-.17.562-.23.899-.23 1.012 0 1.86.83 1.88 1.82 0 1.15.94 2.05 2.126 2.05h1.39c1.175 0 2.115-.9 2.115-2.05.03-.99.88-1.82 1.89-1.82.328 0 .634.06.9.23.327.2.726.3 1.084.3.725 0 1.43-.4 1.808-1.04l.716-1.2c.368-.67.398-1.43.02-2.05z",fill:"inherit",fillOpacity:.2})),Ht||(Ht=Mt.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.012 12.83c-1.604 0-2.902-1.25-2.902-2.82 0-1.57 1.298-2.83 2.902-2.83s2.872 1.26 2.872 2.83-1.268 2.82-2.872 2.82z",fill:"inherit"})))},heart:function(e){return Mt.createElement("svg",Gt({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),Vt||(Vt=Mt.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.776 21.837a36.258 36.258 0 01-6.328-4.957 12.668 12.668 0 01-3.03-4.805C1.28 8.535 2.603 4.49 6.3 3.288A6.282 6.282 0 0112.007 4.3a6.291 6.291 0 015.706-1.012c3.697 1.201 5.03 5.247 3.893 8.787a12.669 12.669 0 01-3.013 4.805 36.583 36.583 0 01-6.328 4.957l-.249.163-.24-.163z",fill:"inherit",fillOpacity:.2})))},menu:function(e){return Mt.createElement("svg",Kt({fill:"none",height:24,viewBox:"0 0 24 24",width:24,xmlns:"http://www.w3.org/2000/svg"},e),Jt||(Jt=Mt.createElement("g",{fill:"inherit"},Mt.createElement("path",{clipRule:"evenodd",d:"M7 6a1 1 0 000 2h10a1 1 0 100-2zm0 10a1 1 0 100 2h10a1 1 0 100-2z",fillOpacity:.2,fillRule:"evenodd"}),Mt.createElement("rect",{height:2,rx:1,width:18,x:3,y:11}))))},arrowBack:function(e){return Mt.createElement("svg",Ut({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),Qt||(Qt=Mt.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.76 18.581c.32.324.32.85.002 1.175a.81.81 0 01-1.066.082l-.091-.08-6.6-6.67a.84.84 0 01-.08-1.082l.08-.094 6.6-6.67a.81.81 0 011.157.002.84.84 0 01.077 1.082l-.08.093L9.742 12.5l6.017 6.08z",fill:"inherit"})))},chevronDown:function(e){return Mt.createElement("svg",Zt({width:11,height:6,viewBox:"0 0 11 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),Yt||(Yt=Mt.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.388.336a.56.56 0 01.783-.001.54.54 0 01.055.71l-.054.061-4.446 4.4a.56.56 0 01-.722.053l-.062-.053-4.447-4.4A.54.54 0 01.496.335a.56.56 0 01.721-.051l.062.052 4.055 4.012L9.388.336z",fill:"#040415"})))},filter:function(e){return Mt.createElement("svg",ir({width:20,height:18,viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),rr||(rr=Mt.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.878 3.379c0 1.866-1.54 3.38-3.44 3.38C1.54 6.758 0 5.244 0 3.378 0 1.513 1.54 0 3.439 0c1.9 0 3.439 1.513 3.439 3.379zm11.615-1.48c.832 0 1.507.663 1.507 1.48s-.675 1.48-1.507 1.48h-6.575c-.832 0-1.508-.663-1.508-1.48s.676-1.48 1.508-1.48h6.575zM1.508 12.957h6.575c.833 0 1.508.664 1.508 1.481 0 .817-.675 1.482-1.508 1.482H1.508C.676 15.92 0 15.256 0 14.439s.676-1.481 1.508-1.481zm15.053 4.82c1.9 0 3.439-1.513 3.439-3.379s-1.539-3.38-3.439-3.38c-1.899 0-3.439 1.514-3.439 3.38 0 1.866 1.54 3.379 3.44 3.379z",fill:"inherit",fillOpacity:.2})))},viewGrid:function(e){return Mt.createElement("svg",er({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),$t||($t=Mt.createElement("path",{clipRule:"evenodd",d:"M11 0a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V2a2 2 0 00-2-2h-3zM2 9a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2H2zm7 2a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3zM2 0a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V2a2 2 0 00-2-2H2z"})))},viewItem:function(e){return Mt.createElement("svg",tr({viewBox:"0 0 16 16",width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),nr||(nr=Mt.createElement("rect",{width:16,height:16,rx:4,fill:"inherit",fillOpacity:.2})))}},cr=c()("span").withConfig({displayName:"Icon___StyledSpan",componentId:"k1qdra-0"})({display:"inline-flex"}),ur=function(e){var n=e.name,t=e.width,r=void 0===t?24:t,i=e.height,o=void 0===i?24:i,a=e.color,l=ar(e,["name","width","height","color"]),c=lr[n];return Bt.a.createElement(cr,or({className:"icon"},l),Bt.a.createElement(c,{fill:a,width:r,height:o}))};ur.propTypes={name:kt.string,color:kt.string,height:kt.number,width:kt.number};var sr=ur;function dr(){return(dr=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function pr(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var fr=function(e){var n,t=e.as,r=e.label,i=e.children,o=pr(e,["as","label","children"]),a="Icon"===(null==i||null===(n=i.type)||void 0===n?void 0:n.displayName);return Bt.a.createElement(hr,dr({as:t,isIcon:a},o),r||i)},hr=c.a.button.withConfig({displayName:"Button__StyledButton",componentId:"kt0lv5-0"})(["display:inline-flex;align-items:center;justify-content:center;cursor:pointer;outline:none;box-sizing:border-box;line-height:24px;position:relative;user-select:none;text-decoration:none;border-width:0;border-radius:1rem;padding:",";background-color:",";opacity:",";color:",";font-size:14px;font-weight:700;width:",";",";",";"],(function(e){return e.isIcon?"12px":"16px"}),(function(e){return e.color}),(function(e){return e.disabled?.6:1}),r.background500,(function(e){return e.isStretched?"100%":null}),(function(e){return e.isOutline&&"border-width: 1px;\n     border-color: ".concat(r.onSurface100,"; \n     background-color: transparent;\n     color: ").concat(r.onBackground500,";\n  ")}),(function(e){return e.isBorderless&&"\n     background-color: transparent;\n     color: ".concat(r.primary500,";\n     padding: 0;\n  ")}));fr.propTypes={label:kt.string,disabled:kt.bool,isStretched:kt.bool,isOutline:kt.bool,isBorderless:kt.bool,color:kt.string},fr.defaultProps={color:r.primary500};var gr=fr,mr=(t("core-js/modules/es.array.map.js"),t("react-awesome-slider")),yr=t.n(mr);t("react-awesome-slider/dist/styles.css");function br(){return(br=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function xr(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var vr=function(e){var n=e.images,t=e.className,r=xr(e,["images","className"]);return Bt.a.createElement(wr,{className:t},Bt.a.createElement(yr.a,br({organicArrows:!1},r),n&&n.map((function(e){return Bt.a.createElement("div",{key:e.source,style:{display:"flex"}},Bt.a.createElement("img",{src:e.source}))}))))};vr.propTypes={images:Object(kt.arrayOf)(Object(kt.shape)({source:kt.string})).isRequired};var wr=c.a.div.withConfig({displayName:"Carousel__StyledCarousel",componentId:"sc-819yy4-0"})(['> .awssld{--control-bullet-color:"rgba(100, 116, 139, 1)";--control-bullet-active-color:"rgba(12, 17, 24, 1)";--content-background-color:transparent;--loader-bar-color:"rgba(255, 255, 255, 1)";--loader-bar-height:1px;}.awssld__content > img,.awssld__content > video{object-fit:contain;}.awssld__bullets{position:relative;bottom:0;padding:0;display:flex;justify-content:center;width:100%;margin:0;height:36px;align-items:flex-end;button{width:',";height:",";margin:0 ",";opacity:0.6;border-radius:50%;}& > .awssld__bullets--active{transform:none;}}"],Zn,Zn,Kn),Sr=vr,jr=t("@reach/listbox");t("@reach/listbox/styles.css");function Or(){return(Or=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Fr(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var zr=function(e){var n=e.defaultValue,t=e.options,r=Fr(e,["defaultValue","options"]);if(!t)return null;return Bt.a.createElement(Pr,Or({arrow:Bt.a.createElement(sr,{name:"chevronDown",width:10,height:10})},r),Bt.a.createElement(Bt.a.Fragment,null,n&&Bt.a.createElement(jr.ListboxOption,{key:"default",value:"default"},n),t&&function(e){return Bt.a.createElement(Bt.a.Fragment,null,e.map((function(e,n){return Bt.a.createElement(jr.ListboxOption,{key:"option-".concat(n),value:e.value},e.title)})))}(t)))};zr.propTypes={defaultValue:kt.string,options:Object(kt.arrayOf)(Object(kt.shape)({title:kt.string.isRequired,value:kt.string.isRequired})).isRequired};var Pr=c()(jr.Listbox).withConfig({displayName:"Select__StyledSelect",componentId:"sc-167fa7p-0"})(["> [data-reach-listbox-button]{padding:"," ",';font-family:"DM Sans";line-height:24px;font-weight:bold;border-color:"rgba(188, 199, 213, 1)";border-radius:12px;color:"rgba(12, 17, 24, 1)";position:relative;outline:none;align-items:baseline;}> [data-reach-listbox-arrow]{right:0.75rem;pointer-events:none;display:block;}'],Zn,at),Er=zr;function Ir(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var Lr=function(e){var n=e.items,t=e.total,r=Ir(e,["items","total"]);return n&&n.length>0&&Bt.a.createElement("div",r,Bt.a.createElement(kr,null,"Summary"),Bt.a.createElement(_r,null,n.map((function(e){return Bt.a.createElement(Bt.a.Fragment,{key:e.name},Bt.a.createElement("p",null,e.name),Bt.a.createElement(Mr,null,e.price))}))),t&&Bt.a.createElement(Bt.a.Fragment,null,Bt.a.createElement(Tr,null),Bt.a.createElement(_r,null,Bt.a.createElement(Cr,null,"Total"),Bt.a.createElement(Br,null,t))))};Lr.propTypes={items:Object(kt.arrayOf)(Object(kt.shape)({name:kt.string,price:kt.string})),total:kt.string};var _r=c.a.div.withConfig({displayName:"SummaryTable__StyledGrid",componentId:"sc-15ffqnu-0"})(["display:grid;grid-template-columns:1fr auto;row-gap:",";"],at),Tr=c.a.div.withConfig({displayName:"SummaryTable__StyledBorder",componentId:"sc-15ffqnu-1"})(["width:100%;height:1px;background-color:rgba(0,0,0,0.1);margin:"," 0;"],bt),Cr=c.a.p.withConfig({displayName:"SummaryTable__StyledItemName",componentId:"sc-15ffqnu-2"})(["font-size:18px;line-height:28px;"]),kr=c.a.h2.withConfig({displayName:"SummaryTable__StyledHeading",componentId:"sc-15ffqnu-3"})(["margin-bottom:30px;"]),Mr=c.a.div.withConfig({displayName:"SummaryTable__StyledPrice",componentId:"sc-15ffqnu-4"})(['font-family:"DM Sans";font-size:14px;font-weight:700;font-style:normal;line-height:',";letter-spacing:-0.3px;text-align:right;"],ht),Br=c.a.div.withConfig({displayName:"SummaryTable__StyledTotal",componentId:"sc-15ffqnu-5"})(['font-family:"DM Sans";font-size:18px;font-weight:700;font-style:normal;line-height:28px;letter-spacing:-0.4px;text-align:right;']),Nr=Lr;t("core-js/modules/es.symbol.description.js");function qr(){return(qr=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Rr(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var Xr=function(e){var n=e.as,t=e.size,r=void 0===t?"medium":t,i=e.image,o=e.name,a=e.description,l=e.price,c=Rr(e,["as","size","image","name","description","price"]);return Bt.a.createElement(Dr,qr({as:n,size:r},c),"big"===r&&Bt.a.createElement(Wr,{isOutline:!0},Bt.a.createElement(sr,{name:"heart"})),Bt.a.createElement(Hr,{src:i,alt:o,size:r}),Bt.a.createElement(Ar,{size:r},"medium"!==r&&Bt.a.createElement(Vr,{size:r},a),Bt.a.createElement(Gr,{size:r},Bt.a.createElement(Jr,{size:r},o),Bt.a.createElement(Kr,{size:r},l))))};Xr.propTypes={size:Object(kt.oneOf)(["small","medium","big"]),image:kt.string,name:kt.string,price:kt.string,description:kt.string};var Dr=c.a.div.withConfig({displayName:"ProductItem__StyledProductItem",componentId:"sc-12v6vwh-0"})(["display:flex;flex-direction:column;position:relative;text-decoration:none;color:inherit;&:hover{opacity:0.8;cursor:pointer;}"," ",""],(function(e){return"small"===e.size&&"height: 100px; \n    flex-direction: row;"}),(function(e){return"big"===e.size&&"margin-bottom: ".concat(St,";")})),Hr=c.a.img.withConfig({displayName:"ProductItem__StyledProductItemImage",componentId:"sc-12v6vwh-1"})(["max-width:100%;max-height:100%;margin-bottom:",";display:block;border-radius:",";"],(function(e){var n=e.size;return"big"===n?ht:"small"===n?"0px":at}),"32px"),Wr=c()(gr).withConfig({displayName:"ProductItem__StyledButton",componentId:"sc-12v6vwh-2"})(["position:absolute;top:0;left:0;z-index:1;margin:",";"],ht),Ar=c.a.div.withConfig({displayName:"ProductItem__StyledProductItemInfo",componentId:"sc-12v6vwh-3"})(["display:flex;flex-direction:column;",""],(function(e){return"small"==e.size&&"\n     flex-grow: 1;\n     margin-left: ".concat(ut,";\n     align-content: flex-start;\n     max-width: 60%;")})),Vr=c.a.p.withConfig({displayName:"ProductItem__StyledProductItemDescription",componentId:"sc-12v6vwh-4"})(["margin-bottom:",";opacity:0.6;",""],Zn,(function(e){return"small"===e.size&&"order: 5;"})),Gr=c.a.div.withConfig({displayName:"ProductItem__StyledMainInfoWrapper",componentId:"sc-12v6vwh-5"})(["",""],(function(e){return"small"===e.size&&"display: inline-flex; \n    flex-wrap: nowrap; \n    flex-direction: row;"})),Jr=c.a.h2.withConfig({displayName:"ProductItem__StyledProductItemName",componentId:"sc-12v6vwh-6"})(["",""],(function(e){var n=e.size;return"big"===n?"\n        font-family: ".concat(i.headline1FontFamily,";\n        font-size: ").concat(i.headline1FontSize,";\n        line-height: ").concat(i.headline1LineHeight,";\n        font-weight: ").concat(i.headline1FontWeight,";\n        font-style: ").concat(i.headline1FontStyle,";\n        letter-spacing: ").concat(i.headline1LetterSpacing,";"):"medium"===n?"\n        font-family: ".concat(i.headline4FontFamily,";\n        font-size: ").concat(i.headline4FontSize,";\n        line-height: ").concat(i.headline4LineHeight,";\n        font-weight: ").concat(i.headline4FontWeight,";\n        font-style: ").concat(i.headline4FontStyle,";\n        letter-spacing: ").concat(i.headline4LetterSpacing,";\n        margin-bottom: ").concat(Zn,";\n    "):"\n        font-family: ".concat(i.headline6FontFamily,";\n        font-size: ").concat(i.headline6FontSize,";\n        line-height: ").concat(i.headline6LineHeight,";\n        font-weight: ").concat(i.headline6FontWeight,";\n        font-style: ").concat(i.headline6FontStyle,";\n        letter-spacing: ").concat(i.headline6LetterSpacing,";\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n        padding-right: ").concat(at,";\n    ")})),Kr=c.a.p.withConfig({displayName:"ProductItem__StyledProductItemPrice",componentId:"sc-12v6vwh-7"})(["color:",";margin-top:",";font-weight:500;",""],r.primary500,Zn,(function(e){var n=e.size;return"big"===n?"\n        font-family: ".concat(i.headline2FontFamily,";\n        font-size: ").concat(i.headline2FontSize,";\n        line-height: ").concat(i.headline2LineHeight,";\n        font-weight: ").concat(i.headline2FontWeight,";\n        font-style: ").concat(i.headline2FontStyle,";\n        letter-spacing: ").concat(i.headline1LetterSpacing,";\n        color: ").concat(r.primary500,";\n        margin-top: ").concat(at,";"):"small"===n?"\n        color: ".concat(r.onBackground500,"; \n        margin-top: 0; \n        margin-left: auto; \n        font-weight: bold;"):void 0})),Qr=Xr,Ur=function(e){var n=e.firstAction,t=void 0===n?null:n,r=e.title,i=e.lastAction,o=void 0===i?null:i;return Bt.a.createElement(Yr,null,t,r&&Bt.a.createElement(Zr,null,Bt.a.createElement("h4",null,r)),o)};Ur.propTypes={firstAction:kt.node,lastAction:kt.node,title:kt.string};var Yr=c.a.div.withConfig({displayName:"Navigation__StyledNavigation",componentId:"sc-1tqq5ey-0"})(["display:flex;justify-content:space-between;margin-bottom:",";padding-top:",";"],St,st),Zr=c.a.div.withConfig({displayName:"Navigation__StyledTitle",componentId:"sc-1tqq5ey-1"})(["flex-grow:2;display:flex;align-items:center;margin-left:",";"],ft),$r=Ur},0:function(e,n,t){e.exports=t("./src/index.js")},"@reach/listbox":function(e,n){e.exports=require("@reach/listbox")},"@reach/listbox/styles.css":function(e,n){e.exports=require("@reach/listbox/styles.css")},"core-js/modules/es.array.concat.js":function(e,n){e.exports=require("core-js/modules/es.array.concat.js")},"core-js/modules/es.array.map.js":function(e,n){e.exports=require("core-js/modules/es.array.map.js")},"core-js/modules/es.array.slice.js":function(e,n){e.exports=require("core-js/modules/es.array.slice.js")},"core-js/modules/es.function.name.js":function(e,n){e.exports=require("core-js/modules/es.function.name.js")},"core-js/modules/es.object.assign.js":function(e,n){e.exports=require("core-js/modules/es.object.assign.js")},"core-js/modules/es.object.freeze.js":function(e,n){e.exports=require("core-js/modules/es.object.freeze.js")},"core-js/modules/es.object.keys.js":function(e,n){e.exports=require("core-js/modules/es.object.keys.js")},"core-js/modules/es.symbol.description.js":function(e,n){e.exports=require("core-js/modules/es.symbol.description.js")},"core-js/modules/es.symbol.js":function(e,n){e.exports=require("core-js/modules/es.symbol.js")},"prop-types":function(e,n){e.exports=require("prop-types")},react:function(e,n){e.exports=require("react")},"react-awesome-slider":function(e,n){e.exports=require("react-awesome-slider")},"react-awesome-slider/dist/styles.css":function(e,n){e.exports=require("react-awesome-slider/dist/styles.css")},"styled-components":function(e,n){e.exports=require("styled-components")}})}));
//# sourceMappingURL=design-system.js.map