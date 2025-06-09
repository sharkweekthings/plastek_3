////
// remove recipes
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'toybox:toybox_recipe_2'})
  event.remove({id: 'tempad:tempad'})
  event.remove({id: 'mysticalagriculture:infusion_altar'})
  event.remove({id: 'waystones:warp_stone'})
  event.remove({id: 'projecte:transmutation_table'})
  event.remove({id: 'scannable:scanner'})

//
})
//

ServerEvents.recipes(event => {

// Replace Wheat Dough w/ Create Dough
  event.replaceInput({}, 'pamhc2foodcore:doughitem', 'create:dough')
  event.replaceInput({}, 'refurbished_furniture:dough', 'create:dough')

  })