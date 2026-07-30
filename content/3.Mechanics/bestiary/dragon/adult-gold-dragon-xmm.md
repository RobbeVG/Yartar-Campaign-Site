---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/dragon/metallic
title: "Adult Gold Dragon"
aliases:
- "Adult Gold Dragon"
---
# Adult Gold Dragon
*Source: Monster Manual (2024) p. 145. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![An adult gold dragon guards the site of a mysterious seal from intruders](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Gold%20Dragon.webp#right)

Adult gold dragons act subtly, frequently changing their shape to resemble harmless animals or cultivating personas so they can pass as common people.

## Gold Dragons

*Dragons of Hope and Majesty*

- **Habitat.** Forest, Grassland  
- **Treasure.** [Arcana](3.Mechanics/tables/random-magic-items-arcana.md)  

Gold dragons work to make the world a better place. The most powerful of the metallic dragons, these awe-inspiring dragons strive to protect that which is good and bend fate toward a brighter future. Their kind dispositions don't prevent gold dragons from engaging in combat when necessary, though, and they exhale brilliant flames and weakening magic to rout their foes.

Gold dragons favor grasslands and pristine forests, frequently dwelling near awe-inspiring natural wonders or guarding monuments from ancient civilizations. In their lairs, gold dragons hoard coins and gems, but they frequently put their treasure to use in pursuit of greater goals. They often use their riches to buy rare lore books, pay informants, or patronize idealistic adventurers.

### Gold Dragon Lairs

Gold dragons make their homes in places of natural and magical wonder.

## Statblock

```ad-statblock
title: Adult Gold Dragon
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Adult%20Gold%20Dragon.webp#token)
*Huge dragon (metallic), Lawful Good*

- **Armor Class** 19 
- **Hit Points** 243 (`18d12 + 126`) 
- **Speed** 40 ft., fly 80 ft., swim 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|27 (+8)|14 (+2)|25 (+7)|16 (+3)|15 (+2)|24 (+7)|

- **Proficiency Bonus** +6
- **Saving Throws** Dexterity +8, Wisdom +8
- **Skills** [Insight](3.Mechanics/rules/skills.md#Insight) +8, [Perception](3.Mechanics/rules/skills.md#Perception) +14, [Persuasion](3.Mechanics/rules/skills.md#Persuasion) +13, [Stealth](3.Mechanics/rules/skills.md#Stealth) +8
- **Senses** [Blindsight](3.Mechanics/rules/senses.md#Blindsight) 60 ft., [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 ft., passive Perception 24
- **Damage Immunities** fire
- **Languages** Common, Draconic
- **Challenge** 17

## Traits

***Amphibious.*** The dragon can breathe air and water.

***Legendary Resistance (3/Day, or 4/Day in Lair).*** If the dragon fails a saving throw, it can choose to succeed instead.

## Actions

***Multiattack.*** The dragon makes three Rend attacks. It can replace one attack with a use of (A) Spellcasting to cast [Guiding Bolt](3.Mechanics/spells/guiding-bolt-xphb.md) (level 2 version) or (B) Weakening Breath.

***Rend.*** *Melee Attack Roll:* `dice:1d20+14|noform|noparens|text(+14)`, reach 10 ft. *Hit:* `dice:2d8+8|noform|noparens|avg|text(17)` (`2d8 + 8`) Slashing damage plus `dice:1d8|noform|noparens|avg|text(4)` (`1d8`) Fire damage.

***Fire Breath (Recharge 5-6).*** *Dexterity Saving Throw:* DC 21, each creature in a 60-foot [Cone](3.Mechanics/rules/variant-rules/cone-area-of-effect-xphb.md). *Failure:* `dice:12d10|noform|noparens|avg|text(66)` (`12d10`) Fire damage. *Success:* Half damage.

***Weakening Breath.*** *Strength Saving Throw:* DC 21, each creature that isn't currently affected by this breath in a 60-foot [Cone](3.Mechanics/rules/variant-rules/cone-area-of-effect-xphb.md). *Failure:* The target has [Disadvantage](3.Mechanics/rules/variant-rules/disadvantage-xphb.md) on Strength-based [D20 Tests](3.Mechanics/rules/variant-rules/d20-test-xphb.md) and subtracts `dice:1d6|noform|noparens|avg|text(3)` (`1d6`) from its damage rolls. It repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically.

***Spellcasting.*** The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 21, `dice:1d20+13|noform|noparens|text(+13)` to hit with spell attacks):

**At will:** [Detect Magic](3.Mechanics/spells/detect-magic-xphb.md), [Guiding Bolt](3.Mechanics/spells/guiding-bolt-xphb.md) (level 2 version), [Shapechange](3.Mechanics/spells/shapechange-xphb.md) (Beast or Humanoid form only, no [Temporary Hit Points](3.Mechanics/rules/variant-rules/temporary-hit-points-xphb.md) gained from the spell, and no [Concentration](3.Mechanics/rules/conditions.md#Concentration) or [Temporary Hit Points](3.Mechanics/rules/variant-rules/temporary-hit-points-xphb.md) required to maintain the spell)

**1/day each:** [Flame Strike](3.Mechanics/spells/flame-strike-xphb.md), [Zone of Truth](3.Mechanics/spells/zone-of-truth-xphb.md)

## Legendary Actions

Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.

***Banish.*** *Charisma Saving Throw:* DC 21, one creature the dragon can see within 120 feet. *Failure:* `dice:3d6|noform|noparens|avg|text(10)` (`3d6`) Force damage, and the target has the [Incapacitated](3.Mechanics/rules/conditions.md#Incapacitated) condition and is transported to a harmless demiplane until the start of the dragon's next turn, at which point it reappears in an unoccupied space of the dragon's choice within 120 feet of the dragon. *Failure or Success:* The dragon can't take this action again until the start of its next turn.

***Guiding Light.*** The dragon uses Spellcasting to cast [Guiding Bolt](3.Mechanics/spells/guiding-bolt-xphb.md) (level 2 version).

***Pounce.*** The dragon moves up to half its [Speed](3.Mechanics/rules/variant-rules/speed-xphb.md), and it makes one Rend attack.

## Regional Effects

The region containing an adult or ancient gold dragon's lair is altered by its presence, creating the following effects:

- **Dream Messenger.** While in its lair, the dragon can cast [Dream](3.Mechanics/spells/dream-xphb.md), requiring no Material components and using Charisma as the spellcasting ability. When casting the spell this way, the dragon can target any creature within 6 miles.  
- **Foretelling Fog.** The area within 1 mile of the lair is [Lightly Obscured](3.Mechanics/rules/variant-rules/lightly-obscured-xphb.md) by opalescent fog. While in that area, creatures can't be [surprised](3.Mechanics/rules/conditions.md#Surprised), as the fog swirls into shapes that warn of danger.  

If the dragon dies or moves its lair elsewhere, these effects end immediately.
```
^statblock

## Environment

forest, grassland