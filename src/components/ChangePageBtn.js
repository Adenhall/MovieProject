import React from 'react'
import Button from 'react-bootstrap/Button'

export default function ChangePageBtn(props) {
    return (
        <div className="d-flex justify-content-around change-page-button">
           <Button className="previous-page" disabled ={props.prePageBtn} variant="primary" onClick={()=>{props.setPage('back')}}>Previous Page</Button>{' '} 
           <h3>{props.pageNumber}</h3>
           <Button className="next-page" disabled ={props.nextPageBtn} variant="primary" onClick={()=>{props.setPage('forward')}}>Next Page</Button>{' '}
        </div>
    )
}
