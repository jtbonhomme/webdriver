var webdriver = require('selenium-webdriver');

/* DOES NOT WORK : SERVER SHALL BE LAUNCH MANUALLY

var SeleniumServer = require('selenium-webdriver/remote');

// start selenim server
var server = new SeleniumServer({
  jar: '.', // path to selenium-server-standalone-2.32.0.jar
  port: 4444
});

server.start();
*/

// create webdriver
console.log('Create driver');
var driver = new webdriver.Builder().
   usingServer('http://localhost:4444/wd/hub').
   withCapabilities({'browserName': 'chrome'}).
   build();

// start driver on desired webpage
console.log("Open 10.0.2.233");
driver.get('http://10.0.2.233')
/*  .then(function(){
    console.log("Find main element");
    return driver.findElement(webdriver.By.id('main'));
  })
  .then(function(){
    console.log("Wait 5s");
    return webdriver.promise.delayed(5000);
  })
  .then(function(){
    console.log("Find localTime element");
    return driver.findElement(webdriver.By.id('localTime'));
  })
  .then(function(localTime){
    console.log("Found localTime");
    var value = localTime.getAttribute('value');
    console.log('Value : ' + JSON.stringify(value));
  })*/
  .then(function(){
    console.log("Wait 25s ... ");
    return webdriver.promise.delayed(25000);
  })
  .then(function(){
    console.log("Send F7 (ZOOM key) to launch details view");
    // driver.findElement(webdriver.By.id("main")).sendKeys(webdriver.Key.F7);
    //driver.findElement(webdriver.By.id("main")).sendKeys("\uE037");
    return driver.executeScript("console.log('Seems like I hacked the matrix'); \
      var e = document.createEvent('Event'); \
      e.initEvent('keypress', true, true); \
      e.keyCode = 118; \
      document.dispatchEvent(e); \
      console.log('Code F7/118 sent');");
  })
  .then(function(){
    console.log("Wait 15s ... open the inspector !");
    return webdriver.promise.delayed(25000);
  })
  .then(function(){
    driver.quit();
  });


