import stellarburger from '@images/portfolioPorjectCards/stellarburger.png';
import lindenmayerSystem from '@images/portfolioPorjectCards/lindenmayerSystem.png';
import todorun from '@images/portfolioPorjectCards/todorun.png';
import film from '@images/portfolioPorjectCards/film.png';
import quadracopter from '@images/portfolioPorjectCards/quadracopter24.png';
import webLorek from '@images/portfolioPorjectCards/web-lorek.png';
import tikTalk from '@images/portfolioPorjectCards/tik-talk.png';
import mesto from '@images/portfolioPorjectCards/mesto.png';
import puzzleAnimalGame from '@images/portfolioPorjectCards/puzzle-animal-game.png';
import { TPortfolioCard } from '../model';

const bgColor = 'rgb(29, 29, 29)';

export const portfolioCard: TPortfolioCard[] = [
	{
		logo: stellarburger,
		title: 'StellarBurger',
		link: 'https://github.com/DKMFzF/stellar-burgers.git',
		settingsView: {
			x: -250,
			y: -700,
			rotation: -6,
			bgColor
		}
	},
	{
		logo: lindenmayerSystem,
		title: 'Lindenmayer System',
		link: 'https://github.com/DKMFzF/lindenmayer-system-clean-architecture',
		settingsView: {
			x: -1750,
			y: 0,
			rotation: 20,
			bgColor
		}
	},
	{
		logo: todorun,
		title: 'ToDoRun',
		link: 'https://github.com/DKMFzF/to-do-run-django',
		settingsView: {
			x: 500,
			y: -700,
			rotation: 0,
			bgColor
		}
	},
	{
		logo: film,
		link: 'https://github.com/DKMFzF/film-mvc-event',
		settingsView: {
			x: -1300,
			y: -250,
			rotation: -5,
			bgColor
		}
	},
	{
		logo: quadracopter,
		title: 'Quadracopter24',
		link: 'https://github.com/DKMFzF/Quadracopter24-service',
		settingsView: {
			x: 1100,
			y: -700,
			rotation: -20,
			bgColor
		}
	},
	{
		logo: webLorek,
		link: 'https://github.com/DKMFzF/web-larek-MVC.git',
		settingsView: {
			x: -2300,
			y: 150,
			rotation: -20,
			bgColor
		}
	},
	{
		logo: tikTalk,
		link: 'https://github.com/DKMFzF/tik-talk',
		settingsView: {
			x: -900,
			y: -700,
			rotation: 16,
			bgColor
		}
	},
	{
		logo: mesto,
		link: 'https://github.com/DKMFzF/mesto-project-ff',
		settingsView: {
			x: -2000,
			y: 400,
			rotation: -15,
			bgColor
		}
	},
	{
		logo: puzzleAnimalGame,
		title: 'Puzzle Animal Game',
		link: 'https://github.com/DKMFzF/puzzle-animal-game-clean-architecture',
		settingsView: {
			x: 1800,
			y: 0,
			rotation: 30,
			bgColor
		}
	}
];
