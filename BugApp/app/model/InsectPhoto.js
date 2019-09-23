Ext.define('BugApp.model.InsectPhoto', {
    extend: 'Ext.data.Model',

    config:{
        fields: [
            {name:'src',    type:'string'},
            {name:'name',   type:'string'},
            {name:'sciName',    type:'string'},
            {name:'citation',   type:'string'}
        ],
        belongsTo: 'BugApp.model.Insect'
    }
});