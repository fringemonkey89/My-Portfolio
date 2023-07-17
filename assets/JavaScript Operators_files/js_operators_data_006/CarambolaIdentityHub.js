
var IHPWT={}; //Initialize Namespace
var pbjs = window.Cbola_pbjs || {};
pbjs.que = pbjs.que || [];
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var gptRan = false;
IHPWT.jsLoaded = function(){ //PubMatic pwt.js on load callback is used to load GPT and Prebid
  loadPrebidAndGPT();
};
var loadPrebidAndGPT = function() {
  // Check the gptRan flag
  if (!gptRan) {
    gptRan = true;
    var gads = document.createElement('script');
    var useSSL = 'https:' == document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
    var pbjsEl = document.createElement("script");
    pbjsEl.type = "text/javascript";
    pbjsEl.async = true;
    pbjsEl.src = "https://cdata.carambo.la/Layer/InImage/Prod/cbola_platform/version_2.34.0/external_js/prebid.min.js"; //Your Prebid JS URL
    var pbjsTargetEl = document.getElementsByTagName("head")[0];
    pbjsTargetEl.insertBefore(pbjsEl, pbjsTargetEl.firstChild);
  }
};
// Failsafe to call prebid & gpt
setTimeout(loadPrebidAndGPT, 100);
 (function() {
   var purl = window.location.href;
   var url = '//ads.pubmatic.com/AdServer/js/pwt/156612/3210/'; //Replace with your publisher Id and profile Id
   var profileVersionId = '';
   if(purl.indexOf('pwtv=')>0){
     var regexp = /pwtv=(.*?)(&|$)/g;
     var matches = regexp.exec(purl);
     if(matches.length >= 2 && matches[1].length > 0){
       profileVersionId = '/'+matches[1];
     }
   }
   var wtads = document.createElement('script');
   wtads.async = true;
   wtads.type = 'text/javascript';
   wtads.src = url+profileVersionId+'/pwt.js';
   var node = document.getElementsByTagName('script')[0];
   node.parentNode.insertBefore(wtads, node);
 })();
