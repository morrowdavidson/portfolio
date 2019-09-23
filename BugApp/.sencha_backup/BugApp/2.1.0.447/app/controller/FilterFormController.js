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
    			onSearchKeyUp:'searchKeyUp',
    			onFilterList:'filterList',
    			onPlantSelection:'plantSelection',
    			onClearIconTap:'clearIconTap',
                onResetTap:'resetForm'
    		}
    	}
        
    },
    searchKeyUp: function(form){
    	//get the store and the value of the field
    	var value = filterFormPanelView.getValues().search;

    	//first clear any current filters on the store
    	iStore.clearFilter();

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
    	        //     var search = regexps[i],
    	                didMatch = record.get('title').match(regexp) || 
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
    	};
    	
	    var plantSelection = filterFormPanelView.getValues().picker;
		if (plantSelection == 'all'){
			//iStore.clearFilter();
			//this.searchKeyUp();
		}
    	else{
	    	var RegExpPlant = RegExp(filterFormPanelView.getValues().picker,'i');
	    	iStore.filter('plantsAffected',RegExpPlant);
    	};
    	this.setFilterNumber();

    },
    clearIconTap:function(){
    	iStore.clearFilter();
	    var plantSelection = filterFormPanelView.getValues().picker;
		if (plantSelection == 'all'){
			//iStore.clearFilter();
			//this.searchKeyUp();
		}
    	else{
	    	var RegExpPlant = RegExp(filterFormPanelView.getValues().picker,'i');
	    	iStore.filter('plantsAffected',RegExpPlant);
    	};
    	this.setFilterNumber();
	},
    filterList: function(){
    	insectCarouselView.removeAll(true);
    	insectCarouselView.initialize();
    	insectCarouselView.setActiveItem(0);
    	Ext.Viewport.animateActiveItem(insectCarouselView,{type:'flip'});


    },
    setFilterNumber: function(){
    	filterFormPanelView.items.items[0].titleComponent.setHtml('Search <span class="small_title">('+iStore.getCount()+' Results)</span>');
    },
    plantSelection: function(form){
    	var plantSelection = filterFormPanelView.getValues().picker;
    	if (plantSelection == 'all'){
    		//iStore.clearFilter();
    		this.searchKeyUp();
    	}
    	else{
            this.searchKeyUp();
	    	var RegExpPlant = RegExp(filterFormPanelView.getValues().picker,'i');
	    	iStore.filter('plantsAffected',RegExpPlant);
    	};
    	this.setFilterNumber();
    },
    resetForm:function(){
        iStore.clearFilter();
        filterFormPanelView.reset();
        this.setFilterNumber();
    } 
});