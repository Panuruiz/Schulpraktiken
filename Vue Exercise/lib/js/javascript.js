const app = new Vue({
    el: '#AufgabenApp',
    data: {
        aufgaben: [
            { beschreibung: 'Beispiel 1', fertig: true },
            { beschreibung: 'Beispiel 2', fertig: false }
        ],
        neueAufgabe: ''
    },
    computed: {
        erledigt() {
            return this.aufgaben.filter(aufgabe => aufgabe.fertig);
        },
        nichterledigt() {
            return this.aufgaben.filter(aufgabe => !aufgabe.fertig);
        },
    },
    methods: {
        aufgabeHinzu() {
            this.aufgaben.push({ beschreibung: this.neueAufgabe, fertig: false });
            this.neueAufgabe = '';
        },
        loeschen(index) {
            this.aufgaben.splice(index, 1);
        },
        erledigtWechseln(index) {
            this.aufgaben[index].fertig = this.aufgaben[index].fertig ? false : true;
        }
    }
});