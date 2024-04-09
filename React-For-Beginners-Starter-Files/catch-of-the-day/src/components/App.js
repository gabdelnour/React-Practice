import React from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'


class App extends React.Component {

    state = {
        fishes: {},
        order: {}
    }

    addFish = (fish) => {
        // 1. Take a copy of the existing State
        const fishes = {...this.state.fishes};
        // 2. Add our new fish to the fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({ fishes })
    }

    loadSampleFish = () => {
        this.setState({fishes : sampleFishes})
    }

    render() {
        return (
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline='Fresh Food Market'/>
                    <ul>
                    {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]}/>)}
                    </ul>
                </div>
                <Order/>
                <Inventory 
                    addFish={this.addFish} 
                    loadSampleFish={this.loadSampleFish}
                />
            </div>
        )
    }
}

export default App;