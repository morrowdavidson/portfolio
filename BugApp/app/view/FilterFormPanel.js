/**
 * @class BugApp.view.FilterFormPanel
 * @extends Ext.form.Panel
 * Filter InsectCarousel
 */
Ext.define('BugApp.view.FilterFormPanel', {
    extend: 'Ext.form.Panel',
    requires:['Ext.field.Select','Ext.field.Radio'],
    alias: 'widget.filterform',
    
    config: {
     
        items:[
            {
                xtype: "titlebar",
                title: 'Filter',
                docked: "top",
                id:"filterFormToolbar",
                items:[
                    {
                        text:'Done',
                        ui:'action',
                        id:'filterListButton',
                        align:'right'
                    },
                    {
                        text:'Reset',
                        id:'resetButton',
                        align:'left',
                        hidden:'true'

                    }
                ]
            },
            {
                xtype:'fieldset',
                items:[
                    {
                        xtype: 'searchfield',
                        label: 'Keywords',
                        name : 'search',
                        id:'insectSearch',
                        labelWidth:'50%',
                        placeHolder:'Color, Size, Ext'
                    }
                ]
            },
            {
                xtype:'fieldset',
                items:[

                    {
                        xtype:'selectfield',
                        label:'Plants Affected',
                        id:'plantSelection',
                        labelWidth:'50%',
                        options:[
                            {text:'All',value:'all'},
                            {text:'Apples',value:'apples'},
                            {text:'Asparagus',value:'asparagus'},
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
                defaults:{
                    labelWidth:'50%'
                },
                items:[
                    {
                        xtype: 'radiofield',
                        name : 'goodbad',
                        label: 'Good Bugs',
                        value: 'Beneficial',
                        id:'goodBugRadio'
                    },
                    {
                        xtype: 'radiofield',
                        name : 'goodbad',
                        label: 'Bad Bugs',
                        value: 'Pest',
                        id:'badBugRadio'
                    }
                ]
            }
           

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
                fn:function(){this.fireEvent("onPlantSelection",this);}
            },
            {
                delegate:'#goodBugRadio',
                event:'check',
                fn:function(){this.fireEvent("onCheckboxChange",this);}
            },
            {
                delegate:'#badBugRadio',
                event:'check',
                fn:function(){this.fireEvent("onCheckboxChange",this);}
            },
            
            {
                delegate:'#resetButton',
                event:'tap',
                fn:function(){this.fireEvent("onResetTap",this);}
            }

            
        ]
        
    }
});
