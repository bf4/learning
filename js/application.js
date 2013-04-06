// load social sharing scripts if the page includes a Twitter "share" button
var _jsLoader = _jsLoader || {};

_jsLoader.getScript =  (function(src) {
    var script = document.createElement('script'); script.type = 'text/javascript'; script.async = true;
    script.src = src;
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s);
  });

_jsLoader.initTwitter = (function() {
    if (typeof (twttr) != 'undefined') {
      twttr.widgets.load();
    } else {
      _jsLoader.getScript('http://platform.twitter.com/widgets.js');
    }
});

_jsLoader.initFacebook = (function() {
    if (typeof (FB) != 'undefined') {
      FB.init({ status: true, cookie: true, xfbml: true });
    } else {
      _jsLoader.getScript("http://connect.facebook.net/en_US/all.js#xfbml=1", function () {
        FB.init({ status: true, cookie: true, xfbml: true });
      });
    }
});

_jsLoader.initGooglePlusOne = (function() {
    if (typeof (gapi) != 'undefined') {
      $(".g-plusone").each(function () {
        gapi.plusone.render($(this).get(0));
      });
    } else {
      _jsLoader.getScript('https://apis.google.com/js/plusone.js');
    }
});

_jsLoader.loadSocial = (function() {
  _jsLoader.initTwitter();
  _jsLoader.initFacebook();
  _jsLoader.initGooglePlusOne();
});
