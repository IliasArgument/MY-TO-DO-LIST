import React from 'react';


export default class PostStatusFilter extends React.Component {
    constructor(props) {
       super(props);
       this.buttons = [
           {name: 'all', label: 'Все'},
           {name: 'like', label: 'Понравилось'}
       ];
    }
   render() {

       const buttons = this.buttons.map(({name, label}) => {
           const {filter, onFilterSelect} = this.props;
           //переменая хранит фильтр с именем
           const active = filter === name;
           // есди правда(фильтр указал это имя) добавим клас такой то
           const clazz = active ? 'btn-info' : 'btn-outline-secondary'
           
           return (
           <button type='button'
                   className={`btn ${clazz}`}
                   key={name}
                   onClick={() => onFilterSelect(name)}>
                   {label}</button>
           )
       });

       return (
           <div className="btn-group">
               {buttons}
           </div>
       )
   }
}