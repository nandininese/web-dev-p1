const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '4218e772d8mshd3036d10d2f0012p1a8adbjsnbdbc9d7a30a6',
        'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
};

const btn = document.querySelector("#summarizeBtn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector("#url").value.trim();
    const display = document.querySelector("#summary");

    // Improved URL Validation
    const urlRegex = /^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/[\w\-.~:@?^=%&:/~+#]*)?$/;

    if (!input || !urlRegex.test(input)) {
        display.innerText = "Please enter a valid URL.";
        return;
    }

    display.innerText = "Summarizing the article, please wait...";

    // Construct the API request URL
    const apiURL = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${encodeURIComponent(input)}&lang=en&engine=2`;

    fetch(apiURL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.summary) {
                display.innerText = data.summary;
            } else {
                display.innerText = "Unable to summarize the article. Please try a different URL.";
            }
        })
        .catch(error => {
            console.error(error);
            display.innerText = "An error occurred while summarizing the article. Please try again.";
        });
});