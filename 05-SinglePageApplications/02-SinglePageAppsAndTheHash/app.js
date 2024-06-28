window.addEventListener('hashchange', function() {
    if (this.window.location.hash === '#/bookmark/1') {
        console.log('Here is page 1');
    
    } else if (this.window.location.hash === '#/bookmark/2') {
        console.log('Here is page 2');
    
    } else if (this.window.location.hash === '#/bookmark/3') {
        console.log('Here is page 3');
    }
});