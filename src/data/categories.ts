/** Filter chips shown above the course grid, split into the three rows of the design. */
export const COURSE_FILTER_ROWS: string[][] = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

export interface LearningPath {
  label: string;
  url: string;
  width: number;
  height: number;
}

export const LEARNING_PATHS: LearningPath[] = [
  {
    label: "Design",
    url: "/images/learning-paths/Design.png",
    width: 36,
    height: 36,
  },
  {
    label: "Development",
    url: "/images/learning-paths/Development.png",
    width: 36,
    height: 36,
  },
  {
    label: "IT & Software",
    url: "/images/learning-paths/IT.png",
    width: 36,
    height: 24,
  },
  {
    label: "Business",
    url: "/images/learning-paths/Business.png",
    width: 36,
    height: 36,
  },
  {
    label: "Marketing",
    url: "/images/learning-paths/Marketing.png",
    width: 36,
    height: 36,
  },
  {
    label: "Photography",
    url: "/images/learning-paths/Photography.png",
    width: 36,
    height: 36,
  },
];
