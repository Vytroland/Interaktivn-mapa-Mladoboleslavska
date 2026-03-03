const locations = {
    "mnichovo": { title: "Zámek Mnichovo Hradiště", desc: "Barokní sídlo Valdštejnů.", img: "Minchovo.jpg" },
    "bela": { title: "Zámek Bělá p. Bezdězem", desc: "Historický zámek a papírenství.", img: "bela.jpg" },
    "michalovice": { title: "Zřícenina Michalovice", desc: "Hrad se šikmou věží Putna.", img: "Putna.jpg" },
    "loucen": { title: "Zámek Loučeň", desc: "Labyrinty a bludiště.", img: "Loucen.jpg" },
    "benatky": { title: "Zámek Benátky n. Jizerou", desc: "Hvězdář Tycho Brahe.", img: "Benatky.jpg" }
};

function hidePanels() {
    document.getElementById('info-panel').style.display = 'none';
    document.getElementById('double-panel').style.display = 'none';
}

document.querySelectorAll('.map-point').forEach(point => {
    // Oprava překrývání: bod se při najetí přesune na konec SVG (do popředí)
    point.addEventListener('mouseenter', function() {
        this.parentNode.appendChild(this);
    });

    point.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        hidePanels();

        if (id === "boleslav") {
            document.getElementById('double-panel').style.display = 'block';
        } else {
            const data = locations[id];
            if (data) {
                document.getElementById('p-title').innerText = data.title;
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
