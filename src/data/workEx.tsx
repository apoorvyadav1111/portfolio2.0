export type WorkEx = {
    position: string;
    company: string;
    companyLink: string;
    time: string;
    address: string;
    work: string;
}

export const workEx: WorkEx[] = [
    {
        position: "Graduate Assistant",
        company: "Binghamton University",
        companyLink: "https://www.binghamton.edu",
        time: "Aug 2023 - Present",
        address: "Binghamton, NY",
        work: `Developed an interactive analytical dashboard using MongoDB, Express.js, highcharts, and Node.js  for visualizing unstructured data and enabling data analysis
        Successfully migrated an existing frontend application using Express templates to Vue leading to a reduction of DOM load time by 83%.
        Improved network request performance by 90% using Redis for server-side caching`

    },
    {
        position: "Big Data Developer",
        company: "Tata Consultancy Services",
        companyLink: "https://tcs.com",
        time: "June 2019 - July 2022",
        address: "Bengaluru, India",
        work: `Exported ~25 million daily records to downstream users to gain insights into financial crime
        Optimized ETL jobs with up to 50% reduction in runtime, aligning them with the required SLA of 60 minutes
        Implemented strategic load assurance in 60 ETL pipelines, reducing job failure incidents and debugging time
        Supervised 10 new members and created virtual onboarding checklists and sessions to facilitate professional development goals`
    },
    {
        position: "Systems Engineer Trainee",
        company: "Tata Consultancy Services",
        companyLink: "https://tcs.com",
        time: "Jan 2019 - Apr 2019",
        address: "Remote (India)",
        work: `Trained random forests classifier with ~90% accuracy for lung cancer prediction hackathon, ranked 1st among the batch`
    }
]
