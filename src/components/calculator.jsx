import React, { Component } from 'react';
import './calculator.css';

function keyClick(e,a){
    if(document.getElementById('process').innerHTML==0){document.getElementById('process').innerHTML=a;}
    else{document.getElementById('process').innerHTML+=a;
    e.target.style="scale:95%;";setTimeout(()=>{e.target.style="scale:100%"},100)}}

function load(){
    let h = 0;
    const i = setInterval(Load,0.001);
    
    function Load(){
        
        if(h>350){
            clearInterval(i);
            
            
        }else{
            document.getElementById('outputDisplay').style.height=h + 'px';
            h+=12;
        }
    }
}

class Calculator extends Component {
    state = {  } 
    render() { 
        return (
            <div className='relative z-10'>
                <div className=' calc flex flex-col rounded-md shadow-xl w-80 mx-auto  border-2 border-r-8 border-b-8 z-10'>
                    <div className='rounded-t-md bg-black text-yellow p-2 font-myFirstFont text-lg flex flex-row'><div className="grow align-middle"><b>C a l c u l a t o r</b></div><div className='  key hover:scale-105 text-white border-white  px-2 border border-b-4 border-r-4' onClick={(e)=>{document.getElementById('process').innerHTML=0;document.getElementById('output').innerHTML=0;e.target.style="scale:95%;";setTimeout(()=>{e.target.style="scale:100%"},100);if(e.target.innerHTML==='Start'){e.target.innerHTML='Clear'; document.getElementById('outputDisplay').style="display:block;height:0px";load()}}}>Start</div></div>
                    <div id='outputDisplay'>
                    <div  className=' h-20 border-b relative bg-white'><label id="process" className='font-myFirstFont text-lg absolute top-0 right-0 mx-2 text-gray-400'>0</label><label id='output' className='absolute bottom-0 right-0 mx-2'>{0}</label></div>
                    <div className='grid grid-cols-4 justify-items-center rounded-b-md text-white p-2 bg-black'>
                        <div class='key 7 hover:scale-105 m-2 border-white border w-12 h-12 rounded-lg text-center border-b-4 border-r-4'onClick={(e)=>{keyClick(e,7)}}>7</div>
                        <div class='key 8 hover:scale-105 m-2 border-white border w-12 h-12 rounded-lg text-center border-b-4 border-r-4'onClick={(e)=>{keyClick(e,8)}}>8</div>
                        <div class='key 9 hover:scale-105 m-2 border-white border w-12 h-12 rounded-lg text-center border-b-4 border-r-4'onClick={(e)=>{keyClick(e,9)}}>9</div>
                        <div class='key / hover:scale-105 m-2 border-white border w-12 h-12 rounded-lg text-center border-b-4 border-r-4'onClick={(e)=>{keyClick(e,'/')}}>/</div>
                        
                        <div class='key 4 hover:scale-105 m-2 border-white border w-12 h-12 rounded-lg text-center border-b-4 border-r-4'onClick={(e)=>{keyClick(e,4)}}>4</div>
                        <div class='key 5 hover:scale-105 m-2 border-white border w-12 h-12 rounded-lg text-center border-b-4 border-r-4'onClick={(e)=>{keyClick(e,5)}}>5</div>
                        <div class='key 6 hover:scale-105 m-2 border-white border w-12 h-12 rounded-lg text-center border-b-4 border-r-4'onClick={(e)=>{keyClick(e,6)}}>6</div>
                        <div class='key * hover:scale-105 m-2 border-white border w-12 h-12 rounded-lg text-center border-b-4 border-r-4'onClick={(e)=>{keyClick(e,'*')}}>*</div>

                        <div class='key 1 hover:scale-105 m-2 border-white border w-12 h-12 rounded-lg text-center border-b-4 border-r-4'onClick={(e)=>{keyClick(e,1)}}>1</div>
                        <div class='key 2 hover:scale-105 m-2 border-white border w-12 h-12 rounded-lg text-center border-b-4 border-r-4'onClick={(e)=>{keyClick(e,2)}}>2</div>
                        <div class='key 3 hover:scale-105 m-2 border-white border w-12 h-12 rounded-lg text-center border-b-4 border-r-4'onClick={(e)=>{keyClick(e,3)}}>3</div>
                        <div class='key - hover:scale-105 m-2 border-white border w-12 h-12 rounded-lg text-center border-b-4 border-r-4'onClick={(e)=>{keyClick(e,'-')}}>-</div>

                        <div class='key 0 hover:scale-105 m-2 border-white border w-12 h-12 rounded-lg text-center border-b-4 border-r-4'onClick={(e)=>{keyClick(e,0)}}>0</div>
                        <div class='key . hover:scale-105 m-2 border-white border w-12 h-12 rounded-lg text-center border-b-4 border-r-4'onClick={(e)=>{keyClick(e,'.')}}>.</div>
                        <div class='key = hover:scale-105 m-2 border-white border w-12 h-12 rounded-lg text-center border-b-4 border-r-4'onClick={(e)=>{document.getElementById('output').innerHTML=(eval(document.getElementById('process').innerHTML))}}>=</div>
                        <div class='key + hover:scale-105 m-2 border-white border w-12 h-12 rounded-lg text-center border-b-4 border-r-4'onClick={(e)=>{keyClick(e,'+')}}>+</div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Calculator;