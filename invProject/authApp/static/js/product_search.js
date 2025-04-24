document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const tableBody = document.getElementById("productTableBody");
    const rows = Array.from(tableBody.getElementsByTagName("tr"));

    rows.forEach(row => {
        const cells = Array.from(row.getElementsByTagName("td"));
        cells.forEach(cell => {
            cell.setAttribute("data-original", cell.textContent);
        });
    });

    const debounce = (func, delay = 300) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    };

    const highlightMatch = (text, query) => {
        const regex = new RegExp(`(${query})`, 'gi');
        const escaped = text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        return escaped.replace(regex, `<span class="highlight">$1</span>`);
    };

    const filterRows = () => {
        const query = searchInput.value.trim().toLowerCase();

        rows.forEach(row => {
            const cells = Array.from(row.getElementsByTagName("td"));
            let matchFound = false;

            cells.forEach(cell => {
                const originalText = cell.getAttribute("data-original");
                const lowerOriginal = originalText.toLowerCase();

                if (query && lowerOriginal.includes(query)) {
                    matchFound = true;
                    cell.innerHTML = highlightMatch(originalText, query);
                } else {
                    cell.innerHTML = originalText; // restaura original sem destaque
                }
            });

            row.style.display = matchFound || query === "" ? "" : "none";
        });
    };

    searchInput.addEventListener("input", debounce(filterRows));
});
