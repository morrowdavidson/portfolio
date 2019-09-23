/**
 * @class BugApp.controller.CarouselController
 * @extends Ext.Controller
 * Description
 */
Ext.define('BugApp.controller.CarouselController', {
    extend: 'Ext.app.Controller',
    alias: 'widget.carouselcontroller',
    config: {
        refs: {
            InsectCarousel: 'InsectCarousel',
            iPanel:'ipanel'
        },
        control: {
            InsectCarousel: {
                onInfoTap: 'infoTap',
                onFilterTap: 'filterTap',
                onClearFilterTap: 'resetFilterTap'
            },
            iPanel: {
                onItemTap: 'itemTap'
            }
        }

    },
    itemTap: function(dataView,touchEl){
        tappedInsect = touchEl.dom.children[1].getAttribute('insectId');
        tappedId = touchEl.dom.children[1].getAttribute('id');

        tappedSelection = Ext.get(tappedId+"Selection");
        var elHeight = touchEl.getHeight();
        var elWidth = touchEl.getWidth();

        tappedSelection.setHeight(elHeight);
        tappedSelection.setWidth(elWidth);

        currentInsect = Ext.getStore('InsectInfo').getById(tappedInsect).data;

        insectPanelView.setData(currentInsect); 
        insectPanelView.scrollableBehavior.scrollView._scroller.scrollToTop(); 
        insectPanelView.items.items[0].setTitle(currentInsect.type);
        Ext.Viewport.animateActiveItem('insectpanel',{type: 'slide'});

    },
    infoTap: function(){
        Ext.Viewport.animateActiveItem(infoTabPanelView,{type: 'cover', direction:'up'});
    },
    filterTap: function(){

        Ext.Viewport.animateActiveItem(filterFormPanelView,{type:'flip'});
        
    },
    resetFilterTap: function(){
        iStore.clearFilter();
        insectCarouselView.removeAll(true);
        insectCarouselView.initialize();
        insectCarouselView.setActiveItem(0);
        Ext.Viewport.setActiveItem(insectCarouselView);
        insectCarouselView.items.items[1].setTitle('All Bugs');
        Ext.elements.clearFilterButton.hide();
        Ext.elements.infoButton.show();
        filterFormPanelView.reset();
        Ext.elements.resetButton.hide();


    }
    

});