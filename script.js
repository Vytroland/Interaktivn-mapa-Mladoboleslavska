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

    // Funkce pro schování panelů
    const zavritVse = () => {
        if (infoPanel) infoPanel.style.display = 'none';
        if (doublePanel) doublePanel.style.display = 'none';
    };

    // TADY JE TA OPRAVA: ID musí být přesně 'close-info' a 'close-double'
    const tlacitko1 = document.getElementById('close-info');
    const tlacitko2 = document.getElementById('close-double');

    if (tlacitko1) tlacitko1.addEventListener('click', zavritVse);
    if (tlacitko2) tlacitko2.addEventListener('click', zavritVse);

    // Klikání na body na mapě
    document.querySelectorAll('.map-point').forEach(point => {
        point.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            zavritVse();

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

        // Aby jména míst byla vždy navrchu
        point.addEventListener('mouseenter', function() {
            this.parentNode.appendChild(this);
        });
    });
});
