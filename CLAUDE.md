# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains educational math games built as standalone HTML files. Each game is a complete single-page application that combines mathematical learning with game mechanics.

## Main Application: MathAdventureHub.html

The primary application is **MathAdventureHub.html** (~370KB), a unified game hub containing 8 educational math games and 9 math modes in a single file.

### Hub Architecture

```
┌─────────────────────────────────────────────────────────┐
│  Game Hub (main menu)                                   │
│  - Math mode selector (addition, subtraction, etc.)     │
│  - Difficulty selector (Easy/Medium/Hard)               │
│  - 8 game cards to choose from                          │
└─────────────────────────────────────────────────────────┘
         ↓ selectGame(gameType)
┌─────────────────────────────────────────────────────────┐
│  Shared Game Container                                  │
│  - Selection Screen (choose character/color)            │
│  - Math Phase (solve problems → earn resources)         │
│  - Round Complete Screen                                │
│  - Game Over Screen                                     │
└─────────────────────────────────────────────────────────┘
         ↓ startAction()
┌─────────────────────────────────────────────────────────┐
│  Game-Specific Action Phase                             │
│  - Each game has unique canvas-based gameplay           │
│  - Uses resources earned from math phase                │
└─────────────────────────────────────────────────────────┘
```

### Games Included

| Game | Icon | Theme | Action Mechanic |
|------|------|-------|-----------------|
| Math Castle | 🏰 | Castle defense | Cannon trajectory shooting |
| Math Express | 🚂 | Train conductor | Speed/brake train control |
| Math Miner | ⛏️ | Mining | Grid-based digging |
| Math Plane | ✈️ | Aviation | Paper airplane flight |
| Math Field Goals | 🏈 | Football | Direction/power kick meters |
| Math Mini Golf | ⛳ | Golf | Putting with power control |
| Math Racer | 🏍️ | Motorcycle | Racing with turbo boosts |
| Snowball Math | ❄️ | Winter | Slingshot aiming at snowmen |

### Math Modes

Players can select from these problem types on the hub:
- **Addition** (➕) - Basic addition problems
- **Subtraction** (➖) - Basic subtraction problems
- **Multiplication** (✖️) - Multiplication tables
- **Division** (➗) - Division problems
- **Dice** (🎲) - Count dice pips
- **Coins** (🪙) - Count coin values
- **Making Change** (💵) - Calculate change from $1
- **Fractions** (½) - Fraction problems
- **Hundred** (💯) - Subtract from 100 (100 - X = ?)

### Key JavaScript Objects

#### `gameManager` (line ~2031)
Central state management object:
```javascript
const gameManager = {
    currentGame: null,
    mathSettings: {
        problemType: 'addition',
        difficulty: 'easy'
    },
    gameStates: {
        castle: { round: 1, score: 0, phase: 'start', resources: 0, ... },
        express: { ... },
        // ... one entry per game
    }
};
```

#### `gameConfigs` (line ~2050)
Configuration object defining each game's parameters:
```javascript
const gameConfigs = {
    castle: {
        id: 'castle',
        title: 'Math Castle',
        icon: '🏰',
        themeColor: '#e74c3c',
        selectionPrompt: 'Choose the castle you will defend!',
        options: [
            { id: 'red', name: 'Red Kingdom', color: '#e74c3c' },
            { id: 'blue', name: 'Blue Kingdom', color: '#3498db' }
        ],
        resourceName: 'Cannon Points',
        resourceIcon: '🔥',
        pointClass: 'cannon-point',
        actionPhaseId: 'castleCannonPhase',
        startAction: () => castleGame.showCannonPhase(),
        gameObject: () => castleGame,
        stats: [ ... ]
    },
    // ... similar structure for each game
};
```

#### `mathEngine` (line ~1902)
Generates math problems based on mode and difficulty:
```javascript
const mathEngine = {
    generateProblem(type, difficulty) { ... },
    // Returns { text: "5 + 3 = ?", answer: 8, display: "..." }
};
```

#### `sounds` (line ~1568)
Web Audio API sound effects:
```javascript
const sounds = {
    correct: () => { ... },
    incorrect: () => { ... },
    // Game-specific sounds
};
```

#### Individual Game Objects
Each game has its own object with game-specific logic:
- `castleGame` (line ~4250) - Cannon physics, target spawning
- `expressGame` (line ~5962) - Train speed, steam mechanics
- `minerGame` (line ~3459) - Grid system, coin collection
- `planeGame` (line ~3856) - Flight physics, wind mechanics
- `fieldgoalGame` (line ~6815) - Kick trajectory, goal detection
- `minigolfGame` (line ~7240) - Ball physics, hole completion
- `motorcycleGame` (line ~7364) - Racing mechanics
- `snowballGame` (line ~8150) - Slingshot physics

### Shared Functions

| Function | Purpose |
|----------|---------|
| `selectGame(gameType)` | Navigate from hub to selected game |
| `returnToHub()` | Return to main menu |
| `showSelectionScreen(gameType)` | Show character/color selection |
| `startMathPhase()` | Begin 60-second timed math phase |
| `generateSharedProblem()` | Create problem based on settings |
| `submitSharedAnswer()` | Check answer, award resources |
| `showRoundComplete()` | Display round stats |
| `startNextRound()` | Proceed to next round |
| `showGameOver()` | Display final stats |
| `updatePointsDisplay()` | Visual resource display with grouping |

### Game Flow

1. **Hub** → User selects math mode, difficulty, clicks game card
2. **Selection** → User picks character/color variant
3. **Math Phase** → 60-second timer, solve problems, earn resources
4. **Action Phase** → Use resources in game mechanics
5. **Round Complete** → View stats, continue to next round
6. **Repeat** until game over condition met

### DOM Structure

```html
<body>
    <!-- Main Hub -->
    <div id="gameHub" class="container hub-container">
        <!-- Math config tiles, difficulty tiles, game cards -->
    </div>

    <!-- Shared screens (selection, math, round complete, game over) -->
    <div id="sharedGameContainer" class="container game-container">
        <div id="gameSelectionScreen">...</div>
        <div id="gameMathPhase">...</div>
        <div id="roundCompleteScreen">...</div>
        <div id="gameOverScreen">...</div>
    </div>

    <!-- Game-specific containers -->
    <div id="castleGame" class="container game-container">...</div>
    <div id="expressGame" class="container game-container">...</div>
    <div id="minerGame" class="container game-container">...</div>
    <div id="planeGame" class="container game-container">...</div>
    <div id="fieldgoalGame" class="container game-container">...</div>
    <div id="minigolfGame" class="container game-container">...</div>
    <div id="motorcycleGame" class="container game-container">...</div>
    <div id="snowballGame" class="container game-container">...</div>
</body>
```

### CSS Patterns

- `.container` - White rounded card with shadow
- `.game-container` - Hidden by default, shown when game active
- `.hub-container` - Hub-specific layout
- `.game-card.{game}` - Themed gradient backgrounds per game
- `.math-phase` / `.action-phase` - Phase-specific styling
- `.{game}-point` - Visual resource indicators (coins, footballs, etc.)
- `.config-tile` - Selectable option tiles with `.selected` state

### Adding a New Game

1. Add game card to `.games-grid` in hub HTML
2. Add CSS for `.game-card.{newgame}` styling
3. Add game container `<div id="{newgame}Game">` with action phase HTML
4. Add entry to `gameManager.gameStates`
5. Add configuration to `gameConfigs` object
6. Create game object (e.g., `const newgameGame = { ... }`)
7. Implement required methods: `showActionPhase()`, canvas rendering, game logic

## Legacy Standalone Games

The repository also contains older standalone game files:
- **MathCastle20250604.html** - Castle defense (standalone version)
- **MathExpress20250603.html** - Train game (standalone version)
- **MathMiner20250603.html** - Mining game (standalone version)
- **MathPlane20250612.html** - Plane game (standalone version)

These follow the same two-phase pattern but are not integrated into the hub.

## Technical Implementation

- **Single File Architecture**: All CSS, JavaScript, and HTML in one file
- **Vanilla JavaScript**: No external dependencies or frameworks
- **HTML5 Canvas**: Action phases use canvas with `requestAnimationFrame`
- **Web Audio API**: Procedural sound effects
- **CSS3**: Animations, gradients, transitions
- **Responsive Design**: Mobile-friendly with touch support

## Development Guidelines

### File Management
- MathAdventureHub.html is the primary application
- All assets embedded within the HTML file
- Opens directly in any modern browser

### Code Patterns
- Game state via `gameManager.gameStates[gameType]`
- Configuration via `gameConfigs[gameType]`
- Phase transitions via CSS `.hidden` class and display properties
- Canvas rendering with `requestAnimationFrame` loops
- Event-driven keyboard/mouse/touch input

### Keyboard Controls
- **Number keys / Numpad**: Answer input during math phase
- **Enter**: Submit answer / Brake (Express, Plane)
- **Space**: Fire/Launch/Boost in action phases
- **Arrow keys**: Aim/adjust in applicable games

### Theme Consistency
- Each game has unique color scheme defined in `gameConfigs`
- Consistent UI positioning and button styling
- Character/color customization on selection screen
- Visual resource indicators match game theme
