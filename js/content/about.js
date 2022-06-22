let skillsData = [
	{
		frontend: [
			{
				icon: '<i class="fab fa-html5"></i>',
				tooltipText: 'HTML'
			},
			{
				icon: '<i class="fab fa-css3-alt"></i>',
				tooltipText: 'CSS'
			},
			{
				icon: '<i class="fab fa-sass"></i>',
				tooltipText: 'SCSS'
			},
			{
				icon: '<i class="fab fa-js-square"></i>',
				tooltipText: 'JavaScript'
			},
			{
				icon: '<i class="fab fa-react"></i>',
				tooltipText: 'React'
			},
			{
				icon:
					'<i class="fab fa-vuejs"></i>',
				tooltipText: 'Vue'
			},
			{
				icon:
					'<img loading="lazy" src="../../images/bootstrap-fill.svg" alt="bootstrap logo" class="icon-skill-img"/>',
				tooltipText: 'Bootstrap'
			}
		]
	},
	{
		backend: [
			{
				icon: '<i class="fab fa-php"></i>',
				tooltipText: 'PHP'
			},
			{
				icon: '<img loading="lazy" src="./images/icons/sql.png" alt="SQL" class="icon-skill-img"/>',
				tooltipText: 'SQL'
			},
			{
				icon: '<img loading="lazy" src="./images/icons/mysql.png" alt="MySQL" class="icon-skill-img"/>',
				tooltipText: 'MySQL'
			}
		]
	},
	{
		other: [
			{
				icon: '<i class="fab fa-wordpress"></i>',
				tooltipText: 'Wordpress'
			},
			{
				icon: '<i class="fab fa-python"></i>',
				tooltipText: 'Python'
			},
			{
				icon: '<img loading="lazy" src="./images/icons/java.png" alt="Java" class="icon-skill-img"/>',
				tooltipText: 'Java'
			},
			{
				icon: '<i class="fab fa-git-square"></i>',
				tooltipText: 'Git'
			}
		]
	}
];

let educationData = [
	{
		year: '2019',
		school: 'Treehouse Techdegree - Front-End Web Development',
		description:
			'Gained a deeper understanding of HTML, CSS, and JavaScript.  In addition, the course also covered Accessibility, Git and GitHub, Console Basics, and Web Optimization.'
	},
	{
		year: '2008 - 2013',
		school: 'University of Connecticut',
		description:
			"Received a BS in Computer Science & Engineering and a minor in Cognitive Science."
	},
];

const populateEducation = () => {
	const education = document.getElementById('timeline');

	for (const key in educationData) {
		if (educationData.hasOwnProperty(key)) {
			const element = educationData[key];
			education.innerHTML += `
                <div class="timeline-block timeline-block-right">
                    <div class="marker"></div>
                    <div class="timeline-content">
                        <h3>${element.year}</h3>
                        <span>${element.school}</span>
                        <p>${element.description}</p>
                    </div>
                </div>
            `;
		}
	}
};

const populateSkill = (tab, icon, tooltipText) => {
	tab.innerHTML += `
        <li>
            <div class="tooltip">${icon}
                <span class="tooltiptext">${tooltipText}</span>
            </div>
        </li>`;
};

const populateSkillTab = (array, type) => {
	const skillsFrontend = document.getElementById('skills-li-frontend');
	const skillsBackend = document.getElementById('skills-li-backend');
	const skillsOther = document.getElementById('skills-li-other');

	let i;
	for (i = 0; i < array.length; i++) {
		switch (type) {
			case 'FRONTEND':
				populateSkill(skillsFrontend, array[i].icon, array[i].tooltipText);
				break;
			case 'BACKEND':
				populateSkill(skillsBackend, array[i].icon, array[i].tooltipText);
				break;
			case 'OTHER':
				populateSkill(skillsOther, array[i].icon, array[i].tooltipText);
				break;
		}
	}
};

const populateSkills = () => {
	populateSkillTab(skillsData[0].frontend, 'FRONTEND');
	populateSkillTab(skillsData[1].backend, 'BACKEND');
	populateSkillTab(skillsData[2].other, 'OTHER');
};

export { populateSkills, populateEducation };
