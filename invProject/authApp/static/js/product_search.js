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
