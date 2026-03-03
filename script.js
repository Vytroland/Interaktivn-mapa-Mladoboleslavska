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

    const zavritVse = () => {
        if (infoPanel) infoPanel.style.display = 'none';
        if (doublePanel) doublePanel.style.display = 'none';
    };

    document.getElementById('close-info')?.addEventListener('click', zavritVse);
    document.getElementById('close-double')?.addEventListener('click', zavritVse);

    document.querySelectorAll('.map-point').forEach(point => {
        point.style.cursor = 'pointer';

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

        // Efekt pro vrstvení jmen
        point.addEventListener('mouseenter', function() {
            this.parentNode.appendChild(this);
        });
    });
});
