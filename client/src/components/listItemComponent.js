import {format} from 'date-fns'

export default function ListItem({ rest }) {
  return (
    <div className="rest">
      {rest.map((post) => {
        return (
          <div key={post._id} className="ListItem"> 
          <div className="left-wrapper">
            <div className="left-date">{format(new Date(post.date), 'do MMM')} </div>
          </div>
          <div className="right-wrapper">
            <div className="resttitle">{post.title} </div>
            <div className="restfulldate">{format(new Date(post.date), 'hh:mm aaa - MMMM do, yyyy')} </div>
            <div className="restvenue">{post.venue} </div>
          </div>
          </div>
        );
      })}
      </div>
  );
}
