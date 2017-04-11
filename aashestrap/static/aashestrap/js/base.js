(function($){
  $(function(){
    var $body = $('body'),
        $aasheSites = $('#aashe-sites'),
        $menuTrigger = $('#menu-trigger'),
        $mainMenu = $('#main-menu'),
        actClass = 'active';
    
    $aasheSites.find('.title').on('click.aasheSites', function() {
      $aasheSites.find('.content').slideToggle('fast');
    });
    
    $menuTrigger.on('click.mainMenu', function(e) {
      e.preventDefault();
      $body.toggleClass('nav-open');
      $mainMenu.slideToggle('fast');
    });
    
    //build accordions
    var accordions = $('ul.accordion');
    if (accordions.length) {

      accordions.each(function(idx, itm) {
        var idxClass = "accordion" + idx,
            curAcc = $(itm);

        curAcc.addClass(idxClass).children('li').each(function(idx2, listItem) {
          var curItem = $(listItem),
              curItemContent = curItem.find('.content');
          curItemContent.hide();

          curItem.children('.title').on('click', function() {
            curItemContent.slideToggle('fast');
            curItem.toggleClass(actClass);
          });
        });
      });
    };
    
    // build vertical tabs 
    var vTabs = $('ul.tabs');
    if (vTabs.length){
      var $window = $(window);
      var setContentHeight = function(con,tab){
        var curItemHeight = con.height() + 5;
            tab.css('min-height', curItemHeight);
      };
      
      vTabs.each(function(idx,itm){
        var idxClass = "verticalTab" + idx,
            curTab = $(itm),
            tabContent = curTab.find('li > .content');
        
        curTab.addClass(idxClass);
          
        var tabfunc = [
          {
            min: 0,
            max: 1199,
            enter: function() {
              tabContent.hide();
              curTab.find('li > .title').on('click.vTabMobile', function(){
                $(this).next('.content').slideToggle('fast');
                $(this).parent('li').toggleClass(actClass);
              });
            },
            exit: function() {
              curTab.find('li > .title').off('click.vTabMobile');
              curTab.find('li').removeClass(actClass);
            }
          },
          {
            min: 1200,
            max: 99999,
            enter: function() {                  
              tabContent.hide();
              
              curTab.children('li').each(function(idx2, listItem){
                var curItem = $(listItem),
                    curItemContent = curItem.find('.content');

                curItem.children('.title').on('click.vTabFull', function(){
                  if(!curItem.hasClass(actClass)){

                    $window.off('resize.tabHeight'); 

                    curTab.find('.content').fadeOut('fast').parent('li').removeClass(actClass).promise().done(function(){
                      curItemContent.fadeIn('fast').promise().done(function(){
                        $window.on('resize.tabHeight', function() { setContentHeight(curItemContent,curTab); });
                        $window.trigger('resize.tabHeight');
                      });
                      curItem.addClass(actClass);
                    }); 
                  }
                }); 
                
                curTab.children('li:first-child').find('.title').trigger('click');
              });
              
            },
            exit: function() {
              curTab.find('li').removeClass(actClass);
              $window.off('resize.tabHeight');
              curTab.find('li > .title').off('click.vTabFull');
              curTab.css('min-height', '');
            }
          }
        ];

        breakdance(tabfunc);
           
      });
    } 
    
  });  
})(jQuery); 