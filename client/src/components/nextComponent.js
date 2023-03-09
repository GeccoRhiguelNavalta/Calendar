import {format} from 'date-fns'

export default function Next({one}) {
  

  return (
    <div className='Next' >
    <div className="nextevent">NEXT EVENT</div>
    {one.map((item) => {

      return(
      <div key={item._id} className='firstItem'>
        <div className='date'>{format(new Date(item.date), 'do MMM')} </div>
        <div className='title'>{item.title} </div>
        <div className='fulldate'>{format(new Date(item.date), 'hh:mm aaa - MMMM do, yyyy')} </div>
        <div className='venue'>{item.venue} </div>
      </div>
      )
    })}
    </div>
  );
}
