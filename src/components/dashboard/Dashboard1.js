import { faBars, faCirclePlus, faEllipsis, faHeart, faMessage, faPaperPlane, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import ishpa from '../img/ishpa.jpg';
import kodom from '../img/kodom.jpg';
import mithila from '../img/mithila.jpg';
import redoy from '../img/redoy.jpg';
import Dashboard from './Dashboard.module.css';



function Dashboard1() {
    const[text,setText] =useState('')
    const[text1,setText1] =useState('')
    const[text2,setText2] =useState('')
    const[text3,setText3] =useState('')
    const[text4,setText4] =useState('')
    const[text5,setText5] =useState('')
    const[text6,setText6] =useState('')

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const target = useRef(null) ;
    const target1 = useRef(null) ;
    const target2 = useRef(null) ;
    
    
   

    return (
        <div className={Dashboard.main}>
             <div className={Dashboard.intro}>

<div className={Dashboard.container}>

    <div className={Dashboard.content}>
        <img src={redoy}/>
        <FontAwesomeIcon className={Dashboard.font} icon={faCirclePlus} />
        <FontAwesomeIcon  className={Dashboard.font} icon={faMessage} />
        <FontAwesomeIcon className={Dashboard.font} icon={faBars} />
        
    </div>

    <div className={Dashboard.content1}>
        <div className={Dashboard.form} >
        <form>
      <input type="text" value={text}   placeholder="Search" onChange={(e)=>setText(e.target.value)}  />
        </form>
        </div>
        

        <div className={Dashboard.content2}>

            <div className={Dashboard.content3}  ref={target} onClick={() => setShow(true)}>
            <img src={ishpa}/>
                <div className={Dashboard.content4}>
                <h3>Forhad Redoy</h3>
                <p>hae valo achi</p>
                

                </div>
               
            
            </div>
          
         
           

            <div className={Dashboard.content3}  ref={target1} onClick={() => setShow1(true)}>
                <img src={kodom}/>
                <div className={Dashboard.content4}>
                <h3>Sufiyan Islam</h3>
                <p>ki obstha re?</p>

                </div>
               
               
            

            </div>

            <div className={Dashboard.content3}   ref={target2} onClick={() => setShow2(true)}>
                <img src={mithila}/>
                <div className={Dashboard.content4}>
                <h3>farida Khanom</h3>
                <p>hae thik thak</p>  

                </div>
               
              

            </div>


            



          </div> 


    </div>

  
</div>

<div  className={Dashboard.container1}>

   <h1>
    Welcome To Unic
   </h1> <FontAwesomeIcon icon ={faHeart} className={Dashboard.font3}/>
    

</div>


</div>

<div>
         <Overlay target={target.current} show={show}  placement="right" className={Dashboard.over}>
         {(props) => (
            
          <Tooltip id="overlay-example" className={Dashboard.tool} {...props}  >
          <div className={Dashboard.container5}>
             
              <img src={ishpa}/>
               <h3>Forhad Redoy</h3>
              <FontAwesomeIcon icon={faEllipsis}  className={Dashboard.font4}/>
              <FontAwesomeIcon icon ={faXmark} onClick={() => setShow(false)} className={Dashboard.font5}/>
              </div>

              <div className={Dashboard.container6}>

              </div>

              <div  className={Dashboard.container7}>
              <form>
              <input type="file" value ={text1}onChange={(e)=>setText1(e.target.value)} className={Dashboard.input6}/>
                    <input type="text"  placeholder='Type a message'  value={text2} onChange={(e)=>setText2(e.target.value)}  className={Dashboard.input7}/>
              </form>
              <FontAwesomeIcon icon={faPaperPlane} className={Dashboard.icon}/>
                
              </div>
          
        </Tooltip>

         )}
       
      </Overlay>
       
      
       </div>




<div className={Dashboard.modal1}>
<Overlay target={target1.current} show={show1}  placement="right" className={Dashboard.over}>
         {(props) => (
            
          <Tooltip id="overlay-example" className={Dashboard.tool} {...props}>
          <div className={Dashboard.container5}>
             
              <img src={kodom}/>
               <h3>Sufiyan Islam</h3>
              <FontAwesomeIcon icon={faEllipsis}  className={Dashboard.font4}/>
              <FontAwesomeIcon icon ={faXmark} onClick={() => setShow1(false)} className={Dashboard.font5}/>
              </div>

              <div className={Dashboard.container6}>

              </div>

              <div  className={Dashboard.container7}>
                <form>
                    <input type="file" value ={text3}onChange={(e)=>setText3(e.target.value)} className={Dashboard.input6}/>
                    <input type="text"  placeholder='Type a message'  value={text4} onChange={(e)=>setText4(e.target.value)}  className={Dashboard.input7}/>

                </form>
                <FontAwesomeIcon icon={faPaperPlane} className={Dashboard.icon}/>
                
              </div>
          
        </Tooltip>

         )}
       
      </Overlay>



</div>


<div>
<Overlay target={target2.current} show={show2}  placement="right" className={Dashboard.over}>
         {(props) => (
            
          <Tooltip id="overlay-example" className={Dashboard.tool} {...props}>
          <div className={Dashboard.container5}>
             
              <img src={mithila}/>
               <h3>farida Khanom</h3>
              <FontAwesomeIcon icon={faEllipsis}  className={Dashboard.font4}/>
              <FontAwesomeIcon icon ={faXmark} onClick={() => setShow2(false)} className={Dashboard.font5}/>
              </div>

              <div className={Dashboard.container6}>

              </div>

              <div  className={Dashboard.container7}>
          <form>
          <input type="file" value ={text5}onChange={(e)=>setText5(e.target.value)} className={Dashboard.input6}/>
             <input type="text" placeholder='Type a message' value={text6} onChange={(e)=>setText6(e.target.value)} className={Dashboard.input7}/>
          </form>
          <FontAwesomeIcon icon={faPaperPlane} className={Dashboard.icon}/>
                
              </div>
          
        </Tooltip>

         )}
       
      </Overlay>




   
</div>


        
        
      
        </div>
       
           
    );
}

export default Dashboard1;