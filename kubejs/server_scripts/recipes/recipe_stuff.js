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
  event.remove({id: 'cookingforblockheads:spice_rack'})
  event.remove({id: 'cookingforblockheads:fridge'})
  event.remove({id: 'cookingforblockheads:heating_unit'})
  event.remove({id: 'cookingforblockheads:ice_unit'})
  event.remove({id: 'cookingforblockheads:fruit_basket'})
  event.remove({id: 'cookingforblockheads:toaster'})
  event.remove({id: 'cookingforblockheads:tool_rack'})
  event.remove({id: 'cookingforblockheads:fridge'})
  event.remove({id: 'cookingforblockheads:tool_rack'})
  event.remove({id: 'pamhc2foodcore:rolleritem'})
  event.remove({id: 'pamhc2foodcore:skilletitem'})
  event.remove({id: 'pamhc2foodcore:grinderitem'})
  event.remove({id: 'pamhc2foodcore:mixingbowlitem'})
  event.remove({id: 'pamhc2foodcore:bakewareitem'})
  event.remove({id: 'pamhc2foodcore:potitem'})
  event.remove({id: 'pamhc2foodcore:cuttingboarditem'})
  event.remove({id: 'pamhc2foodcore:saucepanitem'})
  event.remove({id: 'pamhc2foodcore:juiceritem'}) 
  event.remove({id: 'cookingforblockheads:crafting_book'})
  event.remove({id: 'astral_dimension:nanta_star_recipe'})

//
})
//

ServerEvents.recipes(event => {

// Replace Wheat Dough w/ Create Dough
  event.replaceInput({}, 'pamhc2foodcore:doughitem', 'create:dough')
  event.replaceInput({}, 'refurbished_furniture:dough', 'create:dough')

  })