Ext.define('bet.controller.BetController', {
    extend: 'Ext.app.Controller',
    stores: [
        'Stats@bet.store'
    ],

    models: [
        'UserStat@bet.model'
    ],

    views: [
        'List@bet.view.stats'
    ],

    init: function () {
        console.log('init');
        this.control({
            'button#btnRefresh': {
                click: this.refreshStats
            },
            'button#printForm': {
                click: this.followPrint
            }
        });
    },

    refreshStats: function(parameters) {
        var me = this;
        me.getStore("Stats@bet.store").reload();
    },

    followPrint: function (parameters) {

        var myPanel = Ext.ComponentQuery.query('allstats');
        var item = myPanel[0].getSelection()[0];
        var user = item.data.user;
        var money = item.data.money;

        Ext.Ajax.request({
            url: '/Home/BurnMyAss',
            method: 'POST',
            params: {
                data: Ext.encode({
                    user: user,
                    money: money
                })
            },
            success: function (response) {
                window.open('/Home/About');
            }
        });
    }
});