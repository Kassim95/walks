var v = new Vue({
    el: "#vue-app",
    data: {
        pasta: [],
        search: ''
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
        searchPasta: function(){
            v.pasta.reverse();
        }
    }
});