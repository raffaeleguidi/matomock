var http = require('http');

const port = parseInt(process.env.PORT || "80");

const mockPiwikJs = `Piwik = {
  getTracker: function(){ // piwik is disabled
    return {
      trackPageView: function(){},
      enableJSErrorTracking: function(){},
      trackAllContentImpressions: function(){},
      enableJSErrorTracking: function(){},
      setCustomVariable: function(){},
      getVisitorId: function(){},
      trackEvent: function(){},
      getSiteId: function(){}
    }
  }
}
`
/* above mockPiwikJs is a compatibility layer designed to work with scripts like this:
<!-- booklyng piwik code -->
<script type="text/javascript" id="" src="//localhost:8080/piwik.js"></script>
<script type="text/javascript" id="">_sp_piwikTracker=Piwik.getTracker("//localhost:8080/piwik.php",4);_sp_piwikTracker.trackPageView();_sp_piwikTracker.enableJSErrorTracking();_sp_piwikTracker.trackAllContentImpressions();</script>
<noscript><p><img src="//localhost:8080/piwik.php?idsite=4" style="border:0;" alt=""></p></noscript>
<!-- end booklyng piwik code -->
</noscript>
*/

http.createServer(function (req, res) {
  var url = req.url;
  if (url ==='/piwik.js') {
      res.write(mockPiwikJs); //write a response
      res.end(); //end the response
  } else {
    res.writeHead(204); //204 No Content - The server successfully processed the request and is not returning any content.[14]
    res.end(); //end the response
  }
}).listen(port); 

console.log("matomock - mock matomo (piwik) started on port", port)
