export function renderMotivationalPhrases() {
  return `
    <div class="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50 p-4 md:p-8 bg-cover bg-center bg-no-repeat bg-fixed"
       style="background-image: url('../../public/assets/img/pexels-gantas-1908647.jpg');">
      <!-- Botón Volver -->
      <button 
        id="btnBack"
        class="fixed top-4 left-4 bg-yellow-500 text-white text-gray-701 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all z-50 flex items-center gap-2"
      >
        ← Volver al Inicio
      </button>

      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="bg-white/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-6">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h1 class="text-3xl font-bold text-gray-950"><img class="w-8 h-8" src="/assets/icons/apoyar.png" alt="icon frases motivation">
Frases Motivacionales</h1>
              <p class="text-gray-950 mt-1">Tu dosis diaria de inspiración financiera</p>
            </div>
            <button
              id="btnNeedMotivation"
              class="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2 animate-pulse"
            >
              Necesito Motivación
            </button>
          </div>
        </div>

        <!-- Frase del Día -->
        <div class="bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-2xl shadow-xl p-8 mb-6 relative overflow-hidden">
          <div class="absolute top-0 right-0 text-9xl opacity-10">💫</div>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-2xl">🌟</span>
              <h2 class="text-lg font-semibold text-yellow-100">Frase del Día</h2>
            </div>
            <blockquote class="text-2xl md:text-3xl font-bold leading-relaxed mb-4" id="dailyPhrase">
              <!-- Se llenará dinámicamente -->
            </blockquote>
            <p class="text-yellow-100 text-sm" id="dailyDate"></p>
          </div>
        </div>

        <!-- Estadísticas de Uso -->
        <div class="bg-white/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4">Tus Estadísticas</h2>
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4 text-center">
              <p class="text-3xl font-bold text-amber-600" id="totalViews">0</p>
              <p class="text-sm text-gray-600 mt-1">Frases Vistas</p>
            </div>
            <div class="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4 text-center">
              <p class="text-3xl font-bold text-amber-600" id="favoritesCount">0</p>
              <p class="text-sm text-gray-600 mt-1">Favoritas</p>
            </div>
            <div class="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4 text-center">
              <p class="text-3xl font-bold text-amber-600" id="streakDays">0</p>
              <p class="text-sm text-gray-600 mt-1">Días Seguidos</p>
            </div>
          </div>
        </div>

        <!-- Categorías de Frases -->
        <div class="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4">📚 Biblioteca por Categorías</h2>
          
          <!-- Tabs de Categorías -->
          <div class="flex gap-2 mb-6 overflow-x-auto pb-2">
            <button class="category-tab px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all bg-gradient-to-r from-yellow-500 to-amber-600 text-white" data-category="felicidad">
              😊 Momentos de Felicidad
            </button>
            <button class="category-tab px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all bg-gray-100 text-gray-700 hover:bg-gray-200" data-category="decisiones">
              💡 Fortalecer Decisiones
            </button>
            <button class="category-tab px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all bg-gray-100 text-gray-700 hover:bg-gray-200" data-category="proposito">
              🎯 Recordar Propósito
            </button>
          </div>

          <!-- Lista de Frases por Categoría -->
          <div id="phrasesList" class="space-y-3">
            <!-- Se llenará dinámicamente -->
          </div>
        </div>

        <!-- Mis Frases Favoritas -->
        <div class="bg-white/30 backdrop-blur-sm rounded-2xl shadow-xl p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4">
            ⭐ Mis Favoritas (<span id="favCount">0</span>)
          </h2>
          
          <div id="favoritesList" class="space-y-3">
            <div class="text-center py-12">
              <div class="text-6xl mb-4">⭐</div>
              <p class="text-gray-950 text-lg">No tienes favoritas aún</p>
              <p class="text-gray-800 text-sm mt-2">Marca tus frases favoritas con la estrella</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initMotivationalPhrases() {
  const phrases = {
    felicidad: [
      "La felicidad de hoy no debe comprometer la tranquilidad de mañana",
      "Celebro mi felicidad construyendo mi futuro, no gastando mi presente",
      "Hay mil formas de ser feliz sin gastar un peso",
      "La verdadera alegría no viene de las compras, viene de la paz mental",
      "Puedo disfrutar el momento sin vaciar mi bolsillo",
      "Mi felicidad no depende de lo que compro, sino de lo que construyo",
      "Celebrar no significa gastar, significa valorar",
      "La mejor forma de honrar mi felicidad es proteger mi futuro"
    ],
    decisiones: [
      "Mi mejor yo merece estabilidad financiera",
      "Cada peso ahorrado es un paso hacia mi libertad",
      "El verdadero lujo es no tener preocupaciones económicas",
      "Soy más fuerte que mis impulsos",
      "Las decisiones inteligentes de hoy son la tranquilidad de mañana",
      "No es sacrificio, es inversión en mí mismo",
      "Tengo el poder de elegir mi futuro financiero",
      "Cada no a un impulso es un sí a mi meta"
    ],
    proposito: [
      "$1,800,000 no es solo dinero, es mi futuro asegurado",
      "El mejor regalo que me puedo dar es tranquilidad financiera",
      "Cada ahorro me acerca a la vida que quiero vivir",
      "Mi meta no es un sueño, es un compromiso real",
      "Hoy construyo el mañana que merezco",
      "Mi disciplina de hoy es mi libertad de mañana",
      "No estoy renunciando, estoy eligiendo algo mejor",
      "Cada semana completada es un logro que me enorgullece"
    ]
  };

  let stats = JSON.parse(localStorage.getItem('phraseStats') || JSON.stringify({
    totalViews: 0,
    favorites: [],
    lastView: null,
    streak: 0
  }));

  let currentCategory = 'felicidad';
  let dailyPhrase = getDailyPhrase();

  // Actualizar racha
  updateStreak();

  // Renderizar inicial
  renderDailyPhrase();
  renderStats();
  renderCategoryPhrases();
  renderFavorites();

  // Event: Botón "Necesito Motivación"
  document.getElementById('btnNeedMotivation').addEventListener('click', () => {
    showRandomPhrase();
  });

  // Event: Tabs de categorías
  document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      // Actualizar tabs activos
      document.querySelectorAll('.category-tab').forEach(t => {
        t.className = 'category-tab px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all bg-gray-100 text-gray-700 hover:bg-gray-200';
      });
      e.currentTarget.className = 'category-tab px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all bg-gradient-to-r from-yellow-500 to-amber-600 text-white';

      currentCategory = e.currentTarget.dataset.category;
      renderCategoryPhrases();
    });
  });

  function getDailyPhrase() {
    const today = new Date().toDateString();
    const allPhrases = [...phrases.felicidad, ...phrases.decisiones, ...phrases.proposito];
    
    // Usar fecha como seed para seleccionar frase consistente del día
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    const index = dayOfYear % allPhrases.length;
    
    return allPhrases[index];
  }

  function updateStreak() {
    const today = new Date().toDateString();
    const lastView = stats.lastView ? new Date(stats.lastView).toDateString() : null;
    
    if (lastView !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toDateString();
      
      if (lastView === yesterdayStr) {
        stats.streak++;
      } else if (lastView !== today) {
        stats.streak = 1;
      }
      
      stats.lastView = new Date().toISOString();
      localStorage.setItem('phraseStats', JSON.stringify(stats));
    }
  }

  function renderDailyPhrase() {
    document.getElementById('dailyPhrase').textContent = dailyPhrase;
    document.getElementById('dailyDate').textContent = new Date().toLocaleDateString('es-CO', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  function renderStats() {
    document.getElementById('totalViews').textContent = stats.totalViews;
    document.getElementById('favoritesCount').textContent = stats.favorites.length;
    document.getElementById('streakDays').textContent = stats.streak;
  }

  function renderCategoryPhrases() {
    const container = document.getElementById('phrasesList');
    const categoryPhrases = phrases[currentCategory];

    const categoryIcons = {
      felicidad: '😊',
      decisiones: '💡',
      proposito: '🎯'
    };

    const categoryColors = {
      felicidad: 'from-pink-500 to-rose-500',
      decisiones: 'from-blue-500 to-indigo-500',
      proposito: 'from-green-500 to-emerald-500'
    };

    container.innerHTML = categoryPhrases.map((phrase, index) => {
      const phraseId = `${currentCategory}-${index}`;
      const isFavorite = stats.favorites.includes(phraseId);

      return `
        <div class="border-2 border-gray-100 rounded-xl p-5 hover:shadow-md transition-all group">
          <div class="flex items-start gap-4">
            <div class="text-3xl flex-shrink-0">${categoryIcons[currentCategory]}</div>
            <div class="flex-1">
              <p class="text-gray-800 text-lg leading-relaxed">${phrase}</p>
            </div>
            <button 
              class="favorite-btn flex-shrink-0 text-2xl transition-transform hover:scale-110"
              data-phrase-id="${phraseId}"
            >
              ${isFavorite ? '⭐' : '☆'}
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Event listeners para favoritos
    document.querySelectorAll('.favorite-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const phraseId = e.currentTarget.dataset.phraseId;
        toggleFavorite(phraseId);
      });
    });
  }

  function toggleFavorite(phraseId) {
    const index = stats.favorites.indexOf(phraseId);
    
    if (index > -1) {
      stats.favorites.splice(index, 1);
      showToast('Eliminada de favoritas', 'info');
    } else {
      stats.favorites.push(phraseId);
      showToast('⭐ Agregada a favoritas', 'success');
    }

    localStorage.setItem('phraseStats', JSON.stringify(stats));
    renderCategoryPhrases();
    renderFavorites();
    renderStats();
  }

  function renderFavorites() {
    const container = document.getElementById('favoritesList');
    document.getElementById('favCount').textContent = stats.favorites.length;

    if (stats.favorites.length === 0) {
      container.innerHTML = `
        <div class="text-center py-12">
          <div class="text-6xl mb-4">⭐</div>
          <p class="text-gray-500 text-lg">No tienes favoritas aún</p>
          <p class="text-gray-400 text-sm mt-2">Marca tus frases favoritas con la estrella</p>
        </div>
      `;
      return;
    }

    const categoryIcons = {
      felicidad: '😊',
      decisiones: '💡',
      proposito: '🎯'
    };

    const categoryNames = {
      felicidad: 'Momentos de Felicidad',
      decisiones: 'Fortalecer Decisiones',
      proposito: 'Recordar Propósito'
    };

    container.innerHTML = stats.favorites.map(phraseId => {
      const [category, index] = phraseId.split('-');
      const phrase = phrases[category][parseInt(index)];

      return `
        <div class="border-2 border-amber-200 bg-amber-50 rounded-xl p-5 hover:shadow-md transition-all">
          <div class="flex items-start gap-4">
            <div class="text-3xl flex-shrink-0">${categoryIcons[category]}</div>
            <div class="flex-1">
              <p class="text-gray-800 text-lg leading-relaxed mb-2">${phrase}</p>
              <span class="inline-block text-xs px-3 py-1 bg-amber-200 text-amber-800 rounded-full font-semibold">
                ${categoryNames[category]}
              </span>
            </div>
            <button 
              class="remove-favorite text-2xl transition-transform hover:scale-110"
              data-phrase-id="${phraseId}"
            >
              ❌
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Event listeners para eliminar favoritos
    document.querySelectorAll('.remove-favorite').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const phraseId = e.currentTarget.dataset.phraseId;
        toggleFavorite(phraseId);
      });
    });
  }

  function showRandomPhrase() {
    const allPhrases = [...phrases.felicidad, ...phrases.decisiones, ...phrases.proposito];
    const randomPhrase = allPhrases[Math.floor(Math.random() * allPhrases.length)];

    stats.totalViews++;
    localStorage.setItem('phraseStats', JSON.stringify(stats));
    renderStats();

    // Crear modal con la frase
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
      <div class="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-8 max-w-2xl w-full shadow-2xl animate-bounce">
        <div class="text-center mb-6">
          <div class="text-6xl mb-4">✨</div>
          <h3 class="text-2xl font-bold text-white mb-2">¡Tu dosis de motivación!</h3>
        </div>
        <blockquote class="text-2xl md:text-3xl font-bold text-white text-center leading-relaxed mb-6">
          "${randomPhrase}"
        </blockquote>
        <button 
          id="closeModal"
          class="w-full bg-white text-amber-600 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all"
        >
          💪 ¡Listo, Vamos!
        </button>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('closeModal').addEventListener('click', () => {
      modal.remove();
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }

  function showToast(message, type) {
    const bgColor = type === 'success' ? 'bg-green-600' : 
                    type === 'info' ? 'bg-blue-600' : 'bg-gray-600';
    const toast = document.createElement('div');
    toast.className = `fixed top-20 right-4 ${bgColor} text-white px-6 py-4 rounded-xl shadow-2xl z-50`;
    toast.innerHTML = `<p class="font-semibold">${message}</p>`;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.remove(), 2000);
  }
}
