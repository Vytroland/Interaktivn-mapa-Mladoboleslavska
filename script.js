const data = {
    "mnichovo": { n: "Mnichovo Hradiště", p: "Zámek Mnichovo Hradiště.", i: ["Minchovo.jpg"] },
    "bela": { n: "Bělá p. Bezdězem", p: "Zámek Bělá.", i: ["bela.jpg"] },
    "boleslav": { n: "Mladá Boleslav", p: "Templ a Škoda Muzeum.", i: ["Templp.jpg", "muzeum.jpg"] },
    "michalovice": { n: "Michalovice", p: "Hrad Putna.", i: ["Putna.jpg"] },
    "loucen": { n: "Loučeň", p: "Zámek a labyrinty.", i: ["Loucen.jpg"] },
    "benatky": { n: "Benátky n. Jizerou", p: "Zámek Benátky.", i: ["Benatky.jpg"] }
};

document.querySelectorAll('.point').forEach(p => {
    p.addEventListener('click', () => {
        const item = data[p.dataset.id];
        document.getElementById('t').innerText = item.n;
        document.getElementById('d').innerText = item.p;
        const imgDiv = document.getElementById('imgs');
        imgDiv.innerHTML = ''; 
        item.i.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.style.width = "100%";
            img.style.marginBottom = "10px";
            img.style.borderRadius = "10px";
            imgDiv.appendChild(img);
        });
        document.getElementById('info').style.display = 'block';
    });
});
