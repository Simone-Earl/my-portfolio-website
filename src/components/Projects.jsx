import { motion } from 'framer-motion';
import { projectData } from '../data';

function Projects() {
  return (
    <section className="projects" id="projects">

      {/* Technical Section Badge */}
      <motion.div 
        className="section-badge"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        02 // SELECTED WORK
      </motion.div>

      <motion.h2 
        className="section-title section-title-dark"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Projects.
      </motion.h2>
      
      <div className="project-grid">
        {projectData.map((project, index) => (
          <motion.article 
            key={project.id} 
            className="project-card project-card-dark"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
          >
            {/* Hover Glow Effect */}
            <div className="card-glow"></div>
            
            <div className="card-content">
              <span className="project-number">0{index + 1}</span>
              <h3 className="project-title project-title-dark">{project.title}</h3>
              <p className="project-description project-description-dark">{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link project-link-dark">
                View Project ↗
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;