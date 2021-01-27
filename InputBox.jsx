import { Component  } from 'react';

class InputBox extends Component{
   render()
   {
      return (
         <input type="text" onChange={this.props.onChange} value={this.props.value} className={this.props.class}/>
      );
   }
}

export default InputBox;