'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Building, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const experiences = [
  {
    company: 'ITEM Tunisie',
    position: 'Concepteur Mécanique',
    period: '2022 - Aujourd\'hui',
    location: 'Tunis, Tunisie',
    type: 'Full-time',
    description: 'Conception et modélisation de composants mécaniques avec logiciels de CAO. Analyse des spécifications techniques, étude de faisabilité et élaboration de solutions conformes aux normes ISO.',
    achievements: [
      'Conception et modélisation de composants mécaniques (acier, aluminium) avec logiciels de CAO',
      'Analyse des spécifications techniques, étude de faisabilité et élaboration de solutions conformes aux normes ISO et exigences clients',
      'Réalisation de plans d\'ensemble, sous-ensembles, nomenclatures et dossiers techniques (2D/3D)',
      'Gestion et mise à jour de la documentation technique',
      'Participation aux phases de pré-étude, conception, montage, intégration et réglages des systèmes mécaniques',
      'Collaboration interservices (technique, logistique, fabrication, commerce, marketing) et accompagnement client dans le développement produit',
      'Optimisation des designs en tenant compte des contraintes techniques et économiques',
      'Suivi d\'exécution : support technique aux équipes atelier, réalisation de calculs, contrôle de conformité des projets',
      'Élaboration de dossiers techniques et constitution des Dossiers des Ouvrages Exécutés (DOE)',
      'Gestion de projet technique (suivi, planning)',
      'Capacité à travailler en équipe pluridisciplinaire',
      'Respect des délais et des normes',
      'Prototypage rapide'
    ],
    technologies: ['SolidWorks', 'Mastercam', 'CATIA V5', 'Creo', 'Office', 'Engineeringtool', 'AutoCAD (2D/3D, plan industriel)']
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-max-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Expérience Professionnelle
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Un parcours de croissance et d&apos;innovation en conception mécanique et ingénierie
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card p-6 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {experience.position}
                </h3>
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mb-2">
                  <Building className="w-4 h-4 mr-1" />
                  {experience.company}
                  {experience.company === 'ITEM Tunisie' && (
                    <div className="ml-3 bg-white dark:bg-gray-700 rounded px-2 py-1">
                      <Image
                        src="/images/Item_Industrietechnik_und_Maschinenbau_logo.svg.png"
                        alt="ITEM Logo"
                        width={60}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        experience.type === 'Full-time' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                          : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                      }`}>
                        {experience.type}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {experience.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {experience.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Réalisations Clés :
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                            <ChevronRight className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0 text-primary-500" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-medium">
            <Calendar className="w-5 h-5 mr-2" />
            Disponible pour de nouvelles opportunités
          </div>
        </motion.div>
      </div>
    </section>
  )
}
