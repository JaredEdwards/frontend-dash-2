# Solution 2 

1. Change into a directory of your choosing and then run 
  '$ git clone git@github.com:JaredEdwards/frontend-dash-2.git'
  
2. Run this command to see the state of the project at 6pm "git checkout eb401fcb36a018ee4769d084c1dbc4a4eddd2e5a"
  
3. Change into the new directory using '$ cd frontend-dash-2'

4. Once inside the directory run '$ npm install'

5. Upon completion of the installation, run '$ gulp'

6. Once the gulp task is completed run '$ cd dist'

7. Inside the dist directory run '$ http-server .'

8. Open a new browser window and navigate to 'http://localhost:8080/National'


# Front-End Developer Take-Home Coding Test

Morning Consult

Friday, June 15, 2017

## Description

This test will evaluate your ability to create a build process in Node.js that produces a Highcharts data presentation site with minimal guidance. The goal is to produce a 52-page site (homepage + 50 states + DC) that uses a Highcharts map for navigation and a Highcharts solid gauge chart to display poll results for a single CSV dataset.

You must use one or more Node.js build tool(s) / task runner(s) to compile the site, ideally Webpack, Gulp, NPM scripts, or Grunt. You should probably use a templating system like Handlebars to develop templates that can output the HTML. Use whatever you're most familiar or comfortable with.

Please do NOT modify the given assets by hand in any way -- i.e., adding a gradient to the image in Photoshop or manually converting the CSV to JSON and saving the JSON file in the repo. All transformations should take place during the build process.

Use the webfonts and hex colors located in the specifications file.

The files can be put on Github or zipped up and sent to us.

## Functionality

The final product should be a build system we can use to transform the given assets into HTML files ready for publishing, along with any necessary scripts and stylesheets. After compiling the site, we should be able to `cd` into the `/dist` directory, run `$ http-server .`, and be looking at a complete, navigable site with accurate charts for each state, DC, and national overall (the homepage).

We should be able to navigate from the homepage to a state page by clicking the state on the map. So, for example, clicking California should take us from localhost:8080/index.html to localhost:8080/CA.html. We should then see a map for California, and accurate data for California should be displayed in the solid gauge chart.

## Evaluation

We will either clone the repo or unzip the archive. If there are installation instructions, we will follow them exactly -- ideally, `$ npm install`, followed by a single command to start the build system. The application should work with minimal effort on our part. Assume the developer installing your application has some basic knowledge of the development environment.

This test will look for functionality as well as design, so make it as aesthetically as close to the mockup and usable as you can within the allotted timeframe. Also focus on the clarity and structure of your code and CSS.

Since Highcharts has a complex API and ships by default with a lot of extra features and cruft, we will be providing demos on CodePen & jsfiddle that you should use as a starting point, allowing you to skip some of the learning curve. You will probably need to consult the docs and look up examples for the click routing functionality, as well as to display states.

* Example solid gauge chart: https://codepen.io/mpopv/pen/rwWzER

* Example blank US map chart: http://jsfiddle.net/mattpopovich/7zvpmdna/3/

If you get stuck on a nonessential part of the Highcharts API, don't worry, mastering Highcharts isn't really what we're looking for here -- just getting the core functionality up and running.

If you're not able to complete every aspect of the project in time, that's okay! Just hit as many of the functionality points as you can. Don't spend too long struggling over a small aspect if you get stuck.

## Resources

* Highcharts Docs: https://www.highcharts.com/docs

* Highcharts API Reference: http://api.highcharts.com/highcharts
