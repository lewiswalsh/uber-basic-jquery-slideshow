

//You need an anonymous function to wrap around your function to avoid conflict
// USAGE: $('#element').slideShow({ option: optionval });
(function($){
 
    //Attach this new method to jQuery
    $.fn.extend({ 
         
        //This is where you write your plugin's name
        slideShow: function(options) {
		
			// Defaults values for settings
			var defaults = {
				panelClass: ".panel", //class of the panels in the slideshow
				initialFadeIn: 1000, //initial fade-in time (in milliseconds) 
				itemInterval: 5000, //interval between items (in milliseconds)
				fadeTime: 2500 //cross-fade time (in milliseconds)
			};
			
			// overwrite defaults with passed options
			var options = $.extend(defaults, options);
			
            //Iterate over the current set of matched elements
            return this.each(function(){
				var o = options;
				
				//code to be inserted here
								
					var obj = $(this); // obj is the element the plugin is applied to

						var numberOfItems = $(o.panelClass).length; //count number of items
						var currentItem = 0; //set current item
						
						// cycle through each panel and hide all but the first 
						$(o.panelClass).each(function(index){
							if(index > 0){ $(this).hide(); }
						});

						$(o.panelClass).eq(currentItem).fadeIn(o.initialFadeIn); //show first item
									
						if(numberOfItems > 1){
							var infiniteLoop = setInterval(function(){ //loop through the items
								$(o.panelClass).eq(currentItem).fadeOut(o.fadeTime);
									if(currentItem == numberOfItems -1){ currentItem = 0; }
									else { currentItem++; }
								$(o.panelClass).eq(currentItem).fadeIn(o.fadeTime);
							}, o.itemInterval);
						}
             
            });
        }
    });
     
//pass jQuery to the function, 
//So that we will able to use any valid Javascript variable name 
//to replace "$" SIGN. But, we'll stick to $ (I like dollar sign: ) )       
})(jQuery);