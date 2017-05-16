(function(){

    var birthday = new Date(1993, 7, 3);
    var $  = document.getElementById.bind(document);
    var $$ = document.querySelectorAll.bind(document);

    var App = function($el){
        this.$el = $el;
        this.renderAgeLoop();
        this.renderTimeLoop();
    };

    App.fn = App.prototype;

    App.fn.renderAgeLoop = function(){
        this.interval = setInterval(this.renderAge.bind(this), 100);
    };

    App.fn.renderTimeLoop = function(){
        this.interval = setInterval(this.renderTime.bind(this), 100);
    };

    App.fn.renderAge = function(){

        var now       = new Date;
        var duration  = now - birthday;
        var years     = duration / 31556900000;
        var majorMinor = years.toFixed(9).toString().split('.');
        var newHTML = majorMinor[0] + "<sup>." + majorMinor[1] + "</sup>";

        requestAnimationFrame(function(){
            $('year').innerHTML = newHTML;
        }.bind(this));

    };

    App.fn.renderTime = function(){

        var now  = new Date;
        var hrs = now.getHours();
        var min = String(now.getMinutes());
        var sec = String(now.getSeconds());
        if( min.length === 1 ){ min = "0" + min }
        if( sec.length === 1 ){ sec = "0" + sec }
        var time = hrs + ":" + min +":" + sec;

        requestAnimationFrame(function(){
            $('time').innerHTML = time;
        }.bind(this));

    }

    App.fn.$$ = function(sel){
        return this.$el.querySelectorAll(sel);
    };

    window.app = new App($('app'))

})();
