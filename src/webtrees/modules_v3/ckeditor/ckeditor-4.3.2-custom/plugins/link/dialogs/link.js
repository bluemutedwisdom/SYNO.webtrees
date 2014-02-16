CKEDITOR.dialog.add("link",function(R){function t(b){return b.replace(/'/g,"\\$&")}var N,K,g=CKEDITOR.plugins.link,i=function(){var k=this.getDialog(),j=k.getContentElement("target","popupFeatures"),k=k.getContentElement("target","linkTargetName"),l=this.getValue();if(j&&k){switch(j=j.getElement(),j.hide(),k.setValue(""),l){case"frame":k.setLabel(R.lang.link.targetFrameName);k.getElement().show();break;case"popup":j.show();k.setLabel(R.lang.link.targetPopupName);k.getElement().show();break;default:k.setValue(l),k.getElement().hide()}}},e=/^javascript:/,c=/^mailto:([^?]+)(?:\?(.+))?$/,a=/subject=([^;?:@&=$,\/]*)/,Q=/body=([^;?:@&=$,\/]*)/,P=/^#(.*)$/,M=/^((?:http|https|ftp|news):\/\/)?(.*)$/,L=/^(_(?:self|top|parent|blank))$/,J=/^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/,o=/^javascript:([^(]+)\(([^)]+)\)$/,h=/\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*;\s*return\s*false;*\s*/,f=/(?:^|,)([^=]+)=(\d+|yes|no)/gi,d=function(k,j){var r=j&&(j.data("cke-saved-href")||j.getAttribute("href"))||"",q,p,m={};r.match(e)&&("encode"==O?r=r.replace(J,function(u,v,s){return"mailto:"+String.fromCharCode.apply(String,v.split(","))+(s&&s.replace(/\\'/g,"'"))}):O&&r.replace(o,function(u,z,s){if(z==K){m.type="email";u=m.email={};z=/(^')|('$)/g;s=s.match(/[^,\s]+/g);for(var x=s.length,y,w,v=0;v<x;v++){y=decodeURIComponent,w=s[v].replace(z,"").replace(/\\'/g,"'"),w=y(w),y=N[v].toLowerCase(),u[y]=w}u.address=[u.name,u.domain].join("@")}}));if(!m.type){if(q=r.match(P)){m.type="anchor",m.anchor={},m.anchor.name=m.anchor.id=q[1]}else{if(q=r.match(c)){p=r.match(a);r=r.match(Q);m.type="email";var n=m.email={};n.address=q[1];p&&(n.subject=decodeURIComponent(p[1]));r&&(n.body=decodeURIComponent(r[1]))}else{r&&(p=r.match(M))?(m.type="url",m.url={},m.url.protocol=p[1],m.url.url=p[2]):m.type="url"}}}if(j){q=j.getAttribute("target");m.target={};m.adv={};if(q){q.match(L)?m.target.type=m.target.name=q:(m.target.type="frame",m.target.name=q)}else{if(q=(q=j.data("cke-pa-onclick")||j.getAttribute("onclick"))&&q.match(h)){m.target.type="popup";for(m.target.name=q[1];r=f.exec(q[2]);){("yes"==r[2]||"1"==r[2])&&!(r[1] in {height:1,width:1,top:1,left:1})?m.target[r[1]]=!0:isFinite(r[2])&&(m.target[r[1]]=r[2])}}}q=function(b,u){var s=j.getAttribute(u);null!==s&&(m.adv[b]=s||"")};q("advId","id");q("advLangDir","dir");q("advAccessKey","accessKey");m.adv.advName=j.data("cke-saved-name")||j.getAttribute("name")||"";q("advLangCode","lang");q("advTabIndex","tabindex");q("advTitle","title");q("advContentType","type");CKEDITOR.plugins.link.synAnchorSelector?(r=m.adv,n=j,p=(n=n.getAttribute("class"))?n.replace(/\s*(?:cke_anchor_empty|cke_anchor)(?:\s*$)?/g,""):"",r.advCSSClasses=p):q("advCSSClasses","class");q("advCharset","charset");q("advStyles","style");q("advRel","rel")}q=m.anchors=[];var l;if(CKEDITOR.plugins.link.emptyAnchorFix){n=k.document.getElementsByTag("a");r=0;for(p=n.count();r<p;r++){if(l=n.getItem(r),l.data("cke-saved-name")||l.hasAttribute("name")){q.push({name:l.data("cke-saved-name")||l.getAttribute("name"),id:l.getAttribute("id")})}}}else{n=new CKEDITOR.dom.nodeList(k.document.$.anchors);r=0;for(p=n.count();r<p;r++){l=n.getItem(r),q[r]={name:l.getAttribute("name"),id:l.getAttribute("id")}}}if(CKEDITOR.plugins.link.fakeAnchor){n=k.document.getElementsByTag("img");r=0;for(p=n.count();r<p;r++){(l=CKEDITOR.plugins.link.tryRestoreFakeAnchor(k,n.getItem(r)))&&q.push({name:l.getAttribute("name"),id:l.getAttribute("id")})}}this._.selectedElement=j;return m},W=function(b){b.target&&this.setValue(b.target[this.id]||"")},U=function(b){b.adv&&this.setValue(b.adv[this.id]||"")},T=function(b){b.target||(b.target={});b.target[this.id]=this.getValue()||""},S=function(b){b.adv||(b.adv={});b.adv[this.id]=this.getValue()||""},O=R.config.emailProtection||"";O&&"encode"!=O&&(K=N=void 0,O.replace(/^([^(]+)\(([^)]+)\)$/,function(k,j,l){K=j;N=[];l.replace(/[^,\s]+/g,function(b){N.push(b)})}));var V=R.lang.common,X=R.lang.link;return{title:X.title,minWidth:350,minHeight:230,contents:[{id:"info",label:X.info,title:X.info,elements:[{id:"linkType",type:"select",label:X.type,"default":"url",items:[[X.toUrl,"url"],[X.toAnchor,"anchor"],[X.toEmail,"email"]],onChange:function(){var k=this.getDialog(),j=["urlOptions","anchorOptions","emailOptions"],n=this.getValue(),m=k.definition.getContents("upload"),m=m&&m.hidden;"url"==n?(R.config.linkShowTargetTab&&k.showPage("target"),m||k.showPage("upload")):(k.hidePage("target"),m||k.hidePage("upload"));for(m=0;m<j.length;m++){var l=k.getContentElement("info",j[m]);l&&(l=l.getElement().getParent().getParent(),j[m]==n+"Options"?l.show():l.hide())}k.layout()},setup:function(b){b.type&&this.setValue(b.type)},commit:function(b){b.type=this.getValue()}},{type:"vbox",id:"urlOptions",children:[{type:"hbox",widths:["25%","75%"],children:[{id:"protocol",type:"select",label:V.protocol,"default":"http://",items:[["http://\u200e","http://"],["https://\u200e","https://"],["ftp://\u200e","ftp://"],["news://\u200e","news://"],[X.other,""]],setup:function(b){b.url&&this.setValue(b.url.protocol||"")},commit:function(b){b.url||(b.url={});b.url.protocol=this.getValue()}},{type:"text",id:"url",label:V.url,required:!0,onLoad:function(){this.allowOnChange=!0},onKeyUp:function(){this.allowOnChange=!1;var k=this.getDialog().getContentElement("info","protocol"),j=this.getValue(),m=/^((javascript:)|[#\/\.\?])/i,l=/^(http|https|ftp|news):\/\/(?=.)/i.exec(j);l?(this.setValue(j.substr(l[0].length)),k.setValue(l[0].toLowerCase())):m.test(j)&&k.setValue("");this.allowOnChange=!0},onChange:function(){if(this.allowOnChange){this.onKeyUp()}},validate:function(){var b=this.getDialog();return b.getContentElement("info","linkType")&&"url"!=b.getValueOf("info","linkType")?!0:/javascript\:/.test(this.getValue())?(alert(V.invalidValue),!1):this.getDialog().fakeObj?!0:CKEDITOR.dialog.validate.notEmpty(X.noUrl).apply(this)},setup:function(b){this.allowOnChange=!1;b.url&&this.setValue(b.url.url);this.allowOnChange=!0},commit:function(b){this.onChange();b.url||(b.url={});b.url.url=this.getValue();this.allowOnChange=!1}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().show()}},{type:"button",id:"browse",hidden:"true",filebrowser:"info:url",label:V.browseServer}]},{type:"vbox",id:"anchorOptions",width:260,align:"center",padding:0,children:[{type:"fieldset",id:"selectAnchorText",label:X.selectAnchor,setup:function(b){0<b.anchors.length?this.getElement().show():this.getElement().hide()},children:[{type:"hbox",id:"selectAnchor",children:[{type:"select",id:"anchorName","default":"",label:X.anchorName,style:"width: 100%;",items:[[""]],setup:function(k){this.clear();this.add("");for(var j=0;j<k.anchors.length;j++){k.anchors[j].name&&this.add(k.anchors[j].name)}k.anchor&&this.setValue(k.anchor.name);(k=this.getDialog().getContentElement("info","linkType"))&&"email"==k.getValue()&&this.focus()},commit:function(b){b.anchor||(b.anchor={});b.anchor.name=this.getValue()}},{type:"select",id:"anchorId","default":"",label:X.anchorId,style:"width: 100%;",items:[[""]],setup:function(k){this.clear();this.add("");for(var j=0;j<k.anchors.length;j++){k.anchors[j].id&&this.add(k.anchors[j].id)}k.anchor&&this.setValue(k.anchor.id)},commit:function(b){b.anchor||(b.anchor={});b.anchor.id=this.getValue()}}],setup:function(b){0<b.anchors.length?this.getElement().show():this.getElement().hide()}}]},{type:"html",id:"noAnchors",style:"text-align: center;",html:'<div role="note" tabIndex="-1">'+CKEDITOR.tools.htmlEncode(X.noAnchors)+"</div>",focus:!0,setup:function(b){1>b.anchors.length?this.getElement().show():this.getElement().hide()}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}},{type:"vbox",id:"emailOptions",padding:1,children:[{type:"text",id:"emailAddress",label:X.emailAddress,required:!0,validate:function(){var b=this.getDialog();return !b.getContentElement("info","linkType")||"email"!=b.getValueOf("info","linkType")?!0:CKEDITOR.dialog.validate.notEmpty(X.noEmail).apply(this)},setup:function(b){b.email&&this.setValue(b.email.address);(b=this.getDialog().getContentElement("info","linkType"))&&"email"==b.getValue()&&this.select()},commit:function(b){b.email||(b.email={});b.email.address=this.getValue()}},{type:"text",id:"emailSubject",label:X.emailSubject,setup:function(b){b.email&&this.setValue(b.email.subject)},commit:function(b){b.email||(b.email={});b.email.subject=this.getValue()}},{type:"textarea",id:"emailBody",label:X.emailBody,rows:3,"default":"",setup:function(b){b.email&&this.setValue(b.email.body)},commit:function(b){b.email||(b.email={});b.email.body=this.getValue()}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}}]},{id:"target",requiredContent:"a[target]",label:X.target,title:X.target,elements:[{type:"hbox",widths:["50%","50%"],children:[{type:"select",id:"linkTargetType",label:V.target,"default":"notSet",style:"width : 100%;",items:[[V.notSet,"notSet"],[X.targetFrame,"frame"],[X.targetPopup,"popup"],[V.targetNew,"_blank"],[V.targetTop,"_top"],[V.targetSelf,"_self"],[V.targetParent,"_parent"]],onChange:i,setup:function(b){b.target&&this.setValue(b.target.type||"notSet");i.call(this)},commit:function(b){b.target||(b.target={});b.target.type=this.getValue()}},{type:"text",id:"linkTargetName",label:X.targetFrameName,"default":"",setup:function(b){b.target&&this.setValue(b.target.name)},commit:function(b){b.target||(b.target={});b.target.name=this.getValue().replace(/\W/gi,"")}}]},{type:"vbox",width:"100%",align:"center",padding:2,id:"popupFeatures",children:[{type:"fieldset",label:X.popupFeatures,children:[{type:"hbox",children:[{type:"checkbox",id:"resizable",label:X.popupResizable,setup:W,commit:T},{type:"checkbox",id:"status",label:X.popupStatusBar,setup:W,commit:T}]},{type:"hbox",children:[{type:"checkbox",id:"location",label:X.popupLocationBar,setup:W,commit:T},{type:"checkbox",id:"toolbar",label:X.popupToolbar,setup:W,commit:T}]},{type:"hbox",children:[{type:"checkbox",id:"menubar",label:X.popupMenuBar,setup:W,commit:T},{type:"checkbox",id:"fullscreen",label:X.popupFullScreen,setup:W,commit:T}]},{type:"hbox",children:[{type:"checkbox",id:"scrollbars",label:X.popupScrollBars,setup:W,commit:T},{type:"checkbox",id:"dependent",label:X.popupDependent,setup:W,commit:T}]},{type:"hbox",children:[{type:"text",widths:["50%","50%"],labelLayout:"horizontal",label:V.width,id:"width",setup:W,commit:T},{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:X.popupLeft,id:"left",setup:W,commit:T}]},{type:"hbox",children:[{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:V.height,id:"height",setup:W,commit:T},{type:"text",labelLayout:"horizontal",label:X.popupTop,widths:["50%","50%"],id:"top",setup:W,commit:T}]}]}]}]},{id:"upload",label:X.upload,title:X.upload,hidden:!0,filebrowser:"uploadButton",elements:[{type:"file",id:"upload",label:V.upload,style:"height:40px",size:29},{type:"fileButton",id:"uploadButton",label:V.uploadSubmit,filebrowser:"info:url","for":["upload","upload"]}]},{id:"advanced",label:X.advanced,title:X.advanced,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",id:"advId",requiredContent:"a[id]",label:X.id,setup:U,commit:S},{type:"select",id:"advLangDir",requiredContent:"a[dir]",label:X.langDir,"default":"",style:"width:110px",items:[[V.notSet,""],[X.langDirLTR,"ltr"],[X.langDirRTL,"rtl"]],setup:U,commit:S},{type:"text",id:"advAccessKey",requiredContent:"a[accesskey]",width:"80px",label:X.acccessKey,maxLength:1,setup:U,commit:S}]},{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",label:X.name,id:"advName",requiredContent:"a[name]",setup:U,commit:S},{type:"text",label:X.langCode,id:"advLangCode",requiredContent:"a[lang]",width:"110px","default":"",setup:U,commit:S},{type:"text",label:X.tabIndex,id:"advTabIndex",requiredContent:"a[tabindex]",width:"80px",maxLength:5,setup:U,commit:S}]}]},{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:X.advisoryTitle,requiredContent:"a[title]","default":"",id:"advTitle",setup:U,commit:S},{type:"text",label:X.advisoryContentType,requiredContent:"a[type]","default":"",id:"advContentType",setup:U,commit:S}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:X.cssClasses,requiredContent:"a(cke-xyz)","default":"",id:"advCSSClasses",setup:U,commit:S},{type:"text",label:X.charset,requiredContent:"a[charset]","default":"",id:"advCharset",setup:U,commit:S}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:X.rel,requiredContent:"a[rel]","default":"",id:"advRel",setup:U,commit:S},{type:"text",label:X.styles,requiredContent:"a{cke-xyz}","default":"",id:"advStyles",validate:CKEDITOR.dialog.validate.inlineStyle(R.lang.common.invalidInlineStyle),setup:U,commit:S}]}]}]}],onShow:function(){var k=this.getParentEditor(),j=k.getSelection(),l=null;(l=g.getSelectedLink(k))&&l.hasAttribute("href")?j.getSelectedElement()||j.selectElement(l):l=null;this.setupContent(d.apply(this,[k,l]))},onOk:function(){var y={},x=[],w={},v=this.getParentEditor();this.commitContent(w);switch(w.type||"url"){case"url":var u=w.url&&void 0!=w.url.protocol?w.url.protocol:"http://",r=w.url&&CKEDITOR.tools.trim(w.url.url)||"";y["data-cke-saved-href"]=0===r.indexOf("/")?r:u+r;break;case"anchor":u=w.anchor&&w.anchor.id;y["data-cke-saved-href"]="#"+(w.anchor&&w.anchor.name||u||"");break;case"email":var s=w.email,u=s.address;switch(O){case"":case"encode":var r=encodeURIComponent(s.subject||""),q=encodeURIComponent(s.body||""),s=[];r&&s.push("subject="+r);q&&s.push("body="+q);s=s.length?"?"+s.join("&"):"";if("encode"==O){for(var q=u.length,n=[],p=0;p<q;p++){r=u.charCodeAt(p),n.push(r)}u=["javascript:void(location.href='mailto:'+","String.fromCharCode("+n.join(",")+")"];s&&u.push("+'",t(s),"'");u.push(")")}else{u=["mailto:",u,s]}break;default:u=u.split("@",2);s.name=u[0];s.domain=u[1];r=N;u=[K,"("];for(p=0;p<r.length;p++){q=r[p].toLowerCase(),n=s[q],0<p&&u.push(","),u.push("'",n?t(encodeURIComponent(s[q])):"","'")}u.push(")");u=["javascript:",u.join("")]}y["data-cke-saved-href"]=u.join("")}if(w.target){if("popup"==w.target.type){for(var u=["window.open(this.href, '",w.target.name||"","', '"],m="resizable status location toolbar menubar fullscreen scrollbars dependent".split(" "),r=m.length,s=function(b){w.target[b]&&m.push(b+"="+w.target[b])},q=0;q<r;q++){m[q]+=w.target[m[q]]?"=yes":"=no"}s("width");s("left");s("height");s("top");u.push(m.join(","),"'); return false;");y["data-cke-pa-onclick"]=u.join("");x.push("target")}else{"notSet"!=w.target.type&&w.target.name?y.target=w.target.name:x.push("target"),x.push("data-cke-pa-onclick","onclick")}}w.adv&&(u=function(k,j){var b=w.adv[k];b?y[j]=b:x.push(j)},u("advId","id"),u("advLangDir","dir"),u("advAccessKey","accessKey"),w.adv.advName?y.name=y["data-cke-saved-name"]=w.adv.advName:x=x.concat(["data-cke-saved-name","name"]),u("advLangCode","lang"),u("advTabIndex","tabindex"),u("advTitle","title"),u("advContentType","type"),u("advCSSClasses","class"),u("advCharset","charset"),u("advStyles","style"),u("advRel","rel"));u=v.getSelection();y.href=y["data-cke-saved-href"];if(this._.selectedElement){v=this._.selectedElement;r=v.data("cke-saved-href");s=v.getHtml();v.setAttributes(y);v.removeAttributes(x);w.adv&&w.adv.advName&&CKEDITOR.plugins.link.synAnchorSelector&&v.addClass(v.getChildCount()?"cke_anchor":"cke_anchor_empty");if(r==s||"email"==w.type&&-1!=s.indexOf("@")){v.setHtml("email"==w.type?w.email.address:y["data-cke-saved-href"]),u.selectElement(v)}delete this._.selectedElement}else{u=u.getRanges()[0],u.collapsed&&(v=new CKEDITOR.dom.text("email"==w.type?w.email.address:y["data-cke-saved-href"],v.document),u.insertNode(v),u.selectNodeContents(v)),v=new CKEDITOR.style({element:"a",attributes:y}),v.type=CKEDITOR.STYLE_INLINE,v.applyToRange(u),u.select()}},onLoad:function(){R.config.linkShowAdvancedTab||this.hidePage("advanced");R.config.linkShowTargetTab||this.hidePage("target")},onFocus:function(){var b=this.getContentElement("info","linkType");b&&"url"==b.getValue()&&(b=this.getContentElement("info","url"),b.select())}}});