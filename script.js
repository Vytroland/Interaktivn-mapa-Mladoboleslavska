// Seznam míst a jejich dat
const locations = {
    "mnichovo": { 
        title: "Zámek Mnichovo Hradiště", 
        desc: "Barokní sídlo Valdštejnů s rozsáhlou knihovnou.", 
        img: "Minchovo.jpg" 
    },
    "bela": { 
        title: "Zámek Bělá p. Bezdězem", 
        desc: "Historický zámek s expozicí o historii regionu a papírenství.", 
        img: "bela.jpg" 
    },
    "michalovice": { 
        title: "Zřícenina hradu Michalovice", 
        desc: "Hrad proslulý svou šikmou věží zvanou Putna.", 
        img: "Putna.jpg" 
    },
    "loucen": { 
        title: "Zámek Loučeň", 
        desc: "Unikátní zámecký areál s mnoha labyrinty a bludišti.", 
        img: "Loucen.jpg" 
    },
    "benatky": { 
        title: "Zámek Benátky n. Jizerou", 
        desc: "Místo, kde pobýval Tycho Brahe i Bedřich Smetana.", 
        img: "Benatky.jpg" 
    }
};

// Funkce pro skrytí panelů (musí být globální pro tlačítka v HTML)
window.hidePanels = function() {
    const info = document.getElementById('info-panel');
    const double = document.getElementById('double-panel');
    if (info) info.style.display = 'none';
    if (double) double.style.display = 'none';
};

// Hlavní kód se spustí až po úplném načtení stránky
document.addEventListener("DOMContentLoaded", () => {
    console.log("Skript úspěšně nastartoval.");

    const infoPanel = document.getElementById('info-panel');
    const doublePanel = document.getElementById('double-panel');
    const pTitle = document.getElementById('p-title');
    const pDesc = document.getElementById('p-desc');
    const pImg = document.getElementById('p-img');

    document.querySelectorAll('.map-point').forEach(point => {
        // Oprava překrývání: bod se při najetí přesune na konec SVG (do popředí)
        point.addEventListener('mouseenter', function() {
            this.parentNode.appendChild(this);
        });

        point.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            console.log("Kliknuto na ID:", id);
            
            // Nejdřív vše schováme
            hidePanels();

            if (id === "boleslav") {
                if (doublePanel) doublePanel.style.display = 'block';
            } else {
                const data = locations[id];
                if (data && infoPanel) {
                    if (pTitle) pTitle.innerText = data.title;
                    if (pDesc) pDesc.innerText = data.desc;
                    if (pImg) {
                        pImg.src = data.img;
                        pImg.style.display = 'block';
                    }
                    infoPanel.style.display = 'block';
                }
            }
        });
    });
});
