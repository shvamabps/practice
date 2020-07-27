import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar';
import { Container } from 'react-bootstrap';
import CardList from './components/CardList';

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <Container>
        <NavigationBar />
        <div>{this.props.title}</div>
        <SearchBar onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </Container>

    );
  };
}
export default App;
