/**
 * @class BugApp.view.FilterFormPanel
 * @extends Ext.form.Panel
 * Filter InsectCarousel
 */
Ext.define('BugApp.view.FilterFormPanel', {
    extend: 'Ext.form.Panel',
    requires:'Ext.field.Select',
    alias: 'widget.filterform',
    
    config: {
     
        items:[
            {
                xtype: "titlebar",
                title: 'Search',
                docked: "top",
                id:"filterFormToolbar",
                items:[
                    {
                        text:'Done',
                        id:'filterListButton',
                        align:'left'
                    },                    
                    {
                        text:'Reset',
                        id:'resetButton',
                        align:'right'
                    }
                ]
            },
            {
                xtype:'fieldset',
                items:[
                    {                      
                        xtype: 'searchfield',
                        name : 'search',
                        label: 'Search',
                        id:'insectSearch'
                    },
                ]
            },
            {
                xtype:'fieldset',
                items:[

                    {
                        xtype:'selectfield',
                        label:'Plant',
                        id:'plantSelection',
                        options:[
                            {text:'All',value:'all'},
                            {text:'Apples',value:'apples'},
                            {text:'Asparagus',value:'aparagus'},
                            {text:'Beans',value:'beans'},
                            {text:'Beets',value:'beets'},
                            {text:'Broccoli',value:'broccoli'},
                            {text:'Cabbage',value:'cabbage'},
                            {text:'Cauliflower',value:'cauliflower'},
                            {text:'Celery',value:'celery'},
                            {text:'Corn',value:'corn'},
                            {text:'Cucumbers',value:'cucumbers'},
                            {text:'Eggplant',value:'eggplant'},
                            {text:'Lettuce',value:'lettuce'},
                            {text:'Peaches',value:'peaches'},
                            {text:'Peanuts',value:'peanuts'},
                            {text:'Pears',value:'pears'},
                            {text:'Peas',value:'peas'},
                            {text:'Potatoes',value:'potatoes'},
                            {text:'Spinach',value:'spinach'},
                            {text:'Squash',values:'squash'},
                            {text:'Tomatoes',values:'tomatoes'}
                        ]
                    }
                ]
            },
            {
                xtype:'fieldset',
                items:[
                    {
                        xtype: 'checkboxfield',
                        name : 'pests',
                        label: 'Bad'
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'beneficials',
                        label: 'Good'
                    },
                ]
            },
            {
                xtype:'fieldset',
                items:[

                    {
                        xtype: 'checkboxfield',
                        name : 'beetles',
                        label: 'Beetles'
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'softBodied',
                        label: 'Soft Bodied'
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'winged',
                        label: 'Winged'
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'small',
                        label: 'Small'
                    },
                    
                ]
            },

        ],
        listeners:[
            {
                delegate: '#filterListButton',
                event: 'tap',
                fn: function(){this.fireEvent("onFilterList", this);}
            },
            {
                delegate: '#insectSearch',
                event: 'keyup',
                fn: function(){this.fireEvent("onSearchKeyUp", this);}
            },
            {
                delegate: '#insectSearch',
                event:'clearicontap',
                fn: function(){this.fireEvent("onClearIconTap", this);}
            },
            {
                delegate:'#plantSelection',
                event:'change',
                fn:function(){this.fireEvent("onPlantSelection"),this}
            },
            {
                delegate:'#resetButton',
                event:'tap',
                fn:function(){this.fireEvent("onResetTap"),this}
            }

            
        ]
        
    }
});
