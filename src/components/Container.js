import React from 'react';
import Intro from './Intro';
import KeepActive from './KeepActive'
import TakeABreak from './TakeABreak'

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0
        };

        this.onIntroNext = this.onIntroNext.bind(this);
        this.onKeepActiveNext = this.onKeepActiveNext.bind(this);
    }

    onIntroNext() {
        this.setState({
            currentSlide: 1
        })
    }
    onKeepActiveNext() {
        this.setState({
            currentSlide: 2
        })
    }

    render() {
        return (
            <div className="main-container">
                {
                    this.state.currentSlide === 0 &&
                    <Intro onIntroNext={this.onIntroNext}/>
                }
                {
                    this.state.currentSlide === 1 &&
                    <KeepActive onKeepActiveNext={this.onKeepActiveNext}/>
                }
                {
                    this.state.currentSlide === 2 &&
                    <TakeABreak />
                }
            </div>
        )
    }
}

export default Container;