const defaultComments = [
    { name: "Anna", text: "Sajnos ez az edzésterv nem igazán vált be nekem. Úgy érzem, hogy túl általános, és nem igazán figyel az egyéni adottságokra. Ha valaki specifikus célokat szeretne elérni, például izomtömeg-növelés vagy fogyás, akkor talán jobb lenne személyre szabott tervet keresnie." },
    { name: "Ronnie Coleman", text: "Az edzéstervet már két hónapja követem, és eddig fantasztikus eredményeket értem el! Az erőnlétem rengeteget javult, és az edzések változatosak, így sosem unalmasak. Külön tetszik, hogy a pihenőnapokat is jól beosztja!" },
    { name: "Orbán Viktor", text: "Én teljesen kezdőként vágtam bele az edzésbe, és ez a terv nagyon jól fel van építve. Lépésről lépésre vezetett, nem éreztem túlterhelőnek, de mégis érezhetően haladtam előre. Mindenkinek ajánlom, aki most szeretne formába lendülni!" },
    { name: "Sebestyén Balázs", text: "Nem ajánlom olyanoknak, akik eddig sosem sportoltak! Az első néhány nap után már fájt mindenem, és úgy éreztem, hogy egyszerűen túl sok. Jó lenne, ha lenne egy kezdő verzió is, amit fokozatosan lehetne nehezíteni." },
    { name: "Chris Bumpsted", text: "Ez az edzésterv tényleg segített, hogy ne adjam fel! Tetszik, hogy nemcsak fizikai, hanem mentális támogatást is nyújt a leírásban. Külön öröm, hogy az edzések rövidek, de intenzívek – így beférnek a zsúfolt napjaimba is."},
    { name: "Rákóczi Ferenc", text: "Az edzésterv reklámja azt ígérte, hogy néhány hét alatt látványos eredmények lesznek, de ez nem igazán jött össze. Hiányoznak belőle a részletes útmutatók, és néha túl kaotikusnak érzem. Nem érzem magam sokkal fittebbnek, és a motivációm is csökkent."}
];

function initializeComments() {
    let savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    const combinedComments = [...defaultComments, ...savedComments]; 
    localStorage.setItem("comments", JSON.stringify(savedComments)); 
    return combinedComments;
}

let comments = initializeComments();
    
function updateComments() {
    const commentsList = document.getElementById("comments-list");
    commentsList.innerHTML = "";

    comments.forEach(comment => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${comment.name}:</strong> ${comment.text}`;
        commentsList.appendChild(listItem);
    });

    const userComments = comments.filter(
        comment => !defaultComments.some(defaultComment => defaultComment.text === comment.text)
    );
    localStorage.setItem("comments", JSON.stringify(userComments));
}

document.getElementById("submit-comment").addEventListener("click", () => {
    const name = document.getElementById("user-name").value.trim();
    const text = document.getElementById("new-comment").value.trim();

    if (name === "" || text === "") {
        alert("Kérlek add meg a neved és a hozzászólásod!");
        return;
    }

    comments.push({ name, text });
    updateComments();

    document.getElementById("user-name").value = "";
    document.getElementById("new-comment").value = "";
});

updateComments();
