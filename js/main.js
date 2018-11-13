function dataGuardian() {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET", "http://www.omdbapi.com/?i=tt3896198&apikey=8e43c7b3");
    xmlHttp.onreadystatechange = function (){
        // console.log(this.response);
        data = JSON.parse(this.response);
        document.getElementById('data-film').innerHTML = `<div class="container">
            <p class="text-center display-4">${data.Title}</p>   
            <div>
                <p>${data.Plot}</p>
                <p></p>
                <p><b>Director :</b> ${data.Director}</p>
                <p><b>Writer :</b> ${data.Writer}</p>
                <p><b>Actors :</b> ${data.Actors}</p>
            </div>
        </div>`;
    }
        xmlHttp.send();
}
        
    
    

    
