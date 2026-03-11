const locations = {
    "mnichovo": { title: "Mnichovo Hradiště", desc: "Barokní sídlo Valdštejnů s rozsáhlou knihovnou.", img: "Minchovo.jpg" },
    "bela": { title: "Bělá pod Bezdězem", desc: "Historický zámek s expozicí o historii regionu a papírenství.", img: "bela.jpg" },
    "michalovice": { title: "Michalovická Putna", desc: "Zřícenina hradu proslulá svou šikmou věží zvanou Putna.", img: "Putna.jpg" },
    "loucen": { title: "Zámek Loučen", desc: "Unikátní zámecký areál s mnoha labyrinty a bludišti.", img: "Loucen.jpg" }
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
