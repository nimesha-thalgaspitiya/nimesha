import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FolderOpen,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Calendar,
  User,
  Home,
  Layers,
} from "lucide-react";

type Project = {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  projectType?: string;
  role?: string;
  description: string;
  mainImage: string;
  images: string[];

  // Extra content (shown by "More" button)
  overview?: string;
  clientRequirements?: string[];
  designConcept?: string[];
  sitePlanning?: string[];
  designDevelopment?: string[];
  visualExploration?: string[];
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  // NEW: expand/collapse state for "More" content
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const projects: Project[] = useMemo(
    () => [
      {
        title: "Major Design Project (MDP) - Healing Landscape",
        subtitle: "Transforming lives through positive spaces",
        period: "Apr 2023 - Sep 2023",
        location: "Katunayake Aweriwatta Industrial Zone",
        projectType: "Landscape Design",
        role: "Concept, Planning & Landscape Design",
        description:
          "Designed a healing environment for the Katunayake Aweriwatta Industrial Zone to enhance employee well-being through green spaces, relaxation zones, and sustainable landscape design.",
        mainImage: "/project1.jpg",
        images: [
          "/project1.jpg",
          "/project1_1.jpg",
          "/project1_2.jpg",
          "/project1_3.jpg",
          "/project1_4.jpg",
          "/project1_5.jpg",
          "/project1_6.jpg",
          "/project1_7.jpg",
          "/project1_8.jpg",
          "/project1_9.jpg",
          "/project1_10.jpg",
        ],
      },
      {
        title: "Comprehensive Design Project (CDP) - Lively Transit",
        subtitle: "Landscape Shaping liveliness – where transit meets life",
        period: "Jan 2025 - Jun 2025",
        location: "Makumbura Multimodal Transport Hub",
        projectType: "Urban / Transit Landscape",
        role: "Concept, Site Strategy & Design Development",
        description:
          "Reimagined the Makumbura Multimodal Transport Hub as a vibrant transit space integrating green infrastructure, walkability, and community engagement to foster connection and liveliness.",
        mainImage: "/project2.jpg",
        images: [
          "/project2.jpg",
          "/project2_1.jpg",
          "/project2_2.jpg",
          "/project2_3.jpg",
          "/project2_4.jpg",
        ],
      },

      {
        title: "Residential Interior Design",
        subtitle: "Space planning + 3D interior visualization",
        period: "August 2024 - September 2024",
        location: "Peradeniya, Kandy",
        projectType: "Residential / Interior Design",
        role: "Concept, Space Planning & 3D Modelling",
        description:
          "A residential interior design project focused on functional space planning and 3D visualization, including layout development and perspective views to communicate spatial quality.",
        mainImage: "/project4.jpg",
        images: [
          "/project4.jpg",
          "/project4_1.png",
          "/project4_2.png",
          "/project4_3.png",
          "/project4_4.png",
        ],
      },
      {
        title: "Traditional Kandyan House",
        subtitle: "A contemporary reinterpretation of Kandyan Walawwa living",
        period: " June 2025 - August 2025",
        location: "Mahamaya Mawatha, Kandy",
        projectType: "Residential Design",
        role: "Concept, Planning & Architectural Design",
        description:
          "This project explores the reinterpretation of a Traditional Kandyan Walawwa within a contemporary residential context. The design responds to Kandy’s cultural heritage, topography, and climatic conditions while fulfilling modern residential requirements.",
        mainImage: "/project3.jpg",
        images: [
          "/project3.jpg",
          "/project3_1.jpg",
          "/project3_2.jpg",
          "/project3_3.jpg",
          "/project3_4.jpg",
          "/project3_5.jpg",
          "/project3_6.jpg",
        ],
        overview:
          "This project explores the reinterpretation of a Traditional Kandyan Walawwa within a contemporary residential context. The design responds to Kandy’s cultural heritage, topography, and climatic conditions while fulfilling modern residential requirements.",
        clientRequirements: [
          "A residential dwelling inspired by traditional Kandyan house architecture",
          "Clear spatial zoning for public, semi-public, and private areas",
          "Strong connection between indoor spaces and the surrounding landscape",
          "Climate-responsive design suitable for Kandy’s environment",
        ],
        designConcept: [
          "Central spatial organization",
          "Verandahs and transitional spaces",
          "Courtyards for ventilation and light",
          "Traditional roof forms and proportions",
          "Reinterpreted for present-day lifestyles while keeping cultural authenticity",
        ],
        sitePlanning: [
          "Residential site planning that respects existing site conditions",
          "Orientation to maximize natural ventilation and daylight",
          "Harmonious integration with the surrounding neighborhood",
        ],
        designDevelopment: [
          "Functional design layout based on traditional spatial hierarchy",
          "Preservation of visual openness and natural flow",
          "Balanced relationship between built form and open spaces",
        ],
        visualExploration: [
          "Existing site analysis and documentation",
          "Detailed design layouts",
          "Architectural perspectives illustrating form, materials, and spatial quality",
        ],
      },
    ],
    []
  );

  const openGallery = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setCurrentImageIndex(0);
    setZoomLevel(1);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setZoomLevel(1);
  };

  const nextImage = () => {
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) =>
        prev === projects[selectedProject].images.length - 1 ? 0 : prev + 1
      );
      setZoomLevel(1);
    }
  };

  const prevImage = () => {
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? projects[selectedProject].images.length - 1 : prev - 1
      );
      setZoomLevel(1);
    }
  };

  const toggleMore = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const hasMoreContent = (p: Project) =>
    Boolean(
      p.overview ||
      (p.clientRequirements && p.clientRequirements.length) ||
      (p.designConcept && p.designConcept.length) ||
      (p.sitePlanning && p.sitePlanning.length) ||
      (p.designDevelopment && p.designDevelopment.length) ||
      (p.visualExploration && p.visualExploration.length)
    );

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-emerald-50 to-green-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-8">
            <div className="bg-emerald-100 p-4 rounded-full">
              <FolderOpen className="h-8 w-8 text-emerald-600" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Projects
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                {/* Cover */}
                <div className="h-56 bg-gradient-to-r from-emerald-400 to-green-400 relative overflow-hidden">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-35 transition-all duration-300">
                    <button
                      onClick={() => openGallery(index)}
                      className="absolute bottom-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      More Images
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-4">
                    {project.subtitle}
                  </p>

                  <div className="space-y-3 mb-5">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{project.period}</span>
                    </div>

                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{project.location}</span>
                    </div>

                    {project.projectType && (
                      <div className="flex items-center text-gray-600">
                        <Home className="h-4 w-4 mr-2" />
                        <span>{project.projectType}</span>
                      </div>
                    )}

                    {project.role && (
                      <div className="flex items-center text-gray-600">
                        <User className="h-4 w-4 mr-2" />
                        <span>{project.role}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  {/* More button + extra content */}
                  {hasMoreContent(project) && (
                    <div className="mt-6">
                      <button
                        onClick={() => toggleMore(index)}
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold transition-all"
                      >
                        <Layers className="h-4 w-4" />
                        {expanded[index] ? "Show Less" : "More"}
                      </button>

                      {expanded[index] && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25 }}
                          className="mt-5 p-5 rounded-xl bg-emerald-50 border border-emerald-100"
                        >
                          {project.overview && (
                            <div className="mb-5">
                              <h4 className="text-lg font-bold text-gray-800 mb-2">
                                Project Overview
                              </h4>
                              <p className="text-gray-700 leading-relaxed">
                                {project.overview}
                              </p>
                            </div>
                          )}

                          {project.clientRequirements?.length ? (
                            <div className="mb-5">
                              <h4 className="text-lg font-bold text-gray-800 mb-2">
                                Client Requirements
                              </h4>
                              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                {project.clientRequirements.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ) : null}

                          {project.designConcept?.length ? (
                            <div className="mb-5">
                              <h4 className="text-lg font-bold text-gray-800 mb-2">
                                Design Concept
                              </h4>
                              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                {project.designConcept.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ) : null}

                          {project.sitePlanning?.length ? (
                            <div className="mb-5">
                              <h4 className="text-lg font-bold text-gray-800 mb-2">
                                Site Planning
                              </h4>
                              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                {project.sitePlanning.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ) : null}

                          {project.designDevelopment?.length ? (
                            <div className="mb-5">
                              <h4 className="text-lg font-bold text-gray-800 mb-2">
                                Design Development
                              </h4>
                              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                {project.designDevelopment.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ) : null}

                          {project.visualExploration?.length ? (
                            <div>
                              <h4 className="text-lg font-bold text-gray-800 mb-2">
                                Visual Exploration
                              </h4>
                              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                {project.visualExploration.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ) : null}
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeGallery}
        >
          <div
            className="relative max-w-4xl max-h-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeGallery}
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>

            <div className="relative overflow-hidden">
              <img
                src={projects[selectedProject].images[currentImageIndex]}
                alt={`${projects[selectedProject].title} - Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-[80vh] object-cover rounded-lg transition-transform duration-300 cursor-grab active:cursor-grabbing"
                style={{ transform: `scale(${zoomLevel})` }}
                onMouseDown={(e) => e.preventDefault()}
                draggable={false}
              />

              {projects[selectedProject].images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-all"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-800" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-all"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 max-w-[90%]">
                    {projects[selectedProject].images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => {
                          setCurrentImageIndex(imgIndex);
                          setZoomLevel(1);
                        }}
                        className={`w-3 h-3 rounded-full ${
                          imgIndex === currentImageIndex
                            ? "bg-white"
                            : "bg-white bg-opacity-50 hover:bg-opacity-80"
                        }`}
                        aria-label={`Go to image ${imgIndex + 1}`}
                      />
                    ))}
                  </div>

                  {/* Zoom Controls */}
                  <div className="absolute top-4 right-16 flex space-x-2">
                    <button
                      onClick={() =>
                        setZoomLevel(Math.max(0.5, zoomLevel - 0.25))
                      }
                      className="bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 transition-all"
                      title="Zoom Out"
                    >
                      <ZoomOut className="h-5 w-5 text-gray-800" />
                    </button>

                    <button
                      onClick={() =>
                        setZoomLevel(Math.min(3, zoomLevel + 0.25))
                      }
                      className="bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 transition-all"
                      title="Zoom In"
                    >
                      <ZoomIn className="h-5 w-5 text-gray-800" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
