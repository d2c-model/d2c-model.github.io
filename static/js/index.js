window.HELP_IMPROVE_VIDEOJS = false;


let tabsWithContent = (function () {
  let tabs = document.querySelectorAll('.tabs li');

  let attrs = ["blond", 
               "lipstick",
               "beard"];

  let deactvateAllTabs = function () {
    tabs.forEach(function (tab) {
      tab.classList.remove('is-active');
    });
  };

  let activateTabsContent = function (tab) {
    let tabId = getIndex(tab);

    document.getElementById(attrs[0]).setAttribute('hidden', true);
    document.getElementById(attrs[1]).setAttribute('hidden', true);
    document.getElementById(attrs[2]).setAttribute('hidden', true);
    
    
    document.getElementById(attrs[tabId]).removeAttribute("hidden");

    // for (i = 0; i < attrs.length; i++) {
    //   alert(tabId == i);
    // }
  };

  let getIndex = function (el) {
    return [...el.parentElement.children].indexOf(el);
  };

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      deactvateAllTabs();
      tab.classList.add('is-active');
      activateTabsContent(tab);
    });
  })

  tabs[0].click();
});


$(document).ready(function() {

  tabsWithContent();

})

