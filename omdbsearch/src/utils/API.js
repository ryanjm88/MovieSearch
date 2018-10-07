import axios from 'axios';
var queryURL = "https://www.omdbapi.com/?t=";
var APIkey = "&apikey=7feb1e98";

export default  {
    search: function(query) {
        return axios.get(queryURL + query + APIkey);
    }
};