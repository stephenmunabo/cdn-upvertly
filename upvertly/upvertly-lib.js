(function($) {
        $.fn.funstuff = function(options) {

                var settings = $.extend({
                    template: "template2",
                    private: true,
                    companyName: 'Upvertly',
                    dataSheet: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9D_t3kKs4YBJdIio4K9HOU9frTbncTzlzmL_1T3dj0h_u39IEu1f2gfqVyoN5M58vN1LlW2SJhD8o/pubhtml',
                }, options)


                return this.each(function() {
                            const template = settings.template;

                            $(this).append(function() {
                                getDataFromSheet(settings.dataSheet);
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

            function getDataFromSheet(url){
                $.getJSON(url, function(data) {
                      
                    var entry = data.feed.entry;

                    console.log(entry);
                                      
                    $(entry).each(function(){
                    //make sure this matches your column labels when you change the source sheet
                    $('.results').prepend('<h2>'+this.gsx$title.$t+'</h2><p>'+this.gsx$url.$t+'</p>');
                      });
                                      
                 });
            }




            $("<link/>", {
                rel: "stylesheet",
                type: "text/css",
                href: "https://cdn.upvertly.com/upvertly/upvertly-lib.css"
            }).appendTo("head");

            var f = function() {
                $('.fun-wrapper, .notification-wrapper2').toggleClass('slideUpper');
            };

            window.setInterval(f, 5000);

            f();






        });

    }
}(jQuery))