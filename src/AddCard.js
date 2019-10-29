import React from 'react'
import {addCard} from './store'
import {connect} from 'react-redux'

const initialState = {
    title: 'Card title',
    details: 'Add some details...',
    section: 'toDo'
}

class AddCard extends React.Component {
    constructor(props) {
        super()
        this.state = initialState
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        const id = Date.now()
        const card = {id, title: this.state.title, details: this.state.details}
        this.props.add(card, this.state.section)
        this.setState({...initialState})
    }

    render() {
        return (
            <form id='addCard' onSubmit={this.handleSubmit}>
                <input type='text' name='title' onChange={this.handleChange} value={this.state.title}/>
                <textarea form='addCard' name='details' onChange={this.handleChange} value={this.state.details}/>
                <select name='section' value={this.state.section} onChange={this.handleChange}>
                    <option value='toDo'>To Do</option>
                    <option value='doing'>Doing</option>
                    <option value='done'>Done</option>
                </select>
                <button type='submit'>Add card</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    add: (card, section) => dispatch(addCard(card, section))
})

export default connect(null, mapDispatchToProps)(AddCard)