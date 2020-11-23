import { Injectable } from '@angular/core';

// interface SkillsItems {
//   array: {
//     title: string;
//     skills: string[];
//     cName: string[];
//   }[];
// }

interface SkillsItems {
  title: string;
  skills: string[];
  cName: string[];
  title2: any;
  skills2: any[];
}
interface Projects {
  title: string;
  projects: {
    projectTitle: string;
    projectsImgUrl: string;
    btnVName: string;
    btnVUrl: string;
    btnGName: string;
    btnGUrl: string;
    // cName: string[];
    target: any;
  }[];
}

interface ProjectsInfo {
  desc: string;
  imgUrl: string;
}
[];

@Injectable({
  providedIn: 'root',
})
export class ArrayListService {
  borderRadiusLeft = 'border-radius-left';
  skillsColBorder = 'skills-col-border';
  radius = 'radius';

  public skillsItems: SkillsItems[];
  public projects: Projects[];
  public QCA: ProjectsInfo[];
  public CA: ProjectsInfo[];
  public ADAS: ProjectsInfo[];
  constructor() {
    this.skillsItems = [
      {
        title: 'Database/ \nCloud Storage',
        title2: 'Frameworks & \n JS Libraries',
        skills: ['SQL \n', 'FIREBASE \n'],
        skills2: ['BOOTSTRAP \n', 'REACT', 'ANGULAR'],
        cName: ['border-radius-left skills-col-border radius'],
      },
      {
        title: 'Coding Languages',
        title2: false,
        skills2: [],
        skills: [
          'HTML\n',
          'ASP.NET CORE\n',
          'CSS \n',
          'PYTHON \n',
          'JAVASCRIPT \n',
          'JAVA \n',
          'SWIFT \n',
        ],
        cName: ['skills-col-border radius'],
      },
      {
        title: 'Tools',
        title2: 'Source Control',
        skills: [
          'ANDROID STUDIO \n',
          'VISUAL STUDIO \n',
          'VISUAL STUDIO CODE \n',
          'BRACKETS \n',
          'CHROME DEV TOOLS',
        ],
        skills2: ['GITHUB \n'],
        cName: ['border-radius-right skills-col-border radius'],
      },
    ];

    // -----------PROJECTS MAIN PAGE ARRAY-----------

    this.projects = [
      {
        title: 'Android Projects ',
        projects: [
          {
            projectTitle: 'Quick Coaching App',
            projectsImgUrl: 'assets/images/project-screens/project_1.png',
            btnVName: 'View',
            btnVUrl: 'qca',
            btnGName: 'Github',
            btnGUrl: 'https://github.com/RMelvina/RecipesApp.git',
            // cName: ['btn view github'],
            target: false,
          },
          {
            projectTitle: 'Cooking Apps',
            projectsImgUrl: 'assets/images/project-screens/project_2.png',
            btnVName: 'View',
            btnVUrl: 'ca',
            btnGName: 'Github',
            btnGUrl: 'https://github.com/timeoutmode/ADAS.git',
            // cName: ['btn view github'],
            target: false,
          },
          {
            projectTitle: 'Alzheimers Disease Assessment Scale App',
            projectsImgUrl: 'assets/images/project-screens/project_3.jpg',
            btnVName: 'View',
            btnVUrl: 'adas',
            btnGName: 'Github',
            btnGUrl: 'https://github.com/RMelvina/QuickCoachingApp.git',
            // cName: ['btn view github'],
            target: false,
          },
        ],
      },

      {
        title: 'Web Projects ',
        projects: [
          {
            projectTitle: 'Weather',
            projectsImgUrl: 'assets/images/project-screens/weather.png',
            btnVName: 'View',
            btnVUrl: 'weather',
            btnGName: 'Github',

            btnGUrl: 'https://github.com/RMelvina/weather.git',
            // cName: ['btn view github weather https://rmelvina.github.io/weather/'],
            target: '_blank',
          },
        ],
      },
    ];
    // -----------QCA PROJECT IMAGES ARRAY-----------
    this.QCA = [
      {
        desc: 'Login Page',
        imgUrl: 'assets/images/project_1/qca_screen1.png',
      },
      {
        desc: 'Registration Page',
        imgUrl: 'assets/images/project_1/qca_screen2.png',
      },
      {
        desc: 'Main Dashboard',
        imgUrl: 'assets/images/project_1/qca_screen3.png',
      },
      {
        desc: 'Navigation drawer',
        imgUrl: 'assets/images/project_1/qca_screen4.png',
      },
      {
        desc: 'Start problem sloving coaching ',
        imgUrl: 'assets/images/project_1/qca_screen5.png',
      },
      {
        desc: 'When text is of specific length, next button appers ',
        imgUrl: 'assets/images/project_1/qca_screen8.png',
      },
      {
        desc: 'Beginning of relaxation coaching ',
        imgUrl: 'assets/images/project_1/qca_screen9.png',
      },
      {
        desc: ' Community Blog Home feed  ',
        imgUrl: 'assets/images/project_1/qca_cscreen1.png',
      },
      {
        desc: 'Blog with option to comment  ',
        imgUrl: 'assets/images/project_1/qca_cscreen3.png',
      },
      {
        desc: 'Blog with option to delete, edit, view  ',
        imgUrl: 'assets/images/project_1/qca_cscreen4.png',
      },
      {
        desc: 'Add new blog',
        imgUrl: 'assets/images/project_1/qca_cscreen5.png',
      },
    ];
    // -----------CA PROJECT IMAGES ARRAY-----------
    this.CA = [
      {
        desc: 'Categories',
        imgUrl: 'assets/images/project_2/screen1.png',
      },
      {
        desc: 'Recipes List',
        imgUrl: 'assets/images/project_2/screen2.png',
      },
      {
        desc: 'Ingredients',
        imgUrl: 'assets/images/project_2/screen3.png',
      },
    ];

    // -----------ADAS PROJECT IMAGES ARRAY-----------
    this.ADAS = [
      {
        desc: 'Login Screen',
        imgUrl: 'assets/images/project_3/adas_screen1.png',
      },
      {
        desc: 'Assessor registration',
        imgUrl: 'assets/images/project_3/registration.png',
      },
      {
        desc: 'Patient registration',
        imgUrl: 'assets/images/project_3/addpatientform.png',
      },
      {
        desc: 'Patient dashboard ',
        imgUrl: 'assets/images/project_3/assessment.png',
      },
      {
        desc: '20 test scores ',
        imgUrl: 'assets/images/project_3/result.png',
      },
      {
        desc: ' Start game ',
        imgUrl: 'assets/images/project_3/adas_guess_screen1.png',
      },
      {
        desc: ' Guess the image ',
        imgUrl: 'assets/images/project_3/adas_guess_screen4.png',
      },
      {
        desc: '  Guess the finger ',
        imgUrl: 'assets/images/project_3/guessfinger_screen1.png',
      },
      {
        desc: '  Guess the finger ',
        imgUrl: 'assets/images/project_3/guessfinger_screen2.png',
      },
    ];    
  }

  getSkills() {
    return this.skillsItems.map((skillTitle) => {
      return skillTitle;
    });
  }

  getProjects() {
    return this.projects.map((projects) => {
      return projects;
    });
  }

  getQCAProjectInforD() {
    return this.QCA.map((qca) => {
      return qca;
    });
  }

  getCAProjectsInfor(){
    return this.CA.map((ca) => {
      return ca
    })
  } 

  getADASProjectsInfor(){
    return this.ADAS.map((adas) => {
        return adas
    })
  }
}
