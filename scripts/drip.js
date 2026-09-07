const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const QUEUE_FILE = path.join(__dirname, 'drip-queue.json');
const STATE_FILE = path.join(__dirname, 'drip-state.json');
const REPO_ROOT = path.join(__dirname, '..');

function getTashkentDate() {
  const now = new Date();
  const tashkentTime = new Date(now.getTime() + (5 * 60 * 60 * 1000));
  return tashkentTime.toISOString().split('T')[0];
}

function run() {
  const queue = JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf8'));
  const state = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));

  const today = getTashkentDate();
  if (state.lastDate !== today) {
    state.lastDate = today;
    state.todayCommits = 0;
  }

  // Max 4 commits per day
  if (state.todayCommits >= 4) {
    console.log(`[Drip] Today's commit quota (${state.todayCommits}/4) reached for ${today}. Skipping.`);
    return;
  }

  // Pick how many to commit this run: 1 or 2
  const toCommit = Math.min(Math.random() < 0.35 ? 2 : 1, 4 - state.todayCommits);

  for (let i = 0; i < toCommit; i++) {
    const item = queue[state.queueIndex % queue.length];
    const targetPath = path.join(REPO_ROOT, item.path);

    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.writeFileSync(targetPath, item.content + '\n', 'utf8');

    state.queueIndex++;
    state.todayCommits++;
    state.totalDripped = (state.totalDripped || 0) + 1;

    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));

    try {
      execSync(`git add "${item.path}" scripts/drip-state.json`, { cwd: REPO_ROOT });
      const commitCmd = `git -c user.name="Laziz Shakarov" -c user.email="shakarovlaziz243@gmail.com" commit -m "${item.message.replace(/"/g, '\\"')}"`;
      execSync(commitCmd, { cwd: REPO_ROOT });
      console.log(`[Drip] Successfully committed: ${item.message}`);
    } catch (err) {
      console.error('[Drip] Commit error:', err.message);
    }
  }

  console.log(`[Drip] Batch complete. Total today: ${state.todayCommits}/4. Overall: ${state.totalDripped}`);
}

run();
