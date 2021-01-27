import React from 'react';
import Button from './Button';
import InputBox from './InputBox';
import  './calculator.css'
import CalculatorOperator from './CalculatorOperator';

class Calculator extends React.Component
{
   constructor (props)
   {
      super(props);
      this.state = {value: '' , operator: new CalculatorOperator()}
      this.addValue = this.addValue.bind(this);
      this.clear = this.clear.bind(this);
      this.addOperator = this.addOperator.bind(this);
      this.backSpace = this.backSpace.bind(this);
      this.calculate = this.calculate.bind(this);
   }

   render()
   {
      return(        
            <div className='col'>
               <div className='row'>
                  <div className='screen' >
                     <InputBox class='input' />
                     <InputBox class='input' value={this.state.value} />
                  </div>
               </div>

               <div className='row'>
                     <Button value='1' onClick={this.addValue.bind(this,1)} class='button'/>
                     <Button value='2' onClick={this.addValue.bind(this,2)} class='button'/>
                     <Button value='3' onClick={this.addValue.bind(this,3)} class='button'/>
                     <Button value='-'  onClick={this.addOperator.bind(this,' - ')} class='button'/>
      
                     <Button value='4' onClick={this.addValue.bind(this,4)} class='button'/>
                     <Button value='5' onClick={this.addValue.bind(this,5)} class='button'/>
                     <Button value='6' onClick={this.addValue.bind(this,6)} class='button'/>
                     <Button value='+'  onClick={this.addOperator.bind(this,' + ')} class='button'/>
      
      
                     <Button value='7' onClick={this.addValue.bind(this,7)} class='button'/>
                     <Button value='8' onClick={this.addValue.bind(this,8)} class='button'/>
                     <Button value='9' onClick={this.addValue.bind(this,9)} class='button'/>
                     <Button value='/' onClick={this.addOperator.bind(this,' / ')}  class='button'/>
      
                     <Button value='0' onClick={this.addValue.bind(this,0)} class='button'/>
                     <Button value='CE'  onClick={this.backSpace}class='button'/>
                     <Button value='AC' onClick={this.clear}  class='button'/>
                     <Button value='*' onClick={this.addOperator.bind(this,' * ')} class='button'/>              
               </div>
               <div className='row'>
                     <div className='col6'>

                     </div>
                     <Button class='col6 equalTo' value='=' onClick={this.calculate}/>
               </div>
            </div>        
      );
   }

   
   addValue(num)
   {
         let val = this.state.operator.addValue(num);
         this.setState({value:val});
    
   }
   backSpace()
   {
      let val = this.state.operator.backspace();
      this.setState({value:val});
   }
   clear()
   {
      this.setState({value: '' , operator: new CalculatorOperator()});
   }
   addOperator(op)
   {
      let val = this.state.operator.addOperator(op);
      this.setState({value:val});
   }
   calculate()
   {
      this.state.operator.calculate();
   }
}
export default Calculator;
