import React, { Component } from 'react';
import axios from 'axios';

import './DetailContainer.scss'

class DetailContainer extends Component {
    state = {
        data: {},
        isOwner: false
    }
    componentDidMount() {
        axios.get(`https://mlc.janghoseung.com/recipe/${this.props.match.params.id}`)
        .then(response => {
            this.setState({
                data: response.data
            })
            console.log(response.data)
        })
        .catch(reject => {
            console.log(reject);
        })
    }

    render () {
        return(
            <section>

            </section>
        )
    }
}

export default DetailContainer;