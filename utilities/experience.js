const present = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  date: new Date().getDate(),
};

const experienceData = [
  {
    id: 3,
    companyName: "MyGate",
    companyLogo: "/images/logo-mygate.jpeg",
    startDate: { year: 2022, month: 3, date: 22 },
    endDate: present,
    location: "Bangalore, India",
    designations: [
      {
        designation: "Software Engineer I",
        employmentType: "Full Time",
        startDate: { year: 2022, month: 3, date: 22 },
        endDate: present,
        description: `Work Done:   
• Improved performance by reducing the bundle size of Chat Application by 11% and via other optimizations.

Tech Stack: ReactJS, Redux, MaterialUI`,
      },
    ],
  },
  {
    id: 2,
    companyName: "Temenos",
    companyLogo: "/images/logo-temenos.jfif",
    startDate: { year: 2019, month: 6, date: 19 },
    endDate: { year: 2022, month: 3, date: 21 },
    location: "Hyderabad, India",
    designations: [
      {
        designation: "Senior Software Engineer",
        employmentType: "Full Time",
        startDate: { year: 2021, month: 7, date: 1 },
        endDate: { year: 2022, month: 3, date: 21 },
        description: `Work Done:  
  • Responsible for converting monolithic Authentication Module for Mobile and Online Banking Application to Microapp
  `,
      },
      {
        designation: "Software Development Engineer",
        employmentType: "Full Time",
        startDate: { year: 2020, month: 8, date: 1 },
        endDate: { year: 2021, month: 6, date: 30 },
        description: `Awards & Achievements  
  • Spot Award in Q1 2021 for efforts put in making SCA release successful.  
  • Team Award in Q4 2020 for Componentization of several flows in Mobile Banking & Online Banking apps to enable Strong Customer Authentication (SCA).  
  
  Work Done:  
  • Handled the Componentization and SCA Component Integration for MB and OLB Apps.  
  • Led the development effort for Non-Legacy Build for Spotlight App.  
  • Worked on componentizing Login related modules for Mobile Banking App.  
  • Worked on 'Add Product' section of the Products Module.
  `,
      },
      {
        designation: "Associate Software Development Engineer",
        employmentType: "Internship",
        startDate: { year: 2019, month: 7, date: 1 },
        endDate: { year: 2020, month: 7, date: 31 },
        description: `Awards & Achievements  
  • 'Extra Mile Award' for contributions in Products Module & handling deployments across all environments during Q4 2019 and Q1 2020.  
  • Team Award for shipping the highly-profitable new Campaigns module.  
  
  Work Done  
  • Involved in the development of a new feature called Campaign Management in 'Spotlight' Application.  
  • Worked on the Popup Campaign feature in the Mobile Banking Application across all modules.  
  • Improved the performance of Customer Search Module significantly by limiting the number of backend-calls being made.  
  • Successfully completed many important POCs for Spotlight App which were later incorporated in the final product.  
  • Solved several critical bugs in the Spotlight App.  
  • Responsible for Spotlight App Deployment across all environments.  
          `,
      },
    ],
  },
  {
    id: 1,
    companyName: "Webhelp India",
    companyLogo: "/images/logo-webhelp.jpeg",
    startDate: { year: 2018, month: 6, date: 1 },
    endDate: { year: 2018, month: 7, date: 31 },
    location: "Gurgaon, India",
    designations: [
      {
        designation: "Data Science Intern",
        employmentType: "Internship",
        startDate: { year: 2018, month: 6, date: 1 },
        endDate: { year: 2018, month: 7, date: 31 },
        description: `The project involved working on the data of an outbound call center of a UK based insurance firm.
  The work included giving insights from the data available to the client, and then by using a machine learning classification model determine the group of customers the company should target more in order to do cost-cutting by avoiding cold calling and hence increase profits.
          
  Tech Stack:  
  • MS Excel- Analyzing Data and Data Visualization  
  • R- Data Cleaning and applying Machine Learning Model  
  • Tableau Desktop- Data Visualization`,
      },
    ],
  },
];

export default experienceData;
