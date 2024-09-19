'use client'
import { useState, useEffect } from 'react';

export default function Typewriter({ text = '', speed = 100 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingFinished, setIsTypingFinished] = useState(false);

  useEffect(() => {
    if (!text) return;

    let index = 0;

    const typeWriter = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(typeWriter);
        setIsTypingFinished(true); // Mark typing as finished
      }
    }, speed);

    // Blinking cursor effect
    const cursorBlink = setInterval(() => {
      if (!isTypingFinished) {
        setShowCursor((prev) => !prev);
      }
    }, 500);

    // Cleanup intervals on unmount or when the text changes
    return () => {
      clearInterval(typeWriter);
      clearInterval(cursorBlink);
    };
  }, [text, speed]);

  return (
    <div className="flex">
      <span>{displayedText}</span>
      {/* Only show the cursor if typing is not finished */}
      {!isTypingFinished && (
        <span
          className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
          style={{
            fontSize: '1em',   // Match the font size to the text
            display: 'inline-block',
            lineHeight: '1em', // Ensures it lines up with text height
            width: '0.6em',    // Make it slightly less wide to resemble a terminal cursor
            height: '1em',     // Full height for capital letters
            backgroundColor: '#D1D3D6', // White background for the cursor
            verticalAlign: 'bottom', // Align with the text
          }}
        ></span>
      )}
    </div>
  );
}

