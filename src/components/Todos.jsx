import React,{useState} from "react";
import {removeTodo} from "../features/todoSlice"
import { useDispatch } from "react-redux";
import {updateTodo } from "../features/todoSlice";

/* eslint-disable react/prop-types */
function Todos({ todo }) {
    
    const [input,setInput] = useState(todo.text); 
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const dispatch = useDispatch();

    const editTodo = () => {
        const todo = {
            id:todo.id,
            text:input
        }
        console.log(todo);
        dispatch(updateTodo(todo));
        setIsTodoEditable(false);
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black"
            }`}
        >
         
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                readOnly={isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={isTodoEditable}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => 
                dispatch(removeTodo(todo.id))}
            >
                ❌
            </button>
        </div>
    );
}

export default Todos;

