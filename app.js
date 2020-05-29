function fibonacci(n){
    if (n == 1)
        return 0;
    else if (n == 2)
        return 1;
    else
        return fibonacci(n-1) + fibonacci(n-2);
}

var app = new Vue({
    el: '#app',
    data: {
        message: "",
        sayi: 0,
        gorunurInput: false,
        count: 0,
        word: "",
        wordsArray: []
    },
    methods: {
        input: function () {
            this.gorunurInput = true;
        },
        wordsFunc: function(){
            if(this.word.length > 0){
                this.message = "";
                if(this.count < this.sayi){
                    if(this.wordsArray.includes(this.word)){
                        this.wordsArray.splice(this.wordsArray.indexOf(this.word), 1);
                    }   
                    else{
                        
                        this.wordsArray.push(this.word);
                    }
                    this.count++;
                }
                else{
                    this.message = "Azami sınıra ulaştınız.";
                }
            }
            else{
                this.message = "Lütfen kelime yazınız.";
            }
            this.word = "";
        }
    }
})




