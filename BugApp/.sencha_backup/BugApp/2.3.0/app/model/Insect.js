Ext.define('BugApp.model.Insect', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'id',    type: 'string'},
            {name: 'spriteFile', type:'int'},
            {name: 'spriteRow', type:'int'},
            {name: 'spriteCol', type:'int'},

            {name: 'insectid',  type: 'string' },
            {name: 'name',  type: 'string' },
            {name: 'title', type: 'string'},
            {name: 'type',  type: 'string'},
            {name: 'actualSize',    type: 'string'},
            {name: 'actualSizeNum', type: 'string'},
            {name: 'actualPx', type: 'int'},
            {name: 'actualRowPx', type: 'int'},
            {name: 'actualColPx', type: 'int'},
            {name: 'upTo',  type: 'boolean', defaultValue: true},
            
            {name: 'alt', type: 'boolean', defaultValue:false},
            {name: 'altColPx', type: 'int'},
            
            {name: 'description',   type: 'string'},
            {name: 'plantsAffected',    type: 'string'},
            {name: 'damage',    type: 'string'},
            {name: 'management',    type: 'string'},
            
            {name: 'pestControl',   type: 'string'},
            {name: 'howToAttract',  type: 'string'},
            
            {name: 'larvaSize', type:'sting'},
            {name: 'larvaSizeNum', type:'string'},
            {name: 'lavraPx', type:'int'},
            {name: 'larvaRowPx', type:'int'},
            {name: 'larvaColPx', type:'int'},
            {name: 'larvaOrientation',   type:'sting'},
        ],
        hasMany: {
            model: 'BugApp.model.InsectPhoto',
            name: 'photos',
            associationKey: 'photos'
        },
    }
});