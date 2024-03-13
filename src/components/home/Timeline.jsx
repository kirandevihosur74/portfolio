import '../../scss/verticalTimeline.scss'

const timelineData = [
  {
    id: '1',
    title: 'University of Colorado Boulder',
    date: 'August 2023 - May 2025',
    shortDescription: 'Master of Science in Data Science',
    shortDescription:'GPA - 4.00/4.00',
    description:
      "I am a motivated graduate student pursuing a Master's degree in Data Science at the University of Colorado Boulder. With a robust technical background and a knack for solving complex problems, I am enthusiastic about leveraging technology to foster beneficial transformations in society.",
    tags: [
      'Data Structures and Algorithms',
      'Machine Learning',
      'Data Mining',
      'Data Science as a Field',
      'Cybersecurity for Data Science',
      'Statistical Methods and Applications I',
      'Statistical Methods and Applications II',
    ],
  },
  {
    id: '2',
    title: 'TEKsystems Global Services',
    date: 'August 2021 - June 2023',
    shortDescription: 'Full Stack Developer',
    bulletedList: [
      "Led the development and successful delivery of critical product enhancements for a Java-based web application in an agile environment. Increased the application's capability by 30% and improved the user experience by 20%.",
      "Engineered and optimized UI components using React and Material-UI, contributing to a 40% improvement in page load times and an 18% increase in overall user engagement. Simultaneously, constructed server-side REST APIs with Spring Boot, ensuring a responsive user interface coupled with a resilient back-end architecture."
    ],
    tags: ['React','TypeScript','HTML','CSS','JavaScript','Material-UI','Git','Jest','Java', 'Spring Boot', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'MySQL','REST API'],
  },
  {
    id: '3',
    title: 'Accenture',
    date: 'November 2020 - August 2021',
    shortDescription: 'Associate Software Engineer',
    bulletedList: [
      "Created React components for the client-side web application, improving the user interface. Conducted unit testing with Jest, achieving 95% test coverage for reliable and high-quality user interface.",
      "Debugged and resolved software bugs, implementing testable and efficient code solutions. Improved codebase, reducing software errors by 20%."

    ],
    tags: ['React','HTML','CSS','JavaScript','Material-UI', 'Git','Jest','Express.js', 'Node.js', 'AWS','MongoDB','REST API'],
  },
  {
    id: '4',
    title: 'Transil Technologies Private Limited',
    date: 'Jan 2020 - June 2020',
    shortDescription: 'Junior Software Developer Intern',
    bulletedList: [
      'Enhanced the development lifecycle of multiple applications by implementing DevOps practices such as CI/CD pipelines, resulting in a 15% increase in deployment frequency and reducing lead time to market by 40% using Kubernetes, Docker, Puppet, and Gitlab.',
      'Streamlined various migration tasks by building automation scripts with Bash scripting and Python, reducing manual effort by 60% across all applications.',
    ],
    tags: ['DevOps', 'CI/CD', 'Cloud Computing', 'Git', 'React', 'HTML', 'CSS', 'JavaScript', 'Material-UI', 'Node.js','MongoDB'],
  },
  {
    id: '5',
    title: "KLE Technological University",
    date: 'August 2016 - October 2020',
    shortDescription: 'Bachelor of Technology in Computer Science',
    shortDescription:'GPA - 8.52/10.00',
    description:
      "Completed my Bachelors's degree in Computer Science from KLE Technological University, Hubballi, India.",
    tags: [
      'Data Structures and Algorithms',
      'Operating Systems',
      'Computer Organization and Architecture',
      'Computer Networks',
      'Programming in C',
      'Object Oriented Programming',
      'Database Management Systems',
      'Web Technology',
      'Software Engineering',
      'Machine Learning',
      'Internet of Things',
      'Problem Solving in C++',
      'Information Security',
      'Cybersecurity',
      'System Software',
      'Principles of Compiler Design',
      'Distributed and Cloud Computing'
    ],
  },
  
]

const TimelineCard = ({
  title,
  date,
  shortDescription,
  description,
  bulletedList,
  tags,
}) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div className="font-caveat font-medium text-xl text-primary mb-1 sm:mb-0">
        {title}
      </div>
      
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden 
        before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px
      before:bg-accent sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 
      after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content 
      after:border-accent after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
      >
      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-36 sm:w-20 h-6 mb-3 sm:mb-0 text-primary bg-primary-background rounded-full">
        {date}
      </time>
      <div className="text-md font-bold text-muted-foreground dark:text-muted">
        {shortDescription}
      </div>
    </div>
      
    {description && (
      <div className="text-muted-foreground mb-2">{description}</div>
    )}
    {bulletedList && (
      <ul className="list-disc list-inside text-muted-foreground mb-2">
        {bulletedList.map((item) => (
        <li>{item}</li>
        ))}
      </ul>
    )}
      
    <ul className="flex gap-3 mb-6 md:mb-10 flex-wrap items-center">
      {tags.map((tag) => (
        <li className="text-sm flex items-center border bg-transparent rounded-full px-4 py-2">
        {tag}
        </li>
      ))}
    </ul>
  </div>
  )
}
      
const VerticalTimeline = () => {
  return (
    <div className="container my-16">
      <h1 className='display-4 mb-5 text-center' id="professionaljourney">Professional Journey</h1>
      {timelineData.map((data) => (
        <TimelineCard key={data.id} {...data} />
      ))}
    </div>
  )
}
    
export default VerticalTimeline