// Data pro jednotlivá místa
const locations = {
    "mnichovo": { title: "Zámek Mnichovo Hradiště", desc: "Barokní sídlo Valdštejnů s rozsáhlou knihovnou.", img: "Minchovo.jpg" },
    "bela": { title: "Zámek Bělá p. Bezdězem", desc: "Historický zámek s expozicí o historii regionu.", img: "bela.jpg" },
    "michalovice": { title: "Zřícenina hradu Michalovice", desc: "Hrad proslulý svou šikmou věží zvanou Putna.", img: "Putna.jpg" },
    "loucen": { title: "Zámek Loučeň", desc: "Unikátní zámecký areál s mnoha labyrinty.", img: "Loucen.jpg" },
    "benatky": { title: "Zámek Benátky n. Jizerou", desc: "Místo pobytu Tychona Brahe a Bedřicha Smetany.", img: "Benatky.jpg" }
};

// Počkáme na načtení celé stránky
document.addEventListener("DOMContentLoaded", () => {
    const infoPanel = document.getElementById('info-panel');
    const doublePanel = document.getElementById('double-panel');

    // Funkce pro zavření všeho
    const closeAll = () => {
        if (infoPanel) infoPanel.style.display = 'none';
        if (doublePanel) doublePanel.style.display = 'none';
    };

    // Navázání na tvoje tlačítka (použijeme ID, která máš v HTML)
    document.getElementById('close-info')?.addEventListener('click', closeAll);
    document.getElementById('close-double')?.addEventListener('click', closeAll);

    // Klikání na body na mapě
    document.querySelectorAll('.map-point').forEach(point => {
        point.style.cursor = 'pointer'; // Pro jistotu přidáme kurzor
        
        point.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            closeAll();

            if (id === "boleslav") {
                if (doublePanel) doublePanel.style.display = 'block';
            } else if (locations[id]) {
                const data = locations[id];
                const titleElem = document.getElementById('p-title');
                const descElem = document.getElementById('p-desc');
                const imgElem = document.getElementById('p-img');

                if (titleElem) titleElem.innerText = data.title;
                if (descElem) descElem.innerText = data.desc;
                if (imgElem) {
                    imgElem.src = data.img;
                    imgElem.style.display = 'block';
                }
                if (infoPanel) infoPanel.style.display = 'block';
            }
        });

        // Efekt popisku při najetí
        point.addEventListener('mouseenter', function() {
            this.parentNode.appendChild(this); // Posuneme bod dopředu
        });
    });
});
