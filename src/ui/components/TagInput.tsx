'use client';

import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { LuX } from 'react-icons/lu';

interface Tag {
  id: string;
  content: string;
}

interface Props {
  tags?: string[];
  onChange?: (tags: string[]) => void;
  [key: string]: unknown;
}

export const TagInput = ({ tags, onChange, ...rest }: Props) => {
  const textInput = useRef<HTMLInputElement>(null);
  const [currentTags, setCurrentTags] = useState<Tag[]>(
    tags ? tags.map((tag) => ({ content: tag, id: crypto.randomUUID() })) : []
  );

  const handleAddTag = (tag: string) => {
    setCurrentTags((prev) => {
      if (prev.some((t) => t.content === tag)) {
        return prev;
      }

      return [...prev, { content: tag, id: crypto.randomUUID() }];
    });
  };

  const handleRemoveTag = (tagId: string) => {
    setCurrentTags(currentTags.filter((t) => t.id !== tagId));
  };

  const handleRemoveLastTag = () => {
    setCurrentTags((prev) => prev.slice(0, -1));
  };

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    const tag = textInput.current?.value;
    if (e.key === 'Enter') {
      if (tag?.trim()) {
        handleAddTag(tag);
        textInput.current!.value = '';
      }
    } else if (
      e.key === 'Backspace' &&
      currentTags.length > 0 &&
      tag?.length === 0
    ) {
      handleRemoveLastTag();
    }
  }

  useEffect(() => {
    onChange?.(currentTags.map((tag) => tag.content));
  }, [currentTags, onChange]);

  useEffect(() => {
    if (!tags) return;

    setCurrentTags(
      tags.map((tag) => ({ content: tag, id: crypto.randomUUID() }))
    );
  }, [tags]);

  return (
    <div className="bg-whitePalette border border-gray-300 rounded-md w-full">
      <div
        className={`flex flex-wrap p-2 w-full ${currentTags.length > 0 ? 'gap-2' : ''}`}>
        <ul className="inline-flex flex-wrap flex-shrink-0 gap-2 max-w-full">
          {currentTags.map((tag) => (
            <li key={tag.id}>
              <button
                className="bg-gray-200 text-gray-700 rounded-md p-2 cursor-pointer inline-flex items-center justify-center gap-2"
                onClick={() => handleRemoveTag(tag.id)}>
                <span className="inline-flex items-center gap-2">
                  {tag.content}
                  <div className="w-4 h-4">
                    <LuX size={18} />
                  </div>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <input
          {...rest}
          onKeyDown={(e) => handleKeyDown(e)}
          ref={textInput}
          type="text"
          className="w-full text-gray-700 rounded-md p-2 outline-none flex-1 min-w-32"
        />
      </div>
    </div>
  );
};
