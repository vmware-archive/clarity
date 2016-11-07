(function(win) {
    win.$clr = (function(){
        var $clr = function(elemSelector){
                if (typeof elemSelector !== 'string') {
                    // I passed just an element into this...
                    return new $clrWrapper([elemSelector]);
                }
                return new $clrWrapper(document.querySelectorAll(elemSelector));
            },
            $clrWrapper = function(els) {
                this.collection = els;
                return this;
            };

        $clr.fn = $clrWrapper.prototype = {
            addClass: function(className) {
                var els = this.collection;
                for (var i = 0, len = els.length; i < len; i++) {
                    var thisEl = els[i];
                    var classnameArray = thisEl.className.split(' ');

                    if (classnameArray.indexOf(className) < 0) {
                        classnameArray.push(className);
                        thisEl.className = classnameArray.join(' ');
                    }
                }
                return this;
            },
            removeClass: function(className) {
                var els = this.collection;
                for (var i = 0, len = els.length; i < len; i++) {
                    var thisEl = els[i];
                    var classnameArray = thisEl.className.split(' ');
                    var indexOfClassname = classnameArray.indexOf(className);

                    while (indexOfClassname > -1) {
                        classnameArray.splice(indexOfClassname, 1);
                        indexOfClassname = classnameArray.indexOf(className);
                    }

                    thisEl.className = classnameArray.join(' ');
                }
                return this;
            },
            hasClass: function(className) {
                var els = this.collection;
                var hasClass = false;

                for (var i = 0, len = els.length; i < len; i++) {
                    var thisEl = els[i];

                    var classnameArray = thisEl.className.split(' ');
                    var indexOfClassname = classnameArray.indexOf(className);

                    if (indexOfClassname > -1) {
                        hasClass = true;
                        break;
                    }
                }

                return hasClass;
            }
        };
        return $clr;
    })();
})(window);
