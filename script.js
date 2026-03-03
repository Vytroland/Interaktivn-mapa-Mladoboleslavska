const locations = {
    "mnichovo": { title: "Mnichovo Hradiště", badge: "Zámek", desc: "Barokní zámek spojený s rodem Valdštejnů a Casanovou.", img: "img/mnichovo.jpg" },
    "bela": { title: "Bělá pod Bezdězem", badge: "Zámek", desc: "Zámek na kraji hlubokých lesů s papírenskou tradicí.", img: "img/bela.jpg" },
    "michalovice": { title: "Michalovice", badge: "Zřícenina", desc: "Hrad se šikmou věží Putna.", img: "img/michalovice.jpg" },
    "loucen": { title: "Zámek Loučeň", badge: "Zábava", desc: "Zámek s unikátním labyrintáriem v parku.", img: "img/loucen.jpg" },
    "benatky": { title: "Benátky nad Jizerou", badge: "Věda", desc: "Zámek, kde působil astronom Tycho Brahe.", img: "img/benatky.jpg" }
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
            // Speciální zobrazení pro Boleslav
            document.getElementById('double-panel').style.display = 'grid';
        } else {
            // Standardní zobrazení pro ostatní
            const data = locations[id];
            if (data) {
                document.getElementById('p-title').innerText = data.title;
                document.getElementById('p-badge').innerText = data.badge;
                document.getElementById('p-desc').innerText = data.desc;
                document.getElementById('info-panel').style.display = 'block';
            }
        }
    });
});
