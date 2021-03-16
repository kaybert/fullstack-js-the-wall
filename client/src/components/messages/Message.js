import './Message.css'
export const Message = (props) => {

    const [ date, time ] = new Date(props.message.createdAt).toISOString().split('T')
    const datetime = date + ' ' + time.slice(0, 5)
    return (
        <div className="messagebox">
            <span className="message">{props.message.message}</span>
            <span className="username"> by {props.message.user.username}</span>
            <span className="datetime"> {datetime} </span>
        </div>
    )
}