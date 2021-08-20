"use strict";UW.Image=Backbone.View.extend({RATIO:.8,template:'<div class="uw-overlay"><div></div><div class="wrapper" style="width:<%= width %>px; margin-top:-<%= height/2 %>px; margin-left:-<%= width/2 %>px;"><span class="close"> Close</span><img src="<%= src %>" alt="<%=alt %>" style="width:100%;" /><p><%= caption %></p></div></div>',templateVideo:'<div class="uw-overlay"><div></div><div class="wrapper" style="width:<%= width %>px; margin-top:-<%= height/2 %>px; margin-left:-<%= width/2 %>px;"><span class="close"> Close</span><iframe width="<%= width %>" height="<%= height %>" src="<%= src %>" style="border:0" allowfullscreen="" title="<%= caption %>"></iframe><p><%= caption %></p><p><%= credit %></p></div></div>',events:{click:function(t){if(t.preventDefault(),this.attrs=this.getAttributes(t),this.attrs.src)return this.fetchImage(),!1}},initialize:function(){_.bindAll(this,"fetchImage","overlay","render")},fetchImage:function(t){return $('<img src="'+this.attrs.src+'"/>').imagesLoaded(this.overlay),!1},overlay:function(t){var i,e=-1<this.attrs.rel.indexOf("uw-lightbox-video");if(e||!t.hasAnyBroken)return this.image=_.first(t.images),i=this.image.img.width/this.image.img.height,this.attrs.height=this.image.img.height,this.attrs.width=this.image.img.width,e&&(i=560/315,this.attrs.height=630,this.attrs.width=1120),this.attrs.height>this.RATIO*UW.$window.height()&&(this.attrs.height=this.RATIO*UW.$window.height(),this.attrs.width=i*this.attrs.height),this.attrs.width>this.RATIO*UW.$window.width()&&(this.attrs.width=this.RATIO*UW.$window.width(),this.attrs.height=this.attrs.width/i),this.render(),!1;this.attrs.src&&(window.location=this.attrs.src)},render:function(){return UW.$body.one("click",this.remove),"uw-lightbox-video"==this.attrs.rel?UW.$body.append(_.template(this.templateVideo)(this.attrs)):UW.$body.append(_.template(this.template)(this.attrs))},remove:function(){return UW.$body.find(".uw-overlay").remove(),!1},getAttributes:function(t){var i=$(t.currentTarget),e=i.parent("a").siblings(".wp-caption-text").html();if(!e){var s=i.parent("a").parent(".gallery-icon");s&&(e=s.siblings(".wp-caption-text").text())}return{src:i.parent("a").attr("href")?i.parent("a").attr("href"):"",alt:i.attr("alt"),rel:i.parent("a").attr("rel")?i.parent("a").attr("rel"):"",caption:e}}});