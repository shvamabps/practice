import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Button, Container, FormControl } from 'react-bootstrap';
import axios from 'axios';


class SearchBar extends React.Component {
    state = { userName: '' };
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        this.setState({ userName: '' });
    };
    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <FormControl
                            value={this.state.userName}
                            onChange={event => this.setState({ userName: event.target.value })}
                            className="mt-4 col-md-6 offset-md-3 form-control-lg"
                            required
                            type="text"
                            placeholder="Enter Github Username" />
                    </FormGroup>
                    <Button className="btn btn-lg mb-auto" type="submit" variant="danger">Add Card</Button>
                </Form>
            </Container>
        );
    }
}


export default SearchBar;