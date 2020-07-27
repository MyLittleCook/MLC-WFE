import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import './ListContainer.scss'
import Box from '../../../component/Fridge/box/Box';
import Wrapper from '../../../component/Fridge/wrapper/Wrapper';

class ListContainer extends Component {
    state = {
        fridgePage: 1,
        loadingData: false
    }

    list = [];

    componentDidMount() {
        this.getData();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.fridgeModalShow !== this.props.fridgeModalShow && !nextProps.fridgeModalShow) {
            this.setState({
                fridgePage: 1,
                loadingData: true
            })
            this.list = [];
            this.getData();
        }
    }

    loadMoreData = () => {
        const { loadingData } = this.state;

        if(!loadingData) {
            this.setState({
                loadingData: true
            })
            this.getData();
        }
    }

    getData = () => {
        const { fridgePage } = this.state;

        axios.get('https://mlc.janghoseung.com/fridge/food/list', {
            headers: {
                Authorization: sessionStorage.getItem('ACT')
            },
            params: {
                page: fridgePage
            }
        })
        .then((response) => {
            if(response.data.result.length === 0) {
                toast.error("등록된 음식이 더이상 없습니다.");
                this.list.push({name: '등록된 음식이 더이상 없습니다.', id: 'sa1as651s5df16as5d6f16s1a6f5'})
                this.setState({
                    fridgePage: 0
                })
            } else {
                console.log('Fridge response: ', response.data.result)
                response.data.result.forEach(d => {
                    this.list.push(d);
                });
                this.setState({
                    fridgePage: fridgePage+1,
                    loadingData: false
                })
            }
        })
        .catch((reject) => {
            console.log(reject);
        })
    }
    
    render() {
        let foodBox = this.list.map((v) => <Box name={v.name} info={v.info} shelfLife={v.shelfLife} id={v.id} key={v.id}/>);
        
        return (
            <section className="fridge__list">
                <Wrapper foodList={foodBox} loadData={this.loadMoreData}/>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    fridgeModalShow: state.modal.fridgeModalShow
})

export default connect(
    mapStateToProps
)(ListContainer);