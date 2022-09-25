import React from "react";
import './Component.css';

const Component = (props) =>{

    console.log("prince");
    console.log("kumar");
    return(
        <div className="cards">
            {
                props.items.map(
                    expense=>(

                        <div className="card m-4" style={{width: "22rem"}}>
                                <div className="card-body m-2">
                                    <h5><b>User Id:</b> {expense.userId}</h5>
                                    <h5 className="card-title"><b>Id:</b> {expense.id} {expense.last_name}</h5>
                                    <h6 className="card-text"><b>Title:</b> {expense.title}</h6>
                                    <p className="card-body"><b>Description:</b> {expense.body}</p>
                                </div>
                        </div>
                        // <div>
                        // <img src={expense.avatar} style={{width:"15%", height:"200px"}}></img>
                        // <h1>Name: {expense.first_name} {expense.last_name}</h1>
                        // <h1>Email: {expense.email}</h1><br/><br/>
                        // </div>
                    )
                )
            }
        </div>
    );
}

export default Component;