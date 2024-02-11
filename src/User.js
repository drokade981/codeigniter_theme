
function User(props) {
    return (
        <div className="App">
            <h4> Hello User component</h4>
            <button onClick={props.data}>call data function</button>
        </div>
    );
}

export default User;
