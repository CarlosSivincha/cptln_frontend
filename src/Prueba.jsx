import React, { useState } from 'react';

function SortableList() {
    const [items, setItems] = useState([
        "Elemento 1",
        "Elemento 2",
        "Elemento 3",
        "Elemento 4",
    ]);

    // Almacena el índice del elemento que se está arrastrando
    const [draggedItemIndex, setDraggedItemIndex] = useState(null);

    const handleDragStart = (index) => {
        setDraggedItemIndex(index);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        console.log(event.target);
    };

    const handleDrop = (event, index) => {
        console.log(event.target);
        const newItems = [...items];
        const [draggedItem] = newItems.splice(draggedItemIndex, 1);
        newItems.splice(index, 0, draggedItem);
        setItems(newItems);
        setDraggedItemIndex(null);
    };

    return (
        <div>
            <h3>Lista Ordenable</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {items.map((item, index) => (
                    <li
                        key={index}
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragOver={handleDragOver}
                        onDrop={() => handleDrop(index)}
                        style={{
                            padding: "8px",
                            marginBottom: "4px",
                            backgroundColor: "#e0e0e0",
                            cursor: "move",
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SortableList;