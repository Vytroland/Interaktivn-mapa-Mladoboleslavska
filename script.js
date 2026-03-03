const locations = {
    "mnichovo": { title: "Zámek Mnichovo Hradiště", desc: "Barokní sídlo Valdštejnů s rozsáhlou knihovnou.", img: "Minchovo.jpg" },
    "bela": { title: "Zámek Bělá p. Bezdězem", desc: "Historický zámek s expozicí o historii regionu.", img: "bela.jpg" },
    "michalovice": { title: "Zřícenina hradu Michalovice", desc: "Hrad proslulý svou šikmou věží zvanou Putna.", img: "Putna.jpg" },
    "loucen": { title: "Zámek Loučeň", desc: "Unikátní zámecký areál s mnoha labyrinty.", img: "Loucen.jpg" },
    "benatky": { title: "Zámek Benátky n. Jizerou", desc: "Místo pobytu Tychona Brahe a Bedřicha Smetany.", img: "Benatky.jpg" }
};

document.addEventListener("DOMContentLoaded", function() {
    const infoPanel = document.getElementById('info-panel');
    const doublePanel = document.getElementById('double-panel');

    // Funkce pro schování všeho
    function hideAll() {
        if (infoPanel) infoPanel.style.display = 'none';
        if (doublePanel) doublePanel.style.display = 'none';
    }

    // Navázání funkcí na tlačítka "Zavřít"
    const closeBtn1 = document.getElementById('close-info');
    const closeBtn2 = document.getElementById('close-double');
    
    if (closeBtn1) closeBtn1.addEventListener('click', hideAll);
    if (closeBtn2) closeBtn2.addEventListener('click', hideAll);

    // Klikání na body na mapě
    document.querySelectorAll('.map-point').forEach(point => {
        point.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            hideAll();

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

        // Efekt vrstvení (aby popisky byly nad mapou)
        point.addEventListener('mouseenter', function() {
            this.parentNode.appendChild(this);
        });
    });
});
