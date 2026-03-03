const locations = {
    "mnichovo": { title: "Zámek Mnichovo Hradiště", desc: "Barokní sídlo Valdštejnů s rozsáhlou knihovnou.", img: "Minchovo.jpg" },
    "bela": { title: "Zámek Bělá p. Bezdězem", desc: "Historický zámek s expozicí o historii regionu a papírenství.", img: "bela.jpg" },
    "michalovice": { title: "Zřícenina hradu Michalovice", desc: "Hrad proslulý svou šikmou věží zvanou Putna.", img: "Putna.jpg" },
    "loucen": { title: "Zámek Loučeň", desc: "Unikátní zámecký areál s mnoha labyrinty a bludišti.", img: "Loucen.jpg" },
    "benatky": { title: "Zámek Benátky nad Jizerou", desc: "Místo, kde pobýval Tycho Brahe i Bedřich Smetana.", img: "Benatky.jpg" }
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
            // Speciální panel pro MB
            document.getElementById('double-panel').style.display = 'grid';
        } else {
            // Standardní panel pro ostatní
            const data = locations[id];
            if (data) {
                document.getElementById('p-title').innerText = data.title;
                document.getElementById('p-desc').innerText = data.desc;
                const imgElement = document.getElementById('p-img');
                if (data.img) {
                    imgElement.src = data.img;
                    imgElement.style.display = 'block';
                } else {
                    imgElement.style.display = 'none';
                }
                document.getElementById('info-panel').style.display = 'block';
            }
        }
    });
});
