Ext.define('Kmbsvle.view.community.selection.right.communityform.CommunitySelectionRightCommunityform', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.community.selection.right.communityform',

    controller: 'community.selection.right.communityform',
    viewModel: {
        type: 'community.selection.right.communityform'
    },
    requires: [
        'Kmbsvle.view.community.selection.right.communityform.CommunitySelectionRightCommunityformController',
        'Kmbsvle.view.community.selection.right.communityform.CommunitySelectionRightCommunityformModel'  
    ],
    header: false,
    html: 'Settings for my Communities',
    width: 200,
    bodyPadding: 10

});
