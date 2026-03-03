const locations = {
    "mnichovo": { title: "Zámek Mnichovo Hradiště", desc: "Barokní sídlo Valdštejnů s rozsáhlou knihovnou.", img: "Minchovo.jpg" },
    "bela": { title: "Zámek Bělá p. Bezdězem", desc: "Historický zámek s expozicí o historii regionu.", img: "bela.jpg" },
    "michalovice": { title: "Zřícenina hradu Michalovice", desc: "Hrad proslulý svou šikmou věží zvanou Putna.", img: "Putna.jpg" },
    "loucen": { title: "Zámek Loučeň", desc: "Unikátní zámecký areál s mnoha labyrinty.", img: "Loucen.jpg" },
    "benatky": { title: "Zámek Benátky n. Jizerou", desc: "Místo pobytu Tychona Brahe a Bedřicha Smetany.", img: "Benatky.jpg" }
};

document.addEventListener("DOMContentLoaded", () => {
    const infoPanel = document.getElementById('info-panel');
    const doublePanel = document.getElementById('double-panel');

    // Funkce, která schová oba typy panelů
    const zavritVse = () => {
        if (infoPanel) infoPanel.style.display = 'none';
        if (doublePanel) doublePanel.style.display = 'none';
    };

    // Aktivace tlačítek "Zavřít" podle jejich ID z HTML
    document.getElementById('btn-close-info')?.addEventListener('click', zavritVse);
    document.getElementById('btn-close-double')?.addEventListener('click', zavritVse);

    // Nastavení klikání na body na mapě
    document.querySelectorAll('.map-point').forEach(point => {
        point.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            zavritVse(); // Nejdřív vše schovat, pak otevřít ten správný

            if (id === "boleslav") {
                if (doublePanel) doublePanel.style.display = 'block';
            } else if (locations[id]) {
                const data = locations[id];
                document.getElementById('p-title').innerText = data.title;
                document.getElementById('p-desc').innerText = data.desc;
                const img = document.getElementById('p-img');
                if (img) {
                    img.src = data.img;
                    img.style.display = 'block';
                }
                if (infoPanel) infoPanel.style.display = 'block';
            }
        });

        // Oprava vrstvení, aby popisky nezůstávaly pod mapou
        point.addEventListener('mouseenter', function() {
            this.parentNode.appendChild(this);
        });
    });
});
