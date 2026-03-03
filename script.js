const locations = {
    "mnichovo": { title: "Zámek Mnichovo Hradiště", desc: "Barokní sídlo Valdštejnů s rozsáhlou knihovnou.", img: "Minchovo.jpg" },
    "bela": { title: "Zámek Bělá p. Bezdězem", desc: "Historický zámek s expozicí o historii regionu.", img: "bela.jpg" },
    "michalovice": { title: "Zřícenina hradu Michalovice", desc: "Hrad proslulý svou šikmou věží zvanou Putna.", img: "Putna.jpg" },
    "loucen": { title: "Zámek Loučeň", desc: "Unikátní zámecký areál s mnoha labyrinty.", img: "Loucen.jpg" },
    "benatky": { title: "Zámek Benátky n. Jizerou", desc: "Místo pobytu Tychona Brahe a Bedřicha Smetany.", img: "Benatky.jpg" }
};

// Funkce pro zavření všech panelů
function hidePanels() {
    console.log("Zavírám panely"); // Pro kontrolu v konzoli
    const infoPanel = document.getElementById('info-panel');
    const doublePanel = document.getElementById('double-panel');
    
    if (infoPanel) infoPanel.style.display = 'none';
    if (doublePanel) doublePanel.style.display = 'none';
}

// Hlavní logika po načtení stránky
document.addEventListener('DOMContentLoaded', () => {
    console.log("Script načten a připraven");

    document.querySelectorAll('.map-point').forEach(point => {
        // Efekt pro vrstvení (aby jméno bylo vždy nahoře)
        point.addEventListener('mouseenter', function() {
            this.parentNode.appendChild(this);
        });

        // Reakce na kliknutí
        point.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            console.log("Kliknuto na: " + id);
            hidePanels();

            if (id === "boleslav") {
                const dbPanel = document.getElementById('double-panel');
                if (dbPanel) dbPanel.style.display = 'block';
            } else {
                const data = locations[id];
                if (data) {
                    const infoPanel = document.getElementById('info-panel');
                    document.getElementById('p-title').innerText = data.title;
                    document.getElementById('p-desc').innerText = data.desc;
                    
                    const imgElement = document.getElementById('p-img');
                    if (data.img) {
                        imgElement.src = data.img;
                        imgElement.style.display = 'block';
                    } else {
                        imgElement.style.display = 'none';
                    }
                    
                    if (infoPanel) infoPanel.style.display = 'block';
                }
            }
        });
    });
});
