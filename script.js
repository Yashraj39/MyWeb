document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('SearchButton');
    const searchInput = document.getElementById('SearchInput');
    const playlists = document.querySelectorAll('.playlist');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();

        playlists.forEach(playlist => {
            const h2Tag = playlist.querySelector('h2');
            const card = playlist.querySelector('.card');
            const items = card.querySelectorAll('.item');
            let hasMatchingItems = false;

            // Hide the h2 tag initially
            if (h2Tag) {
                h2Tag.style.display = 'none';
            }

            items.forEach(item => {
                const h3Tag = item.querySelector('h3');
                const h3Text = h3Tag ? h3Tag.textContent.toLowerCase() : '';

                if (h3Text.includes(query)) {
                    item.style.display = ''; // Show item
                    hasMatchingItems = true;
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });

            // Only show the playlist if there are matching items
            if (hasMatchingItems) {
                playlist.style.display = ''; // Show playlist
                if (h2Tag) {
                    h2Tag.style.display = ''; // Show h2 tag if there are matching items
                }
            } else {
                playlist.style.display = 'none'; // Hide playlist if no matching items
            }
        });
    });
});
