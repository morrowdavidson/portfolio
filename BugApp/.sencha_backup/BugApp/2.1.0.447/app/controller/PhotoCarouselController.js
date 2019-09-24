/**
 * @class BugApp.controller.PhotoCarouselController
 * @extends Ext.Controller
 * Description
 */
Ext.define('BugApp.controller.PhotoCarouselController', {
    extend: 'Ext.app.Controller',
    alias: 'widget.photocarouselcontroller',
    config: {
        refs: {
            PhotoCarousel: 'insectphotocarousel'
        },
        control: {
        	PhotoCarousel: {
                onDoneTap: 'doneTap',
                onCaptionTap: 'showHideCaption',
            }
        }       
    },
    doneTap: function(){
        Ext.Viewport.animateActiveItem('insectpanel',{type: 'slide',reverse: true});
        
    },
    showHideCaption: function(){
        var captionButton = insectPhotoCarouselView.items.items[1].items.items[2];
        var visibility;
        if (captionButton.getHtml()=='Hide Caption'){
            captionButton.setHtml('Show Caption');
            visibility = false;
        }
        else{
            captionButton.setHtml('Hide Caption');
            visibility = true;
        }

        for(i=0; i<photosStoreArray.length; i++) 
            {
                var captionId='photoCaption'+[i];
                var caption =  Ext.get(captionId);

                if(caption){
                caption.setVisibility(visibility);
                }
            }
    }
    


});