/**
 * @class BugApp.controller.InsectPanelController
 * @extends Ext.Controller
 * Description
 */
Ext.define('BugApp.controller.InsectPanelController', {
    extend: 'Ext.app.Controller',
    alias: 'widget.insectpanelcontroller',
    config: {
        refs: {
            InsectPanel: 'insectpanel'
        },
        control: {
        	InsectPanel: {
                onBackTap: 'backTap',
                onPhotoTap: 'photoTap'
            }
        }
       
    },
    backTap: function(){
            Ext.select('.selection').setHeight(0);
            Ext.Viewport.animateActiveItem('InsectCarousel',{type: 'slide',reverse: true});
    },
    photoTap: function(){
            insectPhotoCarouselView.removeAll(true);

            var caption = Ext.get('photoCaption0');
            if(caption){
                for(i=0; i<insectCarouselView.carouselItems.length; i++) {
                                var captionId='photoCaption'+[i];
                                var caption = Ext.get(captionId);
                                if(caption){
                                caption.destroy();
                            }
                }
            }
            
            insectPhotoCarouselView.items.items[1].items.items[0].setHtml('Hide Caption');
            var addedImages= [];
            photosStoreArray = Ext.getStore('InsectInfo').getById(tappedInsect).photos().data.items;
            for(i=0; i<photosStoreArray.length; i++) {
                addedImages.push({html:'<img class="insectPhoto" src="'+photosStoreArray[i].data.src+'" /><p id="photoCaption'+[i]+'" class="photoCaption"><span class="photoName">'+photosStoreArray[i].data.name+' </span><span class="photoSciName">'+photosStoreArray[i].data.sciName+'</span><br />'+photosStoreArray[i].data.citation+'</p>'});
            }
            insectPhotoCarouselView.add(addedImages);
            insectPhotoCarouselView.setActiveItem(0);

            Ext.Viewport.animateActiveItem('insectphotocarousel',{type: 'cover', direction:'up'});
    }
    

});