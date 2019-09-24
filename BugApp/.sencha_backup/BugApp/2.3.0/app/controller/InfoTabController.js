/**
 * @class BugApp.controller.InfoTabController
 * @extends Ext.Controller
 * Description
 */
Ext.define('BugApp.controller.InfoTabController', {
    extend: 'Ext.app.Controller',
    alias: 'widget.infotabcontroller',
    config: {
        refs: {
            InfoTabPanel: 'infotabpanel'
        },
        control: {
            InfoTabPanel: {
                onInfoDoneTap: 'infoDoneTap',
                onLikeTap: 'likeTap',
                onProblemTap: 'problemTap',
                onInfoBackTap: 'infoBackTap',
                onRateTap: 'rateTap',
                onEmailTap: 'emailTap',
            }
        }
       
    },
    infoDoneTap: function(){
        Ext.select('.selection').setHeight(0);
        Ext.Viewport.animateActiveItem('InsectCarousel',{type: 'reveal',direction: 'down'});
    },
    likeTap: function(){
        infoTabPanelView.items.items[0].animateActiveItem(1,{type: 'slide'});
    },
    problemTap: function(){
        infoTabPanelView.items.items[0].animateActiveItem(2,{type: 'slide'});
    },
    infoBackTap: function(){
        infoTabPanelView.items.items[0].animateActiveItem(0,{type: 'slide',reverse: true});
    },
    rateTap: function(){
        document.location = "https://userpub.itunes.apple.com/WebObjects/MZUserPublishing.woa/wa/addUserReview?id=412615616&type=Purple+Software";
    },
    emailTap: function(){
        document.location = "mailto:support@mygardenapps.com";
    }
});