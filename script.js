const locations = {
    "mnichovo": { t: "Mnichovo Hradiště", i: "Minchovo.jpg" },
    "bela": { t: "Bělá p. Bezdězem", i: "bela.jpg" },
    "boleslav": { t: "Mladá Boleslav", i: "muzeum.jpg" },
    "michalovice": { t: "Michalovice", i: "Putna.jpg" },
    "loucen": { t: "Zámek Loučeň", i: "Loucen.jpg" },
    "benatky": { t: "Benátky n. Jizerou", i: "Benatky.jpg" }
};

const modal = document.getElementById('modal');
const mTitle = document.getElementById('m-title');
const mImg = document.getElementById('m-img');
const closeBtn = document.getElementById('closeBtn');

// Musíme počkat, až se načte celé HTML
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.map-point').forEach(point => {
        point.addEventListener('click', function() {
            const data = locations[this.getAttribute('data-id')];
            if (data) {
                mTitle.innerText = data.t;
                mImg.src = data.i;
                modal.style.display = 'flex';
            }
        });

        // Aby jméno bylo vždy navrchu
        point.addEventListener('mouseenter', function() {
            this.parentNode.appendChild(this);
        });
    });
});

closeBtn.onclick = () => { modal.style.display = 'none'; };

// Zavření kliknutím mimo okno
window.onclick = (event) => {
    if (event.target == modal) { modal.style.display = 'none'; }
};
