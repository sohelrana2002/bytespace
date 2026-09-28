export interface Course {
  id: string;
  title: string;
  author: string;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  image: string;
}

/** Avatars shown on every course card (students who enrolled). */
export const COURSE_STUDENT_AVATARS = [
  "/images/avatars/a2.png",
  "/images/avatars/a14.png",
  "/images/avatars/a15.png",
  "/images/avatars/a16.png",
];

/** Avatars shown in the "Happy Students" card. */
export const HAPPY_STUDENT_AVATARS = [
  "/images/avatars/a1.png",
  "/images/avatars/a2.png",
  "/images/avatars/a3.png",
  "/images/avatars/a4.png",
  "/images/avatars/a5.png",
  "/images/avatars/a6.png",
  "/images/avatars/a7.png",
];

export const COURSES: Course[] = [
  {
    id: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    image: "/images/courses/figma.png",
  },
  {
    id: "build-digital-asset",
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    image: "/images/courses/digital-asset.png",
  },
  {
    id: "the-power-of-big-data",
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    image: "/images/courses/big-data.png",
  },
  {
    id: "balancing-productivity-and-life",
    title: "Balancing Productivity and Life",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    image: "/images/courses/productivity.png",
  },
  {
    id: "mastering-money-management",
    title: "Mastering Money Management",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    image: "/images/courses/money.png",
  },
  {
    id: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    image: "/images/courses/startup.png",
  },
];
