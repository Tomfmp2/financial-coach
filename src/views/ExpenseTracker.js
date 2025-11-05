export function renderExpenseTracker() {
  return `
    <div class="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 md:p-8 bg-cover bg-center bg-no-repeat bg-fixed"
         style="background-image: url('../../public/assets/img/pexels-mikhail-nilov-6964332.jpg');">
      <!-- Botón Volver -->
      <button 
        id="btnBack"
        class="fixed top-4 left-4 bg-purple-500 text-white text-gray-700 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all z-50 flex items-center gap-2"
      >
        ← Volver al Inicio
      </button>

      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="bg-white/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-6">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h1 class="text-3xl font-bold text-gray-900"><img class="w-8 h-8" src="/assets/icons/basado-en-datos.png" alt="icono registro Gastos">
 Registro de Gastos</h1>
              <p class="text-gray-900 mt-1">Mi Coach Financiero Virtual</p>
            </div>
            <button
              id="btnAddExpense"
              class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
            >
              ➕ Agregar Gasto
            </button>
          </div>

          <!-- Total Gastado -->
          <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-purple-100 text-sm">Total Gastado (<span id="currentPeriod">semanal</span>)</p>
                <p class="text-4xl font-bold mt-1" id="totalAmount">$0</p>
              </div>
              <div class="text-5xl opacity-50">📉</div>
            </div>
            
            <!-- Stats Categories -->
            <div class="grid grid-cols-3 gap-4 mt-4">
              <div class="bg-white bg-opacity-20 rounded-lg p-3">
                <p class="text-xs font-bold text-purple-900">Esencial</p>
                <p class="text-xl font-semibold text-purple-700" id="countEsencial">0</p>
              </div>
              <div class="bg-white bg-opacity-20 rounded-lg p-3">
                <p class="text-xs font-bold text-purple-900">Impulsivo</p>
                <p class="text-xl font-semibold text-purple-700" id="countImpulsivo">0</p>
              </div>
              <div class="bg-white bg-opacity-20 rounded-lg p-3">
                <p class="text-xs font-bold text-purple-900">Planificado</p>
                <p class="text-xl font-semibold text-purple-700" id="countPlanificado">0</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulario (oculto inicialmente) -->
        <div id="expenseForm" class="bg-white rounded-2xl shadow-xl p-6 mb-6 hidden">
          <h2 class="text-xl font-bold text-gray-800 mb-4">Nuevo Gasto</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Monto (COP)</label>
              <input
                type="number"
                id="inputMonto"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                placeholder="50000"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Categoría</label>
              <div class="grid grid-cols-3 gap-3" id="categoryButtons">
                <button type="button" data-category="esencial" class="category-btn p-3 rounded-xl border-2 font-semibold transition-all bg-blue-500 text-white border-transparent">
                  Esencial
                </button>
                <button type="button" data-category="impulsivo" class="category-btn p-3 rounded-xl border-2 font-semibold transition-all bg-white border-gray-200 text-gray-700">
                  Impulsivo
                </button>
                <button type="button" data-category="planificado" class="category-btn p-3 rounded-xl border-2 font-semibold transition-all bg-white border-gray-200 text-gray-700">
                  Planificado
                </button>
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">¿Cómo te sentías?</label>
              <div class="grid grid-cols-3 gap-3" id="emotionButtons">
                <button type="button" data-emotion="feliz" class="emotion-btn p-3 rounded-xl border-2 font-semibold transition-all bg-white border-gray-200 text-gray-700 flex flex-col items-center gap-2">
                  <span class="text-2xl">😊</span>
                  <span class="text-sm">Feliz</span>
                </button>
                <button type="button" data-emotion="neutral" class="emotion-btn p-3 rounded-xl border-2 font-semibold transition-all bg-purple-100 border-purple-500 text-purple-700 flex flex-col items-center gap-2">
                  <span class="text-2xl">😐</span>
                  <span class="text-sm">Neutral</span>
                </button>
                <button type="button" data-emotion="triste" class="emotion-btn p-3 rounded-xl border-2 font-semibold transition-all bg-white border-gray-200 text-gray-700 flex flex-col items-center gap-2">
                  <span class="text-2xl">😢</span>
                  <span class="text-sm">Triste</span>
                </button>
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Fecha</label>
              <input
                type="date"
                id="inputFecha"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div class="flex gap-3 pt-2">
              <button
                id="btnSaveExpense"
                class="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Guardar Gasto
              </button>
              <button
                id="btnCancelExpense"
                class="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>

        <!-- Period Filter -->
        <div class="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div class="flex gap-3">
            <button data-period="diario" class="period-btn flex-1 py-3 rounded-xl font-semibold transition-all bg-gray-100 text-gray-700 hover:bg-gray-200">
              Diario
            </button>
            <button data-period="semanal" class="period-btn flex-1 py-3 rounded-xl font-semibold transition-all bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
              Semanal
            </button>
            <button data-period="mensual" class="period-btn flex-1 py-3 rounded-xl font-semibold transition-all bg-gray-100 text-gray-700 hover:bg-gray-200">
              Mensual
            </button>
          </div>
        </div>

        <!-- Expenses List -->
        <div class="bg-white/30 backdrop-blur-sm rounded-2xl shadow-xl p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4">
            Lista de Gastos (<span id="expenseCount">0</span>)
          </h2>
          
          <div id="expensesList" class="space-y-3">
            <div class="text-center py-12">
              <div class="text-6xl mb-4">📝</div>
              <p class="text-gray-500 text-lg">No hay gastos registrados</p>
              <p class="text-gray-400 text-sm mt-2">Comienza agregando tu primer gasto</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initExpenseTracker() {
  let expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
  let currentPeriod = 'semanal';
  let selectedCategory = 'esencial';
  let selectedEmotion = 'neutral';

  // Setear fecha actual
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('inputFecha').value = today;

  // Event Listeners
  document.getElementById('btnAddExpense').addEventListener('click', () => {
    document.getElementById('expenseForm').classList.toggle('hidden');
  });

  document.getElementById('btnCancelExpense').addEventListener('click', () => {
    document.getElementById('expenseForm').classList.add('hidden');
  });

  // Category buttons
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.category-btn').forEach(b => {
        b.className = 'category-btn p-3 rounded-xl border-2 font-semibold transition-all bg-white border-gray-200 text-gray-700';
      });
      
      selectedCategory = e.currentTarget.dataset.category;
      const colors = {
        esencial: 'bg-blue-500 text-white border-transparent',
        impulsivo: 'bg-red-500 text-white border-transparent',
        planificado: 'bg-green-500 text-white border-transparent'
      };
      e.currentTarget.className = `category-btn p-3 rounded-xl border-2 font-semibold transition-all ${colors[selectedCategory]}`;
    });
  });

  // Emotion buttons
  document.querySelectorAll('.emotion-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.emotion-btn').forEach(b => {
        b.className = 'emotion-btn p-3 rounded-xl border-2 font-semibold transition-all bg-white border-gray-200 text-gray-700 flex flex-col items-center gap-2';
      });
      
      selectedEmotion = e.currentTarget.dataset.emotion;
      e.currentTarget.className = 'emotion-btn p-3 rounded-xl border-2 font-semibold transition-all bg-purple-100 border-purple-500 text-purple-700 flex flex-col items-center gap-2';
    });
  });

  // Save expense
  document.getElementById('btnSaveExpense').addEventListener('click', () => {
    const monto = parseFloat(document.getElementById('inputMonto').value);
    const fecha = document.getElementById('inputFecha').value;

    if (!monto || monto <= 0) {
      alert('Por favor ingresa un monto válido');
      return;
    }

    const newExpense = {
      id: Date.now(),
      monto,
      categoria: selectedCategory,
      emocion: selectedEmotion,
      fecha
    };

    expenses.unshift(newExpense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    
    document.getElementById('inputMonto').value = '';
    document.getElementById('expenseForm').classList.add('hidden');
    
    renderExpenses();
  });

  // Period buttons
  document.querySelectorAll('.period-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.period-btn').forEach(b => {
        b.className = 'period-btn flex-1 py-3 rounded-xl font-semibold transition-all bg-gray-100 text-gray-700 hover:bg-gray-200';
      });
      
      currentPeriod = e.currentTarget.dataset.period;
      e.currentTarget.className = 'period-btn flex-1 py-3 rounded-xl font-semibold transition-all bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg';
      document.getElementById('currentPeriod').textContent = currentPeriod;
      
      renderExpenses();
    });
  });

  function getFilteredExpenses() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    return expenses.filter(expense => {
      const expenseDate = new Date(expense.fecha);
      
      if (currentPeriod === 'diario') {
        return expenseDate >= today;
      } else if (currentPeriod === 'semanal') {
        const weekAgo = new Date(today);
        weekAgo.setDate(weekAgo.getDate() - 7);
        return expenseDate >= weekAgo;
      } else {
        const monthAgo = new Date(today);
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        return expenseDate >= monthAgo;
      }
    });
  }

  function renderExpenses() {
    const filtered = getFilteredExpenses();
    const total = filtered.reduce((sum, exp) => sum + exp.monto, 0);
    
    document.getElementById('totalAmount').textContent = `$${total.toLocaleString('es-CO')}`;
    document.getElementById('expenseCount').textContent = filtered.length;
    
    // Update category counts
    document.getElementById('countEsencial').textContent = filtered.filter(e => e.categoria === 'esencial').length;
    document.getElementById('countImpulsivo').textContent = filtered.filter(e => e.categoria === 'impulsivo').length;
    document.getElementById('countPlanificado').textContent = filtered.filter(e => e.categoria === 'planificado').length;

    const listContainer = document.getElementById('expensesList');
    
    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="text-center py-12">
          <div class="text-6xl mb-4">📝</div>
          <p class="text-gray-500 text-lg">No hay gastos registrados</p>
          <p class="text-gray-400 text-sm mt-2">Comienza agregando tu primer gasto</p>
        </div>
      `;
      return;
    }

    const categoryColors = {
      esencial: 'bg-blue-500',
      impulsivo: 'bg-red-500',
      planificado: 'bg-green-500'
    };

    const emotionIcons = {
      feliz: '😊',
      neutral: '😐',
      triste: '😢'
    };

    listContainer.innerHTML = filtered.map(expense => `
      <div class="border-2 border-gray-100 rounded-xl p-4 hover:shadow-md transition-all">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="${categoryColors[expense.categoria]} w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              $
            </div>
            <div>
              <p class="font-bold text-gray-800 text-lg">
                $${expense.monto.toLocaleString('es-CO')}
              </p>
              <div class="flex items-center gap-3 mt-1">
                <span class="text-xs font-semibold px-2 py-1 rounded ${categoryColors[expense.categoria]} text-white">
                  ${expense.categoria.charAt(0).toUpperCase() + expense.categoria.slice(1)}
                </span>
                <span class="text-sm">${emotionIcons[expense.emocion]} ${expense.emocion}</span>
              </div>
            </div>
          </div>
          <div class="text-right">
            <p class="text-sm text-gray-600">
              ${new Date(expense.fecha).toLocaleDateString('es-CO', { day: '2-digit', month: 'short' })}
            </p>
          </div>
        </div>
      </div>
    `).join('');
  }

  renderExpenses();
}
