const present = {
  year: new Date().getFullYear(),
  month: new Date().getMonth()+1,
  date: new Date().getDate(),
};

const experienceData = [
  {
    id: 4,
    companyName: "ET Money (Times Internet)",
    companyLogo: "/images/logo-etmoney.png",
    startDate: { year: 2023, month: 3, date: 16 },
    endDate: present,
    location: "Gurgaon, India",
    designations: [
      {
        designation: "Software Engineer II",
        employmentType: "Full Time",
        startDate: { year: 2023, month: 3, date: 16 },
        endDate: present,
        description: `Work:  
• Currently working on the new Cash Product for the Web Application.   
• Created a solution using strapi to enable the SEO team to easily change the content of the FD pages without any developer intervention.   

Tech Stack: ReactJS, Redux, MaterialUI, Javascript, NextJS
`,
      },
    ],
  },
  {
    id: 3,
    companyName: "MyGate",
    companyLogo: "/images/logo-mygate.jpeg",
    startDate: { year: 2022, month: 3, date: 22 },
    endDate: { year: 2023, month: 3, date: 15 },
    location: "Bangalore, India",
    designations: [
      {
        designation: "Software Engineer I",
        employmentType: "Full Time",
        startDate: { year: 2022, month: 3, date: 22 },
        endDate: { year: 2023, month: 3, date: 15 },
        description: `Awards and Achievements:   
• Got recognised by the CTO twice in different quarters for efforts put in improving performance of Chat Application & creating the metrics JS SDK.   
        
Work:   
• Fixed a critical bug which was causing the marketing campaigns to fail when target audience size was more than ~10 lakhs.   
• Developed a backend feature for tracking the performance of Marketing Campaigns (30L+ user base)   
• Created a Javascript SDK and integrated it in all javascript based frontend applications, for capturing user metric data.   
• Responsible for creating the new UI Experience for P2P Chats in MyGate Application.   
• Reduced the chat page load time in Homes Application from around 5 seconds to under 1 second.   
• Improved the overall performance of Chat Application by reducing the bundle size by 11% and performing other optimizations.   

Tech Stack: ReactJS, Redux, MaterialUI, Javascript, NestJS, MongoDB, Mongoose ODM, RabbitMQ, Redis, Amazon S3, Amazon CloudFront`,
      },
    ],
  },
  {
    id: 2,
    companyName: "Kony India Pvt. Ltd.",
    companyLogo: "/images/logo-kony.png",
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
