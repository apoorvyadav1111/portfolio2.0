export type EducationDetail = {
    degree: string;
    major: string;
    url: string;
    time: string;
    address: string;
    name: string;
    grade: string;
    courseWork: string;
}

export const educationDetail: EducationDetail[] = [
    {
        degree: "Master of Science",
        major: "Computer Science",
        url: "https://www.binghamton.edu",
        time: "Aug 2022 - May 2024",
        address: "Binghamton, NY",
        name: "Binghamton University",
        grade: "4.0/4.0",
        courseWork:`Algorithms, 
            Operating Systems, 
            Machine Learning, 
            Web Programming, 
            Computer Architecture, 
            Programming Languages, 
            Software Project Management, 
            Design Patterns,
            Social Media Data Analytics,
        `
    },
    {
        degree: "Bachelor of Engineering",
        major: "Computer Science and Engineering",
        url: "https://www.medicaps.ac.in",
        time: "Aug 2015 - May 2019",
        address: "Indore, India",
        name: "Medi-Caps University",
        grade: "7.64/10",
        courseWork:`Course Work included
        Algorithms, 
        Operating Systems, 
        Machine Learning, 
        Web Programming, 
        Computer Architecture, 
        Data Structures,
        Mathematics,
        Database Management Systems
    `
    },
    {
        degree: "Senior Secondary",
        major: "XII",
        url: "http://www.shivpuripublicschoolshivpuri.com",
        time: "April 2013 - May 2015",
        address: "Shivpuri, India",
        name: "Shivpuri Public School",
        grade: "86%",
        courseWork:"Physics, Chemistry, Mathematics"
    }
]
