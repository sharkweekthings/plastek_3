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
  event.remove({id: 'torchmaster:megatorch'})
  event.remove({id: 'torchmaster:dreadlamp'})
  event.remove({id: 'minepop:random_box_recp'})
  event.remove({id: 'epicpaladins:angel_helmet'})
  event.remove({id: 'epicpaladins:angel_chestplate'})
  event.remove({id: 'epicpaladins:angel_leggings'})
  event.remove({id: 'epicpaladins:angel_boots'})
  event.remove({id: 'epicpaladins:assassin_helmet'})
  event.remove({id: 'epicpaladins:assassin_chestplate'})
  event.remove({id: 'epicpaladins:assassin_eggings'})
  event.remove({id: 'epicpaladins:angel_boots'})
  event.remove({id: 'epicpaladins:steel_ingot_from_blasting_iron_ingot'})
  event.remove({id: 'magistuarmory:steel_ingot_blasting'})
  event.remove({id: 'magistuarmory:furnace/steel_ingot_blasting'})
  event.remove({id: 'pamhc2foodcore:doughitem_x2'})
  event.remove({id: 'botanypotstiers:crafting/creative_terracotta_botany_pot_2'})
  event.remove({id: 'botanypotstiers:crafting/creative_terracotta_compact_hopper_botany_pot_2'})
  event.remove({id: 'botanypotstiers:crafting/creative_terracotta_compact_hopper_botany_pot_3'})
  event.remove({id: 'elevatorid:elevator_orange'})
  event.remove({id: 'elevatorid:elevator_magenta'})
  event.remove({id: 'elevatorid:elevator_light_blue'})
  event.remove({id: 'elevatorid:elevator_yellow'})
  event.remove({id: 'elevatorid:elevator_lime'})
  event.remove({id: 'elevatorid:elevator_pink'})
  event.remove({id: 'elevatorid:elevator_gray'})
  event.remove({id: 'elevatorid:elevator_light_gray'})
  event.remove({id: 'elevatorid:elevator_cyan'})
  event.remove({id: 'elevatorid:elevator_purple'})
  event.remove({id: 'elevatorid:elevator_blue'})
  event.remove({id: 'elevatorid:elevator_brown'})
  event.remove({id: 'elevatorid:elevator_green'})
  event.remove({id: 'elevatorid:elevator_red'})
  event.remove({id: 'elevatorid:elevator_black'})
  event.remove({id: 'elevatorid:elevator_white'})
  event.remove({id: 'botania:mana_infusion/diorite_to_granite'})

  event.remove({ mod: 'a_man_with_plushies' })
  event.remove({ mod: 'plushies' })
  event.remove({ mod: 'ultimine_addition' })
//
})
//

ServerEvents.recipes(event => {

// MMORPG Stone Convert # to #
  event.shaped('mmorpg:stone/1',
    [' 1 ','121',' 1 '], {
    1: 'mmorpg:stone/0',
    2: '#p3:ma_1'}).id('p3:stone_convert_0_to_1')

// MMORPG Stone Convert 1 to 2
  event.shaped('mmorpg:stone/2',
    [' 1 ','121',' 1 '], {
    1: 'mmorpg:stone/1',
    2: '#p3:ma_2'}).id('p3:stone_convert_1_to_2')

// MMORPG Stone Convert 2 to 3
  event.shaped('mmorpg:stone/3',
    [' 1 ','121',' 1 '], {
    1: 'mmorpg:stone/2',
    2: '#p3:ma_3'}).id('p3:stone_convert_2_to_3')

// MMORPG Stone Convert 3 to 4
  event.shaped('mmorpg:stone/4',
    [' 1 ','121',' 1 '], {
    1: 'mmorpg:stone/3',
    2: '#p3:ma_4'}).id('p3:stone_convert_3_to_4')

// MMORPG Stone Convert 4 to 5
  event.shaped('mmorpg:stone/5',
    [' 1 ','121',' 1 '], {
    1: 'mmorpg:stone/4',
    2: '#p3:ma_5'}).id('p3:stone_convert_4_to_5')

// Bottle To Bag Weak
  event.shaped('2x ocean_recovery:plastic_bag',
    [' 1 ','232',' 2 '], {
    1: '#mysticalagriculture:infusion_crystals',
    2: 'mysticalagriculture:fire_essence',
    3: 'ocean_recovery:plastic_bottle'}).id('p3:bottle_to_bag')

// MMORPG Stone Convert 5 to 4
  event.shapeless(Item.of('4x mmorpg:stone/4'), ['mmorpg:stone/5']).id('p3_stone_convert_5_to_4')

// MMORPG Stone Convert 4 to 3
  event.shapeless(Item.of('4x mmorpg:stone/3'), ['mmorpg:stone/4']).id('p3_stone_convert_4_to_3')

// MMORPG Stone Convert 3 to 2
  event.shapeless(Item.of('4x mmorpg:stone/2'), ['mmorpg:stone/3']).id('p3_stone_convert_3_to_2')

// MMORPG Stone Convert 2 to 1
  event.shapeless(Item.of('4x mmorpg:stone/1'), ['mmorpg:stone/2']).id('p3_stone_convert_2_to_1')

// MMORPG Stone Convert 1 to 0
  event.shapeless(Item.of('4x mmorpg:stone/0'), ['mmorpg:stone/1']).id('p3_stone_convert_1_to_0')




// // MMORPG Stone Convert 5 to 6
//   event.shaped('mmorpg:stone/6',
//     [' 1 ','121',' 1 '], {
//     1: 'mmorpg:stone/5',
//     2: 'p3:ma_5'}).id('p3:stone_convert_5_to_6')

// Replace Wheat Dough w/ Create Dough
  event.replaceInput({}, 'pamhc2foodcore:doughitem', 'create:dough')
  event.replaceInput({}, 'refurbished_furniture:dough', 'create:dough')

  event.replaceInput({}, 'ocean_recovery:plastic_shard', 'ocean_recovery:plastic_bottle')

  event.replaceInput({}, 'magistuarmory:steel_ingot', 'samurai_dynasty:steel_ingot')
  event.replaceInput({}, 'epicpaladins:steel_ingot', 'samurai_dynasty:steel_ingot')
  event.replaceInput({}, 'tconstruct:steel_ingot', 'samurai_dynasty:steel_ingot')
  event.replaceOutput({}, 'magistuarmory:steel_ingot', 'samurai_dynasty:steel_ingot')
  event.replaceOutput({}, 'epicpaladins:steel_ingot', 'samurai_dynasty:steel_ingot')
  event.replaceOutput({}, 'tconstruct:steel_ingot', 'samurai_dynasty:steel_ingot')

  })