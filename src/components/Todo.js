import React, { useEffect, useState } from "react"
import '../components/Todo.css'
const Todo=()=>{
    const [inputData,setInputData]=useState("")
    const [items,setItems]=useState([{id:"",name:""}])
    const [toggleSubmit,setToggleSubmit]=useState(true)
    const [isEditItem,setIsEditItem]=useState(null)

    const addItem=()=>{
        if(inputData && !toggleSubmit){
            setItems(items.map((elem)=>{
                if(elem.id===isEditItem){
                    return ({...elem,name:inputData})
                }
                return elem

            }))
            setToggleSubmit(true)
            setInputData('')
            setIsEditItem(null)
        }

        else if (inputData){
            const allInputData={id:new Date().getTime().toString(),name:inputData}
        setItems([...items,allInputData])
        setInputData("")
        }
    }

    const deleteItem=(id)=>{
        const updatedItem=items.filter((elem)=>{
            return elem.id != id
        })
        setItems(updatedItem)
    }
const editItem=(id)=>{

    let newEditItem=items.find((elem)=>{

        return id==elem.id
    })
    // console.log(newEditItem)
    setToggleSubmit(false)
    setInputData(newEditItem.name)
    setIsEditItem(id)

}

    return (

        <>
            <div className="main-div">
                <div className="child-div">
                    <div className="additems">
                        <input placeholder="Add Your tasks here"
                        value={inputData}
                        onChange={(e)=>setInputData(e.target.value)}
                        />
                        {
                            toggleSubmit?<button 
                            onClick={addItem}
                            >Add Task</button>: <button className="delete-btn"
                            onClick={addItem}
                            >Save</button>
                        }

                        
                    </div>

                    <div className="showItems">
                        {items.map((elem)=>{
                        if(elem.id){
                            return(
                                <div className="eachItem" key={elem.id}>
                            <h3>{elem.name}</h3>
                            <button className="delete-btn"
                            onClick={()=>editItem(elem.id)}
                            >Edit</button>
                            <button className="delete-btn"
                            onClick={()=>deleteItem(elem.id)}
                            >Delete</button>
                           
                        </div>

                        )
                        }})}                        
                                            
                    </div>
                    
                </div>


            </div>

        </>
    )
}




export default Todo