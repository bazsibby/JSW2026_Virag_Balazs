document.addEventListener('DOMContentLoaded', () => {
    const szuroGombok = document.querySelectorAll('.filter-btn');
    const kategoriaSzekciok = document.querySelectorAll('.category-section');

    szuroGombok.forEach(gomb => {
        gomb.addEventListener('click', () => {
            szuroGombok.forEach(gombElem => gombElem.classList.remove('active'));
            gomb.classList.add('active');
            const kivalasztottKategoria = gomb.getAttribute('data-target');
            kategoriaSzekciok.forEach(szekcio => {
                if (kivalasztottKategoria === 'all' || szekcio.id === kivalasztottKategoria) {
                    szekcio.style.display = 'block';
                } else {
                    szekcio.style.display = 'none';
                }
            });
        });
    });

    const kalkulatorUrlap = document.getElementById('calculatorForm');
    const eredmenyAblak = document.getElementById('resultModal');
    const ablakBezaroGomb = document.getElementById('closeModalBtn');
    const kiszamoltErtekHelye = document.getElementById('finalVolume');

    kalkulatorUrlap.addEventListener('submit', (esemeny) => {
        esemeny.preventDefault();

        const hossz = parseFloat(document.getElementById('hosszusag').value);
        const szeles = parseFloat(document.getElementById('szelesseg').value);
        const magas = parseFloat(document.getElementById('magassag').value);
        const terfogat = hossz * szeles * magas;

        kiszamoltErtekHelye.textContent = terfogat.toLocaleString('hu-HU');
        eredmenyAblak.showModal();
        kalkulatorUrlap.reset();
    });

    ablakBezaroGomb.addEventListener('click', () => {
        eredmenyAblak.close();
    });

});