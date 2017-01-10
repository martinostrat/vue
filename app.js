var app = new Vue({
    el: '#app',
    data: {
        form: {
            txtNimi: null,
            txtVanus: null,
            txtAadress: null
        },
        persons: []
    },
    methods:{
        addPerson: function () {

            this.persons.push( JSON.parse(JSON.stringify(this.form)) );

            $('#flash').slideDown().delay(300).slideUp();

            this.form.txtNimi = "";
            this.form.txtVanus = "";
            this.form.txtAadress = "";
        }
    }
})