import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

import ListContainer from './list/ListContainer';
import FridgeModal from '../../component/Fridge/modal/FridgeModal';

class FridgeContainer extends Component {

    render() {
        return (
            <section className="fridge">
                <ListContainer />
                <FridgeModal />
            </section>
        )
    }
}

export default FridgeContainer;