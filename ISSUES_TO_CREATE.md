# Issues To Create

This list contains beginner-friendly issues for practicing Git and GitHub with the onboarding sandbox.

## 1. Zero-conflict issues

These issues only add a new file. Each contributor should use their own GitHub username in the filename.

### Issue 1: Add your contributor introduction

**Description:** Add a short introduction as your first practice pull request.

**Files to edit:** Create `contributors/<your-github-username>.md`.

**Acceptance criteria:**

- A new Markdown file exists in `contributors/`.
- The filename uses the contributor's GitHub username.
- The file contains one friendly sentence about the contributor.
- No existing files are changed.

**Suggested label:** `good first issue`

### Issue 2: Add a favorite Git command card

**Description:** Share one Git command that a beginner may find useful.

**Files to edit:** Create `contributors/<your-github-username>-git-command.md`.

**Acceptance criteria:**

- A new Markdown file exists in `contributors/`.
- The file names one Git command and explains it in one or two sentences.
- The command is shown in a Markdown code span or code block.
- No existing files are changed.

**Suggested label:** `easy`

### Issue 3: Add a GitHub learning resource

**Description:** Recommend one beginner-friendly Git or GitHub learning resource.

**Files to edit:** Create `contributors/<your-github-username>-resource.md`.

**Acceptance criteria:**

- A new Markdown file exists in `contributors/`.
- The file includes a resource title, link, and one-sentence recommendation.
- The link points to a publicly available resource.
- No existing files are changed.

**Suggested label:** `documentation`

### Issue 4: Add a personal contribution goal

**Description:** Write down one practical goal for learning Git or GitHub.

**Files to edit:** Create `contributors/<your-github-username>-goal.md`.

**Acceptance criteria:**

- A new Markdown file exists in `contributors/`.
- The file contains one specific, achievable learning goal.
- The goal mentions a Git or GitHub skill.
- No existing files are changed.

**Suggested label:** `good first issue`

### Issue 5: Add a plain-language Git glossary entry

**Description:** Explain one Git or GitHub term for another beginner.

**Files to edit:** Create `contributors/<your-github-username>-glossary.md`.

**Acceptance criteria:**

- A new Markdown file exists in `contributors/`.
- The file defines one term in plain language.
- The definition is no longer than one short paragraph.
- No existing files are changed.

**Suggested label:** `documentation`

## 2. Small to-do app changes

Each issue below is intentionally limited to one small, reviewable code change.

### Issue 6: Add a due-date field

**Description:** Let users add an optional due date to each new task.

**Files to edit:** `todo/index.html`, `todo/js/app.js`, and `todo/js/storage.js` if the saved task shape needs updating.

**Acceptance criteria:**

- The form includes an optional date input.
- A task stores its selected due date.
- The due date is shown in the task row when one exists.
- Existing tasks without a due date still load correctly.

**Suggested label:** `easy`

### Issue 7: Add a dark-mode toggle

**Description:** Add a button that switches the app between its current theme and a dark theme.

**Files to edit:** `todo/index.html`, `todo/css/style.css`, and `todo/js/app.js`.

**Acceptance criteria:**

- A clearly labeled toggle is visible on the page.
- Activating it changes the page and task colors to a readable dark theme.
- Activating it again returns to the default theme.
- Task behavior continues to work in both themes.

**Suggested label:** `easy`

### Issue 8: Improve the empty-state message

**Description:** Replace the current empty-state text with a more welcoming message that tells users what to do next.

**Files to edit:** `todo/index.html`.

**Acceptance criteria:**

- The empty list shows the new message.
- The message tells the user to add a task.
- The message is hidden when at least one task exists.
- No task behavior changes.

**Suggested label:** `good first issue`

### Issue 9: Add a character counter

**Description:** Show the number of characters currently typed in the task input.

**Files to edit:** `todo/index.html` and `todo/js/app.js`.

**Acceptance criteria:**

- A counter is visible near the input.
- The counter updates as the user types.
- The count matches the input value length.
- Adding a task resets the counter to zero.

**Suggested label:** `easy`

### Issue 10: Add a clear-completed button

**Description:** Add one button that removes every completed task.

**Files to edit:** `todo/index.html` and `todo/js/app.js`.

**Acceptance criteria:**

- A clearly labeled button is available when appropriate.
- Clicking it removes all completed tasks.
- Active tasks remain unchanged.
- The updated list is saved in localStorage.

**Suggested label:** `good first issue`

### Issue 11: Add a task count display

**Description:** Display how many tasks are currently in the list.

**Files to edit:** `todo/index.html` and `todo/js/app.js`.

**Acceptance criteria:**

- The count is visible near the task-list heading.
- It updates after adding and deleting tasks.
- It is correct after loading saved tasks.
- The display uses clear singular and plural wording.

**Suggested label:** `easy`

### Issue 12: Add an edit-task action

**Description:** Let users change the text of an existing task without deleting it.

**Files to edit:** `todo/index.html`, `todo/js/app.js`, and `todo/css/style.css`.

**Acceptance criteria:**

- Each task has an accessible edit action.
- Saving an edit updates the task text.
- Empty edited text is rejected.
- The edited task is saved in localStorage.

**Suggested label:** `easy`

### Issue 13: Add a task filter

**Description:** Add a small control that filters the list to all, active, or completed tasks.

**Files to edit:** `todo/index.html` and `todo/js/app.js`.

**Acceptance criteria:**

- Users can choose All, Active, or Completed.
- The selected view shows only matching tasks.
- Changing a task's completion status updates the current view.
- Filtering does not delete or change stored tasks.

**Suggested label:** `easy`

### Issue 14: Add task creation date text

**Description:** Record and display the date a task was added.

**Files to edit:** `todo/js/app.js`, `todo/js/storage.js`, and `todo/css/style.css`.

**Acceptance criteria:**

- New tasks receive a creation date.
- The date is shown in a readable format.
- The date persists after refreshing the page.
- Existing tasks without a date still display normally.

**Suggested label:** `easy`

### Issue 15: Add a completed-task style transition

**Description:** Add a small CSS transition when a task changes between active and completed states.

**Files to edit:** `todo/css/style.css`.

**Acceptance criteria:**

- Completing a task has a brief, subtle visual transition.
- Uncompleting a task has the same transition.
- The transition does not change task behavior or layout unexpectedly.
- Text remains readable throughout the transition.

**Suggested label:** `good first issue`

## 3. Git-skill practice issues

### Issue 16: Fix the deliberate typo

**Description:** Practice finding a simple documentation typo and submitting a focused pull request.

**Files to edit:** `exercises/typo.md`.

**Acceptance criteria:**

- Change `Welcome to the Git practice excercise.` to `Welcome to the Git practice exercise.`
- Do not change any other text.
- The final file contains no spelling error in that sentence.

**Suggested label:** `good first issue`

### Issue 17: Add a Git status practice note

**Description:** Practice creating a branch and adding a new exercise file that explains `git status`.

**Files to edit:** Create `exercises/git-status.md`.

**Acceptance criteria:**

- The new file explains in one paragraph what `git status` shows.
- The file includes the command in a code block.
- The change is made on a new branch and submitted in a pull request.
- No existing files are changed.

**Suggested label:** `good first issue`

### Issue 18: Practice a two-branch merge conflict

**Description:** Create two branches that change the same sentence in a new exercise file, then merge them and resolve the conflict.

**Files to edit:** Create `exercises/merge-conflict.md`.

**Acceptance criteria:**

- The file begins with one short sentence about Git branches.
- Two branches each change that same sentence differently.
- A merge conflict is intentionally produced and resolved.
- The final file contains one clear sentence and no conflict markers (`<<<<<<<`, `=======`, or `>>>>>>>`).

**Suggested label:** `easy`

### Issue 19: Practice reviewing a staged diff

**Description:** Add a small exercise that teaches a contributor to inspect staged changes before committing.

**Files to edit:** Create `exercises/review-diff.md`.

**Acceptance criteria:**

- The file explains why `git diff --staged` is useful.
- The command appears in a code block.
- The file gives one sentence describing when to run it.
- The change is submitted from a new branch.

**Suggested label:** `documentation`

### Issue 20: Practice undoing an unstaged edit

**Description:** Add a guided exercise for safely discarding an edit that has not been staged.

**Files to edit:** Create `exercises/undo-unstaged-edit.md`.

**Acceptance criteria:**

- The file explains that the exercise should use a disposable practice file.
- It includes `git restore <file>` and explains what the command does.
- It warns the learner to check `git status` before restoring.
- The instructions do not ask the learner to discard committed work.

**Suggested label:** `documentation`