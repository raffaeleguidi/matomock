# matomock
A dockerized mock service for matomo / piwik

## example usage
An example with docker-compose:

```
version: "3"
services:
  web:
    build: .
    image: raffaeleguidi/matomock
    ports:
      - 8080:80
    #environment:
    #  - PORT=80
  
```

## Example html
It works with both new and old piwik.js syntax (see example-site folder)

### new syntax

```
<!-- Matomo -->
<script type="text/javascript">
    var _paq = _paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['trackPageView']);
    _paq.push(['enableJSErrorTracking']);
    _paq.push(['enableLinkTracking']);
    (function() {
    var u="//localhost:8080/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
    })();
</script>
<!-- End Matomo Code -->
```

### old syntax

```
<!-- legacy piwik code -->
<script type="text/javascript" id="" src="//localhost:8080/piwik.js"></script>
<script type="text/javascript" id="">_sp_piwikTracker=Piwik.getTracker("//localhost:8080/piwik.php",4);_sp_piwikTracker.trackPageView();_sp_piwikTracker.enableJSErrorTracking();_sp_piwikTracker.trackAllContentImpressions();</script>
<noscript><p><img src="//localhost:8080/piwik.php?idsite=4" style="border:0;" alt=""></p></noscript>
<!-- end legacy piwik code -->
```

