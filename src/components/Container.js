import React from 'react';
import Intro from './Intro';
import KeepActive from './KeepActive';
import TakeABreak from './TakeABreak';
import SleepIsImportant from './SleepIsImportant';
import ShareHowYouFeel from './ShareHowYouFeel';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0
        };

        this.onIntroNext = this.onIntroNext.bind(this);
        this.onKeepActiveNext = this.onKeepActiveNext.bind(this);
        this.onTakeABreakNext = this.onTakeABreakNext.bind(this);
        this.onSleepIsImportantNext = this.onSleepIsImportantNext.bind(this)
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

    onTakeABreakNext() {
        this.setState({
            currentSlide: 3
        })
    }

    onSleepIsImportantNext() {
        this.setState({
            currentSlide: 4
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
                    <TakeABreak onTakeABreakNext={this.onTakeABreakNext} />
                }
                {
                    this.state.currentSlide === 3 &&
                    <SleepIsImportant onSleepIsImportantNext={this.onSleepIsImportantNext} />
                }
                {
                    this.state.currentSlide === 4 &&
                    <ShareHowYouFeel />
                }
            </div>
        )
    }
}

export default Container;