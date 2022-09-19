import React from 'react'

const NewContactform = (props) => {

  return (
    <div className="container-fluid">
        <div className="row">
            <h1 className="display-1">Contacts</h1>
        </div>

        <form onSubmit={props.onAdd}>
            <div className="row">
                <div className="col">
                    <input type="text" onChange={props.newNameHandler}  value={props.newName} className="form-control" placeholder="Enter name" aria-label="First name" />
                </div>
                <div className="col">
                    <input type="number" onChange={props.newNumberHandler} value={props.newNumber}  className="form-control" placeholder="Enter number" aria-label="Last name" />
                </div>
            </div>   
            <div className="row">
                <button 
                    className="btn btn-fluid btn-primary mt-4"
                    >
                    Save
                </button>
            </div>           
        </form>
    </div>
  )
}

export default NewContactform
