Ext.define('Kmbsvle.view.community.board.center.list.CommunityBoardCenterList', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.community.board.center.list',
    controller: 'community.board.center.list',
    viewModel: {
        type: 'community.board.center.list'
    },
    requires: [
        'Kmbsvle.view.community.board.center.list.CommunityBoardCenterListController',
        'Kmbsvle.view.community.board.center.list.CommunityBoardCenterListModel'
    ],

    bodyPadding: 10,
    title: 'Community List',
  
    html: 'Community Board list of all communities to manage by managers and admins'

});
