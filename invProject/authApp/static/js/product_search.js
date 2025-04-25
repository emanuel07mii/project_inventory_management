document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const columnSelect = document.getElementById("columnSelect");
    const tableBody = document.getElementById("productTableBody");
    const rows = Array.from(tableBody.getElementsByTagName("tr"));

    const debounce = (func, delay = 300) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    };

    const highlightMatch = (text, query) => {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, `<span class="highlight">$1</span>`);
    };

    const filterRows = () => {
        const query = searchInput.value.trim().toLowerCase();
        const selectedColumn = columnSelect.value;

        rows.forEach(row => {
            const cells = Array.from(row.getElementsByTagName("td"));
            let matchFound = false;

            cells.forEach((cell, index) => {
                const cellText = cell.textContent.toLowerCase();

                // Destacar ou limpar destaque
                if (query && (selectedColumn === "all" || selectedColumn == index)) {
                    if (cellText.includes(query)) {
                        cell.innerHTML = highlightMatch(cell.textContent, query);
                        if (selectedColumn === "all" || selectedColumn == index) {
                            matchFound = true;
                        }
                    } else {
                        cell.innerHTML = cell.textContent;
                    }
                } else {
                    cell.innerHTML = cell.textContent;
                }
            });

            row.style.display = matchFound || query === "" ? "" : "none";
        });
    };

    searchInput.addEventListener("input", debounce(filterRows));
    columnSelect.addEventListener("change", filterRows);
});
