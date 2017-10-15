
const URL = "http://localhost:4000/books/";

class DataStore{

  constructor(){
    this.books = [];
  }

  loadData(callback){
    fetch(URL, {
      method: 'get'
    }).then(function(data){
      return data.json();
    }).then(function(data){
      callback(data);
    });
  }



  createBook(book, callback){
    fetch(URL,{
      method: 'POST',
      headers: new Headers({'content-Type': 'application/json'}),
      body: JSON.stringify(book)
    }).then(function(data){
      return data.json();
    }).then(
      ()=>{this.loadData(callback);}
    );
  }




}
export default DataStore;
