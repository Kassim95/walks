var v = new Vue({
    el: "#vue-app",
    data: {
        pasta: []
    },
    mounted: function(){
        this.loadPasta();
    },
    methods: {
        loadPasta: function(){
            axios.get('https://gist.githubusercontent.com/Kassim95/2f01b87c3144db74aad724b48b5ac2c8/raw/e506ff2b81049d94cc11949c83ce367c6608fb54/pasta.json')
            .then(function (response){
                v.pasta = response.data.data;
            })
            .catch(function (error){
                console.log(error);
            });
        },
        reverseList: function(){
            return v.pasta.reverse();
        },
        shuffleList: function(){
            var j, x, i;
            for (i = v.pasta.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = v.pasta[i];
                v.pasta[i] = v.pasta[j];
                v.pasta[j] = x;
            }
            v.$forceUpdate();
            return v.pasta;
        }
    }
});