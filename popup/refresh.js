
document.getElementById("refresh").addEventListener("click", refreshNow);

function getCurrentWindowTabs() {
  return browser.tabs.query({currentWindow: true});
}

function refreshNow(){
	getCurrentWindowTabs().then(tabs => {
        for(var i=0; i<tabs.length; i++){
          browser.tabs.reload(tabs[i].id, {bypassCache: false});
        }
      });
}
