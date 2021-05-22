import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Main = (props) => {
    const [test, setTest] = useState([]);
    const [testArr, setTestArr] = useState([]);
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

    const changeColor = (element,obj) => {
        let color = '';
        console.log(obj);
        for(var i = 0; i < boxColors.length; i++){
            if(element.target.style.backgroundColor == boxColors[i]){
                if(i == boxColors.length - 1){
                    axios.put(`http://localhost:8000/api/tests/update/${obj._id}`,
                    {color:boxColors[0]})
                        .then(res => {
                            console.log(res.data.test) 
                            setTest([...test])
                        })
                    break;
                }
                else{
                    axios.put(`http://localhost:8000/api/tests/update/${obj._id}`,
                    {color:boxColors[i+1]})
                        .then(res => {
                            console.log(res.data.test) 
                        })
                        break;
                }
            }
        }
    }


    const helpMe = () => {
        console.log('test')
    }

    return(
        <div>
            <h1 onClick ={helpMe}>main Page here</h1>
            <button className="button" onClick={helpMe}>Test</button>
            <div className ='boxes'>
            <button className ="button" onClick={addBox}>add box</button>
                {

                loaded && test.map((item,i) => <button key={i} 
                className='box' 
                style ={{backgroundColor:item.color}} 
                onClick = {(element) => changeColor(element,item)}></button>)
                }
            </div>
        </div>
    );
}
export default Main