!function(e){function a(a){var t=a,n=t.attr("data-count");e({countNum:t.text()}).animate({countNum:n},{duration:2e3,easing:"linear",step:function(){t.text(Math.floor(this.countNum))},complete:function(){t.text(this.countNum)}})}e(document).ready(function(){function t(){var a=e(this).scrollTop()+.8*u,t=e(this).scrollTop()+.2*u;n.each(function(){var n=e(this).offset().top,u=n+e(this).outerHeight();(a>=n&&a<=u||t>=n&&t<=u)&&($el=e(this),e($el).trigger("animate-sequence"))})}if(e(".js-resultsAnimate").length){var n=e(".js-resultsAnimate"),u=e(window).height(),s=500,r=500,i=[120,15],o=e(".js-resultsRadialGraph1"),d=e(".js-resultsRadialGraph2"),c=e(".js-resultsRadialGraph3"),l=e(".js-resultsRadialGraph4"),p=e(".js-resultsRadialGraphCounter1"),h=e(".js-resultsRadialGraphCounter2"),B=e(".js-resultsRadialGraphCounter3"),m=e(".js-resultsRadialGraphCounter4");e(o).one("animate-sequence",function(){o.addClass("graphRadial-play").delay(1e3).queue(function(e){d.addClass("graphRadial-play"),a(h)}),a(p)}),e(c).one("animate-sequence",function(){c.addClass("graphRadial-play").delay(1e3).queue(function(e){l.addClass("graphRadial-play"),a(m)}),a(B)});var y=e(".js-timeSavedBarGraph-bubble"),j=e(".js-timeSavedBarGraph-lineStart"),g=e(".js-timeSavedBarGraph-line-background"),G=e(".js-timeSavedBarGraphBar1"),q=e(".js-timeSavedBarGraphBar2"),f=e(".js-timeSavedBarGraphBar3"),v=e(".js-timeSavedBarGraphBar4"),w=e(".js-timeSavedBarGraphBar5"),R=[{e:e(".js-timeSavedBarGraphBar"),p:{width:0},o:{duration:0}},{e:y,p:{scale:0},o:{duration:0}},{e:y,p:{scale:0},o:{duration:10}},{e:j,p:{scale:0},o:{duration:0}},{e:j,p:{scale:0},o:{duration:10}},{e:j,p:{opacity:1},o:{duration:0}},{e:g,p:{top:"100%",right:"100%"},o:{duration:0}}];e.Velocity.RunSequence(R);var S=[{e:G,p:{width:60/611*100+"%"},o:{duration:1*s,easing:"easeOutBack"}},{e:q,p:{width:41/611*100+"%"},o:{duration:1*s,easing:"easeOutBack",delay:r/2,sequenceQueue:!1}},{e:f,p:{width:95/611*100+"%"},o:{duration:1*s,easing:"easeOutBack",delay:r/2,sequenceQueue:!1}},{e:v,p:{width:404/611*100+"%"},o:{duration:1*s,easing:"easeOutBack",delay:r/2,sequenceQueue:!1}},{e:w,p:{width:"100%"},o:{duration:1*s,easing:"easeOutBack",delay:r/2,sequenceQueue:!1}},{e:j,p:{scale:1},o:{duration:s,delay:r,easing:i}},{e:g,p:{top:0,right:0},o:{duration:s,easing:"easeOutBack",sequenceQueue:!1}},{e:y,p:{scale:1},o:{duration:s,easing:i,delay:.75*r,sequenceQueue:!1}}];e(".js-resultsAnimate-barGraph").one("animate-sequence",function(){e.Velocity.RunSequence(S)});var k=e(".js-paymentsBarGraphBar1"),O=e(".js-paymentsBarGraphBar2"),Q=e(".js-paymentsBarGraphBar3"),C=e(".js-paymentsBarGraphBar4"),b=e(".js-paymentsBarGraphBar5"),A=[{e:e(".js-paymentsBarGraphBar"),p:{width:0},o:{duration:0}}];e.Velocity.RunSequence(A);var N=[{e:k,p:{width:74/270*100+"%"},o:{duration:1*s,easing:"easeOutBack"}},{e:O,p:{width:155/270*100+"%"},o:{duration:1*s,easing:"easeOutBack",delay:r/2,sequenceQueue:!1}},{e:Q,p:{width:205/270*100+"%"},o:{duration:1*s,easing:"easeOutBack",delay:r/2,sequenceQueue:!1}},{e:C,p:{width:224/270*100+"%"},o:{duration:1*s,easing:"easeOutBack",delay:r/2,sequenceQueue:!1}},{e:b,p:{width:"100%"},o:{duration:1*s,easing:"easeOutBack",delay:r/2,sequenceQueue:!1}}];e(".js-resultsAnimate-paymentsBarGraph").one("animate-sequence",function(){e.Velocity.RunSequence(N)}),t(),e(window).on("scroll",function(){t()}),e(window).on("touchmove",function(){t()})}})}(jQuery);