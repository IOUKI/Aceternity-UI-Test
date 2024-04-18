"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Page = () => {
  const testimonials: any = [
    {
      quote: '早餐',
      name: '玉米蛋餅、油條、溫豆漿',
      title: '$86',
    },
    {
      quote: '午餐',
      name: '滷肉飯、半熟蛋、魚丸湯',
      title: '$110',
    },
    {
      quote: '晚餐',
      name: '拿波里炸雞',
      title: '$500',
    },
  ]

  return (
    <div className="w-full flex justify-center">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  )
}

export default Page