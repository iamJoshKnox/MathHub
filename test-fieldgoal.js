// Playwright script to play the Field Goal game
// Run with: node test-fieldgoal.js

const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 100 });
    const page = await browser.newPage();
    page.setDefaultTimeout(10000);

    // Navigate to the game
    const gameUrl = 'file:///C:/Users/iamjo/OneDrive%20-%20iamjoshknox/Documents/1%20Projects/Math%20Application/Claude/MathAdventureHub.html';
    await page.goto(gameUrl);
    console.log('✓ Opened Math Adventure Hub');
    await page.waitForTimeout(1000);

    // Click on Field Goals game card
    await page.click('.game-card.fieldgoal');
    console.log('✓ Selected Field Goals game');
    await page.waitForTimeout(500);

    // Select Blue Team (option1)
    await page.click('#option1');
    console.log('✓ Selected Blue Team');
    await page.waitForTimeout(300);

    // Press Enter to start (using our new keyboard support!)
    await page.keyboard.press('Enter');
    console.log('✓ Started game (Enter key)');
    await page.waitForTimeout(800);

    // Wait for math phase to be visible
    await page.waitForSelector('#gameMathPhase:not(.hidden)', { timeout: 5000 });
    console.log('\n--- Math Phase ---');

    async function solveMathProblem() {
        try {
            // Get the problem text
            const problemText = await page.$eval('#problemText', el => el.textContent);

            if (!problemText || problemText.length < 5) {
                // Visual problem or empty - skip
                return false;
            }

            console.log(`Problem: ${problemText}`);

            // Parse the problem - extract numbers and operator
            let answer = null;
            const cleanText = problemText.replace(/\s/g, '').replace('−', '-').replace('=?', '');

            if (cleanText.includes('+')) {
                const match = cleanText.match(/(\d+)\+(\d+)/);
                if (match) answer = parseInt(match[1]) + parseInt(match[2]);
            } else if (cleanText.includes('-')) {
                const match = cleanText.match(/(\d+)-(\d+)/);
                if (match) answer = parseInt(match[1]) - parseInt(match[2]);
            }

            if (answer !== null && answer >= 0) {
                // Clear any previous input
                await page.keyboard.press('Backspace');
                await page.keyboard.press('Backspace');
                await page.keyboard.press('Backspace');
                await page.waitForTimeout(50);

                // Type the answer using keyboard (triggers addNumber via handleGlobalKeyPress)
                const answerStr = answer.toString();
                for (const digit of answerStr) {
                    await page.keyboard.press(digit);
                    await page.waitForTimeout(50);
                }

                // Wait for auto-submit or feedback
                await page.waitForTimeout(300);
                console.log(`  ✓ Typed: ${answer}`);
                return true;
            }
        } catch (e) {
            // Problem element might not be ready
        }
        return false;
    }

    // Solve problems until we have enough footballs
    let solved = 0;
    for (let attempt = 0; attempt < 20; attempt++) {
        // Check if math phase is still active
        const mathPhaseHidden = await page.$eval('#gameMathPhase', el => el.classList.contains('hidden')).catch(() => true);
        if (mathPhaseHidden) break;

        if (await solveMathProblem()) {
            solved++;
            await page.waitForTimeout(500); // Wait for next problem
        } else {
            await page.waitForTimeout(200);
        }

        if (solved >= 6) {
            console.log(`\n✓ Solved ${solved} problems!`);
            break;
        }
    }

    // Skip to kick phase using SKIP button
    try {
        await page.click('#skipTimerBtn');
        console.log('✓ Skipped to kick phase');
    } catch (e) {
        console.log('Waiting for math phase to end...');
    }

    // Wait for kick phase with countdown (3-2-1 + whistle)
    console.log('\n--- Kick Phase ---');
    console.log('Waiting for countdown...');
    await page.waitForTimeout(4500);

    async function attemptKick(num) {
        // Check current status
        const status = await page.$eval('#kickStatus', el => el.textContent).catch(() => '');

        if (!status || status === '') {
            return false;
        }

        console.log(`\nKick ${num}: ${status}`);

        if (status.includes('direction')) {
            // Wait for direction meter to be near center
            await page.waitForTimeout(500);
            await page.keyboard.press('Space');
            console.log('  → Direction locked');
            await page.waitForTimeout(300);

            // Now lock power
            const newStatus = await page.$eval('#kickStatus', el => el.textContent).catch(() => '');
            if (newStatus.includes('power')) {
                await page.waitForTimeout(400);
                await page.keyboard.press('Space');
                console.log('  → Power locked - KICK!');
            }
        }

        // Wait for ball flight and result
        await page.waitForTimeout(3000);
        return true;
    }

    // Make kick attempts
    for (let i = 1; i <= 6; i++) {
        // Check if kick phase still active
        const kickPhaseHidden = await page.$eval('#fieldgoalKickPhase', el => el.classList.contains('hidden')).catch(() => true);
        if (kickPhaseHidden) {
            console.log('\nRound ended!');
            break;
        }

        const kicked = await attemptKick(i);
        if (!kicked) {
            // May be showing result, wait
            await page.waitForTimeout(2000);
        }
    }

    console.log('\n=== Game Complete ===');

    // Check for round complete screen
    const roundComplete = await page.$('#roundCompleteScreen:not(.hidden)');
    if (roundComplete) {
        console.log('Round complete screen visible!');
        // Press Enter for Next Round
        await page.waitForTimeout(1000);
        await page.keyboard.press('Enter');
        console.log('Pressed Enter for Next Round');
    }

    await page.waitForTimeout(3000);
    await browser.close();
})();
