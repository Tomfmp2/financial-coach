export function renderBitacora() {
  return `
    <div class="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 p-4 md:p-8 bg-cover bg-center bg-no-repeat bg-fixed"
         style="background-image: url('../../public/assets/img/pexels-pixabay-261579.jpg');">
      <!-- Botón Volver -->
      <button 
        id="btnBack"
        class="fixed top-4 left-4 bg-teal-500 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all z-50 flex items-center gap-2"
      >
        ← Volver al Inicio
      </button>

      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="bg-white/20 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-6">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h1 class="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <img class="w-14 h-14" src="/assets/icons/web.png" alt="icon mi bitacora">
                Mi Bitácora
              </h1>
              <p class="text-gray-900 mt-1">Tu diario personal de progreso y reflexiones</p>
            </div>
            <button
              id="btnAddEntry"
              class="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
            >
              ➕ Nueva Entrada
            </button>
          </div>

          <!-- Resumen Semanal -->
          <div class="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl p-6">
            <div class="flex items-center justify-between mb-4">
              <div>
                <p class="text-teal-100 text-sm">Entradas Esta Semana</p>
                <p class="text-5xl font-bold mt-1" id="weeklyEntries">0</p>
              </div>
              <div class="text-6xl opacity-50">📝</div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 mt-4">
              <div class="bg-white bg-opacity-20 rounded-lg p-3">
                <p class="text-xl font-bold text-teal-900">Total Entradas</p>
                <p class="text-xl font-bold text-teal-900" id="totalEntries">0</p>
              </div>
              <div class="bg-white bg-opacity-20 rounded-lg p-3">
                <p class="text-xl font-bold text-teal-900">Racha Actual</p>
                <p class="text-xl font-bold text-teal-900" id="currentStreak">0 días</p>
              </div>
              <div class="bg-white bg-opacity-20 rounded-lg p-3">
                <p class="text-xl font-bold text-teal-900">Estado Ánimo</p>
                <p class="text-xl font-bold" id="averageMood">😊</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulario Nueva Entrada -->
        <div id="entryForm" class="bg-white rounded-2xl shadow-xl p-6 mb-6 hidden">
          <h2 class="text-xl font-bold text-gray-800 mb-4">✍️ Nueva Entrada en tu Diario</h2>
          <div class="space-y-4">
            <!-- Fecha y Hora -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Fecha</label>
              <input
                type="date"
                id="inputFecha"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none"
              />
            </div>

            <!-- Estado de Ánimo -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">¿Cómo te sientes hoy?</label>
              <div class="grid grid-cols-5 gap-3" id="moodButtons">
                <button type="button" data-mood="excelente" class="mood-btn p-4 rounded-xl border-2 font-semibold transition-all bg-white border-gray-200 text-gray-700 flex flex-col items-center gap-2 hover:bg-gray-50">
                  <span class="text-3xl">😄</span>
                  <span class="text-xs">Excelente</span>
                </button>
                <button type="button" data-mood="bien" class="mood-btn p-4 rounded-xl border-2 font-semibold transition-all bg-white border-gray-200 text-gray-700 flex flex-col items-center gap-2 hover:bg-gray-50">
                  <span class="text-3xl">😊</span>
                  <span class="text-xs">Bien</span>
                </button>
                <button type="button" data-mood="normal" class="mood-btn p-4 rounded-xl border-2 font-semibold transition-all bg-teal-100 border-teal-500 text-teal-700 flex flex-col items-center gap-2">
                  <span class="text-3xl">😐</span>
                  <span class="text-xs">Normal</span>
                </button>
                <button type="button" data-mood="ansioso" class="mood-btn p-4 rounded-xl border-2 font-semibold transition-all bg-white border-gray-200 text-gray-700 flex flex-col items-center gap-2 hover:bg-gray-50">
                  <span class="text-3xl">😰</span>
                  <span class="text-xs">Ansioso</span>
                </button>
                <button type="button" data-mood="estresado" class="mood-btn p-4 rounded-xl border-2 font-semibold transition-all bg-white border-gray-200 text-gray-700 flex flex-col items-center gap-2 hover:bg-gray-50">
                  <span class="text-3xl">😫</span>
                  <span class="text-xs">Estresado</span>
                </button>
              </div>
            </div>

            <!-- Título de la Entrada -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Título (Opcional)</label>
              <input
                type="text"
                id="inputTitulo"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none"
                placeholder="Ej: Un día difícil, pero logré resistir..."
              />
            </div>

            <!-- Contenido de la Entrada -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">¿Qué pasó hoy?</label>
              <textarea
                id="inputContenido"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none resize-none"
                rows="6"
                placeholder="Escribe sobre tu día, tus logros financieros, tus desafíos, cómo te sentiste con tus decisiones de gasto..."
              ></textarea>
            </div>

            <!-- Logros del Día -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Logros de Hoy (Opcional)</label>
              <div class="space-y-2">
                <label class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                  <input type="checkbox" id="logro1" class="w-5 h-5 text-teal-600 rounded">
                  <span class="text-gray-700">Registré todos mis gastos</span>
                </label>
                <label class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                  <input type="checkbox" id="logro2" class="w-5 h-5 text-teal-600 rounded">
                  <span class="text-gray-700">Evité una compra impulsiva</span>
                </label>
                <label class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                  <input type="checkbox" id="logro3" class="w-5 h-5 text-teal-600 rounded">
                  <span class="text-gray-700">Completé mi ahorro semanal</span>
                </label>
                <label class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                  <input type="checkbox" id="logro4" class="w-5 h-5 text-teal-600 rounded">
                  <span class="text-gray-700">Asistí a reunión del grupo</span>
                </label>
              </div>
            </div>

            <!-- Botones de Acción -->
            <div class="flex gap-3 pt-2">
              <button
                id="btnSaveEntry"
                class="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                💾 Guardar Entrada
              </button>
              <button
                id="btnCancelEntry"
                class="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>

        <!-- Filtros de Vista -->
        <div class="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div class="flex gap-3 overflow-x-auto">
            <button data-filter="todas" class="filter-btn flex-1 py-3 px-4 rounded-xl font-semibold whitespace-nowrap transition-all bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg">
              📚 Todas
            </button>
            <button data-filter="semana" class="filter-btn flex-1 py-3 px-4 rounded-xl font-semibold whitespace-nowrap transition-all bg-gray-100 text-gray-700 hover:bg-gray-200">
              📅 Esta Semana
            </button>
            <button data-filter="mes" class="filter-btn flex-1 py-3 px-4 rounded-xl font-semibold whitespace-nowrap transition-all bg-gray-100 text-gray-700 hover:bg-gray-200">
              📆 Este Mes
            </button>
            <button data-filter="animo" class="filter-btn flex-1 py-3 px-4 rounded-xl font-semibold whitespace-nowrap transition-all bg-gray-100 text-gray-700 hover:bg-gray-200">
              😊 Por Ánimo
            </button>
          </div>
        </div>

        <!-- Lista de Entradas -->
        <div class=" rounded-2xl shadow-xl p-6 bg-white/20 backdrop-blur-sm">
          <h2 class="text-xl font-bold text-gray-800 mb-4">
            Mis Entradas (<span id="entriesCount">0</span>)
          </h2>
          
          <div id="entriesList" class="space-y-4">
            <div class="text-center py-12">
              <div class="text-6xl mb-4">📖</div>
              <p class="text-gray-500 text-lg">No hay entradas todavía</p>
              <p class="text-gray-400 text-sm mt-2">Comienza escribiendo tu primera entrada del día</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initBitacora() {
  let entries = JSON.parse(sessionStorage.getItem('bitacoraEntries') || '[]');
  let selectedMood = 'normal';
  let currentFilter = 'todas';

  // Setear fecha actual
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('inputFecha').value = today;

  // Event Listeners
  document.getElementById('btnAddEntry').addEventListener('click', () => {
    document.getElementById('entryForm').classList.toggle('hidden');
    if (!document.getElementById('entryForm').classList.contains('hidden')) {
      document.getElementById('entryForm').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  document.getElementById('btnCancelEntry').addEventListener('click', () => {
    document.getElementById('entryForm').classList.add('hidden');
    resetForm();
  });

  // Mood buttons
  document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.mood-btn').forEach(b => {
        b.className = 'mood-btn p-4 rounded-xl border-2 font-semibold transition-all bg-white border-gray-200 text-gray-700 flex flex-col items-center gap-2 hover:bg-gray-50';
      });
      
      selectedMood = e.currentTarget.dataset.mood;
      e.currentTarget.className = 'mood-btn p-4 rounded-xl border-2 font-semibold transition-all bg-teal-100 border-teal-500 text-teal-700 flex flex-col items-center gap-2';
    });
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.className = 'filter-btn flex-1 py-3 px-4 rounded-xl font-semibold whitespace-nowrap transition-all bg-gray-100 text-gray-700 hover:bg-gray-200';
      });
      
      currentFilter = e.currentTarget.dataset.filter;
      e.currentTarget.className = 'filter-btn flex-1 py-3 px-4 rounded-xl font-semibold whitespace-nowrap transition-all bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg';
      
      renderEntries();
    });
  });

  // Save entry
  document.getElementById('btnSaveEntry').addEventListener('click', () => {
    const fecha = document.getElementById('inputFecha').value;
    const titulo = document.getElementById('inputTitulo').value.trim();
    const contenido = document.getElementById('inputContenido').value.trim();

    if (!contenido) {
      showToast('⚠️ Por favor escribe algo en tu entrada', 'error');
      return;
    }

    // Recoger logros
    const logros = [];
    if (document.getElementById('logro1').checked) logros.push('Registré todos mis gastos');
    if (document.getElementById('logro2').checked) logros.push('Evité una compra impulsiva');
    if (document.getElementById('logro3').checked) logros.push('Completé mi ahorro semanal');
    if (document.getElementById('logro4').checked) logros.push('Asistí a reunión del grupo');

    const newEntry = {
      id: Date.now(),
      fecha,
      titulo: titulo || 'Entrada del día',
      contenido,
      mood: selectedMood,
      logros,
      timestamp: new Date().toISOString()
    };

    entries.unshift(newEntry);
    sessionStorage.setItem('bitacoraEntries', JSON.stringify(entries));
    
    showToast('✅ Entrada guardada exitosamente', 'success');
    
    document.getElementById('entryForm').classList.add('hidden');
    resetForm();
    renderEntries();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function resetForm() {
    document.getElementById('inputTitulo').value = '';
    document.getElementById('inputContenido').value = '';
    document.getElementById('inputFecha').value = today;
    document.getElementById('logro1').checked = false;
    document.getElementById('logro2').checked = false;
    document.getElementById('logro3').checked = false;
    document.getElementById('logro4').checked = false;
    selectedMood = 'normal';
    
    // Reset mood buttons
    document.querySelectorAll('.mood-btn').forEach(b => {
      b.className = 'mood-btn p-4 rounded-xl border-2 font-semibold transition-all bg-white border-gray-200 text-gray-700 flex flex-col items-center gap-2 hover:bg-gray-50';
    });
    document.querySelector('.mood-btn[data-mood="normal"]').className = 'mood-btn p-4 rounded-xl border-2 font-semibold transition-all bg-teal-100 border-teal-500 text-teal-700 flex flex-col items-center gap-2';
  }

  function getFilteredEntries() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    if (currentFilter === 'todas') {
      return entries;
    } else if (currentFilter === 'semana') {
      const weekAgo = new Date(today);
      weekAgo.setDate(weekAgo.getDate() - 7);
      return entries.filter(entry => new Date(entry.fecha) >= weekAgo);
    } else if (currentFilter === 'mes') {
      const monthAgo = new Date(today);
      monthAgo.setMonth(monthAgo.getMonth() - 1);
      return entries.filter(entry => new Date(entry.fecha) >= monthAgo);
    } else if (currentFilter === 'animo') {
      // Agrupar por ánimo
      return entries;
    }
    
    return entries;
  }

  function calculateStreak() {
    if (entries.length === 0) return 0;
    
    let streak = 0;
    const dates = entries.map(e => new Date(e.fecha).toDateString()).sort((a, b) => new Date(b) - new Date(a));
    const uniqueDates = [...new Set(dates)];
    
    const today = new Date().toDateString();
    
    for (let i = 0; i < uniqueDates.length; i++) {
      const expectedDate = new Date();
      expectedDate.setDate(expectedDate.getDate() - i);
      
      if (uniqueDates[i] === expectedDate.toDateString()) {
        streak++;
      } else {
        break;
      }
    }
    
    return streak;
  }

  function getAverageMood() {
    if (entries.length === 0) return '😐';
    
    const moodScores = {
      excelente: 5,
      bien: 4,
      normal: 3,
      ansioso: 2,
      estresado: 1
    };
    
    const moodIcons = {
      5: '😄',
      4: '😊',
      3: '😐',
      2: '😰',
      1: '😫'
    };
    
    const weekEntries = entries.filter(entry => {
      const entryDate = new Date(entry.fecha);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return entryDate >= weekAgo;
    });
    
    if (weekEntries.length === 0) return '😐';
    
    const avgScore = weekEntries.reduce((sum, entry) => sum + moodScores[entry.mood], 0) / weekEntries.length;
    const roundedScore = Math.round(avgScore);
    
    return moodIcons[roundedScore] || '😐';
  }

  function renderEntries() {
    const filtered = getFilteredEntries();
    
    // Update stats
    const weekEntries = entries.filter(entry => {
      const entryDate = new Date(entry.fecha);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return entryDate >= weekAgo;
    });
    
    document.getElementById('weeklyEntries').textContent = weekEntries.length;
    document.getElementById('totalEntries').textContent = entries.length;
    document.getElementById('currentStreak').textContent = `${calculateStreak()} día${calculateStreak() !== 1 ? 's' : ''}`;
    document.getElementById('averageMood').textContent = getAverageMood();
    document.getElementById('entriesCount').textContent = filtered.length;

    const listContainer = document.getElementById('entriesList');
    
    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="text-center py-12">
          <div class="text-6xl mb-4">📖</div>
          <p class="text-gray-500 text-lg">No hay entradas para este filtro</p>
          <p class="text-gray-400 text-sm mt-2">Intenta con otro filtro o escribe una nueva entrada</p>
        </div>
      `;
      return;
    }

    const moodIcons = {
      excelente: '😄',
      bien: '😊',
      normal: '😐',
      ansioso: '😰',
      estresado: '😫'
    };

    const moodColors = {
      excelente: 'from-green-50 to-emerald-50 border-green-200',
      bien: 'from-blue-50 to-cyan-50 border-blue-200',
      normal: 'from-gray-50 to-slate-50 border-gray-200',
      ansioso: 'from-yellow-50 to-amber-50 border-yellow-200',
      estresado: 'from-red-50 to-rose-50 border-red-200'
    };

    listContainer.innerHTML = filtered.map(entry => {
      const entryDate = new Date(entry.fecha);
      const isToday = entryDate.toDateString() === new Date().toDateString();
      
      return `
        <div class="border-2 ${moodColors[entry.mood]} bg-gradient-to-br rounded-2xl p-6 hover:shadow-lg transition-all">
          <!-- Header -->
          <div class="flex items-start justify-between mb-4">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <span class="text-4xl">${moodIcons[entry.mood]}</span>
                <div>
                  <h3 class="font-bold text-gray-800 text-xl">${entry.titulo}</h3>
                  <p class="text-sm text-gray-600">
                    ${entryDate.toLocaleDateString('es-CO', { 
                      weekday: 'long', 
                      day: '2-digit', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                    ${isToday ? '<span class="ml-2 bg-teal-500 text-white text-xs px-2 py-1 rounded-full">Hoy</span>' : ''}
                  </p>
                </div>
              </div>
            </div>
            <button 
              class="delete-entry text-red-500 hover:text-red-700 transition p-2" 
              data-id="${entry.id}"
              title="Eliminar entrada"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
            </button>
          </div>

          <!-- Contenido -->
          <div class="bg-white bg-opacity-60 rounded-xl p-4 mb-4">
            <p class="text-gray-700 leading-relaxed whitespace-pre-wrap">${entry.contenido}</p>
          </div>

          <!-- Logros -->
          ${entry.logros.length > 0 ? `
            <div class="mt-4">
              <p class="text-sm font-semibold text-gray-700 mb-2">🏆 Logros del día:</p>
              <div class="flex flex-wrap gap-2">
                ${entry.logros.map(logro => `
                  <span class="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-teal-100 text-teal-700">
                    ✓ ${logro}
                  </span>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Timestamp -->
          <div class="mt-4 pt-4 border-t border-gray-200">
            <p class="text-xs text-gray-500">
              Escrito el ${new Date(entry.timestamp).toLocaleString('es-CO', {
                day: '2-digit',
                month: 'short',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      `;
    }).join('');

    // Event listeners para eliminar
    document.querySelectorAll('.delete-entry').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.currentTarget.dataset.id);
        if (confirm('¿Estás seguro de eliminar esta entrada? No se puede deshacer.')) {
          deleteEntry(id);
        }
      });
    });
  }

  function deleteEntry(id) {
    entries = entries.filter(entry => entry.id !== id);
    sessionStorage.setItem('bitacoraEntries', JSON.stringify(entries));
    showToast('🗑️ Entrada eliminada', 'info');
    renderEntries();
  }

  function showToast(message, type = 'info') {
    const colors = {
      success: 'bg-green-600',
      error: 'bg-red-600',
      info: 'bg-teal-600'
    };
    
    const toast = document.createElement('div');
    toast.className = `fixed top-20 right-4 ${colors[type]} text-white px-6 py-4 rounded-xl shadow-2xl z-50`;
    toast.innerHTML = `<p class="font-semibold">${message}</p>`;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // Render inicial
  renderEntries();
}
