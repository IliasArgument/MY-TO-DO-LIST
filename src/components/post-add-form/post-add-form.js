import React from 'react';
import './post-add.css'

export default class PostAddForm extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        text: ''
    };
}
onValueChange = (e) => {
    this.setState({
        text: e.target.value
    });
}
onSubmit = (e) => {
    e.preventDefault();
    //заносим пропс нашей ф-и для использования
    this.props.onAdd(this.state.text);
    this.setState({
        text: ''
    });
}
render(){
    return (
        <form 
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit}
        >
            <input
              type="text"
              placeholder="О чем вы думаете сейчас?"
              className="form-control new-post-label"
              onChange={this.onValueChange}
              value={this.state.text}
            />
            <button 
            className="btn btn-outline-secondary"
            type="submit">
                Добавить
            </button>
        </form>
    )
 }
}
