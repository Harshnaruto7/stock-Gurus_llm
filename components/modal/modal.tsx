"use client"
import React from "react";
import Form from "../form/form";



export default function Modal(){

    const openModal = () => {
        const modal = document.getElementById('my_modal');
        if (modal) {
          (modal as HTMLDialogElement).showModal();
        }
      };



return(
    <>
     {/* Button to open the modal */}
     <button className="btn  btn-sm" onClick={openModal}>
        Contact Us
      </button>

      {/* Modal element */}
      <dialog id="my_modal" className="modal modal-bottom sm:modal-middle text-black">
        <div className="modal-box">
         <Form/>
          <div className="modal-action">
            {/* Close button */}
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      
    
    
    
    
    
    
    
    
    
    
    
    
    </>

);










}



























