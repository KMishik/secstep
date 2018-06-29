modules.define('b1', ['i-bem-dom'], function(provide, BEMDOM){

  provide(BEMDOM.declBlock(this.name,
    {
      /* методы экземпляра */
      onSetMod: {
        js: {
          inited: function() {
            console.log('Inited block b1');
            this._events().on('блямс', function() {
              console.log('БЭМ событие "блямс"');
            })
          },
          '': function() {
            // действия при удалении блока
            console.log('Deleted block');
          }
        },
        newmod: {
          'true': function() {
            this.m1();
          },
          '': function() {
            console.log("Я ЧЁРНЫЙ.");
          }
        }
      },
      m1: function() {
        console.log('Я стал КРАСНЫМ ! Офигеть !');
      }
    },
    {
      /* статические методы */
      lazyInit: true,
      onInit: function() {
        this._domEvents().on('click', function() {
          this.hasMod('disabled') || this._emit('блямс');
          this.toggleMod('newmod');
        });
      }
    }
  ));
});
