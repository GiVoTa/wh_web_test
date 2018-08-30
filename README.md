# wh_web_test
 I have included the node_modules folder for ease of setup after pulling, as there was one dependency problem because of a package's version.
 
## Make sure that the local system running the tests has node.js and npm!
 
 To run the tests, first initialize the selenium standalone sever with:
 
 ```
 java -jar -Xmx1024 -Dwebdriver.chrome.driver=./node_modules/chromedriver/bin/chromedriver selenium-sever-standalone-3.5.3.jar
 ```
 
 Afterward, simply run the wdio test manager command (make sure you are in the root folder of the project)
 
 ```
 ./node_modules/.bin/wdio wdio.conf.js
 ```
 
 ## Reports
 To see results of the tests, run the following command from the root folder
 ```
 ./node_modules/mochawesome-report-generator/bin/cli.js mocha_output/wdiomochawesome.json
 ```
 and access the wdiomochawesome.html report in the newly created mochawesome-report folder.
