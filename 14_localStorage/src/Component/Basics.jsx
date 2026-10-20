import React from 'react'

const Basics = () => {

    localStorage.setItem('user', 'Dhananjay');       // ('key', 'Value')

    const user = localStorage.getItem('user');      // ('key')
    console.log(user);

    localStorage.setItem('age', '18');

    const age = localStorage.getItem('age');
    console.log(age);

    // localStorage.removeItem('age')
    // localStorage.clear()
    
    
    const userarr = {
        user: 'Dhananjay Sinha',
        age: 18,
        city: 'Bhilai'
    }

    console.log(userarr);

    localStorage.setItem('user2', JSON.stringify(userarr));
    const user2 = JSON.parse(localStorage.getItem('user2'));
    console.log(typeof(user2));
    
    localStorage.clear()
    
    


  return (
    <div>
        Hello in Local Storage
    </div>
  )
}

export default Basics