console.log('script.js');

function chain() {
    hophop("test", function() {
        atout.style.opacity = '1';
        atout.style.transition = " 0.1s";

        hophop("test2", function() {
            competence.style.opacity = '1';
            competence.style.transition = " 0.2s";
            
            hophop("test3", function() {
                experience.style.opacity = '1';
                experience.style.transition = "0.2s";
                 hophop("test4", function() {
                    formation.style.opacity = '1';
                    formation.style.transition = "0.2s";
                });
            });
        });
    }
    );
};
 
chain();

let atout = document.getElementById("atout");
let competence = document.getElementById("competence");
let num = 0;
 
function hophop(id, callback) {
    let texte = document.getElementById(id);
    let contenu = texte.innerHTML;
    texte.innerHTML = '';
    
    let index = 0;
    let timer = setInterval(function() {
        if (index < contenu.length) {
            texte.innerHTML += contenu.charAt(index);
            index++;
            num++;
            console.log(num);
        } else {
            clearInterval(timer);
            if (callback) callback();
        }
    }, Math.random() * (150 - 70) + 70);
}

//méthode qui permet d'afficher la div à l'appui du bouton "Entrée"
let compteur = 1
document.addEventListener('keydown', (event) => {
    
    while(compteur!= 2) {
        if (event.key ==='Enter') {
            // Changez la propriété "display" de la div 
            
            document.getElementById('ligne1').style.display = 'block';
            setTimeout(function(){
                document.getElementById('ligne2').style.display = 'block'; 
            }, 1000);
            setTimeout(function(){
                document.getElementById('ligne3').style.display = 'block'; 
            }, 2000);
            setTimeout(function(){
                document.getElementById('ligne4').style.display = 'block'; 
            }, 3000);
            setTimeout(function(){
                document.getElementById('ligne5').style.display = 'block'; 
            }, 4000);
            setTimeout(function(){
                document.getElementById('ligne6').style.display = 'block'; 
            }, 5000);
            setTimeout(function(){
                document.getElementById('ligne7').style.display = 'block'; 
            }, 6000);
            setTimeout(function(){
                document.getElementById('loader').style.display = 'block'; 
            }, 8000);
            // Simulate an API request or any async operation
            setTimeout(() => {
                hideLoader();
                showContent();
            }, 10000); // Replace with your actual data loading logic and time

            function hideLoader() {
                const loader = document.getElementById("loader");
                loader.style.display = "none";
            }
            setTimeout(function(){
                document.getElementById('one').style.display = 'none'; 
            }, 9000);


            function showContent() {
                const header = document.getElementById("header");
                header.style.display = "block";
                const main = document.getElementById("main");
                main.style.display = "block";
                const footer = document.getElementById("footer");
            footer.style.display = "block";
            };
        };
            
        compteur++;
    };
});
