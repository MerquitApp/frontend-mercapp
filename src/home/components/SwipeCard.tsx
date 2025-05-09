'use client';

import { Avatar } from '@nextui-org/react';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProductCard } from '@/types';

const DECISION_THRESHOLD = 75;
const MAX_DRAG_DISTANCE = 200;

interface Props extends ProductCard {
  onDecisionMade: (isLiking: boolean, id: number) => void;
}

export default function SwipeCard({
  id,
  title,
  price,
  description,
  imageSrc,
  userName,
  avatar,
  onDecisionMade
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const startDrag = (startX: number) => {
    if (!cardRef.current) return;

    let pulledX = 0;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onEnd);

    document.addEventListener('touchmove', onTouchMove, {
      passive: true
    });
    document.addEventListener('touchend', onEnd, { passive: true });

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

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onEnd);

      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onEnd);

      const decisionMade = Math.abs(pulledX) >= DECISION_THRESHOLD;
      const goRight = pulledX >= 0;

      if (decisionMade) {
        cardRef.current.classList.add(goRight ? 'go-right' : 'go-left');
        cardRef.current.addEventListener('transitionend', () => {
          onDecisionMade(goRight, id);
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
      className="p-3 bg-whitePalette shadow-md rounded-xl max-w-md cursor-grab z-20 select-none">
      <Image
        width={448}
        height={448}
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
        <Avatar size="md" name={userName} src={avatar} />
        <div className="flex flex-col gap-1 items-center">
          <h3>{userName}</h3>
        </div>
      </div>
    </div>
  );
}
