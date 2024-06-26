import { Component } from 'react'
import AddFishForm from './AddFishForm'

class Inventory extends Component {


    render() {
        return (
            <div className="inventory">
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSampleFish}> Load Fish</button>
            </div>
        )
    }
}

export default Inventory