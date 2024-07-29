import React from "react";
import { Link } from "react-router-dom";

const MiniNavigationCrea8Items = () => {
	return (
		<>
			<li className="menu-item active">
				<Link className="menu-item-link market-icon-header-link" to="/crea8">
					<svg
						className="menu-item-link-icon icon-directory market-icon-header"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<rect
							fill="none"
							x="2"
							y="7"
							width="20"
							height="14"
							rx="2"
							ry="2"
						></rect>
						<path
							fill="none"
							d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
						></path>
					</svg>
				</Link>
			</li>

			<li className="menu-item">
				<Link className="menu-item-link" to="/crea8">
					<svg
						class="menu-item-link-icon icon-events menu-item-link-icon icon-forums career-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="20px"
					>
						<g fill="none" fill-rule="evenodd">
							<path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
							<path
								fill="currentColor"
								d="M11 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zM5 5h4v4H5zm16 0a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zm-6 0h4v4h-4zm-6 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2H5v4h4zm4 2a1 1 0 0 1 1-1h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 0 1-1-1"
							/>
						</g>
					</svg>
				</Link>
			</li>

			<li class="menu-item">
				<Link className="menu-item-link text-tooltip-tfr" to="/crea8">
					<svg
						class="menu-item-link-icon icon-events menu-item-link-icon icon-forums market-place-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
					>
						<path d="M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144s144-64.41 144-144s-64.41-144-144-144m64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32M320 96H192V64h128zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48" />
					</svg>
				</Link>
			</li>

			<li class="menu-item">
				<Link className="menu-item-link text-tooltip-tfr" to="/crea8">
					<svg
						className="menu-item-link-icon icon-events menu-item-link-icon icon-forums market-place-icon"
						xmlns="http://www.w3.org/2000/svg"
						width="1.25em"
						height="1em"
						viewBox="0 0 640 512"
					>
						<path d="M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144s144-64.41 144-144s-64.41-144-144-144m64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32M320 96H192V64h128zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48" />
					</svg>
				</Link>
			</li>
		</>
	);
};

export default MiniNavigationCrea8Items;
