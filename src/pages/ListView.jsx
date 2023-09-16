import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate';

const ListView = ({openModel}) => {
  const store = useSelector(store=>store)
  const [itemOffset, setItemOffset] = useState(0);
const itemsPerPage = 10;
const endOfset = itemOffset + itemsPerPage;
const currentItems = store?.flights.slice(itemOffset,endOfset)
const totalItems = store?.flights.length;

const pageCount =Math.ceil(totalItems/itemsPerPage);

const handlePageClick=(event)=>{
  const newOffset = (event.selected * itemsPerPage) % totalItems;

  setItemOffset(newOffset);


}
  return (
    <div className='list-page'>
      <table className=' table  table-dark  table-striped  table-hover '>
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
          </tr>
        </thead>
        <tbody>{currentItems.map((flight)=>(
           <tr>
           <td>{flight.id}</td>
           <td>{flight.code}</td>
           <td>{flight.lat}</td>
           <td>{flight.lng}</td>
           <td>
             <button onClick={()=>openModel(flight.id)}>Detay</button>
           </td>
         </tr>
        ))}</tbody>
      </table>
      <ReactPaginate
       pageCount={pageCount}
       nextLabel='Ileri >'
       previousLabel='< Geri'
       className='pagination'
       activeClassName='active'
       pageRangeDisplayed={1}
       onPageChange={handlePageClick}
       />
    </div>
  )
}

export default ListView