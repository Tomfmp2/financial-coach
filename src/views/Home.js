export function renderHome(onNavigate) {
  return `
    <section 
      class="w-full h-screen text-black bg-cover bg-center bg-no-repeat bg-fixed"
      style="background-image: url('/assets/img/business-8676549_1920.jpg');">
      <!-- Header -->
      <header class="bg-white/30 backdrop-blur-sm h-16 p-4 flex items-center justify-between">
        <div class="bg-orange-600 w-40 rounded-xl text-center px-4 py-2">
          <h3 class="text-lg tex font-bold">FinancialCoach</h3>
        </div>
        <nav class="flex gap-6 text-white font-semibold">
          <a href="#" class="hover:text-amber-400 transition">Auto Evaluación</a>
          <a href="#" class="hover:text-amber-400 transition">Acerca de</a>
          <a href="#" class="hover:text-amber-400 transition">Ayuda</a>
        </nav>
      </header>

      <!-- Main Content -->
      <section class="flex items-center justify-center h-[calc(100vh-200px)]">
        <div class="mx-auto bg-white/30 backdrop-blur-sm max-w-3xl w-full text-xl 
                    grid grid-cols-3 gap-6 p-8 rounded-2xl">
          <div class="card cursor-pointer" data-view="expenses">
            <div class="text-4xl mb-2"><img class="w-14 h-14" src="/assets/icons/basado-en-datos.png" alt="icono registro Gastos">
</div>
            Registro De Gastos
          </div>
          <div class="card cursor-pointer " data-view="savings">
            <div class="text-4xl mb-2"><img class="w-14 h-14" src="/assets/icons/ahorrando-dinero.png" alt="icon control ahorros">
</div>
            Control De Ahorro
          </div>
          <div class="card cursor-pointer " data-view="impulse">
            <div class="text-4xl mb-2"><img class="w-14 h-14" src="/assets/icons/aldea.png" alt="icon control anti impulsos
">
</div>
            Anti Impulsos
          </div>
          <div class="card cursor-pointer " data-view="checklist">
            <div class="text-4xl text-cent mb-2"><img class="w-14 h-14" src="/assets/icons/evaluacion.png" alt="icon control ahorros">
</div>
            Checklist Semanal
          </div>
          <div class="card cursor-pointer" data-view="motivation">
            <div class="text-4xl mb-2"><img class="w-14 h-14" src="/assets/icons/apoyar.png" alt="icon frases motivation">
</div>
            Frases Motivacionales
          </div>
          <div class="card cursor-pointer" data-view="dashboard">
            <div class="text-4xl mb-2"><img class="w-14 h-14" src="/assets/icons/web.png" alt="icon mi bitacora"></div>
  	    Mi Bitacora
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="fixed bottom-0 w-full bg-white/20 backdrop-blur-sm">
        <div class="mx-auto max-w-2xl w-full p-4 flex justify-center gap-8">
          <a href="https://github.com/Tomfmp2" class="flex items-center gap-2 text-white hover:text-amber-400 transition">
            <img class="w-8 h-8" src="/assets/icons/icons8-github-100.png" alt="GitHub">
            <span>Tomas Medina</span>
          </a>
          <a href="https://github.com/" class="flex items-center gap-2 text-white hover:text-amber-400 transition">
            <img class="w-8 h-8" src="/assets/icons/icons8-github-100.png" alt="GitHub">
            <span>Sara Brígete</span>
          </a>
          <a href="https://github.com/" class="flex items-center gap-2 text-white hover:text-amber-400 transition">
            <img class="w-8 h-8" src="/assets/icons/icons8-github-100.png" alt="GitHub">
            <span>Juan David</span>
          </a>
        </div>
      </footer>
    </section>
  `;
}
