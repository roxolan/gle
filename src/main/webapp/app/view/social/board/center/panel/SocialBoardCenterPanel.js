Ext.define('Kmbsvle.view.social.board.center.panel.SocialBoardCenterPanel', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.social.board.center.panel',
    controller: 'social.board.center.panel',
    viewModel: {
        type: 'social.board.center.panel'
    },
    requires: [
        'Kmbsvle.view.social.board.center.panel.SocialBoardCenterPanelController',
        'Kmbsvle.view.social.board.center.panel.SocialBoardCenterPanelModel'
    ],

    bodyPadding: 10,
    title: 'Social Center',
    
    html: 'Main Events will unfold here about the Groups, memberships, following and professional communications'

});
