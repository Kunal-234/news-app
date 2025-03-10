import React, { Component } from "react";
import NewsComponent from "./NewsComponent";
import PropTypes from "prop-types";
// import Spinner from "./Spinner";

export default class News extends Component {
  static propTypes = { category: PropTypes.string.isRequired };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
    };
  }

  async componentDidMount() {
    this.props.setProgress(10)
    let today = new Date();
    let yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    let formattedDate = yesterday.toISOString().split("T")[0];
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&from=${formattedDate}&apiKey=${process.env.REACT_APP_API_KEY}`;
    console.log(process.env.REACT_APP_API_KEY)
    let data = await fetch(url);
    this.props.setProgress(30)

    let parsedData = await data.json();
    console.log(parsedData);
    this.props.setProgress(90)
    this.setState({ articles: parsedData.articles, loading: false });
    this.props.setProgress(100)
  
  }
  

  render() {
    return (
      <div className="container text-light my-4">
        <h2 className="mx-4 px-4">NewsNexux  Top Headlines-{this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} </h2>
        <div className="row my-3">
          {this.state.loading ? "" : (

          this.state.articles && this.state.articles.length > 0 ?
            (this.state.articles.map((element, index) => {
              return (
                <div className="col-md-3 m-3" key={index}>
                  <NewsComponent url={element.url}
                    title={
                      element.title
                        ? element.title.slice(0, 70)
                        : "No title available"
                    }
                    imageUrl={element.urlToImage}
                    description={
                      element.description
                        ? element.description.slice(0, 90)
                        : "No description available"
                    }
                  />
                </div>
              );
            }
            )
            ) : ""
          )}

        </div>
      </div>
    );
  }
}

News.propTypes = { category: PropTypes.string.isRequired };
