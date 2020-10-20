module.exports = function reverse (n) {    
    let a = n.toString();  
    let b = a.split('');  
    let c = b.reverse();
    
    if ((c[c.length - 1]) === '-'){
      c.pop();        
      let d = c.join('');  
      return +d;
    } else if (c[0] === '0'){
      c.shift();
      return +c.join('');
    } return +c.join(''); 
    
  }
