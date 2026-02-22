

# HabitLoop – Simple App Plan

## 1️⃣ App Goal

HabitLoop is a minimal daily habit app where users commit to **one simple action per day** and track their consistency through a streak counter.

The focus is:

* One action
* One check per day
* Visible streak
* Clean interface

No complexity. No systems.

---

## 2️⃣ What The App Does

* User sets one daily action (e.g., “Read 10 min”)
* Each day they tap “Completed”
* App records completion
* Streak increases when action is completed
* History shows past days (done / missed)

Everything stored locally.

---

## 3️⃣ What The App Does NOT Do

* No multiple habits
* No coaching
* No reminders (v1)
* No analytics dashboard
* No progress percentages
* No claims about mental health, productivity, or medical improvement
* No accounts or syncing

Keep it identity-focused:

> One habit. Every day.

---

# 4️⃣ Core User Story

> As a user, I open HabitLoop, see my daily action, tap “Completed” once I’ve done it, and watch my streak grow.

That’s the entire loop.

---

# 5️⃣ App Structure

## 🏠 1. Main Screen (90% of App)

Top:

* Today’s date
* Current streak 🔥

Center:

* Big display of the action:
  “Today’s Action: Read 10 minutes”

Below:

* Primary button:
  ✅ “Mark as Completed”

If already completed:

* Button disabled
* Message: “Completed today.”
* Streak displayed clearly

Bottom:

* “Edit Action”
* “View History”

---

## 📅 2. History Page

Simple vertical list:

* Date – Completed
* Date – Missed

At top:

* Current streak
* Longest streak

No charts.
No graphs.
Just clarity.

---

## ⚙️ 3. Settings Page

Minimal but complete:

* Change action
* Reset streak
* Dark mode toggle
* Privacy Policy
* App version

That’s enough for approval.

---

# 6️⃣ The One Nice-to-Have Feature

### 🔁 “Loop Reminder Banner” (Subtle)

If user misses a day:

Instead of just resetting silently, the app shows:

> “Start your loop again today.”

No notifications required.
No push permissions.
Just a simple in-app motivational banner.

This adds emotional reinforcement without technical complexity.

---

# 7️⃣ Streak Logic

* If completed today → streak +1
* If day missed → streak resets to 0
* Longest streak stored
* Only one completion allowed per day

Simple logic = fewer bugs.

---

# 8️⃣ MVP Scope (3–4 Hour Realistic Build)

### Must Have

* Set one habit
* Mark complete
* Daily streak counter
* History list
* Local storage

### Nice to Have (Chosen)

* Missed-day “Restart Loop” banner

---

# 9️⃣ Play Store Positioning

Use language like:

* “Track one daily habit”
* “Simple streak tracker”
* “Stay consistent with one action”
* “Minimal daily tracker”

Avoid:

* Discipline improvement claims
* Behavior therapy framing
* Addiction references
* Mental health framing

Keep it productivity / self-organization focused.

---

# Why HabitLoop Is Strong

Compared to your previous ideas:

* More focused than Micro Habit Tracker
* More identity-driven than ReadTrack
* Simpler than full habit apps
* Feels intentional
* Easy to build
* Very safe category

It has enough depth to feel like a real product, but still small enough to build quickly.
\