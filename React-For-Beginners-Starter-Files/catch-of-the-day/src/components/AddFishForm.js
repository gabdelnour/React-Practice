import React from 'react'
import { Component } from 'react'

class AddFishForm extends Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    
    createFish = event => {
        event.preventDefault()
        const fish = {
            name:this.nameRef.current.value,
            price:parseFloat(this.priceRef.current.value),
            status:this.statusRef.current.value,
            desc:this.descRef.current.value,
            image:this.imageRef.current.value
        }
        this.props.addFish(fish)

        event.currentTarget.reset()
    }

    render() {
        return (
            <form className='fish-edit'onSubmit={this.createFish}>
            <input className='name' ref={this.nameRef} type='text' placeholder='name'/>
            <input className='price' ref={this.priceRef} type='text' placeholder='price'/>
            <select className='status' ref={this.statusRef}>
                <option value='available'>Fresh</option>
                <option value='unavailable'>Sold out!</option>
            </select>
            <textarea className='desc' ref={this.descRef} placeholder='desc'/>
            <input className='image' ref={this.imageRef} type='text' placeholder='image'/>
            <button type='submit'>+ Add a fish</button>
            </form>
        )
    }
}

export default AddFishForm