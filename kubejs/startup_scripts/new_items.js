////
// new items created for the pack
//// renik

StartupEvents.registry('item', e => {

  e.create('p3_chat')
  e.create('p3_mob')
  e.create('p3_boss')
  e.create('p3_asc')
  e.create('p3_xp')
  e.create('p3_find')
  e.create('p3_stat')
  e.create('p3_passive')
  e.create('shop_aura_int')
  e.create('shop_support_str')
  e.create('three_seashells')

  e.create('royal_pixie_dust')
  e.create('bobs_void_touched_heart')
  e.create('concentrated_pixie_essence')
  e.create('pixie_friends_dust')


})


StartupEvents.registry('block', e => {

// NO IDEA WHY THIS ONLY WORKS WITH DIAMOND PAXEL OR AXE+
  e.create('nether_stone').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_diamond_tool')
  e.create('infused_nether_stone').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_diamond_tool')
})