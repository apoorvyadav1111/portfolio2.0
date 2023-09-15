export type SkillType = {
    name: string;
    skills: string[];
};

export const skills: SkillType[] = [
    {
        name: "Languages",
        skills: ["Python", "Java", "C", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
    },
    {
        name: "Databases",
        skills: ["MySQL", "MongoDB", "Hive", "Redis"],
    },
    {
        name: "Web Frameworks",
        skills: ["React", "Node.js", "Express", "Vue","Vuetify","Framer-Motion","Apollo GraphQL","Django Rest Framework", "JQuery", "Styled Components"],
    },
    {
        name: "Big Data",
        skills: ["Apache Spark", "Apache Zeppelin", "HDFS", "Hue", "Sqoop", "SparkSQL"]
    },
    {
        name:"Data Visualization",
        skills:["Tableau","Matplotlib", "Seaborn", "Pandas", "Highcharts"]
    },
    {
        name: "Frameworks",
        skills:["Pytorch", "Tensorflow", "Numpy", "Git", "Agile", "Jira", "Confluence", "MyService", "TeamCity", "Microsoft Office"]
    },
];