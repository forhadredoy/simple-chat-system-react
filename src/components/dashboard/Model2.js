import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Modal from 'react-modal';
import Click from './Click.module.css';



function Modal2({modalIsopen1,setModalISopen1}) {
    return (
       
            <Modal isOpen={modalIsopen1} className={Click.intro2}>
    <div  className={Click.container2}>
        <form>
            
        </form>
       
        <FontAwesomeIcon icon ={faXmark}onClick={()=> setModalISopen1(false)} className={Click.font2}/>

    
    </div>

</Modal>
            
        
    );
}

export default Modal2;