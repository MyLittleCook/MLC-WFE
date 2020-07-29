import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import './DetailContainer.scss';
import Top from '../../../component/Recipe/detail/Top';
import Info from '../../../component/Recipe/detail/Info';
import Step from '../../../component/Recipe/detail/Step';
import StepBox from '../../../component/Recipe/detail/StepBox';

class DetailContainer extends Component {
    state = {
        id: '',
        name: '',
        category: '',
        recipeImage: '',
        nickname: '',
        ingredients: '',
        likes: 0,
        isLiked: false,
        steps: [],
        isOwner: false
    }

    componentDidMount() {
        const { isSignIn, nickName } = this.props;

        axios.get(`https://mlc.janghoseung.com/recipe/${this.props.match.params.id}`)
        .then(response => {
            let ingredients = '', isLiked = false, isOwner = false;

            response.data.ingredients.forEach((v, i) => {
                if(i !== response.data.ingredients.length) {
                    ingredients = ingredients.concat(`${v.name} ${v.detail}, `);
                } else {
                    ingredients = ingredients.concat(`${v.name} ${v.detail}`);
                }
            });
            if(isSignIn) {
                response.data.likes.forEach(v => {
                    if(v === nickName) {
                        isLiked = true;
                    }
                });

                console.log(response.data.author.nickname, nickName)

                if(response.data.author.nickname === nickName) {
                    isOwner = true;
                }   
            }

            this.setState({
                id: response.data.id,
                name: response.data.name,
                category: response.data.category,
                recipeImage: response.data.recipeImage,
                nickname: response.data.author.nickname,
                ingredients: ingredients,
                likes: response.data.likes.length,
                isLiked: isLiked,
                steps: response.data.steps,
                isOwner: isOwner
            })
            console.log(response.data);
        })
        .catch(reject => {
            console.log(reject);
        })
    }

    render () {
        const { id, name, category, recipeImage, nickname, ingredients, likes, isLiked, steps, isOwner } = this.state;

        let stepList = steps.map((v, i) => <StepBox image={v.stepImage} content={v.content} number={i} key={i}/>);

        return(
            <section className="detail-recipe">
                <section className="detail-recipe__wrapper">
                    <Top isOwner={isOwner} id={id} history={this.props.history}/>
                    <Info title={name} category={category} recipeImage={recipeImage} ingredients={ingredients} nickname={nickname} likes={likes} isLiked={isLiked} id={id}/>
                    <Step stepList={stepList}/>
                </section>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    isSignIn: state.signin.isSignIn,
    nickName: state.signin.nickName
})

export default connect(
    mapStateToProps
)(DetailContainer);