modules.define('b1', ['i-bem-dom'], function(provide, BEMDOM){

  provide(BEMDOM.declBlock(this.name,
    {
      /* методы экземпляра */
      onSetMod: {
        newmod: {
          'true': function() {
            this.__base.apply(this, arguments);
            //alert("На меня щёлкнули !");
          }
        }
      }
    },
    {
      /* статические методы */
    }
  ));
});
