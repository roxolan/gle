Ext.define('Kmbsvle.view.community.selection.right.pad.CommunitySelectionRightPad', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.community.selection.right.pad',

    controller: 'community.selection.right.pad',
    viewModel: {
        type: 'community.selection.right.pad'
    },
    requires: [
        'Kmbsvle.view.community.selection.right.pad.CommunitySelectionRightPadController',
        'Kmbsvle.view.community.selection.right.pad.CommunitySelectionRightPadModel'  
    ],
    header: false,
    html: 'Community Pad',
    width: 200,
    bodyPadding: 10

});
