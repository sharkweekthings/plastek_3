// ////
// // new items created for the pack
// //// renik


// // WorldgenEvents.add(event => {

//   // // Cultist spawn in specific Blue Skies biomes
//   // event.addSpawn(spawn => {
//   //   spawn.category = 'monster';
//   //   spawn.entity   = 'ba_bt:cultist';
//   //   spawn.weight   = 5000;
//   //   spawn.minCount = 1;
//   //   spawn.maxCount = 4;

//   //   // Add specific biome IDs (no tags)
//   //   spawn.biomes.id('blue_skies:crystal_clearing'); // replace with real biome ID
//   //   spawn.biomes.id('blue_skies:snowy_chamber');    // example placeholder
//   // });


// WorldgenEvents.add(event => {

//   event.addSpawn(spawn => {
//     spawn.category = 'creature';
//     spawn.entity   = 'ba_bt:bt_cultist';
//     spawn.weight   = 5000;
//     spawn.minCount = 1;
//     spawn.maxCount = 4;
//     spawn.biomes = ['#minecraft:is_overworld', '#minecraft:is_ocean',  '#minecraft:is_savanna', '#minecraft:is_plains'];
//   });

// });