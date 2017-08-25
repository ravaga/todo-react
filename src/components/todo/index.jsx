import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/todo';
import './todo.scss';


class TODO extends React.Component {
    componentWillMount() {
        this.props.getList();
    }

    constructor(props) {
        super(props);
    }

    _onKeyPressHandler(e) {
        if (e.key === 'Enter') {
            this.props.add(e.target.value);
            e.target.value = '';
        }
    }

    _delItemHandler(index) {
        this.props.remove(index);
    }

    render() {
        const { list } = this.props;

        return (
            <div className="todo">
                <h2>TODO List</h2>
                <div>
                    <input type="text" placeholder="Tarea" onKeyPress={this._onKeyPressHandler.bind(this)} />
                </div>
                <ul>
                    {list.map((item, index) => <li key={index}><span>{index + 1}</span> {item} <a onClick={this._delItemHandler.bind(this, index)}>x</a></li>)}
                </ul>
            </div>
        )
    }
}

/**
 * Mapear Estados a propiedades
 * @param {*} state
 */
const mapStateToProps = (state) => {
    return {
        list: state.todo.list
    };
};
/**
 * Conectar acciones con componente.
 */
export default connect(mapStateToProps, actions)(TODO);