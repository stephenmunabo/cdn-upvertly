(function($) {
        $.fn.funstuff = function(options) {

                var settings = $.extend({
                    template: "template2",
                    private: true,
                    companyName: 'Upvertly'
                }, options)


                return this.each(function() {
                            const template = settings.template;

                            $(this).append(function() {
                                return selectTemplate(template);
                            });

                            function selectTemplate(template) {

                                switch (template) {
                                    case 'template1':

                                        return `
                    <div class="funner">
                        <div class="fun-wrapper">
                            <h3>Stephen recently purchased</h3>
                            <p>Melissa from Toronto, Ca</p>
                            <small>7 min ago</small>
                            ${settings.private != true ? `
                            <span>Powered by <a href="https://upvertly.com">${settings.companyName}</a></span>`
                            : ''}
                        </div>
                    </div>
                    `;
                        break;
                    case 'template2':

                        return `
                    <div class="funner">
                        <div class="notification-wrapper2">
                            <h3>Munabo recently purchased <span class="time_ago">7 min ago</span></h3>
                            <p>Melissa from Toronto, Ca</p>
                            ${ settings.private != true ? `
                            <span class="t2">Powered by <a href="https://upvertly.com">${settings.companyName}</a></span>`
                             : ''}
                        </div>
                    </div>
                    `;

                }
            }





            $("<link/>", {
                rel: "stylesheet",
                type: "text/css",
                href: "css/fun.css"
            }).appendTo("head");

            var f = function() {
                $('.fun-wrapper, .notification-wrapper2').toggleClass('slideUpper');
            };

            window.setInterval(f, 5000);

            f();






        });

    }
}(jQuery))