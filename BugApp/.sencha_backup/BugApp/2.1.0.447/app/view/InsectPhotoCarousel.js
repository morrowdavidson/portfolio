/**
 * @class BugApp.view.InsectPhotoCarousel
 * @extends Ext.Carousel
 * Description
 */
Ext.define('BugApp.view.InsectPhotoCarousel', {
    extend: 'Ext.Carousel',
    alias:'widget.insectphotocarousel',
    
    config: {
    	id:'insectPhotoCarousel',
		items:[
	    {	
	    	xtype: "toolbar",
	    	docked: "top",
	    	items:
	    	[
		    	{	
			    	id:'photoDoneButton',
			    	ui:'action',
			    	text:'Done',
		    	},
		    	{xtype:'spacer'},
		 
		    	{
		    		id:'captionButton',
		    		ui:'action',
		    		text:'Hide Caption'
		    	},
		    ]
	    }
    ],
    listeners:[{
    	delegate: '#photoDoneButton',
    	event: 'tap',
    	fn: function(){this.fireEvent("onDoneTap", this);}
    },
    {
    	delegate: '#captionButton',
    	event:'tap',
    	fn: function(){
    		this.fireEvent("onCaptionTap", this)}
    },
    
    ],
    }
});