////
// Creates Custom Attributes for Mine and Slash
//// renik
// Original Author: Mahj? (all credits to someone over at CTE2: https://www.curseforge.com/minecraft/modpacks/craft-to-exile-2)

const $RangedAttribute = Java.loadClass("net.minecraft.world.entity.ai.attributes.RangedAttribute")

StartupEvents.registry("attribute", e => {
    e.createCustom("kubejs:ele_resist", () => new $RangedAttribute("Elemental Resistance", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:attack_damage", () => new $RangedAttribute("Attack Damage", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:all_physical_damage", () => new $RangedAttribute("All Physical Damage", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:dodge", () => new $RangedAttribute("Dodge", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:armor", () => new $RangedAttribute("Armor", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:magic_shield", () => new $RangedAttribute("Magic Shield", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:skill_damage", () => new $RangedAttribute("Skill Damage", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:all_elemental_damage", () => new $RangedAttribute("Elemental Damage", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:all_dot_damage", () => new $RangedAttribute("Spell Damage", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:total_damage", () => new $RangedAttribute("Spell Damage", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:water_resist", () => new $RangedAttribute("Water Resistance", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:all_water_damage", () => new $RangedAttribute("All Water Damage", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:lightning_resist", () => new $RangedAttribute("Lightning Resistance", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:all_lightning_damage", () => new $RangedAttribute("All Lightning Damage", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:fire_resist", () => new $RangedAttribute("Fire Resistance", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:all_fire_damage", () => new $RangedAttribute("All Fire Damage", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:chaos_resist", () => new $RangedAttribute("Chaos Resistance", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:all_chaos_damage", () => new $RangedAttribute("Chaos Resistance", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:gear_defense", () => new $RangedAttribute("Gear Defense", 1, 0, 1000).setSyncable(true));
    e.createCustom("kubejs:bonus_exp", () => new $RangedAttribute("Bonus Experience", 1, 0, 100).setSyncable(true));
    
    e.createCustom("kubejs:move_speed", () => new $RangedAttribute("Move Speed", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:critical_hit", () => new $RangedAttribute("Critical Hit", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:magic_find", () => new $RangedAttribute("Magic Find", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:plus_lvl_all_spells", () => new $RangedAttribute("+ to All Skills", 1, 0, 100).setSyncable(true));

    e.createCustom("kubejs:all_stats", () => new $RangedAttribute("All Stats", 1, 0, 1000).setSyncable(true));
    e.createCustom("kubejs:strength", () => new $RangedAttribute("Bonus Strength", 1, 0, 1000).setSyncable(true));
    e.createCustom("kubejs:dexterity", () => new $RangedAttribute("Bonus Dexterity", 1, 0, 1000).setSyncable(true));
    e.createCustom("kubejs:intelligence", () => new $RangedAttribute("Bonus Intelligence", 1, 0, 1000).setSyncable(true));
    e.createCustom("kubejs:accuracy", () => new $RangedAttribute("Accuracy", 1, 0, 10000).setSyncable(true));
    e.createCustom("kubejs:trident_damage", () => new $RangedAttribute("Trident Damage", 1, 0, 500).setSyncable(true));
    e.createCustom("kubejs:plus_max_summon", () => new $RangedAttribute("Max Summon", 1, 0, 10).setSyncable(true));
    e.createCustom("kubejs:spell_elemental_damage", () => new $RangedAttribute("Spell Elemental Damage", 1, 0, 1000).setSyncable(true));
    e.createCustom("kubejs:katana_damage", () => new $RangedAttribute("Katana Damage", 1, 0, 1000).setSyncable(true));
    e.createCustom("kubejs:projectile_damage", () => new $RangedAttribute("Projectile Damage", 1, 0, 1000).setSyncable(true));
    e.createCustom("kubejs:health", () => new $RangedAttribute("Health", 1, 0, 1000).setSyncable(true));
    e.createCustom("kubejs:more_food_stats", () => new $RangedAttribute("Bonus Food Stats", 1, 0, 1000).setSyncable(true));
    e.createCustom("kubejs:attack_speed", () => new $RangedAttribute("Attack Speed", 1, 0, 1000).setSyncable(true));
    e.createCustom("kubejs:lifesteal", () => new $RangedAttribute("Lifesteal", 1, 0, 1000).setSyncable(true));
});

EntityJSEvents.attributes(event => {
    event.modify('minecraft:player', attribute => {
        attribute.add("kubejs:ele_resist", 0.0);
        attribute.add("kubejs:attack_damage", 0.0);
        attribute.add("kubejs:all_physical_damage", 0.0);
        attribute.add("kubejs:dodge", 0.0);
        attribute.add("kubejs:armor", 0.0);
        attribute.add("kubejs:magic_shield", 0.0);
        attribute.add("kubejs:all_chaos_damage", 0.0);
        attribute.add("kubejs:all_elemental_damage", 0.0);
        attribute.add("kubejs:all_dot_damage", 0.0);
        attribute.add("kubejs:total_damage", 0.0);
        attribute.add("kubejs:water_resist", 0.0);
        attribute.add("kubejs:all_water_damage", 0.0);
        attribute.add("kubejs:lightning_resist", 0.0);
        attribute.add("kubejs:all_lightning_damage", 0.0);
        attribute.add("kubejs:fire_resist", 0.0);
        attribute.add("kubejs:all_fire_damage", 0.0);
        attribute.add("kubejs:chaos_resist", 0.0);
        attribute.add("kubejs:gear_defense", 0.0);
        attribute.add("kubejs:bonus_exp", 0.0);
        attribute.add("kubejs:move_speed", 0.0);
        attribute.add("kubejs:critical_hit", 0.0);
        attribute.add("kubejs:magic_find", 0.0);
        attribute.add("kubejs:plus_lvl_all_spells", 0.0);
        attribute.add("kubejs:all_stats", 0.0);
        attribute.add("kubejs:strength", 0.0);
        attribute.add("kubejs:dexterity", 0.0);
        attribute.add("kubejs:intelligence", 0.0);
        attribute.add("kubejs:accuracy", 0.0);
        attribute.add("kubejs:trident_damage", 0.0);
        attribute.add("kubejs:plus_max_summon", 0.0);
        attribute.add("kubejs:skill_damage", 0.0);
        attribute.add("kubejs:spell_elemental_damage", 0.0);
        attribute.add("kubejs:katana_damage", 0.0);
        attribute.add("kubejs:projectile_damage", 0.0);
        attribute.add("kubejs:health", 0.0);
        attribute.add("kubejs:more_food_stats", 0.0);
        attribute.add("kubejs:attack_speed", 0.0);
        attribute.add("kubejs:lifesteal", 0.0);
    })
}) 