(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[317],{1760:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/ab9e037f386e584943185506b8995e57/ce4c1/dart-board.png","srcSet":"/static/ab9e037f386e584943185506b8995e57/7d722/dart-board.png 167w,\\n/static/ab9e037f386e584943185506b8995e57/a3110/dart-board.png 334w,\\n/static/ab9e037f386e584943185506b8995e57/ce4c1/dart-board.png 668w","sizes":"(min-width: 668px) 668px, 100vw"},"sources":[{"srcSet":"/static/ab9e037f386e584943185506b8995e57/6488a/dart-board.webp 167w,\\n/static/ab9e037f386e584943185506b8995e57/abb44/dart-board.webp 334w,\\n/static/ab9e037f386e584943185506b8995e57/2e238/dart-board.webp 668w","type":"image/webp","sizes":"(min-width: 668px) 668px, 100vw"}]},"width":668,"height":370}')},9357:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/b4204aa388d37d4d44a2c83acfb3457e/898e1/command-palette.png","srcSet":"/static/b4204aa388d37d4d44a2c83acfb3457e/8415a/command-palette.png 220w,\\n/static/b4204aa388d37d4d44a2c83acfb3457e/549b6/command-palette.png 440w,\\n/static/b4204aa388d37d4d44a2c83acfb3457e/898e1/command-palette.png 880w","sizes":"(min-width: 880px) 880px, 100vw"},"sources":[{"srcSet":"/static/b4204aa388d37d4d44a2c83acfb3457e/f1d5c/command-palette.webp 220w,\\n/static/b4204aa388d37d4d44a2c83acfb3457e/67884/command-palette.webp 440w,\\n/static/b4204aa388d37d4d44a2c83acfb3457e/75cad/command-palette.webp 880w","type":"image/webp","sizes":"(min-width: 880px) 880px, 100vw"}]},"width":880,"height":495}')},3387:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var n=a(7294),r=function(e){var t=e.onClick,a=e.children,r=e.active;return n.createElement("button",{className:"RoundButton-module--button--1Yb07 "+(r?"RoundButton-module--active--20PvV":""),onClick:t},a)},c=[{id:"all",name:"All"},{id:"js",name:"JavaScript"},{id:"frontend",name:"Frontend"},{id:"backend",name:"Backend"},{id:"cpp",name:"C/C++"}],o=function(){var e=(0,n.useState)([]),t=e[0],a=e[1],o=(0,n.useState)(0),d=o[0],s=o[1];return(0,n.useEffect)((function(){a(c)}),[]),n.createElement("div",{className:"FilterPanel-module--card--CoRWc"},t.map((function(e,t){return n.createElement(r,{key:e.id,active:t==d,onClick:function(){s(t)}},e.name.toString())})))},d=a(5448),s=a(3751),i={backend:"Backend",cpp:"C/C++",dart:"Dart Lang",frontend:"Frontend",gtkmm:"GTKmm",js:"JavaScript",nodejs:"NodeJS",pug:"Pug/Jade",react:"ReactJS",rust:"Rust",ts:"TypeScript"},l=function(e){var t=e.title,a=e.description,r=e.link,c=e.children,o=e.tagIds;return n.createElement("div",{className:"ProjectCard-module--card--Cb0sw"},n.createElement("div",{className:"ProjectCard-module--image--3t4ZF"},c),n.createElement("div",{className:"ProjectCard-module--spacer--3-GRk"}),n.createElement("div",{className:"ProjectCard-module--content--GgRdl"},n.createElement("a",{href:r},n.createElement("h2",null,t)),n.createElement("p",null,a),n.createElement("div",{className:"ProjectCard-module--tags--ENh0k"},o.map((function(e){return n.createElement("span",null,i[e])})))))},m={elide:a.p+"static/elide-app-50fa12c53a4154c80f150cd6dd69a26b.gif",qrcoder:a.p+"static/qrcoder-b3ba7b8a939c2cf88c9db6bbd4622590.gif"},p=a(3217),u=[{title:"elide.me: A webapp to make your URLs catchy and easy.",description:"The app helps you simplify your urls by letting you decide what they are so you can use relatable urls instead of some gibberish.",link:"https://console.elide.me",tagIds:["frontend","backend","rust","react","ts"],imgComponent:n.createElement("img",{src:m.elide,alt:"elide project's GIF"})},{title:"QRCoder: A simple app to generate QR codes",description:"Just enter the text, email, hyperlink etc. select error correction level, choose the color and boom you have a QR.",link:"https://rathod-sahaab.github.io",tagIds:["frontend","react","js"],imgComponent:n.createElement("img",{src:m.qrcoder,alt:"QRCoder project's GIF"})},{title:"Command Palette: feature that made using Inkscape super fast",description:"Typing to do things is way faster than using a mouse, command palette is a feature that provides you just that -- A very smart box to type commands into -- and execute them before you could've even touched your mouse.",link:"https://rathod-sahaab.github.io",tagIds:["cpp","gtkmm"],imgComponent:n.createElement(p.S,{src:"../../images/projects/command-palette.png",alt:"Command Palete screen shot",__imageData:a(9357)}),alt:"Command Palete screen shot"},{title:"Dart Board: A file server written in dart",description:"A server that you can point to a folder and it will list it's contents for you, then click on a file to download it over HTTP. A project written in 3 days to learn about HTTP on lower level with pretty low level framework 'Shelf' using dart.",link:"https://github.com/rathod_sahaab/dart_board",tagIds:["dart","frontend","backend","pug"],imgComponent:n.createElement(p.S,{src:"../../images/projects/dart-board.png",alt:"Dart board screen shots",__imageData:a(1760)}),alt:"Dart board screen shots"}],b=function(){return n.createElement(d.Z,null,n.createElement(s.Z,{title:"Projects"}),n.createElement("h1",{className:"heading"},"Projects"),n.createElement(o,null),n.createElement("section",null,u.map((function(e){return n.createElement(l,{title:e.title,description:e.description,link:e.link,tagIds:e.tagIds},e.imgComponent)}))))}}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-e0865fe0eafa0e39ca58.js.map