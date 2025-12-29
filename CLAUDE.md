# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains educational math games built as standalone HTML files. Each game is a complete single-page application that combines mathematical learning with game mechanics.

## Games Architecture

The repository contains three educational math games:

1. **MathCastle20250604.html** - Math Cannon theme with castle defense mechanics
2. **MathExpress20250603.html** - Train-themed math game with alternating math and action phases
3. **MathMiner20250603.html** - Mining-themed game with character selection and digging mechanics
4. **MathPlane20250612.html** - Aviation-themed math game

### Common Game Structure

All games follow a consistent two-phase pattern:
- **Math Phase**: Timed arithmetic problems (addition, subtraction) with number pad input
- **Action Phase**: Interactive game mechanics using HTML5 Canvas for visual gameplay

### Shared Components

Each game implements similar core systems:
- **Audio System**: Web Audio API-based sound effects with toggle functionality
- **Timer System**: Countdown timers for math phases
- **Score Tracking**: Points/resources earned from correct answers
- **Problem Generation**: Random arithmetic problems with difficulty scaling
- **Input System**: Touch-friendly number pad interface
- **Feedback System**: Visual and audio feedback for correct/incorrect answers

### Technical Implementation

- **Single File Architecture**: Each game is entirely self-contained in one HTML file
- **Vanilla JavaScript**: No external dependencies or frameworks
- **HTML5 Canvas**: Used for action phase graphics and animations
- **CSS3**: Game styling with theme-specific color schemes and animations
- **Responsive Design**: Mobile-friendly layouts and touch interactions

## Development Guidelines

### File Management
- Each game is completely standalone - no shared dependencies
- All assets (CSS, JavaScript, images) are embedded within the HTML file
- Games can be opened directly in any modern web browser

### Code Patterns
- Game state management through global objects
- Phase transitions using CSS classes and DOM manipulation
- Canvas rendering with requestAnimationFrame loops
- Event-driven architecture for user interactions

### Theme Consistency
Each game maintains its own visual theme while following the same gameplay patterns:
- Consistent UI element positioning and sizing
- Theme-appropriate color schemes and terminology
- Character/avatar customization where applicable