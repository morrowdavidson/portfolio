Ext.define('BugApp.model.Insect', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'id',    type: 'int'},
            {name: 'insectid',  type: 'string' },
            {name: 'name',  type: 'string' },
            {name: 'title', type: 'string'},
            {name: 'type',  type: 'string'},
            {name: 'actualSize',    type: 'string'},
            {name: 'actualSizeNum', type: 'string'},
            {name: 'upTo',  type: 'boolean', defaultValue: true},
            {name: 'description',   type: 'string'},
            
            {name: 'plantsAffected',    type: 'string'},
            {name: 'damage',    type: 'string'},
            {name: 'management',    type: 'string'},
            
            {name: 'pestControl',   type: 'string'},
            {name: 'howToAttract',  type: 'string'},
            
            {name: 'larvaSize', type:'sting'},
            {name: 'larvaSizeNum', type:'string'},
            {name: 'larvaOrientation',   type:'sting'},
        ],
        hasMany: {
            model: 'BugApp.model.InsectPhoto',
            name: 'photos',
            associationKey: 'photos'
        },
    }
});