

var _tcVastTag = typeof tcVastOSTag !== "undefined" ? tcVastOSTag : '';
(function () {
    /*!
       YAAS Player
       Copyright (c) 2023, YAAS Player, Performoo, All Rights Reserved
       This source code and its use and distribution is subject to the terms
       and conditions of the applicable license agreement.
       https://media-b.performoo.com/tos/performoo-terms-of-services-mar172021.html
       This product includes portions of other software. For the EULA (End User Level Agreement) see ..
       https://media-b.performoo.com/eula/performoo-eula-dec292021.html
    */

    var loadTag = function (params){
        var TC_ERROR = "Error"
        var TC_ERROR_NO_SLOT = "Error_NoSlot"
        var tcYaas={setup:function setup(i){var src=i.playerURL,d=document,w=window;i.playInCurrentFrame||(d=top.document,w=top),i.config&&i.config.isMonitoring&&!i.tagTriggerAttempt&&this.captureEvent(i,"Session"),i.tagtriggerTime=(new Date).getTime();var perfSlotSelectorList=i.slotSelector;!i.slotSelector instanceof Array&&(perfSlotSelectorList=[i.slotSelector]),perfSlotSelectorList=perfSlotSelectorList.filter(e=>!!e.selector&&e.selector.length>0);var hooks=i.config.hooks||[],hook=hooks.find(e=>1==e.type),newAdSlotEle=d.createElement("div");if(newAdSlotEle.setAttribute("id",i.adSlotId),hook&&hook.data){hook.data=hook.data.replace("[HOOK]",i.adSlotId),eval(hook.data);var pfRefNode=TC_YAAS["hook1_"+i.adSlotId]();if(pfRefNode){var adSlotEle=d.getElementById(i.adSlotId);adSlotEle&&adSlotEle.parentNode.removeChild(adSlotEle),pfRefNode.parentNode.insertBefore(newAdSlotEle,pfRefNode.nextSibling),loadScript()}}else if(perfSlotSelectorList&&perfSlotSelectorList.length>0){var adSlotEle=d.getElementById(i.adSlotId);adSlotEle&&adSlotEle.parentNode.removeChild(adSlotEle);var counter=0,pfWaitTime=2*(i?.config.slot?.waitTime||3),querySelectorInterval=setInterval(function(){for(var e of perfSlotSelectorList){var t=e.selector,o=e.index,r=d.querySelectorAll(t);if(r&&r.length>o){clearInterval(querySelectorInterval);var a=r[o=o?parseInt(o):0];a.parentNode.insertBefore(newAdSlotEle,a.nextSibling),loadScript();break}}++counter>pfWaitTime&&(window.clearInterval(querySelectorInterval),slotNotFoundHandler())},500)}else d.getElementById(i.adSlotId)?loadScript():(self===top||i.playInCurrentFrame||window.frameElement.parentNode.appendChild(newAdSlotEle),loadScript());function slotNotFoundHandler(){if(!0===i?.config.slot?.ifNotFound?.slider?.enable)return newAdSlotEle.setAttribute("data-yaas-slider","1"),d.body.appendChild(newAdSlotEle),void loadScript();tcYaas.captureError(TC_ERROR_NO_SLOT,tcYaasConfig,"TCPlayer: Slot position selector not found")}function loadScript(){if(d.getElementById(i.adSlot)){var e=function(){w.TC_YAAS.setupVastOS({i:i,tag:i.vastTag,src:src})},t=d.createElement("script");t.async=1,t.src=src+"/tcInitVast.js",t.onload=e,t.onreadystatechange=e,d.head.appendChild(t)}else tcYaas.captureError(TC_ERROR_NO_SLOT,tcYaasConfig,"TCPlayer: Ad Slot not found")}},captureError:function(e,t,o){console.error("TCPlayer Error: ",o),this.captureEvent(t,e,{errorMessage:o})},captureEvent:function(e,t,o){if(e.ed){var r,a={...o,...(r=document.createElement("a"),r.href=document.referrer,{srcURL:function(e){if(!e)return e;var t=e.split(".");return t.size<3?e:e.includes("google")?t.slice(t.length-2).join("."):e}(self===top?encodeURIComponent(window.location.hostname):r.hostname),purl:window.location.href.split("?")[0],refURL:document.referrer.split("?")[0]}),action:t,event:"adtag",ed:e.ed,cacheBuster:(new Date).getTime(),tzOffset:(new Date).getTimezoneOffset()};if(e.trackBaseURL)(new Image).src=e.trackBaseURL+"?"+function(e){var t=[];for(var o in e)t.push(o+"="+e[o]);return t.join("&")}(a)}}};
        var tcYaasConfig = {
            trackBaseURL: 'https://trac-b0.performoo.com/capture',
            slotSelector: [],
            env:"b",
            ed:"3BRsqtVZBLO+2W2QvZcRpTeKFevePJ5FdBDfU+0oMS4NWGOFFb/TXnlArGxTHZn1Vj60SU1/cmMWdhOTko7VIxEjJjdB3aI4/xtjjgHh70k=",
            config: {"hooks":[{"type":"JS","frequency":{"type":"RANDOM","value":101.0},"data":"let ele = document.createElement(\"img\");\n      ele.setAttribute(\"src\", \"https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=\");\n        ele.setAttribute(\"height\",\"400\")      \n        ele.setAttribute(\"width\",\"400\")   \nele.setAttribute(\"backgroundColor\",\"red\")\ndocument.body.appendChild(ele);"}],"isMonitoring":true,"slot":{}},
        }

        try {
                tcYaas.setup({...tcYaasConfig, ...params, adSlot: params.adSlotId})
        } catch (e) {
            console.error("TC Error: ",e)
            tcYaas.captureError(TC_ERROR, tcYaasConfig, e.message)
        }
    }

    var adSlotId = 'pf-vastos-d1NBVyuZ-' + new Date().getTime();
    document.write("<div id='" + adSlotId + "'></div>");
    var param = {
        adSlotId: adSlotId,
        vastTag: _tcVastTag,
        netDataURL: 'https://tags3-b.performoo.com/dXtIUTyJ/data.json',
        netId: "dXtIUTyJ",
        tagId: "d1NBVyuZ",
        auId: "",
        labelTagId: "",
        tSrc: "s3",
        playerURL: "http://localhost:8082"
    }
    param.playInCurrentFrame = !((document.body.clientWidth <= 1) || (window.frameElement && parseInt(window.frameElement.width) <=1));
    var w=top;param.playInCurrentFrame&&(w=window);try{w.document}catch(a){param.playInCurrentFrame=!0,w=window}w.TC_YAAS||(w.TC_YAAS={}),"undefined"!=typeof tcGamMacroClick&&(param.gamMacros={click:tcGamMacroClick}),w.TC_YAAS[adSlotId]={loadTag:loadTag,params:{...param}},loadTag(param);
}())
