document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-item");
    const content = document.getElementById("content");

    navItems.forEach(item => {
        item.addEventListener("click", async (event) => {
            event.preventDefault();
            const kingKey = item.getAttribute("data-king");

            try {
                const response = await fetch("../data/db.json");
                if (!response.ok) throw new Error("Failed to load data");

                const kings = await response.json();
                if (kings[kingKey]) {
                    content.innerHTML = `
                        <h2>${kings[kingKey].name}</h2>
                        <p>${kings[kingKey].description}</p>
                        <button id="back-btn">Back</button>
                    `;

                    document.getElementById("back-btn").addEventListener("click", () => {
                        content.innerHTML = `<h4>დააჭირეთ მეფის სახელს, რათა იხილოთ ინფორმაცია.</h4>`;
                    });
                }
            } catch (error) {
                console.error("Error fetching king data:", error);
                content.innerHTML = "<p>ინფორმაციის ჩატვირთვა ვერ მოხერხდა.</p>";
            }
        });
    });


    document.getElementById('exit').addEventListener('click', () => {
        window.location.href = '../login/login.html';
    });
});
