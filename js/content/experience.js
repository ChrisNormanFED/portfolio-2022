import { generateId } from '../content/projects.js';

const experienceData = [
	{
		id: generateId(),
		elemId: 'finalsite-content',
		company: 'Finalsite',
		companyLogoUrl: '/images/finalsite_logo.jpg',
		role: 'Frontend Developer & Manager',
		date: 'June 2014 - Now',
		roles: [
			'Deploy complex, multi-phased sites for high profile education clients. Including converting media assets from Photoshop, Illustrator, Sketch, and Figma to create ADA-compliant HTML and accompanying CSS and SASS files.',
			'Projects include coding JavaScript files with Grunt, Gulp, and Webpack, using multiple integrated development environments, such as VS Code and ATOM.',
			'Maintain code versions with BitBucket via Sourcetree.',
			'Provide coaching, guidance, and career development for my team.',
			'Collaborate across departments to ensure our product and processes represent the voice and needs of our customers.',
			'Act as a final point of escalation for complex customer incidents and inquiries.'
		],
		tech: [ 'HTML/CSS', 'SCSS', 'jQuery', 'React' ]
	},
	{
		id: generateId(),
		elemId: 'nicabm-content',
		company: 'NICABM',
		companyLogoUrl: '/images/nicabm_logo.jpg',
		role: 'Developer & Graphic Designer',
		date: 'January 2011 - June 2014',
		roles: [
			'Built and maintained website by implementing new features, adding content, and redesigning various sections.',
			'Improved SEO/performance and analyzed trends based on data from tools such as Google Analytics and Hotjar to improve conversion rates.',
			'Maintained the database and documention for both the front-end and back-end of the interactive dashboard.',
			'Assisted with the development and analysis of their marketing and responsible for creating innovative logos, pamphlets, brochures, and web-based images.'
		],
		tech: [ 'HTML/CSS', 'Javascript', 'SQL', 'PHP', 'Java' ]
	},
	{
		id: generateId(),
		elemId: 'techsupport-content',
		company: 'Dynamic Fitness Results',
		companyLogoUrl: '/images/uconn-logo.jpg',
		role: 'Frontend Developer',
		date: 'January 2013',
		roles: [
			'Built a few WordPress websites and improved each website based on testing and user feedback by adding new features.',
			'Improved SEO/performance and analyzed trends based on data from tools such as Google Analytics and Hotjar to improve the conversion rates.'
		],
		tech: [ 'Wordpress', 'HTML', 'SCSS', 'Javascript' ]
	},
	{
		id: generateId(),
		elemId: 'techsupport-content',
		company: 'UConn Technology Support Center',
		companyLogoUrl: '/images/uconn-logo.jpg',
		role: 'Technology Assistant',
		date: 'December 2009 - January 2011',
		roles: [
			'IT support, bug fixing, and maintaining their website.',
			'Worked with the university community to help provide direct assistance to students via peer tutoring, workshops, on-demand assistance, and the creation of innovative learning modules.',
			'Utilized the Adobe Suite, speciﬁcally Adobe Captivate, to create online tutorials to assist students with academic information technology.'
		],
		tech: [ 'HTML', 'SCSS', 'Javascript' ]
	}
];

const displayEducationDOM = () => {
	const contentExperience = document.getElementById('content-experience');

	experienceData.map((item, index) => {
		contentExperience.innerHTML += `
            <div id="${item.elemId}" class="tabcontent-vertical">
                <h4 class="job-title">${item.role}<img loading="lazy" src="${item.companyLogoUrl}" class="img-company-logo"></h4>
                <p class="job-date">${item.date}</p>
                <ul class="job-activities">
                    ${populateList(item, 'activities')}
                </ul>
                <h6 class="job-tech">Used technologies:</h6>
                <ul class="horizontal-list">
                    ${populateList(item, 'tech')}
                </ul>
            </div>
        `;

		// If property item default open is true then display that tab, the rest is hidden at first
		if (index == 0) {
			document.getElementById(item.elemId).style.display = 'block';
		}
	});
};

const populateList = (item, type) => {
	let listElement = '';
	switch (type) {
		case 'activities':
			for (let i = 0; i < item.roles.length; i++) {
				listElement += `<li><span>${item.roles[i]}</span></li>`;
			}
			return listElement;
		case 'tech':
			for (let i = 0; i < item.tech.length; i++) {
				listElement += `<li>${item.tech[i]}</li>`;
			}
			return listElement;
		default:
			break;
	}
};

export { displayEducationDOM };
