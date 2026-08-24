const stateKey = 'study-orbit-state';
const themeKey = 'study-orbit-theme';
const themeUnlockCost = 200;
const themes = [
  ['meadow','Meadow','#f5f7f4','#ffffff','#18252b','#718084','#4d987b','#ee8b6b'], ['ocean','Ocean','#eef7f8','#ffffff','#17343d','#607b82','#347a8f','#e59b62'], ['sunset','Sunset','#fff5ed','#fffdf9','#3b2926','#866f69','#b45d4b','#e18a52'], ['lavender','Lavender','#f5f2fa','#ffffff','#302b3d','#746d80','#7966a8','#d8899b'], ['citrus','Citrus','#fbfae9','#ffffff','#36351f','#777451','#8a951f','#df774d'],
  ['rose','Rose','#fff1f3','#ffffff','#3d2930','#866d75','#c85b78','#e29a61'], ['forest','Forest','#eef5ed','#ffffff','#20352a','#6d8173','#3e805d','#d58a55'], ['mint','Mint','#ecf8f3','#ffffff','#1d3832','#668078','#2b9a76','#e38d72'], ['sky','Sky','#edf5fc','#ffffff','#213441','#687e8b','#438bc0','#e07d68'], ['peach','Peach','#fff3eb','#ffffff','#402f2a','#8a7269','#d46f52','#e7a345'],
  ['berry','Berry','#f8eff6','#ffffff','#38283a','#806b7e','#a34c83','#e28b6d'], ['sunflower','Sunflower','#fff9df','#ffffff','#3e351c','#81755a','#c49324','#d76555'], ['teal','Teal','#eaf7f6','#ffffff','#183a3c','#668081','#278b89','#e68a61'], ['indigo','Indigo','#eef0fb','#ffffff','#252844','#6d718d','#5965a9','#de896e'], ['coral','Coral','#fff0ed','#ffffff','#412b2b','#88716d','#cf6255','#e6a23f'],
  ['sage','Sage','#f1f5ed','#ffffff','#29352b','#738073','#789b68','#d78362'], ['plum','Plum','#f5eff7','#ffffff','#38263b','#7f6b82','#854c91','#e09a62'], ['aqua','Aqua','#e9f8fa','#ffffff','#19383e','#668087','#2d9db0','#e88767'], ['denim','Denim','#edf3fa','#ffffff','#243548','#6d7c8d','#4c78a8','#df9860'], ['apricot','Apricot','#fff4e5','#ffffff','#433126','#897669','#db824c','#b96e9b'],
  ['lilac','Lilac','#f4f0fb','#ffffff','#302942','#786f8a','#9272bf','#e18b87'], ['moss','Moss','#f2f5e6','#ffffff','#303824','#777d62','#77933f','#cf795b'], ['lagoon','Lagoon','#e7f7f4','#ffffff','#173c3d','#66827d','#278d83','#e19a55'], ['slate','Slate','#eef2f4','#ffffff','#26343b','#6e7b82','#547988','#dc896e'], ['papaya','Papaya','#fff2e4','#ffffff','#452f23','#8b7467','#df7749','#a95d91'],
  ['orchid','Orchid','#f7eff8','#ffffff','#38283d','#806e84','#a35bb2','#e08b65'], ['olive','Olive','#f5f5e6','#ffffff','#353724','#7c7d65','#8d9637','#ce765e'], ['marine','Marine','#eaf3f8','#ffffff','#1e3540','#6b7e88','#317d9c','#e49a57'], ['frost','Frost','#f1f7fa','#ffffff','#263b46','#71828a','#6b9eb2','#dc8b76'], ['paprika','Paprika','#fff1e8','#ffffff','#442d29','#89736c','#bf5d43','#d9a03e'],
  ['wisteria','Wisteria','#f2eff9','#ffffff','#302b3d','#756e82','#7963a1','#d98791'], ['fern','Fern','#edf6ee','#ffffff','#20392b','#6b8171','#428a5b','#dc9a4d'], ['pool','Pool','#e8f8f8','#ffffff','#183a3c','#668282','#369b9a','#e18867'], ['periwinkle','Periwinkle','#eff2fc','#ffffff','#29334c','#707b98','#667dc1','#e18a69'], ['honey','Honey','#fff8df','#ffffff','#45361e','#88785c','#d59b26','#cb6b63'],
  ['blush','Blush','#fff0f2','#ffffff','#442b34','#896e77','#ce6a82','#d9974f'], ['pine','Pine','#edf5ef','#ffffff','#1f352b','#6a8072','#337652','#df9063'], ['cyan','Cyan','#e9f8fa','#ffffff','#1d3940','#687f86','#2495a8','#e2925d'], ['royal','Royal','#eef0fa','#ffffff','#252a45','#6c718e','#5369ad','#dd8c72'], ['tangerine','Tangerine','#fff0e6','#ffffff','#432d25','#897268','#df7540','#a964a2'],
  ['iris','Iris','#f4f0fb','#ffffff','#302942','#786f89','#8068b5','#e38b6c'], ['avocado','Avocado','#f1f5e6','#ffffff','#2b3826','#748064','#7d9d3d','#d47761'], ['seaglass','Seaglass','#e9f7f3','#ffffff','#1d3935','#69807a','#4b9d8a','#e28c65'], ['bluebell','Bluebell','#eef3fb','#ffffff','#293548','#6d7c91','#648bc1','#df9269'], ['flame','Flame','#fff0e8','#ffffff','#422b28','#89716c','#d45e48','#e3a03c'],
  ['mocha','Mocha','#f6f0e9','#fffdfb','#3e312b','#85766e','#a56c4f','#d28b55'], ['charcoal','Charcoal','#eef1f1','#ffffff','#20292d','#6d797b','#527b7d','#df8d70'], ['cobalt','Cobalt','#edf2fb','#ffffff','#202f46','#6b7890','#3f68b0','#e28e68'], ['magenta','Magenta','#f8eff5','#ffffff','#402638','#866e7d','#b34a89','#e39457'], ['lime','Lime','#f4f7e8','#ffffff','#303b20','#778164','#86a82e','#d86f62']
].map(([id, name, paper, card, ink, muted, accent, highlight], index) => ({
  id, name, paper, card, ink, muted, accent, highlight,
  bodyFont: index % 5 === 0 ? "'DM Sans', sans-serif" : index % 5 === 1 ? "'Trebuchet MS', sans-serif" : index % 5 === 2 ? "Georgia, serif" : index % 5 === 3 ? "Verdana, sans-serif" : "'Gill Sans', sans-serif",
  displayFont: index % 4 === 0 ? "'Space Grotesk', sans-serif" : index % 4 === 1 ? "Georgia, serif" : index % 4 === 2 ? "'Trebuchet MS', sans-serif" : "'Gill Sans', sans-serif",
  radius: `${6 + (index % 4) * 4}px`, shadow: index % 3 === 0 ? '0 18px 50px rgba(32,52,59,.08)' : index % 3 === 1 ? '0 12px 30px rgba(32,52,59,.14)' : '0 4px 18px rgba(32,52,59,.12)'
}));
const extraThemeWords = ['Aurora','Breeze','Canyon','Dawn','Dew','Eclipse','Garden','Harbor','Horizon','Lagoon','Meadow','Moon','Nova','Petal','Rain','Solstice','Spark','Tide','Twilight','Willow'];
const extraThemeStyles = ['Glow','Mist','Bloom','Drift','Light'];
themes.push(...Array.from({ length: 100 }, (_, index) => {
  const hue = (index * 37 + 11) % 360;
  const paper = `hsl(${hue} 38% 96%)`;
  const accent = `hsl(${hue} 48% 42%)`;
  return { id: `theme-${index + 1}`, name: `${extraThemeWords[index % 20]} ${extraThemeStyles[Math.floor(index / 20)]}`, paper, card: '#ffffff', ink: `hsl(${(hue + 180) % 360} 25% 20%)`, muted: `hsl(${hue} 12% 45%)`, accent, highlight: `hsl(${(hue + 28) % 360} 68% 62%)`, bodyFont: index % 2 ? "'Trebuchet MS', sans-serif" : "'DM Sans', sans-serif", displayFont: index % 3 ? "'Space Grotesk', sans-serif" : 'Georgia, serif', radius: `${6 + (index % 4) * 4}px`, shadow: '0 12px 30px rgba(32,52,59,.10)' };
}));
const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const additionalSubjects = ['Afrikaans','English','isiZulu','isiXhosa','Sepedi','Setswana','Sesotho','siSwati','Tshivenda','itsonga','isiNdebele','Agricultural Management Practices','Hospitality Studies','Dance Studies','Civil Technology','Electrical Technology','Mechanical Technology','Agricultural Technology'];
let state = JSON.parse(localStorage.getItem(stateKey) || 'null');
if (state && !state.subjectsPerDay) state.subjectsPerDay = 2;
if (state && state.breakMinutes === undefined) state.breakMinutes = 15;
if (state && !state.lastStudyDate) state.streak = 0;
let timerId = null;
let timerSeconds = 0;
let timerTotal = 0;
let activeSession = null;
let reminderTimer = null;

const $ = (selector) => document.querySelector(selector);
const save = () => localStorage.setItem(stateKey, JSON.stringify(state));
const todayName = () => new Intl.DateTimeFormat('en-US', { weekday:'long' }).format(new Date());
const formatTime = (value) => new Intl.DateTimeFormat('en-US', { hour:'numeric', minute:'2-digit' }).format(new Date(`2000-01-01T${value}`));
const localDateKey = (date = new Date()) => { const year = date.getFullYear(); const month = String(date.getMonth() + 1).padStart(2, '0'); const day = String(date.getDate()).padStart(2, '0'); return `${year}-${month}-${day}`; };
const dateDifference = (firstDate, secondDate) => Math.round((new Date(secondDate) - new Date(firstDate)) / 86400000);
function applyTheme(theme) {
  const unlockedThemes = state?.unlockedThemes || ['meadow'];
  const selectedTheme = themes.find((item) => item.id === theme && unlockedThemes.includes(item.id)) || themes[0];
  document.documentElement.dataset.theme = selectedTheme.id;
  Object.entries({ '--theme-paper': selectedTheme.paper, '--theme-card': selectedTheme.card, '--theme-ink': selectedTheme.ink, '--theme-muted': selectedTheme.muted, '--theme-accent': selectedTheme.accent, '--theme-highlight': selectedTheme.highlight, '--theme-body-font': selectedTheme.bodyFont, '--theme-display-font': selectedTheme.displayFont, '--theme-radius': selectedTheme.radius, '--theme-shadow': selectedTheme.shadow }).forEach(([property, value]) => document.documentElement.style.setProperty(property, value, 'important'));
  localStorage.setItem(themeKey, selectedTheme.id);
  if ($('#theme-select')) $('#theme-select').value = selectedTheme.id;
}
function populateThemes() {
  const unlockedThemes = state?.unlockedThemes || ['meadow'];
  $('#theme-select').innerHTML = themes.map((theme) => `<option value="${theme.id}" ${unlockedThemes.includes(theme.id) ? '' : 'data-locked="true"'}>${unlockedThemes.includes(theme.id) ? theme.name : `${theme.name} - ${themeUnlockCost} diamonds`}</option>`).join('');
}
function refreshThemePicker() {
  const currentTheme = document.documentElement.dataset.theme || 'meadow';
  populateThemes();
  $('#theme-select').value = currentTheme;
}
function unlockTheme(themeId) {
  const selectedTheme = themes.find((theme) => theme.id === themeId);
  if (!selectedTheme || selectedTheme.id === 'meadow') return true;
  state.unlockedThemes ||= ['meadow'];
  if (state.unlockedThemes.includes(themeId)) return true;
  if ((state.diamonds || 0) < themeUnlockCost) {
    alert(`You need ${themeUnlockCost} diamonds to unlock ${selectedTheme.name}.`);
    return false;
  }
  state.diamonds -= themeUnlockCost;
  state.unlockedThemes.push(themeId);
  save();
  refreshThemePicker();
  render();
  return true;
}
function renderThemeWords() {
  const theme = themes.find((item) => item.id === document.documentElement.dataset.theme) || themes[0];
  const themeName = theme.name.toLowerCase();
  $('.hero-strip .tag').textContent = 'YOUR FOCUS';
  $('.hero-strip h2').innerHTML = 'Two focused sessions.<br><em>A lighter day ahead.</em>';
  $('#session-summary').dataset.themeWords = themeName;
  document.querySelectorAll('.session-subject small').forEach((label) => { if (label.textContent.includes('Ready')) label.textContent = 'Ready when you are.'; });
  $('.sidebar-footer strong').textContent = 'Keep your orbit.';
}
function renderFirePet() {
  const streak = state.streak || 0;
  const pet = streak >= 14 ? ['blaze', 'Solar', 'Legendary streak'] : streak >= 7 ? ['frostfire', 'Frostfire', 'Bright streak'] : streak >= 3 ? ['gold', 'Glow', 'Growing streak'] : streak >= 1 ? ['flame', 'Flare', 'Warm start'] : ['ember', 'Ember', 'Ready to grow'];
  $('#fire-pet').dataset.level = pet[0];
  $('#fire-pet-name').textContent = pet[1];
  $('#fire-pet-streak').textContent = `${streak} day${streak === 1 ? '' : 's'} streak · ${pet[2]}`;
}
function renderProfile() {
  const unlockedThemes = state.unlockedThemes || ['meadow'];
  $('#profile-avatar-large').textContent = state.name[0].toUpperCase();
  $('#profile-heading').textContent = state.name;
  $('#profile-diamonds').textContent = state.diamonds || 0;
  $('#profile-session-count').textContent = (state.completed || []).length;
  $('#profile-minute-count').textContent = state.totalMinutes || 0;
  $('#profile-streak-count').textContent = state.streak || 0;
  $('#theme-gallery').innerHTML = themes.map((theme) => {
    const unlocked = unlockedThemes.includes(theme.id);
    const selected = document.documentElement.dataset.theme === theme.id;
    return `<button class="theme-swatch ${selected ? 'selected' : ''} ${unlocked ? '' : 'locked'}" data-theme-id="${theme.id}" style="--swatch-accent:${theme.accent};--swatch-paper:${theme.paper}" ${unlocked ? '' : `title="Unlock for ${themeUnlockCost} diamonds"`}><span></span><strong>${theme.name}</strong><small>${unlocked ? (selected ? 'Active' : 'Use theme') : `${themeUnlockCost} ◆`}</small></button>`;
  }).join('');
}
function addNotificationSetting() {
  const subjectGrid = document.querySelector('.subject-grid');
  if (document.querySelector('#study-reminders')) return;
  const setting = document.createElement('label');
  setting.className = 'notification-setting';
  setting.innerHTML = '<input id="study-reminders" type="checkbox"><span>Remind me when a study session starts</span>';
  subjectGrid.parentElement.appendChild(setting);
}
function addBreakSetting() {
  if (document.querySelector('#break-minutes')) return;
  const startTime = document.querySelector('#onboarding-modal #start-time');
  if (!startTime) return;
  const setting = document.createElement('label');
  setting.innerHTML = 'Break between tasks<select id="break-minutes"><option value="0">No break</option><option value="5">5 minutes</option><option value="10">10 minutes</option><option value="15" selected>15 minutes</option><option value="20">20 minutes</option><option value="30">30 minutes</option></select>';
  startTime.closest('label').before(setting);
}
async function requestNotificationPermission() {
  if (!('Notification' in window)) return false;
  if (Notification.permission === 'granted') return true;
  if (Notification.permission === 'denied') return false;
  return (await Notification.requestPermission()) === 'granted';
}
function notifyForUpcomingSessions() {
  if (!state?.remindersEnabled || !('Notification' in window) || Notification.permission !== 'granted') return;
  const now = new Date();
  const currentMinute = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  const sessions = getSchedule().filter((item) => item.day === todayName() && item.time === currentMinute);
  state.notificationSent ||= {};
  sessions.forEach((session) => {
    const notificationKey = `${localDateKey()}-${session.key}`;
    if (state.notificationSent[notificationKey]) return;
    state.notificationSent[notificationKey] = true;
    new Notification(`Study time: ${session.subject}`, { body: `${state.duration} minutes of focused study starts now.`, tag: notificationKey });
    save();
  });
}
function startReminderChecks() {
  clearInterval(reminderTimer);
  notifyForUpcomingSessions();
  reminderTimer = setInterval(notifyForUpcomingSessions, 30000);
}
function registerServiceWorker() {
  if ('serviceWorker' in navigator && window.isSecureContext) navigator.serviceWorker.register('./sw.js').catch(() => {});
}
function populateSubjects() {
  const subjectGrid = document.querySelector('.subject-grid');
  const existing = new Set([...subjectGrid.querySelectorAll('input[name="subject"]')].map((input) => input.value));
  additionalSubjects.filter((subject) => !existing.has(subject)).forEach((subject) => {
    const label = document.createElement('label');
    label.innerHTML = `<input type="checkbox" name="subject" value="${subject}"><span>${subject}</span>`;
    subjectGrid.appendChild(label);
  });
  const subjectCount = document.createElement('label');
  subjectCount.innerHTML = 'Subjects per study day<select id="subjects-per-day"><option value="1">1 subject</option><option value="2" selected>2 subjects</option><option value="3">3 subjects</option><option value="4">4 subjects</option><option value="5">5 subjects</option></select>';
  subjectGrid.parentElement.appendChild(subjectCount);
  addNotificationSetting();
  addBreakSetting();
}

function show(view) {
  document.querySelectorAll('.page-view').forEach((item) => item.classList.toggle('hidden', item.id !== `${view}-view`));
  document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('active', item.dataset.view === view));
}
function openModal(id) { $(id).classList.remove('hidden'); if (id === '#onboarding-modal') { const card = $('#onboarding-modal .modal-card'); card.style.transform = `translate(${card.dataset.x || 0}px, ${card.dataset.y || 0}px)`; if ($('#subjects-per-day')) $('#subjects-per-day').value = state.subjectsPerDay; if ($('#break-minutes')) $('#break-minutes').value = state.breakMinutes ?? 15; if ($('#study-reminders')) $('#study-reminders').checked = Boolean(state.remindersEnabled); document.querySelectorAll('input[name="subject"]').forEach((input) => { input.checked = state.subjects.includes(input.value); }); document.querySelectorAll('input[name="day"]').forEach((input) => { input.checked = state.days.includes(input.value); }); } }
function setupMovablePlanner() {
  const card = $('#onboarding-modal .modal-card');
  let dragging = false;
  let startX = 0;
  let startY = 0;
  let originX = 0;
  let originY = 0;
  card.style.touchAction = 'auto';
  card.style.cursor = 'grab';
  card.querySelector('.eyebrow').style.userSelect = 'none';
  card.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'touch') return;
    if (event.target.closest('button, input, select, label')) return;
    if (event.clientY > card.getBoundingClientRect().top + 125) return;
    dragging = true;
    card.style.cursor = 'grabbing';
    startX = event.clientX;
    startY = event.clientY;
    originX = Number(card.dataset.x || 0);
    originY = Number(card.dataset.y || 0);
    card.setPointerCapture(event.pointerId);
  });
  card.addEventListener('pointermove', (event) => {
    if (!dragging) return;
    card.dataset.x = originX + event.clientX - startX;
    card.dataset.y = originY + event.clientY - startY;
    card.style.transform = `translate(${card.dataset.x}px, ${card.dataset.y}px)`;
  });
  card.addEventListener('pointerup', () => { dragging = false; card.style.cursor = 'grab'; });
  card.addEventListener('pointercancel', () => { dragging = false; card.style.cursor = 'grab'; });
}
function closeModal(element) { element.closest('.modal').classList.add('hidden'); }
function getSchedule() {
  return state.days.flatMap((day, dayIndex) => Array.from({ length: state.subjectsPerDay }, (_, slot) => ({ day, subject: state.subjects[(dayIndex * state.subjectsPerDay + slot) % state.subjects.length], time: addMinutes(state.startTime, slot * (state.duration + (state.breakMinutes ?? 15))), key: `${day}-${slot}` })));
}
function addMinutes(time, amount) { const [hours, minutes] = time.split(':').map(Number); const date = new Date(2000,0,1,hours,minutes + amount); return `${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}`; }
function render() {
  if (!state) return;
  $('#auth-view').classList.add('hidden'); $('#planner-view').classList.remove('hidden'); applyTheme(localStorage.getItem(themeKey));
  $('#profile-name').textContent = state.name; $('#profile-grade').textContent = state.grade; $('#avatar').textContent = state.name[0].toUpperCase();
  const hour = new Date().getHours(); $('#greeting').textContent = hour < 12 ? 'Good morning.' : hour < 18 ? 'Good afternoon.' : 'Good evening.';
  $('#date-label').textContent = new Intl.DateTimeFormat('en-US',{weekday:'long',day:'numeric',month:'long'}).format(new Date()).toUpperCase();
  const schedule = getSchedule(); const todaySessions = schedule.filter((item) => item.day === todayName());
  const completed = state.completed || [];
  if (state.lastStudyDate && dateDifference(state.lastStudyDate, localDateKey()) > 1 && state.streak !== 0) { state.streak = 0; save(); }
  document.querySelectorAll('.streak-chip small, #progress-streak + p').forEach((label) => { label.textContent = 'task streak'; });
  $('#streak-count').textContent = state.streak || 0; $('#progress-streak').textContent = state.streak || 0; $('#total-minutes').textContent = state.totalMinutes || 0; $('#total-sessions').textContent = completed.length; $('#diamond-count').textContent = state.diamonds || 0; $('#progress-diamonds').textContent = state.diamonds || 0;
  $('#session-summary').textContent = `${todaySessions.filter((item) => completed.includes(item.key)).length} of ${todaySessions.length} sessions complete`;
  const percent = todaySessions.length ? Math.round(todaySessions.filter((item) => completed.includes(item.key)).length / todaySessions.length * 100) : 0; $('#daily-percent').textContent = `${percent}%`; $('.progress-ring').style.background = `conic-gradient(var(--coral) ${percent * 3.6}deg, #e4f0e9 0)`;
  $('#session-list').innerHTML = todaySessions.map((item) => { const done = completed.includes(item.key); return `<article class="session-card"><div class="session-time">${formatTime(item.time)}<small>${state.duration} min focus</small></div><div class="session-subject">${item.subject}<small>${done ? 'Completed. Nice work.' : 'Ready when you are.'}</small></div><button class="session-status ${done?'done':''}" data-session="${item.key}" data-subject="${item.subject}" data-time="${item.time}">${done?'✓ Done':'Start focus'}</button></article>`; }).join('');
  renderThemeWords();
  renderProfile();
  $('#week-grid').innerHTML = days.map((day) => `<div class="day-column ${day===todayName()?'today':''}"><div class="day-name">${day.slice(0,3).toUpperCase()}${day===todayName()?' · TODAY':''}</div>${schedule.filter((item)=>item.day===day).map((item)=>`<div class="day-session">${item.subject}<small>${formatTime(item.time)}</small></div>`).join('')}</div>`).join('');
}
function openTimer(button) { activeSession = button.dataset.session; $('#timer-subject').textContent = button.dataset.subject; timerTotal = state.duration * 60; timerSeconds = timerTotal; $('#timer-display').textContent = `${String(state.duration).padStart(2,'0')}:00`; $('#timer-message').textContent = 'Take a breath. You have got this.'; $('#timer-toggle').innerHTML = 'Start session <span>▶</span>'; openModal('#timer-modal'); }
function updateTimer() { const min = Math.floor(timerSeconds/60); const sec = timerSeconds%60; $('#timer-display').textContent = `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`; $('#timer-bar').style.width = `${((timerTotal-timerSeconds)/timerTotal)*100}%`; }
function completeSession() { state.completed ||= []; state.diamonds ||= 0; if (!state.completed.includes(activeSession)) { const today = localDateKey(); const lastStudyDate = state.lastStudyDate; state.completed.push(activeSession); state.diamonds += 100; state.totalMinutes += state.duration; if (!lastStudyDate || dateDifference(lastStudyDate, today) > 1) state.streak = 1; else if (dateDifference(lastStudyDate, today) === 1) state.streak = (state.streak || 0) + 1; state.lastStudyDate = today; save(); } clearInterval(timerId); timerId = null; closeModal($('#timer-modal')); render(); }

$('#setup-form').addEventListener('submit', (event) => { event.preventDefault(); state = { name: $('#name').value.trim(), grade: $('#grade').value, subjects: ['Mathematics','English'], subjectsPerDay:2, days: ['Monday','Tuesday','Wednesday','Thursday','Friday'], duration:45, breakMinutes:15, startTime:'16:00', completed:[], totalMinutes:0, diamonds:0, unlockedThemes:['meadow'], streak:0, remindersEnabled:false, notificationSent:{} }; save(); render(); openModal('#onboarding-modal'); });
$('#plan-form').addEventListener('submit', async (event) => { event.preventDefault(); const subjects = [...document.querySelectorAll('input[name=subject]:checked')].map((input)=>input.value); const selectedDays = [...document.querySelectorAll('input[name=day]:checked')].map((input)=>input.value); if(subjects.length < 1 || !selectedDays.length) return alert('Choose at least one subject and one study day.'); state.subjects=subjects; state.subjectsPerDay=Number($('#subjects-per-day').value); state.days=selectedDays; state.duration=Number($('#duration').value); state.breakMinutes=Number($('#break-minutes').value); state.startTime=$('#start-time').value; state.remindersEnabled=$('#study-reminders').checked; if (state.remindersEnabled) state.remindersEnabled = await requestNotificationPermission(); save(); closeModal($('#onboarding-modal')); render(); startReminderChecks(); });
document.addEventListener('click',(event)=>{ const button=event.target.closest('.session-status'); if(button && !button.classList.contains('done')) openTimer(button); if(event.target.matches('[data-close]')) closeModal(event.target); if(event.target.matches('.nav-item')) show(event.target.dataset.view); });
document.addEventListener('click',(event)=>{ const themeButton=event.target.closest('.theme-swatch'); if (!themeButton) return; const themeId=themeButton.dataset.themeId; if (unlockTheme(themeId)) { applyTheme(themeId); render(); show('profile'); } });
$('#timer-toggle').addEventListener('click',()=>{ if(timerId){ clearInterval(timerId); timerId=null; $('#timer-toggle').innerHTML='Resume session <span>▶</span>'; } else { $('#timer-toggle').innerHTML='Pause session <span>Ⅱ</span>'; timerId=setInterval(()=>{ if(timerSeconds>0){timerSeconds--;updateTimer();} else { clearInterval(timerId); timerId=null; $('#timer-message').textContent='Time is up. Session complete!'; $('#timer-toggle').innerHTML='Finish session <span>✓</span>'; } },1000); } });
$('#timer-complete').addEventListener('click', completeSession); $('#edit-plan').addEventListener('click',()=>openModal('#onboarding-modal')); $('#edit-plan-two').addEventListener('click',()=>openModal('#onboarding-modal')); $('#reset-button').addEventListener('click',()=>{ if(confirm('Clear your profile and start again?')){localStorage.removeItem(stateKey); location.reload();} });
populateSubjects();
setupMovablePlanner();
if (state) { state.remindersEnabled ??= false; state.notificationSent ??= {}; state.diamonds ??= 0; state.unlockedThemes ??= ['meadow']; render(); startReminderChecks(); }
registerServiceWorker();
populateThemes();
applyTheme(localStorage.getItem(themeKey));
$('#theme-select').addEventListener('change', (event) => { const themeId = event.target.value; if (!unlockTheme(themeId)) { event.target.value = document.documentElement.dataset.theme || 'meadow'; return; } applyTheme(themeId); renderThemeWords(); });
