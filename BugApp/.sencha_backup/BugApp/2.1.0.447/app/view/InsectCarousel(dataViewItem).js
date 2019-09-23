/**
 * @class BugApp.view.InsectCarousel
 * @extends Ext.Carousel
 * Main View
 */
Ext.define('BugApp.view.InsectCarousel', {
    extend: 'Ext.Carousel',
    requires: 'Ext.DataView',
    alias: 'widget.InsectCarousel',

    config: {
        direction: 'vertical',
        cls:'insectCarousel',

    },

    initialize: function(){

        this.callParent(arguments);

        var topToolbar = {
            xtype: "toolbar",
            title: 'Bugs in the Garden',
            docked: "top",
    
        };

        this.add([topToolbar]);


        // Number of insects to make a full card on carousel.
        var fullCard = 11;

        //Number of panels for carousel 
        var numOfPanels = 4;

        //Insect store from BugApp.store.insectInfo
        var iStore = Ext.getStore('InsectInfo');

        //Total number of insects in BugApp.store.insectInfo
        var iCount = iStore.getCount();

        //Determining the number of panels for the carousel
        if(iCount%fullCard){
            numOfPanels = Math.floor(iCount/fullCard)+1
        }
        else{
            numOfPanels = iCount/fullCard
        };

        var carouselStoreArray = [];

        for (i=0;i<numOfPanels;i++){
            var panelStoreId = 'panelStore'+i.toString();
            var carouselStore = Ext.create('Ext.data.Store',{
                model:'BugApp.model.Insect',
                id:panelStoreId,
            });
            carouselStoreArray.push(carouselStore);

        }




       Ext.define('iPanel',{
           extend: 'Ext.DataView',
           alias: 'widget.ipanel',
           store: iStore,
           config:{
               scrollable: false,
               useComponents: true,
               defaultType: 'insectlistitem',
           },
       
       });

       
       Ext.define('InsectListItem', {
           extend: 'Ext.dataview.component.DataItem',
           xtype: 'insectlistitem',
        
           config: {
                cls:'insect-list-item',

               image: true,
        
               name: {
                   cls: 'x-name',
               },
               layout: {
                    type: 'hbox',
                    align: 'center'
               }
            },

            dataMap:{
                getImage:{
                    setSrc: 'image' 
                },
                getName:{
                    setHtml: 'name'
                }
            },

            applyImage: function(config) {
                    return Ext.factory(config, Ext.Img, this.getImage());
            },
            updateImage: function(newImage, oldImage) {
                    if (newImage) {
                        this.add(newImage);
                    }

                    if (oldImage) {
                        this.remove(oldImage);
                    }
            },
            applyName: function(config) {
                    return Ext.factory(config, Ext.Component, this.getName());
            },
            updateName: function(newName, oldName) {
                    if (newName) {
                        this.add(newName);
                    }

                    if (oldName) {
                        this.remove(oldName);
                    }
            },

       });




        var loopCount=0;
        for (var j=0; j<numOfPanels; j++) {

            for(i=loopCount; i<iCount; i++) {

                if(i==0){
                    this.removeAll()
                };
                if(i<fullCard*(j+1)){
                    var iModel = iStore.getAt(i);
                    carouselStoreArray[j].add(iModel);
                };

                    if(iCount==i+1){

                        var panelCurrent = Ext.create('iPanel');
                        this.add(panelCurrent);
                    };   
                
            };

        }

}

});