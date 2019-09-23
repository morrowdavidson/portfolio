/**
 * @class BugApp.view.InfoTabPanel
 * @extends Ext.TapPanel
 * Description
 */
Ext.define('BugApp.view.InfoTabPanel', {
    extend: 'Ext.TabPanel',

    config: {
        fullscreen:true,
    	tabBarPosition:'bottom',
    	items:[
        {
            title: 'Home',
            iconCls: 'home',
            html: 'Home Screen'
        },
        {
            title: 'Contact',
            iconCls: 'user',
            html: 'Contact Screen'
        }
    ]
        
    }
});