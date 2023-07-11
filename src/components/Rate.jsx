import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addStory } from "../features/story/storySlice";

import './Rate.css'

function Rate () {
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const [expanded, setExpanded] = useState(false);

    function addNewStory() {
        const story = inputRef.current.value.trim();

        if (story !== "") {
            if (story.length >= 3000) {
                alert('There are too many characters, do not writer more than 3000 characters');
            } else {
                dispatch(addStory(story));
                inputRef.current.value = "";
            };
        }
    };

    function handleTextareaChange(event) {
        if (expanded) {
            event.target.style.height = event.target.scrollHeight+"px";
        }
    };

    function blink(el) {
        el.animate([{ backgroundColor: "white" },
                { backgroundColor: "rgba(0, 0, 0, 0.2)" }
            ], {
                duration: 500,
                iterations: 1
                }
        )
    }

    function expandText() {
        let text = document.getElementById("storyInput");
        let expandButton = document.getElementById("expand-button");
        let arrow = expandButton.childNodes[0];

        if (arrow.className === "arrow down") {
            if (text.scrollHeight > text.clientHeight) {
                text.style.height = text.scrollHeight+"px";
                arrow.className = "arrow up";
                blink(text);
                blink(expandButton);
                setExpanded(true);
            }
        } else if (arrow.className === "arrow up") {
            text.style.height = "100px";
            arrow.className = "arrow down";
            blink(text);
            blink(expandButton);
            setExpanded(false);
        }
    };

    return (
    <div className="rate-component">
        <h3 className="gray">Rate</h3>
        <div className="add-story" id="add-story">
            <textarea
                type="text"
                onChange={handleTextareaChange}
                placeholder="Input text within 3000 characters"
                ref={inputRef}
                className="storyInput"
                id="storyInput"
            />
            <button onClick={expandText} id="expand-button"><i className="arrow down"></i></button>
            <button onClick={addNewStory} id="rate-button">Rate</button>
        </div>
    </div>
    );
}

export default Rate;