import { useTranslation } from "react-i18next";
import { Project } from "../../components/Project/Project";
import { ProjectList } from "../../components/ProjectList/ProjectList";
import { Frame, FrameTheme } from "../../components/ui/Frame/Frame";
import { PROJECTS } from "../../constants/constants";

const Projects = () => {
	const { t } = useTranslation();
	return (
		<>
			<div className="max-w-7xl mx-auto px-16 phone:px-4 mb-16">
				<h1 className="text-3xl font-semibold text-white mb-3">
					<span className="text-primary font-semibold">/</span>
					{t("projects")}
				</h1>
				<span className="phone:text-2xl">{t("List of my projects")}</span>
			</div>
			<section className="mb-20 relative">
				<div className="max-w-7xl mx-auto px-16 phone:px-4">
					<ProjectList>
						{PROJECTS.map((project) => (
							<Project key={project.title} project={project} />
						))}
					</ProjectList>
				</div>
				<Frame
					theme={FrameTheme.GRID}
					className="absolute -left-6 top-20 phone:hidden"
				/>
				<Frame
					theme={FrameTheme.NORMAL}
					className="absolute -right-14 -top-6 w-40 h-40 -z-10 tablet:hidden"
				/>
			</section>
		</>
	);
};

export default Projects;
