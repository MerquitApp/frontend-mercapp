'use client';

import { Avatar } from '@nextui-org/react';
import { useRef } from 'react';
import { PiStarFill } from 'react-icons/pi';
import Link from 'next/link';

const DECISION_THRESHOLD = 75;
const MAX_DRAG_DISTANCE = 200;

interface Props {
  title: string;
  price: number;
  rate: number;
  userName: string;
  imageSrc: string;
  description: string;
  onDecisionMade: (isGoingRight: boolean) => void;
}

export default function SwipeCard({
  title,
  price,
  description,
  imageSrc,
  rate,
  userName,
  onDecisionMade
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const startDrag = (startX: number) => {
    if (!cardRef.current) return;

    let pulledX = 0;

    cardRef.current.addEventListener('mousemove', onMouseMove);
    cardRef.current.addEventListener('mouseup', onEnd);

    cardRef.current.addEventListener('touchmove', onTouchMove, {
      passive: true
    });
    cardRef.current.addEventListener('touchend', onEnd, { passive: true });

    function onMouseMove(ev: MouseEvent) {
      onMove(ev.pageX);
    }

    function onTouchMove(ev: TouchEvent) {
      onMove(ev.touches[0].pageX);
    }

    function onMove(currentX: number) {
      if (!cardRef.current) return;

      pulledX = currentX - startX;
      const deg = pulledX / 14;

      if (Math.abs(pulledX) < MAX_DRAG_DISTANCE) {
        cardRef.current.style.transform = `rotate(${deg}deg) translateX(${pulledX}px)`;
      }
    }

    function onEnd() {
      if (!cardRef.current) return;

      cardRef.current.removeEventListener('mousemove', onMouseMove);
      cardRef.current.removeEventListener('mouseup', onEnd);

      cardRef.current.removeEventListener('touchmove', onTouchMove);
      cardRef.current.removeEventListener('touchend', onEnd);

      const decisionMade = Math.abs(pulledX) >= DECISION_THRESHOLD;
      const goRight = pulledX >= 0;

      if (decisionMade) {
        cardRef.current.classList.add(goRight ? 'go-right' : 'go-left');
        cardRef.current.addEventListener('transitionend', () => {
          onDecisionMade(goRight);
        });
      } else {
        cardRef.current.style.transform = 'translateX(0px) rotate(0deg)';
      }
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseDown={(ev) => startDrag(ev.pageX)}
      onTouchStart={(ev) => startDrag(ev.touches[0].pageX)}
      className="p-3 bg-whitePalette shadow-md rounded-xl max-w-md cursor-grab z-20">
      <img
        draggable={false}
        src={imageSrc}
        className="w-full h-72 object-cover rounded-md"
        alt="Product Image"
      />
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primaryPalette">
            {title}
          </Link>
          <h3 className="text-4xl font-bold text-blackPalette">{price}€</h3>
        </div>
        <p className="text-gray-500 text-pretty">{description}</p>
      </div>
      <hr className="mt-4 border-gray-300" />
      <div className="mt-4 flex items-center gap-4">
        <Avatar size="md" name="John Doe" />
        <div className="flex flex-col gap-1 items-center">
          <h3>{userName}</h3>
          <div className="flex gap-1 items-center text-gray-500 bg-yellow-200 py-1 px-2 rounded-full">
            <PiStarFill className="text-yellow-500" />
            {rate}
          </div>
        </div>
      </div>
    </div>
  );
}
