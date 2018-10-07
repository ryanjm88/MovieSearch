import React, { Component } from 'react';
import "./MainContainer.css";
import Row from "../Row";
import Col from "../Column";
import Card from "../Card";
import MovieDetails from "../MovieDetails";
import SearchForm from "../SearchForm";
// import Nav from "../Nav";
import API from "../../utils/API";

class MainContainer extends Component   {
    state = {
        result: {},
        search: ""
    };

    searchFilms = query =>  {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event =>    {
        const { target: { name, value } } = event;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchFilms(this.state.search);
    };

    render()    {
        return  (
            <Row>
                <Col size="md-8">
                    <Card
                        heading={this.state.result.Title || "Search for a movie by title to find out about it!"}
                    >
                    <MovieDetails
                        title={this.state.result.Title}
                        src={this.state.result.Poster}
                        director={this.state.result.Director}
                        genre={this.state.result.Genre}
                        released={this.state.result.Released}
                    />
                    </Card>
                </Col>
                <Col size="md-4">
                    <Card heading="Search for Movies">
                    <SearchForm
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default MainContainer;