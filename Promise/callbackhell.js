//Callback hell terjadi karena banyak sekali callback function yang bersarang karena saling membutuhkan satu sama lain

function makeACake(...rawIngredients) {
  gatheringIngredients(rawIngredients, function (ingridients) {
    makeTheDough(ingridients, function (dough) {
      pourDough(dough, function (pouredDough) {
        bakeACake(pouredDough, function (cake) {
          console.log(cake);
        });
      });
    });
  });
}
