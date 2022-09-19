import React from 'react'
import SingleContact from './SingleContact'

const AllContactsList = ({ contactsList }) => {
  return (
    <div className="container-fluid my-4">
            <h3 className="dispaly-3 text-left">Contacts List</h3>
            <div className="row">{
              contactsList.map(item => {
                return(
                <SingleContact item={item} key={item.id}/>
             ) 
            })
            }
            </div>
          </div>
  )
}

export default AllContactsList
