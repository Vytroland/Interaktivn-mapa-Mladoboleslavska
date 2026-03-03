const locations = {
    "mnichovo": { t: "Mnichovo Hradiště", i: "Minchovo.jpg" },
    "bela": { t: "Bělá p. Bezdězem", i: "bela.jpg" },
    "boleslav": { t: "Mladá Boleslav", i: "muzeum.jpg" },
    "michalovice": { t: "Michalovice", i: "Putna.jpg" },
    "loucen": { t: "Zámek Loučeň", i: "Loucen.jpg" },
    "benatky": { t: "Benátky n. Jizerou", i: "Benatky.jpg" }
};

const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeModal');

document.querySelectorAll('.map-point').forEach(point => {
    point.addEventListener('click', function() {
        const info = locations[this.getAttribute('data-id')];
        if (info) {
            document.getElementById('m-title').innerText = info.t;
            document.getElementById('m-img').src = info.i;
            modal.style.display = 'flex';
        }
    });

    point.addEventListener('mouseenter', function() {
        this.parentNode.appendChild(this);
    });
});

closeBtn.onclick = () => { modal.style.display = 'none'; };

window.onclick = (event) => {
    if (event.target == modal) { modal.style.display = 'none'; }
};
