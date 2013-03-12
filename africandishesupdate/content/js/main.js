function loaded() {
  document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    newLoc = location.href.substring(0, location.href.lastIndexOf("/")+1);
  // Initializating TabBar
  nativeControls = window.plugins.nativeControls;
  nativeControls.createTabBar();
  
  // Books tab
  nativeControls.createTabBarItem(
    "home",
    "Home",
    "/www/tabs/house.png",
    {"onSelect": function() {
         window.location.href="index.html";
        }
        });
  
  // Stats tab
  nativeControls.createTabBarItem(
    "mygroceries",
    "Grocery List",
    "/www/tabs/pencil.png",
    {"onSelect": function() {
        
         window.location.href="todo.html";
         
        }
        });
  
  // About tab
  nativeControls.createTabBarItem(
    "contact",
    "Contact",
    "/www/tabs/phone.png",
    {"onSelect": function() {
        if (location.href != (newLoc+"contact.html")) {
        $.mobile.changePage( newLoc+"contact.html", { transition: 'flip reverse', reloadPage: 'true' } );
        }
    }}
  );
  
  // Compile the TabBar
  nativeControls.showTabBar();
  nativeControls.showTabBarItems("home", "mygroceries", "contact");
  nativeControls.selectTabBarItem("home");

  
}