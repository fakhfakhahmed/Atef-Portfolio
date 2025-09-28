'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Users, Lightbulb } from 'lucide-react'
import Image from 'next/image'

const educationData = [
  {
    year: '2022-2025',
    degree: 'Ingénieur en Mécatronique',
    institution: 'Polytechnique International',
    description: 'Specialized in mechatronics engineering, combining mechanical design, electronics, and automation systems.'
  },
  {
    year: '2017-2021',
    degree: 'Licence Appliquée en Génie Mécanique',
    institution: 'Institut Supérieur des Études Technologiques',
    description: 'Applied degree in mechanical engineering with focus on CAD design and manufacturing processes.'
  },
  {
    year: '2017',
    degree: 'Baccalauréat',
    institution: 'Lycée Secondaire de Ariana - Tunisie',
    description: 'Secondary education completion with focus on technical sciences.'
  }
]

const stats = [
  { icon: Award, label: 'Projets Réalisés', value: '4+' },
  { icon: Users, label: 'Clients Majeurs', value: '4' },
  { icon: Lightbulb, label: 'Logiciels CAO', value: '7+' },
  { icon: GraduationCap, label: 'Années d\'Expérience', value: '2+' }
]

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-max-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            À Propos de Moi
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionné par la création de solutions mécaniques innovantes qui comblent l&apos;écart entre concept et réalité
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/agimi-atef-profile.jpg"
                alt="Agimi Atef - Professional Portrait"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Concepteur Mécanique & Spécialiste CAO
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Concepteur mécanique passionné par l&apos;innovation, expert en CAO 3D et procédés de fabrication. 
                I bring technical solutions that combine precision, creativity, and industrial performance.
              </p>
              <p>
                Actuellement en poste chez ITEM Tunisie, je me spécialise dans la conception et la modélisation 
                de composants mécaniques pour des clients majeurs tels que SAFRAN, BIC, UPECA et MARQUARDT. 
                Mon expertise couvre le cycle complet de conception, des études de faisabilité à la documentation 
                technique et au support de fabrication.
              </p>
              <p>
                Actuellement en cours d&apos;obtention de mon diplôme d&apos;Ingénieur en Mécatronique à Polytechnique International, 
                je combine mon expérience pratique avec des connaissances théoriques avancées pour proposer des solutions 
                innovantes en conception mécanique et automatisation.
              </p>
            </div>

            {/* Skills Highlight */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {['SolidWorks', 'Mastercam', 'CATIA V5', 'Creo', 'AutoCAD 2D/3D'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Languages */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Langues</h4>
                <div className="flex flex-wrap gap-3">
                  {['Arabe (Natif)', 'Français (Courant)', 'Anglais (Professionnel)'].map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Formation & Certifications
          </h3>
          <div className="space-y-8">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="flex-shrink-0 w-24 text-center">
                  <span className="inline-block px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 card p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.degree}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {item.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
