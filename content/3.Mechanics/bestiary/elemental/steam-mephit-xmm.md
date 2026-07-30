---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/elemental
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/elemental
title: "Steam Mephit"
aliases:
- "Steam Mephit"
conditionImmunities:
- [exhaustion](3.Mechanics/rules/conditions.md#Exhaustion)
- [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
---
# Steam Mephit
*Source: Monster Manual (2024) p. 208. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Smoke%20and%20Steam%20Mephits.webp#right)

These arrogant mephits are made of heat and vaporous water. They often trick creatures into doing them favors, then renege on promised rewards.

## Mephits

*Malicious Elemental Hooligans*

- **Habitat.** Planar (Elemental Planes)  
- **Treasure.** None  

Mephits are mean-spirited tricksters that dwell on the Elemental Planes. The six most prominent types of mephits resemble halfling-size gargoyles with wings, exaggerated features, and bodies composed of two elements. Most live self-interested existences, indulging their warped senses of humor or overblown egos on their home planes of existence. Some serve as messengers or spies for genies or magic-users.

Mephits resent leaving the elemental extremes where they make their homes. If loosed on the Material Plane or other realms, they lash out with nasty pranks or by tormenting weaker creatures. When destroyed, mephits explode in a burst of elemental magic.

> [!quote] A quote from Seamusxanthuszenus, smoke mephit with a typically inflated impression of itself  
> 
> I am Seamusxanthuszenus, Slayer of Fiends, Merchant Most Excellent, Purveyor of Death!


```ad-statblock
title: Steam Mephit
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Steam%20Mephit.webp#token)
*Small Elemental, Neutral Evil*

- **Armor Class** 10 
- **Hit Points** 17 (5d6) 
- **Speed** 30 ft., fly 30 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 5 | -3 | -3 |
|Int| 11 | +0 | +0 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 11 | +0 | +0 |
|Wis| 10 | +0 | +0 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 10 | +0 | +0 |
|Cha| 12 | +1 | +1 |


- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** [Stealth](3.Mechanics/rules/skills.md#Stealth) +2
- **Damage Immunities** Fire, Poison
- **Condition Immunities** [Exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [Poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 60 Ft., Passive Perception 10
- **Languages** Primordial (Aquan, Ignan)
- **Challenge** 1/4

## Traits

***Blurred Form.*** Attack rolls against the mephit are made with [Disadvantage](3.Mechanics/rules/variant-rules/disadvantage-xphb.md) unless the mephit has the [Incapacitated](3.Mechanics/rules/conditions.md#Incapacitated) condition.

***Death Burst.*** The mephit explodes when it dies. *Dexterity Saving Throw:* DC 10, each creature in a 5-foot [Emanation](3.Mechanics/rules/variant-rules/emanation-area-of-effect-xphb.md) originating from the mephit. *Failure:* `dice:2d4|noform|noparens|avg|text(5)` (`2d4`) Fire damage. *Success:* Half damage.

## Actions

***Claw.*** *Melee Attack Roll:* `dice:1d20+2|noform|noparens|text(+2)`, reach 5 ft. *Hit:* `dice:1d4|noform|noparens|avg|text(2)` (`1d4`) Slashing damage plus `dice:1d4|noform|noparens|avg|text(2)` (`1d4`) Fire damage.

***Steam Breath (Recharge 6).*** *Constitution Saving Throw:* DC 10, each creature in a 15-foot [Cone](3.Mechanics/rules/variant-rules/cone-area-of-effect-xphb.md). *Failure:* `dice:2d4|noform|noparens|avg|text(5)` (`2d4`) Fire damage, and the target's [Speed](3.Mechanics/rules/variant-rules/speed-xphb.md) decreases by 10 feet until the end of the mephit's next turn. *Success:* Half damage only. *Failure or Success:* Being underwater doesn't grant [Resistance](3.Mechanics/rules/variant-rules/resistance-xphb.md) to this Fire damage.
```
^statblock

## Environment

planar, elemental