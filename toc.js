// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="introduction.html"><strong aria-hidden="true">1.</strong> Introduction</a></li><li class="chapter-item expanded "><a href="chap_01/get-started.html"><strong aria-hidden="true">2.</strong> Getting Started</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chap_01/installing-rust.html"><strong aria-hidden="true">2.1.</strong> Installing Rust</a></li><li class="chapter-item expanded "><a href="chap_01/understanding-cargo.html"><strong aria-hidden="true">2.2.</strong> Understanding Cargo</a></li><li class="chapter-item expanded "><a href="chap_01/hello-world.html"><strong aria-hidden="true">2.3.</strong> First Rust Program</a></li><li class="chapter-item expanded "><a href="chap_01/project-structure.html"><strong aria-hidden="true">2.4.</strong> Rust Project Structure</a></li><li class="chapter-item expanded "><a href="chap_01/summary.html"><strong aria-hidden="true">2.5.</strong> Summary</a></li></ol></li><li class="chapter-item expanded "><a href="chap_02/rust-fundamentals.html"><strong aria-hidden="true">3.</strong> Rust Fundamentals</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chap_02/variables.html"><strong aria-hidden="true">3.1.</strong> Variables</a></li><li class="chapter-item expanded "><a href="chap_02/data-types.html"><strong aria-hidden="true">3.2.</strong> Data Types</a></li><li class="chapter-item expanded "><a href="chap_02/functions.html"><strong aria-hidden="true">3.3.</strong> Functions</a></li><li class="chapter-item expanded "><a href="chap_02/control-flow.html"><strong aria-hidden="true">3.4.</strong> Control Flow</a></li><li class="chapter-item expanded "><a href="chap_02/operators-expresions.html"><strong aria-hidden="true">3.5.</strong> Operators and Expressions</a></li><li class="chapter-item expanded "><a href="chap_02/comments-docs.html"><strong aria-hidden="true">3.6.</strong> Comments and Documentation</a></li><li class="chapter-item expanded "><a href="chap_02/summary.html"><strong aria-hidden="true">3.7.</strong> Summary</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
