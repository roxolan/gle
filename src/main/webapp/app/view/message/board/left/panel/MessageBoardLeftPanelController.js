Ext.define('Kmbsvle.view.message.board.left.panel.MessageBoardLeftPanelController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.message.board.left.panel',
  
    openMessageSingleWindow: function() {
        
        Ext.Msg.alert('clicked!', 'single message');
    
    }


}); 
