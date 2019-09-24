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
		    		id:'captionButton',
		    		text:'Hide Caption',
		    	},
		    	{xtype:'spacer'},
		 
		    	{
		    		id:'photoDoneButton',
			    	ui:'action',
			    	text:'Done',
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