
export default () => {
    // Start tabs.js
    (function() {
        var tabs = function(options) {

        var el = document.querySelector(options.el);
        var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
        var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
        var activeIndex = 0;
        var initCalled = false;


        var init = function() {
            if (!initCalled) {
            initCalled = true;
            el.classList.remove('no-js');

            for (var i = 0; i < tabNavigationLinks.length; i++) {
                var link = tabNavigationLinks[i];
                handleClick(link, i);
            }
            }
        };

        var handleClick = function(link, index) {
            link.addEventListener('click', function(e) {
            e.preventDefault();
            goToTab(index);
            });
        };

        var goToTab = function(index) {
            if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
            tabNavigationLinks[activeIndex].classList.remove('_current');
            tabNavigationLinks[index].classList.add('_current');
            tabContentContainers[activeIndex].classList.remove('_active');
            tabContentContainers[index].classList.add('_active');
            activeIndex = index;
            }
        };


        return {
            init: init,
            goToTab: goToTab
        };

        };

        window.tabs = tabs;

    })();
  // End tabs.js

    const tabInit = document.querySelectorAll('.--tab-one');
    tabInit.forEach(n => {
        var myTabs1 = tabs({
            el: '.--tab-one',
            tabNavigationLinks: '.nav-tab__item .btn_tab',
            tabContentContainers: '.body-tab__item'
        });

        myTabs1.init();
    });

}


