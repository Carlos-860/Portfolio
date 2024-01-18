
// Section structure scss
import sections from '../../styles/scss/structure/section.module.scss';
import React from "react";

/**
 * Structural Component
 *
 * Section / Container / Componenents / Blocks / Utils
 * returns Section structure
 */
interface SectionProps {
	classProp?: string;
	children: React.ReactNode;
	sectionId?: string;
}

const Section: React.FC<SectionProps> = ({ classProp, children, sectionId }) => {
	const _class = classProp ? classProp : '';

	return (
		<div className={`${sections.default} ${_class}`} id={sectionId}>
			{children}
		</div>
	);
};

export default Section;
