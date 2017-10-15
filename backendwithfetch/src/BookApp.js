import React, {Component} from 'react';
import DataStore from './data/DataStore';



export default class BookApp extends Component{

  constructor(){
    super();
    this.store = new DataStore();
    this.state={_data: []};
    this.store.loadData(function(data){
      this.setState({_data:data});
    }.bind(this));
    this.createBook = this.createBook.bind(this);
    this.search = this.search.bind(this);
  }

  createBook(){
    const book = {
      "title": "New Book",
      "author": "New Book Author",
      "rating": 100,
      "year_published": 2017
    };
    this.store.createBook(book, (data)=>{this.setState({_data: data})});
  }

  search = function(x){
  var searchID = document.getElementById('search').value;
  this.state._data.map(function(book){
      if(book.id == searchID){
      alert('ID: '+book.id+' Title: '+book.title+' Author: '+book.author);
    }})

  }
  

  render(){

    const books = this.state._data.map(function(book){return <p key={book.id}>
    Title: {book.title}<br></br>
    Author: {book.author}<br></br>
    Rating: {book.rating}<br></br>
    Year Published: {book.year_published}<br></br>
    <br></br>
    </p>});
    
    
 

    return(
      <div>
      <p>
      <button onClick={this.createBook}>Create new book</button>
    </p>
    <p>
    <input type="text" id="search"></input>
    <button onClick={this.search}>Get book by ID</button>
    </p>
    <p>--------------------------------</p>
        {books}
      </div>
    )
  }
}

