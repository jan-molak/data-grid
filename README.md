# DataGrid

DataGrid is a simple [angular.js](http://angularjs.org/) app that demonstrates how Google Drive api can be used.

## Live Application
Live app can be accessed at http://datagrid.smartcodeltd.co.uk/, 
the spreadsheet that's acting as its datasource lives on [Google Drive here](https://docs.google.com/spreadsheet/ccc?key=0AsGCguxC1yoSdHNKZm1lSW5CbGdwTUF1amdiSC01dXc&usp=sharing) 
and allows the data to be modified without having to sign in. You're of course welcome to edit it, but please don't mess it up too much ;-)

Please bear in mind that even though the application queries the Google Drive API every 500ms,
Google Drive API only refreshes its cashes once every 5 minutes. An instantaneous refresh can be triggered upon request,
this however would require you to be signed in and manually requesting re-publishing.

I don't personally see this as a big problem for a simple test app that doesn't need to present near real-time updates. 
In a production system you'd probably want to use node.js and socket.io instead of a Google Spreadsheet anyway :)

## System Metaphor

<img align="right" width="340" src="http://upload.wikimedia.org/wikipedia/commons/1/13/Women_in_Waldorf-Astoria.jpg" alt="Reading the Stock Ticker Tape" /> 
In the olden days, when computers where not as popular as they are today (think late 19th century), 
people used to perform tasks that today would be given to a computer.

One such task was updating the Chalk Board listing Stock Market prices in broker’s offices.

A Clerk would use her Ticker Tape Machine to get an update on the latest prices. 
Once there's an update she'd write down the latest prices on a piece of paper, 
give it to a Runner who'd then go to his broker's office and update their Chalk Board.

This might be oversimplifying things a lot, and I admit that I wasn't around in the late 19th century, 
but it makes for a decent metaphor ;) 

You can find more details on chalk boards, runners, etc. on [Wikipedia](http://en.wikipedia.org/wiki/Stock_market_data_systems#Chalk_boards)).

## Architecture

The application uses an MVC pattern and the above metaphor is reflected in the following piece of code 
you'll find in the *["preview" controller](src/scripts/controllers/preview.js)*:

```
stockTickerClerk.getTheLatestUpdate().then(ifTheDataHasChanged(function(newMarketData) {
    updateTheGridWith(newMarketData);
}));
```

Since updating a Chalk Board (a.k.a. Data Grid) is a lot of work and takes time, it's only done `ifTheDataHasChanged`
(that's an implementation of the [Execute Around Pattern](http://c2.com/cgi/wiki?ExecuteAroundMethod)).

Also, instead of a Ticker Tape we're using a CSV file produced by Google Drive API, so our Clerk will need a simple pocket
translator, that will help her to translate the CSV format to something a person updating the Chalk Board would understand: JSON.

In [stockTickerClerk.js](src/scripts/services/stockTickerClerk.js) code you'll see that the Clerk 
uses her [spreadsheet](src/scripts/services/spreadsheet.js) 
and a handy pocket [csvConverter](src/scripts/services/csvConverter.js) to `translateToJSON()`:

```
getTheLatestUpdate: function() {
    return read(spreadsheet).then(translateToJSON());
}
```

Clerk object is basically a Two-Layer Service Gateway, where the backend ([Spreadsheet](src/scripts/services/spreadsheet.js))
returns the data from Google Drive API "as is" and the frontend ([Clerk](src/scripts/services/stockTickerClerk.js))
translates it to more domain-specific language that's understood by the rest of the application ([the Controller](src/scripts/controllers/preview.js)).

### Why retrieve a CSV instead of JSON from Google APIs?

1. CSV is much less data, so it can be transferred quicker (compare: [CSV 12KB]( https://docs.google.com/spreadsheet/pub?key=0AsGCguxC1yoSdHNKZm1lSW5CbGdwTUF1amdiSC01dXc&single=true&gid=0&output=csv), [JSON (lists) 135KB](https://spreadsheets.google.com/feeds/list/0AsGCguxC1yoSdHNKZm1lSW5CbGdwTUF1amdiSC01dXc/od6/public/values?alt=json-in-script&callback=myCallback), [JSON (cells) 594KB](https://spreadsheets.google.com/feeds/cells/0AsGCguxC1yoSdHNKZm1lSW5CbGdwTUF1amdiSC01dXc/od6/public/values?alt=json-in-script&callback=myCallback)).
2. We need to do the conversion anyway, so retrieving JSON doesn't give us any benefit.

### Where are the tests?

I'm glad that you asked! They're here: [test/unit](test/unit).
I've also defined a couple of custom Jasmine matchers, which you can find under [test/lib](test/lib).

## Running App Locally

After cloning the app you'll need to install the npm modules I'm using. You can do this locally by running:
```
npm install
```

Having done that you can now run the tests:
```
grunt clean test
```
which use Karma and PhantomJS by default. If you don't have PhantomJS installed, or prefer to use any other
browser, you can override the defaults by specifying:
```
grunt clean test --browsers Chrome
grunt clean test --browsers Firefox
grunt clean test --browsers Chrome,Firefox,PhantomJS
```

After running the test you'll find the coverage reports under:
```
target/coverage/
```
and test result reports under:
```
target/reports/
```

## Open Source Libraries Used

Application

1. angular-1.2.1
1. angular-md5.js
1. jquery-1.10.2.min.js
1. modernizr-2.6.2.min.js
1. ng-grid.js

Tests

1. angular-mocks-1.2.1 
1. jasmine-sinon-0.2.1
1. sinon-1.7.3

Build tools and test runners

1. grunt-0.4.1
1. grunt-cli-0.1.11
1. grunt-karma-0.6.2
1. grunt-contrib-watch-0.5.3
1. grunt-contrib-clean-0.5.0
1. grunt-contrib-jshint-0.7.1
1. karma-0.10.4
1. karma-coverage-0.1.2
1. karma-junit-reporter-0.1



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/jan-molak/data-grid/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

