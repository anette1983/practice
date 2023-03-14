
import React, { Component } from "react";
import axios from "axios";
import ArticleList from "./ArticleList";
import ThreeDots from "./ThreeDots";
import {fetchArticlesWithQuery} from '../../services/api'

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

class Article extends Component {
    state = {
        articles: [],
        isLoading: false,
        error: null,
      };
    
      async componentDidMount() {
        this.setState({ isLoading: true });

        try {
            const articles = await fetchArticlesWithQuery("react");
            console.log('articles :>> ', articles);
            this.setState({ articles});
            
          } catch (error) {
            this.setState({ error });
          } finally {
            this.setState({ isLoading: false });
          }

        // try {
        //     const response = await axios.get("/search?query=react");
        //     this.setState({ articles: response.data.hits });
        //   } catch (error) {
        //     this.setState({ error });
        //   } finally {
        //     this.setState({ isLoading: false });
        //   }
        

        // const response = await axios.get("/search?query=react");
        // this.setState({ 
        //     articles: response.data.hits,
        //     isLoading: false,
        //  }); так було до обробки помилок
      }
    
      render() {
        const { articles, isLoading, error } = this.state;
        return (
        //   <div>
        //    {/* { articles.length > 0 ? <ArticleList articles={articles} /> : null} */}
        //    {isLoading ? <ThreeDots/> : <ArticleList articles={articles} />}
        //    {/*  <p>Loading...</p> замість threeDots */}
        //   </div>
        <div>
            {error && <p>Whoops, something went wrong: {error.message}</p>}
            {isLoading && <ThreeDots/>}
            {articles.length > 0 && <ArticleList articles={articles} />}
        </div>

        );
      }
}

export default Article;