document.addEventListener("DOMContentLoaded", () => {

    const search =
        document.getElementById("globalSearch");

    if (search) {

        search.addEventListener("keydown", event => {

            if (event.key === "Enter") {

                const query =
                    search.value.trim();

                if (!query) return;

                window.location =
                    `styles.html?search=${encodeURIComponent(query)}`;

            }

        });

    }


    document.addEventListener("keydown", event => {

        if (
            (event.ctrlKey || event.metaKey) &&
            event.key.toLowerCase() === "k"
        ) {

            event.preventDefault();

            const input =
                document.querySelector(
                    "#globalSearch, #styleSearch"
                );

            if (input) {

                input.focus();
                input.select();

            }

        }

    });


    const params =
        new URLSearchParams(window.location.search);

    const searchQuery =
        params.get("search");

    const styleSearch =
        document.getElementById("styleSearch");

    if (styleSearch && searchQuery) {

        styleSearch.value = searchQuery;

        styleSearch.dispatchEvent(
            new Event("input")
        );

    }

});
