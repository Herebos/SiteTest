//Date et heure + apéro
function leTout() {
    var d = new Date();
    document.getElementById("leTout").innerHTML = "Nous sommes le " + (d.toLocaleDateString() + " et il est " + (d.toLocaleTimeString() + "."));
    //apero
    var hours = d.getHours();
    if (((hours >= 12) && (hours < 14)) || ((hours >= 19) && (hours < 21))) {
        document.getElementById("apero").innerHTML = "Et c'est l'heure de l'apéro !";

    }
}

//vérité vraie
function vrai() {
    document.getElementById("vrai").innerHTML =
        "                              ∧_∧   La chance s'attrape par les cheveux, mais elle est chauve.</br>( ･ω･ )  /                                                            </br>";
    //alt+255
}

//phrases philo
function phrase() {
    var nbrAlea = Math.round(Math.random() * 10);
    var phrase = new Array;
    phrase[0] = "<q>Impossible de vous dire mon âge, il change tout le temps.</q> -Alphonse Allais";
    phrase[1] = "<q>L’amour est comme l’opéra, on s’y ennuie, mais on y retourne.</q> -Gustave Flaubert";
    phrase[2] = "<q>A quoi bon apprendre ce qu'il y a dans les livres puisque ça y est ?</q> -Sacha Guitry";
    phrase[3] = "<q>Parti de rien, je suis arrivé à pas grand chose.</q> -Groucho Marx";
    phrase[4] = "<q>Le mariage est la cause principale de divorce.</q> -Oscar Wilde";
    phrase[5] = "<q>Si la matière grise était rose, personne n'aurait plus d'idées noires.</q> -Pierre Dac";
    phrase[6] = "<q>A force d’être déçu par les autres, je finirai bien par croire en moi.</q> -Frédéric Dard";
    phrase[7] = "<q>Un bon mari ne se souvient jamais de l'âge de sa femme mais de son anniversaire, toujours.</q> -Jacques Audiberti";
    phrase[8] = "<q>Mettez tous vos oeufs dans le même panier et surveillez le panier.</q> -Mark Twain";
    phrase[9] = "<q>L'expérience est cette chose merveilleuse qui vous permet de reconnaître une erreur quand vous la faites à nouveau.</q> -F.P. Jones";

    document.getElementById("phrase").innerHTML = phrase[nbrAlea];
}
