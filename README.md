# REVISE

A dependency-free study timetable organiser for learners in Grades 7 to 10.

## Run

Open `index.html` in a browser. Profile, timetable, completed sessions, focus minutes, and streak progress are saved in browser local storage.

## Included

- Grade 7-10 registration
- Subject and study-day selection
- Session length and start-time preferences
- Break length between scheduled tasks, from no break to 30 minutes
- Two-subject daily timetable
- Focus timer with completion tracking
- Daily goal, weekly overview, and streak dashboard
- Optional browser notifications when a scheduled session starts. Notifications require permission and a secure origin (`https://` or `localhost`); the page can alert while its tab is hidden.
- Meadow is unlocked by default. Each additional theme costs 200 diamonds to unlock.

## Notifications when the app is closed

The included `sw.js` registers a service worker and handles Web Push notifications, but a static browser-only app cannot schedule a notification after the browser has closed. To support that requirement, deploy the site over HTTPS and connect a push service/backend that stores each user's PushSubscription and sends Web Push at the scheduled session time. The service worker already handles the incoming push and opens the app when the notification is clicked.
