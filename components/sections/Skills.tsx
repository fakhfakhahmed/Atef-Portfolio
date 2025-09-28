'use client'

import { motion } from 'framer-motion'
import { 
  Monitor, 
  Settings, 
  Cpu, 
  Wrench, 
  Zap, 
  Target,
  Layers,
  BarChart3
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Logiciels CAO',
    icon: Monitor,
    skills: [
      { name: 'SolidWorks', level: 95 },
      { name: 'Catia V5', level: 90 },
      { name: 'AutoCAD', level: 85 },
      { name: 'Mastercam', level: 80 }
    ]
  },
  {
    title: 'Conception & Analyse',
    icon: Target,
    skills: [
      { name: 'Analyse FEA', level: 88 },
      { name: 'Conception Mécanique', level: 90 },
      { name: 'Simulation', level: 82 },
      { name: 'Optimisation', level: 85 }
    ]
  },
  {
    title: 'Fabrication',
    icon: Settings,
    skills: [
      { name: 'Procédés de Fabrication', level: 85 },
      { name: 'Usinage', level: 85 },
      { name: 'Assemblage', level: 92 },
      { name: 'Contrôle Qualité', level: 88 }
    ]
  },
  {
    title: 'Compétences Techniques',
    icon: Cpu,
    skills: [
      { name: 'GD&T', level: 90 },
      { name: 'Sélection Matériaux', level: 88 },
      { name: 'Documentation Technique', level: 85 },
      { name: 'Gestion de Projet', level: 82 }
    ]
  }
]

const tools = [
  { name: 'SolidWorks', icon: '🔧', color: 'bg-red-500' },
  { name: 'Mastercam', icon: '⚙️', color: 'bg-blue-500' },
  { name: 'CATIA V5', icon: '📐', color: 'bg-yellow-500' },
  { name: 'Creo', icon: '🔬', color: 'bg-green-500' },
  { name: 'Office', icon: '🛠️', color: 'bg-purple-500' },
  { name: 'Engineeringtool', icon: '🎨', color: 'bg-orange-500' },
  { name: 'AutoCAD 2D/3D', icon: '📊', color: 'bg-indigo-500' },
  { name: 'Plan Industriel', icon: '🏭', color: 'bg-emerald-500' }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-max-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Compétences & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Compétences techniques complètes en conception mécanique, modélisation CAO et procédés de fabrication
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Software */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Outils & Logiciels
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card p-4 text-center group cursor-pointer"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 ${tool.color} rounded-lg mb-3 text-white text-xl group-hover:scale-110 transition-transform duration-200`}>
                  {tool.icon}
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Compétences Clés
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Layers, title: 'Modélisation 3D', description: 'Assemblages complexes et conception de pièces' },
              { icon: BarChart3, title: 'Analyse', description: 'FEA, études de faisabilité et optimisation' },
              { icon: Wrench, title: 'Fabrication', description: 'DFM et optimisation des procédés' },
              { icon: Zap, title: 'Innovation', description: 'Résolution créative de problèmes' }
            ].map((competency, index) => (
              <motion.div
                key={competency.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mb-4">
                  <competency.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {competency.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {competency.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
