---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/undead
title: "Death Knight"
aliases:
- "Death Knight"
conditionImmunities:
- [exhaustion](3.Mechanics/rules/conditions.md#Exhaustion)
- [frightened](3.Mechanics/rules/conditions.md#Frightened)
- [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
---
# Death Knight
*Source: Monster Manual (2024) p. 92*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Death%20Knights.webp#right)

Death knights are deadly combatants and domineering commanders with grim histories. Some strive to end the curses that doom them to undeath, though their selfish souls eternally shackle them to their fates. Others, like the infamous death knight Lord Soth, brood in dismal ruins for centuries, rousing themselves to action only when something reignites their deathless evil.

## Death Knights

*Haunted Commanders of Unliving Legions*

- **Habitat.** Any  
- **Treasure.** [Armaments](3.Mechanics/tables/random-magic-items-armaments.md)  

Champions of evil, death knights are armor-clad, skeletal warlords. Combining devastating martial prowess and blasphemous magic, these undying tyrants lead unholy legions against the living or brood in cursed citadels. Every death knight is haunted by a legacy of tragedy and dishonor that drives it to commit greater evils.

```ad-statblock
title: Death Knight
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Death%20Knight.webp#token)
*Small or Medium Undead, Chaotic Evil*

- **Armor Class** 20 
- **Hit Points** 199 (21d8 + 105) 
- **Speed** 30 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 20 | +5 | +5 |
|Int| 12 | +1 | +1 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 11 | +0 | **+6** |
|Wis| 16 | +3 | **+9** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 20 | +5 | +5 |
|Cha| 18 | +4 | +4 |


- **Proficiency Bonus** +6
- **Saving Throws** Dexterity +6, Wisdom +9
- **Skills** ⏤
- **Damage Immunities** Necrotic, Poison
- **Condition Immunities** [Exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [Frightened](3.Mechanics/rules/conditions.md#Frightened), [Poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 Ft., Passive Perception 13
- **Languages** Abyssal, Common
- **Challenge** 17

## Traits

***Legendary Resistance (3/Day).*** If the death knight fails a saving throw, it can choose to succeed instead.

***Magic Resistance.*** The death knight has [Advantage](3.Mechanics/rules/variant-rules/advantage-xphb.md) on saving throws against spells and other magical effects.

***Marshal Undead.*** Undead creatures of the death knight's choice (excluding itself) in a 60-foot [Emanation](3.Mechanics/rules/variant-rules/emanation-area-of-effect-xphb.md) originating from it have [Advantage](3.Mechanics/rules/variant-rules/advantage-xphb.md) on attack rolls and saving throws. It can't use this trait if it has the [Incapacitated](3.Mechanics/rules/conditions.md#Incapacitated) condition.

***Undead Restoration.*** If the death knight is destroyed before it atones for its evil, it gains a new body in `dice:1d10|noform|noparens|avg` (`1d10`) days, reviving with all its [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md). The new body appears in a location significant to the death knight.

## Actions

***Multiattack.*** The death knight makes three Dread Blade attacks.

***Dread Blade.*** *Melee Attack Roll:* `dice:1d20+11|noform|noparens|text(+11)`, reach 5 ft. *Hit:* `dice:2d6+5|noform|noparens|avg|text(12)` (`2d6 + 5`) Slashing damage plus `dice:3d8|noform|noparens|avg|text(13)` (`3d8`) Necrotic damage.

***Hellfire Orb (Recharge 5-6).*** *Dexterity Saving Throw:* DC 18, each creature in a 20-foot-radius [Sphere](3.Mechanics/rules/variant-rules/sphere-area-of-effect-xphb.md) centered on a point the death knight can see within 120 feet. *Failure:* `dice:10d6|noform|noparens|avg|text(35)` (`10d6`) Fire damage plus `dice:10d6|noform|noparens|avg|text(35)` (`10d6`) Necrotic damage. *Success:* Half damage.

***Spellcasting.*** The death knight casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 18):

**At will:** [Command](3.Mechanics/spells/command-xphb.md), [Phantom Steed](3.Mechanics/spells/phantom-steed-xphb.md)

**2/day each:** [Destructive Wave](3.Mechanics/spells/destructive-wave-xphb.md) (Necrotic), [Dispel Magic](3.Mechanics/spells/dispel-magic-xphb.md)

## Reactions

***Parry.*** Trigger: The death knight is hit by a melee attack roll while holding a weapon. _Response:_ The death knight adds 6 to its AC against that attack, possibly causing it to miss.

## Legendary Actions

Legendary Action Uses: 3. Immediately after another creature's turn, the death knight can expend a use to take one of the following actions. The death knight regains all expended uses at the start of each of its turns.

***Dread Authority.*** The death knight uses Spellcasting to cast [Command](3.Mechanics/spells/command-xphb.md). The death knight can't take this action again until the start of its next turn.

***Fell Word.*** *Constitution Saving Throw:* DC 18, one creature the death knight can see within 120 feet. *Failure:* `dice:5d6|noform|noparens|avg|text(17)` (`5d6`) Necrotic damage, and the target's [Hit Point](3.Mechanics/rules/variant-rules/hit-points-xphb.md) maximum decreases by an amount equal to the damage taken. *Failure or Success:* The death knight can't take this action again until the start of its next turn.

***Lunge.*** The death knight moves up to half its [Speed](3.Mechanics/rules/variant-rules/speed-xphb.md), and it makes one Dread Blade attack.
```
^statblock

## Environment

any