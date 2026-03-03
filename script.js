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

    function hideAll() {
        if (infoPanel) infoPanel.style.display = 'none';
        if (doublePanel) doublePanel.style.display = 'none';
    }

    // Tlačítka pro zavření
    document.getElementById('close-info').addEventListener('click', hideAll);
    document.getElementById('close-double').addEventListener('click', hideAll);

    // Klikání na body na mapě
    document.querySelectorAll('.map-point').forEach(point => {
        point.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            hideAll();

            if (id === "boleslav") {
                doublePanel.style.display = 'block';
            } else if (locations[id]) {
                const data = locations[id];
                document.getElementById('p-title').innerText = data.title;
                document.getElementById('p-desc').innerText = data.desc;
                const img = document.getElementById('p-img');
                if (data.img) {
                    img.src = data.img;
                    img.style.display = 'block';
                }
                infoPanel.style.display = 'block';
            }
        });

        // Aby jména nezůstávala pod mapou
        point.addEventListener('mouseenter', function() {
            this.parentNode.appendChild(this);
        });
    });
});
