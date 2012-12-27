var page = require('webpage').create();
page.viewportSize = { width: 1280 };
page.open('./output/index.html', function (status) {
    if (status !== 'success') {
        console.log('Unable to access the network!');
        
    } else {
        page.render('screenshot.png');
    }
    phantom.exit();
});
