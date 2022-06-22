const CLASS_RIGHT_CONTENT = 'right-content';
const CLASS_LEFT_CONTENT = 'left-content';

export const generateId = () => {
	return Math.floor(Math.random() * Date.now());
};

// Projects data
const projects = [
	{
		id: generateId(),
		title: "The Governor's Academy",
		description:
			'The Governor’s Academy, an independent high school north of Boston. I built the website while working at Finalsite as a web developer.',
		technologies: [ 'Javascript', 'HTML/SCSS', 'jQuery' ],
		linkGithub: null,
		linkWebsite: 'https://www.thegovernorsacademy.org/',
		img: '/images/projects/project-governors.jpg',
		directionContent: CLASS_LEFT_CONTENT
	},
	{
		id: generateId(),
		title: 'West Hartford Public Schools',
		description:
			'West Hartford Public Schools is a district site providing education from K-12. I built the website while working at Finalsite as a web developer.',
		technologies: [ 'Javascript', 'HTML/SCSS', 'jQuery' ],
		linkGithub: null,
		linkWebsite: 'https://www.whps.org/',
		img: '/images/projects/project-whps.jpg',
		directionContent: CLASS_RIGHT_CONTENT
	},
	{
		id: generateId(),
		title: 'Shelton',
		description:
			'Shelton is a unique organization focused on improving the education of those individuals with learning differences. I built the website while working at Finalsite as a web developer.',
		technologies: [ 'Javascript', 'HTML/SCSS', 'jQuery', 'Bootstrap' ],
		linkGithub: null,
		linkWebsite: 'https://www.shelton.org/',
		img: '/images/projects/project-shelton.jpg',
		directionContent: CLASS_LEFT_CONTENT
	},
	{
		id: generateId(),
		title: 'NICAM',
		description:
			'At NICABM I was a front-end developer working closely together with another back-end developer building fullstack web applications to process subscription payments',
		technologies: [ 'Wordpress', 'SQL', 'Javascript', 'HTML/CSS' ],
		linkGithub: null,
		linkWebsite: 'https://www.nicabm.com/',
		img: '/images/projects/project-nicabm.jpg',
		directionContent: CLASS_RIGHT_CONTENT
	}
];

const displayProjectsDOM = () => {
	// Get element
	const container = document.getElementById('projects-container');

	for (var property in projects) {
		if (projects.hasOwnProperty(property)) {
			const element = projects[property];

			const columnImg = `
                <div class="col-lg-6" data-aos="zoom-in-right" data-aos-duration="1000">
                    <a href="${element.linkWebsite}" target="_blank"
                    rel="noreferrer"><img loading="lazy" src="${element.img}" alt="${element.title}" class="project-img"></a>
                </div>
            `;

			const columnContent = `
                <div class="col project-content ${element.directionContent}" data-aos="zoom-in-left" data-aos-duration="1000">
                    <h3 class="project-title">${element.title}</h3>
                    <div class="project-card">
                        <p class="project-description">${element.description}</p>
                    </div>
                    <ul class="horizontal-list project-tech" id="project-tech-${element.id}"></ul>
                    <ul class="horizontal-list project-links">
                        <li id="link-github-${element.id}"><a href="${element.linkGithub}" target="_blank"
                                rel="noreferrer"><i class="fab fa-github"></i></a></li>
                        <li><a href="${element.linkWebsite}" target="_blank"
                                rel="noreferrer"><i class="fas fa-external-link-alt"></i></a></li>
                    </ul>
                </div>
            `;

			// Determine direction of content (lef or right) based on class of element
			if (element.directionContent == CLASS_RIGHT_CONTENT) {
				container.innerHTML += `
                    <div class="row project">
                        ${columnImg}
                        ${columnContent}
                    </div>
                `;
			} else {
				container.innerHTML += `
                <div class="row project">
                    ${columnContent}
                    ${columnImg}
                </div>
            `;
			}

			// Populate list of tech
			const techList = document.getElementById(`project-tech-${element.id}`);
			element.technologies.forEach((element) => {
				techList.innerHTML += `<li>${element}</li>`;
			});

			// Hide github icon if there is no public repo (null)
			const linkGithub = document.getElementById(`link-github-${element.id}`);
			if (element.linkGithub == null) {
				linkGithub.style.display = 'none';
			}
		}
	}
};

/** PROJECTS PAGE */
const projectsAll = [
	{
		title: 'NICABM',
		description: "At NICABM I was a front-end developer working closely together with another back-end developer building fullstack web applications to process subscription payments",
		img: '../../images/projects/project-nicabm.jpg',
		linkWebsite: 'https://www.nicabm.com/'
	},
	{
		title: 'Dynamic Fitness Results',
		description: 'Wordpress build for a private fitness gym.',
		img: '../../images/projects/project-nicabm.jpg',
		linkWebsite: 'https://www.dynamicfitnessresults.com/'
	}
];

const displayProjectsPage = () => {
	// Push data from home page projects to this array of all projects
	projects.map((project) => {
		projectsAll.push(project);
	});

	const row = document.getElementById('projects-row');
	// Get projects and populate DOM of all projects
	projectsAll.map((project) => {
		row.innerHTML += `
        <div class="project col-4" data-aos="zoom-in-up">
            <div class="content">
                <img loading="lazy" src="${project.img}"/>
                <div class="bottom">
                    <h2 class="title">${project.title} <a href="${project.linkWebsite}" target="_blank" rel="noreferrer">
                        <i class="fas fa-external-link-alt sm-icon"></i></a></h2>
                    <p class="description">${project.description.slice(0, 65) + '...'}</p>
                </div>
            </div>
        </div>
        `;
	});
};

export { displayProjectsDOM, displayProjectsPage };
