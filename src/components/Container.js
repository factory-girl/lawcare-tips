import React from 'react';
import Intro from './Intro';
import KeepActive from './KeepActive';
import TakeABreak from './TakeABreak';
import SleepIsImportant from './SleepIsImportant';
import ShareHowYouFeel from './ShareHowYouFeel';
import EatWell from './EatWell';
import DrinkInModeration from './DrinkInModeration';
import KeepInTouch from './KeepInTouch';
import GiveBack from './GiveBack';
import BeMindful from './BeMindful';
import AskForHelp from './AskForHelp';
import Contact from './Contact'

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0
        };

        this.onIntroNext = this.onIntroNext.bind(this);
        this.onKeepActiveNext = this.onKeepActiveNext.bind(this);
        this.onTakeABreakNext = this.onTakeABreakNext.bind(this);
        this.onSleepIsImportantNext = this.onSleepIsImportantNext.bind(this);
        this.onShareHowYouFeelNext = this.onShareHowYouFeelNext.bind(this);
        this.onEatWellNext = this.onEatWellNext.bind(this);
        this.onDrinkInModerationNext = this.onDrinkInModerationNext.bind(this);
        this.onKeepInTouchNext = this.onKeepInTouchNext.bind(this);
        this.onGiveBackNext = this.onGiveBackNext.bind(this);
        this.onBeMindfulNext = this.onBeMindfulNext.bind(this);
        this.onAskForHelpNext = this.onAskForHelpNext.bind(this);
        this.onContactNext = this.onContactNext.bind(this);

        this.onIntroPrev = this.onIntroPrev.bind(this);
        this.onKeepActivePrev = this.onKeepActivePrev.bind(this);
        this.onTakeABreakPrev = this.onTakeABreakPrev.bind(this);
        this.onSleepIsImportantPrev = this.onSleepIsImportantPrev.bind(this);
        this.onShareHowYouFeelPrev = this.onShareHowYouFeelPrev.bind(this);
        this.onEatWellPrev = this.onEatWellPrev.bind(this);
        this.onDrinkInModerationPrev = this.onDrinkInModerationPrev.bind(this);
        this.onKeepInTouchPrev = this.onKeepInTouchPrev.bind(this);
        this.onGiveBackPrev = this.onGiveBackPrev.bind(this);
        this.onBeMindfulPrev = this.onBeMindfulPrev.bind(this);
        this.onAskForHelpPrev = this.onAskForHelpPrev.bind(this);
    }

    onIntroNext() {
        this.setState({
            currentSlide: 1
        })
    }

    onIntroPrev() {
        this.setState({
            currentSlide: 11
        })
    }

    onKeepActiveNext() {
        this.setState({
            currentSlide: 2
        })
    }

    onKeepActivePrev() {
        this.setState({
            currentSlide: 0
        })
    }

    onTakeABreakNext() {
        this.setState({
            currentSlide: 3
        })
    }

    onTakeABreakPrev() {
        this.setState({
            currentSlide: 1
        })
    }

    onSleepIsImportantNext() {
        this.setState({
            currentSlide: 4
        })
    }

    onSleepIsImportantPrev() {
        this.setState({
            currentSlide: 2
        })
    }

    onShareHowYouFeelNext() {
        this.setState({
            currentSlide: 5
        })
    }

    onShareHowYouFeelPrev() {
        this.setState({
            currentSlide: 3
        })
    }

    onEatWellNext() {
        this.setState({
            currentSlide: 6
        })
    }

    onEatWellPrev() {
        this.setState({
            currentSlide: 4
        })
    }

    onDrinkInModerationNext() {
        this.setState({
            currentSlide: 7
        })
    }

    onDrinkInModerationPrev() {
        this.setState({
            currentSlide: 5
        })
    }

    onKeepInTouchNext() {
        this.setState({
            currentSlide: 8
        })
    }

    onKeepInTouchPrev() {
        this.setState({
            currentSlide: 6
        })
    }

    onGiveBackNext() {
        this.setState({
            currentSlide: 9
        })
    }

    onGiveBackPrev() {
        this.setState({
            currentSlide: 7
        })
    }

    onBeMindfulNext() {
        this.setState({
            currentSlide: 10
        })
    }

    onBeMindfulPrev() {
        this.setState({
            currentSlide: 8
        })
    }

    onAskForHelpNext() {
        this.setState({
            currentSlide: 11
        })
    }

    onAskForHelpPrev() {
        this.setState({
            currentSlide: 9
        })
    }

    onContactNext() {
        this.setState({
            currentSlide: 0
        })
    }

    render() {
        return (
            <div className="main-container">
                {
                    this.state.currentSlide === 0 &&
                    <Intro onIntroNext={this.onIntroNext}
                           onIntroPrev={this.onIntroPrev}/>
                }
                {
                    this.state.currentSlide === 1 &&
                    <KeepActive onKeepActiveNext={this.onKeepActiveNext}
                                onKeepActivePrev={this.onKeepActivePrev}/>
                }
                {
                    this.state.currentSlide === 2 &&
                    <TakeABreak onTakeABreakNext={this.onTakeABreakNext}
                                onTakeABreakPrev={this.onTakeABreakPrev}/>
                }
                {
                    this.state.currentSlide === 3 &&
                    <SleepIsImportant onSleepIsImportantNext={this.onSleepIsImportantNext}
                                      onSleepIsImportantPrev={this.onSleepIsImportantPrev}/>
                }
                {
                    this.state.currentSlide === 4 &&
                    <ShareHowYouFeel onShareHowYouFeelNext={this.onShareHowYouFeelNext}
                                     onShareHowYouFeelPrev={this.onShareHowYouFeelPrev}/>
                }
                {
                    this.state.currentSlide === 5 &&
                    <EatWell onEatWellNext={this.onEatWellNext}
                             onEatWellPrev={this.onEatWellPrev}/>
                }
                {
                    this.state.currentSlide === 6 &&
                    <DrinkInModeration onDrinkInModerationNext={this.onDrinkInModerationNext}
                                       onDrinkInModerationPrev={this.onDrinkInModerationPrev}/>
                }
                {
                    this.state.currentSlide === 7 &&
                    <KeepInTouch onKeepInTouchNext={this.onKeepInTouchNext}
                                 onKeepInTouchPrev={this.onKeepInTouchPrev}/>
                }
                {
                    this.state.currentSlide === 8 &&
                    <GiveBack onGiveBackNext={this.onGiveBackNext}
                              onGiveBackPrev={this.onGiveBackPrev}/>
                }
                {
                    this.state.currentSlide === 9 &&
                    <BeMindful onBeMindfulNext={this.onBeMindfulNext}
                               onBeMindfulPrev={this.onBeMindfulPrev}/>
                }
                {
                    this.state.currentSlide === 10 &&
                    <AskForHelp onAskForHelpNext={this.onAskForHelpNext}
                                onAskForHelpPrev={this.onAskForHelpPrev}/>
                }
                {
                    this.state.currentSlide === 11 &&
                    <Contact onContactNext={this.onContactNext}/>
                }
            </div>
        )
    }
}

export default Container;