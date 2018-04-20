(function($, window, document, undefined) {
"use strict";
  
  var el= $('.moreread'),
      clone= el.clone(),
      originalHtml= clone.html(),
      originalHeight= el.outerHeight(),
      Trunc = {
    moreLink: '<a href="#" class="moreread-toggle" data-read="More">Read More<span class="icon-arrow-bottom"</span></a>',
    lessLink: '<a href="#" class="moreread-toggle" data-read="Less">Read Less<span class="icon-arrow-top"></span></a>',
    addTrigger : function(){
      $('.article-moreread').append(this.moreLink); 
    },
    truncateText : function( textBlock ) {            
      while (textBlock.text().length > 350 ) {
        textBlock.text(function(index, text) {
          return text.replace(/\W*\s(\S)*$/, '...');
        });
      }
    },     
    replaceText: function ( textBlock, original ){
      return textBlock.html(original).height(originalHeight);      
    }  
    
  };
  Trunc.addTrigger();
  Trunc.truncateText(el);
  
  $(document).on('click', '[data-read]', function(e){
    e.preventDefault();
  
    if ($(this).data('read') == 'More'){
      Trunc.replaceText(el, originalHtml);
      $(this).replaceWith(Trunc.lessLink);
      
    } else if ($(this).data('read') == 'Less') {
      Trunc.truncateText(el);
      $(this).replaceWith(Trunc.moreLink);
      el.css('height', '100%');
    }
    
  });

})(jQuery, window, document, undefined);