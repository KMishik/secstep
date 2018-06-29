modules.define('parent', ['i-bem-dom','b1'], function(provide, bemDom, b1) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
              console.log('Inited block parent');
              this._events(b1).on('блямс', function() {
                console.log('Подчинённый блок "b1" вякнул "блямс"');
              });
            }
        }
    }
}));

});
