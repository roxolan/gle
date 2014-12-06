Ext.define('Kmbsvle.view.community.selection.center.dashboard.CommunitySelectionCenterDashboard', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.community.selection.center.dashboard',
    controller: 'community.selection.center.dashboard',
    viewModel: {
        type: 'community.selection.center.dashboard'
    },
    requires: [
        'Kmbsvle.view.community.selection.center.dashboard.CommunitySelectionCenterDashboardController',
        'Kmbsvle.view.community.selection.center.dashboard.CommunitySelectionCenterDashboardModel'
    ],

    bodyPadding: 10,
    title: 'Personal Network of Communities',
    
    html: 'Main Events will unfold here about the Groups, memberships, following and professional communications'

});
