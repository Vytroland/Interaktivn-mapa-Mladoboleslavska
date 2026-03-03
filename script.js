const locations = {
    "mnichovo": { title: "Zámek Mnichovo Hradiště", desc: "Barokní sídlo Valdštejnů.", img: "Minchovo.jpg" },
    "bela": { title: "Zámek Bělá p. Bezdězem", desc: "Historický zámek s expozicí.", img: "bela.jpg" },
    "michalovice": { title: "Zřícenina hradu Michalovice", desc: "Hrad se šikmou věží Putna.", img: "Putna.jpg" },
    "loucen": { title: "Zámek Loučeň", desc: "Unikátní labyrinty v parku.", img: "Loucen.jpg" },
    "benatky": { title: "Zámek Benátky n. Jizerou", desc: "Hvězdář Tycho Brahe.", img: "Benatky.jpg" }
};

window.hidePanels = function() {
    const info = document.getElementById('info-panel');
    const double = document.getElementById('double-panel');
    if (info) info.style.display = 'none';
    if (double) double.style.display = 'none';
};

document.addEventListener("DOMContentLoaded", function() {
    const points = document.querySelectorAll('.map-point');
    points.forEach(point => {
        point.addEventListener('mouseenter', function() {
            this.parentNode.appendChild(this);
        });
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
                    if (img) { img.src = data.img; img.style.display = 'block'; }
                    infoPanel.style.display = 'block';
                }
            }
        });
    });
});
