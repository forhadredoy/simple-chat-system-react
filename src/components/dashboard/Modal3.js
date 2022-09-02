import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Modal from 'react-modal';
import Click from './Click.module.css';

function Modal3({modalIsopen2,setModalISopen2}) {
    return (
        <div>
            <Modal isOpen={modalIsopen2} className={Click.intro3}>
    <div  className={Click.container3}>
        <form>
            
        </form>
       
        <FontAwesomeIcon icon ={faXmark}onClick={()=> setModalISopen2(false)} className={Click.font3}/>

    
    </div>

</Modal>
            
        </div>
    );
}

export default Modal3;