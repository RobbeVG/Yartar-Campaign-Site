---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/feywild
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fey
title: "Dire Worg"
aliases:
- "Dire Worg"
---
# Dire Worg
*Source: Monster Manual (2024) p. 335*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Dire%20Worg.webp#right)

Dire worgs are larger than common worgs and possess a supernaturally terrifying howl. They frequently hunt alongside ettins, ogres, and trolls.

## Worgs

*Malicious Lupine Ravagers*

- **Habitat.** Forest, Grassland, Hill, Planar (Feywild)  
- **Treasure.** None  

Sometimes mistaken at first for giant wolves, worgs are vicious hunters. These sapient predators can speak and often taunt their prey, enjoying the taste of fear in their meals.

```ad-statblock
title: Dire Worg
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Dire%20Worg.webp#token)
*Huge Fey, Neutral Evil*

- **Armor Class** 16 
- **Hit Points** 147 (14d12 + 56) 
- **Speed** 50 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 22 | +6 | +6 |
|Int| 7 | -2 | -2 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 14 | +2 | **+6** |
|Wis| 16 | +3 | **+7** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 18 | +4 | +4 |
|Cha| 8 | -1 | -1 |


- **Proficiency Bonus** +4
- **Saving Throws** Dexterity +6, Wisdom +7
- **Skills** [Perception](3.Mechanics/rules/skills.md#Perception) +11
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 Ft., Passive Perception 21
- **Languages** Goblin, Sylvan, Worg
- **Challenge** 10

## Traits

***Magic Resistance.*** The worg has [Advantage](3.Mechanics/rules/variant-rules/advantage-xphb.md) on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** The worg makes three Bite attacks.

***Bite.*** *Melee Attack Roll:* `dice:1d20+10|noform|noparens|text(+10)`, reach 5 ft. *Hit:* `dice:2d8+6|noform|noparens|avg|text(15)` (`2d8 + 6`) Piercing damage plus `dice:2d6|noform|noparens|avg|text(7)` (`2d6`) Poison damage, and the target has the [Poisoned](3.Mechanics/rules/conditions.md#Poisoned) condition until the start of the worg's next turn. While [Poisoned](3.Mechanics/rules/conditions.md#Poisoned), the target can't regain [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md).

***Dreadful Howl (Recharge 5-6).*** *Wisdom Saving Throw:* DC 16, each creature within 30 feet that isn't a worg. *Failure:* `dice:8d8|noform|noparens|avg|text(36)` (`8d8`) Psychic damage, and the target has the [Frightened](3.Mechanics/rules/conditions.md#Frightened) condition until the start of the worg's next turn. *Success:* Half damage only.

## Bonus Actions

***Warp Step.*** The worg teleports, along with a willing creature of its choice within 5 feet of it, up to 30 feet to an unoccupied space it can see.
```
^statblock

## Environment

forest, grassland, hill, planar, feywild