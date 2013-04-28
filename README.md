## Installation

### Install selenium-driver from NPM

    % npm install selenium-webdriver

### Download Selenium server

    % curl http://selenium.googlecode.com/files/selenium-server-standalone-2.32.0.jar

### Download chromedriver

    % mv chromedriver2_mac32_0.8 /usr/local
    ln -s /usr/local/chromedriver2_mac32_0.8/chromedriver /usr/local/bin/chromedriver

Note: /usr/local/bin shall be in our path

### Start Selenium server

     % java -jar selenium-server-standalone-2.21.0.jar -Dwebdriver.chrome.driver=/usr/local/bin/chromedriver

## Run test

    % node run_driver.js


