"use strict";var UWTabs=function(){var t=document.querySelectorAll("#tabs-tour-container");if(1<t.length)for(var e=0;e<t.length;e++)t[e].id="tabs-tour-container-"+e;var n=document.querySelectorAll(".tab-tour ul.nav-tabs");if(1<n.length){var r=Array.prototype.slice.call(n),a=r.map(function(t){return t.id}),l=r.filter(function(e){return 1<a.filter(function(t){return t===e.id}).length});if(0!==l.length)for(var i=l[0].id,o=0;o<n.length;o++)if(i===n[o].id){n[o].id=i+"-"+o;for(var c=n[o].getElementsByClassName("nav-link"),u=0;u<c.length;u++)c[u].id="title-"+i+"-"+o+"-"+u,c[u].href="#content-"+i+"-"+o+"-"+u,c[u].setAttribute("aria-controls","content-"+i+"-"+o+"-"+u);n[o].parentElement.getElementsByClassName("tab-content")[0].id="tab-content-"+i+"-"+o;for(var s=n[o].parentElement.getElementsByClassName("tab-pane"),f=0;f<s.length;f++)s[f].id="content-"+i+"-"+o+"-"+f,s[f].setAttribute("aria-labelledby","title-"+i+"-"+o+"-"+f)}}document.querySelectorAll(".tab-tour").forEach(function(t){var s=Array.prototype.slice.call(t.querySelectorAll(".nav-link"));t.addEventListener("keydown",function(t){var e=t.target,n=t.which,r=35,a=36,l=39,i=40;if(i===n||l===n||37===n||38===n){t.preventDefault();var o=s.indexOf(e),c=l===n||i===n?1:-1,u=s.length;s[(o+u+c)%u].focus()}else switch(n){case r:t.preventDefault(),s[s.length-1].focus();break;case a:t.preventDefault(),s[0].focus()}})})};new UWTabs;