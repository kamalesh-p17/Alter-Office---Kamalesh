import React from 'react'
import './card.css'

const card = () => {
  return (
    <div className="card">
        <div className="titlebar">
            <h2 className="title">Ind vs eng Test Series</h2>
            <button className="btn">Edit</button>
        </div>
        <p>Type : Sports</p>

        <h3>Inventories & Project Owner</h3>
        <ul>
            <li>
                <div>
                    <h4>OTT</h4>
                    <p>Owner : John Smith</p>
                </div>
            </li>
        </ul>

    </div>
  )
}

export default card