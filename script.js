const locations = {
    "mnichovo": { title: "Zámek Mnichovo Hradiště", desc: "Barokní sídlo Valdštejnů s rozsáhlou knihovnou.", img: "Minchovo.jpg" },
    "bela": { title: "Zámek Bělá p. Bezdězem", desc: "Historický zámek s expozicí o historii regionu.", img: "bela.jpg" },
    "michalovice": { title: "Zřícenina hradu Michalovice", desc: "Hrad proslulý svou šikmou věží zvanou Putna.", img: "Putna.jpg" },
    "loucen": { title: "Zámek Loučeň", desc: "Unikátní zámecký areál s mnoha labyrinty.", img: "Loucen.jpg" },
    "benatky": { title: "Zámek Benátky n. Jizerou", desc: "Místo pobytu Tychona Brahe a Bedřicha Smetany.", img: "Benatky.jpg" }
};

// Funkce pro zavření všech panelů (přístupná z HTML)
window.hidePanels = function() {
    const info = document.getElementById('info-panel');
    const double = document.getElementById('double-panel');
    if (info) info.style.display = 'none';
    if (double) double.style.display = 'none';
};

document.addEventListener("DOMContentLoaded", function() {
    const points = document.querySelectorAll('.map-point');

    points.forEach(point => {
        // Oprava vrstvení: bod jde při najetí dopředu
        point.addEventListener('mouseenter', function() {
            this.parentNode.appendChild(this);
        });

        // Reakce na kliknutí
        point.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            window.hidePanels();

            if (id === "boleslav") {
                const boleslavPanel = document.getElementById('double-panel');
                if (boleslavPanel) boleslavPanel.style.display = 'block';
            } else {
                const data = locations[id];
                const infoPanel = document.getElementById('info-panel');
                if (data && infoPanel) {
                    document.getElementById('p-title').innerText = data.title;
                    document.getElementById('p-desc').innerText = data.desc;
                    const img = document.getElementById('p-img');
                    if (img) {
                        img.src = data.img;
                        img.style.display = 'block';
                    }
                    infoPanel.style.display = 'block';
                }
            }
        });
    });
});
