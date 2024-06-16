// promises

function createRandomNumberPromise() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        let n = Math.random();
        console.log('Nombre aléatoire après 3 secondes:', n);
        if (n > 0.5) {
            resolve(n);
        } else {
            reject(n);
        }
    }, 3000);
});
}
let p = createRandomNumberPromise();

p.then((n) => {
    console.log(`Le nombre ${n} est supérieur à 0.5, la promesse est tenue`);
}).catch((n) => {
    console.log(`Le nombre ${n} est inférieur à 0.5, la promesse n'est pas tenue`);
});


let number = Math.random();
console.log("Random number is ", number);
function getRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number > 0.5) {
                resolve({ message: "Number is > 0.5", number });
            } else {
                reject({ message: "Number is < 0.5", number });
            }
        }, 1000);
    });
}


let x = getRandomNumber();

    x.then(result => {
        console.log("Promise fulfilled", result.message, result.number);
    })
    x.catch(error => {
        console.log("Promise failed", error.message, error.number);
    });


let promesse = new Promise((resolve, reject) => {
    var ajax = new XMLHttpRequest();
    var url = "https://reqres.in/api/users/9";
    ajax.open("GET", url, true );
    ajax.onload = function() {
        if (this.status == 200) {
            resolve(this.response);
        } else {
            reject("HTTP error", this.status);
        }
    }
    ajax.send();
});

async function ajaxAsync() {
    try {
        const getUser = await promesse;
        console.log(getUser);
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}
ajaxAsync();




document.getElementById('fetchUserButton').addEventListener("click", function() {
    document.getElementById('userData').innerText = 'Récupération en cours..';
})