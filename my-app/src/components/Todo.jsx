import React, { useState } from "react";
 
const Todo = () => {
 const [showForm, setshowform] = useState(true);
 const [showNew, setshowNew] = useState(true);
 const [showDelete, setshowDelete] = useState(true);
 const [toggleSubmit, settoggleSubmit] = useState(true);
 const [isEditItem, setisEditItem] = useState(null);
 const [showList, setshowList] = useState(true);
 const [editMessage, seteditMessage] = useState(false);
 const [deleteMessage, setdeleteMessage] = useState(false);
 const [deleteMessagesuccess, setdeleteMessagesuccess] = useState(false);
 const [inputTitle, setinputTitle] = useState("");
 const [inputDesc, setinputDesc] = useState("");
 const [items, setitems] = useState([
   {
     id: "001",
     name: "Default Task",
     desc: "Default Description",
     status: false,
   },
 ]);
 
 const handleInput = (e) => {
   setinputTitle(e.target.value);
 };
 const handleInputdesc = (e) => {
   setinputDesc(e.target.value);
 };
 const handleClick = event => {
    if (event.target.style.textDecoraction) {
        event.target.style.removeProperty('text-decoration');
    } else {
        event.target.style.setProperty('text-decoration', 'line-through')
    }
 }
 const handleSubmit = (e) => {
   setshowList(true);
   setshowNew(true);
 
   e.preventDefault();
   if (!inputTitle || !inputDesc) {
     alert("you have to fill in the data!!");
   } else if (inputTitle && !toggleSubmit) {
     setitems(
       items.map((elem) => {
         if (elem.id === isEditItem) {
           return { ...elem, name: inputTitle, desc: inputDesc };
         }
         return elem;
       })
     );
 
     setinputTitle("");
     setinputDesc("");
     settoggleSubmit(true);
     setshowform(false);
     setshowDelete(true);
   } else {
     const allinputTitle = {
       id: new Date().getTime().toString(),
       name: inputTitle,
       desc: inputDesc,
     };
     setitems([allinputTitle, ...items]);
     setinputTitle("");
     setinputDesc("");
     setshowform(false);
   }
 };

 const handleDelete = (index) => {
   console.log(index);
   const updatedItems = items.filter((elem) => {
     return index !== elem.id;
   });
   setdeleteMessage(true);
 
   setTimeout(() => {
     setitems(updatedItems);
     setdeleteMessage(false);
   }, 2000);
   setdeleteMessagesuccess(false);
 };

 const handleEdit = (id) => {
   setshowList(false);
   setshowDelete(false);
   setshowNew(false);
   setshowform(true);
 
   settoggleSubmit(false);
   let newEditItem = items.find((elem) => {
     return elem.id === id;
   });
   setinputTitle(newEditItem.name);
   setinputDesc(newEditItem.desc);
 
   setisEditItem(id);
   console.log(newEditItem);
 };

 const handleAdd = () => {
   setshowform(true);
   setshowList(true);
   setshowNew(false);
 };
 return (
   <>
     {showNew ? (
       <div>
         <div>
           <button onClick={handleAdd}>
             Create new task!
           </button>
         </div>
       </div>
     ) : (
       ""
     )}
 
     {showForm ? (
       <>
         <div>
           <div>
             <div>
               <h2>{toggleSubmit ? "Add Task" : " Edit Task"}</h2>
             </div>
             <form onSubmit={handleSubmit}>
               <label>Enter Title</label>
               <input
                 type="text"
                 name="title"
                 id="title"
                 placeholder="title"
                 onChange={handleInput}
                 value={inputTitle}
               />
               <br />
               <label>Description!</label>
               <input
                 type="text"
                 name="description"
                 id="description"
                 placeholder="Description"
                 onChange={handleInputdesc}
                 value={inputDesc}
               />
               <br />
               {toggleSubmit ? (
                 <button>Save</button>
               ) : (
                 <button>Update</button>
               )}
             </form>
           </div>
         </div>
       </>
     ) : (
       ""
     )}
 
     {showList ? (
       <div>
         {deleteMessage ? (
           <p >Item Deleted Successfully</p>
         ) : (
           ""
         )}
         {items.map((elem) => {
           return (
             <div key={elem.id}>
               <div>
                 <div id="wrapper">
                   <h4>{elem.name}</h4>
                   <p>{elem.desc}</p>
                 </div>
                   <button onClick={() => handleEdit(elem.id)}>
                     Edit
                   </button>
                   {showDelete ? (
                     <button onClick={() => handleDelete(elem.id)}>
                       Delete
                     </button>
                   ) : (
                     ""
                   )}
                   <br/>
                   <label>finished task!</label>
                   <input type="checkbox" />
                 </div>
               </div>
            
           );
         })}
       </div>
     ) : (
       ""
     )}
   </>
 );
};
 
export default Todo;