import React, { Component } from 'react';

import ListContainer from './list/ListContainer';
import FridgeModal from '../../component/Fridge/modal/FridgeModal';

class FridgeContainer extends Component {

    render() {
        return (
            <section className="fridge">
                <ListContainer />
            </section>
        )
    }
}

export default FridgeContainer;