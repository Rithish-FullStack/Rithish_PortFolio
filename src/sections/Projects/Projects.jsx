import styles from './ProjectsStyles.module.css';
import Human from '../../assets/Human.png';
import Notes from '../../assets/Notes.png';
import Pedestrian from '../../assets/Pedestrian.png';
import Weather from '../../assets/Weather.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Human}
          link="https://github.com/Rithish-FullStack/Human_Activity_Recognition_CNN_LSTM"
          h3="TensorFlow"
          p="Human Activity Recognition"
        />
        <ProjectCard
          src={Notes}
          link="https://github.com/Rithish-FullStack/Notify_ReactJS"
          h3="ReactJS"
          p="Notes Taking App"
        />
        <ProjectCard
          src={Pedestrian}
          link="https://github.com/Rithish-FullStack/Pedestrian_Detection_Using_OPENCV"
          h3="OpenCV & Keras"
          p="Pedestrian Detection"
        />
        <ProjectCard
          src={Weather}
          link="https://github.com/Rithish-FullStack/Weather-App"
          h3="HTML,CSS & JS"
          p="Weather App"
        />
      </div>
    </section>
  );
}

export default Projects;
