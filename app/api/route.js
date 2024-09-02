import { OpenAIClient, AzureKeyCredential } from '@azure/openai';
import { NextResponse } from 'next/server';

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const model = process.env.AZURE_OPENAI_MODEL;

export async function POST(req){
	
	const { messages } = await req.json();

	const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));

	messages.unshift({
		role: 'system',
		content: `You are PortfolioGPT, answering only questions based on the resume provided.
Resume:
${DATA_RESUME}

Help users learn more about Stiliyan from his resume.`
	})

	const response = await client.getChatCompletions(model, messages, {
		maxTokens: 128,
	})

	return NextResponse.json({ 
		message: response.choices[0].message.content
	 })
}

const DATA_RESUME = `Stiliyan Iliev
Address: Plovdiv, Bulgaria
Phone: +359899922036
Email: stiliyaniliev2705@gmail.com
Education: High School Peyo Yavorov, Plovdiv (2019-2024), currently studying Software Engineering at Paisii Hilendarski University of Plovdiv (first year)
Internships: Currently, I am attending the Tech Lead and Intern Academy at SoftUni, where I am working on a real-world project for a client over a period of three months.
This experience involves collaboration within a team comprising four front-end developers, three back-end developers, a UX/UI designer, and our team leader.
Skills and Competences
Full Stack Website Developer 
Front End:  HTML, CSS, JavaScript, React, Angular, jQuery, Bootstrap, REST, AJAX/API, Responsive Design
Back End:  C#, .NET, ASP.NET, SQL Server, Microservices, Entity Framework, MVC, Web API
DevOps: Azure, Docker
Platforms: Linux, Windows, Cloud, Automation
Frameworks: Stripe, Github 
Additional Skills and Interests
Language: Bulgarian - native language, Professional Working Proficiency - English
Hobbies: Piano, Fitness, Travel, Sports`

