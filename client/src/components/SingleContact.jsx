import React from 'react'

const SingleContact = ({ item }) => {
  return (
    <ul className="list-group">
        <li className="list-group-item d-flex align-items-start list-group-item-action">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{item.name}</div>
                <div>{item.number}</div>
            </div>
        </li>  
    </ul>
  )
}

export default SingleContact
