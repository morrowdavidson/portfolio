/**
 * @class BugApp.InsectPanel
 * @extends Ext.Panel
 * Insect Description View
 */
Ext.define('BugApp.view.InsectPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.insectpanel',
    config: {
        id:'insectPanel',	
		layout: 'card',
		fullscreen: true,
		scrollable: true,
		tpl: Ext.XTemplate.from('insectPanelTpl'),

		items:[
            {
                xtype: "toolbar",
                title: "InsectPanel",
                docked: "top",
                items: [
                    {
                    	text: "Back",
                    	ui: "back",
                    	id: "insectPanelBackButton"
                    },
                    {xtype:'spacer'},
                    {
                        iconCls:'bugphoto',
                        id: 'photosViewButton'                    
                    }
                    
                ]
            },
            
        ],

        listeners:[{
        	delegate: '#insectPanelBackButton',
        	event: 'tap',
        	fn: function(){this.fireEvent("onBackTap", this);}
        },
        {
            delegate: '#photosViewButton',
            event:'tap',
            fn: function(){this.fireEvent("onPhotoTap",this)}
        }
        ],
    },
    initialize: function(){

        this.callParent(arguments); 
    }  
});