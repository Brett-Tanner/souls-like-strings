class HeadingAnchors extends HTMLElement {
	constructor() {
		super();
		this.tableOfContents = document.getElementById("table-of-contents");
	}

	static register() {
		if ("customElements" in window) {
			customElements.define("heading-anchors", HeadingAnchors);
		}
	}

	connectedCallback() {
		const headings = document.querySelectorAll("h2[id]");
		if (headings.length > 1) {
			this.tableOfContents.classList.remove("hidden");
			headings.forEach((heading) => {
				this.anchorifyHeading(heading);
				this.tableOfContents.appendChild(this.tableOfContentsLink(heading));
			});
		}
	}

	anchorifyHeading(heading) {
		const clonedHeading = heading.cloneNode(true);
		if (!clonedHeading.hasAttribute("tabindex")) {
			clonedHeading.setAttribute("tabindex", -1);
		}

		const anchor = document.createElement("a");
		anchor.href = `#${heading.id}`;
		anchor.classList.add("heading-link");
		anchor.innerHTML = this.linkSvg();

		anchor.appendChild(clonedHeading);
		heading.replaceWith(anchor);
	}

	tableOfContentsLink(heading) {
		const link = document.createElement("a");
		link.href = `#${heading.id}`;
		link.textContent = heading.textContent;
		return link;
	}

	linkSvg() {
		return `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>`;
	}
}

HeadingAnchors.register();
