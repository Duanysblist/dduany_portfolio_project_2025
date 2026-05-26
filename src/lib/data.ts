export type ProjectStatus =
  | "Complete"
  | "In Development"
  | "Planned"
  | "Phase 1 complete";

export interface Project {
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "intermediary",
    slug: "intermediary",
    description:
      "A shared planning space between you and an AI assistant. Working with AI on real, ongoing projects usually means repeating yourself — re-explaining context, re-stating goals, re-paraphrasing the same plan to get slightly different answers back. intermediary fixes that with one source of truth: humans organize plans visually through calendars, categories, and status columns, while the AI reads the same information in a form it can use directly. It also separates what you intended to do from what you actually did, and keeps a running history of how your plans evolved along the way — so both you and the AI always work from the same picture, without having to rebuild it from scratch each time.",
    techStack: [
      "Java 21",
      "Spring Boot 3",
      "Spring Data JPA",
      "PostgreSQL",
      "Lombok",
      "Maven",
      "Docker",
    ],
    status: "Phase 1 complete",
    githubUrl: "https://github.com/Duanysblist/intermediary",
  },
  {
    title: "Bionic Apocalypse",
    slug: "bionic-apocalypse",
    description:
      "A 2D post-apocalyptic RPG built in C++ where players traverse 48 interconnected rooms organized into four themed zones. Features turn-based combat with twelve distinct player moves, weapon progression trees, status effects, and three enemy archetypes. Includes grid-based collision detection, SDL2-powered rendering with sprite animation and cutscenes, and a crafting system for progressively powerful weapons. Developed as a 4-person team project with 313 commits and 4,800+ lines of code.",
    techStack: ["C++", "SDL2", "CMake", "SDL2_image", "SDL2_ttf", "SDL2_mixer"],
    status: "Complete",
    githubUrl: "https://github.com/Duanysblist/BAVideoGame",
    liveUrl: "https://duanysblist.github.io/bionic-apocalypse-demo/",
  },
  {
    title: "NutriPlan AI",
    slug: "nutriplan-ai",
    description:
      "A personalized meal planning and nutrition optimization system powered by machine learning. Combines 7 years of professional culinary experience with constraint optimization algorithms to generate weekly meal plans optimized across nutritional targets, budget, cooking time, and taste preferences. Features six ML components including recipe embeddings, a cookability scorer trained on expert culinary judgment, and a constraint solver using mixed-integer linear programming.",
    techStack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "PyTorch",
      "XGBoost",
      "Google OR-Tools",
      "Next.js",
      "Docker",
    ],
    status: "In Development",
  },
  {
    title: "Event-Driven Microservices Platform",
    slug: "event-driven-microservices",
    description:
      "A multi-service e-commerce platform where services communicate asynchronously via Kafka. Architecture includes a User Service, Order Service with Redis caching, Search Service with Elasticsearch, Notification Service as a Kafka consumer, and an API Gateway via Spring Cloud Gateway. Fully Dockerized and orchestrated on Kubernetes with Prometheus and Grafana monitoring.",
    techStack: [
      "Spring Boot",
      "Apache Kafka",
      "Redis",
      "Elasticsearch",
      "Spring Cloud Gateway",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "Docker",
    ],
    status: "Planned",
  },
];
