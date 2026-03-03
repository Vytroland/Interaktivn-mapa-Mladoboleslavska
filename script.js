const locations = {
    "mnichovo": { title: "Zámek Mnichovo Hradiště", badge: "Zámek", desc: "Barokní perla spojená s Valdštejny.", img: "Minchovo.jpg" },
    "bela": { title: "Zámek Bělá p. B.", badge: "Zámek", desc: "Historický zámek s expozicí papírenství.", img: "bela.jpg" },
    "michalovice": { title: "Zřícenina Michalovice", badge: "Zřícenina", desc: "Hrad se slavnou šikmou věží Putna.", img: "Putna.jpg" },
    "loucen": { title: "Zámek Loučeň", badge: "Zámek", desc: "Zámek proslulý svými labyrinty a bludišti.", img: "Loucen.jpg" },
    "benatky": { title: "Benátky n. Jizerou", badge: "Zámek", desc: "Zámek, kde působil Tycho Brahe.", img: "Benatky.jpg" } // Doplň si název obrázku pro Benátky
};

function hidePanels() {
    document.getElementById('info-panel').style.display = 'none';
    document.getElementById('double-panel').style.display = 'none';
}

document.querySelectorAll('.map-point').forEach(point => {
    point.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        hidePanels();

        if (id === "boleslav") {
            document.getElementById('double-panel').style.display = 'grid';
        } else {
            const data = locations[id];
            if (data) {
                document.getElementById('p-title').innerText = data.title;
                document.getElementById('p-badge').innerText = data.badge;
                document.getElementById('p-desc').innerText = data.desc;
                const imgElement = document.getElementById('p-img');
                if (data.img) {
                    imgElement.src = data.img;
                    imgElement.style.display = 'block';
                }
                document.getElementById('info-panel').style.display = 'block';
            }
        }
    });
});
