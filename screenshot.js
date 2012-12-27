var page = require('webpage').create();
page.viewportSize = { width: 1280, height: 0 };
page.open('./output/index.html', function (status) {
    if (status !== 'success') {
        console.log('Unable to access the network!');
        
    } else {
    window.setTimeout(function () {
         page.render('screenshot.png');
         phantom.exit();
     }, 900);
    }
});
