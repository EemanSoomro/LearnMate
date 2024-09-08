import IntroductiontoProgramming from './assets/IntroductiontoProgramming.png';
import AdvancedWebDevelopment from './assets/AdvancedWebDevelopment.png'
import DataScienceFundamentals from './assets/DataScienceFundamentals.png'
import MachineLearningwithPython from './assets/MachineLearningwithPython.png'
import GraphicDesignBasics from './assets/GraphicDesignBasics.png'
import DigitalMarketingStrategies from './assets/DigitalMarketingStrategies.png'
import IntroductiontoCybersecurity from './assets/IntroductiontoCybersecurity.png'
import JavaScriptEssentials from './assets/JavaScriptEssentials.png'
import AdvancedDatabaseManagement from './assets/AdvancedDatabaseManagement.png'
import FullStackWebDevelopment from './assets/FullStackWebDevelopment.png'
import IntroductiontoAIandMachineLearning from './assets/IntroductiontoAIandMachineLearning.png'
import ProjectManagementFundamentals from './assets/ProjectManagementFundamentals.png'
import CloudComputingBasics from './assets/CloudComputingBasics.png'
import UserExperienceDesign from './assets/UserExperienceDesign.png'
import IntroductiontoBlockchainTechnology from './assets/IntroductiontoBlockchainTechnology.png'
import ReactforBeginners from './assets/ReactforBeginners.png'
import IntroductiontoSQL from './assets/IntroductiontoSQL.png'
import AngularDevelopment from './assets/AngularDevelopment.png'
import DataVisualizationwithD3js from './assets/DataVisualizationwithD3js.png'
import IntroductiontoDataAnalytics from './assets/IntroductiontoDataAnalytics.png'
import IntroductiontoPythonProgramming from './assets/IntroductiontoPythonProgramming.png'
import WebDesignFundamentals from './assets/WebDesignFundamentals.png'
import IntroductiontoAlgorithms from './assets/IntroductiontoAlgorithms.png'
import JavaProgrammingforBeginners from './assets/JavaProgrammingforBeginners.png'
import IntroductiontoWebAPIs from './assets/IntroductiontoWebAPIs.png'
import IntroductiontoGameDevelopment from './assets/IntroductiontoGameDevelopment.png'
import IntroductiontoEthicalHacking from './assets/IntroductiontoEthicalHacking.png'
import IntroductiontoSQLServer from './assets/IntroductiontoSQLServer.png'
import IntroductiontoDocker from './assets/IntroductiontoDocker.png'
import IntroductiontoKubernetes from './assets/IntroductiontoKubernetes.png'
import IntroductiontoSwiftProgramming from './assets/IntroductiontoSwiftProgramming.png'
import IntroductiontoStructuralEngineering from './assets/IntroductiontoStructuralEngineering.png'
import FundamentalsofGeotechnicalEngineering from './assets/FundamentalsofGeotechnicalEngineering.png'
import HydraulicsandHydrology from './assets/HydraulicsandHydrology.png'
import TransportationEngineering from './assets/TransportationEngineering.png'



const courses = [
  {
    id: 1,
    name: 'Introduction to Programming',
    description: 'Learn the basics of programming using popular languages.',
    image: IntroductiontoProgramming ,
    category: 'beginner',
    price: 29.99,
    rating: 4.5,
    syllabus: 'Basic programming concepts, variables, control flow, functions.',
    instructor: 'Jane Doe',
    reviews: [
      { name: 'Alice', comment: 'Great course for beginners!' },
      { name: 'Bob', comment: 'Very informative and well-structured.' }
    ]
  },
  {
    id: 2,
    name: 'Advanced Web Development',
    description: 'Master advanced techniques in web development.',
    image: AdvancedWebDevelopment ,
    category: 'intermediate',
    price: 49.99,
    rating: 4.7,
    syllabus: 'Advanced HTML, CSS, JavaScript, responsive design, frameworks.',
    instructor: 'John Smith',
    reviews: [
      { name: 'Carol', comment: 'In-depth and practical.' },
      { name: 'Dave', comment: 'Challenging but rewarding.' }
    ]
  },
  {
    id: 3,
    name: 'Data Science Fundamentals',
    description: 'Understand the core concepts of data science and analytics.',
    image: DataScienceFundamentals,
    category: 'beginner',
    price: 39.99,
    rating: 4.8,
    syllabus: 'Statistics, data visualization, data cleaning, machine learning basics.',
    instructor: 'Alice Johnson',
    reviews: [
      { name: 'Emily', comment: 'Fantastic introduction to data science.' },
      { name: 'Frank', comment: 'Highly recommend for newcomers.' }
    ]
  },
  {
    id: 4,
    name: 'Machine Learning with Python',
    description: 'Build and deploy machine learning models using Python.',
    image: MachineLearningwithPython,
    category: 'advanced',
    price: 59.99,
    rating: 4.9,
    syllabus: 'Supervised learning, unsupervised learning, neural networks, model evaluation.',
    instructor: 'Michael Brown',
    reviews: [
      { name: 'George', comment: 'Excellent course on machine learning.' },
      { name: 'Hannah', comment: 'In-depth and well-structured.' }
    ]
  },
  {
    id: 5,
    name: 'Graphic Design Basics',
    description: 'Learn the fundamentals of graphic design and visual communication.',
    image: GraphicDesignBasics,
    category: 'beginner',
    price: 19.99,
    rating: 4.6,
    syllabus: 'Design principles, typography, color theory, software tools.',
    instructor: 'Sara Davis',
    reviews: [
      { name: 'Isabella', comment: 'Great for getting started with design.' },
      { name: 'Jack', comment: 'Very helpful and practical.' }
    ]
  },
  {
    id: 6,
    name: 'Digital Marketing Strategies',
    description: 'Explore effective strategies for digital marketing and SEO.',
    image: DigitalMarketingStrategies,
    category: 'intermediate',
    price: 34.99,
    rating: 4.3,
    syllabus: 'SEO, content marketing, social media marketing, PPC.',
    instructor: 'Rachel Lee',
    reviews: [
      { name: 'Karen', comment: 'Informative and actionable strategies.' },
      { name: 'Liam', comment: 'Well-organized and thorough.' }
    ]
  },
  {
    id: 7,
    name: 'Introduction to Cybersecurity',
    description: 'Understand the basics of cybersecurity and data protection.',
    image: IntroductiontoCybersecurity,
    category: 'beginner',
    price: 39.99,
    rating: 4.4,
    syllabus: 'Cyber threats, risk management, encryption, network security.',
    instructor: 'James Wilson',
    reviews: [
      { name: 'Mia', comment: 'Great start for learning cybersecurity.' },
      { name: 'Nate', comment: 'Very insightful and practical.' }
    ]
  },
  {
    id: 8,
    name: 'JavaScript Essentials',
    description: 'Learn JavaScript from scratch and build interactive websites.',
    image: JavaScriptEssentials,
    category: 'beginner',
    price: 24.99,
    rating: 4.6,
    syllabus: 'JavaScript syntax, DOM manipulation, event handling, AJAX.',
    instructor: 'Sophia Taylor',
    reviews: [
      { name: 'Olivia', comment: 'Excellent introduction to JavaScript.' },
      { name: 'Paul', comment: 'Very engaging and practical.' }
    ]
  },
  {
    id: 9,
    name: 'Advanced Database Management',
    description: 'Master advanced concepts in database design and management.',
    image: AdvancedDatabaseManagement,
    category: 'advanced',
    price: 49.99,
    rating: 4.7,
    syllabus: 'Database optimization, indexing, transactions, SQL advanced techniques.',
    instructor: 'David White',
    reviews: [
      { name: 'Quinn', comment: 'Comprehensive and detailed.' },
      { name: 'Rachel', comment: 'Great for advanced database topics.' }
    ]
  },
  {
    id: 10,
    name: 'Full Stack Web Development',
    description: 'Learn both front-end and back-end development techniques.',
    image: FullStackWebDevelopment,
    category: 'advanced',
    price: 59.99,
    rating: 4.8,
    syllabus: 'Front-end technologies, back-end technologies, full stack projects.',
    instructor: 'Emma Harris',
    reviews: [
      { name: 'Steve', comment: 'Fantastic overview of full stack development.' },
      { name: 'Tina', comment: 'Highly recommended for aspiring developers.' }
    ]
  },
  {
    id: 11,
    name: 'Introduction to AI and Machine Learning',
    description: 'Get started with artificial intelligence and machine learning concepts.',
    image:  IntroductiontoAIandMachineLearning,
    category: 'intermediate',
    price: 44.99,
    rating: 4.5,
    syllabus: 'AI fundamentals, machine learning models, neural networks, applications.',
    instructor: 'Liam Johnson',
    reviews: [
      { name: 'Uma', comment: 'Great foundation in AI and ML.' },
      { name: 'Victor', comment: 'Well-structured and practical.' }
    ]
  },
  {
    id: 12,
    name: 'Project Management Fundamentals',
    description: 'Learn the essential skills for effective project management.',
    image: ProjectManagementFundamentals,
    category: 'beginner',
    price: 29.99,
    rating: 4.3,
    syllabus: 'Project planning, risk management, team management, project lifecycle.',
    instructor: 'Zoe Green',
    reviews: [
      { name: 'Will', comment: 'Very useful for beginners.' },
      { name: 'Xander', comment: 'Clear and concise content.' }
    ]
  },
  {
    id: 13,
    name: 'Cloud Computing Basics',
    description: 'Understand the principles and services of cloud computing.',
    image: CloudComputingBasics,
    category: 'beginner',
    price: 34.99,
    rating: 4.6,
    syllabus: 'Cloud service models, deployment models, cloud architecture, basic services.',
    instructor: 'Nancy Martinez',
    reviews: [
      { name: 'Yara', comment: 'Great introduction to cloud computing.' },
      { name: 'Zane', comment: 'Very insightful and practical.' }
    ]
  },
  {
    id: 14,
    name: 'User Experience Design',
    description: 'Learn how to design user-friendly and engaging experiences.',
    image: UserExperienceDesign,
    category: 'intermediate',
    price: 39.99,
    rating: 4.7,
    syllabus: 'UX principles, user research, wireframing, prototyping, usability testing.',
    instructor: 'Olivia Allen',
    reviews: [
      { name: 'Aiden', comment: 'Fantastic UX course.' },
      { name: 'Bella', comment: 'Practical and informative.' }
    ]
  },
  {
    id: 15,
    name: 'Introduction to Blockchain Technology',
    description: 'Explore the basics of blockchain and its applications.',
    image: IntroductiontoBlockchainTechnology,
    category: 'intermediate',
    price: 54.99,
    rating: 4.4,
    syllabus: 'Blockchain fundamentals, consensus mechanisms, smart contracts, applications.',
    instructor: 'Ethan Walker',
    reviews: [
      { name: 'Chloe', comment: 'Great overview of blockchain technology.' },
      { name: 'Dylan', comment: 'Very detailed and insightful.' }
    ]
  },
  {
    id: 16,
    name: 'React for Beginners',
    description: 'Get started with React and build interactive user interfaces.',
    image: ReactforBeginners ,
    category: 'beginner',
    price: 39.99,
    rating: 4.7,
    syllabus: 'React basics, components, state management, hooks, routing.',
    instructor: 'James Taylor',
    reviews: [
      { name: 'Emma', comment: 'Excellent for learning React.' },
      { name: 'Ethan', comment: 'Clear and practical.' }
    ]
  },
  {
    id: 17,
    name: 'Introduction to SQL',
    description: 'Learn the basics of SQL and relational database management.',
    image: IntroductiontoSQL,
    category: 'beginner',
    price: 24.99,
    rating: 4.5,
    syllabus: 'SQL syntax, queries, joins, database design, optimization.',
    instructor: 'Jessica Lee',
    reviews: [
      { name: 'Luca', comment: 'Great for beginners to SQL.' },
      { name: 'Nina', comment: 'Very informative and easy to follow.' }
    ]
  },
  {
    id: 18,
    name: 'Angular Development',
    description: 'Learn how to develop web applications using Angular.',
    image: AngularDevelopment,
    category: 'intermediate',
    price: 44.99,
    rating: 4.6,
    syllabus: 'Angular fundamentals, components, directives, services, routing.',
    instructor: 'Sophia Anderson',
    reviews: [
      { name: 'Oliver', comment: 'Comprehensive Angular course.' },
      { name: 'Paige', comment: 'Well-explained and practical.' }
    ]
  },
  {
    id: 19,
    name: 'Data Visualization with D3.js',
    description: 'Master data visualization techniques using D3.js.',
    image: DataVisualizationwithD3js,
    category: 'advanced',
    price: 49.99,
    rating: 4.8,
    syllabus: 'D3.js basics, data binding, scales, axes, charts, and graphs.',
    instructor: 'Benjamin Harris',
    reviews: [
      { name: 'Quincy', comment: 'Excellent for learning D3.js.' },
      { name: 'Riley', comment: 'Very insightful and detailed.' }
    ]
  },
  {
    id: 20,
    name: 'Introduction to Data Analytics',
    description: 'Understand the core principles of data analytics and tools.',
    image: IntroductiontoDataAnalytics ,
    category: 'beginner',
    price: 29.99,
    rating: 4.5,
    syllabus: 'Data collection, data cleaning, statistical analysis, data visualization.',
    instructor: 'Emily Clark',
    reviews: [
      { name: 'Ariana', comment: 'Great starting point for data analytics.' },
      { name: 'Cameron', comment: 'Very informative and useful.' }
    ]
  },
  {
    id: 21,
    name: 'Introduction to Python Programming',
    description: 'Learn the basics of Python programming and data analysis.',
    image: IntroductiontoPythonProgramming,
    category: 'beginner',
    price: 34.99,
    rating: 4.7,
    syllabus: 'Python syntax, data types, functions, file handling, libraries.',
    instructor: 'Olivia Wilson',
    reviews: [
      { name: 'Evan', comment: 'Fantastic introduction to Python.' },
      { name: 'Fiona', comment: 'Very practical and easy to understand.' }
    ]
  },
  {
    id: 22,
    name: 'Web Design Fundamentals',
    description: 'Learn the basics of web design, including HTML and CSS.',
    image: WebDesignFundamentals,
    category: 'beginner',
    price: 19.99,
    rating: 4.4,
    syllabus: 'HTML basics, CSS styling, layout techniques, responsive design.',
    instructor: 'David Moore',
    reviews: [
      { name: 'Gina', comment: 'Great course for getting started.' },
      { name: 'Henry', comment: 'Very well-organized and practical.' }
    ]
  },
  {
    id: 23,
    name: 'Introduction to Algorithms',
    description: 'Understand fundamental algorithms and problem-solving techniques.',
    image: IntroductiontoAlgorithms,
    category: 'intermediate',
    price: 39.99,
    rating: 4.6,
    syllabus: 'Algorithm design, sorting algorithms, search algorithms, complexity analysis.',
    instructor: 'Hannah Robinson',
    reviews: [
      { name: 'Ian', comment: 'Great course on algorithms.' },
      { name: 'Jenna', comment: 'Very thorough and practical.' }
    ]
  },
  {
    id: 24,
    name: 'Java Programming for Beginners',
    description: 'Learn the basics of Java programming and object-oriented design.',
    image: JavaProgrammingforBeginners,
    category: 'beginner',
    price: 34.99,
    rating: 4.5,
    syllabus: 'Java syntax, OOP principles, exception handling, collections.',
    instructor: 'Michael Harris',
    reviews: [
      { name: 'Kelly', comment: 'Very helpful for Java beginners.' },
      { name: 'Louis', comment: 'Clear and concise explanations.' }
    ]
  },
  {
    id: 25,
    name: 'Introduction to Web APIs',
    description: 'Learn how to use and create web APIs for modern applications.',
    image: IntroductiontoWebAPIs,
    category: 'intermediate',
    price: 29.99,
    rating: 4.7,
    syllabus: 'REST APIs, API endpoints, JSON, authentication, API documentation.',
    instructor: 'Chris Lewis',
    reviews: [
      { name: 'Morgan', comment: 'Great for understanding web APIs.' },
      { name: 'Nora', comment: 'Very practical and insightful.' }
    ]
  },
  {
    id: 26,
    name: 'Introduction to Game Development',
    description: 'Explore the basics of game development and design principles.',
    image: IntroductiontoGameDevelopment,
    category: 'beginner',
    price: 39.99,
    rating: 4.4,
    syllabus: 'Game design principles, game engines, basic scripting, asset creation.',
    instructor: 'Alex Scott',
    reviews: [
      { name: 'Owen', comment: 'Fantastic introduction to game development.' },
      { name: 'Penny', comment: 'Very engaging and practical.' }
    ]
  },
  {
    id: 27,
    name: 'Introduction to Ethical Hacking',
    description: 'Learn the fundamentals of ethical hacking and penetration testing.',
    image: IntroductiontoEthicalHacking,
    category: 'intermediate',
    price: 49.99,
    rating: 4.6,
    syllabus: 'Ethical hacking principles, penetration testing, vulnerability assessment, tools.',
    instructor: 'Daniel Carter',
    reviews: [
      { name: 'Quinn', comment: 'Great course for aspiring ethical hackers.' },
      { name: 'Riley', comment: 'Very detailed and practical.' }
    ]
  },
  {
    id: 28,
    name: 'Introduction to SQL Server',
    description: 'Learn to manage databases using SQL Server.',
    image: IntroductiontoSQLServer,
    category: 'beginner',
    price: 29.99,
    rating: 4.5,
    syllabus: 'SQL Server basics, T-SQL, database design, querying and reporting.',
    instructor: 'Ella Taylor',
    reviews: [
      { name: 'Steve', comment: 'Great for learning SQL Server.' },
      { name: 'Tracy', comment: 'Very helpful and practical.' }
    ]
  },
  {
    id: 29,
    name: 'Introduction to Docker',
    description: 'Learn how to use Docker for containerization and deployment.',
    image: IntroductiontoDocker,
    category: 'intermediate',
    price: 34.99,
    rating: 4.7,
    syllabus: 'Docker basics, containerization, Dockerfile, Docker Compose, deployment.',
    instructor: 'Katie Evans',
    reviews: [
      { name: 'Ursula', comment: 'Excellent course on Docker.' },
      { name: 'Vera', comment: 'Very detailed and practical.' }
    ]
  },
  {
    id: 30,
    name: 'Introduction to Kubernetes',
    description: 'Learn the basics of Kubernetes for container orchestration.',
    image: IntroductiontoKubernetes,
    category: 'advanced',
    price: 49.99,
    rating: 4.8,
    syllabus: 'Kubernetes fundamentals, pods, services, deployments, scaling.',
    instructor: 'Liam White',
    reviews: [
      { name: 'Wendy', comment: 'Great course for Kubernetes beginners.' },
      { name: 'Xander', comment: 'Very informative and practical.' }
    ]
  },
  {
    id: 31,
    name: 'Introduction to Swift Programming',
    description: 'Learn the basics of Swift programming for iOS development.',
    image: IntroductiontoSwiftProgramming,
    category: 'beginner',
    price: 34.99,
    rating: 4.6,
    syllabus: 'Swift syntax, data types, functions, object-oriented programming, iOS basics.',
    instructor: 'Megan Brooks',
    reviews: [
      { name: 'Yara', comment: 'Great introduction to Swift.' },
      { name: 'Zane', comment: 'Very practical and easy to follow.' }
    ]
  },
  {
    id: 32,
    name: 'Introduction to Structural Engineering',
    description: 'Learn the basics of structural analysis and design principles.',
    image: IntroductiontoStructuralEngineering,
    category: 'beginner',
    price: 39.99,
    rating: 4.7,
    syllabus: 'Structural analysis basics, load types, design of beams and columns.',
    instructor: 'Dr. John Smith',
    reviews: [
      { name: 'Emily', comment: 'Great introduction to structural concepts.' },
      { name: 'Michael', comment: 'Very well explained and practical.' }
    ]
  },
  {
    id: 33,
    name: 'Fundamentals of Geotechnical Engineering',
    description: 'Explore the basics of soil mechanics and foundation design.',
    image: FundamentalsofGeotechnicalEngineering,
    category: 'intermediate',
    price: 44.99,
    rating: 4.8,
    syllabus: 'Soil properties, soil testing, foundation types, bearing capacity.',
    instructor: 'Dr. Sarah Johnson',
    reviews: [
      { name: 'James', comment: 'Comprehensive and easy to follow.' },
      { name: 'Sophia', comment: 'Excellent course on geotechnical engineering.' }
    ]
  },
  {
    id: 34,
    name: 'Hydraulics and Hydrology',
    description: 'Learn the principles of fluid mechanics and water resource management.',
    image: HydraulicsandHydrology,
    category: 'beginner',
    price: 29.99,
    rating: 4.6,
    syllabus: 'Fluid properties, flow types, open channel flow, water resources.',
    instructor: 'Dr. Robert Lee',
    reviews: [
      { name: 'Oliver', comment: 'Very informative and well-structured.' },
      { name: 'Amelia', comment: 'A must for aspiring civil engineers.' }
    ]
  },
  {
    id: 35,
    name: 'Transportation Engineering',
    description: 'Understand the planning, design, and operation of transportation systems.',
    image: TransportationEngineering,
    category: 'intermediate',
    price: 49.99,
    rating: 4.7,
    syllabus: 'Traffic engineering, highway design, transportation planning, pavement design.',
    instructor: 'Dr. Jessica Davis',
    reviews: [
      { name: 'William', comment: 'Great insights into transportation systems.' },
      { name: 'Ava', comment: 'Very engaging and practical.' }
    ]
  }
];

export default courses;