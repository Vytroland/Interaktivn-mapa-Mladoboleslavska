const locations = {
    "mnichovo": { title: "Zámek Mnichovo Hradiště", desc: "Barokní zámek rodiny Valdštejnů.", img: "Minchovo.jpg" },
    "drabske": { title: "Drábské světničky", desc: "Skalní pevnost v Českém ráji.", img: "drabske.jpg" },
    "bela-zamek": { title: "Zámek Bělá p. Bezdězem", desc: "Historický zámek a muzeum.", img: "bela.jpg" },
    "muzeum": { title: "Škoda Muzeum", desc: "Historie automobilů Škoda.", img: "muzeum.jpg" },
    "michalovice": { title: "Zřícenina Michalovice", desc: "Hrad se šikmou věží Putna.", img: "Putna.jpg" },
    "loucen": { title: "Zámek Loučeň", desc: "Zámek s labyrintáriem.", img: "Loucen.jpg" },
    "benatky-zamek": { title: "Zámek Benátky n. Jizerou", desc: "Místo spojené s Tychonem Brahe.", img: "Benatky.jpg" }
};

document.querySelectorAll('.map-point').forEach(point => {
    // Kliknutí pro zobrazení info panelu
    point.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        const data = locations[id];
        if (data) {
            document.getElementById('p-title').innerText = data.title;
            document.getElementById('p-desc').innerText = data.desc;
            const img = document.getElementById('p-img');
            img.src = data.img;
            img.style.display = 'block';
            document.getElementById('info-panel').style.display = 'block';
        }
    });

    // Najetí myší: Bod vyskočí dopředu
    point.addEventListener('mouseenter', function() {
        this.parentNode.appendChild(this);
    });
});
