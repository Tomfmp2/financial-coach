export function renderWeeklyChecklist() {
  return `
    <div class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-0 p-4 md:p-8 bg-cover bg-center bg-no-repeat bg-fixed"
style="background-image: url('../../public/assets/img/pexels-mikhail-nilov-6963909.jpg');">

      <!-- Botón Volver -->
      <button 
        id="btnBack"
        class="fixed top-4 left-4 bg-indigo-600 text-black px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all z-50 flex items-center gap-2"
      >
        ← Volver al Inicio
      </button>

      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="bg-white/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-6">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h1 class="text-3xl font-bold text-gray-950"> <img class="w-8 h-8" src="/assets/icons/evaluacion.png" alt="icon control ahorros">Checklist Semanal</h1>
              <p class="text-gray-950 mt-1">Mantén tus hábitos financieros bajo control</p>
            </div>
            <div class="text-right">
              <p class="text-sm text-gray-950">Semana Actual</p>
              <p class="text-lg font-bold text-indigo-600" id="currentWeekRange"></p>
            </div>
          </div>

          <!-- Progreso Semanal -->
          <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-6">
            <div class="flex items-center justify-between mb-4">
              <div>
                <p class="text-indigo-100 text-sm">Progreso de la Semana</p>
                <p class="text-5xl font-bold mt-1" id="weeklyPercentage">0%</p>
              </div>
              <div class="text-6xl opacity-50" id="progressEmoji">📝</div>
            </div>

            <!-- Barra de Progreso -->
            <div class="mb-4">
              <div class="flex justify-between text-sm text-indigo-100 mb-2">
                <span>Tareas Completadas</span>
                <span id="taskCount">0/4</span>
              </div>
              <div class="w-full bg-white  rounded-full h-4 overflow-hidden">
                <div 
                  id="progressBar"
                  class="bg-white h-4 rounded-full transition-all duration-500"
                  style="width: 0%"
                ></div>
              </div>
            </div>

            <!-- Mini Stats -->
            <div class="grid grid-cols-2 gap-4 mt-4">
              <div class="bg-white bg-opacity-20 rounded-lg p-3">
                <p class="text-xl font-bold text-indigo-900">Racha Actual</p>
                <p class="text-xs font-semibold text-indigo-700" id="currentStreak">0 semanas</p>
              </div>
              <div class="bg-white bg-opacity-20 rounded-lg p-3">
                <p class="text-xl font-bold text-indigo-900">Mejor Racha</p>
                <p class="text-xs font-semibold text-indigo-700" id="bestStreak">0 semanas</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Checklist de Tareas -->
        <div class="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h2 class="text-xl font-bold text-gray-800 mb-6">📋 Tareas de la Semana</h2>
          
          <div class="space-y-4" id="tasksList">
            <!-- Tarea 1: Lunes -->
            <div class="task-card border-2 rounded-xl p-5 transition-all hover:shadow-md" data-task="lunes">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4 flex-1">
                  <button class="task-checkbox w-8 h-8 rounded-lg border-3 border-indigo-300 flex items-center justify-center hover:bg-indigo-50 transition-all">
                    <span class="check-icon hidden text-white text-xl">✓</span>
                  </button>
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <h3 class="font-bold text-gray-800 text-lg">Lunes - Registro de Gastos</h3>
                    </div>
                    <p class="text-sm text-gray-600 ml-8">Registré todos los gastos del fin de semana</p>
                  </div>
                </div>
                <div class="task-day bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg font-semibold text-sm">
                  Lun
                </div>
              </div>
            </div>

            <!-- Tarea 2: Miércoles -->
            <div class="task-card border-2 rounded-xl p-5 transition-all hover:shadow-md" data-task="miercoles">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4 flex-1">
                  <button class="task-checkbox w-8 h-8 rounded-lg border-3 border-indigo-300 flex items-center justify-center hover:bg-indigo-50 transition-all">
                    <span class="check-icon hidden text-white text-xl">✓</span>
                  </button>
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <h3 class="font-bold text-gray-800 text-lg">Miércoles - Reunión Grupal</h3>
                    </div>
                    <p class="text-sm text-gray-600 ml-8">Asistí a la reunión financiera del grupo</p>
                  </div>
                </div>
                <div class="task-day bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg font-semibold text-sm">
                  Mié
                </div>
              </div>
            </div>

            <!-- Tarea 3: Viernes -->
            <div class="task-card border-2 rounded-xl p-5 transition-all hover:shadow-md" data-task="viernes">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4 flex-1">
                  <button class="task-checkbox w-8 h-8 rounded-lg border-3 border-indigo-300 flex items-center justify-center hover:bg-indigo-50 transition-all">
                    <span class="check-icon hidden text-white text-xl">✓</span>
                  </button>
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <h3 class="font-bold text-gray-800 text-lg">Viernes - Ahorro Semanal</h3>
                    </div>
                    <p class="text-sm text-gray-600 ml-8">Transferí mi ahorro de $50,000 COP</p>
                  </div>
                </div>
                <div class="task-day bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg font-semibold text-sm">
                  Vie
                </div>
              </div>
            </div>

            <!-- Tarea 4: Domingo -->
            <div class="task-card border-2 rounded-xl p-5 transition-all hover:shadow-md" data-task="domingo">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4 flex-1">
                  <button class="task-checkbox w-8 h-8 rounded-lg border-3 border-indigo-300 flex items-center justify-center hover:bg-indigo-50 transition-all">
                    <span class="check-icon hidden text-white text-xl">✓</span>
                  </button>
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <h3 class="font-bold text-gray-800 text-lg">Domingo - Plan de Gastos</h3>
                    </div>
                    <p class="text-sm text-gray-600 ml-8">Hice mi planificación de gastos para la próxima semana</p>
                  </div>
                </div>
                <div class="task-day bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg font-semibold text-sm">
                  Dom
                </div>
              </div>
            </div>
          </div>

          <!-- Botón Reset Semanal -->
          <div class="mt-6 pt-6 border-t-2 border-gray-100">
            <button
              id="btnResetWeek"
              class="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all"
            >
              Iniciar Nueva Semana
            </button>
          </div>
        </div>

        <!-- Historial de Semanas -->
        <div class="bg-white/30 backdrop-blur-sm rounded-2xl shadow-xl p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4">
            📊 Historial de Cumplimiento (<span id="weeksCount">0</span> semanas)
          </h2>
          
          <div id="weekHistory" class="space-y-3">
            <div class="text-center py-12">
              <div class="text-6xl mb-4"><img class="w-14 h-14" src="../../public/assets/icons/barras.png" alt="icon control ahorros">
</div>
              <p class="text-gray-500 text-lg">No hay historial todavía</p>
              <p class="text-gray-400 text-sm mt-2">Completa tu primera semana para ver tu progreso</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initWeeklyChecklist() {
  let weeks = JSON.parse(localStorage.getItem('weeklyChecklists') || '[]');
  let currentWeek = JSON.parse(localStorage.getItem('currentWeekChecklist') || null);

  // Inicializar semana actual si no existe
  if (!currentWeek || !isCurrentWeek(currentWeek.weekStart)) {
    currentWeek = createNewWeek();
    localStorage.setItem('currentWeekChecklist', JSON.stringify(currentWeek));
  }

  updateWeekRange();
  renderCurrentWeek();
  renderHistory();

  // Event listeners para checkboxes
  document.querySelectorAll('.task-checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', (e) => {
      const taskCard = e.currentTarget.closest('.task-card');
      const taskName = taskCard.dataset.task;
      toggleTask(taskName);
    });
  });

  // Event listener para reset
  document.getElementById('btnResetWeek').addEventListener('click', () => {
    if (confirm('¿Estás seguro de iniciar una nueva semana? Se guardará el progreso actual.')) {
      saveCurrentWeek();
      currentWeek = createNewWeek();
      localStorage.setItem('currentWeekChecklist', JSON.stringify(currentWeek));
      renderCurrentWeek();
      renderHistory();
      showToast('🎉 Nueva semana iniciada. ¡A por todas!', 'success');
    }
  });

  function createNewWeek() {
    const now = new Date();
    return {
      weekStart: now.toISOString(),
      tasks: {
        lunes: false,
        miercoles: false,
        viernes: false,
        domingo: false
      },
      completed: 0,
      percentage: 0
    };
  }

  function isCurrentWeek(weekStartString) {
    const weekStart = new Date(weekStartString);
    const now = new Date();
    const daysDiff = Math.floor((now - weekStart) / (1000 * 60 * 60 * 24));
    return daysDiff < 7; // Menos de 7 días
  }

  function updateWeekRange() {
    const weekStart = new Date(currentWeek.weekStart);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    
    const formatDate = (date) => {
      return date.toLocaleDateString('es-CO', { day: '2-digit', month: 'short' });
    };
    
    document.getElementById('currentWeekRange').textContent = 
      `${formatDate(weekStart)} - ${formatDate(weekEnd)}`;
  }

  function toggleTask(taskName) {
    currentWeek.tasks[taskName] = !currentWeek.tasks[taskName];
    updateProgress();
    localStorage.setItem('currentWeekChecklist', JSON.stringify(currentWeek));
    renderCurrentWeek();

    if (currentWeek.tasks[taskName]) {
      showToast('✅ ¡Tarea completada!', 'success');
    }
  }

  function updateProgress() {
    const completed = Object.values(currentWeek.tasks).filter(t => t).length;
    const total = Object.keys(currentWeek.tasks).length;
    currentWeek.completed = completed;
    currentWeek.percentage = Math.round((completed / total) * 100);
  }

  function renderCurrentWeek() {
    updateProgress();

    // Actualizar stats
    document.getElementById('weeklyPercentage').textContent = `${currentWeek.percentage}%`;
    document.getElementById('taskCount').textContent = `${currentWeek.completed}/4`;
    document.getElementById('progressBar').style.width = `${currentWeek.percentage}%`;

    // Actualizar emoji según progreso
    const emoji = currentWeek.percentage === 100 ? '🎉' : 
                  currentWeek.percentage >= 75 ? '🔥' :
                  currentWeek.percentage >= 50 ? '💪' :
                  currentWeek.percentage >= 25 ? '📝' : '⏳';
    document.getElementById('progressEmoji').textContent = emoji;

    // Actualizar rachas
    const streakData = calculateStreaks();
    document.getElementById('currentStreak').textContent = `${streakData.current} semana${streakData.current !== 1 ? 's' : ''}`;
    document.getElementById('bestStreak').textContent = `${streakData.best} semana${streakData.best !== 1 ? 's' : ''}`;

    // Actualizar checkboxes visuales
    document.querySelectorAll('.task-card').forEach(card => {
      const taskName = card.dataset.task;
      const isCompleted = currentWeek.tasks[taskName];
      const checkbox = card.querySelector('.task-checkbox');
      const checkIcon = card.querySelector('.check-icon');

      if (isCompleted) {
        card.classList.add('border-indigo-500', 'bg-indigo-50');
        card.classList.remove('border-gray-200');
        checkbox.classList.add('bg-indigo-600', 'border-indigo-600');
        checkbox.classList.remove('border-indigo-300');
        checkIcon.classList.remove('hidden');
      } else {
        card.classList.remove('border-indigo-500', 'bg-indigo-50');
        card.classList.add('border-gray-200');
        checkbox.classList.remove('bg-indigo-600', 'border-indigo-600');
        checkbox.classList.add('border-indigo-300');
        checkIcon.classList.add('hidden');
      }
    });
  }

  function saveCurrentWeek() {
    if (currentWeek.completed > 0) {
      const weekToSave = {
        ...currentWeek,
        weekEnd: new Date().toISOString()
      };
      weeks.unshift(weekToSave);
      localStorage.setItem('weeklyChecklists', JSON.stringify(weeks));
    }
  }

  function calculateStreaks() {
    let current = 0;
    let best = 0;
    let temp = 0;

    // Incluir semana actual si está completa
    if (currentWeek.percentage === 100) {
      temp = 1;
    }

    // Calcular rachas del historial
    for (const week of weeks) {
      if (week.percentage === 100) {
        temp++;
        if (temp > best) best = temp;
      } else {
        if (current === 0) current = temp;
        temp = 0;
      }
    }

    if (current === 0) current = temp;
    if (temp > best) best = temp;

    return { current, best };
  }

  function renderHistory() {
    document.getElementById('weeksCount').textContent = weeks.length;

    const historyContainer = document.getElementById('weekHistory');

    if (weeks.length === 0) {
      historyContainer.innerHTML = `
        <div class="text-center py-12">
          <div class="text-6xl mb-4">📈</div>
          <p class="text-gray-500 text-lg">No hay historial todavía</p>
          <p class="text-gray-400 text-sm mt-2">Completa tu primera semana para ver tu progreso</p>
        </div>
      `;
      return;
    }

    historyContainer.innerHTML = weeks.map((week, index) => {
      const weekStart = new Date(week.weekStart);
      const weekEnd = new Date(week.weekEnd || week.weekStart);
      
      const formatDate = (date) => {
        return date.toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
      };

      const statusColor = week.percentage === 100 ? 'green' :
                         week.percentage >= 75 ? 'blue' :
                         week.percentage >= 50 ? 'yellow' : 'red';

      const statusEmoji = week.percentage === 100 ? '🎉' :
                         week.percentage >= 75 ? '💪' :
                         week.percentage >= 50 ? '📝' : '😔';

      return `
        <div class="border-2 border-gray-100 rounded-xl p-4 hover:shadow-md transition-all">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div class="text-4xl">${statusEmoji}</div>
              <div>
                <p class="font-bold text-gray-800">Semana ${weeks.length - index}</p>
                <p class="text-sm text-gray-600">${formatDate(weekStart)} - ${formatDate(weekEnd)}</p>
                <div class="flex gap-2 mt-2">
                  ${week.tasks.lunes ? '<span class="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">✓ Lun</span>' : '<span class="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded">✗ Lun</span>'}
                  ${week.tasks.miercoles ? '<span class="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">✓ Mié</span>' : '<span class="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded">✗ Mié</span>'}
                  ${week.tasks.viernes ? '<span class="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">✓ Vie</span>' : '<span class="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded">✗ Vie</span>'}
                  ${week.tasks.domingo ? '<span class="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">✓ Dom</span>' : '<span class="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded">✗ Dom</span>'}
                </div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-3xl font-bold text-${statusColor}-600">${week.percentage}%</div>
              <p class="text-sm text-gray-600 mt-1">${week.completed}/4 tareas</p>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function showToast(message, type) {
    const bgColor = type === 'success' ? 'bg-indigo-600' : 'bg-orange-600';
    const toast = document.createElement('div');
    toast.className = `fixed top-20 right-4 ${bgColor} text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-bounce`;
    toast.innerHTML = `<p class="font-semibold">${message}</p>`;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.remove(), 3000);
  }
}
