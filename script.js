function getAppCacheStatus () {
    var appCache = window.applicationCache;
    switch (appCache.status) {
                  case appCache.UNCACHED: // UNCACHED == 0
                    return 'UNCACHED';
                    break;
                  case appCache.IDLE: // IDLE == 1
                    return 'IDLE';
                    break;
                  case appCache.CHECKING: // CHECKING == 2
                    return 'CHECKING';
                    break;
                  case appCache.DOWNLOADING: // DOWNLOADING == 3
                    return 'DOWNLOADING';
                    break;
                  case appCache.UPDATEREADY:  // UPDATEREADY == 4
                    return 'UPDATEREADY';
                    break;
                  case appCache.OBSOLETE: // OBSOLETE == 5
                    return 'OBSOLETE';
                    break;
                  default:
                    return 'UKNOWN CACHE STATUS';
                    break;
                };
}


function addManifestTag () {
    var htmlTag = document.getElementsByTagName("HTML");
    htmlTag[0].setAttribute("manifest", "example.appcache");
    console.log("Tag selected: %O", htmlTag);
    window.applicationCache.update();
}

function showAppCacheStatus () {
    var status = getAppCacheStatus();
    console.log("appCache.Status: " + status);
}



// To programmatically check for updates to the manifest,
// first call applicationCache.update().
// This will attempt to update the user's cache
// (which requires the manifest file to have changed).
// Finally, when the applicationCache.status is in its UPDATEREADY
// state, calling applicationCache.swapCache() will swap
// the old cache for the new one.