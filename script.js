const locations = {
    "mnichovo": { 
        title: "Zámek Mnichovo Hradiště", 
        desc: "Barokní sídlo Valdštejnů s rozsáhlou knihovnou.", 
        img: "Minchovo.jpg" 
    },
    "bela": { 
        title: "Zámek Bělá p. Bezdězem", 
        desc: "Historický zámek s expozicí o historii regionu a papírenství.", 
        img: "bela.jpg" 
    },
    "michalovice": { 
        title: "Zřícenina hradu Michalovice", 
        desc: "Hrad proslulý svou šikmou věží zvanou Putna.", 
        img: "Putna.jpg" 
    },
    "loucen": { 
        title: "Zámek Loučeň", 
        desc: "Unikátní zámecký areál s mnoha labyrinty a bludišti.", 
        img: "Loucen.jpg" 
    },
    "benatky": { 
        title: "Zámek Benátky nad Jizerou", 
        desc: "Místo, kde pobýval Tycho Brahe i Bedřich Smetana.", 
        img: "Benatky.jpg" 
    },
    "boleslav": {
        title: "Mladá Boleslav",
        desc: "Město automobilů s bohatou historií.",
        // Pro Boleslav používáme v HTML dva specifické obrázky: Templ.jpg a muzeum.jpg
    }
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
            // Zobrazí ten dvojitý panel (Templ + Muzeum) definovaný v index.html
            const doublePanel = document.getElementById('double-panel');
            doublePanel.style.display = 'grid';
            
            // Vynutíme načtení obrázků Templ.jpg a muzeum.jpg
            const imgs = doublePanel.querySelectorAll('img');
            imgs.forEach(img => {
                const src = img.getAttribute('src');
                img.src = src; 
            });
            
        } else {
            // Standardní panel pro ostatní místa
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
