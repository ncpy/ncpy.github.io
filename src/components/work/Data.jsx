import Work_pys from '../../assets/work_pys.png'
import Work_catering from '../../assets/work_catering.png'
import Work_android from '../../assets/work_android.jpg'
import Work_uber from '../../assets/work_uber.png'
import Work_portfolio from '../../assets/work_rasoft_portfolio.png'

import Python from '../../assets/python_64.png'
import Java from '../../assets/java_64.png'
import JavaScript from '../../assets/javascript_64.png'
import TypeScript from '../../assets/typescript_64.png'
import React from '../../assets/react_64.png'
import Node from '../../assets/node_64.png'
import NextJS from '../../assets/nextjs_64.png'
import PostgreSQL from '../../assets/postgresql_64.png'
import Prisma from '../../assets/prisma_64.png'
import MongoDB from '../../assets/mongodb_64.png'
import AndroidStudio from '../../assets/android_studio_64.png'

export const projectsData = [
    {
        id: 1,
        image: Work_catering,
        title: "Catering",
        category: 'Web',
        source_github: "https://github.com/RAsoft-Technology-Software/CateringProject",
        source_demo: "",
        //technologies: [ React, Node, JavaScript, PostgreSQL, Prisma ]
        technologies: { "React":React, "Node":Node, "JavaScript":JavaScript, "PostgreSQL":PostgreSQL, "Prisma ORM":Prisma }
    },
    {
        id: 2,
        image: Work_android,
        title: "Camera Streaming",
        category: 'App',
        source_github: "https://github.com/ncpy/vlc_camera_streaming",
        source_demo: "https://drive.google.com/file/d/1ZDUM4v5x5KyybK3pg1g1AePYFj93B6ba/view",
        technologies: { "Java":Java, "Android Studio":AndroidStudio }
    },
    {
        id: 3,
        image: Work_pys,
        title: "Content Management",
        category: 'Web',
        source_github: "https://github.com/RAsoft-Technology-Software/RAsoft-pys",
        source_demo: "https://pys.rasoft.com.tr",
        technologies: { "React":React, "Node":Node, "JavaScript":JavaScript, "MongoDB":MongoDB }
    },
    {
        id: 4,
        image: Work_portfolio,
        title: "Portfolio",
        category: 'Web',
        source_github: "https://github.com/RAsoft-Technology-Software/RAsoft-Web-Site",
        source_demo: "https://rasoft.dev/",
        technologies: { "React":React, "JavaScript":JavaScript, "NextJS":NextJS }
    },
    {
        id: 5,
        image: Work_uber,
        title: "Uber",
        category: 'app',
        source_github: "https://github.com/necip-yolcu/UberClone",
        source_demo: "#",
        technologies: { "Java":Java, "Android Studio":AndroidStudio }
    },
]

export const projectsNav = [
    { name: 'All', },
    { name: 'Web', },
    { name: 'App', },
    /* { name: 'Desktop', }, */
]