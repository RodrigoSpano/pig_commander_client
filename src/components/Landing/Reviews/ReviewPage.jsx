'use client'
import React from 'react';
import NavBar from '../NavBar';
import Link from 'next/link';
import { Tooltip, Button } from '@nextui-org/react';
import { HiSparkles } from 'react-icons/hi2';
import ReviewList from './ReviewList';
import Footer from '../Footer';

const ReviewPage = () => {
  return (
    <div className="bg-white">
      <NavBar />
      <section className="flex flex-col justify-center items-center select-none mt-20">
        <section>
          <h1 className="text-5xl md:text-7xl text-neutral-800 font-poppinsBold">
            User Reviews
          </h1>
        </section>

        <div className="my-10">
          <Tooltip content="Login required" className="">
            <Link href="/home/dashboard">
              <Button className="bg-gradient-to-r from-regularPink to-boldPink text-white">
                <span>
                  <HiSparkles />
                </span>
                Add Review
              </Button>
            </Link>
          </Tooltip>
        </div>

        <section className="flex flex-col items-center justify-center my-16">
          <h3 className="text-2xl md:text-3xl mb-6 font-poppinsRegular">
            Last User Reviews
          </h3>
          <ReviewList />
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default ReviewPage;