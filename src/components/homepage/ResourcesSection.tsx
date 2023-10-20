import Link from '@docusaurus/Link';
import React, { useState } from 'react';
import clsx from 'clsx';
import {
  ArrowRightFilled,
  ChevronLeftRegular,
  ChevronRightRegular,
} from '@fluentui/react-icons';
import { title } from 'process';

interface subResource {

}
interface Resource {
  url: string;
  type: string;
  title: string;
  description: string;
  image: string;
  duration: string;
}

const DSA_RESOURCES: Resource[] = [

  {
    url: '/dsa-level-0/basics/basics1',
    type: 'blog',
    title: 'DSA-Level-0',
    description:
      'Some info regarding course and its contents',
    image:
      'https://algorithmicaonline.com/images/course/1596793516TOP 20 ADVANCED JAVA.png',
    duration: '3 min',
  },
  {
    url: '/dsa-level-1/basics/basics1',
    type: 'blog',
    title: 'DSA-Level-1',
    description:
      "Some info regarding course and its contents",
    image:
      'https://algorithmicaonline.com/images/course/1596570363TOP 20 ADVANCED PYTHON.png',
    duration: '10 min',
  },
  {
    url: '/dsa-level-1/basics/basics1',
    type: 'blog',
    title: 'DSA-Level-2',
    description:
      "Some info regarding course and its contents",
    image:
      'https://algorithmicaonline.com/images/course/1596570363TOP 20 ADVANCED PYTHON.png',
    duration: '10 min',
  },
  {
    url: '/dsa-level-1/basics/basics1',
    type: 'blog',
    title: 'DSA-Level-3',
    description:
      "Some info regarding course and its contents",
    image:
      'https://algorithmicaonline.com/images/course/1596570363TOP 20 ADVANCED PYTHON.png',
    duration: '10 min',
  },
  {
    url: '/dsa-level-1/basics/basics1',
    type: 'blog',
    title: 'DSA-Level-4',
    description:
      "Some info regarding course and its contents",
    image:
      'https://algorithmicaonline.com/images/course/1596570363TOP 20 ADVANCED PYTHON.png',
    duration: '10 min',
  },
];
const AI_RESOURCES: Resource[] = [

  {
    url: '/dsa/dsa-level-0/basics2',
    type: 'blog',
    title: 'AI-ML-1',
    description:
      'Some info regarding course and its contents',
    image:
      'https://algorithmicaonline.com/images/course/1596625504LANGUAGE PYTHON AI.png',
    duration: '3 min',
  },
  {
    url: '/dsa/dsa-level-0/basics2',
    type: 'blog',
    title: 'AI-ML-2',
    description:
      "Some info regarding course and its contents",
    image:
      'https://algorithmicaonline.com/images/course/1596639591MACHINE LEARNING.png',
    duration: '10 min',
  }
];


function Resource({
  type,
  url,
  image,
  title,
  description,
  duration,
}: Resource) {
  return (
    <Link
      className="fade-in group flex flex-col justify-between"
      key={title}
      href={url}
    >
      <div>
        <div className="mb-3 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="aspect-video h-full w-full object-cover transition-transform group-hover:scale-110"
          />
        </div>
        <h3 className="font-semibold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary-100 lg:text-xl">
          {title}
        </h3>
        <p className="leading-snug text-text-400">{description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-text-400">
          {`${duration} ${type === 'Video' ? 'watch' : 'read'}`}
        </div>
      </div>
    </Link>
  );
}

export default function DSAResourcesSection() {
  const [page, setPage] = useState(1);
  const [activeType, setActiveType] = useState<'all' | 'blog' | 'video'>('all');

  const resources =
    activeType === 'all'
      ? DSA_RESOURCES
      : DSA_RESOURCES.filter((r) => r.type === activeType);

  const currentResources = resources.slice((page - 1) * 4, page * 4);

  const pages = Math.ceil(resources.length / 4);

  const nextPage = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <><section className="no-underline-links my-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="">
          <h4 className="mb-2 text-2xl">Data structures & algorithms series</h4>

          <p className="mb-6 text-text-400">
            Some demo paragraph regarding data structures and algoritms
          </p>
        </div>


        <div className="relative flex flex-col">
          <div className="no-underline-links grid grid-cols-3 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {currentResources.map((resource, idx) => {
              return <Resource {...resource} key={idx} />;
            })}
          </div>

          <div className="my-10 ml-auto flex items-center justify-center md:my-0">
            <button
              onClick={prevPage}
              className="top-1/2 -left-14 rounded-lg bg-transparent p-1 hover:bg-secondary-800 md:absolute md:-translate-y-1/2"
            >
              <ChevronLeftRegular className="h-6 w-6" />
            </button>

            <button
              onClick={nextPage}
              className="top-1/2 -right-14 rounded-lg bg-transparent p-1 hover:bg-secondary-800 md:absolute md:-translate-y-1/2"
            >
              <ChevronRightRegular className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section><AIProgrammingResourcesSection /></>
  );
}


export  function AIProgrammingResourcesSection() {
  const [page, setPage] = useState(1);
  const [activeType, setActiveType] = useState<'all' | 'blog' | 'video'>('all');

  const resources =
    activeType === 'all'
      ? AI_RESOURCES
      : AI_RESOURCES.filter((r) => r.type === activeType);

  const currentResources = resources.slice((page - 1) * 4, page * 4);

  const pages = Math.ceil(resources.length / 4);

  const nextPage = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <section className="no-underline-links my-20 px-6" >
      <div className="mx-auto max-w-7xl">
        <div className="">
        <h4 className="mb-2 text-2xl">AI Programming series</h4>

        <p className="mb-6 text-text-400">
         Some demo paragraph regarding AI Programming
        </p>
        </div>


        <div className="relative flex flex-col">
          <div className="no-underline-links grid grid-cols-3 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {currentResources.map((resource, idx) => {
              return <Resource {...resource} key={idx} />;
            })}
          </div>

          <div className="my-10 ml-auto flex items-center justify-center md:my-0">
            <button
              onClick={prevPage}
              className="top-1/2 -left-14 rounded-lg bg-transparent p-1 hover:bg-secondary-800 md:absolute md:-translate-y-1/2"
            >
              <ChevronLeftRegular className="h-6 w-6" />
            </button>

            <button
              onClick={nextPage}
              className="top-1/2 -right-14 rounded-lg bg-transparent p-1 hover:bg-secondary-800 md:absolute md:-translate-y-1/2"
            >
              <ChevronRightRegular className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
