/**
 * @class BugApp.view.InsectCarousel
 * @extends Ext.Carousel
 * Main View
 */
Ext.define('BugApp.view.InsectCarousel', {
    extend: 'Ext.Carousel',
    requires: ['Ext.DataView','Ext.form.Panel','Ext.form.FieldSet','Ext.field.Search'],
    alias: 'widget.InsectCarousel',
 
    config: {
        direction: 'vertical',
        cls:'insectCarousel',
        items: [{
            xtype: "titlebar",
            title: 'All Bugs',
            docked: "top",
            id:"insectCarouselToolbar",
            items:[
                {
                    id:'filterButton',
                    text:'Filter',
                    align:'left'
                },
                {
                    id:'clearFilterButton',
                    text:'Show All',
                    align:'right',
                    hidden:'true'
                },
                {
                    align:'right',
                    iconCls:'heartInfo',
                    ui:'plain',
                    iconMask:true,
                    id:'infoButton'
                }
            ]
        }],
        listeners:[
            {
                delegate: '#infoButton',
                event: 'tap',
                fn: function(){this.fireEvent("onInfoTap", this);}
            },
            {
                delegate:'#filterButton',
                event:'tap',
                fn: function(){this.fireEvent("onFilterTap",this);}
            },
            {
                delegate: '#clearFilterButton',
                event:'tap',
                fn: function(){this.fireEvent("onClearFilterTap",this);}
            }
        ]
    },
    initialize: function(){

        this.callParent(arguments);

        var panelHeight = window.innerHeight - 76;

        var panelWidth = window.innerWidth;

        var numPerRow = Math.floor(panelHeight/117);

        var numOfColumn = Math.floor(panelWidth/100);

        // Number of insects to make a full card on carousel.
        var fullCard =  Math.floor(numPerRow*numOfColumn);

        //Insect store from BugApp.store.insectInfo
        iStore = Ext.getStore('InsectInfo');
 //       iStore.filter('plantsAffected', /c/);

        //Total number of insects in BugApp.store.insectInfo
        iCount = iStore.getCount()
        
        //Determining the number of panels for the carousel
        if(iCount%fullCard){
            numOfPanels = Math.floor(iCount/fullCard)+1
        }
        else{
            numOfPanels = iCount/fullCard
        };

        var panelStoreArray = [];

        for (i=0;i<numOfPanels;i++){
            var panelStoreId = 'panelStore'+i.toString();
            var carouselStore = Ext.create('Ext.data.Store',{
                model:'BugApp.model.Insect',
                id:panelStoreId
            });
            panelStoreArray.push(carouselStore);
        }

        var theItemTpl = new Ext.XTemplate(
            '<div insectId="{insectid}" id="{id}Selection" class="selection"></div>',
            '<div insectId="{insectid}" id="{id}" cls="img-caption">',

            '<div insectId="{insectid}" class="insectImg carouselImg" style="background-position:{spriteCol*-100}px {spriteRow*-100}px;background-image:url(\'IMG/BugSprite{spriteFile}.jpg\');"></div>', 
            '<div insectId="{insectid}" class="caption"><span class="{type}Code">b</span>{title}</div>',
            '</div>'
        );
        

        Ext.define('iPanel',{
            extend: 'Ext.DataView',
            alias: 'widget.ipanel',
            config:{
                scrollable: false,
                itemCls:'insectContainer',
                onItemDisclosure: true            
            }
        });
        var loopCount;
        var loopEnd;
        for (j=0; j<numOfPanels; j++) {
            var panelCurrent;
            loopCount = j*fullCard;
            loopEnd = (j+1)*fullCard;
            for(i=loopCount; i<loopEnd && i<iCount; i++) {

                
                    var iModel = iStore.getAt(i);
                    panelStoreArray[j].add(iModel);
                
                
            
                if(loopEnd==i+1 || iCount==i+1){
                    var id = "iPanel"+j;
                    panelCurrent = Ext.create('iPanel',{
                        store: panelStoreArray[j],
                     //   id: id,
                        itemTpl: theItemTpl,
                        onItemTap: function (dataView,touchEl) {
                                this.fireEvent("onItemTap", this, touchEl);
                        }
                    });
                    this.add(panelCurrent);
                }
            }
        }
    }
});