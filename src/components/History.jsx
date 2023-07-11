import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStory } from "../features/story/storySlice";
import './History.css';

function History() {
  const profile = useSelector((state) => state.profile.profile);
  const stories = useSelector((state) => state.story.stories);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteStory(id));
  };

  return (
    <div className="storieslist">
      <div className="display-stories">
        <h3 className='gray'>Your latest stories</h3>
        <ul className="stories">
          {stories.map((story) => (
            <li className="story" key={story.id}>
                {/* <div
                  dangerouslySetInnerHTML={{
                    __html: story.text.replace(/\n/g, "<br>"),
                  }}
                /> <br /> */}
                <div lang={profile.lang} style={{ whiteSpace: "pre-wrap", textAlign: 'left', hyphens: 'auto', wordWrap: 'break-word', wordBreak: 'break-all' }}>{story.text}</div>
                <div className='story-date'>
                    <b>{story.date}</b> <br />
                    <button
                        className="delete-btn"
                        onClick={() => handleDelete(story.id)}
                    >
                        delete
                    </button>
                </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default History;
