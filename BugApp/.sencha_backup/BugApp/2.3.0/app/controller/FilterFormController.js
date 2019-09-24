/**
 * @class BugApp.controller.FilterFormController
 * @extends Ext.app.Controller
 * Description
 */
Ext.define('BugApp.controller.FilterFormController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs:{
            FilterForm:'filterform'
        },
        control:{
            FilterForm:{
                onSearchKeyUp:'filterStore',
                onFilterList:'filterList',
                onPlantSelection:'filterStore',
                onClearIconTap:'clearIconTap',
                onResetTap:'resetForm',
                onCheckboxChange:'filterStore',
            }
        }
        
    },
    filterStore:function(){
        //first clear current filters on the store
        iStore.clearFilter();

        iStoreTotal = iStore.getCount();
        
        this.searchKeyUp();
        this.plantSelection();
        this.goodBadChange();
        this.setFilterNumber();
        Ext.elements.resetButton.show();

    },
    clearIconTap:function(){
        iStore.clearFilter();
        this.plantSelection();
        this.goodBadChange();
        this.setFilterNumber();
    },



    searchKeyUp:function(form){
        //get the store and the value of the field
        var value = filterFormPanelView.getValues().search;



        //check if a value is set first, as if it isnt we dont have to do anything
        if (value) {
            //the user could have entered spaces, so we must split them so we can loop through them all
            var searches = value.split(' '),
                regexp,
                i;

            //loop them all
            for (i = 0; i < searches.length; i++) {
                //if it is nothing, continue
                if (!searches[i]) continue;
                var search;
                if (!search){
                    search = "(?=.*"+searches[i]+")";
                }
                else if(searches[i] == 'and' || searches[i] == 'or'){
                    search = search;
                }
                else{
                    search = search + "(?=.*"+searches[i]+")";
                }


                //if found, create a new regular expression which is case insenstive
               // regexps.push(new RegExp(searches[i], 'i'));
            }
            regexp = RegExp(search,'i');

            //now filter the iStore by passing a method
            //the passed method will be called for each record in the iStore
            iStore.filter(function(record) {
                var matched = [];

                //loop through each of the regular expressions
             //    for (i = 0; i < regexps.length; i++){
             //        var search = search + (?=*searches[i])
             //    }


                // for (i = 0; i < regexps.length; i++) {
                        didMatch = record.get('title').match(regexp) || 
                //     var search = regexps[i],
                        record.get('type').match(regexp) || 
                        record.get('description').match(regexp) ||
                        record.get('plantsAffected').match(regexp)||
                        record.get('damage').match(regexp)||
                        record.get('pestControl').match(regexp);
                        

                    //if it matched the first or last name, push it into the matches array
                    matched.push(didMatch);
                // }

           // show in the iStore
                    return matched[0];
                
            });
        }
    },

    filterList: function(){
        insectCarouselView.removeAll(true);
        insectCarouselView.initialize();
        insectCarouselView.setActiveItem(0);

        Ext.Viewport.animateActiveItem(insectCarouselView,{type:'flip',direction:'left'});


    },
    setFilterNumber: function(){
        var iStoreCount = iStore.getCount();
        var formValues = filterFormPanelView.getValues();
        var title = insectCarouselView.items.items[1];

        if (iStoreCount == iStoreTotal){
            title.setTitle('All Bugs');
            Ext.elements.clearFilterButton.hide();
            Ext.elements.infoButton.show();


        }
        else if (formValues.search == "" && formValues.picker == "all" && formValues.goodbad){
            title.setTitle(formValues.goodbad+'s')
            Ext.elements.clearFilterButton.show();
            Ext.elements.infoButton.hide();
        }
        else {
            title.setTitle('Filtered Bugs');
            Ext.elements.clearFilterButton.show();
            Ext.elements.infoButton.hide();
        }

        filterFormPanelView.items.items[0].titleComponent.setHtml('Filter <span class="small_title">('+iStoreCount+' Results)</span>');
    },
    plantSelection: function(form){
        var plantSelection = filterFormPanelView.getValues().picker;
        var goodBadRadio = filterFormPanelView.items.items[3];
        if (plantSelection == 'all'){
            
            if(goodBadRadio.isDisabled()){
                goodBadRadio.enable();
                goodBadRadio.items.items[1].uncheck()
            }


        }
        else{
            var RegExpPlant = RegExp(filterFormPanelView.getValues().picker,'i');
            iStore.filter('plantsAffected',RegExpPlant);
            filterFormPanelView.items.items[3].disable();
            filterFormPanelView.items.items[3].items.items[1].check()
        };
    },
    goodBadChange:function(){
        var goodBad = filterFormPanelView.getValues().goodbad;
        if (goodBad){
            iStore.filter('type',goodBad);
        }   
        
    

    }, 
    resetForm:function(){
        iStore.clearFilter();
        filterFormPanelView.reset();
        this.setFilterNumber();
        Ext.elements.resetButton.hide();

    }

});