# Math Adventure Hub - Feature Backlog

## High Priority

### Gameplay Features
- [ ] **Difficulty progression** - Math problems get harder as rounds increase (currently static)
- [ ] **Problem type selection** - Let players choose problem types (addition, subtraction, dice, coins) from settings menu
- [ ] **Difficulty selection** - Easy/Medium/Hard selector on character selection screen
- [ ] **Multiplication and division modes** - Add these problem types to the rotation
- [ ] **Timer adjustment** - Option to change math phase duration (30s, 60s, 90s)

### Progress & Persistence
- [ ] **Local storage save** - Save high scores and progress between sessions
- [ ] **Player profiles** - Multiple player support with separate progress tracking
- [ ] **Achievement system** - Unlock badges for milestones (100 problems solved, perfect round, etc.)
- [ ] **Statistics tracking** - Track accuracy rate, favorite game, total problems solved

### Audio & Feedback
- [ ] **Background music** - Add optional background music for each game theme
- [ ] **More sound effects** - Distinct sounds for each game's actions (cannon fire, train whistle, pickaxe, airplane engine)
- [ ] **Voice feedback** - Optional spoken "Correct!" / "Try again" for younger players

## Medium Priority

### UI/UX Improvements
- [ ] **Fullscreen mode** - Button to enter fullscreen for distraction-free play
- [ ] **Keyboard shortcuts help** - Overlay showing controls for each game
- [ ] **Pause functionality** - Ability to pause during action phases
- [ ] **Tutorial mode** - First-time walkthrough for each game explaining mechanics
- [ ] **Animated transitions** - Smoother transitions between phases

### Game-Specific Enhancements

#### Castle Game
- [ ] **Moving targets** - Targets that drift or bob more dramatically
- [ ] **Target types** - Different point values for different targets
- [ ] **Wind effect** - Random wind affecting projectile trajectory
- [ ] **Castle damage system** - Visual damage to castle when missing targets

#### Express Game
- [ ] **Obstacles** - Fallen trees, tunnels, bridges to navigate
- [ ] **Cargo collection** - Pick up bonus items along the track
- [ ] **Weather effects** - Rain, snow affecting train physics
- [ ] **Multiple track paths** - Choose different routes

#### Miner Game
- [ ] **Rock types** - Different rocks requiring multiple hits
- [ ] **Power-ups** - Temporary dig boost, magnet for coins
- [ ] **Underground creatures** - Friendly moles, obstacles to avoid
- [ ] **Gem varieties** - Different gem types worth different points

#### Plane Game
- [ ] **Obstacles** - Birds, clouds, hot air balloons to avoid
- [ ] **Altitude bonuses** - Points for maintaining certain altitudes
- [ ] **Multiple landing zones** - Different distance targets
- [ ] **Upgradeable planes** - Unlock planes with better stats

### Math Problem Enhancements
- [ ] **Word problems** - Simple word problems for older kids
- [ ] **Number bonds** - "What + 3 = 10?" style problems
- [ ] **Comparison problems** - Greater than, less than
- [ ] **Sequence completion** - "2, 4, 6, ?" patterns
- [ ] **Time telling** - Clock reading problems
- [ ] **Money making change** - "You have $1, item costs 75¢, change = ?"

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
- [ ] **Story mode** - Connected narrative across all four games

## Bug Fixes & Polish
- [ ] **Consistent styling** - Ensure all games have matching UI patterns
- [ ] **Edge case handling** - Better handling of rapid inputs, browser resize
- [ ] **Loading states** - Show loading indicators when initializing games
- [ ] **Error recovery** - Graceful handling if game state becomes invalid

---

## Completed Features
- [x] **Math Field Goals game** - Football-themed 5th game with timing-based power/direction meters
- [x] DEV button to skip to arcade game with 10 points
- [x] SKIP button in math phase to end timer early
- [x] Fix Express game "Next Round" button
- [x] Fix castle bonus resources carrying over
- [x] Fix dice/coin display showing raw HTML
- [x] Style "= ?" to match visual problem size
- [x] Audio context resume on first interaction
- [x] Stop game loops when returning to hub
- [x] Remove station overlay on new round start
