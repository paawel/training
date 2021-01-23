(function (context) {
    'use strict';

    function appModule() {
        function init() {};

        var dragAPI = {
            dropAreaElement: document.getElementById('drop-area'),
            dragItemElement: document.getElementById('drag-item'),

            drop: function (event) {
                event.preventDefault();

                // NOTE: Do not remove the timeout
                window.setTimeout(function () {
                    // NOTE: Do not modify the lines below.
                    this.dropAreaElement.innerHTML = '';
                    this.dropAreaElement.appendChild(this.dragItemElement);
                });
            }
        }

        function startCounting() {
            var el = document.getElementById('counter');
            var startCountingButton = document.getElementById('start-counting-button');
            var counter = 0;

            var counterInterval = setInterval(function () {
                if (counter < 101) {

                } else {
                    clearInterval(counterInterval)
                }
            }, 10);
        }

        function startTracking() {
            var circle = document.getElementById('circle');
            var startTrackingButton = document.getElementById('start-tracking-button');

            // TODO: Add tracking logic
        }

        return {
            init: init,
            startTracking: startTracking,
            startCounting: startCounting,
            dragAPI: dragAPI,
        }
    }

    context.AppModule = appModule();

})(window);
