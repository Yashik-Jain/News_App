import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  constructor(){
    super();
    this.state={
    articles: [],
    loading: false,
    page: 1
    }
  }

async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=d9dfce08e4724201b38965b21f8f2d5f&page=1&pageSize=20";
    let data=await fetch(url);
    let parsedData=await data.json();
    // console.log(parsedData);
    this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults});
    // loading: false;
}

handlenext=async ()=>{
     if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){
        alert("No more pages to load");
     }  else {

         let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=d9dfce08e4724201b38965b21f8f2d5f&page=${this.state.page + 1}&pageSize=20`;
         let data=await fetch(url);
         let parsedData=await data.json();
         this.setState({
             page: this.state.page + 1,
             articles: parsedData.articles
            })
        }
}


handleprev=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=d9dfce08e4724201b38965b21f8f2d5f&page=${this.state.page - 1}&pageSize=20`;
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
    page: this.state.page - 1,
    articles: parsedData.articles
})
}
  render() {
    return (
      <div>
        <div className='container my-3'>
          <h1 className='text-center'>News - Top Headlines</h1>
       
          <div className="row">
             {  this.state.articles.map((element)=>{
                return <div className="col-md-3" key={element.url} >
        <Newsitem title={element.title?element.title.slice(0,45)+"...":""} description={element.description?element.description.slice(0,88)+"...":""} imageurl={element.urlToImage} url={element.url}/>
            </div>
               }) }

          </div>
          <div className="container d-flex justify-content-between my-3">
            <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handleprev}>&larr;Prev </button>
            <button type="button" className="btn btn-primary" onClick={this.handlenext}>Next &rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}

export default News
