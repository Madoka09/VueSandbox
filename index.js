var fieldTest = new Vue({
    el: '#fieldTest',
    data: {
        userInput: '',
    },
});

var loopTest = new Vue({
    el: '#loopTest',
    data: {
        inputNumber: '',
        loopedNumbers: []
    },
    methods: {
        poblateArr: function (event) {
            this.loopedNumbers.length = 0;
            for(var i = 1; i <= this.inputNumber; i++){
                this.loopedNumbers.push({msg: Math.random()});
            }
        },
        clearView: function (event) {
            this.loopedNumbers = [];
        }
    }
});

Vue.component('uikit-card-hover', {
    data: {},
    template: '<div class="uk-card uk-card-default uk-card-hover uk-card-body"><h3 class="uk-card-title">Tarjeta de UIKit con Hover</h3></div>'
})

new Vue({ el: '#cardGenerator'});








