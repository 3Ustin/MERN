import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Main = (props) => {
    const [test, setTest] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [boxColors, setBoxColors] = useState([
        'yellow',
        'orange',
        'blue',
        'red',
        'black',
        'purple'
    ]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/tests')
            .then(res => {
                console.log(res.data.test) 
                setTest(res.data.test)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [test])

    const addBox = () =>{
        axios.post('http://localhost:8000/api/tests/new',
        {text:'alskjdf',number1:12,number2:23,number3:34,color:'blue'})
            .then(res => {
                console.log(res.data.test) 
                setTest([...test, res.data.test])
            })
    }

    // const changeColor = (e,i,box) => {
    //     let color = '';
    //     console.log(e);
    //     console.log(box);
    //     for(var i = 0; i < boxColors.length; i++){
    //         if(box.backgroundColor == boxColors[i]){
    //             box.backgroundColor = 'red';
    //         }
    //     }
    // }
    const helpMe = () => {
        console.log('test')
    }

    return(
        <div>
            <h1 onClick ={helpMe}>main Page here</h1>
            <button onClick={helpMe}/>Test
            <button className ="button" onClick={addBox}>add box</button>
            <div className ='boxes'>
                {
                //loaded ? test.map((item,i) => <h1 key={i}>{item.color}</h1>):true
                loaded && test.map((item,i) => <button key={i} 
                className='box' 
                style ={{backgroundColor:item.color}} 
                onmousedown = {() =>console.log('here')}></button>)
                }
            </div>
        </div>
    );
}
export default Main