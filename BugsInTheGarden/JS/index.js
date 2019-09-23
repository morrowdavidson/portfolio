var mainPanel;
var moved = 0;
var currentInsect;
var captionButton;
var captionVisible=true;
var insectPanelTemplate;
var selectEl;
var imgType=".jpg";
var currentSession;
var store;
var selections;
if(window.devicePixelRatio){
	if( window.devicePixelRatio >= 2 ){
		imgType=".png";
	}else{
		imgType=".jpg";
	}
}
//Ext.setup({
//    tabletStartupScreen: 'tablet_startup.png',
//    phoneStartupScreen: 'phone_startup.png',
//    icon: 'icon.png',
//    glossOnIcon: false,
//    onReady: function() {
	
	new Ext.Application({
    name: 'bugApp',

    launch: function() {

		var showCaptionButton = new Ext.Button({
					ui:'action',					   					
					text:'Show Captions',
					
					handler: function(){
							captionVisible=true;
							showHideCaption();
							
							bugApp.view.imagesBar.items.items[3].setVisible(false);
							bugApp.view.imagesBar.items.items[2].setVisible(true);
					}
										   
										   });
		
		var removeCaptionButton = new Ext.Button({
					ui:'action',					   					
					text:'Hide Captions',
					handler: function(){
							
							captionVisible=false;
							showHideCaption();
							
							bugApp.view.imagesBar.items.items[3].setVisible(true);
							bugApp.view.imagesBar.items.items[2].setVisible(false);
					}
										   
										   });
		
		var showHideCaption = function(){
			for(i=0; i<currentInsect.photos.length; i++) {
								var captionId='photoCaption'+[i];
								Ext.get(captionId).setVisible(captionVisible);
							}
		}
		
		var insectCarouselLegend = new Ext.Panel({
			dock:'bottom',
			html:'<div class="legend"><span class="beneficialCode">b</span> - beneficial insect</div>',
			
			});
	        
		bugApp.view.toolBar = new Ext.Toolbar({
			dock:'top',
			ui:'light',
			title:'Bugs in the Garden',
			items:[{xtype:'spacer'},
				   {
					   iconCls:'info_heart',
					ui:'plain',
					iconMask:true,
					handler:function(){bugApp.view.Main.setActiveItem(bugApp.view.infoTab,{type: 'slide', direction:'up',cover:true});}
				   }
				   ]
			});
		
		bugApp.view.insectBar = new Ext.Toolbar({
			dock:'top',
			ui:'light',
			items: [
				{
					text:'Back',
					ui: 'back',
					handler: function(){tapHandler('home'); Ext.select('.selection').setHeight(0); }
				
				},
				{xtype:'spacer'},
				{
					iconCls:'bug_picture',
					ui:'plain',
					iconMask:true,
					handler: function(){
						bugApp.view.insectPhotoCarousel.removeAll();
						var addedImages= [];
						for(i=0; i<currentInsect.photos.length; i++) {
							addedImages.push({html:'<img src="'+currentInsect.photos[i].image+'" /><p id="photoCaption'+[i]+'" class="photoCaption"><span class="photoName">'+currentInsect.photos[i].name+' </span><span class="photoSciName">'+currentInsect.photos[i].sciName+'</span><br />'+currentInsect.photos[i].citation+'</p>'});
						}
						bugApp.view.insectPhotoCarousel.add(addedImages);

						tapHandler('image');
						bugApp.view.insectPhotoCarousel.doLayout();
						showHideCaption();

						}
					
					}
				
				]
			});
//INSECT ACTION BAR might add back if more features added
		
//		bugApp.view.insectActionBar = new Ext.Toolbar({
//			dock:'bottom',
//			layout:{pack:'right'},
//			items: [{iconCls:'bug_picture',
//					ui:'plain',
//
//					iconMask:true,
//					handler: function(){
//						bugApp.view.insectPhotoCarousel.removeAll();
//						var addedImages= [];
//						for(i=0; i<currentInsect.photos.length; i++) {
//							addedImages.push({html:'<img src="'+currentInsect.photos[i].image+'" /><p id="photoCaption'+[i]+'" class="photoCaption"><span class="photoName">'+currentInsect.photos[i].name+' </span><span class="photoSciName">'+currentInsect.photos[i].sciName+'</span><br />'+currentInsect.photos[i].citation+'</p>'});
//						}
//						bugApp.view.insectPhotoCarousel.add(addedImages);
//
//						tapHandler('image');
//						bugApp.view.insectPhotoCarousel.doLayout();
//												showHideCaption();
//
//						}
//					
//					}],
//
//			});
		
		bugApp.view.imagesBar = new Ext.Toolbar({
			dock:'top',
			items: [
				{	
					ui:'action',
					text:'Done',
					handler: function(){tapHandler('insect',{type: 'slide',direction: 'down', reveal:true });}
				},
				{xtype: 'spacer'},
				removeCaptionButton,showCaptionButton

				]

			});
		
		bugApp.view.feedback2Bar = new Ext.Toolbar({
			dock:'top',
			items:[{
				   ui:'back',
				   text:'Back',
				   handler:function(){bugApp.view.feedbackTab.setActiveItem(bugApp.view.feedbackStep1,{type:'slide',reverse:true});}
				   }]
 		
													  
													  });
		
		bugApp.view.infoBar = new Ext.Toolbar({
			dock:'top',
			items:[{
				   ui:'action',
				   text:'Done',
				   handler:function(){
					   bugApp.view.Main.setActiveItem(bugApp.view.insectCarousel,{type:'slide', direction:'down',reveal:true});
				   }
				   }]
												});
		bugApp.view.infoBar2 = new Ext.Toolbar({
			dock:'top',
			items:[{
				   ui:'action',
				   text:'Done',
				   handler:function(){
					   bugApp.view.Main.setActiveItem(bugApp.view.insectCarousel,{type:'slide', direction:'down',reveal:true});
				   }
				   }]
												});
		
		bugApp.view.imagesBar.items.items[3].setVisible(false);
			
		bugApp.view.insectPhotoCarousel = new Ext.Carousel({

			id:'insectPhotoCarousel',
			dockedItems:[bugApp.view.imagesBar],
			fullscreen: true,
			items:[],

			});
		
		insectPanelTemplate = Ext.XTemplate.from('insectPanelTpl');

		bugApp.view.insectPanel = new Ext.Panel ({
					id:'insectPanel',	
					layout: 'card',
					dockedItems:[bugApp.view.insectBar],
					cls: 'detailsPanel', 
					xtype: 'panel',
					fullscreen: true,
					scroll: 'vertical',
					tpl:insectPanelTemplate
							});		
		
		var tapHandler = function(page, direction){
			if (page=="insect"){bugApp.view.Main.setActiveItem(bugApp.view.insectPanel,direction);}
			else if (page=="home"){bugApp.view.Main.setActiveItem(bugApp.view.insectCarousel,{type: 'slide',reverse: true});}
			else if (page=="image"){bugApp.view.Main.setActiveItem(bugApp.view.insectPhotoCarousel,{type: 'slide',direction:'up',cover:true});}
			}
		
		
		
		var thumbTemp = Ext.XTemplate.from('insectThumbTpl');
		
		var larvaThumbTemp = Ext.XTemplate.from('larvaThumbTpl');
				
		
	insectInfo = Ext.extend(Ext.Container, {
			
			initComponent: function(){
				Ext.apply(this, {
			
			id: this.data.name,
			
			listeners: {
        		
				el:{
	
					
					touchmove: function(){
						moved =1;

						},
					tap: function(){
						if(moved==0){
							selectEl=this.dom.firstElementChild;
							Ext.get(selectEl).setHeight(this.getHeight());

							currentInsect = eval(this.id+'Info');
							bugApp.view.insectPanel.update(currentInsect)
							if(currentInsect.type == 'pest'){
								bugApp.view.insectBar.setTitle('Pest');
							}
							else if(currentInsect.type == 'beneficial'){
								bugApp.view.insectBar.setTitle('Beneficial');
							}
							tapHandler('insect');

							}
						else{
							moved=0}
					}
				}
			}
	    
						  
						  
			});
			
			insectInfo.superclass.initComponent.apply(this);
			}
							});
			
			

var aphid = new insectInfo({
	data : aphidInfo,
	tpl: thumbTemp
	});

	
		var appleMaggot = new insectInfo ({
			data: appleMaggotInfo,
			tpl: thumbTemp
			
		
											 });
		
			var asparagusBeetle = new insectInfo ({
			data: asparagusBeetleInfo,
			tpl: thumbTemp
			
		
											 });
			var assassinBug = new insectInfo ({
			data: assassinBugInfo,
			tpl: thumbTemp
			
		
											 });
			
				var cabbageLooper = new insectInfo ({
			data: cabbageLooperInfo,
			tpl: thumbTemp
			
		
											 });
				
					var cabbageWhite = new insectInfo ({
			data: cabbageWhiteInfo,
			tpl: thumbTemp

											 });
					
					var codlingMoth = new insectInfo ({
			data: codlingMothInfo,
			tpl: thumbTemp

											 });
					
					var coloradoPotatoBeetle = new insectInfo ({
			data: coloradoPotatoBeetleInfo,
			tpl: thumbTemp

		
											 });
					
					var cucumberBeetle = new insectInfo ({
			data: cucumberBeetleInfo,
			tpl: thumbTemp
			
		
											 });
							var fleaBeetle = new insectInfo ({
			data: fleaBeetleInfo,
			tpl: thumbTemp
			});
							
		
		var groundBeetle = new insectInfo ({
			data: groundBeetleInfo,
			tpl: thumbTemp
			
	    });
		
		var harlequin = new insectInfo ({
			data: harlequinInfo,
			tpl: thumbTemp

	    });
		
		var japaneseBeetle = new insectInfo ({
			data: japaneseBeetleInfo,
			tpl: thumbTemp

	    });
		
		var lacewing = new insectInfo ({
			data: lacewingInfo,
			tpl: thumbTemp

	    });
		
		var ladyBug = new insectInfo ({
			data: ladyBugInfo,
			tpl: thumbTemp

	    });
		
		var mexicanBeanBeetle = new insectInfo ({
			data: mexicanBeanBeetleInfo,
			tpl: thumbTemp

	    });
		
		var scale = new insectInfo ({
			data: scaleInfo,
			tpl: thumbTemp

	    });
		
		var slug = new insectInfo ({
			data: slugInfo,
			tpl: thumbTemp

	    });
		
		var spiderMite = new insectInfo ({
			data: spiderMiteInfo,
			tpl: thumbTemp

	    });
		
		var squashBug = new insectInfo ({
			data: squashBugInfo,
			tpl: thumbTemp

	    });
		
		var squashVineBorer = new insectInfo ({
			data: squashVineBorerInfo,
			tpl: thumbTemp

	    });
		
		var thrip = new insectInfo ({
			data: thripInfo,
			tpl: thumbTemp

	    });
		
		var whiteFly = new insectInfo ({
			data: whiteFlyInfo,
			tpl: thumbTemp

	    });
		
		var asparagusBeetleLarva = new insectInfo ({
			data: asparagusBeetleInfo,
			tpl: larvaThumbTemp,

	    });
		
		var cabbageLooperLarva = new insectInfo ({
			data: cabbageLooperInfo,
			tpl: larvaThumbTemp,
			
	    });
		
		var cabbageWhiteLarva = new insectInfo ({
			data: cabbageWhiteInfo,
			tpl: larvaThumbTemp,
			
	    });
		
		var coloradoPotatoBeetleLarva = new insectInfo ({
			data: coloradoPotatoBeetleInfo,
			tpl: larvaThumbTemp,
			
	    });
		
		var cutworm = new insectInfo ({
			data: cutwormInfo,
			tpl: larvaThumbTemp

			
	    });
		
		var coloradoPotatoBeetleLarva = new insectInfo ({
			data: coloradoPotatoBeetleInfo,
			tpl: larvaThumbTemp,
			
	    });
		
		var groundBeetleLarva = new insectInfo ({
			data: groundBeetleInfo,
			tpl: larvaThumbTemp,
			
	    });
		
		var lacewingLarva = new insectInfo ({
			data: lacewingInfo,
			tpl: larvaThumbTemp,
			
	    });
		
		var ladyBugLarva = new insectInfo ({
			data: ladyBugInfo,
			tpl: larvaThumbTemp,
			
	    });
				
		var japaneseBeetleLarva = new insectInfo ({
			data: japaneseBeetleInfo,
			tpl: larvaThumbTemp,
			
	    });
		
		var mexicanBeanBeetleLarva = new insectInfo ({
			data: mexicanBeanBeetleInfo,
			tpl: larvaThumbTemp,
	    });
				
		var insectCarousel0 = new Ext.Container({
			items : [aphid,appleMaggot,asparagusBeetle,assassinBug,cabbageLooper,cabbageWhite,codlingMoth,coloradoPotatoBeetle,cucumberBeetle]										
		});
		
		var insectCarousel1 = new Ext.Container({
			items : [fleaBeetle,groundBeetle,harlequin,japaneseBeetle,lacewing,ladyBug,mexicanBeanBeetle,scale,slug]										
		});
		var insectCarousel2 = new Ext.Container({
			items : [spiderMite,squashBug,squashVineBorer,thrip,whiteFly,asparagusBeetleLarva,cabbageLooperLarva,cabbageWhiteLarva,coloradoPotatoBeetleLarva]										
		});	
		var insectCarousel3 = new Ext.Container({
			items : [cutworm,groundBeetleLarva,lacewingLarva,ladyBugLarva,japaneseBeetleLarva,mexicanBeanBeetleLarva]										
		});	
	
	
	
	bugApp.view.feedbackMain = new Ext.Panel({
			dockedItems:bugApp.view.infoBar,
			html:'<img class="app_icon_img" src="IMG/AppIcon.png"/><p class="version">Bugs in the Garden version 2.0</p><h1>Do you like this app?</h1>',
			iconCls:'heart_circle',
			cls:'feedback_panel',
			layout:{
				type:'vbox'
					},
			items:[{
				xtype:'button',
				ui:'confirm',
				cls:'like_button',
				text:'Yes, I like it.',
				iconCls:'favorites',
				iconMask:true,
				handler:function(){bugApp.view.feedbackTab.setActiveItem(bugApp.view.feedbackPos)},
				},
				{
				xtype:'button',
				cls:'like_button',
				text:"There's a problem...",
				iconCls:'warning_black',
				iconMask:true,
				handler:function(){bugApp.view.feedbackTab.setActiveItem(bugApp.view.feedbackNeg)},

				},   
				]
											});
	
	bugApp.view.feedbackPos = new Ext.Panel({
			dockedItems:bugApp.view.feedback2Bar,
			cls:'feedback_panel',
			html:'<h1>Thanks :-)</h1><p>As an independent developer I truly appreciate App Store reviews. Would you consider rating this app?',
			layout:{
				type:'vbox'
					},
			items: [{
				xtype:'button',
				ui:'confirm',
				text:'Sure! Rate this App',
				iconCls:'action',
				iconMask:true,
				linkId:'rateLink',
				url:'https://userpub.itunes.apple.com/WebObjects/MZUserPublishing.woa/wa/addUserReview?id=412615616&type=Purple+Software',
				plugins:[ new simfla.ux.plugins.linkButton() ]
				}
				]
														   });
	
	bugApp.view.feedbackNeg = new Ext.Panel({
			dockedItems:bugApp.view.feedback2Bar,
			cls:'feedback_panel',
			html:"<h1>I'm sorry :-(</h1><p>As an independent developer I truly appreciate your feedback. Send me an email with any comments or concerns and help me make this App better.",
			layout:{
				type:'vbox'
					},
			items: [{
				xtype:'button',
				text:'Send an email',
				iconCls:'mail',
				iconMask:true,
				linkId: 'mailLink',
				url:'mailto:support@mygardenapps.com',
				plugins:[ new simfla.ux.plugins.linkButton() ]
				}
				]
										   
										   
										   });

	bugApp.view.feedbackTab = new Ext.Panel({
			fullscreen: true,
			layout: 'card',
			cardSwitchAnimation: 'slide',  
			title:'Feedback',
			iconCls:'heart_circle',
			items:[bugApp.view.feedbackMain,bugApp.view.feedbackPos]
			});
			
			
													
	
	bugApp.view.aboutTab = new Ext.Panel({
				dockedItems:bugApp.view.infoBar2,
				title:'About',
				html:"<h1>Hello there!</h1><p>Thanks for your purchase! I work on an organic vegetable farm and always wanted a quick reference for any bugs that I would discover. I couldn't find anything that I would use so I created this App. I'm in the process of adding features and illustrating more bugs. Please let me know what you think. <br/><b>-Justin</b> ",
				iconCls:'info',
				cls:'feedback_panel',
				layout:{
				type:'vbox'
					},
				items: [{
					xtype:'button',
					text:'Send an email',
					iconCls:'mail',
					iconMask:true,
					linkId: 'mailLink',
					url:'mailto:justin@mygardenapps.com',
					plugins:[ new simfla.ux.plugins.linkButton() ]
					}]
			
											});


	bugApp.view.infoTab = new Ext.TabPanel({
				fullscreen:true,
				tabBar:{
					dock:'bottom',
					layout:{
						pack:'center',
				},},
				cardSwitchAnimation:{
					type:'slide',
					cover:true,
				},
				items:[bugApp.view.feedbackTab,bugApp.view.aboutTab],
											 });
	

	bugApp.view.insectCarousel = new Ext.Carousel({
			id:'insectCarousel',
			fullscreen: true,
			layout: 'card',
			direction: 'vertical',
			dockedItems:[bugApp.view.toolBar,insectCarouselLegend],
			defaults: {
				cls:'insectCarousel'	
			},

			items:[insectCarousel0,insectCarousel1,insectCarousel2,insectCarousel3]
						});
		
	
		bugApp.view.Main = new Ext.Panel({
			fullscreen: true,
			layout: 'card',
			cardSwitchAnimation: 'slide',

		
			
			
			items:[bugApp.view.insectCarousel,bugApp.view.insectPanel,bugApp.view.insectPhotoCarousel,bugApp.view.infoTab]
			});
		

    }
});
	
