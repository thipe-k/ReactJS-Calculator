export default class CalculatorOperator{
   constructor()
   {
      this.expression = [];
      this.oparators = [];
   }

   backspace()
   {
      this.oparators.pop();
      this.expression.pop();
      return this.expression.join('');
   }
   
   addValue(val)
   {
      // this method adds/appends a value to the expression, it does not allow zero to start an expression
      if(!(this.expression.length === 0 && val === 0))
      {
         if(!this.expression.length === 0)
               val = val + '' + this.expression[this.expression.length-1]
         this.expression.push(val)
      }
      return this.expression.join('');
   }
   addOperator(op)
   {
      //this method adds a methematical operator to an expression, does not allow  operators ( + * /) to start an expression
      if(this.expression.length === 0 && op === ' - ')
      {
         this.oparators.push([op,this.expression.length]);
         this.expression.push(op);
      }
      else{

         if(this.expression.length > 0)
         {
            if(this.oparators.length === 0)
            {
               this.oparators.push([op,this.expression.length]);
               this.expression.push(op);
            }
            else
            {
               let obj = this.oparators[this.oparators.length-1];
               console.log( 'last operator : '+obj + 'and op is :'+ op);
               if( obj[1] === (this.expression.length - 1))
                  {
                        if((obj[0] === ' * ' || obj[0] ===' / ') && op === ' - ')
                        {
                           this.oparators.push([op,this.expression.length]);
                           this.expression.push(op);
                        }
                        else{
                           this.backspace();
                           this.addOperator(op);
                        }
                  }
                  else{
                     this.oparators.push([op,this.expression.length]);
                     this.expression.push(op);
                  }
            }
         }
      }
      return this.expression.join('');   
   }

   orderOperators()
   {
      //BODMAS
      for (let i = 0; i < this.oparators.length; i++) {
         let upperOP = 0;
         switch(this.oparators[i][0])
         {
            case ' / ':
               upperOP = 4;
               break;
            case ' * ':
               upperOP = 3;
               break;
            case ' + ':
               upperOP = 2;
               break;
            case ' - ':
               upperOP = 1;
               break;
         }
         for (let j = 0; j < this.oparators.length -1; j++) {
            let lowerOP = 0;
               switch(this.oparators[j][0])
               {
                  case ' / ':
                     lowerOP = 4;
                     break;
                  case ' * ':
                     lowerOP = 3;
                     break;
                  case ' + ':
                     lowerOP = 2;
                     break;
                  case ' - ':
                     lowerOP = 1
                     break;
               }
               if(upperOP > lowerOP)
               {
                  let tempOP = this.oparators[j];
                  this.oparators[j] = this.oparators[i];
                  this.oparators[i] = tempOP;
               }
            
         }
         
      }

   }

   calculate()
   {
      this.orderOperators();
      console.log(this.oparators);
   }

}