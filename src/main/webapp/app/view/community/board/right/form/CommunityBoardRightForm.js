Ext.define('Kmbsvle.view.community.board.right.form.CommunityBoardRightForm', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.community.board.right.form',
    controller: 'community.board.right.form',
    viewModel: {
        type: 'community.board.right.form'
    },
    requires: [
        'Kmbsvle.view.community.board.right.form.CommunityBoardRightFormController',
        'Kmbsvle.view.community.board.right.form.CommunityBoardRightFormModel'
    ],
    header: false,
    html: 'Community Form', 
    width: 200,
    bodyPadding: 10
  
});
