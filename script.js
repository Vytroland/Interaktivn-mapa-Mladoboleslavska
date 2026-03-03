const locations = {
    "mnichovo": { title: "Zámek Mnichovo Hradiště", desc: "Barokní sídlo Valdštejnů s rozsáhlou knihovnou.", img: "Minchovo.jpg" },
    "bela": { title: "Zámek Bělá p. Bezdězem", desc: "Historický zámek s expozicí o historii regionu.", img: "bela.jpg" },
    "michalovice": { title: "Zřícenina hradu Michalovice", desc: "Hrad proslulý svou šikmou věží zvanou Putna.", img: "Putna.jpg" },
    "loucen": { title: "Zámek Loučeň", desc: "Unikátní zámecký areál s mnoha labyrinty.", img: "Loucen.jpg" },
    "benatky": { title: "Zámek Benátky n. Jizerou", desc: "Místo pobytu Tychona Brahe a Bedřicha Smetany.", img: "Benatky.jpg" }
};

function hidePanels() {
    const infoPanel = document.getElementById('info-panel');
    const doublePanel = document.getElementById('double-panel');
    if (infoPanel) infoPanel.style.display = 'none';
    if (doublePanel) doublePanel.style.display = 'none';
}

// Spustí se až po načtení stránky
window.onload = function() {
    console.log("Mapa je připravena!");

    document.querySelectorAll('.map-point').forEach(point => {
        // Oprava vrstvení při najetí
        point.addEventListener('mouseenter', function() {
            this.parentNode.appendChild(this);
        });

        // Kliknutí na bod
        point.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            console.log("Kliknuto na: " + id);
            hidePanels();

            if (id === "boleslav") {
                const boleslavPanel = document.getElementById('double-panel');
                if (boleslavPanel) boleslavPanel.style.display = 'block';
            } else {
                const data = locations[id];
                const infoPanel = document.getElementById('info-panel');
                if (data && infoPanel) {
                    document.getElementById('p-title').innerText = data.title;
                    document.getElementById('p-desc').innerText = data.desc;
                    const imgElement = document.getElementById('p-img');
                    if (data.img) {
                        imgElement.src = data.img;
                        imgElement.style.display = 'block';
                    }
                    infoPanel.style.display = 'block';
                }
            }
        });
    });
};
