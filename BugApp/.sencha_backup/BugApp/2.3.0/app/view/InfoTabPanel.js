/**
 * @class BugApp.view.InfoTabPanel
 * @extends Ext.TapPanel
 * Description
 */
Ext.define('BugApp.view.InfoTabPanel', {
    extend: 'Ext.TabPanel',
    alias: 'widget.infotabpanel',

    config: {
        fullscreen:true,
        tabBarPosition:'bottom',
        items:[
        
        {
            title: 'Feedback',
            iconCls: 'heart',
            id:'mainInfoTab',
            alias: 'widget.maininfotab',
            layout: 'card',
            items:[
            {
                items:[{
                    xtype: "toolbar",
                    docked: "top",
                    items: [
                        {xtype:'spacer'},

                        {
                            text: "Done",
                            ui:"action",
                            id: "infoTabPanelDoneButton",
                            align:"right"
                        }
                    ]},
                    {
                        xtype:'container',
                        cls:'infoTabContainer',
                        items:[
                            {
                                html:'<div class="app_icon_version_container"><img class="app_icon_img" src="IMG/Bugs-in-the-Garden-Icon.jpg"/><p class="app_title">Bugs in the Garden <br/><span class="version_tag"> version 3.0</span></p></div><h1 class="question">How do you like the app?</h1>',
                            },
                            {
                                xtype:'button',
                                ui:'normal',
                                cls:'like_button',
                                text:'I like it',
                                iconMask:true,
                                id:'likeButton',
                                iconCls:'heart',

                            },
                            {
                                xtype:'button',
                                cls:'like_button',
                                text:"There's a problem...",
                                iconCls:'warning_black',
                                iconMask:true,
                                id:'problemButton',
                                ui:'decline',

                            }


                        ]
                    }
                    
                    ],
        },
        {
        items:[{
                xtype: "toolbar",
                title: "",
                docked: "top",
                items: [
                    {
                        text: "Back",
                        ui: "back",
                        id: "infoTabPanelBackButton"
                    }
                ]
            },
            {
                xtype:'container',
                cls:'infoTabContainer',
                    items:[
                            {
                                html:'<h1>Thanks :-)</h1><p>As an independent developer I truly appreciate App Store reviews. Would you consider rating this app?',
                            },
                            {
                                xtype:'button',
                                id:'rateButton',
                                text:'Rate this App',
                                iconCls:'action',
                                iconMask:'true',
                                docked:'bottom'
                            }
                    ]
                
            }
        ]},
        {
        items:[{
                xtype: "toolbar",
                title: "",
                docked: "top",
                items: [
                    {
                        text: "Back",
                        ui: "back",
                        id: "infoTabPanelBackButton2"
                    }
                ]
            },
            {
                xtype:"container",
                cls:'infoTabContainer',
                items:[
                    {
                        html:"<h1>I'm sorry :-(</h1><p>As an independent developer I truly appreciate your feedback. Send me an email with any comments or concerns and help me make this App better.",
                    },
                    {
                        xtype: "button",
                        id:'emailButton',
                        iconCls:'mail',
                        text:'Send an Email',
                        docked:'bottom'

                    }


                ]
            }
            ]}]
        },
        {
            title: 'About',
            iconCls: 'info',
            items:[{
                xtype: "toolbar",
                title: "",
                docked: "top",
                items: [
                    {xtype:'spacer'},
                    {
                        text: "Done",
                        ui:"action",
                        id: "contactTabPanelDoneButton",
                        align:"right"

                    }
                ]
            },
            {
                xtype:'container',
                cls:'infoTabContainer',
                items:[
                    {
                        html: "<h1>Hello there!</h1><p>Thanks for your purchase! I work on an organic vegetable farm and always wanted a quick reference for any bugs that I would discover. I couldn't find anything that I would use so I created this App. I'm in the process of adding features and illustrating more bugs. Please let me know what you think. <b>-Justin</b>",
                    },
                   {
                        xtype: "button",
                        id:'email2Button',
                        iconCls:'mail',
                        text:'Send an Email',
                    }
                ]
            }


         ]

        }
    ],
    listeners:[{
            delegate: '#infoTabPanelDoneButton',
            event: 'tap',
            fn: function(){this.fireEvent("onInfoDoneTap", this);}
        },
        {
            delegate: '#contactTabPanelDoneButton',
            event: 'tap',
            fn: function(){this.fireEvent("onInfoDoneTap", this);}
        },
        {
            delegate:'#likeButton',
            event: 'tap',
            fn: function(){this.fireEvent("onLikeTap",this);}
        },
        {
            delegate:'#problemButton',
            event:'tap',
            fn: function(){this.fireEvent("onProblemTap",this);}
        },
        {
            delegate:'#infoTabPanelBackButton',
            event:'tap',
            fn: function(){this.fireEvent("onInfoBackTap",this);}
        },
        {
            delegate:'#infoTabPanelBackButton2',
            event:'tap',
            fn: function(){this.fireEvent("onInfoBackTap",this);}
        },
        {
            delegate:'#rateButton',
            event:'tap',
            fn: function(){this.fireEvent("onRateTap",this);}
        },
        {
            delegate:'#emailButton',
            event:'tap',
            fn: function(){this.fireEvent("onEmailTap",this);}
        },
        {
            delegate:'#email2Button',
            event:'tap',
            fn: function(){this.fireEvent("onEmailTap",this);}
        }
        ]
    }
});