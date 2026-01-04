# Math Adventure Hub - Feature Backlog

> **Last Updated:** January 2026
> **Current State:** 8 games, 9 math modes, player profiles, unified hub architecture

---

## High Priority

### Gameplay Features
(No pending items)

### Progress & Persistence
(No pending items)

### Audio & Feedback
- [ ] **Background music** - Add optional background music for each game theme
- [ ] **More sound effects** - Distinct sounds for each game's actions (cannon fire, train whistle, pickaxe, airplane engine)

## Medium Priority

### UI/UX Improvements
- [ ] **Fullscreen mode** - Button to enter fullscreen for distraction-free play
- [ ] **Animated transitions** - Smoother transitions between phases

### Game-Specific Enhancements

#### Castle Game
- [ ] **Moving targets** - Targets that drift or bob more dramatically
- [ ] **Indestructable objects** - floating brick walls, as added difficulty in later rounds, that require specific cannon arcs to destroy the targets.

#### Express Game
- [ ] **Friction adjustment** - there's something wrong with the friction in the game. The first level can be completed without any boosts at all. Let's see how we can adjust the game physics to make the game more fun.

#### Miner Game
- [ ] **Rock types** - Different rocks requiring multiple hits
- [ ] **Power-ups** - Temporary dig boost, magnet for coins, TNT
- [ ] **Underground creatures** - Friendly moles, obstacles to avoid
- [ ] **Gem varieties** - Different gem types worth different points

#### Plane Game
- [ ] **Physics adjustment** - Create physics penalty for flying too high out of frame
- [ ] **Landing zones** - Endpoint with green/orange/red zones; bonus points for green landing

#### Field Goals Game
- [ ] **Wind effects** - Variable wind affecting kick trajectory
- [ ] **Distance variation** - Kicks from different yard lines

#### Mini Golf Game
- [ ] **Course obstacles** - Walls, bumpers, water hazards
- [ ] **Multiple holes** - Progress through a course of holes

#### Racer Game
- [ ] **Track variety** - Different track layouts and obstacles
- [ ] **Opponent racers** - AI competitors to race against

#### Snowball Game
- [ ] **Moving targets** - Snowmen that move or dodge
- [ ] **Obstacle variety** - Trees, fences blocking shots

### Math Problem Enhancements
- [ ] **Word problems** - Simple word problems for older kids
- [ ] **Number bonds** - "What + 3 = 10?" style problems
- [ ] **Comparison problems** - Greater than, less than
- [ ] **Sequence completion** - "2, 4, 6, ?" patterns
- [ ] **Time telling** - Clock reading problems

## Low Priority

### Multiplayer & Social
- [ ] **Two-player mode** - Split screen or turn-based competition
- [ ] **Leaderboard** - Compare scores with other players (local or online)
- [ ] **Share scores** - Export/share results

### Accessibility
- [ ] **Color blind modes** - Alternative color schemes
- [ ] **Large text option** - Scalable UI for visibility
- [ ] **Reduced motion** - Option to disable animations
- [ ] **Screen reader support** - ARIA labels for accessibility

### Technical Improvements
- [ ] **Mobile touch controls** - Better touch support for tablets
- [ ] **Offline PWA** - Make installable as Progressive Web App
- [ ] **Performance optimization** - Reduce memory usage for older devices
- [ ] **Modular code refactor** - Split into separate JS modules

### Content
- [ ] **More character options** - Additional color/character choices per game
- [ ] **Seasonal themes** - Holiday-themed visuals (Halloween, Christmas, etc.)
- [ ] **Unlockable cosmetics** - Earn new looks through gameplay
- [ ] **Story mode** - Connected narrative across all games

## Bug Fixes & Polish
- [ ] **Consistent styling** - Ensure all games have matching UI patterns
- [ ] **Edge case handling** - Better handling of rapid inputs, browser resize
- [ ] **Loading states** - Show loading indicators when initializing games
- [ ] **Error recovery** - Graceful handling if game state becomes invalid

---

## Completed Features

### Games (8 total)
- [x] **Math Castle** - Castle defense with cannon trajectory shooting
- [x] **Math Express** - Train conductor with speed/brake control
- [x] **Math Miner** - Grid-based mining and coin collection
- [x] **Math Plane** - Paper airplane flight physics
- [x] **Math Field Goals** - Football kicking with direction/power meters
- [x] **Math Mini Golf** - Putting with power control
- [x] **Math Racer** - Motorcycle racing with turbo boosts
- [x] **Snowball Math** - Slingshot aiming at snowmen

### Math Modes (9 total)
- [x] Addition, Subtraction, Multiplication, Division
- [x] Dice mode - Count dice pips
- [x] Coin mode - Count coin values
- [x] Making Change mode - Calculate change from $1
- [x] Fractions mode
- [x] 100 Mode - Problems in format "100 - X = ?"

### Features & Fixes
- [x] Local storage save - High scores and progress persist between sessions
- [x] Statistics tracking - "My Adventure" page with Math Progress and Game Progress tabs
- [x] DEV button to skip to arcade game with 10 points
- [x] SKIP button in math phase to end timer early
- [x] Fix Express game "Next Round" button
- [x] Fix castle bonus resources carrying over
- [x] Fix dice/coin display showing raw HTML
- [x] Style "= ?" to match visual problem size
- [x] Audio context resume on first interaction
- [x] Stop game loops when returning to hub
- [x] Remove station overlay on new round start
- [x] Standardized point displays across games (visual indicators with grouping by 5s)
- [x] Player profiles - Multiple player support with separate progress tracking, avatar selection, profile switching
