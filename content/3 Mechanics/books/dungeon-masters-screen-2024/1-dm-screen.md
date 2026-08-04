---
obsidianUIMode: preview
cssclasses:
- json5e-note
tags:
- ttrpg-cli/compendium/src/5e/xscreen
aliases:
- "DM Screen"
---
# DM Screen
*Source: Dungeon Master's Screen (2024)* 

## Cover

![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/book/XScreen/XScreen%20Front.webp#center)

## Conditions

> [!embed-condition]- Blinded
> ![Blinded](conditions.md#Blinded)

> [!embed-condition]- Charmed
> ![Charmed](conditions.md#Charmed)

> [!embed-condition]- Deafened
> ![Deafened](conditions.md#Deafened)

> [!embed-condition]- Exhaustion
> ![Exhaustion](conditions.md#Exhaustion)

> [!embed-condition]- Frightened
> ![Frightened](conditions.md#Frightened)

> [!embed-condition]- Grappled
> ![Grappled](conditions.md#Grappled)

> [!embed-condition]- Incapacitated
> ![Incapacitated](conditions.md#Incapacitated)

> [!embed-condition]- Invisible
> ![Invisible](conditions.md#Invisible)

> [!embed-condition]- Paralyzed
> ![Paralyzed](conditions.md#Paralyzed)

> [!embed-condition]- Petrified
> ![Petrified](conditions.md#Petrified)

> [!embed-condition]- Poisoned
> ![Poisoned](conditions.md#Poisoned)

> [!embed-condition]- Prone
> ![Prone](conditions.md#Prone)

> [!embed-condition]- Restrained
> ![Restrained](conditions.md#Restrained)

> [!embed-condition]- Stunned
> ![Stunned](conditions.md#Stunned)

> [!embed-condition]- Unconscious
> ![Unconscious](conditions.md#Unconscious)

## Tables

**Improvising Damage**

| Dice | Examples |
|------|----------|
| `dice:1d10\|noform\|noparens\|avg\|text(1d10)` | Burned by coals, hit by a falling bookcase, pricked by a poison needle |
| `dice:2d10\|noform\|noparens\|avg` (`2d10`) | Struck by lightning, stumbling into a firepit |
| `dice:4d10\|noform\|noparens\|avg` (`4d10`) | Hit by falling rubble in a collapsing tunnel, tumbling into a vat of acid |
| `dice:10d10\|noform\|noparens\|avg` (`10d10`) | Crushed by compacting walls, hit by whirling steel blades, wading through lava |
| `dice:18d10\|noform\|noparens\|avg` (`18d10`) | Submerged in lava, hit by a crashing flying fortress |
| `dice:24d10\|noform\|noparens\|avg` (`24d10`) | Tumbling into a vortex of fire on the Elemental Plane of Fire, crushed in the jaws of a godlike creature or a moon-sized monster |
^improvising-damage

**Damage Severity and Level**

| Character Levels | Nuisance | Deadly |
|------------------|----------|--------|
| 1–4 | 5 (`dice:1d10\|noform\|noparens\|avg` (`1d10`)) | 11 (`dice:2d10\|noform\|noparens\|avg` (`2d10`)) |
| 5–10 | 11 (`dice:2d10\|noform\|noparens\|avg` (`2d10`)) | 22 (`dice:4d10\|noform\|noparens\|avg` (`4d10`)) |
| 11–16 | 22 (`dice:4d10\|noform\|noparens\|avg` (`4d10`)) | 55 (`dice:10d10\|noform\|noparens\|avg` (`10d10`)) |
| 17–20 | 55 (`dice:10d10\|noform\|noparens\|avg` (`10d10`)) | 99 (`dice:18d10\|noform\|noparens\|avg` (`18d10`)) |
^damage-severity-and-level

**Actions**

| Action | Summary |
|--------|---------|
| [Attack](actions.md#Attack) | Attack with a weapon or an [Unarmed Strike](unarmed-strike-xphb.md). |
| [Dash](actions.md#Dash) | For the rest of the turn, give yourself extra movement equal to your [Speed](speed-xphb.md). |
| [Disengage](actions.md#Disengage) | Your movement doesn't provoke [Opportunity Attacks](actions.md#Opportunity%20Attack) for the rest of the turn. |
| [Dodge](actions.md#Dodge) | Until the start of your next turn, attack rolls against you have [Disadvantage](disadvantage-xphb.md), and you make Dexterity saving throws with [Advantage](advantage-xphb.md). You lose this benefit if you have the [Incapacitated](conditions.md#Incapacitated) condition or if your [Speed](speed-xphb.md) is 0. |
| [Help](actions.md#Help) | Help another creature's ability check or attack roll, or administer first aid. |
| [Hide](actions.md#Hide) | Make a Dexterity ([Stealth](skills.md#Stealth)) check. |
| [Influence](actions.md#Influence) | Make a Charisma ([Deception](skills.md#Deception), [Intimidation](skills.md#Intimidation), [Performance](skills.md#Performance), or [Persuasion](skills.md#Persuasion)) or Wisdom ([Animal Handling](skills.md#Animal%20Handling)) check to alter a creature's attitude. |
| [Magic](actions.md#Magic) | Cast a spell, use a magic item, or use a magical feature. |
| [Ready](actions.md#Ready) | Prepare to take an action in response to a trigger you define. |
| [Search](actions.md#Search) | Make a Wisdom ([Insight](skills.md#Insight), [Medicine](skills.md#Medicine), [Perception](skills.md#Perception), or [Survival](skills.md#Survival)) check. |
| [Study](actions.md#Study) | Make an Intelligence ([Arcana](skills.md#Arcana), [History](skills.md#History), [Investigation](skills.md#Investigation), [Nature](skills.md#Nature), or [Religion](skills.md#Religion)) check. |
| [Utilize](actions.md#Utilize) | Use a nonmagical object. |
^actions

*See the Player's Handbook rules glossary for full action definitions*

> [!embed-variantrule]- Long Jump
> ![Long Jump](long-jump-xphb.md)

> [!embed-variantrule]- High Jump
> ![High Jump](high-jump-xphb.md)

> [!embed-status]- Concentration
> ![Concentration](conditions.md#Concentration)

**Skills**

| Skill | Ability |
|-------|---------|
| [Acrobatics](skills.md#Acrobatics) | Dexterity |
| [Animal Handling](skills.md#Animal%20Handling) | Wisdom |
| [Arcana](skills.md#Arcana) | Intelligence |
| [Athletics](skills.md#Athletics) | Strength |
| [Deception](skills.md#Deception) | Charisma |
| [History](skills.md#History) | Intelligence |
| [Insight](skills.md#Insight) | Wisdom |
| [Intimidation](skills.md#Intimidation) | Charisma |
| [Investigation](skills.md#Investigation) | Intelligence |
| [Medicine](skills.md#Medicine) | Wisdom |
| [Nature](skills.md#Nature) | Intelligence |
| [Perception](skills.md#Perception) | Wisdom |
| [Performance](skills.md#Performance) | Charisma |
| [Persuasion](skills.md#Persuasion) | Charisma |
| [Religion](skills.md#Religion) | Intelligence |
| [Sleight of Hand](skills.md#Sleight%20of%20Hand) | Dexterity |
| [Stealth](skills.md#Stealth) | Dexterity |
| [Survival](skills.md#Survival) | Wisdom |
^skills

### Death Saving Throws

When you start your turn with 0 HP, roll `dice:1d20|noform|noparens|avg` (`1d20`), and you succeed on a 10+.

- **Third Success.** You become [Stable](stable-xphb.md).  
- **Third Failure.** You die.  
- **Rolling a 1.** Counts as two failures.  
- **Rolling a 20.** You regain 1 Hit Point.  

If you take damage at 0 HP, it counts as a failed [Death Save](death-saving-throw-xphb.md) or two failures if the damage is from a [Critical Hit](critical-hit-xphb.md).

**Object Armor Class**

| AC | Substance |
|----|-----------|
| 11 | Cloth, paper, rope |
| 13 | Crystal, glass, ice |
| 15 | Wood |
| 17 | Stone |
| 19 | Iron, steel |
| 21 | Mithral |
| 23 | Adamantine |
^object-armor-class

**Object Hit Points**

| Size | Fragile | Resilient |
|------|---------|-----------|
| Tiny (bottle, lock) | 2 (`dice:1d4\|noform\|noparens\|avg` (`1d4`)) | 5 (`dice:2d4\|noform\|noparens\|avg` (`2d4`)) |
| Small (chest, lute) | 3 (`dice:1d6\|noform\|noparens\|avg` (`1d6`)) | 10 (`dice:3d6\|noform\|noparens\|avg` (`3d6`)) |
| Medium (barrel, chandelier) | 4 (`dice:1d8\|noform\|noparens\|avg` (`1d8`)) | 18 (`dice:4d8\|noform\|noparens\|avg` (`4d8`)) |
| Large (cart, dining table) | 5 (`dice:1d10\|noform\|noparens\|avg` (`1d10`)) | 27 (`dice:5d10\|noform\|noparens\|avg` (`5d10`)) |
^object-hit-points

**Food, Drink, and Lodging**

| Item | Cost |
|------|------|
| [Ale (mug)](ale-mug-xphb.md) | 4 CP |
| [Bread (loaf)](bread-loaf-xphb.md) | 2 CP |
| [Cheese (wedge)](cheese-wedge-xphb.md) | 1 SP |
| *Inn Stay per Day* |  |
| &emsp;Squalid | 7 CP |
| &emsp;Poor | 1 SP |
| &emsp;Modest | 5 SP |
| &emsp;Comfortable | 8 SP |
| &emsp;Wealthy | 2 GP |
| &emsp;Aristocratic | 4 GP |
| *Meal* |  |
| &emsp;Squalid | 1 CP |
| &emsp;Poor | 2 CP |
| &emsp;Modest | 1 SP |
| &emsp;Comfortable | 2 SP |
| &emsp;Wealthy | 3 SP |
| &emsp;Aristocratic | 6 SP |
| *Wine (bottle)* |  |
| &emsp;[Common](common-wine-bottle-xphb.md) | 2 SP |
| &emsp;[Fine](fine-wine-bottle-xphb.md) | 10 GP |
^food-drink-and-lodging

**Typical Difficulty Classes**

| Task Difficulty | DC |
|-----------------|----|
| Very easy | 5 |
| Easy | 10 |
| Medium | 15 |
| Hard | 20 |
| Very hard | 25 |
| Nearly impossible | 30 |
^typical-difficulty-classes

**Light Sources**

| Source | Bright Light | Dim Light | Duration |
|--------|--------------|-----------|----------|
| [Candle](candle-xphb.md) | 5 feet | +5 feet | 1 hour |
| [Lamp](lamp-xphb.md) | 15 feet | +30 feet | 6 hours |
| [Lantern, Bullseye](bullseye-lantern-xphb.md) | 60-foot [Cone](cone-area-of-effect-xphb.md) | +60 feet | 6 hours |
| [Lantern, Hooded](hooded-lantern-xphb.md) | 30 feet (none with hood lowered) | +30 feet (5 feet with hood lowered) | 6 hours |
| [Torch](torch-xphb.md) | 20 feet | +20 feet | 1 hour |
^light-sources

**Obscured Areas**

| Obscureness | Effect | Examples |
|-------------|--------|----------|
| [Lightly Obscured](lightly-obscured-xphb.md) | Creatures have [Disadvantage](disadvantage-xphb.md) on Wisdom ([Perception](skills.md#Perception)) checks that rely on sight | [Dim Light](dim-light-xphb.md), patchy fog, moderate foliage |
| [Heavily Obscured](heavily-obscured-xphb.md) | Creatures have the [Blinded](conditions.md#Blinded) condition | [Darkness](3%20Mechanics/rules/variant-rules/darkness-xphb.md), heavy fog, dense foliage |
^obscured-areas


**Travel Pace**

<table>
<tr>
  <th></th>
  <th colspan="3">Distance Traveled Per...</th>
  <th></th>
</tr>
<tr>
  <th>Pace</th>
  <th>Minute</th>
  <th>Hour</th>
  <th>Day</th>
  <th>Effect</th>
</tr>
<tr>
  <td>Fast</td>
  <td>400 feet</td>
  <td>4 miles</td>
  <td>30 miles</td>
  <td><a href="3 Mechanics/rules/variant-rules/disadvantage-xphb.md">Disadvantage</a> on Wisdom (<a href="3 Mechanics/rules/skills.md#Perception">Perception</a> or <a href="3 Mechanics/rules/skills.md#Survival">Survival</a>) and Dexterity (<a href="3 Mechanics/rules/skills.md#Stealth">Stealth</a>) checks</td>
</tr>
<tr>
  <td>Normal</td>
  <td>300 feet</td>
  <td>3 miles</td>
  <td>24 miles</td>
  <td><a href="3 Mechanics/rules/variant-rules/disadvantage-xphb.md">Disadvantage</a> on Dexterity (<a href="3 Mechanics/rules/skills.md#Stealth">Stealth</a>) checks</td>
</tr>
<tr>
  <td>Slow</td>
  <td>200 feet</td>
  <td>2 miles</td>
  <td>18 miles</td>
  <td><a href="3 Mechanics/rules/variant-rules/advantage-xphb.md">Advantage</a> on Wisdom (<a href="3 Mechanics/rules/skills.md#Perception">Perception</a> or <a href="3 Mechanics/rules/skills.md#Survival">Survival</a>) checks</td>
</tr>
</table>
^travel-pace

**Travel Terrain**

| Terrain | Maximum Pace | Encounter Distance | Foraging DC | Navigation DC | Search DC |
|---------|--------------|--------------------|-------------|---------------|-----------|
| Arctic | Fast* | `6d6 × 10` feet | 20 | 10 | 10 |
| Coastal | Normal | `2d10 × 10` feet | 10 | 5 | 15 |
| Desert | Normal | `6d6 × 10` feet | 20 | 10 | 10 |
| Forest | Normal | `2d8 × 10` feet | 10 | 15 | 15 |
| Grassland | Fast | `6d6 × 10` feet | 15 | 5 | 15 |
| Hill | Normal | `2d10 × 10` feet | 15 | 10 | 15 |
| Mountain | Slow | `4d10 × 10` feet | 20 | 15 | 20 |
| Swamp | Slow | `2d8 × 10` feet | 10 | 15 | 20 |
| Underdark | Normal | `2d6 × 10` feet | 20 | 10 | 20 |
| Urban | Normal | `2d6 × 10` feet | 20 | 15 | 15 |
| Waterborne | Special† | `6d6 × 10` feet | 15 | 10 | 15 |
^travel-terrain

*Appropriate equipment (such as skis) is necessary to keep up a Fast pace in Arctic terrain.

†Characters' rate of travel while waterborne depends on the vehicle carrying them.

**Cover**

| Cover Degree | Benefit to Target |
|--------------|-------------------|
| Half Cover | +2 bonus to AC and Dexterity saving throws |
| Three-Quarters Cover | +5 bonus to AC and Dexterity saving throws |
| Total Cover | Can't be targeted directly |
^cover

**Audible Distance**

| Noise | Distance |
|-------|----------|
| Trying to be quiet | `2d6 × 5` feet |
| Normal noise level | `2d6 × 10` feet |
| Very loud | `2d6 × 50` feet |
^audible-distance

**Visibility Outdoors**

| Conditions | Distance |
|------------|----------|
| Clear day, no obstructions | 2 miles (40 miles from a height) |
| Rain ([Lightly Obscured](lightly-obscured-xphb.md)) | 1 mile |
| Fog ([Lightly Obscured](lightly-obscured-xphb.md)) | 100 to 300 feet |
^visibility-outdoors

### Weather

**Weather**

`dice: [](1-dm-screen.md#^weather)`

| dice: 1d20 | Temperature |
|------------|-------------|
| 1–14 | Normal for the season |
| 15–17 | `1d4 × 10` degrees Fahrenheit colder |
| 18–20 | `1d4 × 10` degrees Fahrenheit hotter |
^weather

`dice: [](1-dm-screen.md#^1-wind-precipitation)`

| dice: 1d20 | Wind | Precipitation |
|------------|------|---------------|
| 1–12 | None | None |
| 13–17 | Light | Light rain or light snowfall |
| 18–20 | Strong | Heavy rain or heavy snowfall |
^1-wind-precipitation