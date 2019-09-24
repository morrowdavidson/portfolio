var iStore;
var iCount;
var iStoreTotal;
var filterValue;
var tappedInsect;
var currentInsect;
var tappedSelection;
var insectCarouselView;
var insectPanelView;
var insectPhotoCarouselView;
var photosStoreArray;
var filterFormPanelView;
var insectItemTpl;


//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'BugApp': 'app'
});
Ext.Loader.setConfig({disableCaching: false});

//</debug>

Ext.application({
    name: 'BugApp',

    requires: [
        'Ext.MessageBox'
    ],

    views: ['InsectCarousel','InsectPanel','InsectPhotoCarousel','InfoTabPanel','FilterFormPanel'],

    models: ['Insect','InsectPhoto'],

    stores: ['InsectInfo'],
    
    controllers: ['CarouselController','InsectPanelController','PhotoCarouselController','FilterFormController','InfoTabController'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,


    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {

        



        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view

        insectCarouselLegend = Ext.create('Ext.Panel', {
            html: '<div class="legend"><span class="BeneficialCode">b</span> - beneficial insect</div>',
            docked:'bottom',
        });

 
     

        insectCarouselView = Ext.create('BugApp.view.InsectCarousel');
        insectCarouselView.add(insectCarouselLegend);
        insectPanelView = Ext.create('BugApp.view.InsectPanel');
        insectPhotoCarouselView = Ext.create('BugApp.view.InsectPhotoCarousel');
        infoTabPanelView = Ext.create('BugApp.view.InfoTabPanel');
        filterFormPanelView = Ext.create('BugApp.view.FilterFormPanel');
        toolBar = Ext.create('Ext.Toolbar',
        {

        });

        Ext.Viewport.add(insectCarouselView);
        Ext.Viewport.add(insectPanelView);
        Ext.Viewport.add(insectPhotoCarouselView);
        Ext.Viewport.add(infoTabPanelView);
        Ext.Viewport.add(filterFormPanelView);


        Ext.Viewport.setActiveItem(insectCarouselView);
    },
});
