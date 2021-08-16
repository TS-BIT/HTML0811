async function getZmones() {
    const res = await fetch("/json/zmogus");
    if (res.ok) {
        const zmones = await res.json();
        const app = document.getElementById("app");
        const ul = document.createElement("ul");
        for(const zmogus of zmones) {
            const li = document.createElement("li")
        }

    }

}