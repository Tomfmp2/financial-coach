export function renderSavingsControl() {
  return `
    <div class="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-4 md:p-8 bg-cover bg-center bg-no-repeat bg-fixed "
         style="background-image: url('../../public/assets/img/pexels-thngocbich-732444.jpg');">
      <!-- Botón Volver -->
      <button 
        id="btnBack"
        class="fixed top-4 left-4 bg-green-600 text-white text-gray-700 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all z-50 flex items-center gap-2"
      >
        ← Volver al Inicio
      </button>

      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="bg-white/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-6">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h1 class="text-3xl font-bold text-gray-800"><img class="w-8 h-8" src="/assets/icons/ahorrando-dinero.png" alt="icon control ahorros"> Control de Ahorro</h1>
              <p class="text-gray-600 mt-1">Mi Coach Financiero Virtual</p>
            </div>
            <button
              id="btnAddSaving"
              class="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
            >
              ➕ Marcar Ahorro Semanal
            </button>
          </div>

          <!-- Progreso Principal -->
          <div class="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-6">
            <div class="flex items-center justify-between mb-4">
              <div>
                <p class="text-green-100 text-sm">Total Ahorrado</p>
                <p class="text-5xl font-bold mt-1" id="totalSaved">$0</p>
              </div>
              <div class="text-right">
                <p class="text-green-100 text-sm">Meta</p>
                <p class="text-3xl font-bold">$1,800,000</p>
              </div>
            </div>

            <!-- Barra de Progreso -->
            <div class="mb-4">
              <div class="flex justify-between text-sm text-green-100 mb-2">
                <span>Progreso</span>
                <span id="progressPercentage">0%</span>
              </div>
              <div class="w-full bg-white bg-opacity-20 rounded-full h-6 overflow-hidden">
                <div 
                  id="progressBar"
                  class="bg-white h-6 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                  style="width: 0%"
                >
                  <span class="text-green-600 font-bold text-xs"></span>
                </div>
              </div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 mt-4">
              <div class="bg-white bg-opacity-20 rounded-lg p-3">
                <p class="text-xl text-green-900">Semanas Completadas</p>
                <p class="text-xs font-semibold text-green-700" id="weeksCompleted">0</p>
              </div>
              <div class="bg-white bg-opacity-20 rounded-lg p-3">
                <p class="text-xl text-green-900">Ahorro Mensual</p>
                <p class="text-xs font-semibold text-green-700" id="monthlyTotal">$0</p>
              </div>
              <div class="bg-white bg-opacity-20 rounded-lg p-3">
                <p class="text-xl text-green-900">Falta para Meta</p>
                <p class="text-xs font-semibold text-green-700" id="remaining">$1,800,000</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal/Form Marcar Ahorro -->
        <div id="savingForm" class="bg-white rounded-2xl shadow-xl p-6 mb-6 hidden">
          <h2 class="text-xl font-bold text-gray-800 mb-4">Marcar Ahorro Semanal</h2>
          <div class="space-y-4">
            <div class="bg-green-50 border-2 border-green-200 rounded-xl p-4">
              <p class="text-green-800 font-semibold text-center text-lg">
                💰 Monto a Ahorrar: $50,000 COP
              </p>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Fecha del Ahorro</label>
              <input
                type="date"
                id="inputFecha"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Nota (Opcional)</label>
              <textarea
                id="inputNota"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none resize-none"
                rows="3"
                placeholder="Ej: Ahorro de la semana 1, pago de nómina..."
              ></textarea>
            </div>

            <div class="flex gap-3 pt-2">
              <button
                id="btnSaveSaving"
                class="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                ✅ Confirmar Ahorro
              </button>
              <button
                id="btnCancelSaving"
                class="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>

        <!-- Gráfico de Progreso Mensual -->
        <div class="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h2 class="text-xl font-bold text-gray-800 mb-6">Progreso Mensual</h2>
          <div class="space-y-3" id="monthlyChart">
            <!-- Se llenará dinámicamente -->
          </div>
        </div>

        <!-- Historial de Ahorros -->
        <div class="bg-white/30 backdrop-blur-sm rounded-2xl shadow-xl p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4">
            Historial de Ahorros (<span id="savingsCount">0</span>)
          </h2>
          
          <div id="savingsList" class="space-y-3">
            <div class="text-center py-12">
              <div class="text-6xl mb-4">🏦</div>
              <p class="text-gray-500 text-lg">No hay ahorros registrados</p>
              <p class="text-gray-400 text-sm mt-2">Comienza marcando tu primer ahorro semanal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initSavingsControl() {
  const SAVING_AMOUNT = 50000;
  const GOAL_AMOUNT = 1800000;
  
  let savings = JSON.parse(localStorage.getItem('savings') || '[]');

  // Setear fecha actual
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('inputFecha').value = today;

  // Event Listeners
  document.getElementById('btnAddSaving').addEventListener('click', () => {
    document.getElementById('savingForm').classList.toggle('hidden');
  });

  document.getElementById('btnCancelSaving').addEventListener('click', () => {
    document.getElementById('savingForm').classList.add('hidden');
  });

  // Save saving
  document.getElementById('btnSaveSaving').addEventListener('click', () => {
    const fecha = document.getElementById('inputFecha').value;
    const nota = document.getElementById('inputNota').value;

    if (!fecha) {
      alert('Por favor selecciona una fecha');
      return;
    }

    const newSaving = {
      id: Date.now(),
      monto: SAVING_AMOUNT,
      fecha,
      nota: nota || 'Ahorro semanal'
    };

    savings.unshift(newSaving);
    localStorage.setItem('savings', JSON.stringify(savings));
    
    document.getElementById('inputNota').value = '';
    document.getElementById('savingForm').classList.add('hidden');
    
    // Mostrar animación de éxito
    showSuccessAnimation();
    
    renderSavings();
  });

  function showSuccessAnimation() {
    const toast = document.createElement('div');
    toast.className = 'fixed top-20 right-4 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50 animate-bounce';
    toast.innerHTML = `
      <span class="text-2xl">🎉</span>
      <div>
        <p class="font-bold">¡Ahorro registrado!</p>
        <p class="text-sm text-green-100">+$50,000 a tu meta</p>
      </div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  function renderSavings() {
    const totalSaved = savings.reduce((sum, s) => sum + s.monto, 0);
    const progressPercent = Math.min((totalSaved / GOAL_AMOUNT) * 100, 100).toFixed(1);
    const remaining = Math.max(GOAL_AMOUNT - totalSaved, 0);
    const weeksCompleted = savings.length;
    
    // Calcular ahorro del mes actual
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const monthlyTotal = savings
      .filter(s => {
        const sDate = new Date(s.fecha);
        return sDate.getMonth() === currentMonth && sDate.getFullYear() === currentYear;
      })
      .reduce((sum, s) => sum + s.monto, 0);

    // Actualizar estadísticas principales
    document.getElementById('totalSaved').textContent = `$${totalSaved.toLocaleString('es-CO')}`;
    document.getElementById('progressPercentage').textContent = `${progressPercent}%`;
    document.getElementById('progressBar').style.width = `${progressPercent}%`;
    document.getElementById('weeksCompleted').textContent = weeksCompleted;
    document.getElementById('monthlyTotal').textContent = `$${monthlyTotal.toLocaleString('es-CO')}`;
    document.getElementById('remaining').textContent = `$${remaining.toLocaleString('es-CO')}`;
    document.getElementById('savingsCount').textContent = savings.length;

    // Renderizar gráfico mensual (últimos 12 meses)
    renderMonthlyChart(totalSaved);

    // Renderizar lista de ahorros
    const listContainer = document.getElementById('savingsList');
    
    if (savings.length === 0) {
      listContainer.innerHTML = `
        <div class="text-center py-12">
          <div class="text-6xl mb-4">🏦</div>
          <p class="text-gray-500 text-lg">No hay ahorros registrados</p>
          <p class="text-gray-400 text-sm mt-2">Comienza marcando tu primer ahorro semanal</p>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = savings.map((saving, index) => `
      <div class="border-2 border-gray-100 rounded-xl p-4 hover:shadow-md transition-all">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              ${weeksCompleted - index}
            </div>
            <div>
              <p class="font-bold text-gray-800 text-lg">
                +$${saving.monto.toLocaleString('es-CO')}
              </p>
              <p class="text-sm text-gray-600 mt-1">${saving.nota}</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-sm text-gray-600">
              ${new Date(saving.fecha).toLocaleDateString('es-CO', { 
                day: '2-digit', 
                month: 'short',
                year: 'numeric'
              })}
            </p>
            <span class="inline-block mt-1 text-xs font-semibold px-2 py-1 rounded bg-green-100 text-green-700">
              Semana ${weeksCompleted - index}
            </span>
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderMonthlyChart(totalSaved) {
    const chartContainer = document.getElementById('monthlyChart');
    const months = [
      'Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5', 'Mes 6',
      'Mes 7', 'Mes 8', 'Mes 9', 'Mes 10', 'Mes 11', 'Mes 12'
    ];
    
    const expectedPerMonth = 150000; // $50,000 x 3 personas
    const weeksCompleted = savings.length;
    const monthsCompleted = Math.floor(weeksCompleted / 4);
    const currentMonthWeeks = weeksCompleted % 4;
    
    chartContainer.innerHTML = months.map((month, index) => {
      let amountThisMonth = 0;
      let status = 'pending';
      
      if (index < monthsCompleted) {
        amountThisMonth = expectedPerMonth;
        status = 'completed';
      } else if (index === monthsCompleted) {
        amountThisMonth = currentMonthWeeks * SAVING_AMOUNT;
        status = 'progress';
      }
      
      const percentage = (amountThisMonth / expectedPerMonth) * 100;
      
      return `
        <div class="space-y-2">
          <div class="flex justify-between items-center">
            <span class="text-sm font-semibold text-gray-700">${month}</span>
            <div class="flex items-center gap-2">
              <span class="text-sm font-bold ${
                status === 'completed' ? 'text-green-600' : 
                status === 'progress' ? 'text-blue-600' : 
                'text-gray-400'
              }">
                $${amountThisMonth.toLocaleString('es-CO')}
              </span>
              ${status === 'completed' ? '<span class="text-green-600">✅</span>' : ''}
              ${status === 'progress' ? '<span class="text-blue-600">⏳</span>' : ''}
            </div>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              class="h-3 rounded-full transition-all duration-500 ${
                status === 'completed' ? 'bg-green-500' :
                status === 'progress' ? 'bg-blue-500' :
                'bg-gray-300'
              }"
              style="width: ${percentage}%"
            ></div>
          </div>
        </div>
      `;
    }).join('');
  }

  renderSavings();
}
