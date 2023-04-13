import Work1 from '../../assets/work1.jpg'
import Work2 from '../../assets/work2.jpg'
import Work3 from '../../assets/work3.jpg'
import Work4 from '../../assets/work4.jpg'
import Work5 from '../../assets/work5.jpg'

import Python from '../../assets/python_64.png'
import Java from '../../assets/java_64.png'
import JavaScript from '../../assets/javascript_64.png'
import TypeScript from '../../assets/typescript_64.png'
import React from '../../assets/react_64.png'
import Node from '../../assets/node_64.png'
import NodeJS from '../../assets/nodejs_48.png'
import NextJS from '../../assets/nextjs_64.png'
import PostgreSQL from '../../assets/postgresql_64.png'
import Prisma from '../../assets/prisma_64.png'
import MongoDB from '../../assets/mongodb_64.png'
import AndroidStudio from '../../assets/android_studio_64.png'

export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: "Catering",
        category: 'Web',
        source_github: "https://github.com/RAsoft-Technology-Software/CateringProject",
        source_demo: "",
        //technologies: [ React, Node, JavaScript, PostgreSQL, Prisma ]
        technologies: { "React":React, "Node":Node, "JavaScript":JavaScript, "PostgreSQL":PostgreSQL, "Prisma ORM":Prisma }
    },
    {
        id: 2,
        image: Work2,
        title: "Content Management",
        category: 'Web',
        source_github: "https://github.com/RAsoft-Technology-Software/RAsoft-pys",
        source_demo: "https://pys.rasoft.com.tr",
        technologies: { "React":React, "Node":Node, "JavaScript":JavaScript, "MongoDB":MongoDB }
    },
    {
        id: 3,
        image: Work3,
        title: "Camera Streaming",
        category: 'App',
        source_github: "https://github.com/ncpy/vlc_camera_streaming",
        source_demo: "https://drive.google.com/file/d/1ZDUM4v5x5KyybK3pg1g1AePYFj93B6ba/view",
        technologies: { "Java":Java, "Android Studio":AndroidStudio }
    },
    {
        id: 4,
        image: Work4,
        title: "Content Management",
        category: 'Desktop',
        source_github: "",
        source_demo: "",
        technologies: { }
    },
    {
        id: 5,
        image: Work5,
        title: "Portfolio",
        category: 'Web',
        source_github: "https://github.com/RAsoft-Technology-Software/RAsoft-Web-Site",
        source_demo: "https://rasoft.dev/",
        technologies: { "React":React, "JavaScript":JavaScript, "NextJS":NextJS }
    },
]

export const projectsNav = [
    { name: 'All', },
    { name: 'Web', },
    { name: 'App', },
    { name: 'Desktop', },
]