'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Tag, Zap } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { ImageModal } from '@/components/ImageModal'

const projects = [
  {
    id: 1,
    title: 'Manipulateur des Coeurs - SAFRAN',
    category: 'Automatisation Industrielle',
    year: '2023',
    description: 'Développement d\'un manipulateur de cœur permettant la manipulation, la rotation et le positionnement des cœurs sur chariot d\'intégration.',
    image: '/images/projects/Safran/project3.png',
    technologies: ['SolidWorks', 'Systèmes Électriques', 'Conception Mécanique', 'Systèmes de Sécurité'],
    features: [
      'Simplification et sécurisation des opérations de manipulation des cœurs',
      'Gain de temps et réduction de l\'effort opérateur (un seul utilisateur suffit)',
      'Amélioration de l\'ergonomie, de la fiabilité et de la conformité aux normes (ISO, sécurité, bruit ≤ 60 dB)',
      'Dispositifs de verrouillage et stabilisation intégrés pour garantir la sécurité et la précision des manipulations'
    ],
    results: 'Opérations simplifiées, effort opérateur réduit, conformité sécurité améliorée',
    client: 'SAFRAN',
    gallery: [
      '/images/projects/Safran/project3.png',
      '/images/projects/Safran/quoi.png',
      '/images/projects/Safran/comment.png'
    ]
  },
  {
    id: 2,
    title: 'Système de Transport des Stylos - BIC',
    category: 'Manutention',
    year: '2023',
    description: 'Un système de convoyage automatisé conçu pour transporter les stylos de la machine de marquage vers la machine de conditionnement en toute sécurité et conformément aux normes ergonomiques.',
    image: '/images/projects/Bic/project4.png',
    technologies: ['SolidWorks', 'Systèmes de Convoyage', 'Profilés Aluminium', 'Systèmes de Sécurité'],
    features: [
      'Transport sécurisé et continu des stylos sans intervention manuelle répétitive',
      'Amélioration de l\'ergonomie en supprimant les postures contraignantes et les risques pour les opérateurs',
      'Optimisation du temps de cycle et de la fiabilité du processus de production',
      'Structure en profilés aluminium avec trémie en inox et convoyeurs à bandes (horizontal + incliné)'
    ],
    results: 'Transport répétitif éliminé, ergonomie améliorée, temps de cycle optimisés',
    client: 'BIC',
    gallery: [
      '/images/projects/Bic/project4.png',
      '/images/projects/Bic/quoi.png',
      '/images/projects/Bic/comment.png'
    ]
  },
  {
    id: 3,
    title: 'Machine de Clippage - UPECA',
    category: 'Fabrication',
    year: '2023',
    description: 'Conception et réalisation d\'une machine de clippage semi-automatisée destinée à remplacer l\'opération manuelle d\'assemblage.',
    image: '/images/projects/UPECA/Project1.png',
    technologies: ['SolidWorks', 'Systèmes Pneumatiques', 'Conception Modulaire', 'Automatisation'],
    features: [
      'Suppression de l\'opération manuelle répétitive réduisant la pénibilité et le risque d\'erreurs',
      'Gain de temps de cycle significatif grâce à l\'automatisation',
      'Amélioration de la précision d\'assemblage et de la qualité du produit final',
      'Structure modulaire en profilés aluminium avec outillage adapté au produit'
    ],
    results: 'Erreurs manuelles éliminées, temps de cycle réduit, précision améliorée',
    client: 'UPECA',
    gallery: [
      '/images/projects/UPECA/Project1.png',
      '/images/projects/UPECA/Project1&quoi.png',
      '/images/projects/UPECA/project1&comment.png'
    ]
  },
  {
    id: 4,
    title: 'Ligne de Transfert BDTronic - MARQUARDT',
    category: 'Automatisation Industrielle',
    year: '2023',
    description: 'Mise en place d\'une ligne de transfert automatisée permettant d\'acheminer les palettes entre les différents postes d\'assemblage.',
    image: '/images/projects/Marquardt/project2.png',
    technologies: ['SolidWorks', 'Engineeringtool', 'Automatisation', 'Conception Modulaire'],
    features: [
      'Amélioration de l\'efficacité et de la précision du processus de fabrication',
      'Réduction des temps de cycle grâce aux mouvements plus rapides et optimisés',
      'Moins de composants, donc une ligne plus fiable, plus économique et plus facile à maintenir',
      'Conception modulaire avec un nombre réduit de composants mécaniques pour simplifier la maintenance et augmenter la fiabilité'
    ],
    results: 'Efficacité améliorée, temps de cycle réduits, fiabilité améliorée',
    client: 'MARQUARDT',
    gallery: [
      '/images/projects/Marquardt/project2.png',
      '/images/projects/Marquardt/quoi.png',
      '/images/projects/Marquardt/comment.png'
    ]
  }
]

const categories = ['Tous', 'Automatisation Industrielle', 'Robotique', 'Fabrication', 'Manutention', 'Instrumentation', 'Systèmes d\'Assemblage']

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImages, setModalImages] = useState<string[]>([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [modalProjectTitle, setModalProjectTitle] = useState('')

  const openImageModal = (images: string[], startIndex: number, projectTitle: string) => {
    setModalImages(images)
    setCurrentImageIndex(startIndex)
    setModalProjectTitle(projectTitle)
    setModalOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % modalImages.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length)
  }

  const filteredProjects = selectedCategory === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-max-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projets Réalisés
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Solutions innovantes de conception mécanique pour diverses industries
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-primary-600 text-white text-xs font-medium rounded">
                    {project.year}
                  </span>
                </div>
                {/* Company Logo */}
                {project.client && (
                  <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow-md">
                    <Image
                      src={
                        project.client === 'SAFRAN' ? '/images/projects/Safran/1200px-Safran_-_logo_2016.png' :
                        project.client === 'BIC' ? '/images/projects/Bic/images.png' :
                        project.client === 'UPECA' ? '/images/projects/UPECA/logo-upeca.png' :
                        project.client === 'MARQUARDT' ? '/images/projects/Marquardt/Marquardt-Logo-CD.svg' :
                        ''
                      }
                      alt={`${project.client} Logo`}
                      width={40}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-xs font-medium rounded">
                    {project.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors duration-200" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Expandable Details */}
                {selectedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4"
                  >
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                          <Tag className="w-4 h-4 mr-1" />
                          Caractéristiques Clés
                        </h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                              <span className="w-1 h-1 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                          <Zap className="w-4 h-4 mr-1" />
                          Résultats
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {project.results}
                        </p>
                      </div>
                      
                      {/* Image Gallery for projects with multiple images */}
                      {project.gallery && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Galerie du Projet
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {project.gallery.map((imageSrc, idx) => (
                              <div 
                                key={idx} 
                                className="relative h-24 rounded-lg overflow-hidden cursor-pointer"
                                onClick={() => openImageModal(project.gallery!, idx, project.title)}
                              >
                                <Image
                                  src={imageSrc}
                                  alt={`${project.title} - Vue ${idx + 1}`}
                                  fill
                                  className="object-cover hover:scale-110 transition-transform duration-200"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Intéressé par une collaboration sur votre prochain projet ?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-primary"
          >
            Discutons de Votre Projet
          </motion.button>
        </motion.div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={modalImages}
        currentIndex={currentImageIndex}
        onPrevious={previousImage}
        onNext={nextImage}
        projectTitle={modalProjectTitle}
      />
    </section>
  )
}
