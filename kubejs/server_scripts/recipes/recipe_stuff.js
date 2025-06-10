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
  event.remove({id: 'pamhc2foodcore:tool_roller'})
  event.remove({id: 'pamhc2foodcore:tool_skillet'})

  event.remove({id: 'pamhc2foodcore:tool_grinder'})
  event.remove({id: 'pamhc2foodcore:tool_mixingbowl'})
  event.remove({id: 'pamhc2foodcore:tool_bakeware'})
  event.remove({id: 'pamhc2foodcore:tool_pot'})
  event.remove({id: 'pamhc2foodcore:tool_cuttingboard'})
  event.remove({id: 'pamhc2foodcore:tool_saucepan'})
  event.remove({id: 'pamhc2foodcore:tool_juicer'}) 

  event.remove({id: 'cookingforblockheads:crafting_book'})
  event.remove({id: 'astral_dimension:nanta_star_recipe'})
  event.remove({id: 'icarus:feathered_wings'})
  event.remove({id: 'botania:flighttiara_0'})
  event.remove({id: 'bosses_of_mass_destruction:levitation_block'})
  event.remove({id: 'projecte:swiftwolf_rending_gale'})
//
})
//

ServerEvents.recipes(event => {

// Replace Wheat Dough w/ Create Dough
  event.replaceInput({}, 'pamhc2foodcore:doughitem', 'create:dough')
  event.replaceInput({}, 'refurbished_furniture:dough', 'create:dough')

  })