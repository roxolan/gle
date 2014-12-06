Ext.define('Kmbsvle.view.community.selection.center.communitylist.CommunitySelectionCenterCommunitylist', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.community.selection.center.communitylist',
    controller: 'community.selection.center.communitylist',
    viewModel: {
        type: 'community.selection.center.communitylist'
    },
    requires: [
        'Kmbsvle.view.community.selection.center.communitylist.CommunitySelectionCenterCommunitylistController',
        'Kmbsvle.view.community.selection.center.communitylist.CommunitySelectionCenterCommunitylistModel'
    ],

    bodyPadding: 10,
    title: 'Personal Network of Communities',
    
    html: 'Main Events will unfold here about the Groups, memberships, following and professional communications'

});
