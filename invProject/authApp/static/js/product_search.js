let debounceTimer;
document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('searchInput');
    const tableRows = document.querySelectorAll('tbody tr');

    input.addEventListener('input', function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const filter = input.value.toLowerCase();

            tableRows.forEach(row => {
                const rowText = row.textContent.toLowerCase();
                row.style.display = rowText.includes(filter) ? '' : 'none';
            });
        }, 300); // 300ms debounce
    });
});

function filterTable(query) {
    const rows = document.querySelectorAll('#productTableBody tr');
    const lowerQuery = query.toLowerCase();

    rows.forEach(row => {
        const cells = Array.from(row.querySelectorAll('td'));
        let match = false;

        cells.forEach(cell => {
            const text = cell.textContent.toLowerCase();
            if (text.includes(lowerQuery) && lowerQuery !== '') {
                match = true;
                cell.classList.add('highlight');
            } else {
                cell.classList.remove('highlight');
            }
        });

        row.style.display = match ? '' : 'none';
    });
}
