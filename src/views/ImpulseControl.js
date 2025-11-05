export function renderImpulseControl() {
  return `
    <div class="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-4 md:p-8 bg-cover bg-center bg-no-repeat bg-fixed"
         style="background-image: url('../../public/assets/img/ai-generated-8877196_1280.jpg');">
      <!-- Botón Volver -->
      <button 
        id="btnBack"
        class="fixed top-4 left-4 bg-orange-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all z-50 flex items-center gap-2"
      >
        ← Volver al Inicio
      </button>

      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="bg-white/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-6">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h1 class="text-3xl font-bold text-gray-800"><img class="w-8 h-8" src="/assets/icons/aldea.png" alt="icon control anti impulsos
">
Técnica ANTI-IMPULSOS</h1>
              <p class="text-gray-800 mt-1">Toma decisiones inteligentes antes de comprar</p>
            </div>
            <button
              id="btnStartTest"
              class="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
            >
              🧠 Iniciar Cuestionario
            </button>
          </div>

          <!-- Estadísticas del Mes -->
          <div class="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-6">
            <div class="text-center mb-4">
              <p class="text-orange-100 text-sm">Estadísticas del Mes</p>
              <p class="text-4xl font-bold mt-1">${new Date().toLocaleDateString('es-CO', { month: 'long', year: 'numeric' })}</p>
            </div>

            <div class="grid grid-cols-3 gap-4">
              <div class="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <p class="text-xl text-orange-950 mb-1">Impulsos Resistidos</p>
                <p class="text-3xl font-bold" id="resistedCount">0</p>
                <p class="text-xl text-orange-950 font-bold mt-1">Bien hecho</p>
              </div>
              <div class="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <p class="text-xl text-orange-950 mb-1">Compras Realizadas</p>
                <p class="text-3xl font-bold" id="purchasedCount">0</p>
                <p class="text-xl text-orange-950 font-bold mt-1">Cuidado</p>
              </div>
              <div class="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <p class="text-xl text-orange-950 mb-1">Tasa de Éxito</p>
                <p class="text-3xl font-bold" id="successRate">0%</p>
                <p class="text-xl text-orange-950 font-bold mt-1">Meta: 60%</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Cuestionario ALTO -->
        <div id="questionnaireSection" class="bg-white rounded-2xl shadow-xl p-6 mb-6 hidden">
          <h2 class="text-2xl font-bold text-gray-800 mb-2">Método ALTO</h2>
          <p class="text-gray-600 mb-6">Responde honestamente estas 4 preguntas antes de comprar</p>

          <!-- Pregunta 1: ANALIZA -->
          <div class="mb-6 p-4 border-2 border-orange-200 rounded-xl bg-orange-50">
            <div class="flex items-start gap-3 mb-3">
              <div class="bg-orange-500 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                A
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-gray-800 text-lg">ANALIZA: ¿Por qué quiero comprarlo?</h3>
                <p class="text-sm text-gray-600 mt-1">¿Es una necesidad real o un deseo momentáneo?</p>
              </div>
            </div>
            <div class="space-y-2">
              <label class="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer hover:bg-orange-50 transition">
                <input type="radio" name="q1" value="si" class="w-5 h-5 text-orange-600">
                <span class="text-gray-700">Sí, es una necesidad real y lo he pensado bien</span>
              </label>
              <label class="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer hover:bg-orange-50 transition">
                <input type="radio" name="q1" value="no" class="w-5 h-5 text-orange-600">
                <span class="text-gray-700">No, es un impulso del momento o emoción</span>
              </label>
            </div>
          </div>

          <!-- Pregunta 2: LISTA -->
          <div class="mb-6 p-4 border-2 border-orange-200 rounded-xl bg-orange-50">
            <div class="flex items-start gap-3 mb-3">
              <div class="bg-orange-500 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                L
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-gray-800 text-lg">LISTA: ¿Está en mi lista de necesidades?</h3>
                <p class="text-sm text-gray-600 mt-1">¿Lo planeé con anticipación?</p>
              </div>
            </div>
            <div class="space-y-2">
              <label class="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer hover:bg-orange-50 transition">
                <input type="radio" name="q2" value="si" class="w-5 h-5 text-orange-600">
                <span class="text-gray-700">Sí, está en mi lista y lo planeé</span>
              </label>
              <label class="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer hover:bg-orange-50 transition">
                <input type="radio" name="q2" value="no" class="w-5 h-5 text-orange-600">
                <span class="text-gray-700">No, acabo de verlo y se me ocurrió ahora</span>
              </label>
            </div>
          </div>

          <!-- Pregunta 3: TIEMPO -->
          <div class="mb-6 p-4 border-2 border-orange-200 rounded-xl bg-orange-50">
            <div class="flex items-start gap-3 mb-3">
              <div class="bg-orange-500 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                T
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-gray-800 text-lg">TIEMPO: ¿Puedo esperar 24 horas?</h3>
                <p class="text-sm text-gray-600 mt-1">¿Es urgente o puede esperar?</p>
              </div>
            </div>
            <div class="space-y-2">
              <label class="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer hover:bg-orange-50 transition">
                <input type="radio" name="q3" value="si" class="w-5 h-5 text-orange-600">
                <span class="text-gray-700">Sí, puedo esperar 24 horas sin problema</span>
              </label>
              <label class="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer hover:bg-orange-50 transition">
                <input type="radio" name="q3" value="no" class="w-5 h-5 text-orange-600">
                <span class="text-gray-700">No, no puedo esperar (urgente)</span>
              </label>
            </div>
          </div>

          <!-- Pregunta 4: OBJETIVO -->
          <div class="mb-6 p-4 border-2 border-orange-200 rounded-xl bg-orange-50">
            <div class="flex items-start gap-3 mb-3">
              <div class="bg-orange-500 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                O
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-gray-800 text-lg">OBJETIVO: ¿Me acerca a mi meta?</h3>
                <p class="text-sm text-gray-600 mt-1">¿Sacrifico mi objetivo por esto?</p>
              </div>
            </div>
            <div class="space-y-2">
              <label class="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer hover:bg-orange-50 transition">
                <input type="radio" name="q4" value="si" class="w-5 h-5 text-orange-600">
                <span class="text-gray-700">Sí, me acerca o no afecta mi meta de ahorro</span>
              </label>
              <label class="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer hover:bg-orange-50 transition">
                <input type="radio" name="q4" value="no" class="w-5 h-5 text-orange-600">
                <span class="text-gray-700">No, me aleja de mi meta de $1,800,000</span>
              </label>
            </div>
          </div>

          <!-- Botón Evaluar -->
          <button
            id="btnEvaluate"
            class="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all"
          >
            📊 Evaluar mis Respuestas
          </button>
        </div>

        <!-- Resultado -->
        <div id="resultSection" class="bg-white rounded-2xl shadow-xl p-6 mb-6 hidden">
          <!-- Se llenará dinámicamente -->
        </div>

        <!-- Historial de Decisiones -->
        <div class="bg-white rounded-2xl shadow-xl p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4">
            Historial de Decisiones (<span id="decisionsCount">0</span>)
          </h2>
          
          <div id="decisionsList" class="space-y-3">
            <div class="text-center py-12">
              <div class="text-6xl mb-4">🧠</div>
              <p class="text-gray-500 text-lg">No hay decisiones registradas</p>
              <p class="text-gray-400 text-sm mt-2">Usa el cuestionario ALTO antes de tu próxima compra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initImpulseControl() {
  let decisions = JSON.parse(localStorage.getItem('impulseDecisions') || '[]');
  let currentAnswers = { q1: null, q2: null, q3: null, q4: null };

  // Event Listeners
  document.getElementById('btnStartTest').addEventListener('click', () => {
    document.getElementById('questionnaireSection').classList.remove('hidden');
    document.getElementById('resultSection').classList.add('hidden');
    resetQuestionnaire();
    
    // Scroll suave al cuestionario
    document.getElementById('questionnaireSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Capturar respuestas
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const question = e.target.name;
      const answer = e.target.value;
      currentAnswers[question] = answer;
    });
  });

  document.getElementById('btnEvaluate').addEventListener('click', () => {
    // Validar que todas las preguntas estén respondidas
    if (!currentAnswers.q1 || !currentAnswers.q2 || !currentAnswers.q3 || !currentAnswers.q4) {
      alert('⚠️ Por favor responde todas las preguntas antes de evaluar');
      return;
    }

    evaluateAnswers();
  });

  function resetQuestionnaire() {
    currentAnswers = { q1: null, q2: null, q3: null, q4: null };
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.checked = false;
    });
  }

  function evaluateAnswers() {
    const yesCount = Object.values(currentAnswers).filter(answer => answer === 'si').length;
    const noCount = 4 - yesCount;
    
    const shouldBuy = yesCount >= 3; // Si 3 o más respuestas son "sí"
    
    const decision = {
      id: Date.now(),
      fecha: new Date().toISOString(),
      answers: { ...currentAnswers },
      yesCount,
      noCount,
      recommendation: shouldBuy ? 'comprar' : 'no-comprar',
      finalDecision: null // Se actualizará después
    };

    showResult(decision);
  }

  function showResult(decision) {
    const resultSection = document.getElementById('resultSection');
    const shouldBuy = decision.recommendation === 'comprar';
    
    resultSection.innerHTML = `
      <div class="text-center mb-6">
        <div class="text-7xl mb-4">${shouldBuy ? '✅' : '🛑'}</div>
        <h2 class="text-3xl font-bold ${shouldBuy ? 'text-green-600' : 'text-red-600'} mb-2">
          ${shouldBuy ? '¡Adelante!' : '¡DETENTE!'}
        </h2>
        <p class="text-xl text-gray-700">
          ${shouldBuy 
            ? 'Parece una compra justificada' 
            : 'Esta compra puede ser impulsiva'}
        </p>
      </div>

      <!-- Análisis de Respuestas -->
      <div class="bg-gray-50 rounded-xl p-6 mb-6">
        <h3 class="font-bold text-gray-800 mb-4">📋 Análisis de tus Respuestas</h3>
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="bg-green-100 rounded-lg p-4 text-center">
            <p class="text-green-800 font-bold text-3xl">${decision.yesCount}</p>
            <p class="text-green-700 text-sm">Respuestas Positivas</p>
          </div>
          <div class="bg-red-100 rounded-lg p-4 text-center">
            <p class="text-red-800 font-bold text-3xl">${decision.noCount}</p>
            <p class="text-red-700 text-sm">Señales de Alerta</p>
          </div>
        </div>

        <div class="space-y-2 text-sm">
          ${decision.answers.q1 === 'no' ? '<p class="text-red-600">⚠️ No es una necesidad real</p>' : '<p class="text-green-600">✓ Es una necesidad justificada</p>'}
          ${decision.answers.q2 === 'no' ? '<p class="text-red-600">⚠️ No estaba planificado</p>' : '<p class="text-green-600">✓ Estaba en tu lista</p>'}
          ${decision.answers.q3 === 'si' ? '<p class="text-red-600">⚠️ Puede esperar (no es urgente)</p>' : '<p class="text-green-600">✓ Es urgente</p>'}
          ${decision.answers.q4 === 'no' ? '<p class="text-red-600">⚠️ Te aleja de tu meta</p>' : '<p class="text-green-600">✓ No afecta tu meta</p>'}
        </div>
      </div>

      <!-- Recomendación -->
      <div class="bg-${shouldBuy ? 'green' : 'red'}-50 border-2 border-${shouldBuy ? 'green' : 'red'}-200 rounded-xl p-6 mb-6">
        <h3 class="font-bold text-gray-800 mb-3">💡 Recomendación:</h3>
        <p class="text-gray-700 leading-relaxed">
          ${shouldBuy 
            ? 'Basado en tus respuestas, esta compra parece estar bien justificada. Sin embargo, asegúrate de que realmente lo necesitas y que no compromete tu meta de ahorro.' 
            : 'Te recomendamos NO realizar esta compra. Respondiste "NO" a 2 o más preguntas, lo que indica que es un impulso emocional. Espera 24 horas y vuelve a evaluar si realmente lo necesitas.'}
        </p>
      </div>

      <!-- Decisión Final del Usuario -->
      <div class="space-y-3">
        <p class="font-semibold text-gray-800 text-center">¿Qué decidiste finalmente?</p>
        <div class="grid grid-cols-2 gap-3">
          <button
            id="btnResisted"
            class="bg-green-500 text-white py-4 rounded-xl font-bold hover:bg-green-600 transition-all hover:shadow-lg transform hover:scale-105"
          >
            ✅ Resistí el Impulso
          </button>
          <button
            id="btnPurchased"
            class="bg-red-500 text-white py-4 rounded-xl font-bold hover:bg-red-600 transition-all hover:shadow-lg transform hover:scale-105"
          >
            🛒 Compré de Todos Modos
          </button>
        </div>
      </div>
    `;

    resultSection.classList.remove('hidden');
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Event listeners para decisión final
    document.getElementById('btnResisted').addEventListener('click', () => {
      saveDecision({ ...decision, finalDecision: 'resistido' });
    });

    document.getElementById('btnPurchased').addEventListener('click', () => {
      saveDecision({ ...decision, finalDecision: 'comprado' });
    });
  }

  function saveDecision(decision) {
    decisions.unshift(decision);
    localStorage.setItem('impulseDecisions', JSON.stringify(decisions));

    // Mostrar mensaje de confirmación
    const message = decision.finalDecision === 'resistido' 
      ? '¡Excelente! 💪 Has resistido el impulso. Tu yo del futuro te lo agradece.'
      : 'Registrado. 📝 La próxima vez intenta resistir más impulsos.';
    
    showToast(message, decision.finalDecision === 'resistido' ? 'success' : 'warning');

    // Ocultar secciones y resetear
    document.getElementById('questionnaireSection').classList.add('hidden');
    document.getElementById('resultSection').classList.add('hidden');
    
    renderDecisions();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showToast(message, type) {
    const bgColor = type === 'success' ? 'bg-green-600' : 'bg-orange-600';
    const toast = document.createElement('div');
    toast.className = `fixed top-20 right-4 ${bgColor} text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-bounce`;
    toast.innerHTML = `<p class="font-semibold">${message}</p>`;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.remove(), 4000);
  }

  function renderDecisions() {
    // Filtrar decisiones del mes actual
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    
    const monthDecisions = decisions.filter(d => {
      const dDate = new Date(d.fecha);
      return dDate.getMonth() === currentMonth && dDate.getFullYear() === currentYear;
    });

    const resistedCount = monthDecisions.filter(d => d.finalDecision === 'resistido').length;
    const purchasedCount = monthDecisions.filter(d => d.finalDecision === 'comprado').length;
    const total = resistedCount + purchasedCount;
    const successRate = total > 0 ? Math.round((resistedCount / total) * 100) : 0;

    // Actualizar estadísticas
    document.getElementById('resistedCount').textContent = resistedCount;
    document.getElementById('purchasedCount').textContent = purchasedCount;
    document.getElementById('successRate').textContent = `${successRate}%`;
    document.getElementById('decisionsCount').textContent = decisions.length;

    // Renderizar lista
    const listContainer = document.getElementById('decisionsList');
    
    if (decisions.length === 0) {
      listContainer.innerHTML = `
        <div class="text-center py-12">
          <div class="text-6xl mb-4">🧠</div>
          <p class="text-gray-500 text-lg">No hay decisiones registradas</p>
          <p class="text-gray-400 text-sm mt-2">Usa el cuestionario ALTO antes de tu próxima compra</p>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = decisions.map(decision => {
      const isResisted = decision.finalDecision === 'resistido';
      const date = new Date(decision.fecha);
      
      return `
        <div class="border-2 ${isResisted ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'} rounded-xl p-4 hover:shadow-md transition-all">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div class="${isResisted ? 'bg-green-500' : 'bg-red-500'} w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                ${isResisted ? '✓' : '✗'}
              </div>
              <div>
                <p class="font-bold text-gray-800 text-lg">
                  ${isResisted ? 'Impulso Resistido' : 'Compra Realizada'}
                </p>
                <p class="text-sm text-gray-600 mt-1">
                  Respuestas positivas: ${decision.yesCount}/4
                </p>
                <span class="inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full ${isResisted ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}">
                  ${isResisted ? '💪 Bien hecho' : '⚠️ Mejorar'}
                </span>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm text-gray-600">
                ${date.toLocaleDateString('es-CO', { day: '2-digit', month: 'short' })}
              </p>
              <p class="text-xs text-gray-500 mt-1">
                ${date.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  renderDecisions();
}
