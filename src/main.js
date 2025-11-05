import './style.css';
import { renderHome } from './views/Home.js';
import { renderExpenseTracker, initExpenseTracker } from './views/ExpenseTracker.js';
import { renderSavingsControl, initSavingsControl } from './views/SavingsControl.js';
import { renderImpulseControl, initImpulseControl } from './views/ImpulseControl.js';
import { renderWeeklyChecklist, initWeeklyChecklist } from './views/WeeklyChecklist.js';
import { renderMotivationalPhrases, initMotivationalPhrases } from './views/MotivationalPhrases.js';
import { renderBitacora, initBitacora } from './views/Bitacora.js';

let currentView = 'home';

function navigate(view) {
  currentView = view;
  render();
}

function render() {
  const app = document.querySelector('#app');
  
  if (currentView === 'home') {
    app.innerHTML = renderHome(navigate);
    setupHomeCards();
  } 
  else if (currentView === 'expenses') {
    app.innerHTML = renderExpenseTracker();
    initExpenseTracker();
    setupBackButton();
  }
  else if (currentView === 'savings') {
    app.innerHTML = renderSavingsControl();
    initSavingsControl();
    setupBackButton();
  }
  else if (currentView === 'impulse') {
    app.innerHTML = renderImpulseControl();
    initImpulseControl();
    setupBackButton();
  }
  else if (currentView === 'checklist') {
    app.innerHTML = renderWeeklyChecklist();
    initWeeklyChecklist();
    setupBackButton();
  }
  else if (currentView === 'motivation') {
    app.innerHTML = renderMotivationalPhrases();
    initMotivationalPhrases();
    setupBackButton();
  }
  else if (currentView === 'bitacora') {
    app.innerHTML = renderBitacora();
    initBitacora();
    setupBackButton();
  }
}

function setupHomeCards() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
      const view = e.currentTarget.dataset.view;
      
      // Mapeo de vistas
      const viewMap = {
        expenses: 'expenses',
        savings: 'savings',
        impulse: 'impulse',
        checklist: 'checklist',
        motivation: 'motivation',
        dashboard: 'bitacora' // "dashboard" del Home.js → "bitacora"
      };
      
      if (viewMap[view]) {
        navigate(viewMap[view]);
      } else {
        showNotification('⚠️ Próximamente disponible', 'info');
      }
    });
  });
}

function setupBackButton() {
  const btn = document.getElementById('btnBack');
  if (btn) {
    btn.addEventListener('click', () => navigate('home'));
  }
}

function showNotification(message, type = 'info') {
  const colors = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600'
  };
  
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 ${colors[type]} text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-bounce`;
  notification.innerHTML = `<p class="font-semibold">${message}</p>`;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Inicializar la aplicación
render();
