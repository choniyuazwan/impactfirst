class Book {
    constructor(time, alice, bob) {
        this.time = time;
        this.alice = alice;
        this.bob = bob;
    }
}

function solve(totalChosenBooks, listBook) {
	let alice = 0, bob = 0, likeTogether = [], likeAlone = [], likeCombine = [];
	listBook.map((item, index) => {
		alice += item.alice;
		bob += item.bob;
		if(item.alice == 1 && item.bob == 1) {
			likeTogether.push({position: index+1, time: item.time, alice: item.alice, bob: item.bob});
		} else if(item.alice == 1 || item.bob == 1) {
			likeAlone.push({position: index+1, time: item.time, alice: item.alice, bob: item.bob});
		}
	})
	if(alice<totalChosenBooks || bob<totalChosenBooks) return -1;

	likeTogether.sort((a, b) => a.time-b.time);
	likeAlone.sort((a, b) => a.time-b.time);
	likeCombine = [...likeTogether, ...likeAlone];
	
	alice = 0; bob = 0;
	let timeUsed = 0, message = [];
	likeCombine.map((item) => {
		if(alice < totalChosenBooks && bob < totalChosenBooks && item.alice == 1 && item.bob == 1) {
			timeUsed += item.time;
			message.push("Alice & Bob read book " + item.position + " together.")
			alice += item.alice;
			bob += item.bob;
		} else if(alice < totalChosenBooks && item.alice == 1) {
			timeUsed += item.time;
			message.push("Alice read book " + item.position + ".")
			alice += item.alice;
		} else if(bob < totalChosenBooks && item.bob == 1) {
			timeUsed += item.time;
			message.push("Bob read book " + item.position + ".")
			bob += item.bob;
		}
	})
	
	console.log(message);
	return timeUsed;
}

totalChosenBooks = 4;
listBook = [
	new Book(7, 1, 1),
	new Book(2, 1, 1),
	new Book(4, 0, 1),
	new Book(8, 1, 1),
	new Book(1, 0, 1),
	new Book(1, 1, 1),
	new Book(1, 0, 1),
	new Book(3, 0, 0)
]

// totalChosenBooks = 2;
// listBook = [
// 	new Book(6, 0, 0),
// 	new Book(9, 0, 0),
// 	new Book(1, 0, 1),
// 	new Book(2, 1, 1),
// 	new Book(5, 1, 0),
// ]

// totalChosenBooks = 3;
// listBook = [
// 	new Book(3, 0, 0),
// 	new Book(2, 1, 0),
// 	new Book(3, 1, 0),
// 	new Book(5, 0, 1),
// 	new Book(3, 0, 1),
// ]

result = solve(totalChosenBooks, listBook)
console.log(result);