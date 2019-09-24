/**
 * @class BugApp.view.InsectCarousel
 * @extends Ext.Carousel
 * Main View
 */
Ext.define('BugApp.view.InsectCarousel', {
    extend: 'Ext.Carousel',

    config: {
    	direction: 'vertical',
    	cls:'insectCarousel',
        

    },

    initialize: function(){
        

        this.callParent(arguments);

        var newButton = {
            xtype: "button",
            text: 'New',
            ui: 'action',
            
            scope: this,
            };

        var topToolbar = {
            xtype: "toolbar",
            title: 'Bugs in the Garden',
            docked: "top",
            items: [
                { xtype: 'spacer' },
                newButton
            ]
        };

        this.add([topToolbar]);

        // Number of insects to make a full card on carousel.
        var fullCard = 9;

        var thumbTemp = new Ext.XTemplate(
        	// '<div class="insectContainer">',
        	'<div id="{name}Selection" class="selection"></div>',
    		'<img src="IMG/{name}.png" width="100" height="100" />',  
    		'<div class="caption"><span class="{type}Code">b</span>{title}</div>'
    		// '</div>'
        );

        var iStore = Ext.getStore('InsectInfo');

        //Length of BuggApp.store.insectInfo Array
		var iCount = iStore.getCount();

        //Defining all the Insects as containers from BuggApp.store.insectInfo
        //*** REVISE with Ext.each
        for(i=0; i<iCount; i++) {

        	var iModel = iStore.getAt(i);
        	var iName = iModel.get('name');
        	
        	Ext.define(iName,{
        		extend: 'Ext.Container',
        		alias: 'widget.insectContainer',
        		config:{
        			cls:'insectContainer',
        			data: iModel.data,
        			tpl: thumbTemp
        		},
    			
        		
        	});
		};
		
		// Creating containers for Insect Carousel
		var iCarousel0 = Ext.create('Ext.Container');
		var iCarousel1 = Ext.create('Ext.Container');
		var iCarousel2 = Ext.create('Ext.Container');
		var iCarousel3 = Ext.create('Ext.Container');
		
		

		// Creating the Carousel from selected Insects
		// ***** REVISE WITH dynamic number of Carousel cards using the fullCard value divided by the iStore.getCount()
        for(i=0; i<iCount; i++) {
			
			if(i==0){
				iCarousel0.removeAll()
			};

			if(i<fullCard){
				var iModel = iStore.getAt(i);
        		var iName = iModel.get('name');
        		var iContainer = Ext.create(iName,{
        			        listeners: {
		        				tap: {
			        			    fn: function(record) {
                                        Ext.Viewport.setActiveItem('insectPanel');
                                        console.log(record);},
                                    element: 'element'
                                    }
		        			}
        			    }





                    );

				iCarousel0.add(iContainer);
				if(iCount==i+1){
					this.add(iCarousel0)
				}	
			};
			if(i < fullCard * 2 & i > fullCard - 1){
				var iModel = iStore.getAt(i);
        		var iName = iModel.get('name');
				iCarousel1.add(Ext.create(iName));
				if(iCount==i+1){
					this.add(iCarousel0)
					this.add(iCarousel1)
				}	
			};
			if(i < fullCard * 3 & i > fullCard * 2 - 1){
				var iModel = iStore.getAt(i);
        		var iName = iModel.get('name');
				iCarousel1.add(Ext.create(iName));
				if(iCount==i+1){
					this.add(iCarousel0)
					this.add(iCarousel1)
					this.add(iCarousel2)
				}	
			};
				if(i < fullCard * 4 & i > fullCard * 3 - 1){
				var iModel = iStore.getAt(i);
        		var iName = iModel.get('name');
				iCarousel1.add(Ext.create(iName));
				if(iCount==i+1){
					this.add(iCarousel0)
					this.add(iCarousel1)
					this.add(iCarousel2)
					this.add(iCarousel3)
				}	
			}
		};		
	},
});