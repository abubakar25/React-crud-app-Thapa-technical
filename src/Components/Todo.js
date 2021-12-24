import React, { useState } from "react";

function Todo(props) {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);
  const inputHandler = (e) => {
    // console.log(e.target.value);
    setInputData(e.target.value);
  };
  const addItem = () => {
    if (!inputData) {
      alert("please enter some data");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((element) => {
          if (element.id === isEditItem) {
            return { ...element, name: inputData };
          }
          return element;
        })
      );

      setToggleSubmit(true);
      setInputData("");
      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };
  const deleteItem = (index) => {
    const updatedItems = items.filter((element) => {
      return index !== element.id;
    });
    setItems(updatedItems);
  };

  const editItem = (id) => {
    let editItem = items.find((element) => {
      return (element.id = id);
    });
    console.log(editItem);
    setToggleSubmit(false);
    setInputData(editItem.name);
    setIsEditItem(id);
  };

  const RemoveAll = () => {
    setItems([]);
  };

  return (
    <div
      style={{
        width: "100vw",
        // height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div>
          <figure>
            <figcaption>Add Your List Here✌🏻</figcaption>
          </figure>
        </div>

        <div>
          <input
            style={{ width: "200px" }}
            type="text"
            placeholder="✍🏻 Add Items..."
            value={inputData}
            onChange={inputHandler}
          />
          {toggleSubmit ? (
            <button onClick={addItem}>
              <i className="fa fa-plus add-btn" title="Add Item"></i>
            </button>
          ) : (
            <button onClick={addItem}>
              <i className="fa fa-edit add-btn" title="Update Item"></i>
            </button>
          )}
        </div>

        <div>
          {items.map((element) => {
            return (
              <div key={element.id}>
                <p
                  style={{
                    width: "233px",
                    height: "25px",
                    border: "2px solid black",
                    borderRadius: "5px",
                  }}
                >
                  {element.name}

                  <span style={{ float: "right", marginRight: "4px" }}>
                    <i
                      className="far fa-edit add-btn"
                      title="Edit Item"
                      onClick={() => editItem(element.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => deleteItem(element.id)}
                    ></i>
                  </span>
                </p>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign: "right" }}>
          <button onClick={RemoveAll} style={{ width: "100%" }}>
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
