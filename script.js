const locations = {
    "mnichovo": { title: "Mnichovo Hradiště", desc: "Barokní perla Valdštejnů Velkolepá rezidence, která vás přenese do éry Albrechta z Valdštejna. Mezi největší lákadla patří unikátní zámecké divadlo s původní mašinerií a rozsáhlá knihovna, o kterou se kdysi staral slavný Giacomo Casanova.", img: "Minchovo.jpg" },
    "bela": { title: "Bělá pod Bezdězem", desc: "Brána do kraje hradů Původně tvrz přestavěná na renesanční a později barokní zámek. Je úzce spjat s rodem Valdštejnů a nabízí expozice věnované panství, lesnictví i papírenství. Zámek tvoří výraznou dominantu náměstí a je ideálním startovním bodem pro výlety směrem k hradu Bezděz.", img: "bela.jpg" },
    "michalovice": { title: "Michalovická Putna", desc: "Zřícenina hradu proslulá svou šikmou věží zvanou Putna.", img: "Putna.jpg" },
    "loucen": { title: "Zámek Loučen", desc: "Labyrinty a bludiště Barokní zámek obklopený rozsáhlým parkem, který ukrývá evropský unikát – 12 různých labyrintů a bludišť. Kromě zábavy v zahradě nabízí zámek i pohled do života šlechtického rodu Thurn-Taxisů.", img: "Loucen.jpg" }
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
                }
                document.getElementById('info-panel').style.display = 'block';
            }
        }
    });
});
